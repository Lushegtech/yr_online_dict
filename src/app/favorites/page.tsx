'use client'

import { useEffect, useState } from 'react'
import { Star, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface FavoriteWord {
  word: string
  definition: string
  dateAdded: string
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteWord[]>([])

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('favoriteWords')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const clearFavorites = () => {
    localStorage.removeItem('favoriteWords')
    setFavorites([])
  }

  const removeFavorite = (word: string) => {
    const newFavorites = favorites.filter(fav => fav.word !== word)
    localStorage.setItem('favoriteWords', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Star className="h-6 w-6 text-yoruba-gold" />
          <h1 className="text-2xl font-bold">Favorite Words</h1>
        </div>
        {favorites.length > 0 && (
          <Button
            variant="outline"
            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50"
            onClick={clearFavorites}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12">
          <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">No Favorite Words</h2>
          <p className="text-muted-foreground">
            Start adding words to your favorites by clicking the star icon when viewing word definitions.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {favorites.map((favorite, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold">{favorite.word}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{favorite.definition}</p>
                  <p className="text-xs text-muted-foreground">Added on {favorite.dateAdded}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50"
                    onClick={() => removeFavorite(favorite.word)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 