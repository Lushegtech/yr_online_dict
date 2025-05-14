const { PrismaClient } = require('../src/generated/prisma');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Initialize Prisma Client
const prisma = new PrismaClient();

// Main paths
const DATA_DIR = path.join(process.cwd(), 'scraped_data');
const TRANSLATIONS_CSV = path.join(DATA_DIR, 'all_yoruba_words_translations.csv');

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
  console.log('Starting part of speech update...');
  
  try {
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
    
    // Build a map of translation text to IDs for faster lookup
    const translationMap = new Map();
    existingTranslations.forEach(translation => {
      translationMap.set(`${translation.text.toLowerCase()}_${translation.wordId}`, translation.id);
    });
    
    console.log('Loading translation part of speech data from CSV...');
    const translations = [];
    
    await new Promise((resolve, reject) => {
      fs.createReadStream(TRANSLATIONS_CSV)
        .pipe(csv())
        .on('data', (data) => {
          if (data.translation && data.part_of_speech) {
            translations.push(data);
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
    
    // Track part of speech counts for each word
    const wordPosCount = {};
    const wordIdMap = new Map();
    let updatedCounter = 0;
    
    // Split into batches to avoid connection pool limitations
    const BATCH_SIZE = 100;
    const translationBatches = [];
    
    for (let i = 0; i < translations.length; i += BATCH_SIZE) {
      translationBatches.push(translations.slice(i, i + BATCH_SIZE));
    }
    
    console.log(`Created ${translationBatches.length} batches for processing`);
    
    for (let batchIdx = 0; batchIdx < translationBatches.length; batchIdx++) {
      const batch = translationBatches[batchIdx];
      console.log(`Processing batch ${batchIdx+1}/${translationBatches.length}...`);
      
      const updateOps = [];
      
      for (const translationRecord of batch) {
        // Try to find the matching translation in our map
        const lookupKey = `${translationRecord.translation.trim().toLowerCase()}_${translationRecord.word_id}`;
        
        // Find all words with this translation
        if (!wordIdMap.has(translationRecord.word_id)) {
          try {
            // Find the corresponding word in the database
            const words = await prisma.word.findMany({
              where: {
                translations: {
                  some: {
                    text: {
                      equals: translationRecord.translation.trim(),
                      mode: 'insensitive'
                    }
                  }
                }
              },
              select: { id: true }
            });
            
            if (words.length > 0) {
              // Map old word ID to new word ID
              wordIdMap.set(translationRecord.word_id, words[0].id);
            }
          } catch (error) {
            console.error(`Error finding word: ${error.message}`);
          }
        }
        
        const newWordId = wordIdMap.get(translationRecord.word_id);
        
        if (newWordId) {
          // Track part of speech for the word
          if (translationRecord.part_of_speech) {
            if (!wordPosCount[newWordId]) {
              wordPosCount[newWordId] = {};
            }
            const pos = translationRecord.part_of_speech;
            wordPosCount[newWordId][pos] = (wordPosCount[newWordId][pos] || 0) + 1;
          }
          
          // Find all translations that match this text for this word
          try {
            const matchingTranslations = await prisma.translation.findMany({
              where: {
                text: {
                  equals: translationRecord.translation.trim(),
                  mode: 'insensitive'
                },
                wordId: newWordId
              }
            });
            
            for (const translation of matchingTranslations) {
              // Add the update operation to our batch
              updateOps.push(
                prisma.translation.update({
                  where: { id: translation.id },
                  data: { partOfSpeech: translationRecord.part_of_speech }
                })
              );
              updatedCounter++;
            }
          } catch (error) {
            console.error(`Error finding matching translations: ${error.message}`);
          }
        }
      }
      
      // Execute updates in smaller chunks
      const UPDATE_CHUNK_SIZE = 10;
      for (let i = 0; i < updateOps.length; i += UPDATE_CHUNK_SIZE) {
        const chunk = updateOps.slice(i, i + UPDATE_CHUNK_SIZE);
        try {
          await Promise.all(chunk);
          console.log(`Updated ${i + chunk.length}/${updateOps.length} translations in batch ${batchIdx+1}`);
        } catch (error) {
          console.error(`Error in update batch: ${error.message}`);
        }
      }
    }
    
    console.log(`Updated ${updatedCounter} translation part of speech values`);
    
    // Update words with their most common part of speech
    console.log('Updating words with part of speech...');
    let wordPosCounter = 0;
    
    // Prepare batches of words to update
    const wordPosEntries = Object.entries(wordPosCount);
    const wordPosBatches = [];
    const POS_BATCH_SIZE = 20; // Smaller batch size to avoid timeouts
    
    for (let i = 0; i < wordPosEntries.length; i += POS_BATCH_SIZE) {
      wordPosBatches.push(wordPosEntries.slice(i, i + POS_BATCH_SIZE));
    }
    
    console.log(`Prepared ${wordPosBatches.length} batches for part of speech updates`);
    
    for (let batchIdx = 0; batchIdx < wordPosBatches.length; batchIdx++) {
      const batch = wordPosBatches[batchIdx];
      try {
        const updateOps = batch.map(([wordId, posCounts]) => {
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
        }).filter(op => op !== null);
        
        // Execute in smaller chunks
        const WORD_UPDATE_CHUNK_SIZE = 5;
        for (let i = 0; i < updateOps.length; i += WORD_UPDATE_CHUNK_SIZE) {
          const chunk = updateOps.slice(i, i + WORD_UPDATE_CHUNK_SIZE);
          await Promise.all(chunk);
        }
        
        console.log(`Updated batch ${batchIdx+1}/${wordPosBatches.length} of words with part of speech`);
      } catch (batchError) {
        console.error(`Error updating batch of word part of speech: ${batchError.message}`);
      }
    }
    
    console.log(`Updated ${wordPosCounter} words with part of speech successfully`);
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