import { NextRequest, NextResponse } from 'next/server';
import { DictionaryService } from '@/lib/services/dictionary';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 20;
    
    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      );
    }

    console.log(`[API] Searching for: "${query}"`);

    // Verify database connection
    try {
      const results = await DictionaryService.searchWords({
        query,
        page,
        limit,
        includeExamples: true
      });
      
      // Log the number of results found
      console.log(`[API] Found ${results.words.length} results for "${query}"`);
      
      return NextResponse.json(results);
    } catch (searchError) {
      console.error('Search processing error:', searchError);
      
      // Try a simpler database query to check connection
      const dbTest = await DictionaryService.testDatabaseConnection();
      if (!dbTest.connected) {
        console.error('Database connection failed during search');
        return NextResponse.json(
          { 
            error: 'Database connection error', 
            details: dbTest.error,
            query
          },
          { status: 503 } // Service Unavailable
        );
      }
      
      throw searchError; // Re-throw for outer catch
    }
  } catch (error) {
    console.error('Search error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Failed to search dictionary';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    return NextResponse.json(
      { 
        error: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? errorStack : undefined,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 