import React, { useState } from 'react';
import { ODD_ONE_OUT_DATA } from '../data/rhymingWordsData';
import { speakText } from '../utils/speech';
import { Volume2, CheckCircle2, XCircle, ArrowRight, HelpCircle, RotateCcw } from 'lucide-react';

export const OddOneOut: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [answered, setAnswered] = useState<boolean>(false);
  const [testComplete, setTestComplete] = useState<boolean>(false);

  const currentItem = ODD_ONE_OUT_DATA[currentIndex];

  const handleSelectWord = (word: string) => {
    if (answered) return;

    setSelectedWord(word);
    setAnswered(true);

    if (word === currentItem.correctOddWord) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < ODD_ONE_OUT_DATA.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedWord(null);
      setAnswered(false);
    } else {
      setTestComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedWord(null);
    setAnswered(false);
    setScore(0);
    setTestComplete(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
          <span>EXAM PRACTICE QUESTION</span>
          <span aria-hidden="true">·</span>
          <span>અસંગત શબ્દ શોધો (Odd One Out)</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Spot the Non-Rhyming Word
        </h1>
        <p className="text-xs text-slate-600 mt-1 max-w-xl">
          નીચે આપેલા ચાર શબ્દોમાંથી ત્રણ શબ્દો એકબીજા સાથે પ્રાસ ધરાવે છે, જ્યારે એક શબ્દ જુદો (અસંગત) છે. તે જુદા શબ્દ પર ક્લિક કરો.
        </p>

        {/* Question Counter & Score */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Question <strong className="text-slate-900 font-mono tabular-nums">{currentIndex + 1}</strong> of <span className="font-mono tabular-nums">{ODD_ONE_OUT_DATA.length}</span></span>
            <span aria-hidden="true">·</span>
            <span>Standard: <strong>Std {currentItem?.grade}</strong></span>
          </div>
          <div>
            <span>Score: <strong className="font-mono tabular-nums text-slate-900 font-semibold">{score}</strong> / {ODD_ONE_OUT_DATA.length}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3">
          <div
            className="bg-indigo-600 h-full transition-all duration-300"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / ODD_ONE_OUT_DATA.length) * 100}%`
            }}
          />
        </div>
      </div>

      {testComplete ? (
        /* Test Complete View */
        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-xs space-y-4">
          <div className="inline-flex p-3 bg-indigo-50 text-indigo-700 rounded-full">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            અભ્યાસ પૂર્ણ થયો! (Practice Complete)
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            તમે {ODD_ONE_OUT_DATA.length} માંથી <strong className="text-indigo-600 font-mono text-base">{score}</strong> પ્રશ્નોના સાચા જવાબ આપ્યા!
          </p>
          <div className="pt-3">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>ફરીથી અભ્યાસ કરો (Try Again)</span>
            </button>
          </div>
        </div>
      ) : (
        /* Current Question Card */
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentItem.options.map((opt) => {
              const isSelected = selectedWord === opt.word;
              const isCorrectOdd = opt.word === currentItem.correctOddWord;

              let cardStyle = 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50/70 shadow-xs';

              if (answered) {
                if (isCorrectOdd) {
                  cardStyle = 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs';
                } else if (isSelected && !isCorrectOdd) {
                  cardStyle = 'bg-rose-50 border-rose-400 ring-2 ring-rose-500/20 shadow-xs';
                } else {
                  cardStyle = 'bg-white border-slate-200 opacity-60';
                }
              }

              return (
                <div
                  key={opt.word}
                  onClick={() => handleSelectWord(opt.word)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${cardStyle}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">
                        {opt.word}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        [{opt.pronunciationGu}]
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(opt.word);
                      }}
                      className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
                      title="Listen"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span>અર્થ: <strong className="text-slate-800">{opt.meaningGu}</strong></span>
                    {answered && isCorrectOdd && (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> અસંગત (Odd)
                      </span>
                    )}
                    {answered && isSelected && !isCorrectOdd && (
                      <span className="text-rose-600 font-semibold flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" /> Rhymes with group
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explanation & Next Step */}
          {answered && (
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-700 mt-0.5">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    શા માટે આ શબ્દ અસંગત છે? (Explanation)
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentItem.reasonGu}
                  </p>
                  <p className="text-xs text-slate-500 italic">
                    {currentItem.reasonEn}
                  </p>
                </div>
              </div>

              <div className="flex justify-end pt-2 border-t border-slate-100">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                >
                  <span>આગળનો પ્રશ્ન (Next)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
