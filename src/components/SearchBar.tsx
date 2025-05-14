'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { SearchIcon, Loader2, ArrowRight, MicIcon, Search, History, X } from 'lucide-react';
import { searchWords } from '@/lib/api';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
  onSearch: (term: string) => void;
  suggestions?: string[];
  isLoading?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  suggestions = [],
  isLoading = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const listId = 'search-suggestions';

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const saveRecentSearch = (term: string) => {
    const updated = [term, ...recentSearches.filter(t => t !== term)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const handleSearch = (term: string) => {
    if (term.trim()) {
      onSearch(term);
      saveRecentSearch(term);
      setSearchTerm(term);
      setIsFocused(false);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  // Debounced search function
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!searchTerm) {
        // Handle empty search term
        return;
      }

      try {
        const normalizedQuery = searchTerm.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const results = await searchWords(normalizedQuery);
        // Handle search results
      } catch (error) {
        console.error('Search error:', error);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Enhanced animations
  useEffect(() => {
    // Animate input focus state
    if (isFocused && searchBarRef.current) {
      gsap.to(searchBarRef.current, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else if (searchBarRef.current) {
      gsap.to(searchBarRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    // Animate suggestions with staggered reveal
    if (suggestions.length > 0 && suggestionRef.current) {
      gsap.fromTo(
        suggestionRef.current.children,
        { opacity: 0, y: 15, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          stagger: 0.05, 
          duration: 0.3,
          ease: 'back.out(1.5)' 
        }
      );
    }
  }, [suggestions, isFocused]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      // Implement arrow down logic
    }
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // Implement arrow up logic
    }
    else if (e.key === 'Enter' && searchTerm) {
      e.preventDefault();
      handleSearch(searchTerm);
    }
    else if (e.key === 'Escape') {
      setSearchTerm('');
      inputRef.current?.blur();
    }
  }

  // Simulated voice search
  function toggleVoiceSearch() {
    // Implement voice search logic
  }

  return (
    <div className="relative w-full max-w-2xl">
      {/* Search input */}
      <div className="relative">
        <motion.div
          initial={false}
          animate={{
            boxShadow: isFocused
              ? '0 0 0 2px rgba(var(--yoruba-gold), 0.3)'
              : '0 0 0 1px rgba(255, 255, 255, 0.1)',
          }}
          className="relative rounded-full bg-white/10 backdrop-blur-md transition-colors"
        >
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            onKeyDown={handleKeyDown}
            placeholder="Search Yoruba words..."
            className="w-full rounded-full bg-transparent px-6 py-4 pl-12 text-lg text-yoruba-cream placeholder:text-yoruba-cream/50 focus:outline-none"
          />
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-yoruba-cream/50" />
        </motion.div>

        {/* Loading indicator */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2"
            >
              <div className="h-full w-full animate-spin rounded-full border-2 border-yoruba-cream/10 border-t-yoruba-gold" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dropdown for suggestions and recent searches */}
      <AnimatePresence>
        {isFocused && (searchTerm || recentSearches.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute mt-2 w-full rounded-xl bg-white/10 p-2 backdrop-blur-md"
          >
            {/* Recent searches */}
            {recentSearches.length > 0 && !searchTerm && (
              <div className="mb-2">
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-2 text-sm text-yoruba-cream/70">
                    <History className="h-4 w-4" />
                    Recent Searches
                  </div>
                  <button
                    onClick={clearRecentSearches}
                    className="text-sm text-yoruba-coral hover:text-yoruba-coral/80"
                  >
                    Clear
                  </button>
                </div>
                {recentSearches.map((term, index) => (
                  <motion.button
                    key={term}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSearch(term)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-yoruba-cream hover:bg-white/5"
                  >
                    {term}
                    <X
                      className="h-4 w-4 text-yoruba-cream/50 hover:text-yoruba-coral"
                      onClick={(e) => {
                        e.stopPropagation();
                        setRecentSearches(recentSearches.filter(t => t !== term));
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            )}

            {/* Search suggestions */}
            {searchTerm && suggestions.length > 0 && (
              <div>
                <div className="px-3 py-2 text-sm text-yoruba-cream/70">
                  Suggestions
                </div>
                {suggestions.map((suggestion, index) => (
                  <motion.button
                    key={suggestion}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSearch(suggestion)}
                    className="flex w-full items-center rounded-lg px-3 py-2 text-left text-yoruba-cream hover:bg-white/5"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 