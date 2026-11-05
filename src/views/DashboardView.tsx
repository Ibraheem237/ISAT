import React, { useState } from 'react';
import {
  Target,
  Award,
  CheckCircle2,
  Clock,
  Bookmark,
  TrendingUp,
  BarChart2,
  Play,
  RotateCcw,
  Eye,
  Sliders,
} from 'lucide-react';
import { Question } from '../types';
import { SolvedRecord, PracticeTestResult, getTargetScore, setTargetScore, calculateTopicMastery } from '../utils/analytics';
import { ALL_QUESTIONS } from '../data/questionDatabase';
import { FormattedMathText } from '../components/MathRenderer';

interface DashboardViewProps {
  solvedRecords: Record<string, SolvedRecord>;
  testResults: PracticeTestResult[];
  bookmarkedIds: string[];
  onOpenQuestion: (question: Question) => void;
  onNavigateToTab: (tab: 'question-bank' | 'practice-tests' | 'desmos-guide') => void;
  globalPlatformViews: number;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  solvedRecords,
  testResults,
  bookmarkedIds,
  onOpenQuestion,
  onNavigateToTab,
  globalPlatformViews,
}) => {
  const [targetScore, setTargetScoreState] = useState<number>(getTargetScore());
  const [isEditingTarget, setIsEditingTarget] = useState<boolean>(false);
  const [tempTarget, setTempTarget] = useState<number>(targetScore);

  const solvedList = Object.values(solvedRecords);
  const totalAttempted = solvedList.length;
  const correctCount = solvedList.filter((s) => s.isCorrect).length;
  const accuracyRate = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;
  const totalMinutesStudied = Math.round(
    solvedList.reduce((acc, s) => acc + s.timeSpentSeconds, 0) / 60 +
      testResults.reduce((acc, t) => acc + t.timeSpentMinutes, 0)
  );

  const topicMastery = calculateTopicMastery(ALL_QUESTIONS, solvedRecords);

  const latestTest = testResults[0];

  const handleSaveTarget = () => {
    setTargetScore(tempTarget);
    setTargetScoreState(tempTarget);
    setIsEditingTarget(false);
  };

  const bookmarkedQuestions = bookmarkedIds
    .map((id) => ALL_QUESTIONS.find((q) => q.id === id))
    .filter(Boolean) as Question[];

  return (
    <div className="space-y-6">
      {/* Top Banner / Goal Tracker */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f2347] mb-1">
            <Target className="w-4 h-4 text-sky-700" />
            <span>Digital SAT Performance Dashboard</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
            Welcome back, Student
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Track your domain mastery, recent diagnostic test attempts, and bookmarked questions.
          </p>
        </div>

        {/* Target Score Card */}
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg flex items-center gap-4 shrink-0">
          <div>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Target SAT Score
            </span>
            {isEditingTarget ? (
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="number"
                  min="400"
                  max="1600"
                  step="10"
                  value={tempTarget}
                  onChange={(e) => setTempTarget(Number(e.target.value))}
                  className="w-24 px-2 py-1 text-sm font-mono border border-slate-300 rounded font-bold"
                />
                <button
                  onClick={handleSaveTarget}
                  className="px-2.5 py-1 text-xs font-semibold bg-[#0f2347] text-white rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black font-mono text-[#0f2347]">{targetScore}</span>
                <span className="text-xs text-slate-400">/ 1600</span>
                <button
                  onClick={() => setIsEditingTarget(true)}
                  className="text-xs text-sky-700 hover:underline ml-2"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
          <div className="w-10 h-10 rounded-full bg-[#0f2347]/10 text-[#0f2347] flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 4 Core Metrics Strip (Tabular figures, zero-pill anti-slop) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Questions Attempted</span>
            <CheckCircle2 className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
            {totalAttempted.toLocaleString()}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Bank contains {ALL_QUESTIONS.length.toLocaleString()} questions
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Overall Accuracy</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-700 tabular-nums">
            {accuracyRate}%
          </div>
          <div className="text-xs text-slate-500 mt-1">
            {correctCount} correct of {totalAttempted} answered
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Total Study Time</span>
            <Clock className="w-4 h-4 text-sky-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
            {totalMinutesStudied} <span className="text-sm font-sans font-normal text-slate-500">mins</span>
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Across practice sets & mock exams
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Platform Views</span>
            <Eye className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#0f2347] tabular-nums">
            {globalPlatformViews.toLocaleString()}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Live views across all question items
          </div>
        </div>
      </div>

      {/* Domain Mastery Grid & Recent Test History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Domain Mastery Progress Bars */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div>
              <h2 className="text-base font-bold font-display text-slate-900">
                SAT Domain Mastery
              </h2>
              <p className="text-xs text-slate-500">Mastery calculation across major test categories</p>
            </div>
            <button
              onClick={() => onNavigateToTab('question-bank')}
              className="text-xs font-semibold text-[#0f2347] hover:underline"
            >
              Practice Weak Areas &rarr;
            </button>
          </div>

          <div className="space-y-4">
            {topicMastery.map((item) => (
              <div key={item.topic} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-800">{item.topic}</span>
                  <span className="font-mono text-slate-600 tabular-nums">
                    {item.attempted > 0 ? `${item.percent}% (${item.correct}/${item.attempted})` : 'Not tested yet'}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      item.percent >= 80
                        ? 'bg-emerald-600'
                        : item.percent >= 60
                        ? 'bg-sky-600'
                        : item.percent > 0
                        ? 'bg-amber-500'
                        : 'bg-slate-300'
                    }`}
                    style={{ width: `${Math.max(item.percent, item.attempted > 0 ? 5 : 0)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Diagnostic Exams */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h2 className="text-base font-bold font-display text-slate-900">
                Practice Test Scores
              </h2>
              <button
                onClick={() => onNavigateToTab('practice-tests')}
                className="text-xs font-semibold text-[#0f2347] hover:underline"
              >
                All Exams &rarr;
              </button>
            </div>

            {testResults.length > 0 ? (
              <div className="space-y-3">
                {testResults.slice(0, 3).map((test, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-50 rounded border border-slate-200 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800">{test.testTitle}</span>
                      <span className="font-mono text-xs text-slate-400">
                        {new Date(test.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xl font-bold font-mono text-[#0f2347]">
                        {test.totalScore} <span className="text-xs text-slate-400 font-sans">/ 1600</span>
                      </span>
                      <div className="text-xs text-slate-600 font-mono">
                        RW {test.scoreRw} · Math {test.scoreMath}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-slate-400 text-xs">
                No completed exams yet. Take your first diagnostic test to calibrate your score.
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigateToTab('practice-tests')}
            className="mt-4 w-full py-2.5 text-xs font-semibold text-white bg-[#0f2347] hover:bg-[#1a386b] rounded transition-colors flex items-center justify-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Launch New Practice Exam</span>
          </button>
        </div>
      </div>

      {/* Bookmarked Questions Quick-List */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
            <h2 className="text-base font-bold font-display text-slate-900">
              Saved & Bookmarked Questions ({bookmarkedQuestions.length})
            </h2>
          </div>
          <button
            onClick={() => onNavigateToTab('question-bank')}
            className="text-xs font-semibold text-[#0f2347] hover:underline"
          >
            Open in Question Bank &rarr;
          </button>
        </div>

        {bookmarkedQuestions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {bookmarkedQuestions.slice(0, 6).map((q) => (
              <div
                key={q.id}
                onClick={() => onOpenQuestion(q)}
                className="p-3.5 rounded border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-white transition-all cursor-pointer flex items-center justify-between text-xs"
              >
                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <span className="font-mono font-semibold text-[#0f2347]">{q.id}</span>
                    <span aria-hidden="true">·</span>
                    <span>{q.subtopic}</span>
                  </div>
                  <div className="font-medium text-slate-900 line-clamp-1">
                    <FormattedMathText text={q.prompt} />
                  </div>
                </div>
                <span className="text-[#0f2347] font-semibold text-xs ml-3 shrink-0">Solve &rarr;</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500 py-3">
            No bookmarked questions yet. Click the bookmark ribbon on any question card in the bank to save it for quick review.
          </p>
        )}
      </div>
    </div>
  );
};
