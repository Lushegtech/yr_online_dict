const { PrismaClient } = require('../src/generated/prisma');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Initialize Prisma Client
const prisma = new PrismaClient();

// Main paths
const DATA_DIR = path.join(process.cwd(), 'scraped_data');
const TRANSLATIONS_CSV = path.join(DATA_DIR, 'all_yoruba_words_translations.csv');

async function main() {
  console.log('Starting part of speech update using raw SQL...');
  
  try {
    // First verify that the partOfSpeech column exists in the Translation table
    console.log('Verifying database schema...');
    try {
      await prisma.$executeRaw`
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'Translation' AND column_name = 'partOfSpeech'
      `;
      console.log('Schema verification successful, partOfSpeech column exists');
    } catch (error) {
      console.error('Error verifying schema:', error);
      console.log('Attempting to add partOfSpeech column if it does not exist...');
      
      try {
        await prisma.$executeRaw`
          ALTER TABLE "Translation" 
          ADD COLUMN IF NOT EXISTS "partOfSpeech" TEXT
        `;
        console.log('Added partOfSpeech column to Translation table');
      } catch (alterError) {
        console.error('Failed to alter table:', alterError);
        process.exit(1);
      }
    }
    
    // Load translation data from CSV
    console.log('Loading translation part of speech data from CSV...');
    const translations = [];
    
    await new Promise((resolve, reject) => {
      fs.createReadStream(TRANSLATIONS_CSV)
        .pipe(csv())
        .on('data', (data) => {
          if (data.translation && data.part_of_speech) {
            translations.push({
              text: data.translation.trim(),
              partOfSpeech: data.part_of_speech.trim(),
              wordId: data.word_id
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
    
    console.log(`Loaded ${translations.length} translations with part of speech data`);
    
    // Find existing words and build a map of IDs
    console.log('Loading existing words...');
    const words = await prisma.word.findMany({
      select: { id: true, word: true }
    });
    
    console.log(`Found ${words.length} words in the database`);
    
    // Get all translations
    console.log('Loading existing translations...');
    const existingTranslations = await prisma.translation.findMany({
      select: {
        id: true,
        text: true,
        wordId: true
      }
    });
    
    console.log(`Found ${existingTranslations.length} existing translations`);
    
    // Build a map for efficient lookups
    const translationMap = new Map();
    existingTranslations.forEach(t => {
      const key = `${t.text.toLowerCase()}_${t.wordId}`;
      translationMap.set(key, t.id);
    });
    
    // Track part of speech for each word
    const wordPosCount = {};
    let updatedTranslations = 0;
    
    // Process in smaller batches
    const BATCH_SIZE = 100;
    const batches = [];
    
    for (let i = 0; i < translations.length; i += BATCH_SIZE) {
      batches.push(translations.slice(i, i + BATCH_SIZE));
    }
    
    console.log(`Processing in ${batches.length} batches...`);
    
    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex];
      console.log(`Processing batch ${batchIndex + 1}/${batches.length}`);
      
      // Find matching translations in this batch
      for (const item of batch) {
        // Look for exact text matches in existing translations
        for (const existingT of existingTranslations) {
          if (existingT.text.toLowerCase() === item.text.toLowerCase()) {
            try {
              // Update directly with raw SQL to avoid Prisma client issues
              await prisma.$executeRaw`
                UPDATE "Translation" 
                SET "partOfSpeech" = ${item.partOfSpeech}
                WHERE id = ${existingT.id}
              `;
              
              updatedTranslations++;
              
              // Track part of speech for the word
              if (!wordPosCount[existingT.wordId]) {
                wordPosCount[existingT.wordId] = {};
              }
              
              const pos = item.partOfSpeech;
              wordPosCount[existingT.wordId][pos] = 
                (wordPosCount[existingT.wordId][pos] || 0) + 1;
              
            } catch (error) {
              console.error(`Error updating translation: ${error.message}`);
            }
          }
        }
      }
    }
    
    console.log(`Updated ${updatedTranslations} translations with part of speech`);
    
    // Update words with most common part of speech
    console.log('Updating words with most common part of speech...');
    let updatedWords = 0;
    
    // First verify the partOfSpeech column exists in the Word table
    try {
      await prisma.$executeRaw`
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'Word' AND column_name = 'partOfSpeech'
      `;
      console.log('Word table has partOfSpeech column');
    } catch (error) {
      console.error('Error checking Word schema:', error);
      console.log('Attempting to add partOfSpeech column to Word table...');
      
      try {
        await prisma.$executeRaw`
          ALTER TABLE "Word" 
          ADD COLUMN IF NOT EXISTS "partOfSpeech" TEXT
        `;
        console.log('Added partOfSpeech column to Word table');
      } catch (alterError) {
        console.error('Failed to alter Word table:', alterError);
      }
    }
    
    // Update in batches
    const wordEntries = Object.entries(wordPosCount);
    const wordBatches = [];
    const WORD_BATCH_SIZE = 20;
    
    for (let i = 0; i < wordEntries.length; i += WORD_BATCH_SIZE) {
      wordBatches.push(wordEntries.slice(i, i + WORD_BATCH_SIZE));
    }
    
    console.log(`Updating words in ${wordBatches.length} batches...`);
    
    for (let batchIndex = 0; batchIndex < wordBatches.length; batchIndex++) {
      const batch = wordBatches[batchIndex];
      console.log(`Processing word batch ${batchIndex + 1}/${wordBatches.length}`);
      
      for (const [wordId, posCounts] of batch) {
        // Find most common part of speech
        let mostCommonPos = null;
        let highestCount = 0;
        
        for (const [pos, count] of Object.entries(posCounts)) {
          if (count > highestCount) {
            mostCommonPos = pos;
            highestCount = count;
          }
        }
        
        if (mostCommonPos) {
          try {
            // Update directly with raw SQL
            await prisma.$executeRaw`
              UPDATE "Word"
              SET "partOfSpeech" = ${mostCommonPos}
              WHERE id = ${wordId}
            `;
            
            updatedWords++;
          } catch (error) {
            console.error(`Error updating word ${wordId}: ${error.message}`);
          }
        }
      }
    }
    
    console.log(`Updated ${updatedWords} words with part of speech`);
    console.log('Part of speech update completed successfully!');
    
  } catch (error) {
    console.error('Update failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
}); 