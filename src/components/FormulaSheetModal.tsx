import React, { useState } from 'react';
import { X, Printer, BookOpen, Calculator, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_SAT_MATH_FORMULAS, ESSENTIAL_ADVANCED_MATH_FORMULAS, RW_CONVENTIONS_CHEAT_SHEET } from '../data/formulaData';
import { OfficialSatReferenceSheet } from './OfficialSatReferenceSheet';
import { MathRenderer } from './MathRenderer';

interface FormulaSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormulaSheetModal: React.FC<FormulaSheetModalProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<'official-math' | 'advanced-math' | 'rw-rules'>('official-math');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl border border-slate-200 w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-150">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0f2347] text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-sm border border-sky-400/30">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold font-display tracking-tight">SAT Reference & Formula Sheets</h2>
              <p className="text-xs text-slate-300">Official Bluebook standard geometry reference and essential formulas</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded transition-colors flex items-center gap-1.5 border border-white/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Sheet</span>
            </button>
            <button
              onClick={onClose}
              className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors ml-2"
              aria-label="Close formula sheet"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 no-print">
          <button
            onClick={() => setActiveSection('official-math')}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
              activeSection === 'official-math'
                ? 'bg-[#0f2347] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Official Bluebook Reference
          </button>
          <button
            onClick={() => setActiveSection('advanced-math')}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
              activeSection === 'advanced-math'
                ? 'bg-[#0f2347] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Must-Know Advanced Math
          </button>
          <button
            onClick={() => setActiveSection('rw-rules')}
            className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
              activeSection === 'rw-rules'
                ? 'bg-[#0f2347] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Reading & Writing Cheat Sheet
          </button>
        </div>

        {/* Sheet Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-white print-page">
          {activeSection === 'official-math' && (
            <div className="space-y-6">
              <OfficialSatReferenceSheet />
            </div>
          )}

          {activeSection === 'advanced-math' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Essential Advanced Math Formulas (Not Provided on Exam)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  High-frequency formulas required to solve Advanced Math, Algebra, and Trigonometry questions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {ESSENTIAL_ADVANCED_MATH_FORMULAS.formulas.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold text-[#0f2347]">{item.name}</h4>
                      </div>
                      <div className="p-3.5 bg-slate-50 border border-slate-200 rounded text-center text-slate-900 text-base font-semibold my-2 overflow-x-auto">
                        <MathRenderer math={item.formula} displayMode={true} />
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2">{item.explanation}</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {item.satExample && (
                        <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100">
                          <span className="font-semibold text-slate-800">Example: </span>
                          {item.satExample}
                        </div>
                      )}
                      {item.desmosTip && (
                        <div className="text-xs text-sky-900 bg-sky-50 p-2.5 rounded border border-sky-100">
                          <span className="font-semibold text-sky-950">Desmos Shortcut: </span>
                          {item.desmosTip}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'rw-rules' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  SAT Reading & Writing Grammar & Conventions Rules
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Punctuation hierarchy, clause boundaries, transitions, and rhetorical synthesis guidelines.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {RW_CONVENTIONS_CHEAT_SHEET.formulas.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs space-y-2"
                  >
                    <h4 className="text-sm font-bold text-[#0f2347]">{item.name}</h4>
                    <div className="p-3 bg-slate-50 rounded border border-slate-200 font-medium text-xs sm:text-sm text-slate-900 overflow-x-auto">
                      <MathRenderer math={item.formula} />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.explanation}</p>
                    {item.satExample && (
                      <div className="text-xs text-slate-700 bg-emerald-50/70 border border-emerald-100 p-2.5 rounded">
                        <span className="font-semibold text-emerald-900">Application: </span>
                        {item.satExample}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'rw-rules' && (
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  SAT Reading & Writing Grammar & Conventions Rules
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Punctuation hierarchy, clause boundaries, transitions, and rhetorical synthesis guidelines.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {RW_CONVENTIONS_CHEAT_SHEET.formulas.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs space-y-2"
                  >
                    <h4 className="text-sm font-bold text-[#0f2347]">{item.name}</h4>
                    <div className="p-2.5 bg-slate-50 rounded border border-slate-200 font-mono text-xs text-slate-900 font-medium">
                      {item.formula}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.explanation}</p>
                    {item.satExample && (
                      <div className="text-xs text-slate-700 bg-emerald-50/70 border border-emerald-100 p-2.5 rounded">
                        <span className="font-semibold text-emerald-900">Application: </span>
                        {item.satExample}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 no-print">
          <span>ISAT Academic Formula Archive</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded transition-colors"
          >
            Close Sheet
          </button>
        </div>
      </div>
    </div>
  );
};
