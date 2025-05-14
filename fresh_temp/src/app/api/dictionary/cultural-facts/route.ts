import { NextResponse } from 'next/server';
import DictionaryService from '@/lib/services/dictionary';

export async function GET() {
  try {
    const facts = await DictionaryService.getAllCulturalFacts();
    return NextResponse.json({ facts });
  } catch (error) {
    console.error('Get cultural facts error:', error);
    return NextResponse.json(
      { error: 'Failed to get cultural facts' },
      { status: 500 }
    );
  }
} 