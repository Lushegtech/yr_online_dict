'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getSuggestions } from '@/lib/api';
import { ArrowLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

function NotFoundContent() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const router = useRouter();

  useEffect(() => {
    // Get suggestions based on query if available
    async function fetchSuggestions() {
      if (query) {
        try {
          const suggestedWords = await getSuggestions(query);
          setSuggestions(suggestedWords.slice(0, 5));
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      }
    }

    // Get recently viewed from localStorage
    function getRecentlyViewed() {
      if (typeof window !== 'undefined') {
        const recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        setRecentlyViewed(recent);
      }
    }

    fetchSuggestions();
    getRecentlyViewed();
  }, [query]);

  // Sample recommendations (would ideally come from API)
  const recommendations = ['àdá', 'okú', 'agbára', 'ilé', 'ọmọ'];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-primary/5">
      <div className="relative z-10 pt-16 pb-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Word Not Found</h1>
          <p className="text-lg mb-8 text-muted-foreground">
            {query 
              ? `Sorry, we couldn&apos;t find "${query}" in our dictionary.` 
              : "Sorry, we couldn&apos;t find that word in our dictionary."}
          </p>
          
          <Button 
            onClick={() => router.push('/')}
            className="mb-12 bg-primary hover:bg-primary/90 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {suggestions.length > 0 && (
              <Card className="p-6 shadow-sm animate-fade-in-up">
                <h2 className="text-xl font-bold mb-4">Did you mean?</h2>
                <ul className="space-y-2">
                  {suggestions.map(word => (
                    <li key={word}>
                      <Link 
                        href={`/word/${encodeURIComponent(word)}`}
                        className="hover:text-primary transition-colors hover:underline"
                      >
                        {word}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {recentlyViewed.length > 0 && (
              <Card className="p-6 shadow-sm animate-fade-in-up" style={{animationDelay: "0.2s"}}>
                <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>
                <ul className="space-y-2">
                  {recentlyViewed.map(word => (
                    <li key={word}>
                      <Link 
                        href={`/word/${encodeURIComponent(word)}`}
                        className="hover:text-primary transition-colors hover:underline"
                      >
                        {word}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            <Card className="p-6 shadow-sm md:col-span-2 animate-fade-in-up" style={{animationDelay: "0.3s"}}>
              <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {recommendations.map(word => (
                  <Link 
                    key={word}
                    href={`/word/${encodeURIComponent(word)}`}
                    className="block p-3 text-center rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    {word}
                  </Link>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-sm md:col-span-2 text-center animate-fade-in-up" style={{animationDelay: "0.4s"}}>
              <h2 className="text-xl font-bold mb-4">Submit a Word Request</h2>
              <p className="mb-4 text-muted-foreground">
                Can&apos;t find the word you&apos;re looking for? Let us know and we&apos;ll add it to our dictionary.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Submit a Request
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    }>
      <NotFoundContent />
    </Suspense>
  );
} 