import { MainLayout } from "@/components/layout/MainLayout"
import { DictionarySearch } from "@/components/search/DictionarySearch"
// import { SearchResults } from "@/components/dictionary/SearchResults" - Removed unused import
import { WordOfTheDay } from "@/components/dictionary/WordOfTheDay"
import { DictionaryStats } from "@/components/dictionary/DictionaryStats"
import { ContributeSection } from "@/components/dictionary/ContributeSection"
import { DidYouKnow } from "@/components/dictionary/DidYouKnow"
import { LanguageResourcesSection } from "@/components/dictionary/LanguageResourcesSection"

// Move the example data to a separate file or API endpoint in a real application
const getDictionaryStats = () => ({
  wordCount: 6656,
  translationCount: 12217,
  examples: 40164,
  lastUpdated: "2025-05-15"
})

export default function Home() {
  const stats = getDictionaryStats()

  return (
    <MainLayout>
      <div className="flex flex-col space-y-0">
        {/* Hero Section with Search */}
        <section className="relative py-16 md:py-20 lg:py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/patterns/hero-pattern.svg')] bg-repeat opacity-5" />
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yoruba-indigo dark:text-yoruba-cream animate-fade-in">
                  Yoruba Dictionary
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                  Explore the richness of Yoruba language with our comprehensive dictionary
                </p>
              </div>
              <DictionarySearch />
            </div>
          </div>
        </section>

        {/* Word of the Day Section */}
        <section className="py-10 md:py-12 bg-gradient-to-b from-background via-background/98 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <WordOfTheDay />
            </div>
          </div>
        </section>

        {/* Dictionary Stats Section - Reduced vertical padding */}
        <div className="py-8">
          <DictionaryStats {...stats} />
        </div>

        {/* Did You Know Section - Reduced top padding */}
        <div className="pt-0 md:pt-4">
          <DidYouKnow />
        </div>

        {/* Language Resources Section - New section */}
        <div className="py-16 md:py-20 bg-gradient-to-b from-background/95 via-background to-background/95">
          <LanguageResourcesSection />
        </div>

        {/* Contribute Section - Adjusted padding */}
        <div className="pt-0 pb-16 md:pb-20">
          <ContributeSection />
        </div>
      </div>
    </MainLayout>
  )
}
