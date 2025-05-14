const { PrismaClient } = require('../src/generated/prisma');

// Initialize Prisma Client
const prisma = new PrismaClient();

// Sample cultural facts data
const culturalFacts = [
  {
    title: 'Yoruba Traditional Clothing',
    content: 'The Yoruba people are known for their colorful and elaborate traditional attire. Men often wear "agbada" (a flowing wide-sleeved robe), "buba" (a loose-fitting shirt), and "sokoto" (trousers). Women typically wear "iro" (wrapper), "buba" (blouse), "gele" (headwrap), and "iborun" (shoulder sash). These garments are often made from high-quality fabrics with intricate patterns.',
    imageUrl: '/images/cultural/yoruba-clothing.jpg',
  },
  {
    title: 'Adire Cloth',
    content: 'Adire is a traditional Yoruba textile that is made using a resist-dyeing technique. The word "adire" comes from "adi" (to tie) and "re" (to dye). This cloth is typically dyed indigo blue and features various patterns created through tying, stitching, folding, or using starch resist. Each pattern often has symbolic meaning related to Yoruba history, mythology, or daily life.',
    imageUrl: '/images/cultural/adire-cloth.jpg',
  },
  {
    title: 'Talking Drums',
    content: 'The "dundun" or talking drum is a unique percussion instrument of the Yoruba people. Its hourglass shape and adjustable pitch allow it to mimic the tones and inflections of Yoruba language, essentially "talking" through rhythm. Traditionally, talking drums were used to communicate messages across long distances and are still an important part of Yoruba musical heritage.',
    imageUrl: '/images/cultural/talking-drums.jpg',
  },
  {
    title: 'Yoruba Naming Ceremony',
    content: 'The naming ceremony (Isomolórúkọ) is held on the 7th or 9th day after birth. This important ceremony involves giving the child a name that often reflects the family circumstances, history, or aspirations. Various symbolic items are used during the ceremony, including honey (for sweetness in life), salt (for preservation), and water (for peace).',
    imageUrl: '/images/cultural/naming-ceremony.jpg',
  },
  {
    title: 'Orisha Worship',
    content: 'Traditional Yoruba religion centers around the worship of various "Òrìṣà" (deities). Each Orisha represents different aspects of nature or human endeavors. Notable ones include Ṣàngó (deity of thunder), Ọya (goddess of winds and storms), Òṣun (goddess of fertility and water), and Ọbàtálá (creator deity). Worship involves offerings, songs, dances, and rituals led by priests and priestesses.',
    imageUrl: '/images/cultural/orisha-worship.jpg',
  },
  {
    title: 'Yoruba Proverbs',
    content: 'Proverbs (òwe) play a crucial role in Yoruba communication. The saying "Òwe lẹsin ọrọ, bọrọ ba sonu, òwe la fi nwá" means "Proverbs are the horses of speech; when speech is lost, proverbs are used to find it." Yoruba proverbs often use animals, plants, and everyday objects to convey deeper meanings about human behavior and moral lessons.',
    imageUrl: '/images/cultural/yoruba-proverbs.jpg',
  },
  {
    title: 'Yoruba New Year (Odún Ìjé)',
    content: 'The traditional Yoruba calendar is based on a system of four days that make up a week, with special ceremonies marking the beginning of each new year. The new year celebration, known as "Odún Ìjé," involves rituals to thank the deities for past blessings and to request prosperity for the coming year. It is a time of renewal, purification, and community gatherings.',
    imageUrl: '/images/cultural/yoruba-new-year.jpg',
  },
  {
    title: 'Yoruba Facial Markings',
    content: 'Traditional Yoruba facial markings, known as "àbàjà" or "ilà," are scarification patterns cut into the cheeks, forehead, or other parts of the face. These marks served multiple purposes: identification of tribal or family lineage, aesthetic enhancement, and spiritual protection. Though less common today, these marks remain an important part of Yoruba cultural heritage.',
    imageUrl: '/images/cultural/facial-markings.jpg',
  }
];

async function importCulturalFacts() {
  console.log('Starting import of cultural facts...');
  
  let createdCount = 0;
  let existingCount = 0;
  
  for (const fact of culturalFacts) {
    try {
      // Check if a similar fact already exists
      const existing = await prisma.culturalFact.findFirst({
        where: {
          title: {
            equals: fact.title,
            mode: 'insensitive'
          }
        }
      });
      
      if (existing) {
        console.log(`Cultural fact already exists: ${fact.title}`);
        existingCount++;
        continue;
      }
      
      // Create new cultural fact
      await prisma.culturalFact.create({
        data: {
          title: fact.title,
          content: fact.content,
          imageUrl: fact.imageUrl,
          isActive: true
        }
      });
      
      createdCount++;
      console.log(`Created cultural fact: ${fact.title}`);
      
    } catch (error) {
      console.error(`Error importing cultural fact "${fact.title}":`, error);
    }
  }
  
  console.log(`Cultural facts import completed: ${createdCount} created, ${existingCount} already existed`);
}

// Run the import
importCulturalFacts()
  .catch(e => {
    console.error('Error during cultural facts import:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 