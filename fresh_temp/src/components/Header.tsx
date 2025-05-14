'use client'

import Link from 'next/link'
import { MenuIcon, Search, BookOpen, ChevronDown, Globe, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface HeaderProps {
  onMenuClick: () => void
  isCollapsed?: boolean
  onCollapseToggle?: () => void
}

export function Header({ 
  onMenuClick, 
  isCollapsed = false,
  onCollapseToggle
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Subtle accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-primary/50 via-primary/80 to-primary/50" />
      
      {/* Main header */}
      <div className="w-full border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div className="container flex h-14 items-center px-4 sm:px-6 lg:px-8">
          {/* Logo section */}
          <div className="flex items-center">
            {/* Mobile menu trigger */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="mr-1 lg:hidden text-muted-foreground hover:text-foreground" 
              onClick={onMenuClick}
              aria-label="Toggle menu"
            >
              <MenuIcon size={18} />
            </Button>
            
            {/* Brand logo and name */}
            <Link href="/" className="flex items-center space-x-2 mr-6">
              <div className="flex h-8 w-8 rounded bg-primary/10 items-center justify-center">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <span className="font-medium text-base hidden sm:inline-block">Yorùbá Dictionary</span>
            </Link>
          </div>

          {/* Search */}
          <div className="mx-auto w-full max-w-md lg:max-w-xl">
              <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for a word..."
                className="h-9 w-full pl-9 rounded-full text-sm border-border/40 bg-background/50 focus-visible:bg-background/90 focus-visible:ring-1 focus-visible:ring-primary/20"
                />
            </div>
          </div>

          {/* Actions */}
          <nav className="flex items-center gap-1 ml-6">
            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground hover:text-foreground px-2 h-8 hidden md:flex"
                  type="button"
                >
                  <Globe className="h-3.5 w-3.5 mr-1.5" />
                  <span className="text-sm">English</span>
                  <ChevronDown className="h-3 w-3 ml-1 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36">
                <DropdownMenuItem className="text-sm">English</DropdownMenuItem>
                <DropdownMenuItem className="text-sm">Yorùbá</DropdownMenuItem>
                <DropdownMenuItem className="text-sm">Français</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme toggle */}
            <ThemeToggle />
            
            {/* Contribute button - primary action */}
            <Button 
              variant="default" 
              size="sm" 
              asChild 
              className="hidden sm:flex h-8 px-3 text-sm font-medium bg-primary hover:bg-primary/90 ml-1"
            >
              <Link href="/contribute">Contribute</Link>
            </Button>
            
            {/* User profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full ml-1 hidden md:flex bg-background hover:bg-background"
                  aria-label="User menu"
                  type="button"
                >
                  <span className="h-7 w-7 rounded-full bg-primary/10 hover:bg-primary/15 flex items-center justify-center">
                    <User className="h-3.5 w-3.5 text-primary" />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="text-sm">Profile</DropdownMenuItem>
                <DropdownMenuItem className="text-sm">My Words</DropdownMenuItem>
                <DropdownMenuItem className="text-sm">Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-sm text-destructive">Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </nav>
        </div>
      </div>
    </header>
  )
} 