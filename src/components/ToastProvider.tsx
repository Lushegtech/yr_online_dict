'use client';

import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
        style: {
          background: '#333',
          color: '#fff',
          borderRadius: '0.5rem',
        },
        success: {
          style: {
            background: '#0F172A',
            border: '1px solid rgba(var(--yoruba-gold), 0.2)',
            color: '#FDD6AB',
          },
          iconTheme: {
            primary: '#F9D288',
            secondary: '#0F172A',
          },
        },
        error: {
          style: {
            background: '#0F172A',
            border: '1px solid rgba(255, 90, 90, 0.2)',
            color: '#FFA9A9',
          },
          iconTheme: {
            primary: '#FF5A5A',
            secondary: '#0F172A',
          },
        },
      }}
    />
  );
} 