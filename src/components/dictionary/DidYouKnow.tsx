'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { LightbulbIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

interface Variation {
  tone: string;
  meaning: string;
}

interface Example {
  word?: string;
  variations?: Variation[];
  proverb?: string;
  meaning?: string;
  number?: string;
  usage?: string;
}

interface Fact {
  title: string;
  description: string;
  example: Example;
}

const facts: Fact[] = [
  {
    title: "Tonal Language",
    description: "The Yoruba language is tonal, with three tones: high (´), mid (unmarked), and low (`). These tones can change the meaning of words completely.",
    example: {
      word: "igba",
      variations: [
        { tone: "ìgbà", meaning: "time" },
        { tone: "igbá", meaning: "calabash" },
        { tone: "ìgbá", meaning: "garden egg" },
      ],
    },
  },
  {
    title: "Rich Proverbs",
    description: "Yoruba is known for its rich collection of proverbs (òwe), which are considered 'the horses of speech' - when words are lost, proverbs are used to find them.",
    example: {
      proverb: "Òwe lẹṣin ọ̀rọ̀, bí ọ̀rọ̀ bá sonù, òwe la fi ńwá a.",
      meaning: "Proverbs are the horses of speech, when speech is lost, we use proverbs to find it.",
    },
  },
  {
    title: "Numerical System",
    description: "The Yoruba numerical system is vigesimal (base-20) rather than decimal (base-10), reflecting the traditional counting method using fingers and toes.",
    example: {
      number: "ogún",
      meaning: "twenty (20)",
      usage: "Basic unit in the vigesimal system",
    },
  },
]

export function DidYouKnow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hovering, setHovering] = useState(false)
  
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.6, 1, 1, 0.6])
  
  // Auto advance carousel
  useEffect(() => {
    if (!isAutoPlaying || hovering || !inView) return
    
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % facts.length)
    }, 6000)
    
    return () => clearInterval(timer)
  }, [isAutoPlaying, hovering, inView])
  
  // Scroll to active slide
  useEffect(() => {
    if (!carouselRef.current) return
    
    const slideWidth = carouselRef.current.offsetWidth
    carouselRef.current.scrollTo({
      left: activeIndex * slideWidth,
      behavior: 'smooth'
    })
  }, [activeIndex])
  
  // Handle manual navigation
  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setActiveIndex(prev => (prev - 1 + facts.length) % facts.length)
  }
  
  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex(prev => (prev + 1) % facts.length)
  }

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
  }

  // Mouse drag functionality
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    
    let startX: number
    let scrollLeft: number
    let isDragging = false
    
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true
      carousel.classList.add('grabbing')
      startX = e.pageX - carousel.offsetLeft
      scrollLeft = carousel.scrollLeft
    }
    
    const onMouseUp = () => {
      isDragging = false
      carousel.classList.remove('grabbing')
      
      // Find nearest slide
      const slideWidth = carousel.offsetWidth
      const newIndex = Math.round(carousel.scrollLeft / slideWidth)
      setActiveIndex(Math.max(0, Math.min(facts.length - 1, newIndex)))
    }
    
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      
      const x = e.pageX - carousel.offsetLeft
      const walk = (x - startX) * 2 // Adjust speed
      carousel.scrollLeft = scrollLeft - walk
    }
    
    const onMouseLeave = () => {
      if (isDragging) {
        isDragging = false
        carousel.classList.remove('grabbing')
      }
    }
    
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      carousel.scrollLeft += e.deltaY
      
      // Debounce to set active index
      clearTimeout(carousel.dataset.scrollTimeout as any)
      carousel.dataset.scrollTimeout = setTimeout(() => {
        const slideWidth = carousel.offsetWidth
        const newIndex = Math.round(carousel.scrollLeft / slideWidth)
        setActiveIndex(Math.max(0, Math.min(facts.length - 1, newIndex)))
      }, 150) as any
    }
    
    carousel.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)
    carousel.addEventListener('mouseleave', onMouseLeave)
    carousel.addEventListener('wheel', onWheel, { passive: false })
    
    return () => {
      carousel.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
      carousel.removeEventListener('mouseleave', onMouseLeave)
      carousel.removeEventListener('wheel', onWheel)
    }
  }, [facts.length])

  // Touch functionality for mobile
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    
    let startX: number
    let scrollLeft: number
    
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX - carousel.offsetLeft
      scrollLeft = carousel.scrollLeft
    }
    
    const onTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].pageX - carousel.offsetLeft
      const walk = (startX - x) * 1.5
      carousel.scrollLeft = scrollLeft + walk
    }
    
    const onTouchEnd = () => {
      const slideWidth = carousel.offsetWidth
      const newIndex = Math.round(carousel.scrollLeft / slideWidth)
      setActiveIndex(Math.max(0, Math.min(facts.length - 1, newIndex)))
    }
    
    carousel.addEventListener('touchstart', onTouchStart)
    carousel.addEventListener('touchmove', onTouchMove)
    carousel.addEventListener('touchend', onTouchEnd)
    
    return () => {
      carousel.removeEventListener('touchstart', onTouchStart)
      carousel.removeEventListener('touchmove', onTouchMove)
      carousel.removeEventListener('touchend', onTouchEnd)
    }
  }, [facts.length])

  return (
    <section 
      ref={ref} 
      className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-background via-background/90 to-background"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 bg-[url('/patterns/circuit.svg')] bg-repeat opacity-10 z-0"
        style={{ y: backgroundY }}
      />
      
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-radial-gradient z-0" />
      
      {/* Content */}
      <motion.div 
        ref={containerRef}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-yoruba-gold/20 bg-yoruba-gold/10 px-4 py-1.5 text-sm font-medium text-yoruba-gold mb-4 backdrop-blur-md"
          >
            <LightbulbIcon className="w-4 h-4 mr-2" />
            Language Insights
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-yoruba-indigo dark:text-yoruba-cream sm:text-5xl"
          >
            Did You Know?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover fascinating facts about the Yoruba language and its unique characteristics.
          </motion.p>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="hidden sm:flex justify-between items-center absolute top-1/2 left-4 right-4 -mt-6 z-10 pointer-events-none">
          <button 
            onClick={handlePrevious}
            className="p-2 rounded-full bg-background/80 border border-white/10 backdrop-blur-sm shadow-lg text-yoruba-indigo dark:text-yoruba-cream pointer-events-auto transition-all hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="p-2 rounded-full bg-background/80 border border-white/10 backdrop-blur-sm shadow-lg text-yoruba-indigo dark:text-yoruba-cream pointer-events-auto transition-all hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex cursor-grab select-none"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {facts.map((fact, index) => (
            <div 
              key={fact.title}
              className="min-w-full w-full flex-shrink-0 snap-center flex justify-center px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.3 + index * 0.1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 50
                }}
                className="relative w-full max-w-4xl group"
              >
                {/* Glowing gradient backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yoruba-indigo via-yoruba-gold to-yoruba-indigo opacity-0 group-hover:opacity-30 blur-xl rounded-3xl transition-all duration-700 group-hover:duration-500" />
                
                {/* Card content */}
                <div className="relative flex flex-col md:flex-row overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 dark:from-black/20 dark:via-black/10 dark:to-black/20 p-8 backdrop-blur-md border border-white/10 shadow-xl">
                  {/* Title and description */}
                  <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 relative">
                    <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-yoruba-indigo/10 blur-3xl" />
                    <h3 className="text-2xl font-bold text-yoruba-indigo dark:text-yoruba-cream mb-4 relative z-10">
                      {fact.title}
                    </h3>
                    <p className="text-md text-muted-foreground mb-6 relative z-10 leading-relaxed">
                      {fact.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="hidden md:block absolute bottom-4 left-0 w-32 h-1 bg-gradient-to-r from-yoruba-indigo to-yoruba-gold opacity-60 rounded-full" />
                  </div>
                  
                  {/* Example card */}
                  <div className="md:w-1/2 relative flex items-center">
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-yoruba-gold/10 blur-3xl" />
                    <div className="w-full rounded-lg bg-yoruba-indigo/5 dark:bg-yoruba-indigo/10 p-6 border border-yoruba-indigo/10 relative z-10 transform transition-transform group-hover:translate-y-[-5px] group-hover:translate-x-[-5px] duration-500">
                      {fact.example.variations ? (
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-yoruba-indigo dark:text-yoruba-cream pb-2 border-b border-yoruba-indigo/20">
                            Example: <span className="font-mono">{fact.example.word}</span>
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {fact.example.variations.map((v) => (
                              <li key={v.tone} className="flex justify-between items-center">
                                <span className="font-mono text-md font-medium text-yoruba-indigo/80 dark:text-yoruba-cream/80">{v.tone}</span>
                                <span className="bg-background/50 dark:bg-background/30 px-3 py-1 rounded-full text-sm">{v.meaning}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : fact.example.proverb ? (
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-yoruba-indigo dark:text-yoruba-cream pb-2 border-b border-yoruba-indigo/20">
                            Yoruba Proverb
                          </h4>
                          <p className="text-md italic text-yoruba-indigo/90 dark:text-yoruba-cream/90 font-medium">
                            "{fact.example.proverb}"
                          </p>
                          <div className="flex items-center pt-2">
                            <div className="h-[1px] flex-grow bg-yoruba-indigo/20"></div>
                            <span className="px-2 text-xs text-muted-foreground">Translation</span>
                            <div className="h-[1px] flex-grow bg-yoruba-indigo/20"></div>
                          </div>
                          <p className="text-sm text-muted-foreground bg-background/50 dark:bg-background/30 p-3 rounded-lg">
                            {fact.example.meaning}
                          </p>
                        </div>
                      ) : fact.example.number ? (
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-yoruba-indigo dark:text-yoruba-cream pb-2 border-b border-yoruba-indigo/20">
                            Numerical System
                          </h4>
                          <div className="flex justify-between items-center">
                            <span className="font-mono text-xl font-bold text-yoruba-indigo dark:text-yoruba-cream">
                              {fact.example.number}
                            </span>
                            <span className="bg-background/50 dark:bg-background/30 px-3 py-1 rounded-full text-sm">
                              {fact.example.meaning}
                            </span>
                          </div>
                          <div className="mt-2 bg-yoruba-indigo/10 p-3 rounded-lg">
                            <p className="text-sm italic text-muted-foreground">
                              {fact.example.usage}
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {facts.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`group relative p-2 focus:outline-none transition-all duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span 
                className={`block w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${index === activeIndex 
                    ? 'bg-yoruba-indigo dark:bg-yoruba-cream scale-125' 
                    : 'bg-yoruba-indigo/30 dark:bg-yoruba-cream/30 scale-100 group-hover:bg-yoruba-indigo/60 group-hover:dark:bg-yoruba-cream/60'
                  }`}
              />
              <span 
                className={`absolute inset-0 rounded-full -z-10 transition-all duration-300
                  ${index === activeIndex 
                    ? 'bg-yoruba-indigo/20 dark:bg-yoruba-cream/20 scale-175 opacity-100' 
                    : 'bg-transparent scale-100 opacity-0'
                  }`}
              />
            </button>
          ))}
        </div>
        
        {/* Dragging Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-xs text-center mt-4 text-muted-foreground"
        >
          Drag or use arrow keys to explore more facts
        </motion.p>
      </motion.div>
    </section>
  )
} 