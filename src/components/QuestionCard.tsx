import React from 'react';
import { Bookmark, Eye, Clock, CheckCircle2, XCircle, ArrowUpRight } from 'lucide-react';
import { Question } from '../types';
import { SolvedRecord } from '../utils/analytics';

import { FormattedMathText } from './MathRenderer';

interface QuestionCardProps {
  question: Question;
  solvedRecord?: SolvedRecord;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpenQuestion: (question: Question) => void;
  viewsCount?: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  solvedRecord,
  isBookmarked,
  onToggleBookmark,
  onOpenQuestion,
}) => {
  return (
    <div
      onClick={() => onOpenQuestion(question)}
      className="group bg-white border border-slate-200 hover:border-slate-400/80 rounded-lg p-5 transition-all shadow-xs hover:shadow-sm cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Unboxed Metadata Header (Following Anti-Slop Zero-Pill Constitution) */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono font-semibold text-[#0f2347]">{question.id}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="font-medium text-slate-700">{question.topic}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-500">{question.subtopic}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span
              className={
                question.difficulty === 'Hard'
                  ? 'text-rose-700 font-semibold'
                  : question.difficulty === 'Medium'
                  ? 'text-amber-700 font-medium'
                  : 'text-emerald-700 font-medium'
              }
            >
              {question.difficulty}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(question.id);
            }}
            className={`p-1 rounded hover:bg-slate-100 transition-colors ${
              isBookmarked ? 'text-amber-500' : 'text-slate-400 hover:text-slate-600'
            }`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark question'}
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Stem Passage Preview (if available) */}
        {question.passage && (
          <div className="text-xs text-slate-600 line-clamp-2 italic mb-2 pl-2.5 border-l-2 border-slate-200">
            <FormattedMathText text={question.passage} />
          </div>
        )}

        {/* Prompt */}
        <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#0f2347] transition-colors line-clamp-2 leading-relaxed">
          <FormattedMathText text={question.prompt} />
        </h3>
      </div>

      {/* Footer Metrics & Status */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-3 tabular-nums">
          <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
            {question.questionType}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>~{question.estimatedTimeSeconds}s</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {solvedRecord && (
            <span
              className={`flex items-center gap-1 font-medium ${
                solvedRecord.isCorrect ? 'text-emerald-700' : 'text-rose-700'
              }`}
            >
              {solvedRecord.isCorrect ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Solved</span>
                </>
              ) : (
                <>
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Review</span>
                </>
              )}
            </span>
          )}

          <span className="text-[#0f2347] font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
            <span>Solve</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
