import React, { useState, useEffect } from 'react';
import {
  X,
  Clock,
  Eye,
  Bookmark,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Calculator,
  BookOpen,
  Printer,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Strikethrough,
} from 'lucide-react';
import { Question } from '../types';
import { SolvedRecord } from '../utils/analytics';
import { FormattedMathText } from './MathRenderer';

interface QuestionDetailModalProps {
  question: Question | null;
  isOpen: boolean;
  onClose: () => void;
  solvedRecord?: SolvedRecord;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onSaveAnswer: (questionId: string, selected: string, isCorrect: boolean, timeSeconds: number) => void;
  onOpenDesmos: () => void;
  onOpenFormulas: () => void;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
  viewsCount: number;
}

export const QuestionDetailModal: React.FC<QuestionDetailModalProps> = ({
  question,
  isOpen,
  onClose,
  solvedRecord,
  isBookmarked,
  onToggleBookmark,
  onSaveAnswer,
  onOpenDesmos,
  onOpenFormulas,
  onNavigateNext,
  onNavigatePrev,
  viewsCount,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [studentInput, setStudentInput] = useState<string>('');
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (question) {
      if (solvedRecord) {
        setSelectedOption(solvedRecord.selectedAnswer);
        setStudentInput(solvedRecord.selectedAnswer);
        setHasSubmitted(true);
        setTimerSeconds(solvedRecord.timeSpentSeconds);
        setIsTimerRunning(false);
      } else {
        setSelectedOption('');
        setStudentInput('');
        setHasSubmitted(false);
        setTimerSeconds(0);
        setIsTimerRunning(true);
      }
      setEliminatedOptions({});
    }
  }, [question, solvedRecord]);

  useEffect(() => {
    let interval: any;
    if (isOpen && isTimerRunning && !hasSubmitted) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isTimerRunning, hasSubmitted]);

  if (!isOpen || !question) return null;

  const isSPR = question.questionType === 'Student-Produced Response';

  const handleSubmit = () => {
    const answer = isSPR ? studentInput.trim() : selectedOption;
    if (!answer) return;

    const isCorrect = isSPR
      ? answer.toLowerCase() === question.correctAnswer.toString().toLowerCase()
      : answer === question.correctAnswer;

    setHasSubmitted(true);
    setIsTimerRunning(false);
    onSaveAnswer(question.id, answer, isCorrect, timerSeconds);
  };

  const handleReset = () => {
    setSelectedOption('');
    setStudentInput('');
    setHasSubmitted(false);
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setEliminatedOptions({});
  };

  const toggleEliminate = (letter: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEliminatedOptions((prev) => ({
      ...prev,
      [letter]: !prev[letter],
    }));
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handlePrint = () => {
    window.print();
  };

  const isCurrentCorrect = isSPR
    ? studentInput.trim().toLowerCase() === question.correctAnswer.toString().toLowerCase()
    : selectedOption === question.correctAnswer;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl border border-slate-200 w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden animate-in fade-in duration-150">
        {/* Top Bar Navigation & Tools */}
        <div className="px-5 py-3 bg-[#0f2347] text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-sm tracking-wide bg-white/10 px-2 py-0.5 rounded text-sky-200">
              {question.id}
            </span>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
              <span>{question.subject}</span>
              <span aria-hidden="true">·</span>
              <span>{question.topic}</span>
              <span aria-hidden="true">·</span>
              <span className="text-white font-medium">{question.subtopic}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Live Timer */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded text-xs font-mono tabular-nums text-slate-200">
              <Clock className="w-3.5 h-3.5 text-sky-300" />
              <span>{formatTimer(timerSeconds)}</span>
            </div>

            {/* In-Exam Tools */}
            <button
              onClick={onOpenDesmos}
              className="px-2.5 py-1 text-xs font-medium bg-white/10 hover:bg-white/20 text-white rounded transition-colors flex items-center gap-1"
              title="Open Desmos Graphing Calculator"
            >
              <Calculator className="w-3.5 h-3.5 text-sky-300" />
              <span className="hidden sm:inline">Desmos</span>
            </button>

            <button
              onClick={onOpenFormulas}
              className="px-2.5 py-1 text-xs font-medium bg-white/10 hover:bg-white/20 text-white rounded transition-colors flex items-center gap-1"
              title="Open Formula Reference Sheet"
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-300" />
              <span className="hidden sm:inline">Formulas</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10 transition-colors"
              title="Print Question & Explanations"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={() => onToggleBookmark(question.id)}
              className={`p-1.5 rounded hover:bg-white/10 transition-colors ${
                isBookmarked ? 'text-amber-400' : 'text-slate-300 hover:text-white'
              }`}
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
            >
              <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>

            <button
              onClick={onClose}
              className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 bg-slate-50/60 print-page">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Metadata Bar */}
            <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-slate-900">{question.subject}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-700">{question.topic}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-600">{question.subtopic}</span>
                <span aria-hidden="true">·</span>
                <span
                  className={
                    question.difficulty === 'Hard'
                      ? 'text-rose-700 font-semibold'
                      : question.difficulty === 'Medium'
                      ? 'text-amber-700 font-semibold'
                      : 'text-emerald-700 font-semibold'
                  }
                >
                  {question.difficulty} Difficulty
                </span>
              </div>

              <div className="flex items-center gap-3 tabular-nums">
                <span className="flex items-center gap-1 text-slate-600">
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  <span>{viewsCount.toLocaleString()} views</span>
                </span>
                <span className="text-slate-400">Target: ~{question.estimatedTimeSeconds}s</span>
              </div>
            </div>

            {/* Passage (if RW or data question) */}
            {question.passage && (
              <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Passage / Context
                </div>
                <div className="text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line font-serif">
                  <FormattedMathText text={question.passage} />
                </div>
              </div>
            )}

            {/* Table Data (if present) */}
            {question.tableData && (
              <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      {question.tableData.headers.map((h, idx) => (
                        <th key={idx} className="py-2.5 px-3 font-semibold text-slate-800">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {question.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50/50">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-2 px-3 text-slate-700 tabular-nums">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Prompt */}
            <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Question Statement
              </div>
              <div className="text-slate-900 text-sm sm:text-base font-medium leading-relaxed">
                <FormattedMathText text={question.prompt} />
              </div>
            </div>

            {/* Answer Options or Grid-in */}
            {!isSPR ? (
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                  Answer Options
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {question.options.map((option) => {
                    const isSelected = selectedOption === option.letter;
                    const isCorrectAnswer = question.correctAnswer === option.letter;
                    const isEliminated = eliminatedOptions[option.letter];

                    let containerClass =
                      'bg-white border-slate-200 text-slate-800 hover:border-slate-400 hover:bg-slate-50';

                    if (hasSubmitted) {
                      if (isCorrectAnswer) {
                        containerClass = 'bg-emerald-50/90 border-emerald-400 text-emerald-950';
                      } else if (isSelected && !isCorrectAnswer) {
                        containerClass = 'bg-rose-50/90 border-rose-400 text-rose-950';
                      } else {
                        containerClass = 'bg-white border-slate-200 opacity-60 text-slate-600';
                      }
                    } else if (isSelected) {
                      containerClass = 'bg-[#0f2347]/5 border-[#0f2347] text-[#0f2347] ring-1 ring-[#0f2347]';
                    } else if (isEliminated) {
                      containerClass = 'bg-slate-100 border-slate-200 opacity-50 line-through text-slate-400';
                    }

                    return (
                      <div
                        key={option.letter}
                        onClick={() => {
                          if (!hasSubmitted) {
                            setSelectedOption(option.letter);
                          }
                        }}
                        className={`relative p-4 rounded-lg border transition-all cursor-pointer flex items-start justify-between gap-3 ${containerClass}`}
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <span
                            className={`w-7 h-7 rounded border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                              hasSubmitted
                                ? isCorrectAnswer
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : isSelected
                                  ? 'bg-rose-600 text-white border-rose-600'
                                  : 'bg-slate-100 text-slate-600 border-slate-300'
                                : isSelected
                                ? 'bg-[#0f2347] text-white border-[#0f2347]'
                                : 'bg-slate-100 text-slate-700 border-slate-300'
                            }`}
                          >
                            {option.letter}
                          </span>
                          <span className={`text-sm sm:text-base leading-relaxed ${isEliminated && !hasSubmitted ? 'line-through' : ''}`}>
                            <FormattedMathText text={option.text} />
                          </span>
                        </div>

                        {!hasSubmitted && (
                          <button
                            type="button"
                            onClick={(e) => toggleEliminate(option.letter, e)}
                            className={`p-1 rounded text-xs transition-colors shrink-0 ${
                              isEliminated ? 'text-rose-600 bg-rose-50' : 'text-slate-400 hover:text-slate-600'
                            }`}
                            title="Strike out option"
                          >
                            <Strikethrough className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              // Student Produced Response (Grid-in)
              <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Student-Produced Response (Grid-In)
                </div>
                <p className="text-xs text-slate-600">
                  Enter your exact answer (integer, fraction like 7/24, or decimal like 3.5).
                </p>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    disabled={hasSubmitted}
                    value={studentInput}
                    onChange={(e) => setStudentInput(e.target.value)}
                    placeholder="Enter answer here..."
                    className="w-48 px-3 py-2 text-base font-mono border border-slate-300 rounded focus:outline-hidden focus:ring-2 focus:ring-[#0f2347] disabled:bg-slate-100"
                  />
                  {hasSubmitted && (
                    <span className="text-xs font-semibold text-slate-600 font-mono">
                      Official Answer: {question.correctAnswer}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Action Bar (Submit / Reset / Feedback) */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                {!hasSubmitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedOption && !studentInput}
                    className="px-6 py-2.5 bg-[#0f2347] text-white text-sm font-semibold rounded hover:bg-[#183a73] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-xs"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 border border-slate-300 bg-white text-slate-700 text-xs font-semibold rounded hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Again</span>
                  </button>
                )}

                {hasSubmitted && (
                  <div
                    className={`flex items-center gap-2 text-sm font-bold ${
                      isCurrentCorrect ? 'text-emerald-700' : 'text-rose-700'
                    }`}
                  >
                    {isCurrentCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>Correct! Well done.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span>Incorrect. Review the detailed explanation below.</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Prev / Next question navigation */}
              <div className="flex items-center gap-1.5 no-print">
                {onNavigatePrev && (
                  <button
                    onClick={onNavigatePrev}
                    className="p-2 border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 rounded transition-colors text-xs flex items-center gap-1"
                    title="Previous question"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>
                )}
                {onNavigateNext && (
                  <button
                    onClick={onNavigateNext}
                    className="p-2 border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 rounded transition-colors text-xs flex items-center gap-1"
                    title="Next question"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Deep Explanations Section (Always visible once submitted, or accessible via study mode) */}
            {hasSubmitted && (
              <div className="space-y-5 pt-4 border-t border-slate-200 animate-in fade-in duration-200">
                {/* Summary Box */}
                <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Correct Answer: Option {question.correctAnswer}</span>
                  </div>
                  <div className="text-slate-700 text-sm leading-relaxed">
                    <FormattedMathText text={question.explanationSummary} />
                  </div>
                </div>

                {/* Why EACH Option is Correct or Incorrect (Required feature) */}
                <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Detailed Option Breakdown & Distractor Analysis
                  </h4>
                  <div className="space-y-3">
                    {question.options.map((opt) => (
                      <div
                        key={opt.letter}
                        className={`p-3.5 rounded border text-xs sm:text-sm ${
                          opt.letter === question.correctAnswer
                            ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="font-bold flex items-center gap-1.5 mb-1">
                          <span className="w-5 h-5 rounded bg-white border flex items-center justify-center text-xs font-black">
                            {opt.letter}
                          </span>
                          <span>{opt.letter === question.correctAnswer ? 'Why Correct:' : 'Why Incorrect:'}</span>
                        </div>
                        <div className="leading-relaxed pl-6">
                          <FormattedMathText text={opt.explanation} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Relevant Formula or Rule */}
                {question.relevantConceptOrFormula && (
                  <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 shadow-xs text-xs sm:text-sm text-sky-950">
                    <div className="font-bold text-sky-900 mb-1 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-sky-700" />
                      <span>Key Concept / Strategy Formula</span>
                    </div>
                    <div className="text-sky-950 bg-white/80 p-2.5 rounded border border-sky-100">
                      <FormattedMathText text={question.relevantConceptOrFormula} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 no-print">
          <div className="flex items-center gap-2">
            <span>ISAT Question ID: <strong className="font-mono text-slate-800">{question.id}</strong></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
            >
              Close Solver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
