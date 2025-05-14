'use client'

import { useState } from 'react'
import { TabResults } from "./TabResults"
import { Card } from "@/components/ui/card"
import { Volume2, BookOpen, InfoIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { playAudio } from '@/lib/constants'
import { toast } from '@/components/ui/use-toast'
import { motion } from 'framer-motion'

interface SearchResultsProps {
  word: string
  phonetic?: string
  audioUrl?: string
  tonalMarks?: string
  data: {
    translations: Array<{
      translation: string
      partOfSpeech: string
      definition: string
      frequency?: number
    }>
    contextExamples: Array<{
      yoruba: string
      english: string
      source?: string
    }>
    pictures: Array<{
      url: string
      caption: string
      source: string
    }>
    communityNotes: Array<{
      note: string
      author: string
      timestamp: string
    }>
  }
}

export function SearchResults({ word, phonetic, audioUrl, tonalMarks, data }: SearchResultsProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayAudio = async () => {
    if (!audioUrl) {
      toast({
        title: "Audio not available",
        description: "Sorry, audio is not available for this word.",
        variant: "destructive",
      })
      return
    }

    setIsPlaying(true)
    try {
      await playAudio(audioUrl)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to play audio. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsPlaying(false)
    }
  }

  return (
    <div className="space-y-6 animate-fade-in-search">
      {/* Word Header */}
      <Card className="border-yoruba-indigo/20 overflow-hidden shadow-adire">
        <div className="relative">
          {/* Cultural Pattern Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-yoruba-indigo/5 to-yoruba-gold/5 dark:from-yoruba-indigo/10 dark:to-yoruba-gold/10" />
          
          <div className="relative p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-yoruba-coral">{word}</h1>
                {tonalMarks && (
                  <p className="text-sm text-muted-foreground">Tonal marks: {tonalMarks}</p>
                )}
                {phonetic && (
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-muted-foreground font-mono">
                      {phonetic}
                    </span>
                    {audioUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePlayAudio}
                        disabled={isPlaying}
                        className="hover:text-yoruba-emerald yoruba-interactive"
                      >
                        <Volume2 className={`h-5 w-5 ${isPlaying ? 'animate-yoruba-pulse text-yoruba-emerald' : ''}`} />
                      </Button>
                    )}
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="btn-yoruba-secondary text-xs"
                >
                  <BookOpen className="mr-1 h-3 w-3" />
                  Save Word
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-muted-foreground hover:text-yoruba-emerald yoruba-interactive"
                >
                  <InfoIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Quick Stats - if available */}
            {data.translations && data.translations.length > 0 && (
              <div className="flex items-center gap-3 mt-2">
                <div className="bg-yoruba-indigo/10 dark:bg-yoruba-indigo/20 px-3 py-1 rounded-full text-sm text-yoruba-indigo dark:text-yoruba-cream">
                  {data.translations.length} translations
                </div>
                {data.contextExamples && data.contextExamples.length > 0 && (
                  <div className="bg-yoruba-gold/10 dark:bg-yoruba-gold/20 px-3 py-1 rounded-full text-sm text-yoruba-indigo dark:text-yoruba-cream">
                    {data.contextExamples.length} examples
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Tabbed Content */}
      <TabResults
        word={word}
        translations={data.translations}
        contextExamples={data.contextExamples}
        pictures={data.pictures}
        communityNotes={data.communityNotes}
      />
    </div>
  )
} 