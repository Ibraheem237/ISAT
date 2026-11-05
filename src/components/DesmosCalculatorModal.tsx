import React, { useState } from 'react';
import { X, ExternalLink, HelpCircle, RotateCcw, Plus, Trash2 } from 'lucide-react';

interface DesmosCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEquation?: string;
}

export const DesmosCalculatorModal: React.FC<DesmosCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialEquation,
}) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'sat-presets'>('calculator');
  const [customEquation, setCustomEquation] = useState<string>(initialEquation || 'y = 2x^2 - 8x + 6');
  const [expressions, setExpressions] = useState<string[]>([
    'y = 2x^2 - 8x + 6',
    'y = 3x - 1',
  ]);

  if (!isOpen) return null;

  const presets = [
    { title: 'Linear System Intersect', eqs: ['y = 2x + 1', '3x - 4y = 12'], note: 'Click intersection dot for solution (x, y)' },
    { title: 'Quadratic Vertex & Zeros', eqs: ['y = -2x^2 + 12x - 10'], note: 'Vertex appears at peak; gray dots mark roots' },
    { title: 'Circle Equation', eqs: ['(x - 3)^2 + (y + 2)^2 = 25'], note: 'Radius = 5, Center = (3, -2)' },
    { title: 'Exponential Growth', eqs: ['y = 500(1.08)^x'], note: 'Initial value = 500, 8% growth rate' },
  ];

  const handleAddExpression = () => {
    setExpressions([...expressions, 'y = x']);
  };

  const handleUpdateExpression = (index: number, val: string) => {
    const updated = [...expressions];
    updated[index] = val;
    setExpressions(updated);
  };

  const handleRemoveExpression = (index: number) => {
    setExpressions(expressions.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl border border-slate-200 w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden animate-in fade-in duration-150">
        {/* Header */}
        <div className="px-5 py-3.5 bg-[#0f2347] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-xs border border-sky-400/30">
              fx
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight font-display">Digital SAT Desmos Graphing Calculator</h2>
              <p className="text-xs text-slate-300">Official Bluebook standard graphing environment</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-white/10 rounded p-0.5 text-xs">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'calculator' ? 'bg-white text-slate-900 font-semibold' : 'text-slate-200 hover:text-white'
                }`}
              >
                Graph Tool
              </button>
              <button
                onClick={() => setActiveTab('sat-presets')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'sat-presets' ? 'bg-white text-slate-900 font-semibold' : 'text-slate-200 hover:text-white'
                }`}
              >
                SAT Presets
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors ml-2"
              aria-label="Close calculator"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-50">
          {activeTab === 'calculator' ? (
            <div className="flex-1 flex flex-col h-full">
              {/* Top Quick Bar */}
              <div className="px-4 py-2 bg-white border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium text-slate-700">Digital SAT Mode: Full Graphing & Table Engine</span>
                <span className="text-slate-400 hidden sm:inline">Supports implicit curves, inequalities, sliders & regressions</span>
              </div>

              {/* Calculator Embedded Frame */}
              <div className="flex-1 relative bg-white">
                <iframe
                  src="https://www.desmos.com/calculator"
                  title="Desmos Graphing Calculator"
                  className="w-full h-full border-none"
                  allow="clipboard-write"
                />
              </div>
            </div>
          ) : (
            <div className="flex-1 p-6 overflow-y-auto bg-white">
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display">High-Yield SAT Desmos Presets</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Select any typical SAT scenario below to review how top scorers configure Desmos during the exam.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {presets.map((preset, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition-all shadow-xs"
                    >
                      <h4 className="text-sm font-semibold text-slate-900">{preset.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{preset.note}</p>
                      <div className="mt-3 p-2 bg-slate-900 text-sky-300 rounded font-mono text-xs space-y-1">
                        {preset.eqs.map((eq, eIdx) => (
                          <div key={eIdx}>{eq}</div>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          setActiveTab('calculator');
                        }}
                        className="mt-3 text-xs font-semibold text-[#0f2347] hover:underline inline-flex items-center gap-1"
                      >
                        Try in Graph Tool &rarr;
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-sky-50 border border-sky-100 rounded text-xs text-sky-900 space-y-2">
                  <div className="font-semibold flex items-center gap-1.5 text-sky-950">
                    <HelpCircle className="w-4 h-4 text-sky-700" />
                    <span>Desmos Shortcuts on the Digital SAT:</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sky-800">
                    <li>Type <strong>pi</strong> to get π, and <strong>sqrt</strong> to get √</li>
                    <li>Type <strong>~</strong> (tilde) to run regression on tables, e.g. <code>y1 ~ mx1 + b</code></li>
                    <li>Type inequalities using <code>&lt;=</code> or <code>&gt;=</code> to visualize shaded solution spaces</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>ISAT Integrated Digital Tool Suite</span>
          <button
            onClick={onClose}
            className="px-3 py-1 font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
          >
            Close Calculator
          </button>
        </div>
      </div>
    </div>
  );
};
