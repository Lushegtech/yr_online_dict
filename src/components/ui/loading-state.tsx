'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

export function LoadingState({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className,
}: LoadingStateProps) {
  const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const Container = fullScreen ? FullScreenContainer : DefaultContainer;

  return (
    <Container className={className}>
      <div className="flex flex-col items-center justify-center space-y-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <Loader2 className={cn("text-yoruba-gold", sizeMap[size])} />
        </motion.div>
        {text && (
          <p className="text-yoruba-cream text-sm font-medium">{text}</p>
        )}
      </div>
    </Container>
  );
}

function FullScreenContainer({ children, className }: { 
  children: React.ReactNode, 
  className?: string 
}) {
  return (
    <div className={cn(
      "fixed inset-0 flex items-center justify-center bg-yoruba-black/80 backdrop-blur-sm z-50",
      className
    )}>
      {children}
    </div>
  );
}

function DefaultContainer({ children, className }: { 
  children: React.ReactNode, 
  className?: string 
}) {
  return (
    <div className={cn(
      "flex items-center justify-center p-4",
      className
    )}>
      {children}
    </div>
  );
} 