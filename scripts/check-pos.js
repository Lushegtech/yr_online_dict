const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Checking for words and translations with part of speech information...');
    
    // Get words with partOfSpeech
    const wordsWithPos = await prisma.word.findMany({
      where: {
        partOfSpeech: {
          not: null
        }
      },
      take: 10
    });
    
    console.log('\nWords with part of speech:');
    console.log(`Found ${wordsWithPos.length} words with part of speech information`);
    
    if (wordsWithPos.length > 0) {
      wordsWithPos.forEach(word => {
        console.log(`Word: ${word.word}, Part of Speech: ${word.partOfSpeech}`);
      });
    }
    
    // Get translations with partOfSpeech
    const translationsWithPos = await prisma.translation.findMany({
      where: {
        partOfSpeech: {
          not: null
        }
      },
      include: {
        word: {
          select: {
            word: true
          }
        }
      },
      take: 10
    });
    
    console.log('\nTranslations with part of speech:');
    console.log(`Found ${translationsWithPos.length} translations with part of speech information`);
    
    if (translationsWithPos.length > 0) {
      translationsWithPos.forEach(trans => {
        console.log(`Yoruba: ${trans.word.word}, Translation: ${trans.text}, Part of Speech: ${trans.partOfSpeech}`);
      });
    }
    
    // Get statistics
    const totalWords = await prisma.word.count();
    const totalWordsWithPos = await prisma.word.count({
      where: {
        partOfSpeech: {
          not: null
        }
      }
    });
    
    const totalTranslations = await prisma.translation.count();
    const totalTranslationsWithPos = await prisma.translation.count({
      where: {
        partOfSpeech: {
          not: null
        }
      }
    });
    
    console.log('\nStatistics:');
    console.log(`Words with POS: ${totalWordsWithPos}/${totalWords} (${((totalWordsWithPos/totalWords)*100).toFixed(2)}%)`);
    console.log(`Translations with POS: ${totalTranslationsWithPos}/${totalTranslations} (${((totalTranslationsWithPos/totalTranslations)*100).toFixed(2)}%)`);
    
    // Get POS distribution for translations
    console.log('\nPart of Speech Distribution in Translations:');
    const posDistribution = await prisma.$queryRaw`
      SELECT "partOfSpeech", COUNT(*) as count
      FROM "Translation"
      WHERE "partOfSpeech" IS NOT NULL
      GROUP BY "partOfSpeech"
      ORDER BY count DESC
    `;
    
    posDistribution.forEach(item => {
      console.log(`${item.partOfSpeech}: ${item.count} (${((item.count/totalTranslationsWithPos)*100).toFixed(2)}%)`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 