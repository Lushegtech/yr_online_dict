'use client'

import { motion } from 'framer-motion'
import { Book, RefreshCcw, Users, Clock } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

interface DictionaryStatsProps {
  wordCount: number
  translationCount: number
  contributors: number
  lastUpdated: string
  examples: number
}

const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = value / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start > value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

const StatCard = ({ 
  icon: Icon, 
  label, 
  value, 
  delay,
  isDate = false 
}: { 
  icon: any; 
  label: string; 
  value: number | string;
  delay: number;
  isDate?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background/50 to-background/10 p-6 backdrop-blur-sm border border-white/10"
  >
    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-yoruba-indigo/10 blur-2xl" />
    <div className="relative flex items-center gap-4">
      <div className="rounded-lg bg-yoruba-indigo/10 p-3">
        <Icon className="h-6 w-6 text-yoruba-indigo dark:text-yoruba-cream" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <h4 className="text-2xl font-bold text-foreground">
          {isDate ? value : <AnimatedCounter value={value as number} />}
        </h4>
      </div>
    </div>
  </motion.div>
)

export function DictionaryStats({
  wordCount,
  translationCount,
  contributors,
  lastUpdated,
  examples,
}: DictionaryStatsProps) {
  return (
    <section className="relative py-12 md:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat opacity-5" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-yoruba-indigo dark:text-yoruba-cream sm:text-4xl"
          >
            Dictionary Statistics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Track our progress in preserving and promoting the Yoruba language
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Book}
            label="Total Words"
            value={wordCount}
            delay={0.3}
          />
          <StatCard
            icon={RefreshCcw}
            label="Translations"
            value={translationCount}
            delay={0.4}
          />
          <StatCard
            icon={Users}
            label="Examples"
            value={examples}
            delay={0.5}
          />
          <StatCard
            icon={Clock}
            label="Last Updated"
            value={lastUpdated}
            delay={0.6}
            isDate
          />
        </div>
      </div>
    </section>
  )
} 