import prisma from '../prisma';

// Define interfaces for Prisma models
interface Translation {
  id: string;
  text: string;
  language: string;
}

interface Alphabet {
  id: string;
  letter: string;
}

export interface SearchOptions {
  query: string;
  page?: number;
  limit?: number;
  includeExamples?: boolean;
}

export interface AlphabetResponse {
  letter: string;
  id: string;
  wordCount: number;
}

export const DictionaryService = {
  /**
   * Search for words in the dictionary
   */
  async searchWords({ 
    query, 
    page = 1, 
    limit = 20,
    includeExamples = true 
  }: SearchOptions) {
    const skip = (page - 1) * limit;
    
    // Enhanced normalization for handling Yoruba diacritics
    const normalizedQuery = query.toLowerCase().normalize('NFD');
    const basicQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    // Build a more sophisticated search query
    const words = await prisma.word.findMany({
      where: {
        OR: [
          // Exact match (highest priority)
          { word: { equals: query, mode: 'insensitive' } },
          
          // Exact match with normalized diacritics
          { word: { equals: normalizedQuery, mode: 'insensitive' } },
          
          // Exact match without diacritics
          { word: { equals: basicQuery, mode: 'insensitive' } },
          
          // Words that start with the query (high priority)
          { word: { startsWith: query, mode: 'insensitive' } },
          
          // Words that start with normalized query
          { word: { startsWith: normalizedQuery, mode: 'insensitive' } },
          
          // Words that start with basic query (no diacritics)
          { word: { startsWith: basicQuery, mode: 'insensitive' } },
          
          // Words that contain the query
          { word: { contains: query, mode: 'insensitive' } },
          
          // Words that contain normalized query
          { word: { contains: normalizedQuery, mode: 'insensitive' } },
          
          // Words that contain basic query (no diacritics)
          { word: { contains: basicQuery, mode: 'insensitive' } },
          
          // Search in translations (exact)
          { translations: { some: { text: { equals: query, mode: 'insensitive' } } } },
          
          // Search in translations (starts with)
          { translations: { some: { text: { startsWith: query, mode: 'insensitive' } } } },
          
          // Search in translations (contains)
          { translations: { some: { text: { contains: query, mode: 'insensitive' } } } },
        ],
      },
      include: {
        translations: true,
        examples: includeExamples ? {
          take: 5, // Increased from 3 to 5 for more examples
        } : false,
        alphabet: true,
      },
      // Just get them in alphabetical order first
      orderBy: { word: 'asc' },
      skip,
      take: limit * 3, // Fetch more for better sorting - increased to get better matches
    });
    
    // Enhanced post-processing to sort by relevance
    const sortedWords = [...words].sort((a, b) => {
      const aWord = a.word.toLowerCase();
      const bWord = b.word.toLowerCase();
      const lowerQuery = query.toLowerCase();
      
      // 1. Exact matches get highest priority
      if (aWord === lowerQuery && bWord !== lowerQuery) return -1;
      if (aWord !== lowerQuery && bWord === lowerQuery) return 1;
      
      // 2. Exact matches with normalized form (handle diacritics)
      const aNormalized = aWord.normalize('NFD');
      const bNormalized = bWord.normalize('NFD');
      const queryNormalized = lowerQuery.normalize('NFD');
      
      if (aNormalized === queryNormalized && bNormalized !== queryNormalized) return -1;
      if (aNormalized !== queryNormalized && bNormalized === queryNormalized) return 1;
      
      // 3. Exact matches without diacritics
      const aBasic = aNormalized.replace(/[\u0300-\u036f]/g, '');
      const bBasic = bNormalized.replace(/[\u0300-\u036f]/g, '');
      const queryBasic = queryNormalized.replace(/[\u0300-\u036f]/g, '');
      
      if (aBasic === queryBasic && bBasic !== queryBasic) return -1;
      if (aBasic !== queryBasic && bBasic === queryBasic) return 1;
      
      // 4. Words that start with the query get next priority
      const aStartsWith = aWord.startsWith(lowerQuery);
      const bStartsWith = bWord.startsWith(lowerQuery);
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      
      // 5. Words that start with normalized query
      const aStartsWithNorm = aNormalized.startsWith(queryNormalized);
      const bStartsWithNorm = bNormalized.startsWith(queryNormalized);
      if (aStartsWithNorm && !bStartsWithNorm) return -1;
      if (!aStartsWithNorm && bStartsWithNorm) return 1;
      
      // 6. Words that start with query without diacritics
      const aStartsWithBasic = aBasic.startsWith(queryBasic);
      const bStartsWithBasic = bBasic.startsWith(queryBasic);
      if (aStartsWithBasic && !bStartsWithBasic) return -1;
      if (!aStartsWithBasic && bStartsWithBasic) return 1;
      
      // 7. Words with exact translation matches
      const aExactTranslation = a.translations.some(
        (t: Translation) => t.text.toLowerCase() === lowerQuery
      );
      const bExactTranslation = b.translations.some(
        (t: Translation) => t.text.toLowerCase() === lowerQuery
      );
      if (aExactTranslation && !bExactTranslation) return -1;
      if (!aExactTranslation && bExactTranslation) return 1;
      
      // 8. Words with translations starting with query
      const aTranslationStarts = a.translations.some(
        (t: Translation) => t.text.toLowerCase().startsWith(lowerQuery)
      );
      const bTranslationStarts = b.translations.some(
        (t: Translation) => t.text.toLowerCase().startsWith(lowerQuery)
      );
      if (aTranslationStarts && !bTranslationStarts) return -1;
      if (!aTranslationStarts && bTranslationStarts) return 1;
      
      // 9. Words with translations containing query
      const aHasMatchingTranslation = a.translations.some(
        (t: Translation) => t.text.toLowerCase().includes(lowerQuery)
      );
      const bHasMatchingTranslation = b.translations.some(
        (t: Translation) => t.text.toLowerCase().includes(lowerQuery)
      );
      if (aHasMatchingTranslation && !bHasMatchingTranslation) return -1;
      if (!aHasMatchingTranslation && bHasMatchingTranslation) return 1;
      
      // 10. Words containing the query (anywhere)
      const aContains = aWord.includes(lowerQuery);
      const bContains = bWord.includes(lowerQuery);
      if (aContains && !bContains) return -1;
      if (!aContains && bContains) return 1;
      
      // 11. Words containing the normalized query
      const aContainsNorm = aNormalized.includes(queryNormalized);
      const bContainsNorm = bNormalized.includes(queryNormalized);
      if (aContainsNorm && !bContainsNorm) return -1;
      if (!aContainsNorm && bContainsNorm) return 1;
      
      // 12. Words containing the query without diacritics
      const aContainsBasic = aBasic.includes(queryBasic);
      const bContainsBasic = bBasic.includes(queryBasic);
      if (aContainsBasic && !bContainsBasic) return -1;
      if (!aContainsBasic && bContainsBasic) return 1;
      
      // 13. Default to alphabetical order
      return aWord.localeCompare(bWord);
    });
    
    // Take only what we need after sorting
    const finalWords = sortedWords.slice(0, limit);
    
    // Count is still the same as before
    const total = await prisma.word.count({
      where: {
        OR: [
          { word: { contains: query, mode: 'insensitive' } },
          { word: { contains: normalizedQuery, mode: 'insensitive' } },
          { word: { contains: basicQuery, mode: 'insensitive' } },
          { translations: { some: { text: { contains: query, mode: 'insensitive' } } } },
        ],
      },
    });
    
    return {
      words: finalWords,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  },
  
  /**
   * Get a word by ID
   */
  async getWordById(id: string) {
    const word = await prisma.word.findUnique({
      where: { id },
      include: {
        translations: true,
        examples: true,
        alphabet: true,
      },
    });
    
    return word;
  },
  
  /**
   * Get words by alphabet
   */
  async getWordsByAlphabet(letter: string, page = 1, limit = 50) {
    const skip = (page - 1) * limit;
    
    // Find the alphabet entry
    const alphabet = await prisma.alphabet.findUnique({
      where: { letter },
    });
    
    if (!alphabet) {
      return null;
    }
    
    const words = await prisma.word.findMany({
      where: {
        alphabetId: alphabet.id,
      },
      include: {
        translations: true,
      },
      orderBy: { word: 'asc' },
      skip,
      take: limit,
    });
    
    const total = await prisma.word.count({
      where: {
        alphabetId: alphabet.id,
      },
    });
    
    return {
      alphabet,
      words,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  },
  
  /**
   * Get word of the day
   */
  async getWordOfTheDay() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Check if there's a featured word for today
    const featuredWord = await prisma.featured.findFirst({
      where: {
        startDate: { lte: today },
        OR: [
          { endDate: { gte: today } },
          { endDate: null },
        ],
      },
      include: {
        word: {
          include: {
            translations: true,
            examples: {
              take: 2,
            },
          },
        },
      },
      orderBy: {
        startDate: 'desc',
      },
    });
    
    if (featuredWord?.word) {
      return featuredWord.word;
    }
    
    // If no featured word, get a random one with translations
    const randomWord = await prisma.word.findFirst({
      where: {
        translations: {
          some: {},
        },
      },
      include: {
        translations: true,
        examples: {
          take: 2,
        },
      },
      skip: Math.floor(Math.random() * 100),
    });
    
    return randomWord;
  },
  
  /**
   * Get all alphabets with word counts
   */
  async getAllAlphabets(): Promise<AlphabetResponse[]> {
    const alphabets = await prisma.alphabet.findMany({
      orderBy: {
        letter: 'asc',
      },
    });
    
    // Get word count for each alphabet
    const alphabetsWithCounts = await Promise.all(
      alphabets.map(async (alphabet: Alphabet) => {
        const wordCount = await prisma.word.count({
          where: {
            alphabetId: alphabet.id,
          },
        });
        
        return {
          id: alphabet.id,
          letter: alphabet.letter,
          wordCount,
        };
      })
    );
    
    return alphabetsWithCounts;
  },
  
  /**
   * Get random cultural fact
   */
  async getRandomCulturalFact() {
    const factsCount = await prisma.culturalFact.count({
      where: { isActive: true },
    });
    
    const randomSkip = Math.floor(Math.random() * factsCount);
    
    const fact = await prisma.culturalFact.findFirst({
      where: { isActive: true },
      skip: randomSkip,
    });
    
    return fact;
  },
  
  /**
   * Get all cultural facts
   */
  async getAllCulturalFacts() {
    const facts = await prisma.culturalFact.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
    
    return facts;
  },
};

export default DictionaryService; 