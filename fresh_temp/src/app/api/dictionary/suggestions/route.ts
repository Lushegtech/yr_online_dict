import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface DetailedSuggestion {
  id: string;
  word: string;
  partOfSpeech?: string | null;
  translation?: string;
}

/**
 * Utility function to compute Levenshtein distance between two strings
 * This helps find similar words even with multiple diacritic differences
 */
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  // Initialize the matrix
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 5;
    const detailed = searchParams.get('detailed') === 'true';
    
    if (!query || query.length < 2) {
      return NextResponse.json({ suggestions: [] });
    }

    // Enhanced normalization for better matching
    const normalizedQuery = query.toLowerCase().normalize('NFD');
    const basicQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    console.log(`[API] Getting suggestions for: "${query}" (normalized: "${normalizedQuery}", basic: "${basicQuery}")`);

    // First find exact and startsWith matches which should be fast
    const exactAndStartsWithWords = await prisma.word.findMany({
      where: {
        OR: [
          // Exact match gets highest priority
          { word: { equals: query, mode: 'insensitive' } },
          { word: { equals: normalizedQuery, mode: 'insensitive' } },
          { word: { equals: basicQuery, mode: 'insensitive' } },
          
          // Words that start with the query (high priority for suggestions)
          { word: { startsWith: query, mode: 'insensitive' } },
          { word: { startsWith: normalizedQuery, mode: 'insensitive' } },
          { word: { startsWith: basicQuery, mode: 'insensitive' } },
          
          // Exact matches in translations
          { translations: { some: { text: { equals: query, mode: 'insensitive' } } } },
        ]
      },
      orderBy: [
        { word: 'asc' } // Simple alphabetical ordering
      ],
      take: limit * 2, // We need more to filter and prioritize later
      select: {
        id: true,
        word: true,
        partOfSpeech: true,
        ...(detailed ? { 
          translations: {
            take: 1,
            select: {
              text: true,
              partOfSpeech: true
            }
          }
        } : {})
      }
    });

    // If we don't have enough matches, supplement with contains matches
    let containsWords: typeof exactAndStartsWithWords = [];
    if (exactAndStartsWithWords.length < limit * 2) {
      // Get more to ensure we have enough good candidates
      const remainingNeeded = (limit * 2) - exactAndStartsWithWords.length;
      
      containsWords = await prisma.word.findMany({
        where: {
          AND: [
            // Don't get words we already have
            {
              NOT: {
                id: { in: exactAndStartsWithWords.map(w => w.id) }
              }
            },
            {
              OR: [
                // Words that contain the query (lower priority)
                { word: { contains: query, mode: 'insensitive' } },
                { word: { contains: normalizedQuery, mode: 'insensitive' } },
                { word: { contains: basicQuery, mode: 'insensitive' } },
                
                // Check translations
                { translations: { some: { text: { contains: query, mode: 'insensitive' } } } },
              ]
            }
          ]
        },
        orderBy: [
          { word: 'asc' } // Simple alphabetical ordering
        ],
        take: remainingNeeded,
        select: {
          id: true,
          word: true,
          partOfSpeech: true,
          ...(detailed ? { 
            translations: {
              take: 1,
              select: {
                text: true,
                partOfSpeech: true
              }
            }
          } : {})
        }
      });
    }
    
    // Combine both sets of results
    let allWords = [...exactAndStartsWithWords, ...containsWords];
    
    // Process results
    if (detailed) {
      // Prepare detailed suggestions
      const detailedSuggestions: DetailedSuggestion[] = allWords.map(word => ({
        id: word.id,
        word: word.word,
        partOfSpeech: word.partOfSpeech || 
                     (word.translations && word.translations.length > 0 ? 
                      word.translations[0].partOfSpeech : undefined),
        translation: word.translations && word.translations.length > 0 ? word.translations[0].text : undefined
      }));
      
      // Sort by relevance using multiple criteria
      const scoredSuggestions = detailedSuggestions.map(suggestion => {
        const lowerWord = suggestion.word.toLowerCase();
        const normalizedWord = lowerWord.normalize('NFD');
        const basicWord = normalizedWord.replace(/[\u0300-\u036f]/g, '');
        
        // Compute scores based on various matching criteria
        let score = 0;
        
        // Exact matches get highest score
        if (lowerWord === query.toLowerCase()) score += 100;
        if (normalizedWord === normalizedQuery) score += 90;
        if (basicWord === basicQuery) score += 80;
        
        // Words starting with query get high scores
        if (lowerWord.startsWith(query.toLowerCase())) score += 70;
        if (normalizedWord.startsWith(normalizedQuery)) score += 60;
        if (basicWord.startsWith(basicQuery)) score += 50;
        
        // Words containing query get medium scores
        if (lowerWord.includes(query.toLowerCase())) score += 40;
        if (normalizedWord.includes(normalizedQuery)) score += 30;
        if (basicWord.includes(basicQuery)) score += 20;
        
        // Translation matches
        if (suggestion.translation && suggestion.translation.toLowerCase().includes(query.toLowerCase())) {
          score += 15;
        }
        
        // Levenshtein distance for fuzzy matching (smaller = better)
        // Only compute for words where other matching has given some score
        if (score > 0) {
          const distance = Math.min(
            levenshteinDistance(lowerWord, query.toLowerCase()),
            levenshteinDistance(normalizedWord, normalizedQuery),
            levenshteinDistance(basicWord, basicQuery)
          );
          
          // Convert distance to a score (smaller distance = higher score)
          // For short words, even a distance of 1-2 can be significant
          const lengthFactor = Math.max(lowerWord.length, query.length);
          const distanceScore = 10 * (1 - (distance / lengthFactor));
          
          score += distanceScore;
        }
        
        return { ...suggestion, score };
      });
      
      // Sort by score (highest first)
      scoredSuggestions.sort((a, b) => b.score - a.score);
      
      // Remove any duplicates (by word) while preserving order
      const uniqueSuggestions: DetailedSuggestion[] = [];
      const seenWords = new Set();
      
      for (const suggestion of scoredSuggestions) {
        const normalized = suggestion.word.toLowerCase();
        if (!seenWords.has(normalized)) {
          // Remove the score property before returning
          const { score, ...cleanSuggestion } = suggestion;
          uniqueSuggestions.push(cleanSuggestion);
          seenWords.add(normalized);
        }
      }
      
      // Limit to requested number
      return NextResponse.json({ suggestions: uniqueSuggestions.slice(0, limit) });
    } else {
      // For simple string suggestions, we still want to sort by relevance
      const scoredWords = allWords.map(word => {
        const lowerWord = word.word.toLowerCase();
        const normalizedWord = lowerWord.normalize('NFD');
        const basicWord = normalizedWord.replace(/[\u0300-\u036f]/g, '');
        
        // Similar scoring as above but simplified for string-only results
        let score = 0;
        
        // Exact matches
        if (lowerWord === query.toLowerCase()) score += 100;
        if (normalizedWord === normalizedQuery) score += 90;
        if (basicWord === basicQuery) score += 80;
        
        // Starts with
        if (lowerWord.startsWith(query.toLowerCase())) score += 70;
        if (normalizedWord.startsWith(normalizedQuery)) score += 60;
        if (basicWord.startsWith(basicQuery)) score += 50;
        
        // Contains
        if (lowerWord.includes(query.toLowerCase())) score += 40;
        if (normalizedWord.includes(normalizedQuery)) score += 30;
        if (basicWord.includes(basicQuery)) score += 20;
        
        // Levenshtein distance
        if (score > 0) {
          const distance = Math.min(
            levenshteinDistance(lowerWord, query.toLowerCase()),
            levenshteinDistance(normalizedWord, normalizedQuery),
            levenshteinDistance(basicWord, basicQuery)
          );
          
          const lengthFactor = Math.max(lowerWord.length, query.length);
          const distanceScore = 10 * (1 - (distance / lengthFactor));
          
          score += distanceScore;
        }
        
        return { word: word.word, score };
      });
      
      // Sort by score
      scoredWords.sort((a, b) => b.score - a.score);
      
      // Remove duplicates while preserving order
      const uniqueWords: string[] = [];
      const seenWords = new Set();
      
      for (const item of scoredWords) {
        const normalized = item.word.toLowerCase();
        if (!seenWords.has(normalized)) {
          uniqueWords.push(item.word);
          seenWords.add(normalized);
        }
      }
      
      return NextResponse.json({ suggestions: uniqueWords.slice(0, limit) });
    }
  } catch (error) {
    console.error('Suggestions error:', error);
    return NextResponse.json(
      { error: 'Failed to get suggestions' },
      { status: 500 }
    );
  }
} 