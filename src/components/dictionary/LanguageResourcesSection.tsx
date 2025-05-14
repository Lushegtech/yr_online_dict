'use client'

import { BookOpen, Headphones, Video, FileText, PanelRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

// Resource categories with icons and descriptions
const resourceCategories = [
  {
    title: "Learning Guides",
    description: "Structured lessons for beginners to advanced learners",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
    href: "/guides"
  },
  {
    title: "Audio Lessons",
    description: "Pronunciation guides and listening exercises",
    icon: Headphones,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
    href: "/audio"
  },
  {
    title: "Video Tutorials",
    description: "Visual learning through cultural context",
    icon: Video,
    color: "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400",
    href: "/videos"
  },
  {
    title: "Practice Exercises",
    description: "Interactive quizzes and vocabulary drills",
    icon: FileText,
    color: "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
    href: "/practice"
  },
]

// Featured resources with thumbnails and descriptions
const featuredResources = [
  {
    title: "Yoruba Tonal System",
    description: "Master the three tones of Yoruba language with practical examples",
    level: "Beginner",
    duration: "15 min",
    thumbnail: "/images/resources/tones.jpg"
  },
  {
    title: "Common Greetings",
    description: "Learn everyday Yoruba greetings for different situations",
    level: "Beginner",
    duration: "10 min",
    thumbnail: "/images/resources/greetings.jpg"
  },
  {
    title: "Verb Conjugation",
    description: "Understanding how verbs work in Yoruba sentences",
    level: "Intermediate",
    duration: "20 min",
    thumbnail: "/images/resources/verbs.jpg"
  }
]

export function LanguageResourcesSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] bg-repeat opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-yoruba-indigo/20 bg-yoruba-indigo/10 px-4 py-1.5 text-sm font-medium text-yoruba-indigo dark:text-yoruba-cream mb-4"
          >
            <PanelRight className="mr-2 h-3.5 w-3.5" />
            Learning Resources
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-yoruba-indigo dark:text-yoruba-cream sm:text-4xl"
          >
            Master Yoruba Language
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Access comprehensive learning materials to help you speak, read, and understand Yoruba
          </motion.p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link href={category.href} className="block h-full">
                <div className="bg-card border border-border/40 rounded-xl p-6 h-full hover:border-yoruba-indigo/30 transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                  <div className={`rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{category.description}</p>
                  <div className="flex items-center mt-4 text-yoruba-indigo dark:text-yoruba-cream text-sm font-medium">
                    <span>Explore</span>
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Resources */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          Featured Learning Materials
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + 0.1 * index, duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="h-48 overflow-hidden bg-muted/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-yoruba-indigo/10">
                    <BookOpen className="h-12 w-12 text-yoruba-indigo/30 dark:text-yoruba-cream/30" />
                  </div>
                  {/* Uncomment when images are available */}
                  {/* <img 
                    src={resource.thumbnail} 
                    alt={resource.title} 
                    className="w-full h-full object-cover" 
                  /> */}
                </div>
                <CardHeader className="p-5 pb-0">
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="bg-yoruba-indigo/10 text-yoruba-indigo dark:text-yoruba-cream px-2 py-0.5 rounded-full">
                      {resource.level}
                    </span>
                    <span className="text-muted-foreground">{resource.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-5">
                  <Button variant="outline" className="w-full">View Resource</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link href="/resources">
            <Button 
              className="bg-yoruba-indigo hover:bg-yoruba-indigo/90 text-white rounded-full px-8"
            >
              View All Resources
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 