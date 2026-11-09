import React, { useState } from 'react';
import { Calculator, Play, Sparkles, CheckCircle2, ArrowRight, BookOpen, Lightbulb } from 'lucide-react';
import { DESMOS_HACKS } from '../data/desmosHacks';
import { DesmosHack } from '../types';
import { FormattedMathText } from '../components/MathRenderer';

interface DesmosGuideViewProps {
  onOpenDesmosWithEquation: (equation?: string) => void;
}

export const DesmosGuideView: React.FC<DesmosGuideViewProps> = ({
  onOpenDesmosWithEquation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedHack, setSelectedHack] = useState<DesmosHack>(DESMOS_HACKS[0]);

  const categories = ['All', 'Systems', 'Advanced Math', 'Algebra', 'Regression', 'Geometry'];

  const filteredHacks = selectedCategory === 'All'
    ? DESMOS_HACKS
    : DESMOS_HACKS.filter((h) => h.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-800 mb-1">
            <Calculator className="w-4 h-4 text-sky-700" />
            <span>Digital SAT Math Secret Weapon</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
            The Complete Desmos SAT Mastery Guide
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            The Digital SAT includes the built-in Desmos Graphing Calculator on 100% of the Math section. Master these proven strategies to solve difficult questions in seconds.
          </p>
        </div>

        <button
          onClick={() => onOpenDesmosWithEquation()}
          className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0f2347] hover:bg-[#1a386b] rounded transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
        >
          <Calculator className="w-4 h-4 text-sky-300" />
          <span>Open Interactive Grapher</span>
        </button>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#0f2347] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Split Layout: Left Hack Catalog, Right Deep Dive & Interactive Example */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left List of Hacks */}
        <div className="lg:col-span-5 space-y-3">
          {filteredHacks.map((hack) => {
            const isSelected = selectedHack.id === hack.id;
            return (
              <div
                key={hack.id}
                onClick={() => setSelectedHack(hack)}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#0f2347] shadow-sm ring-1 ring-[#0f2347]'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span className="font-semibold text-slate-600">{hack.category}</span>
                  <span className="text-[#0f2347] font-semibold text-[11px]">SAT Method</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{hack.title}</h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {hack.shortSummary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Deep Dive Container */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs space-y-6">
          <div className="pb-4 border-b border-slate-200 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>{selectedHack.category} Strategy</span>
              </div>
              <h2 className="text-xl font-bold font-display text-slate-900 mt-1">
                {selectedHack.title}
              </h2>
            </div>

            <button
              onClick={() => onOpenDesmosWithEquation(selectedHack.desmosSyntax.split('\n')[0])}
              className="px-4 py-2 text-xs font-semibold text-[#0f2347] bg-[#0f2347]/10 hover:bg-[#0f2347]/20 rounded transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Test in Calculator</span>
            </button>
          </div>

          {/* How it works */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Strategy Overview & Mechanism
            </h4>
            <p className="text-slate-800 text-sm leading-relaxed">
              {selectedHack.howItWorks}
            </p>
          </div>

          {/* Desmos Syntax Box */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Desmos Input Code / Syntax
            </h4>
            <div className="p-3 bg-slate-900 text-sky-300 rounded font-mono text-xs font-semibold whitespace-pre-line">
              {selectedHack.desmosSyntax}
            </div>
          </div>

          {/* Real SAT Example Walkthrough */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>Authentic SAT Question Application</span>
              <span className="text-emerald-700 font-bold">Answer: {selectedHack.exampleQuestion.correctAnswer}</span>
            </div>

            <div className="text-slate-900 text-sm font-medium leading-relaxed">
              <FormattedMathText text={selectedHack.exampleQuestion.prompt} />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {selectedHack.exampleQuestion.options.map((opt) => (
                <div
                  key={opt.letter}
                  className={`p-2.5 rounded border ${
                    opt.letter === selectedHack.exampleQuestion.correctAnswer
                      ? 'bg-emerald-50 border-emerald-300 font-semibold text-emerald-950'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="font-bold mr-1.5">({opt.letter})</span> <FormattedMathText text={opt.text} />
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 text-xs text-slate-700 space-y-1">
              <strong className="text-slate-900 block">Step-by-Step Desmos Execution:</strong>
              <div className="leading-relaxed text-slate-600">
                <FormattedMathText text={selectedHack.exampleQuestion.desmosSolutionStep} />
              </div>
            </div>
          </div>

          {/* High-Yield Tip */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3 text-xs text-amber-900">
            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-950 block font-semibold">Pro Exam Tip:</strong>
              <p className="mt-0.5 leading-relaxed">{selectedHack.tip}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
