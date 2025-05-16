'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Loader2, Volume2, BookOpen, Star, Share2, Users } from 'lucide-react';

// Define FavoriteItem interface for localStorage favorites
interface FavoriteItem {
  id: string;
  word: string;
  timestamp: string;
}

// Define WordData interface based on what the API actually returns
interface WordData {
  id: string;
  word: string;
  partOfSpeech?: string | null;
  pronunciation?: string | null;
  syllables?: string | null;
  tonalMarks?: string | null;
  audioUrl?: string | null;
  alphabetId?: string;
  translations: Array<{
    id: string;
    text: string;
    language: string;
    partOfSpeech?: string | null;
  }>;
  examples: Array<{
    id: string;
    yorubaSentence: string;
    translation: string;
  }>;
}

export default function WordDetailPage() {
  const params = useParams();
  const router = useRouter();
  const wordId = params.id as string;
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [playingAudio, setPlayingAudio] = useState(false);
  const [activeTab, setActiveTab] = useState('translations');

  useEffect(() => {
    async function fetchWordDetails() {
      setLoading(true);
      setError(null);

      try {
        // Make the API call
        const response = await fetch(`/api/dictionary/word/${encodeURIComponent(wordId)}`);
        
        if (!response.ok) {
          throw new Error(`Error fetching word: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data || !data.word) {
          setError("Word not found");
          router.push(`/word/not-found?q=${encodeURIComponent(wordId)}`);
          return;
        }
        
        // Set the word data from the API response
        setWordData(data.word);
        console.log("Word data:", data.word);
        
        // Add to recently viewed in localStorage
        try {
        const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        const updatedRecent = [
            data.word.word,
            ...recentlyViewed.filter((w: string) => w !== data.word.word)
        ].slice(0, 5);
        localStorage.setItem('recentlyViewed', JSON.stringify(updatedRecent));
        } catch (error) {
          console.error("Error updating recently viewed:", error);
        }
        
      } catch (error) {
        console.error("Error fetching word:", error);
        setError("Failed to load word details");
      } finally {
        setLoading(false);
      }
    }

    fetchWordDetails();
  }, [wordId, router]);

  const playAudio = () => {
    if (wordData?.audioUrl && !playingAudio) {
      setPlayingAudio(true);
      const audio = new Audio(wordData.audioUrl);
      audio.onended = () => setPlayingAudio(false);
      audio.onerror = () => {
        console.error("Error playing audio");
        setPlayingAudio(false);
      };
      audio.play().catch(err => {
        console.error("Error playing audio:", err);
        setPlayingAudio(false);
      });
    }
  };

  const addToFavorites = () => {
    if (!wordData) return;
    
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      if (!favorites.some((fav: FavoriteItem) => fav.id === wordData.id)) {
        favorites.push({
          id: wordData.id,
          word: wordData.word,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Added to favorites!');
      } else {
        alert('Already in your favorites!');
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  const shareWord = () => {
    if (navigator.share && wordData) {
      navigator.share({
        title: `Yoruba Dictionary: ${wordData.word}`,
        text: `Learn about the Yoruba word &quot;${wordData.word}&quot;`,
        url: window.location.href
      })
      .catch(error => console.error('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      const url = window.location.href;
      navigator.clipboard.writeText(url)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Failed to copy link:', err));
    }
  };
  
  // Calculate usage percentage for each part of speech (similar to the image)
  const getUsageData = () => {
    if (!wordData?.translations?.length) return [];
    
    // Group translations by part of speech
    const posGroups: Record<string, any[]> = {};
    wordData.translations.forEach(translation => {
      // Use translation-specific part of speech if available, otherwise fallback to word's part of speech
      const pos = translation.partOfSpeech || wordData.partOfSpeech || 'Unknown';
      if (!posGroups[pos]) {
        posGroups[pos] = [];
      }
      posGroups[pos].push(translation);
    });
    
    // Calculate percentages
    const total = wordData.translations.length;
    const result = Object.entries(posGroups).map(([pos, translations]) => {
      const percentage = Math.round((translations.length / total) * 100);
      return { pos, percentage, translations };
    });
    
    // Sort by percentage (descending)
    return result.sort((a, b) => b.percentage - a.percentage);
  };

  if (loading) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-primary/5">
        <div className="relative z-10">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-center text-muted-foreground">Loading word details...</p>
        </div>
      </div>
    );
  }

  if (error || !wordData) {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-background to-primary/5">
        <div className="relative z-10 pt-16 pb-24 px-4 max-w-4xl mx-auto">
          <Button 
            onClick={() => router.back()}
            variant="outline" 
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Button>
          
          <Card className="word-detail-card bg-background/95 border shadow-moderate p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Word Not Found</h2>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn&apos;t find the word you&apos;re looking for in our dictionary.
            </p>
            <Button 
              onClick={() => router.push('/')}
              className="mx-auto"
            >
              Return to Search
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const usageData = getUsageData();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-primary/5">
      <div className="relative z-10 pt-16 pb-24 px-4 max-w-4xl mx-auto">
        <Button 
          onClick={() => router.back()}
          variant="outline" 
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Search
        </Button>
        
        <Card className="word-detail-card shadow-moderate mb-4">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-4xl font-bold">
              {wordData.word}
                  </CardTitle>
                  {wordData.partOfSpeech && (
                    <span className="text-lg text-muted-foreground italic">
                {wordData.partOfSpeech}
              </span>
                  )}
                  {wordData.audioUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="gap-1 mt-1"
                      onClick={playAudio}
                      disabled={playingAudio}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <CardDescription className="mt-2 flex flex-wrap items-center gap-3">
                  {wordData.pronunciation && (
                    <span className="font-mono bg-muted px-2 py-1 rounded text-sm inline-block">
                      {wordData.pronunciation}
                    </span>
                  )}
                  {!wordData.pronunciation && wordData.tonalMarks && (
                    <span className="font-mono bg-muted px-2 py-1 rounded text-sm inline-block">
                      {wordData.tonalMarks}
                    </span>
                  )}
                </CardDescription>
              </div>
              
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="gap-1"
                  onClick={addToFavorites}
                >
                  <Star className="h-4 w-4" />
                  <span>Save</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="gap-1"
                  onClick={shareWord}
                >
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6 w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger
                  value="translations"
                  className={`px-4 py-2 data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none ${
                    activeTab === 'translations' ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Translations
                </TabsTrigger>
                <TabsTrigger
                  value="context"
                  className={`px-4 py-2 data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none ${
                    activeTab === 'context' ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    In Context
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="community"
                  className={`px-4 py-2 data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none ${
                    activeTab === 'community' ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Community
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="translations" className="p-0 mt-0">
                <div className="space-y-8">
                  {usageData.map((usage, i) => (
                    <div key={i} className="space-y-3">
                      {usage.pos && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-sm font-normal px-2 py-1 bg-primary/5">
                              {usage.pos}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {usage.percentage}% of translations
                            </span>
                          </div>
                          <div className="w-28 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full transition-all duration-500 ease-in-out" 
                              style={{ width: `${usage.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      <ul className="list-none space-y-3">
                        {usage.translations.map((translation, j) => (
                          <li key={j} className="bg-primary/5 p-4 rounded-md shadow-sm hover:bg-primary/10 transition-colors">
                            <div className="flex items-start justify-between">
                              <p className="text-lg">
                                {translation.text} 
                                {translation.partOfSpeech && (
                                  <span className="inline-flex ml-1.5 text-xs px-1.5 py-0.5 bg-primary/10 text-primary/80 rounded-sm align-text-top font-medium">
                                    {translation.partOfSpeech}
                                  </span>
                                )}
                              </p>
                              {translation.language && translation.language !== 'en' && (
                                <Badge variant="secondary" className="mt-1">
                                  {translation.language === 'en' ? 'English' : translation.language}
                                </Badge>
                              )}
                            </div>
                    </li>
                  ))}
                </ul>
              </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="context" className="p-0 mt-0">
                {wordData.examples && wordData.examples.length > 0 ? (
                  <div className="space-y-4">
                    {wordData.examples.map((example, i) => (
                      <div key={i} className="bg-secondary/30 rounded-md p-4 space-y-3 hover:bg-secondary/40 transition-colors">
                        <blockquote className="border-l-3 border-accent pl-4 italic font-medium text-lg">
                          {example.yorubaSentence}
                      </blockquote>
                        <div className="pl-4 flex items-center">
                          <div className="w-5 h-0.5 bg-muted mr-3"></div>
                          <p className="text-muted-foreground">
                            {example.translation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No example sentences available for this word.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="community" className="p-0 mt-0">
                <div className="text-center py-8 text-muted-foreground">
                  <p>Community contributions coming soon!</p>
                  <p className="mt-2 text-sm">
                    Help us improve this dictionary by suggesting new translations or examples.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related words section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card className="p-4 bg-background/50 shadow-sm">
            <h3 className="text-sm font-medium mb-2">Recently Viewed</h3>
            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground">Your recently viewed words will appear here</p>
            </div>
          </Card>
          <Card className="p-4 bg-background/50 shadow-sm">
            <h3 className="text-sm font-medium mb-2">Related Words</h3>
            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground">Words related to &quot;{wordData.word}&quot; will appear here</p>
            </div>
          </Card>
          <Card className="p-4 bg-background/50 shadow-sm">
            <h3 className="text-sm font-medium mb-2">Contribute</h3>
            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground">Help improve our dictionary by adding your knowledge</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 