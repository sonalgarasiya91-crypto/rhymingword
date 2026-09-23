import React, { useState } from 'react';
import { RHYMING_WORDS, POEM_STANZAS } from '../data/rhymingWordsData';
import { Printer, X, FileText, CheckCircle2 } from 'lucide-react';

interface PrintSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintSheetModal: React.FC<PrintSheetModalProps> = ({ isOpen, onClose }) => {
  const [printType, setPrintType] = useState<'study' | 'worksheet'>('study');
  const [targetGrade, setTargetGrade] = useState<'all' | '6' | '7' | '8'>('all');

  if (!isOpen) return null;

  const words = RHYMING_WORDS.filter(
    (w) => targetGrade === 'all' || w.grade === targetGrade
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl no-print-modal">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 flex items-center justify-between no-print">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Printer className="w-5 h-5 text-indigo-600" />
              <span>Printable Study Sheets & Worksheets</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              શાળાના વિદ્યાર્થીઓ અને શિક્ષકો માટે પ્રિન્ટ કરવા યોગ્ય અધ્યયન પત્રિકા
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Controls (No Print) */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">પત્રિકા પ્રકાર:</span>
            <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg">
              <button
                onClick={() => setPrintType('study')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  printType === 'study'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                અધ્યયન યાદી (Study Sheet)
              </button>
              <button
                onClick={() => setPrintType('worksheet')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  printType === 'worksheet'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                પરીક્ષા વર્કશીટ (Test Worksheet)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">ધોરણ પસંદ કરો:</span>
            <select
              value={targetGrade}
              onChange={(e) => setTargetGrade(e.target.value as any)}
              className="px-3 py-1.5 text-xs font-medium bg-white border border-slate-200 rounded-lg text-slate-800"
            >
              <option value="all">બધા ધોરણ (Std 6 to 8)</option>
              <option value="6">ધોરણ ૬ (Standard 6)</option>
              <option value="7">ધોરણ ૭ (Standard 7)</option>
              <option value="8">ધોરણ ૮ (Standard 8)</option>
            </select>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>હમણાં પ્રિન્ટ કરો (Print Now)</span>
          </button>
        </div>

        {/* Printable Paper Preview (Scrollable in Modal, Full Width in Print) */}
        <div className="p-8 overflow-y-auto flex-1 bg-white printable-area">
          {/* Paper Header */}
          <div className="text-center border-b-2 border-slate-900 pb-4 mb-6">
            <h1 className="text-xl font-bold uppercase tracking-wider text-slate-900">
              GSEB Standard {targetGrade === 'all' ? '6, 7 & 8' : targetGrade} English
            </h1>
            <h2 className="text-base font-semibold text-slate-700 mt-1">
              {printType === 'study'
                ? 'Rhyming Words Master Study Sheet (પ્રાસ શબ્દો અધ્યયન પત્રક)'
                : 'Rhyming Words Practice Worksheet (પ્રાસયુક્ત શબ્દો કસોટી પત્રક)'}
            </h2>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-600 px-2 font-mono">
              <span>Student Name: _______________________</span>
              <span>Roll No: ______</span>
              <span>Date: _________</span>
            </div>
          </div>

          {printType === 'study' ? (
            /* Study Sheet View: Table */
            <div className="space-y-6">
              <table className="w-full border-collapse border border-slate-300 text-xs">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-2 text-left font-bold">Word</th>
                    <th className="border border-slate-300 p-2 text-left font-bold">ઉચ્ચાર</th>
                    <th className="border border-slate-300 p-2 text-left font-bold">ગુજરાતી અર્થ</th>
                    <th className="border border-slate-300 p-2 text-left font-bold">Sound</th>
                    <th className="border border-slate-300 p-2 text-left font-bold">Rhyming Words (પ્રાસ શબ્દો)</th>
                    <th className="border border-slate-300 p-2 text-left font-bold">Std</th>
                  </tr>
                </thead>
                <tbody>
                  {words.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-2 font-bold text-slate-900">{item.word}</td>
                      <td className="border border-slate-300 p-2 text-slate-600">{item.pronunciationGu}</td>
                      <td className="border border-slate-300 p-2 font-medium text-slate-800">{item.meaningGu}</td>
                      <td className="border border-slate-300 p-2 font-mono text-indigo-700">{item.soundFamily}</td>
                      <td className="border border-slate-300 p-2 font-medium text-slate-900">
                        {item.rhymesWith.join(', ')}
                      </td>
                      <td className="border border-slate-300 p-2 text-center font-mono">Std {item.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Poem Stanzas Reference */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-3">
                  Textbook Poems & Rhymes (પાઠ્યપુસ્તક કાવ્યોમાંથી પ્રાસ):
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {POEM_STANZAS.map((stanza) => (
                    <div key={stanza.id} className="p-3 border border-slate-300 rounded-lg text-xs space-y-1">
                      <div className="font-bold text-slate-900">
                        Std {stanza.grade}: {stanza.poemNameEn} ({stanza.poemNameGu})
                      </div>
                      <div className="italic text-slate-700">
                        {stanza.lines.slice(0, 2).join(' / ')}
                      </div>
                      <div className="font-semibold text-indigo-700">
                        Rhyming Pairs: {stanza.rhymingPairs.map((p) => `${p[0]} - ${p[1]}`).join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Practice Worksheet View */
            <div className="space-y-6 text-xs text-slate-800">
              {/* Question 1: Write Rhyming Words */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  Q.1 Write TWO rhyming words for each of the following: (દરેક માટે ૨ પ્રાસ શબ્દો લખો) [10 Marks]
                </h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-3">
                  {words.slice(0, 8).map((w, idx) => (
                    <div key={w.id} className="flex items-center justify-between border-b border-dotted border-slate-400 pb-1">
                      <span className="font-bold">{idx + 1}. {w.word} ({w.meaningGu}):</span>
                      <span className="text-slate-400">1. _____________ 2. _____________</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Question 2: Match the rhyming pairs */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  Q.2 Match Column 'A' with Column 'B' (પ્રાસયુક્ત શબ્દોનાં યોગ્ય જોડકાં જોડો) [5 Marks]
                </h3>
                <div className="grid grid-cols-2 gap-6 mt-3">
                  <div className="space-y-2">
                    <div className="font-bold underline">Column 'A'</div>
                    <div>(1) Night</div>
                    <div>(2) Bell</div>
                    <div>(3) Tall</div>
                    <div>(4) Sea</div>
                    <div>(5) Crown</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-bold underline">Column 'B'</div>
                    <div>(A) Small</div>
                    <div>(B) Bright</div>
                    <div>(C) Town</div>
                    <div>(D) Tell</div>
                    <div>(E) Tree</div>
                  </div>
                </div>
              </div>

              {/* Question 3: Find Odd One Out */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  Q.3 Circle the ODD (Non-rhyming) word in each group: (અસંગત શબ્દ પર વર્તુળ કરો) [5 Marks]
                </h3>
                <div className="space-y-2.5 mt-3">
                  <div>1. Ball &nbsp;&nbsp;&nbsp;&nbsp; Call &nbsp;&nbsp;&nbsp;&nbsp; Tall &nbsp;&nbsp;&nbsp;&nbsp; Book</div>
                  <div>2. Night &nbsp;&nbsp;&nbsp; Bright &nbsp;&nbsp;&nbsp; Tree &nbsp;&nbsp;&nbsp; Light</div>
                  <div>3. Flew &nbsp;&nbsp;&nbsp;&nbsp; Blew &nbsp;&nbsp;&nbsp;&nbsp; Knew &nbsp;&nbsp;&nbsp; Play</div>
                  <div>4. Hear &nbsp;&nbsp;&nbsp;&nbsp; Clear &nbsp;&nbsp;&nbsp; Star &nbsp;&nbsp;&nbsp;&nbsp; Near</div>
                  <div>5. Crown &nbsp;&nbsp;&nbsp; Town &nbsp;&nbsp;&nbsp;&nbsp; Brown &nbsp;&nbsp;&nbsp; Wing</div>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-slate-300 text-slate-500 font-mono text-[11px]">
                --- Best of Luck! / શુભેચ્છાઓ ---
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
