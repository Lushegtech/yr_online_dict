'use client'

import { motion } from 'framer-motion'
import { Languages, BookOpen, Users2, Globe2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
  {
    icon: Languages,
    title: "Add Translations",
    description: "Contribute new word translations and help expand our dictionary.",
  },
  {
    icon: BookOpen,
    title: "Provide Context",
    description: "Add cultural context and usage examples to enrich understanding.",
  },
  {
    icon: Users2,
    title: "Review & Verify",
    description: "Help verify translations and maintain quality standards.",
  },
  {
    icon: Globe2,
    title: "Share Knowledge",
    description: "Share your expertise and preserve Yoruba language heritage.",
  },
]

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: any; 
  title: string; 
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 * index }}
    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background/50 to-background/10 p-8 backdrop-blur-sm border border-white/10 hover:border-yoruba-indigo/50 transition-colors"
  >
    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-yoruba-indigo/10 blur-3xl transition-all group-hover:bg-yoruba-indigo/20" />
    <div className="relative">
      <div className="mb-4 inline-flex rounded-lg bg-yoruba-indigo/10 p-3 text-yoruba-indigo dark:text-yoruba-cream group-hover:bg-yoruba-indigo/20 transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </motion.div>
)

export function ContributeSection() {
  return (
    <section className="relative py-16 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] bg-repeat opacity-5" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-yoruba-indigo/5 to-transparent" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full border border-yoruba-indigo/20 bg-yoruba-indigo/10 px-4 py-1.5 text-sm font-medium text-yoruba-indigo dark:text-yoruba-cream mb-4"
          >
            <span className="mr-2">✨</span>
            Join Our Community
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-yoruba-indigo dark:text-yoruba-cream sm:text-5xl"
          >
            Help Build the Dictionary
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Join our community of passionate contributors and help preserve the richness of Yoruba language for future generations.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex gap-4">
            <Link href="/contribute">
              <Button
                size="lg"
                className="bg-yoruba-indigo hover:bg-yoruba-indigo/90 text-white rounded-full px-8"
              >
                Start Contributing
              </Button>
            </Link>
            <Link href="/guidelines">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                View Guidelines
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Already a contributor?{' '}
            <Link href="/login" className="text-yoruba-indigo hover:text-yoruba-indigo/90 dark:text-yoruba-cream dark:hover:text-yoruba-cream/90">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
} 