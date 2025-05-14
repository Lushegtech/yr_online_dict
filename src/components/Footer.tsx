'use client'

import { BookOpen, Heart, Mail, Github, Globe, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-background">
      {/* Main Footer */}
      <div className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-12">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="flex flex-col space-y-4">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yoruba-coral to-yoruba-gold rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-background rounded-lg p-2">
                    <BookOpen className="h-6 w-6 text-yoruba-coral" />
                  </div>
                </div>
                <span className="font-bold text-xl tracking-tight text-yoruba-indigo dark:text-yoruba-cream">Yoruba Lexicon</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Celebrating and preserving Yoruba language and culture through digital innovation. Join us in our mission to make Yoruba language learning accessible to everyone.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-yoruba-coral/50 hover:bg-yoruba-coral hover:text-white hover:border-yoruba-coral yoruba-interactive">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-yoruba-indigo/50 hover:bg-yoruba-indigo hover:text-white hover:border-yoruba-indigo yoruba-interactive">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-yoruba-gold/50 hover:bg-yoruba-gold hover:text-yoruba-indigo hover:border-yoruba-gold yoruba-interactive">
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg text-yoruba-indigo dark:text-yoruba-cream">Quick Links</h3>
              <div className="grid gap-2">
                <Link href="/about" className="text-sm text-muted-foreground hover:text-yoruba-coral transition-colors flex items-center gap-2 group">
                  About Us
                  <ExternalLink className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
                <Link href="/contribute" className="text-sm text-muted-foreground hover:text-yoruba-coral transition-colors flex items-center gap-2 group">
                  Contribute
                  <ExternalLink className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-yoruba-coral transition-colors flex items-center gap-2 group">
                  Contact
                  <ExternalLink className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg text-yoruba-indigo dark:text-yoruba-cream">Resources</h3>
              <div className="grid gap-2">
                <Link href="/dictionary" className="text-sm text-muted-foreground hover:text-yoruba-coral transition-colors flex items-center gap-2 group">
                  Dictionary
                  <ExternalLink className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
                <Link href="/learn" className="text-sm text-muted-foreground hover:text-yoruba-coral transition-colors flex items-center gap-2 group">
                  Learning Resources
                  <ExternalLink className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
                <Link href="/culture" className="text-sm text-muted-foreground hover:text-yoruba-coral transition-colors flex items-center gap-2 group">
                  Cultural Context
                  <ExternalLink className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg text-yoruba-indigo dark:text-yoruba-cream">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for updates on new words, cultural insights, and learning resources.
              </p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-9 w-full px-4 rounded-lg bg-background border border-yoruba-indigo/20 text-sm 
                          focus:border-yoruba-coral focus:ring-2 focus:ring-yoruba-coral/20
                          transition-all duration-150"
                />
                <button className="btn-yoruba-primary py-2 px-4 rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/40">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-yoruba-coral" />
                  <span className="h-2 w-2 rounded-full bg-yoruba-gold" />
                  <span className="h-2 w-2 rounded-full bg-yoruba-indigo" />
                </div>
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Yoruba Lexicon. All rights reserved.
                </p>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <Link href="/privacy" className="hover:text-yoruba-coral transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-yoruba-coral transition-colors">Terms of Use</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Accent Bar */}
      <div className="h-1.5 bg-gradient-to-r from-yoruba-gold via-yoruba-coral to-yoruba-indigo" />
    </footer>
  )
} 