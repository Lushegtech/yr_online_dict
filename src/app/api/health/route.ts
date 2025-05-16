import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Test database connection by getting a count of words
    const wordCount = await prisma.word.count();
    
    // Also check alphabet count to ensure multiple tables are accessible
    const alphabetCount = await prisma.alphabet.count();
    
    return NextResponse.json({
      status: 'ok',
      connected: true,
      database: {
        wordCount,
        alphabetCount,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Database connection error:', error);
    
    // Provide detailed error information to help with debugging
    return NextResponse.json(
      {
        status: 'error',
        connected: false,
        error: error instanceof Error ? error.message : String(error),
        stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 