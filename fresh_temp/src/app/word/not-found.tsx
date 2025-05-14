'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { MainLayout } from '@/components/layout/MainLayout'
import { NotFoundSuggestions } from '@/components/dictionary/NotFoundSuggestions'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function WordNotFound() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('q') || ''
  const [suggestions, setSuggestions] = useState([])
  
  useEffect(() => {
    // If we have a search term, fetch suggestions
    if (searchTerm) {
      fetch(`/api/dictionary/suggestions?q=${encodeURIComponent(searchTerm)}&limit=5`)
        .then(res => res.json())
        .then(data => {
          if (data.suggestions && Array.isArray(data.suggestions)) {
            const formattedSuggestions = data.suggestions.map((word: any) => {
              if (typeof word === 'string') {
                return { id: word, word }
              }
              return word
            })
            setSuggestions(formattedSuggestions)
          }
        })
        .catch(err => {
          console.error('Error fetching suggestions:', err)
        })
    }
  }, [searchTerm])
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        
        <div className="max-w-3xl mx-auto">
          <NotFoundSuggestions 
            searchTerm={searchTerm} 
            suggestions={suggestions}
          />
        </div>
      </div>
    </MainLayout>
  )
} 