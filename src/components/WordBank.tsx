import React, { useState, useMemo } from 'react';
import { RhymeWord, GradeLevel } from '../types/rhyme';
import { RHYMING_WORDS } from '../data/rhymingWordsData';
import { speakText, speakRhymingPair } from '../utils/speech';
import { Volume2, Search, Star, BookOpen, Sparkles, Filter } from 'lucide-react';

interface WordBankProps {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  showOnlyBookmarks?: boolean;
  onClearBookmarkFilter?: () => void;
}

export const WordBank: React.FC<WordBankProps> = ({
  bookmarks,
  toggleBookmark,
  showOnlyBookmarks = false,
  onClearBookmarkFilter
}) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('all');
  const [selectedFamily, setSelectedFamily] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showGujarati, setShowGujarati] = useState<boolean>(true);
  const [activePlayingWord, setActivePlayingWord] = useState<string | null>(null);

  // Extract unique sound families
  const soundFamilies = useMemo(() => {
    const families = new Set<string>();
    RHYMING_WORDS.forEach((w) => families.add(w.soundFamily));
    return ['all', ...Array.from(families).sort()];
  }, []);

  // Filter words
  const filteredWords = useMemo(() => {
    return RHYMING_WORDS.filter((item) => {
      if (showOnlyBookmarks && !bookmarks.includes(item.id)) {
        return false;
      }
      if (selectedGrade !== 'all' && item.grade !== selectedGrade) {
        return false;
      }
      if (selectedFamily !== 'all' && item.soundFamily !== selectedFamily) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesWord = item.word.toLowerCase().includes(query);
        const matchesGu = item.meaningGu.toLowerCase().includes(query);
        const matchesPronunciation = item.pronunciationGu.toLowerCase().includes(query);
        const matchesPoem = item.sourcePoem?.toLowerCase().includes(query) ?? false;
        const matchesRhyme = item.rhymesWith.some((r) => r.toLowerCase().includes(query));
        return matchesWord || matchesGu || matchesPronunciation || matchesPoem || matchesRhyme;
      }
      return true;
    });
  }, [selectedGrade, selectedFamily, searchQuery, showOnlyBookmarks, bookmarks]);

  const handlePlayWord = async (word: string) => {
    setActivePlayingWord(word);
    await speakText(word);
    setActivePlayingWord(null);
  };

  const handlePlayPair = async (word1: string, word2: string) => {
    setActivePlayingWord(`${word1}-${word2}`);
    await speakRhymingPair(word1, word2);
    setActivePlayingWord(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner & Context */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 mb-1">
              <span>GSEB / NCERT CURRICULUM</span>
              <span aria-hidden="true">·</span>
              <span>ધોરણ ૬ થી ૮ અંગ્રેજી પ્રાસ શબ્દો</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Rhyming Words Explorer (શબ્દ ભંડાર)
            </h1>
            <p className="mt-1 text-sm text-slate-600 max-w-2xl text-balance">
              અંગ્રેજી કાવ્યોમાં સમાન અંતિમ ધ્વનિ (Ending Sound) ધરાવતા શબ્દોને <strong className="text-slate-800 font-semibold">Rhyming Words</strong> કહે છે. દરેક શબ્દનો સાચો ઉચ્ચાર સાંભળો અને ગુજરાતી અર્થ સમજો.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <label className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 cursor-pointer hover:bg-slate-100 transition-colors">
              <input
                type="checkbox"
                checked={showGujarati}
                onChange={(e) => setShowGujarati(e.target.checked)}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>ગુજરાતી અર્થ દર્શાવો</span>
            </label>
          </div>
        </div>

        {/* Filter Controls (Segmented Buttons) */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Grade Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg w-fit overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedGrade('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedGrade === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Grades (બધા ધોરણ)
            </button>
            <button
              onClick={() => setSelectedGrade('6')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedGrade === '6'
                  ? 'bg-white text-indigo-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Std 6 (ધોરણ ૬)
            </button>
            <button
              onClick={() => setSelectedGrade('7')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedGrade === '7'
                  ? 'bg-white text-emerald-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Std 7 (ધોરણ ૭)
            </button>
            <button
              onClick={() => setSelectedGrade('8')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedGrade === '8'
                  ? 'bg-white text-violet-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Std 8 (ધોરણ ૮)
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search word, ગુજરાતી અર્થ, poem..."
              className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Sound Family Chips */}
        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-slate-500 shrink-0 flex items-center gap-1 font-medium">
            <Filter className="w-3 h-3" /> ધ્વનિ સમૂહ:
          </span>
          {soundFamilies.map((family) => (
            <button
              key={family}
              onClick={() => setSelectedFamily(family)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                selectedFamily === family
                  ? 'bg-indigo-600 text-white font-medium'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {family === 'all' ? 'All' : family}
            </button>
          ))}
        </div>
      </div>

      {/* Bookmark Active Banner if filtered */}
      {showOnlyBookmarks && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span className="text-sm font-medium text-amber-900">
              Showing Bookmarked Words ({filteredWords.length} words saved for revision)
            </span>
          </div>
          {onClearBookmarkFilter && (
            <button
              onClick={onClearBookmarkFilter}
              className="text-xs font-semibold text-amber-800 hover:underline"
            >
              Show All Words
            </button>
          )}
        </div>
      )}

      {/* Results Header Metadata (Zero-Pill discipline) */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <div className="flex items-center gap-2">
          <span>Results: <strong className="text-slate-700 font-semibold font-mono tabular-nums">{filteredWords.length}</strong> words</span>
          <span aria-hidden="true">·</span>
          <span>Grade: {selectedGrade === 'all' ? 'All Standards' : `Standard ${selectedGrade}`}</span>
          {selectedFamily !== 'all' && (
            <>
              <span aria-hidden="true">·</span>
              <span>Sound Family: <span className="font-mono text-indigo-600">{selectedFamily}</span></span>
            </>
          )}
        </div>
        <span className="hidden sm:inline">Click speaker or rhyming partner to listen</span>
      </div>

      {/* Word Cards Grid */}
      {filteredWords.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800">કોઈ શબ્દ મળ્યો નથી</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search query or reset the grade and sound family filters.
          </p>
          <button
            onClick={() => {
              setSelectedGrade('all');
              setSelectedFamily('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWords.map((item) => {
            const isBookmarked = bookmarks.includes(item.id);
            const isPlayingThis = activePlayingWord === item.word;

            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 hover:border-indigo-300 rounded-xl p-5 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Metadata (Zero-pill) & Bookmark */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-indigo-600">Std {item.grade}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-slate-600">{item.soundFamily}</span>
                    </div>
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className="p-1 text-slate-400 hover:text-amber-500 transition-colors"
                      title={isBookmarked ? 'Remove from bookmarks' : 'Bookmark for revision'}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          isBookmarked ? 'text-amber-500 fill-amber-400' : 'text-slate-300'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Primary Word & Audio Button */}
                  <div className="flex items-baseline justify-between gap-2 mt-1">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                        {item.word}
                        <span className="text-sm font-normal text-slate-400">
                          [{item.pronunciationGu}]
                        </span>
                      </h2>
                      {showGujarati && (
                        <p className="text-sm font-medium text-indigo-900 mt-0.5">
                          {item.meaningGu}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => handlePlayWord(item.word)}
                      className={`p-2 rounded-lg transition-colors shrink-0 ${
                        isPlayingThis
                          ? 'bg-indigo-600 text-white animate-pulse'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                      title={`Listen to pronunciation of "${item.word}"`}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* English Definition */}
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {item.meaningEn}
                  </p>

                  {/* Rhyming Partners Section */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-indigo-500" />
                      <span>Rhymes With (પ્રાસયુક્ત સાથી):</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.rhymesWith.map((rhyme) => {
                        const isPairPlaying = activePlayingWord === `${item.word}-${rhyme}`;
                        return (
                          <button
                            key={rhyme}
                            onClick={() => handlePlayPair(item.word, rhyme)}
                            title={`Click to pronounce "${item.word}" & "${rhyme}" together`}
                            className={`px-2.5 py-1 text-xs rounded-md transition-colors flex items-center gap-1 ${
                              isPairPlaying
                                ? 'bg-indigo-600 text-white font-medium'
                                : 'bg-slate-100 hover:bg-indigo-50 text-slate-800 hover:text-indigo-700 border border-slate-200'
                            }`}
                          >
                            <span className="font-medium">{rhyme}</span>
                            <Volume2 className="w-3 h-3 opacity-60" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Example Couplet in Poem context */}
                <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 -mx-5 -mb-5 p-4 rounded-b-xl">
                  <p className="text-xs text-slate-700 italic font-medium">
                    "{item.exampleSentenceEn}"
                  </p>
                  {showGujarati && (
                    <p className="text-xs text-slate-500 mt-1">
                      {item.exampleSentenceGu}
                    </p>
                  )}
                  {item.sourcePoem && (
                    <div className="mt-2 text-[11px] text-slate-400">
                      <span>પાઠ્યપુસ્તક સંદર્ભ: {item.sourcePoem}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
