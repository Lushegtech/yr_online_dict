const { PrismaClient } = require('../src/generated/prisma');

// Initialize Prisma Client
const prisma = new PrismaClient();

/**
 * Creates a featured word of the day
 */
async function createFeaturedWord() {
  console.log('Creating featured word of the day...');
  
  try {
    // Check if we already have a current featured word
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const existingFeatured = await prisma.featured.findFirst({
      where: {
        startDate: { lte: today },
        OR: [
          { endDate: { gte: today } },
          { endDate: null },
        ],
      },
      include: {
        word: true
      }
    });
    
    if (existingFeatured) {
      console.log(`Current featured word already exists: ${existingFeatured.word.word}`);
      return existingFeatured;
    }
    
    // Find a suitable word that has both translations and examples
    const candidates = await prisma.word.findMany({
      where: {
        translations: {
          some: {}
        },
        examples: {
          some: {}
        }
      },
      include: {
        translations: true,
        examples: true
      },
      take: 50 // Get a batch of candidates
    });
    
    if (candidates.length === 0) {
      console.log('No suitable candidates found for featured word');
      
      // Try getting any word with translations
      const fallbackCandidates = await prisma.word.findMany({
        where: {
          translations: {
            some: {}
          }
        },
        include: {
          translations: true
        },
        take: 10
      });
      
      if (fallbackCandidates.length === 0) {
        console.log('No words with translations found');
        return null;
      }
      
      const selectedWord = fallbackCandidates[Math.floor(Math.random() * fallbackCandidates.length)];
      console.log(`Selected fallback featured word: ${selectedWord.word}`);
      
      // Create featured entry
      const featured = await prisma.featured.create({
        data: {
          wordId: selectedWord.id,
          startDate: today,
          // End date set to 7 days from now
          endDate: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
        },
        include: {
          word: true
        }
      });
      
      console.log(`Created featured word: ${featured.word.word}`);
      return featured;
    }
    
    // Select a random word from candidates
    const selectedWord = candidates[Math.floor(Math.random() * candidates.length)];
    console.log(`Selected featured word: ${selectedWord.word}`);
    
    // Create featured entry
    const featured = await prisma.featured.create({
      data: {
        wordId: selectedWord.id,
        startDate: today,
        // End date set to 7 days from now
        endDate: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
      },
      include: {
        word: true
      }
    });
    
    console.log(`Created featured word: ${featured.word.word}`);
    return featured;
  } catch (error) {
    console.error('Error creating featured word:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// If this script is run directly, execute the function
if (require.main === module) {
  createFeaturedWord()
    .then(() => {
      console.log('Featured word creation complete');
      process.exit(0);
    })
    .catch(error => {
      console.error('Featured word creation failed:', error);
      process.exit(1);
    });
}

// Export for use in other scripts
module.exports = createFeaturedWord; 