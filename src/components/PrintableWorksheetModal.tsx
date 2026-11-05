import React, { useState } from 'react';
import { X, Printer, FileText, CheckSquare, Eye } from 'lucide-react';
import { Question } from '../types';
import { FormattedMathText } from './MathRenderer';

interface PrintableWorksheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  currentSubject?: string;
}

export const PrintableWorksheetModal: React.FC<PrintableWorksheetModalProps> = ({
  isOpen,
  onClose,
  questions,
  currentSubject,
}) => {
  const [includeExplanations, setIncludeExplanations] = useState<boolean>(true);
  const [maxCount, setMaxCount] = useState<number>(Math.min(questions.length, 10));

  if (!isOpen) return null;

  const displayQuestions = questions.slice(0, maxCount);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl border border-slate-200 w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden animate-in fade-in duration-150">
        {/* Controls Header */}
        <div className="px-6 py-4 bg-[#0f2347] text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-sm border border-sky-400/30">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold font-display tracking-tight">Printable SAT Worksheet & HTML Export</h2>
              <p className="text-xs text-slate-300">Clean, publication-ready printable problem set with answer key</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold bg-white text-[#0f2347] rounded hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print to PDF / Paper</span>
            </button>
            <button
              onClick={onClose}
              className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors ml-2"
              aria-label="Close worksheet"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Configuration Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-4 text-xs text-slate-600 no-print flex-wrap">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">Questions:</span>
              <select
                value={maxCount}
                onChange={(e) => setMaxCount(Number(e.target.value))}
                className="px-2 py-1 border border-slate-300 rounded bg-white text-xs font-medium"
              >
                <option value={5}>5 Questions</option>
                <option value={10}>10 Questions</option>
                <option value={20}>20 Questions</option>
                <option value={Math.min(questions.length, 50)}>Up to {Math.min(questions.length, 50)}</option>
              </select>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={includeExplanations}
                onChange={(e) => setIncludeExplanations(e.target.checked)}
                className="rounded border-slate-300 text-[#0f2347] focus:ring-[#0f2347]"
              />
              <span>Include Detailed Answer Key & Explanations</span>
            </label>
          </div>

          <div className="text-slate-400">
            Formatted for standard 8.5" × 11" Letter page printing
          </div>
        </div>

        {/* Printable Document Preview Area */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 bg-white print-page font-serif">
          {/* Cover Header */}
          <div className="border-b-2 border-slate-900 pb-4 mb-8">
            <div className="flex items-center justify-between text-xs font-sans uppercase tracking-wider text-slate-500 mb-1">
              <span>ISAT Preparation Series</span>
              <span>Official Practice Worksheet</span>
            </div>
            <h1 className="text-2xl font-bold font-sans text-slate-900">
              Digital SAT Practice Set: {currentSubject || 'Comprehensive'}
            </h1>
            <p className="text-xs font-sans text-slate-600 mt-1">
              Total Questions: {displayQuestions.length} · Recommended Time: {Math.round(displayQuestions.reduce((acc, q) => acc + q.estimatedTimeSeconds, 0) / 60)} Minutes
            </p>
          </div>

          {/* Student details header for printouts */}
          <div className="grid grid-cols-3 gap-4 border border-slate-300 p-3 mb-8 font-sans text-xs">
            <div>Student Name: _______________________</div>
            <div>Date: ________________</div>
            <div>Score: _____ / {displayQuestions.length}</div>
          </div>

          {/* Questions */}
          <div className="space-y-8 font-sans">
            {displayQuestions.map((q, idx) => (
              <div key={q.id} className="pb-6 border-b border-slate-200 break-inside-avoid">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-bold font-mono text-slate-800">
                    Question {idx + 1} ({q.id})
                  </span>
                  <span>{q.subtopic} · {q.difficulty}</span>
                </div>

                {q.passage && (
                  <div className="mb-3 p-3 bg-slate-50 border border-slate-200 text-sm italic font-serif leading-relaxed">
                    <FormattedMathText text={q.passage} />
                  </div>
                )}

                {q.tableData && (
                  <div className="mb-3 overflow-x-auto">
                    <table className="w-full text-xs border border-slate-300">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-300">
                          {q.tableData.headers.map((h, i) => (
                            <th key={i} className="p-1.5 text-left font-bold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {q.tableData.rows.map((row, rI) => (
                          <tr key={rI} className="border-b border-slate-200">
                            {row.map((cell, cI) => (
                              <td key={cI} className="p-1.5">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="text-sm font-medium text-slate-900 mb-3 leading-relaxed">
                  <FormattedMathText text={q.prompt} />
                </div>

                {q.questionType !== 'Student-Produced Response' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt) => (
                      <div key={opt.letter} className="flex items-start gap-2 p-1.5">
                        <span className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center font-bold shrink-0">
                          {opt.letter}
                        </span>
                        <span className="pt-0.5">
                          <FormattedMathText text={opt.text} />
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-3 border border-slate-300 rounded text-xs text-slate-500">
                    Answer Box: ______________________________
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Answer Key & Explanations Section */}
          {includeExplanations && (
            <div className="mt-12 pt-8 border-t-4 border-slate-900 page-break-before font-sans">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900 font-sans">
                  Official Answer Key & In-Depth Explanations
                </h2>
                <p className="text-xs text-slate-500">
                  Review every question to understand both the correct methodology and common distractor pitfalls.
                </p>
              </div>

              <div className="space-y-6">
                {displayQuestions.map((q, idx) => (
                  <div key={q.id} className="p-4 bg-slate-50 border border-slate-200 rounded text-xs space-y-2 break-inside-avoid">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>Question {idx + 1} ({q.id})</span>
                      <span className="text-[#0f2347]">Correct Answer: {q.correctAnswer}</span>
                    </div>

                    <div className="text-slate-700 leading-relaxed font-sans">
                      <strong>Solution:</strong> <FormattedMathText text={q.explanationSummary} />
                    </div>

                    {q.relevantConceptOrFormula && (
                      <div className="text-sky-900 bg-white p-2 rounded border border-slate-200">
                        <strong>Concept:</strong> <FormattedMathText text={q.relevantConceptOrFormula} />
                      </div>
                    )}

                    <div className="space-y-1 pt-1">
                      {q.options.map((opt) => (
                        <div key={opt.letter} className="text-slate-600">
                          <strong>({opt.letter})</strong> <FormattedMathText text={opt.explanation} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
