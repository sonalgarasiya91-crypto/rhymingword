import React, { useState } from 'react';
import { POEM_STANZAS } from '../data/rhymingWordsData';
import { speakText, speakRhymingPair } from '../utils/speech';
import { Volume2, BookOpen, Sparkles, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

export const PoemHunter: React.FC = () => {
  const [stanzaIndex, setStanzaIndex] = useState<number>(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const stanza = POEM_STANZAS[stanzaIndex];

  // Flatten all target rhyming words in this stanza
  const targetRhymeWords = stanza.rhymingPairs.flat().map((w) => w.toLowerCase());

  const handleWordClick = (rawWord: string) => {
    // Strip punctuation
    const clean = rawWord.toLowerCase().replace(/[^a-z]/g, '');
    if (!clean) return;

    speakText(clean);

    let nextSelected = [...selectedWords];
    if (nextSelected.includes(clean)) {
      nextSelected = nextSelected.filter((w) => w !== clean);
    } else {
      nextSelected.push(clean);
    }
    setSelectedWords(nextSelected);

    // Check if user selected any of the valid rhyming pairs
    for (const [w1, w2] of stanza.rhymingPairs) {
      if (nextSelected.includes(w1.toLowerCase()) && nextSelected.includes(w2.toLowerCase())) {
        setFeedback(`સરસ! "${w1}" અને "${w2}" પ્રાસયુક્ત શબ્દો છે!`);
        speakRhymingPair(w1, w2);
        return;
      }
    }
    setFeedback(null);
  };

  const handleNextStanza = () => {
    if (stanzaIndex < POEM_STANZAS.length - 1) {
      setStanzaIndex((prev) => prev + 1);
      setSelectedWords([]);
      setShowSolution(false);
      setFeedback(null);
    }
  };

  const handlePrevStanza = () => {
    if (stanzaIndex > 0) {
      setStanzaIndex((prev) => prev - 1);
      setSelectedWords([]);
      setShowSolution(false);
      setFeedback(null);
    }
  };

  const handleRecitePoem = async () => {
    const fullText = stanza.lines.join('. ');
    await speakText(fullText, 0.9);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
              <span>TEXTBOOK POETRY EXERCISES</span>
              <span aria-hidden="true">·</span>
              <span>પાઠ્યપુસ્તક કાવ્ય પ્રાસ શોધ</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Poem Rhyme Hunter (કાવ્યમાંથી પ્રાસ શોધો)
            </h1>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              કાવ્યની પંક્તિઓ વાંચો. જે શબ્દો તમને પ્રાસયુક્ત (Rhyming) લાગે તેના પર ક્લિક કરો.
            </p>
          </div>

          <button
            onClick={handleRecitePoem}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors self-start sm:self-auto"
          >
            <Volume2 className="w-4 h-4" />
            <span>આખું કાવ્ય સાંભળો</span>
          </button>
        </div>

        {/* Stanza Selector & Details */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Poem <strong className="text-slate-900 font-mono tabular-nums">{stanzaIndex + 1}</strong> of <span className="font-mono tabular-nums">{POEM_STANZAS.length}</span></span>
            <span aria-hidden="true">·</span>
            <span>Standard: <strong className="text-indigo-600">Std {stanza.grade}</strong></span>
            <span aria-hidden="true">·</span>
            <span>{stanza.sourceUnit}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              disabled={stanzaIndex === 0}
              onClick={handlePrevStanza}
              className="p-1 rounded hover:bg-slate-100 text-slate-600 disabled:opacity-30 disabled:pointer-events-none"
              title="Previous Poem"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={stanzaIndex === POEM_STANZAS.length - 1}
              onClick={handleNextStanza}
              className="p-1 rounded hover:bg-slate-100 text-slate-600 disabled:opacity-30 disabled:pointer-events-none"
              title="Next Poem"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Stanza Display */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span>{stanza.poemNameEn}</span>
            <span className="text-sm font-normal text-slate-500">({stanza.poemNameGu})</span>
          </h2>
        </div>

        {/* Interactive Poem Verses */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 sm:p-8 space-y-3 font-serif">
          {stanza.lines.map((line, lineIdx) => {
            const words = line.split(' ');
            return (
              <div key={lineIdx} className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base sm:text-lg text-slate-800 leading-loose">
                {words.map((word, wordIdx) => {
                  const clean = word.toLowerCase().replace(/[^a-z]/g, '');
                  const isSelected = selectedWords.includes(clean);
                  const isTargetRhyme = targetRhymeWords.includes(clean);
                  const highlightSolution = showSolution && isTargetRhyme;

                  return (
                    <button
                      key={wordIdx}
                      onClick={() => handleWordClick(word)}
                      className={`px-1.5 py-0.5 rounded transition-colors font-serif ${
                        isSelected && isTargetRhyme
                          ? 'bg-emerald-100 text-emerald-900 font-bold ring-1 ring-emerald-400'
                          : isSelected
                          ? 'bg-indigo-100 text-indigo-900 font-semibold'
                          : highlightSolution
                          ? 'bg-amber-100 text-amber-900 font-semibold underline decoration-amber-500'
                          : 'hover:bg-slate-200/80 cursor-pointer'
                      }`}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Feedback message */}
        {feedback && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-semibold text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{feedback}</span>
          </div>
        )}

        {/* Rhyming Pairs List / Solution */}
        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>આ કાવ્યના પ્રાસયુક્ત શબ્દો (Rhyme Pairs):</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {stanza.rhymingPairs.map(([w1, w2], idx) => {
                const isFound =
                  selectedWords.includes(w1.toLowerCase()) &&
                  selectedWords.includes(w2.toLowerCase());

                return (
                  <button
                    key={idx}
                    onClick={() => speakRhymingPair(w1, w2)}
                    className={`px-3 py-1 text-xs rounded-lg border transition-colors flex items-center gap-1.5 ${
                      isFound || showSolution
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-medium'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    <span>{w1} — {w2}</span>
                    <Volume2 className="w-3 h-3 opacity-60" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              {showSolution ? 'જવાબો છુપાવો' : 'જવાબ બતાવો (Show Answers)'}
            </button>
            <button
              disabled={stanzaIndex === POEM_STANZAS.length - 1}
              onClick={handleNextStanza}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors disabled:opacity-40"
            >
              આગળનું કાવ્ય
            </button>
          </div>
        </div>

        {/* Educational Note */}
        <div className="bg-slate-50 rounded-lg p-3.5 text-xs text-slate-600 border border-slate-100">
          <strong className="text-slate-800">અભ્યાસ નોંધ: </strong> {stanza.notesGu}
        </div>
      </div>
    </div>
  );
};
