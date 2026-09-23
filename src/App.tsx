import React, { useState, useEffect } from 'react';
import { TopNav, ActiveTab } from './components/TopNav';
import { WordBank } from './components/WordBank';
import { MatchGame } from './components/MatchGame';
import { OddOneOut } from './components/OddOneOut';
import { PoemHunter } from './components/PoemHunter';
import { QuizTest } from './components/QuizTest';
import { RhymeMaker } from './components/RhymeMaker';
import { PrintSheetModal } from './components/PrintSheetModal';
import { setGlobalSpeechRate } from './utils/speech';
import { RHYMING_WORDS, POEM_STANZAS } from './data/rhymingWordsData';
import { BookOpen, Sparkles, CheckCircle2, Music, GraduationCap, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('bank');
  const [speechRate, setSpeechRate] = useState<number>(0.85);
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('rhymemaster_bookmarks');
      return saved ? JSON.parse(saved) : ['s6-1', 's7-1', 's8-1'];
    } catch {
      return ['s6-1', 's7-1', 's8-1'];
    }
  });
  const [showBookmarkFilter, setShowBookmarkFilter] = useState<boolean>(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  // Sync bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('rhymemaster_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.warn('Failed to persist bookmarks', e);
    }
  }, [bookmarks]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSpeechRate = () => {
    const nextRate = speechRate === 0.85 ? 1.0 : 0.85;
    setSpeechRate(nextRate);
    setGlobalSpeechRate(nextRate);
  };

  const handleOpenBookmarks = () => {
    setShowBookmarkFilter(true);
    setActiveTab('bank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Bar (One row, three zones contract) */}
      <TopNav
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'bank') setShowBookmarkFilter(false);
        }}
        speechRate={speechRate}
        toggleSpeechRate={toggleSpeechRate}
        openPrintModal={() => setIsPrintModalOpen(true)}
        bookmarkedCount={bookmarks.length}
        openBookmarks={handleOpenBookmarks}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {/* Visual Hero & Concept Intro (Visible on Bank tab) */}
        {activeTab === 'bank' && !showBookmarkFilter && (
          <section className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 -mb-10 w-60 h-60 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
                <GraduationCap className="w-4 h-4" />
                <span>ધોરણ ૬, ૭ અને ૮ - અંગ્રેજી પ્રાસ શબ્દો (GSEB / NCERT)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                English Rhyming Words Master
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-balance">
                અંગ્રેજી ભાષા અને કાવ્યોમાં સરખા ઉચ્ચારણ (Rhyme) વાળા શબ્દો શીખો, દરેક શબ્દનો સાચો ધ્વનિ સાંભળો, ગુજરાતી અર્થ સમજો અને પરીક્ષા માટે જોડકાં તેમજ કસોટીની તૈયારી કરો.
              </p>

              {/* Quick Curriculum Highlights (Zero-pill text separators) */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-indigo-200">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Std 6: In the Zoo · My Bicycle</span>
                </span>
                <span aria-hidden="true" className="text-indigo-400/50">/</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Std 7: The River · Smile in the Mirror</span>
                </span>
                <span aria-hidden="true" className="text-indigo-400/50">/</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Std 8: Q for Question · Nature's Symphony</span>
                </span>
              </div>

              {/* Quick Jump Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveTab('match')}
                  className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <span>જોડકાં જોડો રમત (Match Pairs)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveTab('oddone')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-400/30 rounded-lg transition-colors"
                >
                  અસંગત શબ્દ શોધો (Odd One Out)
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-400/30 rounded-lg transition-colors"
                >
                  કસોટી પરીક્ષા (Quiz)
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Tab Views */}
        {activeTab === 'bank' && (
          <WordBank
            bookmarks={bookmarks}
            toggleBookmark={toggleBookmark}
            showOnlyBookmarks={showBookmarkFilter}
            onClearBookmarkFilter={() => setShowBookmarkFilter(false)}
          />
        )}

        {activeTab === 'match' && <MatchGame />}

        {activeTab === 'oddone' && <OddOneOut />}

        {activeTab === 'poem' && <PoemHunter />}

        {activeTab === 'quiz' && <QuizTest />}

        {activeTab === 'maker' && <RhymeMaker />}
      </main>

      {/* Printable Sheet Modal */}
      <PrintSheetModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

      {/* Educational Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">RhymeMaster Std 6–8</span>
            <span aria-hidden="true">·</span>
            <span>ગુજરાત શિક્ષણ બોર્ડ (GSEB / GCERT) ધોરણ ૬ થી ૮ અંગ્રેજી પ્રાસ શબ્દો</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Web Speech Audio Pronunciation</span>
            <span aria-hidden="true">·</span>
            <span>Offline Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
