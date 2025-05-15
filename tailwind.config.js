/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-geist-serif)", "Georgia", "serif"],
        display: ["var(--font-geist-display)", "system-ui", "sans-serif"],
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      colors: {
        // Yoruba-inspired color palette - Enhanced with traditional Adire and Aso-Oke textile colors
        'yoruba-coral': {
          DEFAULT: '#E63946', // Vibrant coral-red inspired by Yoruba ceremonial attire
          rgb: '230, 57, 70',
          hover: '#f8686f',
          light: '#ffedee'
        },
        'yoruba-gold': {
          DEFAULT: '#F4D35E', // Rich gold reminiscent of traditional Yoruba jewelry
          rgb: '244, 211, 94', 
          hover: '#f9e18e',
          light: '#fef8e7'
        },
        'yoruba-indigo': {
          DEFAULT: '#264D7B', // Deep indigo from traditional Adire fabric dyeing
          rgb: '38, 77, 123',
          hover: '#3a6ba8',
          light: '#eef4fa'
        },
        'yoruba-emerald': {
          DEFAULT: '#2A9D8F', // Emerald green symbolizing prosperity in Yoruba culture
          rgb: '42, 157, 143',
          hover: '#3ebfaf',
          light: '#e9f7f6'
        },
        'yoruba-cream': {
          DEFAULT: '#F8F9FA', // Soft cream background common in Yoruba textiles
          rgb: '248, 249, 250',
          hover: '#ffffff',
          dark: '#eeeff0'
        },
        // System colors remain unchanged
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        xl: "var(--radius-xl)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "slide-in": {
          "0%": { transform: "translateX(-10px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        // Yoruba-inspired cultural pulse animation - mimics traditional drum patterns
        "yoruba-pulse": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "25%": { transform: "scale(1.1)", opacity: "0.9" },
          "50%": { transform: "scale(1)", opacity: "1" },
          "75%": { transform: "scale(1.05)", opacity: "0.95" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        // Border expansion animation for section highlights
        "border-expand": {
          "0%": { borderLeftWidth: "4px" },
          "100%": { borderLeftWidth: "8px" },
        },
        // Cursor blinking animation for typing effect
        "cursor-blink": {
          "0%, 70%": { borderRightColor: "currentColor" },
          "71%, 100%": { borderRightColor: "transparent" },
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "scale-in": "scale-in 0.2s ease-out",
        "slide-in": "slide-in 0.2s ease-out",
        pulse: "pulse 2s ease-in-out infinite",
        // Custom animations
        "yoruba-pulse": "yoruba-pulse 1.2s ease-in-out",
        "border-expand": "border-expand 0.3s ease-out forwards",
        "cursor": "cursor-blink 1s step-end infinite"
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        moderate: "0 4px 25px -3px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        cultural: "0 4px 20px -2px rgba(38, 77, 123, 0.15), 0 8px 12px -3px rgba(38, 77, 123, 0.1)",
        // Adire-inspired shadow with slightly irregular edge to mimic textile patterns
        adire: "0 4px 16px -2px rgba(38, 77, 123, 0.18), 0 2px 8px -2px rgba(230, 57, 70, 0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 