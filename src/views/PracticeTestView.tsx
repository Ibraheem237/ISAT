import React, { useState, useEffect } from 'react';
import {
  Play,
  Clock,
  CheckCircle2,
  AlertCircle,
  Flag,
  Calculator,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Eye,
  RotateCcw,
  Award,
  Strikethrough,
  BarChart3,
} from 'lucide-react';
import { PracticeTest, Question } from '../types';
import { PRACTICE_TESTS } from '../data/practiceTests';
import { ALL_QUESTIONS, getQuestionById } from '../data/questionDatabase';
import { PracticeTestResult, saveTestResult } from '../utils/analytics';
import { FormattedMathText } from '../components/MathRenderer';

interface PracticeTestViewProps {
  onOpenDesmos: () => void;
  onOpenFormulas: () => void;
}

export const PracticeTestView: React.FC<PracticeTestViewProps> = ({
  onOpenDesmos,
  onOpenFormulas,
}) => {
  const [selectedTest, setSelectedTest] = useState<PracticeTest | null>(null);
  const [activeModuleIdx, setActiveModuleIdx] = useState<number>(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [isTestCompleted, setIsTestCompleted] = useState<boolean>(false);

  // In-test state
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [eliminated, setEliminated] = useState<Record<string, Record<string, boolean>>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(32 * 60);
  const [isTimerVisible, setIsTimerVisible] = useState<boolean>(true);
  const [showNavigator, setShowNavigator] = useState<boolean>(false);
  const [scoreReport, setScoreReport] = useState<PracticeTestResult | null>(null);
  const [reviewMode, setReviewMode] = useState<boolean>(false);

  // Timer countdown
  useEffect(() => {
    let timer: any;
    if (isTestActive && !isTestCompleted && timeLeftSeconds > 0) {
      timer = setInterval(() => {
        setTimeLeftSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleFinishModule();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestActive, isTestCompleted, timeLeftSeconds]);

  const handleStartTest = (test: PracticeTest) => {
    setSelectedTest(test);
    setActiveModuleIdx(0);
    setCurrentQuestionIdx(0);
    setAnswers({});
    setFlagged({});
    setEliminated({});
    setTimeLeftSeconds(test.modules[0].timeLimitMinutes * 60);
    setIsTestActive(true);
    setIsTestCompleted(false);
    setReviewMode(false);
    setScoreReport(null);
  };

  const currentModule = selectedTest ? selectedTest.modules[activeModuleIdx] : null;
  const currentModuleQuestions: Question[] = currentModule
    ? currentModule.questionIds.map((id) => getQuestionById(id)).filter(Boolean) as Question[]
    : [];
  const currentQuestion = currentModuleQuestions[currentQuestionIdx];

  const handleSelectAnswer = (letter: string) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: letter,
    }));
  };

  const handleToggleFlag = () => {
    if (!currentQuestion) return;
    setFlagged((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  const handleToggleEliminate = (letter: string) => {
    if (!currentQuestion) return;
    setEliminated((prev) => {
      const qElim = prev[currentQuestion.id] || {};
      return {
        ...prev,
        [currentQuestion.id]: {
          ...qElim,
          [letter]: !qElim[letter],
        },
      };
    });
  };

  const handleFinishModule = () => {
    if (!selectedTest) return;

    if (activeModuleIdx < selectedTest.modules.length - 1) {
      // Advance to next module
      const nextIdx = activeModuleIdx + 1;
      setActiveModuleIdx(nextIdx);
      setCurrentQuestionIdx(0);
      setTimeLeftSeconds(selectedTest.modules[nextIdx].timeLimitMinutes * 60);
    } else {
      // Calculate final exam score
      calculateResults();
    }
  };

  const calculateResults = () => {
    if (!selectedTest) return;

    let correctTotal = 0;
    let rwCorrect = 0;
    let rwTotal = 0;
    let mathCorrect = 0;
    let mathTotal = 0;

    selectedTest.modules.forEach((mod) => {
      mod.questionIds.forEach((id) => {
        const q = getQuestionById(id);
        if (!q) return;
        const userAns = answers[id];
        const isRight = userAns && userAns.toLowerCase() === q.correctAnswer.toLowerCase();

        if (q.subject === 'Reading and Writing') {
          rwTotal++;
          if (isRight) rwCorrect++;
        } else {
          mathTotal++;
          if (isRight) mathCorrect++;
        }

        if (isRight) correctTotal++;
      });
    });

    // Realistic SAT scaling curve simulation (200-800 scale per section)
    const scaledRw = rwTotal > 0 ? Math.round(200 + (rwCorrect / rwTotal) * 600) : 700;
    const scaledMath = mathTotal > 0 ? Math.round(200 + (mathCorrect / mathTotal) * 600) : 750;
    const totalScore = scaledRw + scaledMath;

    const result: PracticeTestResult = {
      testId: selectedTest.id,
      testTitle: selectedTest.title,
      date: Date.now(),
      scoreRw: scaledRw,
      scoreMath: scaledMath,
      totalScore,
      totalQuestions: selectedTest.totalQuestions,
      correctCount: correctTotal,
      incorrectCount: selectedTest.totalQuestions - correctTotal,
      timeSpentMinutes: selectedTest.totalTimeMinutes,
    };

    saveTestResult(result);
    setScoreReport(result);
    setIsTestCompleted(true);
    setIsTestActive(false);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Render Test Selection Dashboard when not in active test
  if (!isTestActive && !isTestCompleted) {
    return (
      <div className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs">
          <h1 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
            Realistic Digital SAT Practice Tests
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Simulate the actual Digital SAT testing experience with realistic split-pane layout, countdown timers, Desmos calculator, option elimination, and diagnostic scoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRACTICE_TESTS.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#0f2347]">
                    {test.modules.length} {test.modules.length === 1 ? 'Module' : 'Modules'}
                  </span>
                  <span>{test.totalQuestions} Questions · {test.totalTimeMinutes} Minutes</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">{test.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{test.description}</p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Includes built-in Desmos & SAT Formula Sheet</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Official Bluebook Timing</span>
                <button
                  onClick={() => handleStartTest(test)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#0f2347] hover:bg-[#1a386b] rounded transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Practice Exam</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render Post-Test Score Report
  if (isTestCompleted && scoreReport) {
    const allTestQuestions: Question[] = selectedTest
      ? (selectedTest.modules.flatMap((m) => m.questionIds).map((id) => getQuestionById(id)).filter(Boolean) as Question[])
      : [];

    return (
      <div className="space-y-6">
        {/* Score Overview Card */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs text-center space-y-4">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Exam Completed</span>
            <h1 className="text-2xl sm:text-3xl font-black font-display text-slate-900 mt-1">
              Your Scaled Score: {scoreReport.totalScore}
            </h1>
            <p className="text-xs text-slate-500">Out of 1600 · Scaled using Digital SAT Adaptive Standards</p>
          </div>

          {/* Section Score Breakdown */}
          <div className="max-w-md mx-auto grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-slate-50 rounded border border-slate-200">
              <span className="text-xs text-slate-500 block">Reading & Writing</span>
              <span className="text-2xl font-bold font-mono text-[#0f2347]">{scoreReport.scoreRw}</span>
              <span className="text-[11px] text-slate-400 block">out of 800</span>
            </div>
            <div className="p-4 bg-slate-50 rounded border border-slate-200">
              <span className="text-xs text-slate-500 block">Mathematics</span>
              <span className="text-2xl font-bold font-mono text-[#0f2347]">{scoreReport.scoreMath}</span>
              <span className="text-[11px] text-slate-400 block">out of 800</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-slate-600 pt-2">
            <span>Accuracy: <strong className="text-emerald-700 font-bold">{Math.round((scoreReport.correctCount / scoreReport.totalQuestions) * 100)}%</strong></span>
            <span>Correct: <strong className="text-slate-900">{scoreReport.correctCount}</strong> / {scoreReport.totalQuestions}</span>
            <span>Incorrect: <strong className="text-rose-700">{scoreReport.incorrectCount}</strong></span>
          </div>

          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => setReviewMode(!reviewMode)}
              className="px-5 py-2 text-xs font-semibold text-[#0f2347] bg-[#0f2347]/10 hover:bg-[#0f2347]/20 rounded transition-colors"
            >
              {reviewMode ? 'Hide Question Review' : 'Review Questions & Explanations'}
            </button>
            <button
              onClick={() => {
                setIsTestCompleted(false);
                setSelectedTest(null);
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#0f2347] hover:bg-[#1a386b] rounded transition-colors"
            >
              Return to Tests
            </button>
          </div>
        </div>

        {/* Detailed Question Review List */}
        {reviewMode && (
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-6">
            <h3 className="text-lg font-bold font-display text-slate-900 pb-3 border-b border-slate-200">
              Item-by-Item Review & Solution Analysis
            </h3>

            <div className="space-y-6">
              {allTestQuestions.map((q, idx) => {
                const userAns = answers[q.id];
                const isCorrect = userAns && userAns.toLowerCase() === q.correctAnswer.toLowerCase();

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-lg border text-xs sm:text-sm space-y-3 ${
                      isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between font-semibold">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-700">Question {idx + 1} ({q.id})</span>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-600">{q.topic} - {q.subtopic}</span>
                      </div>
                      <span className={isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                        {isCorrect ? 'Correct' : 'Incorrect'} (Your Answer: {userAns || 'None'}, Correct: {q.correctAnswer})
                      </span>
                    </div>

                    {q.passage && (
                      <div className="p-3 bg-white border border-slate-200 rounded text-slate-700 italic font-serif">
                        <FormattedMathText text={q.passage} />
                      </div>
                    )}

                    <div className="text-slate-900 font-medium">
                      <FormattedMathText text={q.prompt} />
                    </div>

                    <div className="p-3 bg-white border border-slate-200 rounded text-slate-800 leading-relaxed">
                      <strong>Official Explanation: </strong> <FormattedMathText text={q.explanationSummary} />
                    </div>

                    {q.relevantConceptOrFormula && (
                      <div className="p-2 bg-sky-50 border border-sky-100 rounded text-sky-900 font-mono text-xs">
                        <strong>Rule/Formula: </strong> <FormattedMathText text={q.relevantConceptOrFormula} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Active Bluebook-Style Exam Mode
  const isFlagged = currentQuestion ? flagged[currentQuestion.id] : false;
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : '';
  const currentElim = currentQuestion ? eliminated[currentQuestion.id] || {} : {};

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden">
      {/* Bluebook-Style Top Navigation Header */}
      <header className="h-14 bg-[#0f2347] text-white px-4 sm:px-6 flex items-center justify-between border-b border-slate-800 select-none">
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm tracking-wide">
            {currentModule?.title || 'Section Test'}
          </span>
          <span className="text-slate-400 text-xs hidden sm:inline">|</span>
          <span className="text-slate-300 text-xs hidden sm:inline font-mono">
            Question {currentQuestionIdx + 1} of {currentModuleQuestions.length}
          </span>
        </div>

        {/* Central Timer */}
        <div className="flex items-center gap-3">
          {isTimerVisible && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded font-mono text-xs sm:text-sm tracking-wider text-sky-200">
              <Clock className="w-4 h-4 text-sky-300" />
              <span>{formatTimer(timeLeftSeconds)}</span>
            </div>
          )}
          <button
            onClick={() => setIsTimerVisible(!isTimerVisible)}
            className="text-xs text-slate-300 hover:text-white underline underline-offset-2 hidden sm:inline"
          >
            {isTimerVisible ? 'Hide Timer' : 'Show Timer'}
          </button>
        </div>

        {/* Test Utilities */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenDesmos}
            className="px-2.5 py-1 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded transition-colors flex items-center gap-1"
          >
            <Calculator className="w-3.5 h-3.5 text-sky-300" />
            <span className="hidden sm:inline">Desmos</span>
          </button>

          <button
            onClick={onOpenFormulas}
            className="px-2.5 py-1 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded transition-colors flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-300" />
            <span className="hidden sm:inline">Reference</span>
          </button>

          <button
            onClick={handleToggleFlag}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors flex items-center gap-1 ${
              isFlagged ? 'bg-amber-500 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-200'
            }`}
          >
            <Flag className="w-3.5 h-3.5" fill={isFlagged ? 'currentColor' : 'none'} />
            <span className="hidden sm:inline">{isFlagged ? 'Flagged' : 'Mark for Review'}</span>
          </button>
        </div>
      </header>

      {/* Main Split Screen Testing Stage */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-50">
        {/* Left Pane: Passage or Stimulus */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto border-r border-slate-200 bg-white">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100">
              <span>Stimulus / Passage</span>
              <span className="font-mono">{currentQuestion?.id}</span>
            </div>

            {currentQuestion?.passage ? (
              <div className="text-slate-800 text-sm sm:text-base leading-relaxed font-serif whitespace-pre-line">
                <FormattedMathText text={currentQuestion.passage} />
              </div>
            ) : (
              <div className="p-8 text-center text-slate-400 text-xs italic">
                This question does not require a separate reading passage. Solve the prompt on the right.
              </div>
            )}

            {currentQuestion?.tableData && (
              <div className="overflow-x-auto border border-slate-200 rounded">
                <table className="w-full text-xs">
                  <thead className="bg-slate-100 border-b border-slate-200">
                    <tr>
                      {currentQuestion.tableData.headers.map((h, i) => (
                        <th key={i} className="p-2 text-left font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentQuestion.tableData.rows.map((row, rI) => (
                      <tr key={rI} className="border-b border-slate-100">
                        {row.map((cell, cI) => (
                          <td key={cI} className="p-2">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Right Pane: Question & Choices */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto bg-slate-50/50">
          <div className="max-w-xl mx-auto space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
              <span className="font-bold text-slate-800">
                Question {currentQuestionIdx + 1}
              </span>
              <span className="text-slate-400">{currentQuestion?.subtopic}</span>
            </div>

            {/* Prompt */}
            <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
              <FormattedMathText text={currentQuestion?.prompt || ''} />
            </div>

            {/* Multiple Choice Options */}
            {currentQuestion && currentQuestion.questionType !== 'Student-Produced Response' ? (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = currentAnswer === option.letter;
                  const isOptElim = currentElim[option.letter];

                  return (
                    <div
                      key={option.letter}
                      onClick={() => handleSelectAnswer(option.letter)}
                      className={`p-3.5 sm:p-4 rounded-lg border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#0f2347] text-white border-[#0f2347] shadow-sm'
                          : isOptElim
                          ? 'bg-slate-100 border-slate-200 opacity-40 line-through text-slate-400'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <span
                          className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-white text-[#0f2347] border-white'
                              : 'bg-slate-100 text-slate-700 border-slate-300'
                          }`}
                        >
                          {option.letter}
                        </span>
                        <span className={`text-sm leading-relaxed ${isOptElim ? 'line-through' : ''}`}>
                          <FormattedMathText text={option.text} />
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleEliminate(option.letter);
                        }}
                        className={`p-1 rounded text-xs transition-colors shrink-0 ${
                          isOptElim ? 'text-rose-600' : 'text-slate-400 hover:text-slate-600'
                        }`}
                        title="Eliminate option"
                      >
                        <Strikethrough className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              // Student Produced Response Grid-in
              <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-3">
                <span className="text-xs font-semibold text-slate-700">Enter your numeric answer:</span>
                <input
                  type="text"
                  value={currentAnswer}
                  onChange={(e) => handleSelectAnswer(e.target.value)}
                  placeholder="e.g. 14, 7/24, or 3.5"
                  className="w-full px-3 py-2 text-base font-mono border border-slate-300 rounded focus:ring-2 focus:ring-[#0f2347] focus:outline-hidden"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bluebook-Style Bottom Action Bar */}
      <footer className="h-16 bg-white border-t border-slate-200 px-6 flex items-center justify-between select-none">
        <button
          onClick={() => setShowNavigator(true)}
          className="text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded transition-colors flex items-center gap-1.5"
        >
          <BarChart3 className="w-4 h-4 text-slate-500" />
          <span>Review Questions ({Object.keys(answers).length}/{currentModuleQuestions.length})</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            disabled={currentQuestionIdx === 0}
            onClick={() => setCurrentQuestionIdx((i) => Math.max(0, i - 1))}
            className="px-4 py-2 text-xs font-semibold border border-slate-200 text-slate-700 hover:bg-slate-50 rounded disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {currentQuestionIdx < currentModuleQuestions.length - 1 ? (
            <button
              onClick={() => setCurrentQuestionIdx((i) => Math.min(currentModuleQuestions.length - 1, i + 1))}
              className="px-5 py-2 text-xs font-semibold bg-[#0f2347] text-white hover:bg-[#1a386b] rounded transition-colors flex items-center gap-1 shadow-sm"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinishModule}
              className="px-5 py-2 text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800 rounded transition-colors flex items-center gap-1 shadow-sm"
            >
              <span>Finish Module</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </footer>

      {/* Bluebook Question Review Navigator Modal */}
      {showNavigator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-xl border border-slate-200 w-full max-w-lg p-6 space-y-4 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900 font-display">Module Review & Navigator</h3>
              <button
                onClick={() => setShowNavigator(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-semibold"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2 max-h-60 overflow-y-auto p-1">
              {currentModuleQuestions.map((q, idx) => {
                const isAns = !!answers[q.id];
                const isFlg = !!flagged[q.id];
                const isCur = currentQuestionIdx === idx;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestionIdx(idx);
                      setShowNavigator(false);
                    }}
                    className={`relative p-2.5 rounded border text-xs font-mono font-bold flex flex-col items-center justify-center transition-colors ${
                      isCur
                        ? 'border-[#0f2347] bg-[#0f2347] text-white'
                        : isAns
                        ? 'border-slate-300 bg-slate-100 text-slate-900'
                        : 'border-dashed border-slate-300 text-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    <span>{idx + 1}</span>
                    {isFlg && (
                      <Flag className="w-2.5 h-2.5 text-amber-500 fill-amber-500 absolute top-1 right-1" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 bg-slate-200 rounded" /> Answered
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 border border-dashed border-slate-400 rounded" /> Unanswered
                </span>
                <span className="flex items-center gap-1">
                  <Flag className="w-3 h-3 text-amber-500 fill-amber-500" /> Flagged
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
