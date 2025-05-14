import { NextResponse } from 'next/server';
import DictionaryService from '@/lib/services/dictionary';

export async function GET() {
  try {
    const word = await DictionaryService.getWordOfTheDay();

    if (!word) {
      return NextResponse.json(
        { error: 'No suitable word found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ word });
  } catch (error) {
    console.error('Word of the day error:', error);
    return NextResponse.json(
      { error: 'Failed to get word of the day' },
      { status: 500 }
    );
  }
} 