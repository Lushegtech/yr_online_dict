const { PrismaClient } = require('../src/generated/prisma');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Initialize Prisma Client
const prisma = new PrismaClient();

// Path to examples CSV and words CSV
const EXAMPLES_CSV = path.join(process.cwd(), 'scraped_data', 'all_yoruba_words_examples.csv');
const WORDS_CSV = path.join(process.cwd(), 'scraped_data', 'all_yoruba_words_words.csv');

async function retryOperation(operation, maxRetries = 3) {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      return await operation();
    } catch (error) {
      if (error.code === 'P1001' || error.code === 'P1017') {
        retries++;
        console.log(`Connection error. Retrying operation (${retries}/${maxRetries})...`);
        // Exponential backoff: 1s, 2s, 4s
        await new Promise(r => setTimeout(r, 1000 * Math.pow(2, retries - 1)));
      } else {
        throw error;
      }
    }
  }
  throw new Error(`Failed after ${maxRetries} retries`);
}

async function importExamples() {
  console.log('Starting import of all example sentences...');

  try {
    // Get current example count
    const existingCount = await prisma.example.count();
    console.log(`Found ${existingCount} existing examples in the database`);

    // Load words from CSV to create mapping between old ID and word text
    console.log('Loading word ID mapping from CSV...');
    const wordIdToText = new Map();
    
    await new Promise((resolve, reject) => {
      fs.createReadStream(WORDS_CSV)
        .pipe(csv())
        .on('data', (data) => {
          if (data.id && data.word) {
            wordIdToText.set(data.id, data.word.trim());
          }
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });
    
    console.log(`Loaded ${wordIdToText.size} words from CSV`);

    // Create a map of word text to database ID
    console.log('Creating database word mapping...');
    const wordTextToDbId = new Map();
    
    // Load in batches to avoid memory issues
    let skip = 0;
    const batchSize = 1000;
    let hasMore = true;
    
    while (hasMore) {
      const words = await prisma.word.findMany({
        select: { id: true, word: true },
        skip,
        take: batchSize,
      });
      
      if (words.length === 0) {
        hasMore = false;
      } else {
        words.forEach(w => wordTextToDbId.set(w.word.toLowerCase(), w.id));
        skip += words.length;
        console.log(`Loaded ${skip} words from database into map`);
      }
    }
    
    console.log(`Word text to database ID map created with ${wordTextToDbId.size} entries`);

    // Process examples in optimized chunks
    console.log('Reading examples file...');
    let totalExamples = 0;
    let importedExamples = 0;
    let skippedExamples = 0;
    let errorExamples = 0;
    let notFoundWords = 0;
    
    // Get unique existing example word+sentence combinations to avoid duplicates
    console.log('Creating existing examples map to avoid duplicates...');
    const existingExamples = new Map();
    
    // Load in batches to avoid memory issues
    skip = 0;
    hasMore = true;
    
    while (hasMore) {
      const examples = await prisma.example.findMany({
        select: { wordId: true, yorubaSentence: true },
        skip,
        take: batchSize,
      });
      
      if (examples.length === 0) {
        hasMore = false;
      } else {
        examples.forEach(e => {
          const key = `${e.wordId}-${e.yorubaSentence}`;
          existingExamples.set(key, true);
        });
        skip += examples.length;
        console.log(`Loaded ${skip} existing examples into map`);
      }
    }
    
    console.log(`Existing examples map created with ${existingExamples.size} entries`);

    // Function to process a batch of examples
    async function processExampleBatch(batch) {
      const validExamples = [];
      
      for (const example of batch) {
        // First get the word text from the old ID
        const wordText = wordIdToText.get(example.oldWordId);
        if (!wordText) {
          skippedExamples++;
          if (skippedExamples % 1000 === 0) {
            console.log(`[DEBUG] Example skipped because word ID '${example.oldWordId}' not found in words CSV`);
          }
          continue;
        }
        
        // Then get the database ID from the word text
        const dbWordId = wordTextToDbId.get(wordText.toLowerCase());
        if (!dbWordId) {
          notFoundWords++;
          skippedExamples++;
          if (skippedExamples % 1000 === 0) {
            console.log(`[DEBUG] Example skipped because word text '${wordText}' not found in database`);
          }
          continue;
        }
        
        example.wordId = dbWordId;
        
        const key = `${dbWordId}-${example.yorubaSentence}`;
        if (existingExamples.has(key)) {
          skippedExamples++;
          if (skippedExamples % 1000 === 0) {
            console.log(`[DEBUG] Example skipped because it already exists: ${key}`);
          }
          continue;
        }
        
        validExamples.push(example);
      }
      
      if (validExamples.length === 0) {
        return;
      }
      
      // Break into smaller chunks for transactions
      const CHUNK_SIZE = 25;
      const chunks = [];
      
      for (let i = 0; i < validExamples.length; i += CHUNK_SIZE) {
        chunks.push(validExamples.slice(i, i + CHUNK_SIZE));
      }
      
      for (const chunk of chunks) {
        try {
          await retryOperation(async () => {
            await prisma.$transaction(async (tx) => {
              for (const example of chunk) {
                await tx.example.create({
                  data: {
                    yorubaSentence: example.yorubaSentence,
                    translation: example.translation,
                    wordId: example.wordId,
                  },
                });
                
                // Add to existing examples map to prevent future duplicates
                const key = `${example.wordId}-${example.yorubaSentence}`;
                existingExamples.set(key, true);
              }
            });
          });
          
          importedExamples += chunk.length;
        } catch (error) {
          console.error('Error importing example batch:', error);
          errorExamples += chunk.length;
        }
      }
    }

    // Read and process the examples file
    const BATCH_SIZE = 500;
    let currentBatch = [];
    
    await new Promise((resolve, reject) => {
      fs.createReadStream(EXAMPLES_CSV)
        .pipe(csv())
        .on('data', async (data) => {
          totalExamples++;
          
          // Transform raw CSV row to our format
          // Updated to match the actual CSV column names
          const example = {
            oldWordId: data.word_id,
            yorubaSentence: data.yoruba_text?.trim() || '',
            translation: data.english_text?.trim() || '',
          };
          
          currentBatch.push(example);
          
          if (currentBatch.length >= BATCH_SIZE) {
            // Pause the stream to process the batch
            const batchToProcess = [...currentBatch];
            currentBatch = [];
            
            await processExampleBatch(batchToProcess);
            
            if (totalExamples % 5000 === 0 || importedExamples % 5000 === 0) {
              console.log(`Processed ${totalExamples} examples (Imported: ${importedExamples}, Skipped: ${skippedExamples}, Errors: ${errorExamples}, Words not found: ${notFoundWords})`);
            }
          }
        })
        .on('end', async () => {
          if (currentBatch.length > 0) {
            await processExampleBatch(currentBatch);
          }
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });

    console.log('\nExample import completed!');
    console.log(`Total examples processed: ${totalExamples}`);
    console.log(`Examples imported: ${importedExamples}`);
    console.log(`Examples skipped (duplicate or invalid): ${skippedExamples}`);
    console.log(`Examples with errors: ${errorExamples}`);
    console.log(`Words not found in database: ${notFoundWords}`);
    
    // Final count
    const finalCount = await prisma.example.count();
    console.log(`Total examples in database: ${finalCount}`);
    
  } catch (error) {
    console.error('Import failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

importExamples().catch(console.error); 