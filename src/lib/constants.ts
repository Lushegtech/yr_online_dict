export const AUDIO_BASE_PATH = '/audio';

export const AUDIO_FILE_FORMAT = '.mp3';

// Map of words to their audio file names
export const WORD_AUDIO_MAP: Record<string, string> = {
  'oba': 'oba',
  'ẹ̀kọ́': 'eko',
  'ilé': 'ile',
  // Add more mappings as needed
};

// Function to get audio URL for a word
export function getAudioUrl(word: string): string | undefined {
  const audioFileName = WORD_AUDIO_MAP[word.toLowerCase()];
  if (!audioFileName) return undefined;
  return `${AUDIO_BASE_PATH}/${audioFileName}${AUDIO_FILE_FORMAT}`;
}

// Function to handle audio playback with error handling
export async function playAudio(audioUrl: string): Promise<void> {
  try {
    const audio = new Audio(audioUrl);
    await audio.play();
  } catch (error) {
    console.error('Error playing audio:', error);
    throw new Error('Failed to play audio');
  }
} 