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

    const results = await DictionaryService.searchWords({
      query,
      page,
      limit,
      includeExamples: true
    });

    // Log the number of results found
    console.log(`[API] Found ${results.words.length} results for "${query}"`);
    
    return NextResponse.json(results);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to search dictionary' },
      { status: 500 }
    );
  }
} 