import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format a date in a culturally appropriate way
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "long",
  }).format(date)
}

// Generate a unique ID with an optional prefix
export function generateId(prefix = ""): string {
  return `${prefix}${Math.random().toString(36).slice(2, 11)}`
}

// Debounce function for search inputs
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Capitalize first letter of each word in a string
export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Check if a string contains Yoruba diacritical marks
export function hasYorubaDiacritics(str: string): boolean {
  const yorubaDiacritics = /[ẹẸọỌṣṢàáèéìíòóùúāēīōū]/
  return yorubaDiacritics.test(str)
}

// Remove diacritical marks from a string for search normalization
export function removeDiacritics(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}
