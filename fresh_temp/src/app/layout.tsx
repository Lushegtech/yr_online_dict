import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ToastProvider";
import { cn } from "@/lib/utils";

// Load Inter with expanded feature set for better typography
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

export const metadata: Metadata = {
  title: "Yorùbá Dictionary | Award-Winning Language Resource",
  description: "Explore the rich vocabulary of the Yorùbá language with our comprehensive dictionary. Search for words, meanings, pronunciations, and cultural context.",
  keywords: ["Yorùbá", "dictionary", "language", "Nigeria", "African languages", "translation"],
  authors: [{ name: "Yorùbá Dictionary Team" }],
  creator: "Yorùbá Dictionary",
  publisher: "Yorùbá Dictionary",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yorubadictionary.com",
    title: "Yorùbá Dictionary | Award-Winning Language Resource",
    description: "Explore the rich vocabulary of the Yorùbá language with our comprehensive dictionary.",
    siteName: "Yorùbá Dictionary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yorùbá Dictionary",
    description: "Award-winning Yorùbá language resource",
    creator: "@yorubadictionary",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={cn("scroll-smooth", fontSans.variable)}
    >
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        "flex flex-col",
        "selection:bg-primary/20 selection:text-primary"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
            <main className="flex-1 w-full">
              {children}
            </main>
            <ToastProvider />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
