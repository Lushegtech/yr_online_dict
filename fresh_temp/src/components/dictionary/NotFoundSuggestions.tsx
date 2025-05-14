'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, AlertCircle, InfoIcon } from 'lucide-react'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface NotFoundSuggestionsProps {
  searchTerm: string;
  suggestions?: Array<{
    id: string;
    word: string;
    partOfSpeech?: string;
    translation?: string;
  }>;
}

export function NotFoundSuggestions({ searchTerm, suggestions = [] }: NotFoundSuggestionsProps) {
  const [similarWords, setSimilarWords] = useState<typeof suggestions>([])
  const [loading, setLoading] = useState(false)

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

  // If suggestions are provided, use them, otherwise fetch them
  useEffect(() => {
    if (suggestions && suggestions.length > 0) {
      setSimilarWords(suggestions)
      return
    }

    async function fetchSimilarWords() {
      setLoading(true)
      try {
        const response = await fetch(`/api/dictionary/suggestions?q=${encodeURIComponent(searchTerm)}&limit=7&detailed=true`)
        if (!response.ok) throw new Error('Failed to fetch suggestions')
        
        const data = await response.json()
        if (data.suggestions && Array.isArray(data.suggestions)) {
          // Transform simple suggestion strings to our format if needed
          const formattedSuggestions = Array.isArray(data.suggestions[0]) || typeof data.suggestions[0] === 'string' 
            ? data.suggestions.map((word: string) => ({ id: word, word }))
            : data.suggestions
          
          setSimilarWords(formattedSuggestions)
        }
      } catch (error) {
        console.error('Error fetching similar words:', error)
      } finally {
        setLoading(false)
      }
    }

    if (searchTerm) {
      fetchSimilarWords()
    }
  }, [searchTerm, suggestions])

  // Determine if the searchTerm might be missing diacritics
  const searchTermHasDiacritics = /[\u0300-\u036f]/.test(searchTerm.normalize('NFD'));
  const suggestionsHaveDiacritics = similarWords.some(
    word => /[\u0300-\u036f]/.test(word.word.normalize('NFD'))
  );
  const shouldShowDiacriticTip = !searchTermHasDiacritics && suggestionsHaveDiacritics;

  return (
    <Card className="border-yoruba-indigo/20 shadow-adire overflow-hidden">
      <CardHeader className="bg-yoruba-indigo/5 border-b border-yoruba-indigo/10">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-yoruba-coral/10 p-2">
            <AlertCircle className="h-6 w-6 text-yoruba-coral" />
          </div>
          <div>
            <CardTitle className="text-2xl text-yoruba-indigo">Word Not Found</CardTitle>
            <p className="mt-1 text-muted-foreground">
              We couldn't find "<span className="font-medium">{searchTerm}</span>" in our dictionary
            </p>
            
            {shouldShowDiacriticTip && (
              <div className="mt-2 flex items-center p-2 bg-yoruba-gold/10 text-sm rounded-md">
                <InfoIcon className="h-4 w-4 text-yoruba-gold mr-2 flex-shrink-0" />
                <p className="text-yoruba-indigo/80">
                  Yoruba words often use tonal marks (diacritics). Try searching with proper tonal marks
                  for better results.
                </p>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        {similarWords.length > 0 ? (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-yoruba-indigo">Did you mean:</h3>
            <div className="space-y-3">
              {similarWords.map((word) => (
                <Link 
                  key={word.id} 
                  href={`/word/${encodeURIComponent(word.id)}`}
                  className="block"
                >
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left hover:bg-yoruba-indigo/5 hover:text-yoruba-indigo transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-yoruba-indigo/70" />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="font-medium">{highlightTonalMarks(word.word)}</span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Yoruba word with tonal marks highlighted</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      {word.partOfSpeech && (
                        <span className="text-xs bg-yoruba-indigo/10 text-yoruba-indigo/70 px-2 py-1 rounded">
                          {word.partOfSpeech}
                        </span>
                      )}
                    </div>
                    {word.translation && (
                      <span className="block text-sm text-muted-foreground mt-1 ml-6">
                        {word.translation}
                      </span>
                    )}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        ) : loading ? (
          <div className="py-8 flex justify-center">
            <div className="animate-pulse text-yoruba-indigo/50">
              Finding similar words...
            </div>
          </div>
        ) : (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">
              No similar words found. You can:
            </p>
            <div className="mt-4 space-y-2">
              <Button 
                variant="outline" 
                className="w-full max-w-xs mx-auto"
                asChild
              >
                <Link href="/contribute">
                  Contribute this word to our dictionary
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                className="w-full max-w-xs mx-auto"
                asChild
              >
                <Link href="/">
                  Back to search
                </Link>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 