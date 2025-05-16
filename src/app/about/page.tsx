// No longer need client-side rendering since we're not using any client-side state
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-primary/5">
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 animate-fade-in-up">
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold mb-6">About Yorùbá</h1>
              
              <div className="prose prose-lg">
                <p>
                  The Yorùbá language is a Niger-Congo language spoken by approximately 
                  45 million people in West Africa, primarily in Nigeria, Benin, and Togo. 
                  It is one of the largest African languages by number of native speakers.
                </p>
                
                <h2>History and Distribution</h2>
                <p>
                  Yorùbá is the primary language of the Yorùbá people, who form one of 
                  the largest ethnic groups in Nigeria. The language belongs to the 
                  Volta-Niger branch of the Niger-Congo language family. Historical evidence 
                  suggests that the Yorùbá language has been spoken for over a thousand years.
                </p>
                
                <h2>Writing System</h2>
                <p>
                  The modern standard Yorùbá orthography uses the Latin alphabet with additional 
                  diacritics to mark tones and specific sounds. Yorùbá is a tonal language with 
                  three tones: high (marked with an acute accent: á), mid (unmarked: a), and 
                  low (marked with a grave accent: à).
                </p>
                
                <h2>Importance and Cultural Heritage</h2>
                <p>
                  Yorùbá has a rich literary tradition, both oral and written. It is the vehicle 
                  of a vast cultural heritage, including mythology, folklore, poetry, and religious practices. 
                  Yorùbá literature includes a wealth of proverbs, riddles, poems, and stories that 
                  reflect the cultural values and wisdom of the Yorùbá people.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-8 animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">About This Dictionary</h2>
              
              <div className="prose prose-lg">
                <p>
                  This Yorùbá-English dictionary aims to be a comprehensive resource for 
                  learners, researchers, and native speakers. It contains thousands of words, 
                  with definitions, examples, and cultural context.
                </p>
                
                <p>
                  Our dictionary prioritizes accuracy and accessibility. The search feature 
                  allows users to find words even without perfect spelling or tone marks, 
                  making it easier for beginners to use.
                </p>
                
                <p>
                  We continue to expand our database and welcome contributions from the 
                  community. If you notice any errors or would like to suggest additions, 
                  please use the "Submit a Request" feature.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{animationDelay: "0.4s"}}>
            <Card className="shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">40+ Million</h3>
              <p className="text-muted-foreground">
                Yorùbá is spoken by over 40 million people worldwide, making it 
                one of the most widely spoken African languages.
              </p>
            </Card>
            
            <Card className="shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">3 Tones</h3>
              <p className="text-muted-foreground">
                Yorùbá is a tonal language with three tones: high (á), mid (a), 
                and low (à), which change the meaning of words.
              </p>
            </Card>
            
            <Card className="shadow-sm p-6">
              <h2 className="text-xl font-bold mb-2">Rich Literature</h2>
              <p className="text-muted-foreground">
                From oral traditions to modern novels, Yorùbá has a vibrant 
                literary tradition spanning centuries.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 