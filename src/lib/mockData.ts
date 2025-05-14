import type { WordDefinition } from './api';

// Sample Yorùbá words with definitions
export const mockWords: WordDefinition[] = [
  {
    id: 'ẹlẹ́dẹ',
    word: 'ẹlẹ́dẹ',
    partOfSpeech: 'noun',
    definitions: ['pig', 'swine', 'hog'],
    examples: ['Ẹlẹ́dẹ náà ń jẹun.', 'The pig is eating.']
  },
  {
    id: 'ilé',
    word: 'ilé',
    partOfSpeech: 'noun',
    definitions: ['house', 'home', 'building', 'residence'],
    examples: ['Ilé mi dára.', 'My house is nice.']
  },
  {
    id: 'ọ̀rẹ́',
    word: 'ọ̀rẹ́',
    partOfSpeech: 'noun',
    definitions: ['friend', 'companion', 'ally'],
    examples: ['Ọ̀rẹ́ mi ni.', 'He/She is my friend.']
  },
  {
    id: 'ọmọ',
    word: 'ọmọ',
    partOfSpeech: 'noun',
    definitions: ['child', 'offspring', 'young person'],
    examples: ['Ọmọ náà ń sọ̀rọ̀.', 'The child is talking.']
  },
  {
    id: 'àdá',
    word: 'àdá',
    partOfSpeech: 'noun',
    definitions: ['cutlass', 'machete'],
    examples: ['Ó fi àdá rẹ̀ gé igi.', 'He cut the tree with his machete.']
  },
  {
    id: 'okú',
    word: 'okú',
    partOfSpeech: 'noun',
    definitions: ['corpse', 'dead body', 'death'],
    examples: ['Má sọ̀rọ̀ okú.', 'Don\'t talk about death.']
  },
  {
    id: 'agbára',
    word: 'agbára',
    partOfSpeech: 'noun',
    definitions: ['power', 'strength', 'energy'],
    examples: ['Ó ní agbára púpọ̀.', 'He has a lot of strength.']
  },
  {
    id: 'gbogbo',
    word: 'gbogbo',
    partOfSpeech: 'adjective',
    definitions: ['all', 'every', 'entire'],
    examples: ['Gbogbo ọmọ.', 'All the children.']
  },
];

// Search function - returns matching words based on a query
export function mockSearch(query: string): string[] {
  if (!query) return [];
  
  const normalizedQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  return mockWords
    .filter(word => {
      const normalizedWord = word.word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return normalizedWord.includes(normalizedQuery);
    })
    .map(word => word.word);
}

// Get word details by ID
export function mockGetWordDetails(wordId: string): WordDefinition | null {
  return mockWords.find(word => word.id === wordId) || null;
}

// Get suggestions based on partial input
export function mockGetSuggestions(partialWord: string): string[] {
  if (!partialWord) return [];
  
  const normalizedPartial = partialWord.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  return mockWords
    .filter(word => {
      const normalizedWord = word.word.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return normalizedWord.includes(normalizedPartial);
    })
    .map(word => word.word);
} 