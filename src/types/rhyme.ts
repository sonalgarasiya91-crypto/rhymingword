export type GradeLevel = 'all' | '6' | '7' | '8';

export interface RhymeWord {
  id: string;
  word: string;
  pronunciationGu: string;
  meaningGu: string;
  meaningEn: string;
  soundFamily: string; // e.g. "-ight", "-all", "-ing", "-ound"
  grade: '6' | '7' | '8';
  rhymesWith: string[]; // List of rhyming words
  exampleSentenceEn: string;
  exampleSentenceGu: string;
  sourcePoem?: string; // e.g. "Std 6 - In the Zoo", "Std 7 - The River"
  syllables?: number;
}

export interface PoemStanza {
  id: string;
  grade: '6' | '7' | '8';
  poemNameEn: string;
  poemNameGu: string;
  sourceUnit: string;
  lines: string[];
  rhymingPairs: [string, string][]; // lowercase target rhyming pairs
  notesGu: string;
}

export interface OddOneOutItem {
  id: string;
  grade: '6' | '7' | '8';
  options: {
    word: string;
    pronunciationGu: string;
    meaningGu: string;
    sound: string;
  }[];
  correctOddWord: string;
  reasonGu: string;
  reasonEn: string;
}

export interface QuizQuestion {
  id: string;
  grade: '6' | '7' | '8';
  type: 'identify-rhyme' | 'complete-rhyme' | 'poem-context';
  questionEn: string;
  questionGu: string;
  targetWord?: string;
  options: string[];
  correctAnswer: string;
  explanationGu: string;
}
