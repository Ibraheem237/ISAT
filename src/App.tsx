/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './views/HomeView';
import { QuestionBankView } from './views/QuestionBankView';
import { PracticeTestView } from './views/PracticeTestView';
import { DesmosGuideView } from './views/DesmosGuideView';
import { FormulaSheetsView } from './views/FormulaSheetsView';
import { DashboardView } from './views/DashboardView';
import { DesmosCalculatorModal } from './components/DesmosCalculatorModal';
import { FormulaSheetModal } from './components/FormulaSheetModal';
import { QuestionDetailModal } from './components/QuestionDetailModal';
import { PrintableWorksheetModal } from './components/PrintableWorksheetModal';
import { Question } from './types';
import {
  getBookmarks,
  toggleBookmark,
  getSolvedRecords,
  recordQuestionAnswer,
  getQuestionViewCount,
  incrementQuestionView,
  getGlobalPlatformViews,
  incrementGlobalPlatformViews,
  getTestResults,
} from './utils/analytics';
import { ALL_QUESTIONS } from './data/questionDatabase';

type Tab = 'home' | 'question-bank' | 'practice-tests' | 'desmos-guide' | 'formula-sheets' | 'dashboard';

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('home');
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [isDesmosOpen, setIsDesmosOpen] = useState<boolean>(false);
  const [desmosEquation, setDesmosEquation] = useState<string | undefined>(undefined);
  const [isFormulaSheetOpen, setIsFormulaSheetOpen] = useState<boolean>(false);
  const [isPrintWorksheetOpen, setIsPrintWorksheetOpen] = useState<boolean>(false);
  const [printQuestions, setPrintQuestions] = useState<Question[]>(ALL_QUESTIONS.slice(0, 10));
  const [printSubject, setPrintSubject] = useState<string | undefined>(undefined);

  // User persistent state
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [solvedRecords, setSolvedRecords] = useState<Record<string, any>>({});
  const [globalPlatformViews, setGlobalPlatformViews] = useState<number>(184520);
  const [testResults, setTestResults] = useState<any[]>([]);

  useEffect(() => {
    setBookmarkedIds(getBookmarks());
    setSolvedRecords(getSolvedRecords());
    setTestResults(getTestResults());
    const views = incrementGlobalPlatformViews();
    setGlobalPlatformViews(views);
  }, []);

  const handleToggleBookmark = (id: string) => {
    const updated = toggleBookmark(id);
    setBookmarkedIds(updated);
  };

  const handleSaveAnswer = (
    questionId: string,
    selected: string,
    isCorrect: boolean,
    timeSeconds: number
  ) => {
    recordQuestionAnswer(questionId, selected, isCorrect, timeSeconds);
    setSolvedRecords(getSolvedRecords());
  };

  const handleOpenQuestion = (question: Question) => {
    incrementQuestionView(question.id);
    setActiveQuestion(question);
  };

  const handleOpenDesmosWithEquation = (eq?: string) => {
    setDesmosEquation(eq);
    setIsDesmosOpen(true);
  };

  const handleOpenPrintWorksheet = (questions: Question[], subject?: string) => {
    setPrintQuestions(questions);
    setPrintSubject(subject);
    setIsPrintWorksheetOpen(true);
  };

  const handleQuickPractice = () => {
    // Jump to random unsolved question or open question bank
    const unsolved = ALL_QUESTIONS.filter((q) => !solvedRecords[q.id]);
    const target = unsolved.length > 0 ? unsolved[Math.floor(Math.random() * unsolved.length)] : ALL_QUESTIONS[0];
    handleOpenQuestion(target);
  };

  // Find next and prev for modal navigation
  const currentQuestionIdx = activeQuestion
    ? ALL_QUESTIONS.findIndex((q) => q.id === activeQuestion.id)
    : -1;

  const handleNavigateNext = () => {
    if (currentQuestionIdx >= 0 && currentQuestionIdx < ALL_QUESTIONS.length - 1) {
      handleOpenQuestion(ALL_QUESTIONS[currentQuestionIdx + 1]);
    }
  };

  const handleNavigatePrev = () => {
    if (currentQuestionIdx > 0) {
      handleOpenQuestion(ALL_QUESTIONS[currentQuestionIdx - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans">
      {/* Top Bar Contract Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onQuickPractice={handleQuickPractice}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentTab === 'home' && (
          <HomeView
            onNavigateToTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenQuestion={handleOpenQuestion}
            globalPlatformViews={globalPlatformViews}
          />
        )}

        {currentTab === 'question-bank' && (
          <QuestionBankView
            onOpenQuestion={handleOpenQuestion}
            solvedRecords={solvedRecords}
            bookmarkedIds={bookmarkedIds}
            onToggleBookmark={handleToggleBookmark}
            getQuestionViews={getQuestionViewCount}
            onOpenPrintWorksheet={handleOpenPrintWorksheet}
          />
        )}

        {currentTab === 'practice-tests' && (
          <PracticeTestView
            onOpenDesmos={() => setIsDesmosOpen(true)}
            onOpenFormulas={() => setIsFormulaSheetOpen(true)}
          />
        )}

        {currentTab === 'desmos-guide' && (
          <DesmosGuideView
            onOpenDesmosWithEquation={handleOpenDesmosWithEquation}
          />
        )}

        {currentTab === 'formula-sheets' && <FormulaSheetsView />}

        {currentTab === 'dashboard' && (
          <DashboardView
            solvedRecords={solvedRecords}
            testResults={testResults}
            bookmarkedIds={bookmarkedIds}
            onOpenQuestion={handleOpenQuestion}
            onNavigateToTab={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            globalPlatformViews={globalPlatformViews}
          />
        )}
      </main>

      {/* Footer (Quiet anti-slop footer) */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 font-display">ISAT</span>
            <span>·</span>
            <span>Your Complete Digital SAT Preparation Platform</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setCurrentTab('question-bank')}
              className="hover:text-slate-900 transition-colors"
            >
              Question Bank
            </button>
            <button
              onClick={() => setCurrentTab('practice-tests')}
              className="hover:text-slate-900 transition-colors"
            >
              Practice Tests
            </button>
            <button
              onClick={() => setCurrentTab('desmos-guide')}
              className="hover:text-slate-900 transition-colors"
            >
              Desmos Guide
            </button>
            <button
              onClick={() => setCurrentTab('formula-sheets')}
              className="hover:text-slate-900 transition-colors"
            >
              Formula Sheets
            </button>
          </div>

          <div className="text-slate-400">
            Independent preparation platform. SAT® is a registered trademark of the College Board.
          </div>
        </div>
      </footer>

      {/* Global Modals */}
      <DesmosCalculatorModal
        isOpen={isDesmosOpen}
        onClose={() => setIsDesmosOpen(false)}
        initialEquation={desmosEquation}
      />

      <FormulaSheetModal
        isOpen={isFormulaSheetOpen}
        onClose={() => setIsFormulaSheetOpen(false)}
      />

      <QuestionDetailModal
        question={activeQuestion}
        isOpen={!!activeQuestion}
        onClose={() => setActiveQuestion(null)}
        solvedRecord={activeQuestion ? solvedRecords[activeQuestion.id] : undefined}
        isBookmarked={activeQuestion ? bookmarkedIds.includes(activeQuestion.id) : false}
        onToggleBookmark={handleToggleBookmark}
        onSaveAnswer={handleSaveAnswer}
        onOpenDesmos={() => setIsDesmosOpen(true)}
        onOpenFormulas={() => setIsFormulaSheetOpen(true)}
        onNavigateNext={handleNavigateNext}
        onNavigatePrev={handleNavigatePrev}
        viewsCount={
          activeQuestion
            ? getQuestionViewCount(activeQuestion.id, activeQuestion.viewsCount)
            : 0
        }
      />

      <PrintableWorksheetModal
        isOpen={isPrintWorksheetOpen}
        onClose={() => setIsPrintWorksheetOpen(false)}
        questions={printQuestions}
        currentSubject={printSubject}
      />
    </div>
  );
}
