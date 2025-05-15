"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/ui/container";
import { SearchBar } from "@/components/SearchBar";
import { cn } from "@/lib/utils";
import { Sparkles, Book, GraduationCap } from "lucide-react";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  color: string;
  blur: string;
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  // Only generate particles on the client side to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    
    // Generate stable particle positions with varied sizes and opacities
    const colors = ["primary", "accent", "primary-foreground"];
    const blurs = ["sm", "md", "lg"];

    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 4,
      opacity: 0.1 + Math.random() * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      blur: blurs[Math.floor(Math.random() * blurs.length)],
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (!heroRef.current || !isMounted || particles.length === 0) return;
    
    const ctx = gsap.context(() => {
      // Create a timeline for more control
      const tl = gsap.timeline();

      // Animate the title with a staggered reveal
      tl.from(".hero-title .word", {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
      });

      // Animate the decorative line
      tl.from(".hero-title-line", {
        width: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "-=0.5");

      // Animate the description with character reveal
      tl.from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
      }, "-=0.7");

      // Animate the badges
      tl.from(".hero-badge", {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.8");

      // Animate the search bar with a slight bounce
      tl.from(".hero-search", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.4");

      // Create floating particles effect with varied movement
      const particleElements = gsap.utils.toArray<Element>(".particle");
      particleElements.forEach((particle: Element, i: number) => {
        const speed = 2 + Math.random() * 3;
        const xDistance = 20 + Math.random() * 30;
        const yDistance = 20 + Math.random() * 30;
        const rotation = Math.random() * 20;

        gsap.to(particle, {
          y: `random(${-yDistance}, ${yDistance})`,
          x: `random(${-xDistance}, ${xDistance})`,
          rotation: `random(${-rotation}, ${rotation})`,
          duration: speed,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.05,
        });
      });

      // Subtle floating effect on the search bar glow
      gsap.to(".search-glow", {
        opacity: 0.6,
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle pulse effect on the badges
      gsap.to(".hero-badge", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, [particles, isMounted]);

  return (
    <div ref={heroRef} className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Decorative particles - only rendered client-side */}
      {isMounted && particles.map((particle) => (
        <div
          key={particle.id}
          className={cn(
            "particle absolute rounded-full",
            `blur-${particle.blur}`
          )}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}rem`,
            height: `${particle.size}rem`,
            opacity: particle.opacity,
            background: `var(--${particle.color})`,
          }}
        />
      ))}

      {/* 3D-like decorative elements */}
      <div className="absolute right-[10%] top-[20%] w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute left-[15%] bottom-[15%] w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
      
      {/* Main hero content */}
      <Container className="relative z-10">
        <div className="text-center space-y-8 py-20">
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <span className="hero-badge inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary backdrop-blur-sm border border-primary/20">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              Award-winning
            </span>
            <span className="hero-badge inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent backdrop-blur-sm border border-accent/20">
              <Book className="h-3.5 w-3.5 mr-1" />
              10,000+ Words
            </span>
            <span className="hero-badge inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-foreground/10 text-primary backdrop-blur-sm border border-primary-foreground/20">
              <GraduationCap className="h-3.5 w-3.5 mr-1" />
              Learn Yorùbá
            </span>
          </div>

          {/* Enhanced static title styling */}
          <div className="relative py-4">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/5 to-blue-500/10 blur-3xl rounded-full"></div>
            
            {/* Main title */}
            <h1 className="hero-title relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
              <div className="overflow-hidden mb-2">
                <span className="word inline-block">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                    Yorùbá
                  </span>
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="word inline-block">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                    Dictionary
                  </span>
                </span>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full hidden md:block"></div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-emerald-400 to-purple-600 rounded-full hidden md:block"></div>
              
              {/* Decorative underline with enhanced styling */}
              <div className="hero-title-line relative mx-auto mt-6 h-1.5 w-32 bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-600 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)]"></div>
              
              {/* Small decorative dots */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
              </div>
            </h1>
          </div>
          
          <p className="hero-description text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Explore the rich vocabulary of the Yorùbá language with our comprehensive 
            dictionary. Discover meanings, pronunciations, and cultural context.
          </p>

          <div className="hero-search w-full max-w-2xl mx-auto relative mt-12">
            <div className="search-glow absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl"></div>
            <div className="relative z-10">
              <SearchBar onSearch={(term) => {
                // Navigate to search results or handle the search term
                console.log("Search term:", term);
                // You can add navigation here if needed
                // Example: router.push(`/search?q=${encodeURIComponent(term)}`);
              }} />
            </div>
            <div className="absolute -bottom-12 left-0 right-0 mx-auto w-48 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm"></div>
          </div>
        </div>
      </Container>

      {/* Advanced decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_40%_at_50%_60%,var(--primary-light)_0,var(--transparent)_100%)] opacity-20 blur-3xl"></div>
    </div>
  );
} 