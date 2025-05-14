const { PrismaClient } = require('../src/generated/prisma');

// Initialize Prisma client
const prisma = new PrismaClient();

// Function to log counts with formatting
function logCount(name, count) {
  const status = count > 0 ? '✅' : '❌';
  console.log(`${status} ${name.padEnd(20)} ${count.toString().padStart(6)}`);
}

async function verifyData() {
  console.log('🔍 Verifying database data...\n');
  
  try {
    // Get counts of main entities
    const wordCount = await prisma.word.count();
    const translationCount = await prisma.translation.count();
    const exampleCount = await prisma.example.count();
    const alphabetCount = await prisma.alphabet.count();
    const featuredCount = await prisma.featured.count();
    const culturalFactCount = await prisma.culturalFact.count();

    // Print all counts
    console.log('📊 Data counts:');
    console.log('-------------------------------------');
    logCount('Words', wordCount);
    logCount('Translations', translationCount);
    logCount('Examples', exampleCount);
    logCount('Alphabets', alphabetCount);
    logCount('Featured words', featuredCount);
    logCount('Cultural facts', culturalFactCount);
    console.log('-------------------------------------');

    // Sample verification - get 3 random words with their translations
    if (wordCount > 0) {
      console.log('\n📝 Sample data verification:');
      
      const sampleWords = await prisma.word.findMany({
        take: 3,
        include: {
          translations: true,
          examples: {
            take: 1,
          },
        },
        orderBy: {
          word: 'asc',
        },
      });

      sampleWords.forEach((word, index) => {
        console.log(`\n🔤 Sample Word ${index + 1}: ${word.word}`);
        
        if (word.translations.length > 0) {
          console.log('  Translations:');
          word.translations.forEach(t => {
            console.log(`   - ${t.text} (${t.language})`);
          });
        } else {
          console.log('  ❌ No translations found');
        }
        
        if (word.examples.length > 0) {
          console.log('  Example:');
          console.log(`   - ${word.examples[0].yorubaSentence}`);
          console.log(`   - ${word.examples[0].translation}`);
        } else {
          console.log('  ⚠️ No examples found');
        }
      });
    }

    // Overall status
    console.log('\n📋 Status:');
    
    if (wordCount === 0) {
      console.log('❌ No words found in the database. Data import may have failed.');
    } else if (translationCount === 0) {
      console.log('❌ Words found but no translations. Translations import may have failed.');
    } else if (exampleCount === 0) {
      console.log('⚠️ Words and translations found but no examples. Examples import may have failed.');
    } else {
      console.log('✅ Database verification successful! Data appears to be properly imported.');
    }

  } catch (error) {
    console.error('❌ Error verifying data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the verification
verifyData(); 