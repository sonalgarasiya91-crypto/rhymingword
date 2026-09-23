import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/rhymingWordsData';
import { speakText } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Volume2, CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';

export const QuizTest: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [answersLog, setAnswersLog] = useState<
    { questionId: string; userAns: string; isCorrect: boolean }[]
  >([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const question = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (opt: string) => {
    if (answered) return;

    speakText(opt);
    setSelectedOption(opt);
    setAnswered(true);

    const isCorrect = opt.toLowerCase() === question.correctAnswer.toLowerCase();
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnswersLog((prev) => [
      ...prev,
      { questionId: question.id, userAns: opt, isCorrect }
    ]);
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setIsFinished(true);
      if (score >= 7) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setAnswersLog([]);
    setIsFinished(false);
  };

  const calculateGrade = () => {
    const pct = (score / QUIZ_QUESTIONS.length) * 100;
    if (pct >= 90) return { label: 'A+ (ઉત્કૃષ્ટ - Excellent)', color: 'text-emerald-700' };
    if (pct >= 70) return { label: 'A (ખૂબ સરસ - Very Good)', color: 'text-indigo-700' };
    if (pct >= 50) return { label: 'B (સંતોષકારક - Good)', color: 'text-amber-700' };
    return { label: 'C (વધુ અભ્યાસની જરૂર - Needs Practice)', color: 'text-rose-700' };
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
          <span>ONLINE PRACTICE TEST</span>
          <span aria-hidden="true">·</span>
          <span>ધોરણ ૬ થી ૮ અંગ્રેજી કસોટી</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Unit Rhyme Quiz (કસોટી પરીક્ષા)
        </h1>
        <p className="text-xs text-slate-600 mt-1">
          કસોટીમાં ૧૦ મહત્વપૂર્ણ પ્રશ્નો છે. સાચો વિકલ્પ પસંદ કરી પ્રાસ શબ્દોનું મૂલ્યાંકન કરો.
        </p>

        {/* Progress & Score */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Question <strong className="text-slate-900 font-mono tabular-nums">{currentIndex + 1}</strong> of <span className="font-mono tabular-nums">{QUIZ_QUESTIONS.length}</span></span>
            <span aria-hidden="true">·</span>
            <span>Target: <strong className="text-indigo-600">Std {question?.grade}</strong></span>
          </div>
          <div>
            <span>Current Score: <strong className="font-mono tabular-nums text-slate-900 font-semibold">{score}</strong></span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3">
          <div
            className="bg-indigo-600 h-full transition-all duration-300"
            style={{
              width: `${((currentIndex + (answered ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100}%`
            }}
          />
        </div>
      </div>

      {isFinished ? (
        /* Quiz Results Report Card */
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 bg-indigo-50 text-indigo-700 rounded-full">
              <Award className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              કસોટી પરિણામ (Quiz Result Card)
            </h2>
            <div className="text-4xl font-extrabold text-slate-900 font-mono tabular-nums py-2">
              {score} <span className="text-xl font-normal text-slate-400">/ {QUIZ_QUESTIONS.length}</span>
            </div>
            <div className={`text-sm font-bold ${calculateGrade().color}`}>
              ગ્રેડ: {calculateGrade().label}
            </div>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              તમે ધોરણ ૬ થી ૮ અંગ્રેજી પ્રાસ શબ્દોની કસોટી સફળતાપૂર્વક પૂર્ણ કરી છે.
            </p>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              પ્રશ્નોત્તરી સમીક્ષા (Answer Review):
            </h3>
            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const log = answersLog.find((a) => a.questionId === q.id);
                const isCorrect = log?.isCorrect ?? false;

                return (
                  <div
                    key={q.id}
                    className={`p-3 rounded-lg border text-xs flex items-start justify-between gap-3 ${
                      isCorrect
                        ? 'bg-emerald-50/50 border-emerald-200 text-slate-800'
                        : 'bg-rose-50/50 border-rose-200 text-slate-800'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-semibold text-slate-900">
                        {idx + 1}. {q.questionEn}
                      </div>
                      <div className="text-slate-600">
                        તમારો જવાબ: <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>{log?.userAns || 'Not answered'}</strong>
                        {!isCorrect && (
                          <span className="text-emerald-700 ml-2">
                            (સાચો જવાબ: <strong>{q.correctAnswer}</strong>)
                          </span>
                        )}
                      </div>
                      <div className="text-slate-500 italic">
                        {q.explanationGu}
                      </div>
                    </div>

                    <div className="shrink-0 mt-0.5">
                      {isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-600" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>ફરીથી કસોટી આપો (Restart Quiz)</span>
            </button>
          </div>
        </div>
      ) : (
        /* Active Question Card */
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {question.questionEn}
              </h2>
              <button
                type="button"
                onClick={() => speakText(question.questionEn)}
                className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                title="Listen to question"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm font-medium text-indigo-900">
              {question.questionGu}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map((opt) => {
              const isSelected = selectedOption === opt;
              const isCorrect = opt.toLowerCase() === question.correctAnswer.toLowerCase();

              let optStyle = 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50/70 shadow-xs';

              if (answered) {
                if (isCorrect) {
                  optStyle = 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20 text-emerald-900 font-semibold';
                } else if (isSelected && !isCorrect) {
                  optStyle = 'bg-rose-50 border-rose-400 ring-2 ring-rose-500/20 text-rose-900';
                } else {
                  optStyle = 'bg-white border-slate-200 opacity-60';
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(opt)}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${optStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">
                      {opt[0].toUpperCase()}
                    </span>
                    <span className="text-base font-bold text-slate-900">{opt}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {answered && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    )}
                    {answered && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-600" />
                    )}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(opt);
                      }}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors"
                      title="Pronounce"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {answered && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                <span>સમજૂતી (Explanation):</span>
              </div>
              <p className="text-slate-700">{question.explanationGu}</p>
            </div>
          )}

          {/* Next Button */}
          {answered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
              >
                <span>
                  {currentIndex === QUIZ_QUESTIONS.length - 1
                    ? 'પરિણામ જુઓ (View Results)'
                    : 'આગળનો પ્રશ્ન (Next Question)'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
