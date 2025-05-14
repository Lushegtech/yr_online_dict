'use client'

import { useEffect, useState } from 'react'
import { Clock, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface HistoryItem {
  word: string
  timestamp: string
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([])

  useEffect(() => {
    // Load history from localStorage
    const savedHistory = localStorage.getItem('searchHistory')
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  const clearHistory = () => {
    localStorage.removeItem('searchHistory')
    setHistory([])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Clock className="h-6 w-6 text-yoruba-coral" />
          <h1 className="text-2xl font-bold">Search History</h1>
        </div>
        {history.length > 0 && (
          <Button
            variant="outline"
            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50"
            onClick={clearHistory}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear History
          </Button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="text-center py-12">
          <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">No Search History</h2>
          <p className="text-muted-foreground">
            Your search history will appear here once you start looking up words.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {history.map((item, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{item.word}</h3>
                  <p className="text-sm text-muted-foreground">{item.timestamp}</p>
                </div>
                <Button variant="ghost" size="sm">
                  Look up again
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 