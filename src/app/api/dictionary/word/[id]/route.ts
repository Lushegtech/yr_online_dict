import { NextRequest, NextResponse } from 'next/server';
import DictionaryService from '@/lib/services/dictionary';

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Properly access params in Next.js by ensuring they're resolved
    const params = await context.params;
    const { id } = params;
    
    console.log(`[API] Fetching word details for ID: ${id}`);

    if (!id) {
      return NextResponse.json(
        { error: 'Word ID is required' },
        { status: 400 }
      );
    }

    const word = await DictionaryService.getWordById(id);

    if (!word) {
      console.log(`[API] Word not found for ID: ${id}`);
      return NextResponse.json(
        { error: 'Word not found' },
        { status: 404 }
      );
    }

    console.log(`[API] Successfully retrieved word: ${word.word}`);
    return NextResponse.json({ word });
  } catch (error) {
    console.error('Get word error:', error);
    return NextResponse.json(
      { error: 'Failed to get word details' },
      { status: 500 }
    );
  }
} 