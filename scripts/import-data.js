const { PrismaClient } = require('../src/generated/prisma');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Initialize Prisma Client
const prisma = new PrismaClient();

// Main paths
const DATA_DIR = path.join(process.cwd(), 'scraped_data');
const WORDS_CSV = path.join(DATA_DIR, 'all_yoruba_words_words.csv');
const TRANSLATIONS_CSV = path.join(DATA_DIR, 'all_yoruba_words_translations.csv');
const EXAMPLES_CSV = path.join(DATA_DIR, 'all_yoruba_words_examples.csv');

// Yorùbá alphabet (for categorization)
const yorubaAlphabet = [
  'a', 'b', 'd', 'e', 'ẹ', 'f', 'g', 'gb', 'h', 'i', 
  'j', 'k', 'l', 'm', 'n', 'o', 'ọ', 'p', 'r', 's', 
  'ṣ', 't', 'u', 'w', 'y'
];

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

async function main() {
  console.log('Starting dictionary import...');
  
  try {
    // 1. Create or get alphabet entries
    console.log('Setting up alphabet entries...');
    const alphabetMap = new Map();
    
    // Find existing alphabets first
    const existingAlphabets = await prisma.alphabet.findMany();
    
    for (const alphabet of existingAlphabets) {
      alphabetMap.set(alphabet.letter, alphabet.id);
      console.log(`Found existing alphabet entry for: ${alphabet.letter}`);
    }
    
    // Create any missing alphabets
    for (const letter of yorubaAlphabet) {
      if (!alphabetMap.has(letter)) {
        try {
          const alphabet = await prisma.alphabet.create({
            data: {
              letter,
            },
          });
          alphabetMap.set(letter, alphabet.id);
          console.log(`Created alphabet entry for: ${letter}`);
        } catch (error) {
          if (error.code === 'P2002') {
            // Unique constraint error - the alphabet was created by another process
            const alphabet = await prisma.alphabet.findUnique({
              where: { letter }
            });
            if (alphabet) {
              alphabetMap.set(letter, alphabet.id);
              console.log(`Found alphabet entry for: ${letter}`);
            }
          } else {
            throw error;
          }
        }
      }
    }
    
    // Check if we need to proceed with import
    console.log('Checking for existing data...');
    const wordCount = await prisma.word.count();
    
    if (wordCount > 0) {
      const continueImport = true; // For automated script, assume yes
      console.log(`Found ${wordCount} existing words in the database.`);
      
      if (!continueImport) {
        console.log('Import skipped. Use --force to override.');
        return;
      }
      console.log('Continuing with import...');
    }
    
    // 2. Import words
    console.log('Importing words...');
    const wordMap = new Map();
    const words = [];
    
    await new Promise((resolve, reject) => {
      fs.createReadStream(WORDS_CSV)
        .pipe(csv())
        .on('data', (data) => {
          if (data.status === 'success') {
            words.push(data);
          }
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });
    
    // Process words in batches to avoid memory issues
    const BATCH_SIZE = 100;
    const wordBatches = [];
    
    for (let i = 0; i < words.length; i += BATCH_SIZE) {
      wordBatches.push(words.slice(i, i + BATCH_SIZE));
    }
    
    let wordCounter = 0;
    for (const batch of wordBatches) {
      await Promise.all(
        batch.map(async (wordRecord) => {
          const word = wordRecord.word.trim();
          
          // Determine alphabet category
          let alphabetId = null;
          const firstLetter = word.toLowerCase().charAt(0);
          const secondLetter = word.toLowerCase().charAt(1);
          
          // Check for 'gb' special case
          if (firstLetter === 'g' && secondLetter === 'b') {
            alphabetId = alphabetMap.get('gb') || null;
          } else {
            // Normalize to handle accents
            const normalizedLetter = firstLetter.normalize('NFD').charAt(0);
            alphabetId = alphabetMap.get(normalizedLetter) || null;
          }
          
          try {
            const createdWord = await prisma.word.create({
              data: {
                word,
                alphabetId,
                // Extract pronunciation from special characters or mark for future processing
                tonalMarks: word !== word.normalize('NFD').replace(/[\u0300-\u036f]/g, '') 
                  ? word.normalize('NFD').replace(/[^\u0300-\u036f]/g, '') 
                  : null,
              },
            });
            
            wordMap.set(wordRecord.id, createdWord.id);
            wordCounter++;
            
            if (wordCounter % 100 === 0) {
              console.log(`Imported ${wordCounter} words`);
            }
          } catch (error) {
            console.error(`Error importing word: ${word}`, error);
          }
        })
      );
    }
    
    console.log(`Imported ${wordCounter} words successfully`);
    
    // 3. Import translations
    console.log('Importing translations...');
    let translationCounter = 0;
    const translations = [];
    
    await new Promise((resolve, reject) => {
      fs.createReadStream(TRANSLATIONS_CSV)
        .pipe(csv())
        .on('data', (data) => {
          translations.push(data);
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });
    
    // Process translations in batches
    const translationBatches = [];
    for (let i = 0; i < translations.length; i += BATCH_SIZE) {
      translationBatches.push(translations.slice(i, i + BATCH_SIZE));
    }
    
    // Track part of speech counts for each word
    const wordPosCount = {};
    
    for (const batch of translationBatches) {
      await Promise.all(
        batch.map(async (translationRecord) => {
          const wordId = wordMap.get(translationRecord.word_id);
          
          if (!wordId) {
            return; // Skip if word not found
          }
          
          // Store part of speech for the word
          if (translationRecord.part_of_speech) {
            if (!wordPosCount[wordId]) {
              wordPosCount[wordId] = {};
            }
            const pos = translationRecord.part_of_speech;
            wordPosCount[wordId][pos] = (wordPosCount[wordId][pos] || 0) + 1;
          }
          
          try {
            // Try to directly include the partOfSpeech field first
            try {
              await prisma.translation.create({
                data: {
                  text: translationRecord.translation.trim(),
                  language: 'en', // Default language
                  partOfSpeech: translationRecord.part_of_speech || null,
                  wordId,
                },
              });
              
              translationCounter++;
              
              if (translationCounter % 500 === 0) {
                console.log(`Imported ${translationCounter} translations`);
              }
            } catch (createError) {
              if (createError.message.includes('Unknown argument `partOfSpeech`')) {
                // Fallback to creating without part of speech first, then updating
                const translation = await prisma.translation.create({
                  data: {
                    text: translationRecord.translation.trim(),
                    language: 'en', // Default language
                    wordId,
                  },
                });
                
                // If part of speech is available, update the translation record
                if (translationRecord.part_of_speech) {
                  try {
                    await prisma.$executeRaw`
                      UPDATE "Translation"
                      SET "partOfSpeech" = ${translationRecord.part_of_speech}
                      WHERE id = ${translation.id}
                    `;
                  } catch (updateError) {
                    console.error(`Error updating part of speech: ${updateError.message}`);
                  }
                }
                
                translationCounter++;
                
                if (translationCounter % 500 === 0) {
                  console.log(`Imported ${translationCounter} translations`);
                }
              } else {
                throw createError; // Re-throw if it's not the specific error we're handling
              }
            }
          } catch (error) {
            console.error(`Error importing translation: ${translationRecord.translation}`, error);
          }
        })
      );
    }
    
    console.log(`Imported ${translationCounter} translations successfully`);
    
    // Update words with their most common part of speech
    console.log('Updating words with part of speech...');
    let wordPosCounter = 0;
    
    // Prepare batches of words to update
    const wordPosEntries = Object.entries(wordPosCount);
    const wordPosBatches = [];
    const POS_BATCH_SIZE = 50; // Smaller batch size to avoid timeouts
    
    for (let i = 0; i < wordPosEntries.length; i += POS_BATCH_SIZE) {
      wordPosBatches.push(wordPosEntries.slice(i, i + POS_BATCH_SIZE));
    }
    
    console.log(`Prepared ${wordPosBatches.length} batches for part of speech updates`);
    
    for (const batch of wordPosBatches) {
      try {
        await prisma.$transaction(
          batch.map(([wordId, posCounts]) => {
            // Find the most common part of speech
            let mostCommonPos = null;
            let highestCount = 0;
            
            for (const [pos, count] of Object.entries(posCounts)) {
              if (count > highestCount) {
                mostCommonPos = pos;
                highestCount = count;
              }
            }
            
            if (mostCommonPos) {
              wordPosCounter++;
              return prisma.word.update({
                where: { id: wordId },
                data: { partOfSpeech: mostCommonPos }
              });
            }
            
            // Return a dummy promise that resolves immediately if we don't need to update
            return Promise.resolve();
          })
        );
        
        console.log(`Updated batch of ${batch.length} words with part of speech`);
      } catch (batchError) {
        console.error(`Error updating batch of word part of speech: ${batchError.message}`);
      }
    }
    
    console.log(`Updated ${wordPosCounter} words with part of speech successfully`);
    
    // 4. Import examples - with resume capability and transaction batching
    console.log('Importing examples...');

    // Check for existing examples to enable resuming
    const existingExampleCount = await prisma.example.count();
    console.log(`Found ${existingExampleCount} existing examples`);

    // Only proceed if we need to import more examples
    if (existingExampleCount === 0) {
      let exampleCounter = 0;
      const examples = [];

      // Read examples into memory in chunks
      await new Promise((resolve, reject) => {
        fs.createReadStream(EXAMPLES_CSV)
          .pipe(csv())
          .on('data', (data) => {
            // Only keep examples where we have the word ID
            if (wordMap.has(data.word_id)) {
              examples.push({
                wordId: wordMap.get(data.word_id),
                yorubaSentence: data.yoruba_sentence?.trim() || '',
                translation: data.translation?.trim() || ''
              });
            }
          })
          .on('end', () => {
            resolve();
          })
          .on('error', (error) => {
            reject(error);
          });
      });

      console.log(`Loaded ${examples.length} valid examples`);

      // Process examples in optimized batches
      const EXAMPLE_BATCH_SIZE = 100; // Larger batch size for better performance
      const exampleBatches = [];

      for (let i = 0; i < examples.length; i += EXAMPLE_BATCH_SIZE) {
        exampleBatches.push(examples.slice(i, i + EXAMPLE_BATCH_SIZE));
      }

      for (let i = 0; i < exampleBatches.length; i++) {
        const batch = exampleBatches[i];
        try {
          // Use Prisma's createMany for much faster bulk inserts
          // This avoids the overhead of individual inserts
          await retryOperation(async () => {
            // Break batch into chunks of 25 for transactions to avoid timeout
            const CHUNK_SIZE = 25;
            const chunks = [];
            
            for (let j = 0; j < batch.length; j += CHUNK_SIZE) {
              chunks.push(batch.slice(j, j + CHUNK_SIZE));
            }
            
            for (const chunk of chunks) {
              await prisma.$transaction(async (tx) => {
                for (const example of chunk) {
                  await tx.example.create({
                    data: {
                      yorubaSentence: example.yorubaSentence,
                      translation: example.translation,
                      wordId: example.wordId,
                    },
                  });
                }
              });
            }
          });
          
          exampleCounter += batch.length;
          
          console.log(`Imported ${exampleCounter}/${examples.length} examples (Batch ${i+1}/${exampleBatches.length})`);
        } catch (error) {
          console.error(`Error importing batch ${i+1} of examples:`, error);
          // Continue with next batch instead of stopping the whole import
        }
      }

      console.log(`Imported ${exampleCounter} examples successfully`);
    } else {
      console.log('Skipping examples import as examples already exist');
    }
    
    // 5. Create featured words for Word of the Day (if they don't exist)
    console.log('Setting up featured words...');
    const featuredCount = await prisma.featured.count();

    if (featuredCount === 0) {
      console.log('Creating featured words...');
      const randomWords = await prisma.word.findMany({
        where: {
          translations: { some: {} },
          examples: { some: {} },
        },
        take: 30, // Featured words for the month
        include: { translations: true },
      });
      
      const today = new Date();
      
      for (let i = 0; i < randomWords.length; i++) {
        const startDate = new Date();
        startDate.setDate(today.getDate() + i);
        
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 1);
        
        await prisma.featured.create({
          data: {
            wordId: randomWords[i].id,
            startDate,
            endDate,
          },
        });
        
        // Also mark the word as featured
        await prisma.word.update({
          where: { id: randomWords[i].id },
          data: { isFeatured: true },
        });
      }
      
      console.log(`Created ${randomWords.length} featured words`);
    } else {
      console.log(`Skipping featured words creation as ${featuredCount} already exist`);
    }

    // 6. Add cultural facts (if they don't exist)
    console.log('Setting up cultural facts...');
    const factsCount = await prisma.culturalFact.count();

    if (factsCount === 0) {
      console.log('Creating cultural facts...');
      const culturalFacts = [
        {
          title: "Yorùbá Tonal System",
          content: "Yorùbá is a tonal language with three main tones: high (marked with an acute accent: á), mid (unmarked: a), and low (marked with a grave accent: à). The tone can change the meaning of words that are otherwise spelled the same."
        },
        {
          title: "Yorùbá Dialects",
          content: "Yorùbá has numerous dialects, including Oyo, Ibadan, Ijebu, Ijesha, Ekiti, Ondo, and more. Standard Yorùbá is based primarily on the Oyo and Ibadan dialects."
        },
        {
          title: "The Yorùbá People",
          content: "With approximately 40 million speakers, Yorùbá is one of the most widely spoken languages in West Africa, primarily in Nigeria, Benin, and Togo."
        },
        {
          title: "Yorùbá Greetings",
          content: "Greetings are very important in Yorùbá culture. There are specific greetings for different times of day, occasions, and activities. For example, 'E kú àárọ̀' means 'Good morning'."
        },
        {
          title: "Writing System",
          content: "The modern Yorùbá orthography uses the Latin alphabet with additional diacritical marks to represent tones and special characters for sounds not found in English, like ẹ, ọ, and ṣ."
        }
      ];
      
      for (const fact of culturalFacts) {
        await prisma.culturalFact.create({
          data: fact,
        });
      }
      
      console.log(`Added ${culturalFacts.length} cultural facts`);
    } else {
      console.log(`Skipping cultural facts creation as ${factsCount} already exist`);
    }
    
    console.log('Import completed successfully!');
  } catch (error) {
    console.error('Import failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
}); 