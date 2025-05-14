// API endpoint to fetch from our backend
const API_URL = '/api';

// Import mock functions for testing
import { mockSearch, mockGetWordDetails, mockGetSuggestions } from './mockData';

// Flag to determine if we should use mock data (no backend available)
const USE_MOCK_DATA = false; // Set to false since we're using Next.js API routes

export interface WordDefinition {
  id: string;
  word: string;
  partOfSpeech: string;
  definitions: string[];
  examples: string[];
}

export interface WordData {
  id: string;
  word: string;
  partOfSpeech?: string | null;
  pronunciation?: string | null;
  translations: Array<{
    id: string;
    text: string;
    language: string;
  }>;
  examples: Array<{
    id: string;
    yorubaSentence: string;
    translation: string;
  }>;
  audioUrl?: string | null;
  tonalMarks?: string | null;
}

export interface SearchResult {
  words: any[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Function to search for words
export async function searchWords(query: string, page = 1, limit = 20): Promise<SearchResult> {
  // Use mock data if no backend is available
  if (USE_MOCK_DATA) {
    const words = mockSearch(query);
    return {
      words,
      pagination: {
        total: words.length,
        page: 1,
        limit: 20,
        totalPages: 1
      }
    };
  }

  // Otherwise, use real API
  try {
    const response = await fetch(
      `${API_URL}/dictionary/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching words:', error);
    return { 
      words: [], 
      pagination: {
        total: 0,
        page: page,
        limit: limit,
        totalPages: 0
      }
    };
  }
}

// Function to get word details
export async function getWordDetails(wordId: string): Promise<{word: WordData} | null> {
  // Use mock data if no backend is available
  if (USE_MOCK_DATA) {
    const mockData = mockGetWordDetails(wordId);
    // Convert to the new format expected by the component
    return mockData ? { 
      word: {
        ...mockData,
        translations: mockData.definitions.map((def, i) => ({
          id: `t-${i}`,
          text: def,
          language: 'en'
        })),
        examples: mockData.examples.map((ex, i) => ({
          id: `ex-${i}`,
          yorubaSentence: ex,
          translation: `Translation of ${ex}`
        }))
      }
    } : null;
  }

  // Otherwise, use real API
  try {
    const response = await fetch(`${API_URL}/dictionary/word/${encodeURIComponent(wordId)}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch word details');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching word details:', error);
    return null;
  }
}

// Function to get suggested words (for "did you mean" functionality)
export async function getSuggestions(partialWord: string): Promise<string[]> {
  // Use mock data if no backend is available
  if (USE_MOCK_DATA) {
    return mockGetSuggestions(partialWord);
  }

  // Otherwise, use real API
  try {
    const response = await fetch(`${API_URL}/dictionary/suggestions?q=${encodeURIComponent(partialWord)}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch suggestions');
    }
    
    const data = await response.json();
    return data.suggestions || [];
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return [];
  }
}

// Function to get word of the day
export async function getWordOfTheDay() {
  try {
    const response = await fetch(`${API_URL}/dictionary/word-of-the-day`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch word of the day');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching word of the day:', error);
    return null;
  }
}

// Function to get all alphabets with word counts
export async function getAllAlphabets() {
  try {
    const response = await fetch(`${API_URL}/dictionary/alphabet`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch alphabets');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching alphabets:', error);
    return [];
  }
} 