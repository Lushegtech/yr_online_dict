import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

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

interface WordRecord {
  id: string;
  word: string;
  url: string;
  scrape_time: string;
  status: string;
  error?: string;
}

interface TranslationRecord {
  id: string;
  word_id: string;
  translation: string;
  part_of_speech: string;
  confidence: string;
}

interface ExampleRecord {
  id: string;
  word_id: string;
  yoruba_sentence: string;
  translation: string;
}

async function main() {
  console.log('Starting dictionary import...');
  
  try {
    // 1. Create alphabet entries first
    console.log('Creating alphabet entries...');
    const alphabetMap = new Map<string, string>();
    
    for (const letter of yorubaAlphabet) {
      const alphabet = await prisma.alphabet.create({
        data: {
          letter,
        },
      });
      alphabetMap.set(letter, alphabet.id);
      console.log(`Created alphabet entry for: ${letter}`);
    }
    
    // 2. Import words
    console.log('Importing words...');
    const wordMap = new Map<string, string>();
    const words: WordRecord[] = [];
    
    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(WORDS_CSV)
        .pipe(csv())
        .on('data', (data: WordRecord) => {
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
    const translations: TranslationRecord[] = [];
    
    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(TRANSLATIONS_CSV)
        .pipe(csv())
        .on('data', (data: TranslationRecord) => {
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
    
    for (const batch of translationBatches) {
      await Promise.all(
        batch.map(async (translationRecord) => {
          const wordId = wordMap.get(translationRecord.word_id);
          
          if (!wordId) {
            return; // Skip if word not found
          }
          
          try {
            await prisma.translation.create({
              data: {
                text: translationRecord.translation.trim(),
                language: 'en', // Default language
                wordId,
              },
            });
            
            translationCounter++;
            
            if (translationCounter % 500 === 0) {
              console.log(`Imported ${translationCounter} translations`);
            }
          } catch (error) {
            console.error(`Error importing translation: ${translationRecord.translation}`, error);
          }
        })
      );
    }
    
    console.log(`Imported ${translationCounter} translations successfully`);
    
    // 4. Import examples - this will read the large examples file in chunks
    console.log('Importing examples...');
    let exampleCounter = 0;
    
    // Use a stream to process the large examples file
    const exampleStream = fs.createReadStream(EXAMPLES_CSV).pipe(csv());
    
    for await (const exampleRecord of exampleStream) {
      const wordId = wordMap.get(exampleRecord.word_id);
      
      if (!wordId) {
        continue; // Skip if word not found
      }
      
      try {
        await prisma.example.create({
          data: {
            yorubaSentence: exampleRecord.yoruba_sentence?.trim() || '',
            translation: exampleRecord.translation?.trim() || '',
            wordId,
          },
        });
        
        exampleCounter++;
        
        if (exampleCounter % 500 === 0) {
          console.log(`Imported ${exampleCounter} examples`);
        }
      } catch (error) {
        console.error(`Error importing example for word ID: ${wordId}`, error);
      }
    }
    
    console.log(`Imported ${exampleCounter} examples successfully`);
    
    // 5. Create some featured words for Word of the Day
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
    
    // 6. Add some cultural facts
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