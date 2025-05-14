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
      retries++;
      console.log(`Database operation error. Retrying operation (${retries}/${maxRetries})...`);
      console.log(`Error: ${error.message}`);
      // Exponential backoff: 1s, 2s, 4s
      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, retries - 1)));
    }
  }
  throw new Error(`Failed after ${maxRetries} retries`);
}

async function importExamples() {
  console.log('Starting import of all example sentences using simplified approach...');

  try {
    // Get current example count
    const existingCount = await retryOperation(() => prisma.example.count());
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
    
    // Load all words at once for smaller databases
    const words = await retryOperation(() => 
      prisma.word.findMany({
        select: { id: true, word: true },
      })
    );
    
    words.forEach(w => wordTextToDbId.set(w.word.toLowerCase(), w.id));
    console.log(`Word text to database ID map created with ${wordTextToDbId.size} entries`);

    // Get unique existing example combinations to avoid duplicates
    console.log('Creating existing examples map to avoid duplicates...');
    const existingExamples = new Map();
    
    // For smaller databases, load all at once
    const examples = await retryOperation(() => 
      prisma.example.findMany({
        select: { wordId: true, yorubaSentence: true },
      })
    );
    
    examples.forEach(e => {
      const key = `${e.wordId}-${e.yorubaSentence}`;
      existingExamples.set(key, true);
    });
    
    console.log(`Existing examples map created with ${existingExamples.size} entries`);

    // Process examples in optimized chunks
    console.log('Reading examples file...');
    let totalExamples = 0;
    let importedExamples = 0;
    let skippedExamples = 0;
    let errorExamples = 0;
    let notFoundWords = 0;

    // Read and process the examples file
    const allExamples = [];
    
    // First load all examples into memory
    await new Promise((resolve, reject) => {
      fs.createReadStream(EXAMPLES_CSV)
        .pipe(csv())
        .on('data', (data) => {
          totalExamples++;
          
          const example = {
            oldWordId: data.word_id,
            yorubaSentence: data.yoruba_text?.trim() || '',
            translation: data.english_text?.trim() || '',
          };
          
          allExamples.push(example);
          
          if (totalExamples % 10000 === 0) {
            console.log(`Loaded ${totalExamples} examples from CSV`);
          }
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });
    
    console.log(`Loaded ${allExamples.length} total examples from CSV file`);
    
    // Process in small batches to avoid transaction timeouts
    const BATCH_SIZE = 10; // Very small batch size to avoid timeout issues
    const processedExamples = [];
    
    // Keep track of where we left off
    const startFrom = importedExamples + skippedExamples;
    console.log(`Starting from example ${startFrom} out of ${allExamples.length}`);
    
    for (let i = startFrom; i < allExamples.length; i++) {
      const example = allExamples[i];
      
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
      
      const key = `${dbWordId}-${example.yorubaSentence}`;
      if (existingExamples.has(key)) {
        skippedExamples++;
        if (skippedExamples % 1000 === 0) {
          console.log(`[DEBUG] Example skipped because it already exists: ${key}`);
        }
        continue;
      }
      
      // Add to processed examples
      processedExamples.push({
        wordId: dbWordId,
        yorubaSentence: example.yorubaSentence,
        translation: example.translation
      });
      
      // Process in small batches
      if (processedExamples.length >= BATCH_SIZE) {
        try {
          // Process each example individually instead of in a transaction
          for (const validExample of processedExamples) {
            try {
              await retryOperation(() => 
                prisma.example.create({
                  data: validExample
                })
              );
              importedExamples++;
            } catch (error) {
              console.error(`Error importing example: ${error.message}`);
              errorExamples++;
            }
          }
          
          // Clear the batch
          processedExamples.length = 0;
          
          if (importedExamples % 100 === 0) {
            console.log(`Processed ${i+1}/${allExamples.length} examples (Imported: ${importedExamples}, Skipped: ${skippedExamples}, Errors: ${errorExamples}, Words not found: ${notFoundWords})`);
          }
        } catch (batchError) {
          console.error(`Batch error: ${batchError.message}`);
          errorExamples += processedExamples.length;
          processedExamples.length = 0;
        }
      }
    }
    
    // Process any remaining examples
    if (processedExamples.length > 0) {
      try {
        for (const validExample of processedExamples) {
          try {
            await retryOperation(() => 
              prisma.example.create({
                data: validExample
              })
            );
            importedExamples++;
          } catch (error) {
            console.error(`Error importing example: ${error.message}`);
            errorExamples++;
          }
        }
      } catch (batchError) {
        console.error(`Final batch error: ${batchError.message}`);
        errorExamples += processedExamples.length;
      }
    }

    console.log('\nExample import completed!');
    console.log(`Total examples processed: ${totalExamples}`);
    console.log(`Examples imported: ${importedExamples}`);
    console.log(`Examples skipped (duplicate or invalid): ${skippedExamples}`);
    console.log(`Examples with errors: ${errorExamples}`);
    console.log(`Words not found in database: ${notFoundWords}`);
    
    // Final count
    const finalCount = await retryOperation(() => prisma.example.count());
    console.log(`Total examples in database: ${finalCount}`);
    
  } catch (error) {
    console.error('Import failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

importExamples().catch(console.error); 