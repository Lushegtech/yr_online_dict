'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, Star, Share2 } from "lucide-react"
import { useState } from "react"
import { getAudioUrl, playAudio } from "@/lib/constants"
import { toast } from "@/components/ui/use-toast"

export function WordOfTheDay() {
  const [isFavorited, setIsFavorited] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayAudio = async () => {
    const audioUrl = getAudioUrl('oba')
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
    <div className="space-y-4 yoruba-section">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif text-yoruba-indigo dark:text-yoruba-cream">
          Word of the Day
        </h2>
        <span className="text-sm text-muted-foreground yoruba-badge bg-yoruba-indigo/10 text-yoruba-indigo dark:bg-yoruba-indigo/20 dark:text-yoruba-cream">
          February 20, 2024
        </span>
      </div>

      <Card className="overflow-hidden border-yoruba-indigo/10 card-pattern-overlay shadow-adire hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          {/* Cultural Pattern Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-yoruba-indigo/5 to-yoruba-gold/5 dark:from-yoruba-indigo/10 dark:to-yoruba-gold/10" />
          
          <div className="relative p-6 space-y-6">
            {/* Word Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-yoruba-coral">Ọba</h3>
                <div className="flex items-center gap-3">
                  <span className="text-lg text-muted-foreground font-mono">/ɔ.ba/</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePlayAudio}
                    className="hover:text-yoruba-emerald yoruba-interactive"
                    disabled={isPlaying}
                  >
                    <Volume2 className={`h-5 w-5 ${isPlaying ? 'animate-yoruba-pulse text-yoruba-emerald' : ''}`} />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={isFavorited ? "text-yoruba-gold animate-yoruba-pulse" : "text-muted-foreground hover:text-yoruba-gold"}
                >
                  <Star className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground hover:text-yoruba-emerald yoruba-interactive"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Definition */}
            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-yoruba-indigo bg-yoruba-indigo/10 px-2 py-0.5 rounded-full">noun</span>
                <p className="mt-1 text-lg">King, monarch, or sovereign ruler</p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  In Yoruba culture, the Ọba is more than just a king - they are seen as a divine 
                  representative and custodian of cultural heritage.
                </p>
                <div className="pt-2 border-t border-yoruba-gold/20">
                  <p className="text-yoruba-indigo dark:text-yoruba-gold italic font-serif">
                    "Ọba tuntun jẹ ọba tó dára."
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    The new king is a good king.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
} 