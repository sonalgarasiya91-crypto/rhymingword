/**
 * Speech synthesis utility for English pronunciation learning.
 */

let speechRate = 0.85;

export const setGlobalSpeechRate = (rate: number) => {
  speechRate = rate;
};

export const getGlobalSpeechRate = () => speechRate;

export const speakText = (text: string, rateMultiplier: number = 1): Promise<void> => {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      resolve();
      return;
    }

    // Cancel any previous speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speechRate * rateMultiplier;
    utterance.pitch = 1.0;
    utterance.lang = 'en-US';

    // Try to find a good English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onend = () => {
      resolve();
    };

    utterance.onerror = (e) => {
      console.warn('Speech error:', e);
      resolve();
    };

    window.speechSynthesis.speak(utterance);
  });
};

export const speakRhymingPair = async (word1: string, word2: string): Promise<void> => {
  await speakText(word1);
  await new Promise((r) => setTimeout(r, 300));
  await speakText(word2);
};
