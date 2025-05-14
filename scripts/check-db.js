const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    console.log('Checking database contents...');
    
    const alphabetCount = await prisma.alphabet.count();
    console.log(`Alphabets: ${alphabetCount}`);
    
    const wordCount = await prisma.word.count();
    console.log(`Words: ${wordCount}`);
    
    const translationCount = await prisma.translation.count();
    console.log(`Translations: ${translationCount}`);
    
    const exampleCount = await prisma.example.count();
    console.log(`Examples: ${exampleCount}`);
    
    const featuredCount = await prisma.featured.count();
    console.log(`Featured words: ${featuredCount}`);
    
    const factCount = await prisma.culturalFact.count();
    console.log(`Cultural facts: ${factCount}`);
    
    // Check a sample word
    const sampleWord = await prisma.word.findFirst({
      include: {
        translations: true,
        examples: { take: 1 },
        alphabet: true
      }
    });
    
    if (sampleWord) {
      console.log('\nSample word:');
      console.log(`Word: ${sampleWord.word}`);
      console.log(`Alphabet: ${sampleWord.alphabet?.letter}`);
      console.log('Translations:');
      sampleWord.translations.forEach(t => {
        console.log(`  - ${t.text} (${t.language})`);
      });
      
      if (sampleWord.examples.length > 0) {
        console.log('Example:');
        console.log(`  Yorùbá: ${sampleWord.examples[0].yorubaSentence}`);
        console.log(`  English: ${sampleWord.examples[0].translation}`);
      }
    }
    
  } catch (error) {
    console.error('Error checking database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase(); 