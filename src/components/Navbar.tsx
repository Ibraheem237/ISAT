import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentTab: 'home' | 'question-bank' | 'practice-tests' | 'desmos-guide' | 'formula-sheets' | 'dashboard';
  setCurrentTab: (tab: 'home' | 'question-bank' | 'practice-tests' | 'desmos-guide' | 'formula-sheets' | 'dashboard') => void;
  onQuickPractice: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onQuickPractice }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => setCurrentTab('home')}
          className="text-xl font-bold tracking-tight text-[#0f2347] font-display whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded bg-[#0f2347] text-white flex items-center justify-center text-sm font-black tracking-wider">
            I
          </span>
          <span>ISAT</span>
        </button>

        {/* Zone 2: 5 Clean Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => setCurrentTab('question-bank')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentTab === 'question-bank'
                ? 'border-[#0f2347] text-[#0f2347] font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Question Bank
          </button>
          <button
            onClick={() => setCurrentTab('practice-tests')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentTab === 'practice-tests'
                ? 'border-[#0f2347] text-[#0f2347] font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Practice Tests
          </button>
          <button
            onClick={() => setCurrentTab('desmos-guide')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentTab === 'desmos-guide'
                ? 'border-[#0f2347] text-[#0f2347] font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Desmos Guide
          </button>
          <button
            onClick={() => setCurrentTab('formula-sheets')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentTab === 'formula-sheets'
                ? 'border-[#0f2347] text-[#0f2347] font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Formula Sheets
          </button>
          <button
            onClick={() => setCurrentTab('dashboard')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
              currentTab === 'dashboard'
                ? 'border-[#0f2347] text-[#0f2347] font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Dashboard
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onQuickPractice}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0f2347] rounded hover:bg-[#1a386b] transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Start Practice</span>
          </button>
        </div>
      </div>

      {/* Mobile nav strip */}
      <div className="md:hidden flex items-center gap-1 overflow-x-auto px-4 py-2 border-t border-slate-100 bg-slate-50 text-xs text-slate-600 scrollbar-none">
        <button
          onClick={() => setCurrentTab('home')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${currentTab === 'home' ? 'bg-[#0f2347] text-white font-medium' : ''}`}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentTab('question-bank')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${currentTab === 'question-bank' ? 'bg-[#0f2347] text-white font-medium' : ''}`}
        >
          Questions
        </button>
        <button
          onClick={() => setCurrentTab('practice-tests')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${currentTab === 'practice-tests' ? 'bg-[#0f2347] text-white font-medium' : ''}`}
        >
          Tests
        </button>
        <button
          onClick={() => setCurrentTab('desmos-guide')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${currentTab === 'desmos-guide' ? 'bg-[#0f2347] text-white font-medium' : ''}`}
        >
          Desmos
        </button>
        <button
          onClick={() => setCurrentTab('formula-sheets')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${currentTab === 'formula-sheets' ? 'bg-[#0f2347] text-white font-medium' : ''}`}
        >
          Formulas
        </button>
        <button
          onClick={() => setCurrentTab('dashboard')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${currentTab === 'dashboard' ? 'bg-[#0f2347] text-white font-medium' : ''}`}
        >
          Dashboard
        </button>
      </div>
    </header>
  );
};
