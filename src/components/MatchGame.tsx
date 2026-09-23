import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { GradeLevel, RhymeWord } from '../types/rhyme';
import { RHYMING_WORDS } from '../data/rhymingWordsData';
import { speakText, speakRhymingPair } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Volume2, RefreshCw, Trophy, CheckCircle, Flame, ArrowRight } from 'lucide-react';

interface MatchGameProps {
  initialGrade?: GradeLevel;
}

interface MatchPair {
  id: string;
  leftWord: string;
  leftGu: string;
  rightWord: string;
  rightGu: string;
  soundFamily: string;
  matched: boolean;
}

export const MatchGame: React.FC<MatchGameProps> = ({ initialGrade = 'all' }) => {
  const [grade, setGrade] = useState<GradeLevel>(initialGrade);
  const [pairs, setPairs] = useState<MatchPair[]>([]);
  const [shuffledRight, setShuffledRight] = useState<{ id: string; word: string; gu: string }[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [roundsCompleted, setRoundsCompleted] = useState<number>(0);
  const [feedback, setFeedback] = useState<{ messageGu: string; isError: boolean } | null>(null);

  // Generate a new round of 5 rhyming pairs
  const generateNewRound = useCallback(() => {
    setSelectedLeft(null);
    setSelectedRight(null);
    setFeedback(null);

    // Filter available candidate words with valid rhyming partner in list or data
    const pool = RHYMING_WORDS.filter((w) => grade === 'all' || w.grade === grade);

    // Pick 5 distinct words that have distinct rhyming partners
    const selected: MatchPair[] = [];
    const usedWords = new Set<string>();

    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());

    for (const item of shuffledPool) {
      if (selected.length >= 5) break;
      if (usedWords.has(item.word.toLowerCase())) continue;

      // Find a matching partner
      const partnerWord = item.rhymesWith.find(
        (r) => !usedWords.has(r.toLowerCase()) && r.toLowerCase() !== item.word.toLowerCase()
      );

      if (partnerWord) {
        // Find Gujarati translation for partner if in dataset
        const partnerItem = RHYMING_WORDS.find(
          (w) => w.word.toLowerCase() === partnerWord.toLowerCase()
        );
        const partnerGu = partnerItem ? partnerItem.meaningGu : 'પ્રાસ સાથી';

        usedWords.add(item.word.toLowerCase());
        usedWords.add(partnerWord.toLowerCase());

        selected.push({
          id: item.id,
          leftWord: item.word,
          leftGu: item.meaningGu,
          rightWord: partnerWord,
          rightGu: partnerGu,
          soundFamily: item.soundFamily,
          matched: false
        });
      }
    }

    setPairs(selected);

    // Shuffle the right-side cards
    const rightItems = selected.map((p) => ({
      id: p.id,
      word: p.rightWord,
      gu: p.rightGu
    }));
    setShuffledRight([...rightItems].sort(() => 0.5 - Math.random()));
  }, [grade]);

  // Init round on grade change
  useEffect(() => {
    generateNewRound();
  }, [generateNewRound]);

  // Check if round is finished
  const allMatched = useMemo(() => {
    return pairs.length > 0 && pairs.every((p) => p.matched);
  }, [pairs]);

  // Fire confetti on complete
  useEffect(() => {
    if (allMatched) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setRoundsCompleted((prev) => prev + 1);
    }
  }, [allMatched]);

  const handleSelectLeft = (pairId: string) => {
    const pair = pairs.find((p) => p.id === pairId);
    if (!pair || pair.matched) return;

    speakText(pair.leftWord);
    setSelectedLeft(pairId);
    setFeedback(null);

    // If right was already selected, check match
    if (selectedRight) {
      checkMatch(pairId, selectedRight);
    }
  };

  const handleSelectRight = (pairId: string) => {
    const pair = pairs.find((p) => p.id === pairId);
    if (!pair || pair.matched) return;

    const rightItem = shuffledRight.find((r) => r.id === pairId);
    if (rightItem) {
      speakText(rightItem.word);
    }

    setSelectedRight(pairId);
    setFeedback(null);

    // If left was already selected, check match
    if (selectedLeft) {
      checkMatch(selectedLeft, pairId);
    }
  };

  const checkMatch = async (leftId: string, rightId: string) => {
    const leftPair = pairs.find((p) => p.id === leftId);
    const rightItem = shuffledRight.find((r) => r.id === rightId);

    if (!leftPair || !rightItem) return;

    if (leftId === rightId) {
      // Correct match!
      setPairs((prev) =>
        prev.map((p) => (p.id === leftId ? { ...p, matched: true } : p))
      );
      setSelectedLeft(null);
      setSelectedRight(null);
      setScore((prev) => prev + 20);
      setStreak((prev) => prev + 1);
      setFeedback({
        messageGu: `શાબાશ! "${leftPair.leftWord}" અને "${rightItem.word}" બંને સમાન પ્રાસ ધરાવે છે!`,
        isError: false
      });

      // Recite pair
      await speakRhymingPair(leftPair.leftWord, rightItem.word);
    } else {
      // Incorrect match
      setStreak(0);
      setFeedback({
        messageGu: `પ્રયાસ સારો હતો, પણ "${leftPair.leftWord}" અને "${rightItem.word}" નો અંતિમ અવાજ જુદો છે. ફરી પ્રયત્ન કરો!`,
        isError: true
      });
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
              <span>INTERACTIVE RHYME MATCHING</span>
              <span aria-hidden="true">·</span>
              <span>જોડકાં જોડો</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Match the Rhymes (પ્રાસયુક્ત શબ્દોની જોડી બનાવો)
            </h1>
            <p className="text-xs text-slate-600 mt-1">
              ડાબી બાજુનો શબ્દ પસંદ કરો અને જમણી બાજુથી તેનો સાચો પ્રાસયુક્ત શબ્દ જોડો.
            </p>
          </div>

          {/* Grade filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => setGrade('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                grade === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Std
            </button>
            <button
              onClick={() => setGrade('6')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                grade === '6'
                  ? 'bg-white text-indigo-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Std 6
            </button>
            <button
              onClick={() => setGrade('7')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                grade === '7'
                  ? 'bg-white text-emerald-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Std 7
            </button>
            <button
              onClick={() => setGrade('8')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                grade === '8'
                  ? 'bg-white text-violet-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Std 8
            </button>
          </div>
        </div>

        {/* Score & Streak Stats (Zero-pill discipline) */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-4 font-medium">
            <span className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Score: <strong className="font-mono tabular-nums text-slate-900 text-sm">{score}</strong> pts</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">|</span>
            <span className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>Streak: <strong className="font-mono tabular-nums text-slate-900 text-sm">{streak}</strong></span>
            </span>
            <span aria-hidden="true" className="text-slate-300">|</span>
            <span>Rounds Won: <strong className="font-mono tabular-nums text-slate-900">{roundsCompleted}</strong></span>
          </div>

          <button
            onClick={generateNewRound}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>નવા શબ્દો (Reset)</span>
          </button>
        </div>
      </div>

      {/* Feedback Message */}
      {feedback && (
        <div
          className={`p-3.5 rounded-xl border text-xs font-medium flex items-center gap-2 ${
            feedback.isError
              ? 'bg-rose-50 border-rose-200 text-rose-800'
              : 'bg-emerald-50 border-emerald-200 text-emerald-800'
          }`}
        >
          <CheckCircle className={`w-4 h-4 ${feedback.isError ? 'text-rose-600' : 'text-emerald-600'}`} />
          <span>{feedback.messageGu}</span>
        </div>
      )}

      {/* Completion Banner */}
      {allMatched ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-3">
          <div className="inline-flex p-3 bg-emerald-100 rounded-full text-emerald-700 mb-1">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-emerald-900">
            અદભુત! તમે બધા જ જોડકાં સાચાં જોડ્યા!
          </h2>
          <p className="text-xs text-emerald-700 max-w-md mx-auto">
            You matched all 5 rhyming pairs correctly in Standard {grade === 'all' ? '6-8' : grade}!
          </p>
          <div className="pt-2">
            <button
              onClick={generateNewRound}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
            >
              <span>આગળનો રાઉન્ડ રમો (Next Round)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* The Matching Board: 2 Columns */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">
              <span>Word Column 1</span>
              <span>ક્લિક કરી પસંદ કરો</span>
            </div>
            {pairs.map((pair) => {
              const isSelected = selectedLeft === pair.id;
              return (
                <button
                  key={pair.id}
                  disabled={pair.matched}
                  onClick={() => handleSelectLeft(pair.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    pair.matched
                      ? 'bg-emerald-50/60 border-emerald-200 opacity-75 cursor-default'
                      : isSelected
                      ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-indigo-200 hover:bg-slate-50/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-3 h-3 rounded-full border ${
                        pair.matched
                          ? 'bg-emerald-500 border-emerald-600'
                          : isSelected
                          ? 'bg-indigo-600 border-indigo-700'
                          : 'bg-slate-200 border-slate-300'
                      }`}
                    />
                    <div>
                      <div className="text-base font-bold text-slate-900">
                        {pair.leftWord}
                      </div>
                      <div className="text-xs text-slate-500">
                        {pair.leftGu}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {pair.matched && (
                      <span className="text-xs font-medium text-emerald-700 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> જોડી બની ગઈ
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(pair.leftWord);
                      }}
                      className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column (Shuffled) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">
              <span>Rhyming Partner</span>
              <span>પ્રાસ સાથે જોડો</span>
            </div>
            {shuffledRight.map((item) => {
              const pair = pairs.find((p) => p.id === item.id);
              const isMatched = pair?.matched ?? false;
              const isSelected = selectedRight === item.id;

              return (
                <button
                  key={item.id}
                  disabled={isMatched}
                  onClick={() => handleSelectRight(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isMatched
                      ? 'bg-emerald-50/60 border-emerald-200 opacity-75 cursor-default'
                      : isSelected
                      ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-indigo-200 hover:bg-slate-50/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-3 h-3 rounded-full border ${
                        isMatched
                          ? 'bg-emerald-500 border-emerald-600'
                          : isSelected
                          ? 'bg-indigo-600 border-indigo-700'
                          : 'bg-slate-200 border-slate-300'
                      }`}
                    />
                    <div>
                      <div className="text-base font-bold text-slate-900">
                        {item.word}
                      </div>
                      <div className="text-xs text-slate-500">
                        {item.gu}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isMatched && (
                      <span className="text-xs font-medium text-emerald-700 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Matched
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(item.word);
                      }}
                      className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
