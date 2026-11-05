import React from 'react';
import {
  BookOpen,
  Calculator,
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Eye,
  FileText,
  Clock,
  Sparkles,
  BarChart2,
  ShieldCheck,
} from 'lucide-react';
import { CORE_TOPICS, CURATED_QUESTIONS, ALL_QUESTIONS } from '../data/questionDatabase';
import { Question } from '../types';
import { FormattedMathText } from '../components/MathRenderer';

interface HomeViewProps {
  onNavigateToTab: (tab: 'question-bank' | 'practice-tests' | 'desmos-guide' | 'formula-sheets' | 'dashboard') => void;
  onOpenQuestion: (question: Question) => void;
  globalPlatformViews: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateToTab,
  onOpenQuestion,
  globalPlatformViews,
}) => {
  const rwCategories = CORE_TOPICS.filter((c) => c.subject === 'Reading and Writing');
  const mathCategories = CORE_TOPICS.filter((c) => c.subject === 'Mathematics');

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 shadow-xs relative overflow-hidden">
        <div className="max-w-3xl space-y-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f2347]">
            <span className="w-2 h-2 rounded-full bg-sky-600"></span>
            <span>Digital SAT Preparation System</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight leading-tight">
            ISAT – The Ultimate Digital SAT Question Bank
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Your Complete Digital SAT Preparation Platform. Master 3,200+ authentic Reading, Writing, and Math practice questions with comprehensive distractor explanations, built-in Desmos graphing tools, and realistic exam simulations.
          </p>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateToTab('question-bank')}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#0f2347] hover:bg-[#1a386b] rounded-lg transition-colors shadow-sm flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Question Bank</span>
            </button>

            <button
              onClick={() => onNavigateToTab('practice-tests')}
              className="px-6 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Take Diagnostic Exam</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateToTab('desmos-guide')}
              className="px-5 py-3 text-sm font-semibold text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-sky-700" />
              <span>Desmos SAT Hacks</span>
            </button>
          </div>
        </div>

        {/* Live Metrics Row (Tabular Figures) */}
        <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-600">
          <div>
            <span className="block text-2xl sm:text-3xl font-black font-mono text-[#0f2347] tabular-nums">
              3,240+
            </span>
            <span className="text-xs text-slate-500 font-medium">Digital SAT Questions</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-black font-mono text-[#0f2347] tabular-nums">
              100%
            </span>
            <span className="text-xs text-slate-500 font-medium">Option & Distractor Explanations</span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-black font-mono text-[#0f2347] tabular-nums">
              {globalPlatformViews.toLocaleString()}
            </span>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-slate-400" /> Verified Item Views
            </span>
          </div>
          <div>
            <span className="block text-2xl sm:text-3xl font-black font-mono text-emerald-700 tabular-nums">
              1550+
            </span>
            <span className="text-xs text-slate-500 font-medium">Target Score Alignment</span>
          </div>
        </div>
      </section>

      {/* Domain Navigation Cards (Reading & Writing vs Mathematics) */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
            Explore Question Bank by Domain
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Carefully categorized across the official 8 Digital SAT domains and every required subtopic skill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reading and Writing Block */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="font-bold text-[#0f2347] uppercase tracking-wider">
                  Reading & Writing Section
                </span>
                <span>4 Core Domains · 11 Skills</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Verbal Reasoning & English Conventions
              </h3>
              <p className="text-xs text-slate-600 mt-1 mb-4 leading-relaxed">
                Short passages across literature, humanities, science, and social sciences with context clues, syntax, and rhetoric questions.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-100">
                {rwCategories.map((cat) => (
                  <div key={cat.topic} className="text-xs">
                    <span className="font-semibold text-slate-800">{cat.topic}</span>
                    <div className="flex flex-wrap gap-1 mt-1 text-slate-500">
                      {cat.subtopics.map((sub, sIdx) => (
                        <span key={sub} className="text-[11px] bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigateToTab('question-bank')}
              className="mt-6 w-full py-2.5 text-xs font-semibold text-[#0f2347] bg-[#0f2347]/5 hover:bg-[#0f2347]/10 rounded border border-[#0f2347]/20 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Practice Reading & Writing Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mathematics Block */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="font-bold text-[#0f2347] uppercase tracking-wider">
                  Mathematics Section
                </span>
                <span>4 Core Domains · 14 Skills</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Algebra, Advanced Math & Geometry
              </h3>
              <p className="text-xs text-slate-600 mt-1 mb-4 leading-relaxed">
                Includes multiple-choice and student-produced response (grid-in) questions, backed by integrated Desmos solutions.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-100">
                {mathCategories.map((cat) => (
                  <div key={cat.topic} className="text-xs">
                    <span className="font-semibold text-slate-800">{cat.topic}</span>
                    <div className="flex flex-wrap gap-1 mt-1 text-slate-500">
                      {cat.subtopics.map((sub, sIdx) => (
                        <span key={sub} className="text-[11px] bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigateToTab('question-bank')}
              className="mt-6 w-full py-2.5 text-xs font-semibold text-[#0f2347] bg-[#0f2347]/5 hover:bg-[#0f2347]/10 rounded border border-[#0f2347]/20 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Practice Mathematics Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured High-Yield Questions Carousel / List */}
      <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-bold font-display text-slate-900">
              Featured High-Yield Exemplar Questions
            </h2>
            <p className="text-xs text-slate-500">Click any question to open the interactive solver with timer and distractor breakdown.</p>
          </div>
          <button
            onClick={() => onNavigateToTab('question-bank')}
            className="text-xs font-semibold text-[#0f2347] hover:underline"
          >
            View All Questions &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CURATED_QUESTIONS.slice(0, 6).map((q) => (
            <div
              key={q.id}
              onClick={() => onOpenQuestion(q)}
              className="p-4 rounded-lg border border-slate-200 hover:border-slate-400 bg-slate-50/60 hover:bg-white transition-all cursor-pointer flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono font-bold text-[#0f2347]">{q.id}</span>
                  <span className={q.difficulty === 'Hard' ? 'text-rose-700 font-bold' : 'text-amber-700 font-semibold'}>
                    {q.difficulty}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-800 mb-1">{q.topic} - {q.subtopic}</h4>
                <div className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  <FormattedMathText text={q.prompt} />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 tabular-nums">
                  <Eye className="w-3 h-3 text-slate-400" />
                  {q.viewsCount.toLocaleString()} views
                </span>
                <span className="font-semibold text-[#0f2347]">Solve Question &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 font-display">Integrated Desmos Calculator</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Practice with the exact graphing calculator available on the test. Learn shortcut regression equations, root intersections, and circle analyses.
          </p>
          <button
            onClick={() => onNavigateToTab('desmos-guide')}
            className="text-xs font-semibold text-[#0f2347] hover:underline pt-2 block"
          >
            Read Desmos Guide &rarr;
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 font-display">Bluebook Exam Simulator</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Timed modules with strike-through option elimination, review navigator, and adaptive scoring calibrated to the real 400-1600 scale.
          </p>
          <button
            onClick={() => onNavigateToTab('practice-tests')}
            className="text-xs font-semibold text-[#0f2347] hover:underline pt-2 block"
          >
            Launch Diagnostic Exam &rarr;
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-2">
          <div className="w-9 h-9 rounded bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 font-display">Printable HTML Worksheets</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Easily export any customized problem set or full formula sheet to paper or PDF with clean typography and answer keys.
          </p>
          <button
            onClick={() => onNavigateToTab('formula-sheets')}
            className="text-xs font-semibold text-[#0f2347] hover:underline pt-2 block"
          >
            Browse Formula Archive &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
