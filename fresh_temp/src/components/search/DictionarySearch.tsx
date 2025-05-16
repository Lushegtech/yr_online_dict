'use client'

import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { Search, Mic, History, Star, Flame, InfoIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { SearchResults } from '@/components/dictionary/SearchResults'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface SearchSuggestion {
  id?: string;
  word: string;
  type: 'history' | 'suggestion';
  partOfSpeech?: string;
  translation?: string;
}

// Helper function to highlight tonal marks
const highlightTonalMarks = (word: string) => {
  // First normalize to expose tone marks
  const normalized = word.normalize('NFD');
  // Only proceed if there are tone marks
  if (!/[\u0300-\u036f]/.test(normalized)) {
    return <span>{word}</span>;
  }
  
  // Break the word into characters to highlight tonal marks
  return (
    <span>
      {Array.from(normalized).map((char, i) => {
        // Check if character is a diacritic
        const isDiacritic = /[\u0300-\u036f]/.test(char);
        return (
          <span 
            key={i} 
            className={isDiacritic ? "text-yoruba-coral font-bold" : ""}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

// Mock data for UI development - will be replaced with API data
const mockSearchResult = {
  word: "àgbàlagbà",
  phonetic: "/à-gbà-la-gbà/",
  audioUrl: "/audio/agbalagba.mp3",
  data: {
    translations: [
      {
        translation: "àgbàlagbà",
        partOfSpeech: "noun",
        definition: "elder; adult; grown-up person",
        frequency: 65
      },
      {
        translation: "àgbàlagbà",
        partOfSpeech: "adjective",
        definition: "elderly; mature; old",
        frequency: 35
      }
    ],
    contextExamples: [
      {
        yoruba: "Àwọn àgbàlagbà ní ìgbà ìwásí.",
        english: "The elders have wisdom from experience.",
        source: "Dictionary"
      },
      {
        yoruba: "Ẹ bọ̀wọ̀ fún àwọn àgbàlagbà.",
        english: "Respect the elders.",
        source: "Dictionary"
      }
    ],
    pictures: [],
    communityNotes: []
  }
};

export function DictionarySearch() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchResult, setSearchResult] = useState<typeof mockSearchResult | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)
  const [showDiacriticTip, setShowDiacriticTip] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // Fetch suggestions from API
  const handleSearch = async (value: string) => {
    setQuery(value);
    
    // Check if the query might benefit from diacritics
    const hasDiacritics = /[\u0300-\u036f]/.test(value.normalize('NFD'));
    setShowDiacriticTip(false); // Reset tip visibility
    
    if (value.length > 1) {
      setIsSearching(true);
      try {
        console.log('Fetching suggestions for:', value);
        // Normalize the search query to handle diacritics properly
        const normalizedValue = encodeURIComponent(value);
        const response = await fetch(`/api/dictionary/suggestions?q=${normalizedValue}&detailed=true`);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error:', response.status, errorText);
          throw new Error(`Failed to fetch suggestions: ${response.status}`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          console.error('Non-JSON response:', await response.text());
          throw new Error('API returned non-JSON response');
        }
        
        const data = await response.json();
        console.log('Suggestions response:', data);
        
        if (data.suggestions && Array.isArray(data.suggestions)) {
          // Get recent searches from localStorage safely
          let recentSearches = [];
          try {
            const savedSearches = localStorage.getItem('recentSearches');
            if (savedSearches) {
              recentSearches = JSON.parse(savedSearches);
            }
          } catch (error) {
            console.error('Error parsing localStorage recentSearches:', error);
            // Reset corrupted localStorage
            localStorage.setItem('recentSearches', JSON.stringify([]));
          }
          
          // Map API suggestions to our UI format
          const apiSuggestions = data.suggestions.map((suggestion: any) => {
            // Handle both simple string suggestions and detailed suggestion objects
            const word = typeof suggestion === 'string' ? suggestion : suggestion.word;
            return {
              id: typeof suggestion === 'string' ? undefined : suggestion.id,
              word,
              partOfSpeech: typeof suggestion === 'string' ? undefined : suggestion.partOfSpeech,
              translation: typeof suggestion === 'string' ? undefined : suggestion.translation,
              type: Array.isArray(recentSearches) && recentSearches.includes(word) ? 'history' : 'suggestion'
            };
          });
          
          setSuggestions(apiSuggestions);
          // Reset selected index when new suggestions come in
          setSelectedSuggestionIndex(-1);
          
          // Check if we should show the diacritic tip
          if (!hasDiacritics) {
            const suggestionHasDiacritics = apiSuggestions.some(
              (s: SearchSuggestion) => /[\u0300-\u036f]/.test(s.word.normalize('NFD'))
            );
            setShowDiacriticTip(suggestionHasDiacritics);
          }
        } else {
          console.log('No suggestions found');
          setSuggestions([]);
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      } finally {
        setIsSearching(false);
      }
    } else {
      setSuggestions([]);
    }
    
    if (!value) {
      setSearchResult(null);
    }
  }

  const performSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setSuggestions([]);
    setIsSearchFocused(false);

    try {
      console.log('Searching for:', query);
      // Make a real API call to our backend
      const response = await fetch(`/api/dictionary/search?q=${encodeURIComponent(query)}`);
      
      // Log the raw response for debugging
      const rawResponse = await response.clone().text();
      console.log('Raw API response:', rawResponse);
      
      if (!response.ok) {
        let errorMessage = `Server error: ${response.status}`;
        try {
          const errorData = JSON.parse(rawResponse);
          console.error('Search API error:', errorData);
          errorMessage = errorData.error || errorMessage;
        } catch (parseError) {
          console.error('Error parsing error response:', parseError);
          console.error('Raw error response:', rawResponse);
        }
        throw new Error(errorMessage);
      }
      
      // Check if response is valid JSON
      let data;
      try {
        data = JSON.parse(rawResponse);
      } catch (parseError) {
        console.error('Error parsing search results:', parseError);
        console.error('Raw response was:', rawResponse);
        throw new Error('Invalid JSON response from server');
      }
      
      console.log('Search results:', data);
      
      if (data.words && data.words.length > 0) {
        // Save to recent searches
        try {
          const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
          const updatedSearches = [query, ...recentSearches.filter((s: string) => s !== query)].slice(0, 5);
          localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
        } catch (error) {
          console.error('Error updating recent searches:', error);
        }
        
        // Check if we have an exact match
        const exactMatch = data.words.find((w: any) => 
          w.word.toLowerCase() === query.toLowerCase() ||
          w.word.normalize('NFD').toLowerCase() === query.normalize('NFD').toLowerCase() ||
          w.word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() === 
            query.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() ||
          w.translations.some((t: any) => t.text.toLowerCase() === query.toLowerCase())
        );
        
        if (exactMatch) {
          // Navigate to the detail page for the exact match
          router.push(`/word/${encodeURIComponent(exactMatch.id)}`);
          return;
        }
        
        // If no exact match but we have results, transform for UI
        const firstWord = data.words[0];
        setSearchResult({
          word: firstWord.word,
          phonetic: firstWord.pronunciation || "/ipa/",
          audioUrl: firstWord.audioUrl || null,
          data: {
            translations: firstWord.translations?.map((t: any) => ({
              translation: firstWord.word,
              partOfSpeech: t.partOfSpeech || firstWord.partOfSpeech || "Unknown",
              definition: t.text,
              frequency: 100 / (firstWord.translations?.length || 1)
            })) || [],
            contextExamples: firstWord.examples?.map((ex: any) => ({
              yoruba: ex.yorubaSentence,
              english: ex.translation,
              source: "Dictionary"
            })) || [],
            pictures: [],
            communityNotes: []
          }
        });
      } else {
        console.log('No results found');
        setSearchResult(null);
        toast.error('No words found matching your search');
      }
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResult(null);
      // Show error toast notification
      toast.error(`Search failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSearching(false);
    }
  }

  // Handle keyboard navigation for suggestions
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedSuggestionIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedSuggestionIndex(prev => 
        prev > 0 ? prev - 1 : suggestions.length - 1
      );
    } else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(suggestions[selectedSuggestionIndex]);
    } else if (e.key === 'Escape') {
      setIsSearchFocused(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.word);
    if (suggestion.id) {
      // Navigate directly to the word detail page if we have an ID
      router.push(`/word/${encodeURIComponent(suggestion.id)}`);
    } else {
      // Otherwise perform a search
      performSearch(new Event('submit') as any);
    }
  };

  // Scroll the selected suggestion into view
  useEffect(() => {
    if (selectedSuggestionIndex >= 0 && suggestionsRef.current) {
      const suggestionElements = suggestionsRef.current.querySelectorAll('button');
      if (suggestionElements[selectedSuggestionIndex]) {
        suggestionElements[selectedSuggestionIndex].scrollIntoView({
          block: 'nearest',
          behavior: 'smooth'
        });
      }
    }
  }, [selectedSuggestionIndex]);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {/* Search Bar */}
      <form onSubmit={performSearch} className="relative animate-fade-in-search">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className={`h-5 w-5 ${isSearching ? 'text-yoruba-coral animate-pulse' : 'text-yoruba-indigo/70'}`} />
          </div>
          <input
            ref={inputRef}
            type="text"
            className="w-full h-14 pl-12 pr-12 rounded-full bg-white dark:bg-background/90 border-2 border-yoruba-indigo/20 
                      focus:border-yoruba-coral focus:ring-2 focus:ring-yoruba-coral/20 
                      dark:focus:border-yoruba-coral dark:focus:ring-yoruba-coral/20 
                      transition-all shadow-sm hover:shadow-md"
            placeholder="Search in Yoruba or English..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            onKeyDown={handleKeyDown}
          />
          {isSearching ? (
            <div className="absolute right-4 flex items-center justify-center">
              <div className="h-5 w-5 rounded-full border-2 border-yoruba-coral/20 border-t-yoruba-coral animate-spin"></div>
            </div>
          ) : (
            <button
              type="button"
              className="absolute right-4 p-2 hover:bg-yoruba-coral/10 text-yoruba-coral hover:text-yoruba-coral-hover 
                        rounded-full transition-colors yoruba-interactive"
              onClick={() => { /* Implement voice search - not yet functional */ }}
              aria-label="Search with voice"
            >
              <Mic className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Diacritic Tip */}
        {showDiacriticTip && isSearchFocused && (
          <div className="absolute top-16 left-0 right-0 flex items-center gap-2 p-2 bg-yoruba-gold/10 
                          rounded-md text-sm text-yoruba-indigo/80 border border-yoruba-gold/20 mt-1 shadow-sm">
            <InfoIcon className="h-4 w-4 text-yoruba-gold flex-shrink-0" />
            <p>Try using Yoruba tonal marks for more accurate results. The suggestions below include properly marked words.</p>
          </div>
        )}

        {/* Search Suggestions */}
        {isSearchFocused && suggestions.length > 0 && (
          <Card className={`absolute w-full ${showDiacriticTip ? 'mt-14' : 'mt-2'} p-2 shadow-adire z-50 card-pattern-overlay border border-yoruba-indigo/10`}>
            <div className="space-y-1 max-h-60 overflow-y-auto" ref={suggestionsRef}>
              {suggestions.map((suggestion, index) => (
                <button
                  type="button"
                  key={suggestion.word + index}
                  className={`flex items-center w-full p-2 rounded-md 
                            ${selectedSuggestionIndex === index 
                               ? 'bg-yoruba-indigo/10 text-primary'
                               : 'hover:bg-yoruba-indigo/5'}
                            transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yoruba-coral/20`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  onMouseEnter={() => setSelectedSuggestionIndex(index)}
                >
                  {suggestion.type === 'history' ? (
                    <History className="h-4 w-4 mr-2 text-yoruba-indigo" />
                  ) : (
                    <Star className="h-4 w-4 mr-2 text-yoruba-gold" />
                  )}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="font-medium">{highlightTonalMarks(suggestion.word)}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tonal marks highlighted in accent color</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {suggestion.partOfSpeech && (
                    <span className="ml-2 text-xs text-muted-foreground italic">
                      ({suggestion.partOfSpeech})
                    </span>
                  )}
                  {suggestion.translation && (
                    <span className="ml-auto text-xs text-muted-foreground">
                      {suggestion.translation.length > 30 
                        ? suggestion.translation.substring(0, 30) + '...' 
                        : suggestion.translation}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Card>
        )}
      </form>

      {/* Quick Actions */}
      {!searchResult && (
        <div className="flex flex-wrap justify-center gap-3 quick-actions">
          <Link href="/popular">
            <Button
              variant="outline"
              className="rounded-full border-2 bg-white hover:bg-yoruba-coral hover:text-white 
                      hover:border-yoruba-coral dark:bg-background/50 dark:hover:bg-yoruba-coral dark:hover:text-white 
                      transition-all duration-150 shadow-sm hover:shadow-md transform hover:-translate-y-0.5
                      text-yoruba-coral border-yoruba-coral/50"
            >
              <Flame className="h-4 w-4 mr-2" />
              Popular Searches
            </Button>
          </Link>
          <Link href="/history">
            <Button
              variant="outline"
              className="rounded-full border-2 bg-white hover:bg-yoruba-indigo hover:text-white 
                      hover:border-yoruba-indigo dark:bg-background/50 dark:hover:bg-yoruba-indigo dark:hover:text-white
                      transition-all duration-150 shadow-sm hover:shadow-md transform hover:-translate-y-0.5
                      text-yoruba-indigo border-yoruba-indigo/50"
            >
              <History className="h-4 w-4 mr-2" />
              Recent History
            </Button>
          </Link>
          <Link href="/favorites">
            <Button
              variant="outline"
              className="rounded-full border-2 bg-white hover:bg-yoruba-gold hover:text-yoruba-indigo 
                      hover:border-yoruba-gold dark:bg-background/50 dark:hover:bg-yoruba-gold dark:hover:text-yoruba-indigo
                      transition-all duration-150 shadow-sm hover:shadow-md transform hover:-translate-y-0.5
                      text-yoruba-gold border-yoruba-gold/50"
            >
              <Star className="h-4 w-4 mr-2" />
              My Favorites
            </Button>
          </Link>
        </div>
      )}

      {/* Search Results */}
      {searchResult && (
        <div className="mt-8">
          <SearchResults {...searchResult} />
        </div>
      )}
    </div>
  )
} 