import React, { useState } from 'react';
import { BookOpen, Printer, Search, Copy, Check, Calculator, Sparkles } from 'lucide-react';
import { OFFICIAL_SAT_MATH_FORMULAS, ESSENTIAL_ADVANCED_MATH_FORMULAS, RW_CONVENTIONS_CHEAT_SHEET } from '../data/formulaData';
import { OfficialSatReferenceSheet } from '../components/OfficialSatReferenceSheet';
import { MathRenderer } from '../components/MathRenderer';

export const FormulaSheetsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'official' | 'advanced' | 'rw'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormula(text);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  const allCategories = [
    { cat: ESSENTIAL_ADVANCED_MATH_FORMULAS, key: 'advanced' },
    { cat: RW_CONVENTIONS_CHEAT_SHEET, key: 'rw' },
  ];

  const filteredCategories = allCategories
    .filter(({ key }) => activeTab === 'all' || activeTab === key)
    .map(({ cat }) => {
      if (!searchQuery.trim()) return cat;
      const q = searchQuery.toLowerCase();
      const filtered = cat.formulas.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.formula.toLowerCase().includes(q) ||
          f.explanation.toLowerCase().includes(q)
      );
      return {
        ...cat,
        formulas: filtered,
      };
    })
    .filter((cat) => cat.formulas.length > 0);

  const showOfficialSheet = (activeTab === 'all' || activeTab === 'official') && !searchQuery.trim();

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 no-print">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
            Digital SAT Formula & Reference Archive
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Authentic Digital SAT geometry diagrams, textbook-grade mathematical formulas, and English conventions reference.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-4 py-2 text-xs font-semibold bg-[#0f2347] text-white hover:bg-[#1a386b] rounded transition-colors flex items-center gap-1.5 shadow-sm whitespace-nowrap shrink-0"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Export PDF</span>
        </button>
      </div>

      {/* Tabs and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-md text-xs font-medium overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
              activeTab === 'all' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Formulas & Rules
          </button>
          <button
            onClick={() => setActiveTab('official')}
            className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
              activeTab === 'official' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Official Bluebook Reference
          </button>
          <button
            onClick={() => setActiveTab('advanced')}
            className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
              activeTab === 'advanced' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Essential Advanced Math
          </button>
          <button
            onClick={() => setActiveTab('rw')}
            className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
              activeTab === 'rw' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            RW Grammar Conventions
          </button>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search formulas or rules..."
            className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-[#0f2347] focus:outline-hidden bg-white"
          />
        </div>
      </div>

      {/* Official SAT Reference Sheet Display */}
      {showOfficialSheet && (
        <div className="space-y-3">
          <OfficialSatReferenceSheet />
        </div>
      )}

      {/* Additional Formula Categories with KaTeX Typesetting */}
      <div className="space-y-8 print-page">
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="text-lg font-bold font-display text-slate-900">
                {category.name}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {category.formulas.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <h3 className="font-bold text-slate-900 text-sm">{item.name}</h3>
                      <button
                        onClick={() => copyToClipboard(item.formula)}
                        className="text-slate-400 hover:text-slate-600 p-1 no-print"
                        title="Copy formula text"
                      >
                        {copiedFormula === item.formula ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded text-center text-slate-900 text-base font-semibold overflow-x-auto">
                      <MathRenderer math={item.formula} displayMode={true} />
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>

                  {/* Examples and Desmos tip */}
                  {(item.satExample || item.desmosTip) && (
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs space-y-2">
                      {item.satExample && (
                        <div className="text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100">
                          <strong className="text-slate-800">Example: </strong>
                          <span>{item.satExample}</span>
                        </div>
                      )}
                      {item.desmosTip && (
                        <div className="text-sky-900 bg-sky-50 p-2.5 rounded border border-sky-100">
                          <strong className="text-sky-950">Desmos: </strong>
                          <span>{item.desmosTip}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
