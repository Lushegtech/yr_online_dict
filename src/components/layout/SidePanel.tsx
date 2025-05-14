'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { 
  BookmarkIcon, 
  ClockIcon, 
  SettingsIcon, 
  SearchIcon, 
  XIcon,
  HomeIcon,
  BookOpenIcon,
  HeartIcon,
  InfoIcon,
  PenToolIcon,
  LightbulbIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon
} from 'lucide-react'
import { usePathname } from 'next/navigation'

interface SidePanelProps {
  isOpen: boolean
  isCollapsed?: boolean
  onToggle: () => void
  onCollapseToggle?: () => void
}

export function SidePanel({ 
  isOpen, 
  isCollapsed = false, 
  onToggle, 
  onCollapseToggle 
}: SidePanelProps) {
  const pathname = usePathname()

  // Navigation links with icons
  const mainNavLinks = [
    { name: 'Home', href: '/', icon: <HomeIcon size={18} /> },
    { name: 'Word of the Day', href: '/word-of-day', icon: <BookOpenIcon size={18} /> },
    { name: 'Favorites', href: '/favorites', icon: <HeartIcon size={18} /> },
    { name: 'History', href: '/history', icon: <ClockIcon size={18} /> },
    { name: 'Contribute', href: '/contribute', icon: <PenToolIcon size={18} /> },
    { name: 'About', href: '/about', icon: <InfoIcon size={18} /> },
  ]
  
  // Mock data for tabs
  const recentSearches = [
    { term: 'àgbẹ̀', meaning: 'farmer', timestamp: '2 hours ago' },
    { term: 'ilé', meaning: 'house', timestamp: '3 hours ago' },
    { term: 'ọkọ̀', meaning: 'vehicle', timestamp: 'yesterday' }
  ]
  
  const bookmarks = [
    { term: 'olùkọ́', meaning: 'teacher', category: 'professions' },
    { term: 'adé', meaning: 'crown', category: 'culture' },
    { term: 'ẹ̀kọ́', meaning: 'education', category: 'concepts' }
  ]

  const handleCollapseBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCollapseToggle) {
      onCollapseToggle();
    }
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Side Panel */}
      <aside className={cn(
        "fixed top-0 bottom-0 bg-card/80 backdrop-blur-sm",
        "border-r border-border shadow-sm",
        "transition-all duration-200",
        "flex flex-col",
        "z-50 h-full",
        isOpen ? "left-0" : "-left-[280px]",
        isCollapsed ? "w-[70px] lg:left-0" : "w-[280px] lg:left-0"
      )}>
        {/* Header with accent line matching the main header */}
        <div className="border-b border-border/50">
          <div className="h-0.5 w-full bg-gradient-to-r from-primary/50 via-primary/80 to-primary/50" />
          <div className="flex items-center h-14 px-4">
          {!isCollapsed && (
              <>
                <h2 className="text-base font-medium">Yorùbá Tools</h2>
                <div className="ml-auto flex">
              <Button 
                variant="ghost" 
                size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/60" 
                    onClick={handleCollapseBtnClick}
                    aria-label="Collapse panel"
                    type="button"
                  >
                    <PanelLeftCloseIcon size={16} className="hidden lg:block" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/60 lg:hidden" 
                onClick={onToggle}
                    aria-label="Close panel"
                    type="button"
              >
                    <XIcon size={16} />
              </Button>
            </div>
              </>
          )}
          {isCollapsed && (
              <div className="flex justify-center w-full">
            <Button 
              variant="ghost" 
              size="icon" 
                  className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  onClick={handleCollapseBtnClick}
                  aria-label="Expand panel"
                  type="button"
                >
                  <PanelLeftOpenIcon size={18} />
            </Button>
              </div>
          )}
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="py-2 px-2">
          {mainNavLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={cn(
                "flex items-center gap-2.5 px-3 py-1.5 my-0.5 rounded-md text-sm",
                "transition-colors",
                pathname === link.href 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                isCollapsed && "justify-center px-0"
              )}
            >
              <span className={cn("text-current", isCollapsed && "p-1")}>{link.icon}</span>
              {!isCollapsed && <span>{link.name}</span>}
            </Link>
          ))}
        </nav>
        
        <div className="border-t border-border/40 my-2"></div>
        
        {/* Content Area */}
        {!isCollapsed ? (
          <div className="flex-1 overflow-hidden">
            <Tabs defaultValue="recent" className="h-full flex flex-col">
              <TabsList className="mx-3 justify-start gap-1 mb-2 p-0.5 bg-muted/40 rounded-md">
                <TabsTrigger value="recent" className="text-xs px-2.5 py-1 rounded-sm">
                  Recent
              </TabsTrigger>
                <TabsTrigger value="saved" className="text-xs px-2.5 py-1 rounded-sm">
                  Saved
              </TabsTrigger>
                <TabsTrigger value="tips" className="text-xs px-2.5 py-1 rounded-sm">
                  Tips
              </TabsTrigger>
            </TabsList>
            
              <div className="flex-1 overflow-y-auto px-3 pb-3">
                {/* Recent Tab */}
                <TabsContent value="recent" className="m-0 h-full space-y-1.5 px-3 py-2">
                    {recentSearches.length > 0 ? (
                      recentSearches.map((item, index) => (
                        <div 
                          key={index} 
                        className="w-full text-left p-2.5 rounded-md bg-background/60 hover:bg-background shadow-sm hover:shadow-md border border-border/30 hover:border-primary/20 transition-all flex justify-between cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onClick={() => {}}
                        onKeyDown={(e) => {if (e.key === 'Enter') {}}}
                      >
                            <div>
                          <div className="font-medium text-sm">{item.term}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{item.meaning}</div>
                        </div>
                        <div className="text-[10px] text-muted-foreground self-start mt-0.5 opacity-70">{item.timestamp}</div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-6 text-muted-foreground">
                      <SearchIcon size={18} className="mx-auto mb-2 opacity-30" />
                      <p className="text-xs">No recent searches</p>
                      </div>
                    )}
              </TabsContent>
              
                {/* Saved Tab */}
                <TabsContent value="saved" className="m-0 h-full space-y-1.5 px-3 py-2">
                    {bookmarks.length > 0 ? (
                      bookmarks.map((item, index) => (
                        <div 
                          key={index} 
                        className="w-full text-left p-2.5 rounded-md bg-background/60 hover:bg-background shadow-sm hover:shadow-md border border-border/30 hover:border-primary/20 transition-all flex justify-between cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onClick={() => {}}
                        onKeyDown={(e) => {if (e.key === 'Enter') {}}}
                      >
                            <div>
                          <div className="font-medium text-sm">{item.term}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{item.meaning}</div>
                        </div>
                        <div className="text-[10px] bg-primary/5 text-primary px-1.5 py-0.5 rounded-full self-start mt-0.5 border border-primary/10">{item.category}</div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-6 text-muted-foreground">
                      <BookmarkIcon size={18} className="mx-auto mb-2 opacity-30" />
                      <p className="text-xs">No saved words</p>
                      </div>
                    )}
              </TabsContent>
              
                {/* Tips Tab */}
                <TabsContent value="tips" className="m-0 h-full space-y-1.5 px-3 py-2">
                  <div className="p-2.5 rounded-md bg-background/60 hover:bg-background shadow-sm border border-border/30 hover:border-primary/20 transition-colors">
                    <h4 className="font-medium text-sm flex items-center gap-1.5">
                      <LightbulbIcon size={12} className="text-primary" />
                      Tone Marks
                    </h4>
                    <p className="text-xs mt-1 text-muted-foreground">Yorùbá uses three tone marks: high (´), mid (unmarked), and low (`). Essential for proper pronunciation.</p>
                  </div>
                  
                  <div className="p-2.5 rounded-md bg-background/60 hover:bg-background shadow-sm border border-border/30 hover:border-primary/20 transition-colors">
                    <h4 className="font-medium text-sm flex items-center gap-1.5">
                      <LightbulbIcon size={12} className="text-primary" />
                      Vowel Harmony
                    </h4>
                    <p className="text-xs mt-1 text-muted-foreground">Yorùbá vowels in words generally belong to the same set (either set I: e, o, ẹ, ọ or set II: i, u, a).</p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center pt-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 mb-1.5 text-muted-foreground hover:text-foreground"
              type="button"
            >
              <ClockIcon size={16} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 mb-1.5 text-muted-foreground hover:text-foreground"
              type="button"
            >
              <BookmarkIcon size={16} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 mb-1.5 text-muted-foreground hover:text-foreground"
              type="button"
            >
              <LightbulbIcon size={16} />
            </Button>
          </div>
        )}
        
        {/* Footer */}
        <div className="border-t border-border/40 p-2.5 mt-auto">
          {!isCollapsed ? (
            <div className="space-y-1.5">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full h-8 text-xs flex items-center gap-2 border-border/60 hover:border-primary/30 hover:bg-background"
                asChild
                type="button"
              >
                <Link href="/settings">
                  <SettingsIcon size={12} />
                  <span>Settings</span>
                </Link>
              </Button>
              <div className="text-[10px] text-center text-muted-foreground">
                <span className="text-primary font-medium">Yorùbá Dictionary</span> • v1.0
              </div>
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              asChild
              type="button"
            >
              <Link href="/settings">
                <SettingsIcon size={14} />
              </Link>
            </Button>
        )}
      </div>
      </aside>
    </>
  )
}