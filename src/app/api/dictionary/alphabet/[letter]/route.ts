import { NextRequest, NextResponse } from 'next/server';
import DictionaryService from '@/lib/services/dictionary';

export async function GET(
  request: NextRequest
) {
  try {
    const { searchParams } = new URL(request.url);
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const letter = pathParts[pathParts.length - 1];
    
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 50;

    console.log(`[API] Getting words for alphabet: ${letter}, page: ${page}, limit: ${limit}`);

    if (!letter) {
      return NextResponse.json(
        { error: 'Letter parameter is required' },
        { status: 400 }
      );
    }

    const result = await DictionaryService.getWordsByAlphabet(letter.toLowerCase(), page, limit);

    if (!result) {
      console.log(`[API] Invalid alphabet letter: ${letter}`);
      return NextResponse.json(
        { error: 'Invalid alphabet letter' },
        { status: 404 }
      );
    }

    console.log(`[API] Found ${result.words.length} words for alphabet: ${letter}`);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Get alphabet words error:', error);
    return NextResponse.json(
      { error: 'Failed to get words for the alphabet' },
      { status: 500 }
    );
  }
} 