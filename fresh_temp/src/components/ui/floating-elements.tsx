"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

interface FloatingElementsProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  size?: "sm" | "md" | "lg" | "mixed";
  color?: "primary" | "accent" | "mixed";
  speed?: "slow" | "medium" | "fast";
  density?: "low" | "medium" | "high";
  blur?: "none" | "sm" | "md" | "lg";
}

export function FloatingElements({
  className,
  count = 15,
  size = "mixed",
  color = "mixed",
  speed = "medium",
  density = "medium",
  blur = "sm",
  ...props
}: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Only render elements on the client side to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isMounted) return;

    // Reset elements ref array
    elementsRef.current = [];

    // Define speeds based on the speed prop
    const durationMap = {
      slow: { min: 15, max: 25 },
      medium: { min: 10, max: 18 },
      fast: { min: 5, max: 12 },
    };
    const { min: durationMin, max: durationMax } = durationMap[speed];

    // Create a GSAP context for animations
    const ctx = gsap.context(() => {
      // Animate each floating element
      elementsRef.current.forEach((element) => {
        if (!element) return;
        
        // Randomize animation parameters for natural movement
        const duration = durationMin + Math.random() * (durationMax - durationMin);
        const xDistance = 20 + Math.random() * 60;
        const yDistance = 20 + Math.random() * 60;
        const delay = Math.random() * 5;
        const rotation = Math.random() * 45;

        // Create a timeline for this element
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        
        // Complex movement pattern
        tl.to(element, {
          x: `+=${xDistance}`,
          y: `+=${yDistance}`,
          rotation: `+=${rotation}`,
          duration: duration / 2,
          ease: "sine.inOut",
          delay: delay,
        })
        .to(element, {
          x: `-=${xDistance}`,
          y: `-=${yDistance / 2}`,
          rotation: `-=${rotation / 2}`,
          duration: duration / 2,
          ease: "sine.inOut",
        })
        .to(element, {
          x: `-=${xDistance / 2}`,
          y: `+=${yDistance / 2}`,
          rotation: `-=${rotation / 2}`,
          duration: duration / 2,
          ease: "sine.inOut",
        })
        .to(element, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: duration / 2,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [count, speed, isMounted]);

  // Generate elements based on props
  const generateElements = () => {
    if (!isMounted) return null;
    
    const elements = [];
    const distributionFactor = density === "low" ? 0.6 : density === "medium" ? 0.8 : 1;

    for (let i = 0; i < count; i++) {
      // Determine element size
      let elementSize;
      if (size === "mixed") {
        const sizes = ["sm", "md", "lg"];
        elementSize = sizes[Math.floor(Math.random() * sizes.length)];
      } else {
        elementSize = size;
      }

      // Size classes
      const sizeClasses = {
        sm: "w-2 h-2",
        md: "w-4 h-4",
        lg: "w-6 h-6",
      };

      // Determine element color
      let elementColor;
      if (color === "mixed") {
        const colors = ["primary", "accent", "primary-foreground"];
        elementColor = colors[Math.floor(Math.random() * colors.length)];
      } else {
        elementColor = color;
      }

      // Calculate positions for even distribution
      const posX = (i % 5) * 20 * distributionFactor + Math.random() * 10;
      const posY = Math.floor(i / 5) * 20 * distributionFactor + Math.random() * 10;

      // Add opacity variation for depth
      const opacity = 0.1 + Math.random() * 0.3;

      elements.push(
        <div
          key={i}
          ref={(el) => {
            if (elementsRef.current) {
              elementsRef.current[i] = el;
            }
          }}
          className={cn(
            "absolute rounded-full",
            sizeClasses[elementSize as keyof typeof sizeClasses],
            blur !== "none" && `blur-${blur}`,
          )}
          style={{
            left: `${posX}%`,
            top: `${posY}%`,
            opacity,
            backgroundColor: `var(--${elementColor})`,
          }}
        />
      );
    }
    return elements;
  };

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}
      {...props}
    >
      {generateElements()}
    </div>
  );
} 