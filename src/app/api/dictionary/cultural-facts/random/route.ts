import { NextResponse } from 'next/server';
import DictionaryService from '@/lib/services/dictionary';

export async function GET() {
  try {
    const fact = await DictionaryService.getRandomCulturalFact();
    
    if (!fact) {
      return NextResponse.json(
        { error: 'No cultural facts found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ fact });
  } catch (error) {
    console.error('Get random cultural fact error:', error);
    return NextResponse.json(
      { error: 'Failed to get random cultural fact' },
      { status: 500 }
    );
  }
} 