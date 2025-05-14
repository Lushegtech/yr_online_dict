'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { BookOpen, MessageSquare, Image, Users } from "lucide-react"

interface TabResultsProps {
  word: string
  translations?: Array<{
    translation: string
    partOfSpeech: string
    definition: string
    frequency?: number
  }>
  contextExamples?: Array<{
    yoruba: string
    english: string
    source?: string
  }>
  pictures?: Array<{
    url: string
    caption: string
    source: string
  }>
  communityNotes?: Array<{
    note: string
    author: string
    timestamp: string
  }>
}

export function TabResults({ 
  word,
  translations = [],
  contextExamples = [],
  pictures = [],
  communityNotes = []
}: TabResultsProps) {
  return (
    <Tabs defaultValue="translations" className="w-full">
      <TabsList className="bg-[#0A0F1C] border-b border-gray-800">
        <TabsTrigger 
          value="translations" 
          className="flex items-center gap-2 px-6 py-3 text-gray-400 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-yoruba-coral"
        >
          <BookOpen className="h-4 w-4" />
          <span>Translations</span>
        </TabsTrigger>
        <TabsTrigger 
          value="context" 
          className="flex items-center gap-2 px-6 py-3 text-gray-400 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-yoruba-coral"
        >
          <MessageSquare className="h-4 w-4" />
          <span>In Context</span>
        </TabsTrigger>
        <TabsTrigger 
          value="pictures" 
          className="flex items-center gap-2 px-6 py-3 text-gray-400 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-yoruba-coral"
        >
          <Image className="h-4 w-4" />
          <span>Pictures</span>
        </TabsTrigger>
        <TabsTrigger 
          value="community" 
          className="flex items-center gap-2 px-6 py-3 text-gray-400 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-yoruba-coral"
        >
          <Users className="h-4 w-4" />
          <span>Community</span>
        </TabsTrigger>
      </TabsList>

      {/* Translations Tab */}
      <TabsContent value="translations">
        <div className="space-y-4 bg-[#0A0F1C] p-6 rounded-lg">
          {translations.length > 0 ? (
            translations.map((item, index) => (
              <div key={index} className="space-y-2 pb-4 border-b border-gray-800 last:border-0">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl text-white">{item.translation}</h3>
                      <span className="text-sm text-gray-400">{item.partOfSpeech}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{item.definition}</p>
                  </div>
                  {item.frequency && (
                    <div className="text-sm text-gray-400">
                      Usage: {item.frequency}%
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <EmptyState
              icon={<BookOpen className="h-8 w-8" />}
              title="No translations available"
              description="We don't have any translations for this word yet."
            />
          )}
        </div>
      </TabsContent>

      {/* Context Examples Tab */}
      <TabsContent value="context">
        <div className="space-y-4 bg-[#0A0F1C] p-6 rounded-lg">
          {contextExamples.length > 0 ? (
            contextExamples.map((example, index) => (
              <div key={index} className="space-y-2 pb-4 border-b border-gray-800 last:border-0">
                <p className="text-white">{example.yoruba}</p>
                <p className="text-gray-400">{example.english}</p>
                {example.source && (
                  <p className="text-sm text-gray-500 mt-2">
                    Source: {example.source}
                  </p>
                )}
              </div>
            ))
          ) : (
            <EmptyState
              icon={<MessageSquare className="h-8 w-8" />}
              title="No examples available"
              description="We don't have any context examples for this word yet."
            />
          )}
        </div>
      </TabsContent>

      {/* Pictures Tab */}
      <TabsContent value="pictures">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#0A0F1C] p-6 rounded-lg">
          {pictures.length > 0 ? (
            pictures.map((picture, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-gray-800">
                <div className="aspect-video relative">
                  <img
                    src={picture.url}
                    alt={picture.caption}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 bg-[#0A0F1C]">
                  <p className="text-white mb-1">{picture.caption}</p>
                  <p className="text-sm text-gray-400">
                    Source: {picture.source}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <EmptyState
              icon={<Image className="h-8 w-8" />}
              title="No pictures available"
              description="We don't have any pictures for this word yet."
            />
          )}
        </div>
      </TabsContent>

      {/* Community Tab */}
      <TabsContent value="community">
        <div className="space-y-4 bg-[#0A0F1C] p-6 rounded-lg">
          {communityNotes.length > 0 ? (
            communityNotes.map((note, index) => (
              <div key={index} className="space-y-2 pb-4 border-b border-gray-800 last:border-0">
                <p className="text-gray-300">{note.note}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{note.author}</span>
                  <span>•</span>
                  <span>{note.timestamp}</span>
                </div>
              </div>
            ))
          ) : (
            <EmptyState
              icon={<Users className="h-8 w-8" />}
              title="No community notes"
              description="There are no community contributions for this word yet."
            />
          )}
        </div>
      </TabsContent>
    </Tabs>
  )
}

function EmptyState({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
} 