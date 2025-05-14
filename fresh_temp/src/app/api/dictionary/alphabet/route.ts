import { NextResponse } from 'next/server';
import DictionaryService from '@/lib/services/dictionary';

export async function GET() {
  try {
    const alphabets = await DictionaryService.getAllAlphabets();
    return NextResponse.json({ alphabets });
  } catch (error) {
    console.error('Get alphabets error:', error);
    return NextResponse.json(
      { error: 'Failed to get alphabets' },
      { status: 500 }
    );
  }
} 