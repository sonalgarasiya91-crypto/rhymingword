import React, { useState, useMemo } from 'react';
import { RHYMING_WORDS } from '../data/rhymingWordsData';
import { speakText } from '../utils/speech';
import { Sparkles, Volume2, Copy, Check, Feather } from 'lucide-react';

const SUGGESTED_STARTERS = [
  'Night', 'Star', 'Bell', 'King', 'Sea', 'Tree', 'Fly', 'Bright', 'Cold', 'Breeze', 'Day', 'Wing'
];

const TEMPLATES = [
  {
    label: 'Std 6: Nature & Play',
    line1: 'The sun shines warm and brings the day,',
    line2Prompt: 'The happy children run outside to ',
    targetRhyme: 'play'
  },
  {
    label: 'Std 6: Animals & Sounds',
    line1: 'The little bird upon the wing,',
    line2Prompt: 'A joyful song begins to ',
    targetRhyme: 'sing'
  },
  {
    label: 'Std 7: Little Plant',
    line1: 'Deep down inside the garden soil,',
    line2Prompt: 'The tiny seeds begin to ',
    targetRhyme: 'spoil'
  },
  {
    label: 'Std 8: Questions & Stars',
    line1: 'Twinkle, twinkle little star,',
    line2Prompt: 'How you shine from so ',
    targetRhyme: 'far'
  }
];

export const RhymeMaker: React.FC = () => {
  const [inputWord, setInputWord] = useState<string>('Bright');
  const [selectedRhyme, setSelectedRhyme] = useState<string>('Night');
  const [customLine1, setCustomLine1] = useState<string>('The moon is glowing round and bright,');
  const [customLine2, setCustomLine2] = useState<string>('It guides travelers through the night.');
  const [copied, setCopied] = useState<boolean>(false);

  // Find all rhyming matches for the input word
  const matchResult = useMemo(() => {
    const clean = inputWord.trim().toLowerCase();
    if (!clean) return null;

    // Direct match in dataset
    const direct = RHYMING_WORDS.find((w) => w.word.toLowerCase() === clean);
    if (direct) {
      return {
        word: direct.word,
        soundFamily: direct.soundFamily,
        meaningGu: direct.meaningGu,
        rhymes: direct.rhymesWith,
        grade: direct.grade
      };
    }

    // Search by sound family or rhyme list
    const byFamily = RHYMING_WORDS.filter((w) =>
      w.rhymesWith.some((r) => r.toLowerCase() === clean)
    );

    if (byFamily.length > 0) {
      const rhymes = Array.from(
        new Set([
          ...byFamily.map((w) => w.word),
          ...byFamily.flatMap((w) => w.rhymesWith)
        ])
      ).filter((w) => w.toLowerCase() !== clean);

      return {
        word: inputWord,
        soundFamily: byFamily[0].soundFamily,
        meaningGu: 'તમારો શબ્દ',
        rhymes,
        grade: byFamily[0].grade
      };
    }

    return null;
  }, [inputWord]);

  const handleRecitePoem = async () => {
    const fullPoem = `${customLine1}. ${customLine2}`;
    await speakText(fullPoem, 0.9);
  };

  const handleCopy = () => {
    const text = `${customLine1}\n${customLine2}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const applyTemplate = (tpl: typeof TEMPLATES[0]) => {
    setCustomLine1(tpl.line1);
    setCustomLine2(`${tpl.line2Prompt}${tpl.targetRhyme}.`);
    setInputWord(tpl.targetRhyme);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
          <span>CREATIVE POETRY LAB</span>
          <span aria-hidden="true">·</span>
          <span>પ્રાસ કાવ્ય પ્રયોગશાળા</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Rhyme Maker & Couplet Writer
        </h1>
        <p className="text-xs text-slate-600 mt-1 max-w-xl">
          કોઈપણ અંગ્રેજી શબ્દ લખો અથવા સૂચવેલા શબ્દ પર ક્લિક કરી પ્રાસ શબ્દો શોધો અને તમારી પોતાની કાવ્ય પંક્તિ (Rhyming Couplet) બનાવો!
        </p>

        {/* Word Input and Starters */}
        <div className="mt-5 space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              placeholder="Type any word (e.g. Star, Bell, Night)..."
              className="flex-1 px-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900"
            />
            <button
              onClick={() => speakText(inputWord)}
              className="px-3.5 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
              title="Pronounce"
            >
              <Volume2 className="w-4 h-4" />
              <span>ઉચ્ચાર</span>
            </button>
          </div>

          {/* Suggested Starters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span className="text-slate-400 shrink-0">સૂચવેલા શબ્દો:</span>
            {SUGGESTED_STARTERS.map((w) => (
              <button
                key={w}
                onClick={() => setInputWord(w)}
                className={`px-2.5 py-1 rounded-md transition-colors shrink-0 ${
                  inputWord.toLowerCase() === w.toLowerCase()
                    ? 'bg-indigo-600 text-white font-medium'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rhyme Discovery Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>"{inputWord}" સાથે પ્રાસ બેસતા શબ્દો:</span>
        </h2>

        {matchResult && matchResult.rhymes.length > 0 ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Sound Family: <strong className="font-mono text-indigo-600">{matchResult.soundFamily}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Standard: Std {matchResult.grade}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {matchResult.rhymes.map((rhyme) => (
                <button
                  key={rhyme}
                  onClick={() => {
                    setSelectedRhyme(rhyme);
                    speakText(rhyme);
                  }}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-all ${
                    selectedRhyme === rhyme
                      ? 'bg-indigo-600 border-indigo-700 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-indigo-50 hover:text-indigo-700'
                  }`}
                >
                  <span>{rhyme}</span>
                  <Volume2 className="w-3 h-3 opacity-70" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-xs text-slate-500 bg-slate-50 p-4 rounded-lg border border-slate-100">
            આ શબ્દ માટે પાઠ્યપુસ્તકના ડેટાબેઝમાં સીધો મેળ મળ્યો નથી. કૃપા કરીને ઉપર આપેલા સૂચવેલા શબ્દો (Night, Star, Bell, King, Sea વગેરે) માંથી પસંદ કરો.
          </div>
        )}
      </div>

      {/* Couplet Workshop Box */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Feather className="w-4 h-4 text-indigo-600" />
            <span>તમારી પ્રાસ પંક્તિ લખો (Write Your 2-Line Couplet):</span>
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRecitePoem}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>વાંચી સંભળાવો</span>
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* 2 Lines Input */}
        <div className="space-y-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Line 1 (પ્રથમ પંક્તિ):
            </label>
            <input
              type="text"
              value={customLine1}
              onChange={(e) => setCustomLine1(e.target.value)}
              className="w-full px-4 py-2 text-sm font-serif bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Line 2 (બીજી પંક્તિ - પ્રથમ પંક્તિ સાથે પ્રાસ બેસાડો):
            </label>
            <input
              type="text"
              value={customLine2}
              onChange={(e) => setCustomLine2(e.target.value)}
              className="w-full px-4 py-2 text-sm font-serif bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900"
            />
          </div>
        </div>

        {/* Couplet Live Stage Preview */}
        <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-xl text-center space-y-1 font-serif">
          <p className="text-base sm:text-lg text-slate-800 italic">"{customLine1}"</p>
          <p className="text-base sm:text-lg text-slate-800 italic">"{customLine2}"</p>
        </div>

        {/* Ready-made Templates */}
        <div className="pt-3 border-t border-slate-100">
          <div className="text-xs font-semibold text-slate-600 mb-2">
            નમૂનારૂપ કાવ્ય પંક્તિઓ (Templates for GSEB Std 6-8):
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {TEMPLATES.map((tpl, i) => (
              <button
                key={i}
                onClick={() => applyTemplate(tpl)}
                className="text-left p-3 rounded-lg border border-slate-200 bg-white hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors text-xs"
              >
                <div className="font-semibold text-indigo-700">{tpl.label}</div>
                <div className="text-slate-600 italic mt-0.5 truncate">{tpl.line1}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
