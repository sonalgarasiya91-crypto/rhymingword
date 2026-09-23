import React from 'react';
import { Volume2, Printer, Bookmark } from 'lucide-react';

export type ActiveTab = 'bank' | 'match' | 'oddone' | 'poem' | 'quiz' | 'maker';

interface TopNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  speechRate: number;
  toggleSpeechRate: () => void;
  openPrintModal: () => void;
  bookmarkedCount: number;
  openBookmarks: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeTab,
  setActiveTab,
  speechRate,
  toggleSpeechRate,
  openPrintModal,
  bookmarkedCount,
  openBookmarks
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('bank');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors whitespace-nowrap"
        >
          RhymeMaster Std 6–8
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => setActiveTab('bank')}
            className={`transition-colors pb-1 border-b-2 ${
              activeTab === 'bank'
                ? 'border-indigo-600 text-indigo-700 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Word Bank
          </button>
          <button
            onClick={() => setActiveTab('match')}
            className={`transition-colors pb-1 border-b-2 ${
              activeTab === 'match'
                ? 'border-indigo-600 text-indigo-700 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Match Pairs
          </button>
          <button
            onClick={() => setActiveTab('oddone')}
            className={`transition-colors pb-1 border-b-2 ${
              activeTab === 'oddone'
                ? 'border-indigo-600 text-indigo-700 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Odd One Out
          </button>
          <button
            onClick={() => setActiveTab('poem')}
            className={`transition-colors pb-1 border-b-2 ${
              activeTab === 'poem'
                ? 'border-indigo-600 text-indigo-700 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Poem Hunter
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`transition-colors pb-1 border-b-2 ${
              activeTab === 'quiz'
                ? 'border-indigo-600 text-indigo-700 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Unit Quiz
          </button>
          <button
            onClick={() => setActiveTab('maker')}
            className={`transition-colors pb-1 border-b-2 ${
              activeTab === 'maker'
                ? 'border-indigo-600 text-indigo-700 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Rhyme Maker
          </button>
        </nav>

        {/* Zone 3: Primary functional actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleSpeechRate}
            title={`Current audio speed: ${speechRate === 0.85 ? 'Slow (0.85x)' : 'Normal (1.0x)'}`}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <Volume2 className="w-3.5 h-3.5 text-slate-600" />
            <span className="font-mono tabular-nums">{speechRate === 0.85 ? '0.8x' : '1.0x'}</span>
          </button>

          <button
            onClick={openBookmarks}
            title="Saved Words for Revision"
            className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <Bookmark className="w-3.5 h-3.5 text-slate-600" />
            <span className="font-mono tabular-nums">{bookmarkedCount}</span>
          </button>

          <button
            onClick={openPrintModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print Worksheets</span>
            <span className="sm:hidden">Print</span>
          </button>
        </div>
      </div>

      {/* Mobile Secondary Navigation Row */}
      <div className="md:hidden flex items-center overflow-x-auto px-4 py-2 border-t border-slate-100 gap-4 text-xs font-medium text-slate-600 no-scrollbar">
        <button
          onClick={() => setActiveTab('bank')}
          className={`whitespace-nowrap ${activeTab === 'bank' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          શબ્દ ભંડાર
        </button>
        <button
          onClick={() => setActiveTab('match')}
          className={`whitespace-nowrap ${activeTab === 'match' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          જોડકાં જોડો
        </button>
        <button
          onClick={() => setActiveTab('oddone')}
          className={`whitespace-nowrap ${activeTab === 'oddone' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          અસંગત શોધો
        </button>
        <button
          onClick={() => setActiveTab('poem')}
          className={`whitespace-nowrap ${activeTab === 'poem' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          કાવ્ય પ્રાસ
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`whitespace-nowrap ${activeTab === 'quiz' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          કસોટી
        </button>
        <button
          onClick={() => setActiveTab('maker')}
          className={`whitespace-nowrap ${activeTab === 'maker' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          પ્રાસ રચના
        </button>
      </div>
    </header>
  );
};
