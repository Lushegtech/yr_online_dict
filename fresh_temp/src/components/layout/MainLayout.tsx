'use client'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { useState, useEffect } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SidePanel } from './SidePanel'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  // State for panel visibility
  const [sidePanelOpen, setSidePanelOpen] = useState(false)
  const [panelCollapsed, setPanelCollapsed] = useState(false)
  
  // Initialize based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const isMobile = window.innerWidth < 1024;
      setSidePanelOpen(!isMobile);
      }
    }
    
    // Run on mount only
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Toggle panel visibility on mobile
  const toggleSidePanel = () => {
      setSidePanelOpen(prev => !prev);
  };
  
  // Toggle collapsed state
  const toggleCollapse = () => {
      setPanelCollapsed(prev => !prev);
  };
  
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={cn(
        'min-h-screen w-full bg-background font-sans antialiased',
        GeistSans.variable,
        GeistMono.variable
      )}>
        {/* Background elements */}
        <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none bg-[url('/patterns/yoruba-pattern.svg')] dark:opacity-[0.01]" />
        <div className="fixed top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-30 dark:opacity-10 -z-10"></div>
        <div className="fixed bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl opacity-30 dark:opacity-10 -z-10"></div>
        
        {/* Side Panel */}
        <SidePanel 
          isOpen={sidePanelOpen} 
          isCollapsed={panelCollapsed}
          onToggle={toggleSidePanel} 
          onCollapseToggle={toggleCollapse}
        />
        
        {/* Main Content */}
        <div className={cn(
          "transition-all duration-200",
          sidePanelOpen 
            ? panelCollapsed 
              ? "lg:pl-[70px]"   // Collapsed panel width
              : "lg:pl-[280px]"  // Full panel width
            : "lg:pl-0"          // No panel
        )}>
          <Header 
            onMenuClick={toggleSidePanel}
          />
          <main className="relative z-10 w-full">
              {children}
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
} 