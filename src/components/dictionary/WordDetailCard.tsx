'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Volume2, Star, ExternalLink, CornerDownLeft, Bookmark } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WordDetailCardProps {
  word: {
    yoruba: string
    english: string
    phonetic?: string
    partOfSpeech: string
    example?: {
      yoruba: string
      english: string
    }
    audio?: string
    etymology?: string
    variants?: string[]
  }
  className?: string
}

export function WordDetailCard({ word, className }: WordDetailCardProps) {
  const [isFavorited, setIsFavorited] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)
  
  const handlePlayAudio = async () => {
    if (!word.audio) return
    
    setIsPlaying(true)
    try {
      const audio = new Audio(word.audio)
      await audio.play()
    } catch (error) {
      console.error('Failed to play audio:', error)
    } finally {
      setIsPlaying(false)
    }
  }
  
  return (
    <Card className={cn(
      "border-yoruba-indigo/20 overflow-hidden shadow-adire transition-all duration-300 hover:shadow-cultural card-pattern-overlay",
      className
    )}>
      <div className="relative">
        {/* Cultural Pattern Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-yoruba-indigo/5 to-yoruba-gold/5 dark:from-yoruba-indigo/10 dark:to-yoruba-gold/10" />
        
        <CardHeader className="relative border-b border-yoruba-gold/10 pb-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-3xl font-bold text-yoruba-coral">{word.yoruba}</h3>
              <div className="flex items-center gap-3">
                {word.phonetic && (
                  <span className="text-sm text-muted-foreground font-mono">{word.phonetic}</span>
                )}
                {word.audio && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePlayAudio}
                    className="hover:text-yoruba-emerald yoruba-interactive p-0 h-8 w-8"
                    disabled={isPlaying}
                  >
                    <Volume2 className={`h-5 w-5 ${isPlaying ? 'animate-yoruba-pulse text-yoruba-emerald' : ''}`} />
                  </Button>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFavorited(!isFavorited)}
                className={cn(
                  "p-0 h-8 w-8",
                  isFavorited ? "text-yoruba-gold animate-yoruba-pulse" : "text-muted-foreground hover:text-yoruba-gold"
                )}
              >
                <Star className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-yoruba-emerald yoruba-interactive p-0 h-8 w-8"
              >
                <Bookmark className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="relative pt-4 space-y-4">
          <div>
            <span className="text-sm font-medium text-yoruba-indigo bg-yoruba-indigo/10 px-2 py-0.5 rounded-full">
              {word.partOfSpeech}
            </span>
            <p className="mt-2 text-lg">{word.english}</p>
          </div>
          
          {word.etymology && (
            <div className="text-sm text-muted-foreground pt-2 border-t border-yoruba-indigo/10">
              <span className="font-medium text-yoruba-indigo dark:text-yoruba-gold">Etymology: </span>
              {word.etymology}
            </div>
          )}
          
          {word.example && (
            <div className="pt-2 border-t border-yoruba-gold/20">
              <p className="text-yoruba-indigo dark:text-yoruba-gold italic font-serif">
                &ldquo;{word.example.yoruba}&rdquo;
              </p>
              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                <CornerDownLeft className="h-3 w-3" />
                {word.example.english}
              </p>
            </div>
          )}
          
          {word.variants && word.variants.length > 0 && (
            <div className="pt-2 border-t border-yoruba-indigo/10">
              <span className="text-sm font-medium text-yoruba-indigo dark:text-yoruba-gold">Variants: </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {word.variants.map((variant, index) => (
                  <span key={index} className="text-sm bg-yoruba-cream dark:bg-yoruba-indigo/20 px-2 py-1 rounded-md">
                    {variant}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="relative pt-2 pb-4 flex justify-end">
          <Button 
            variant="outline" 
            size="sm"
            className="btn-yoruba-secondary text-xs"
          >
            <ExternalLink className="mr-1 h-3 w-3" />
            More Details
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
} 