import React from 'react';
import { MathRenderer } from './MathRenderer';

export const OfficialSatReferenceSheet: React.FC = () => {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-lg p-6 sm:p-8 space-y-8 text-slate-900 font-sans shadow-sm print-page">
      {/* Official Header */}
      <div className="text-center border-b-2 border-slate-800 pb-4">
        <h2 className="text-xl sm:text-2xl font-black font-display tracking-tight text-slate-900 uppercase">
          Reference
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Standard formulas provided directly in the Digital SAT testing software
        </p>
      </div>

      {/* Row 1: 2D Geometry (Circle, Rectangle, Triangle, Right Triangle, Special Triangles) */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-stretch">
        {/* Circle */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="50" cy="50" r="38" className="stroke-slate-700" fill="#f8fafc" />
            <line x1="50" y1="50" x2="88" y2="50" strokeDasharray="3 2" className="stroke-slate-600" />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
            <text x="68" y="44" fontSize="12" fontStyle="italic" fill="currentColor" stroke="none">r</text>
          </svg>
          <div className="space-y-1 w-full pt-2 border-t border-slate-200">
            <div className="text-sm font-semibold">
              <MathRenderer math="A = \pi r^2" />
            </div>
            <div className="text-sm font-semibold">
              <MathRenderer math="C = 2\pi r" />
            </div>
          </div>
        </div>

        {/* Rectangle */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="15" y="25" width="70" height="50" className="stroke-slate-700" fill="#f8fafc" />
            <text x="48" y="20" fontSize="12" fontStyle="italic" fill="currentColor" stroke="none">w</text>
            <text x="88" y="54" fontSize="12" fontStyle="italic" fill="currentColor" stroke="none">ℓ</text>
          </svg>
          <div className="w-full pt-2 border-t border-slate-200 text-sm font-semibold">
            <MathRenderer math="A = \ell w" />
          </div>
        </div>

        {/* Triangle */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="15,75 85,75 60,25" className="stroke-slate-700" fill="#f8fafc" />
            <line x1="60" y1="25" x2="60" y2="75" strokeDasharray="3 2" className="stroke-slate-600" />
            <polyline points="60,67 68,67 68,75" className="stroke-slate-600" />
            <text x="63" y="52" fontSize="12" fontStyle="italic" fill="currentColor" stroke="none">h</text>
            <text x="48" y="90" fontSize="12" fontStyle="italic" fill="currentColor" stroke="none">b</text>
          </svg>
          <div className="w-full pt-2 border-t border-slate-200 text-sm font-semibold">
            <MathRenderer math="A = \frac{1}{2} b h" />
          </div>
        </div>

        {/* Right Triangle */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="20,75 80,75 20,20" className="stroke-slate-700" fill="#f8fafc" />
            <polyline points="20,67 28,67 28,75" className="stroke-slate-600" />
            <text x="8" y="50" fontSize="12" fontStyle="italic" fill="currentColor" stroke="none">a</text>
            <text x="48" y="90" fontSize="12" fontStyle="italic" fill="currentColor" stroke="none">b</text>
            <text x="56" y="44" fontSize="12" fontStyle="italic" fill="currentColor" stroke="none">c</text>
          </svg>
          <div className="w-full pt-2 border-t border-slate-200 text-sm font-semibold">
            <MathRenderer math="c^2 = a^2 + b^2" />
          </div>
        </div>

        {/* Special Triangle: 30-60-90 */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="25,80 85,80 25,15" className="stroke-slate-700" fill="#f8fafc" />
            <polyline points="25,72 33,72 33,80" className="stroke-slate-600" />
            <text x="30" y="32" fontSize="9" fill="currentColor" stroke="none">30°</text>
            <text x="62" y="74" fontSize="9" fill="currentColor" stroke="none">60°</text>
            <text x="8" y="52" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">x</text>
            <text x="48" y="93" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">x√3</text>
            <text x="60" y="44" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">2x</text>
          </svg>
          <div className="w-full pt-2 border-t border-slate-200 text-xs font-semibold">
            <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Special Triangle</span>
            <MathRenderer math="x : x\sqrt{3} : 2x" />
          </div>
        </div>

        {/* Special Triangle: 45-45-90 */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="20,80 80,80 20,20" className="stroke-slate-700" fill="#f8fafc" />
            <polyline points="20,72 28,72 28,80" className="stroke-slate-600" />
            <text x="26" y="38" fontSize="9" fill="currentColor" stroke="none">45°</text>
            <text x="60" y="74" fontSize="9" fill="currentColor" stroke="none">45°</text>
            <text x="8" y="55" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">s</text>
            <text x="48" y="93" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">s</text>
            <text x="56" y="46" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">s√2</text>
          </svg>
          <div className="w-full pt-2 border-t border-slate-200 text-xs font-semibold">
            <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Special Triangle</span>
            <MathRenderer math="s : s : s\sqrt{2}" />
          </div>
        </div>
      </div>

      {/* Row 2: 3D Solids (Prism, Cylinder, Sphere, Cone, Pyramid) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
        {/* Rectangular Solid */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.3">
            <rect x="20" y="35" width="45" height="40" className="stroke-slate-700" fill="#f8fafc" />
            <polyline points="20,35 45,15 90,15 65,35" className="stroke-slate-700" fill="#f1f5f9" />
            <polyline points="90,15 90,55 65,75" className="stroke-slate-700" fill="#f8fafc" />
            <text x="40" y="87" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">ℓ</text>
            <text x="80" y="70" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">w</text>
            <text x="10" y="58" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">h</text>
          </svg>
          <div className="w-full pt-2 border-t border-slate-200 text-sm font-semibold">
            <MathRenderer math="V = \ell w h" />
          </div>
        </div>

        {/* Cylinder */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.3">
            <ellipse cx="50" cy="25" rx="30" ry="12" className="stroke-slate-700" fill="#f1f5f9" />
            <line x1="20" y1="25" x2="20" y2="75" className="stroke-slate-700" />
            <line x1="80" y1="25" x2="80" y2="75" className="stroke-slate-700" />
            <path d="M 20 75 A 30 12 0 0 0 80 75" className="stroke-slate-700" fill="#f8fafc" />
            <line x1="50" y1="25" x2="80" y2="25" strokeDasharray="2 2" className="stroke-slate-600" />
            <text x="63" y="21" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">r</text>
            <text x="86" y="54" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">h</text>
          </svg>
          <div className="w-full pt-2 border-t border-slate-200 text-sm font-semibold">
            <MathRenderer math="V = \pi r^2 h" />
          </div>
        </div>

        {/* Sphere */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.3">
            <circle cx="50" cy="50" r="35" className="stroke-slate-700" fill="#f8fafc" />
            <ellipse cx="50" cy="50" rx="35" ry="10" strokeDasharray="2 2" className="stroke-slate-500" />
            <line x1="50" y1="50" x2="85" y2="50" className="stroke-slate-700" />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
            <text x="65" y="44" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">r</text>
          </svg>
          <div className="w-full pt-2 border-t border-slate-200 text-sm font-semibold">
            <MathRenderer math="V = \frac{4}{3}\pi r^3" />
          </div>
        </div>

        {/* Cone */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.3">
            <line x1="50" y1="15" x2="20" y2="75" className="stroke-slate-700" />
            <line x1="50" y1="15" x2="80" y2="75" className="stroke-slate-700" />
            <path d="M 20 75 A 30 10 0 0 0 80 75" className="stroke-slate-700" fill="#f8fafc" />
            <path d="M 20 75 A 30 10 0 0 1 80 75" strokeDasharray="2 2" className="stroke-slate-400" />
            <line x1="50" y1="15" x2="50" y2="75" strokeDasharray="3 2" className="stroke-slate-600" />
            <line x1="50" y1="75" x2="80" y2="75" strokeDasharray="2 2" className="stroke-slate-600" />
            <text x="63" y="72" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">r</text>
            <text x="53" y="45" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">h</text>
          </svg>
          <div className="w-full pt-2 border-t border-slate-200 text-sm font-semibold">
            <MathRenderer math="V = \frac{1}{3}\pi r^2 h" />
          </div>
        </div>

        {/* Pyramid */}
        <div className="border border-slate-200 rounded p-3 flex flex-col items-center justify-between text-center bg-slate-50/50">
          <svg className="w-20 h-20 text-slate-800 my-1" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.3">
            <polygon points="50,15 20,65 55,80 85,65" className="stroke-slate-700" fill="#f8fafc" />
            <line x1="50" y1="15" x2="55" y2="80" className="stroke-slate-700" />
            <line x1="50" y1="15" x2="50" y2="68" strokeDasharray="3 2" className="stroke-slate-600" />
            <text x="53" y="48" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">h</text>
            <text x="35" y="78" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">B</text>
          </svg>
          <div className="w-full pt-2 border-t border-slate-200 text-sm font-semibold">
            <MathRenderer math="V = \frac{1}{3} B h" />
          </div>
        </div>
      </div>

      {/* Row 3: Official Notes Box */}
      <div className="border-t border-slate-200 pt-4 text-xs text-slate-700 leading-relaxed grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3 bg-slate-50 rounded border border-slate-200 text-center">
          The number of degrees of arc in a circle is <strong className="font-mono">360</strong>.
        </div>
        <div className="p-3 bg-slate-50 rounded border border-slate-200 text-center">
          The number of radians of arc in a circle is <strong className="font-mono">2π</strong>.
        </div>
        <div className="p-3 bg-slate-50 rounded border border-slate-200 text-center">
          The sum of the measures in degrees of the angles of a triangle is <strong className="font-mono">180</strong>.
        </div>
      </div>
    </div>
  );
};
