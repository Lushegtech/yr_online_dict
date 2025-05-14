'use client'

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isLight = theme === "light"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="relative w-10 h-10"
    >
      <div className="relative w-full h-full">
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
            isLight ? "opacity-100 transform-none" : "opacity-0 scale-0"
          }`}
        >
          <Sun className="h-5 w-5 text-yoruba-gold" />
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
            !isLight ? "opacity-100 transform-none" : "opacity-0 scale-0"
          }`}
        >
          <Moon className="h-5 w-5 text-yoruba-cream" />
        </div>
      </div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 