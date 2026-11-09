import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  RotateCcw,
  BookOpen,
  Printer,
  ChevronLeft,
  ChevronRight,
  Eye,
  SlidersHorizontal,
  Bookmark,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { Question, Subject, Topic, Difficulty } from '../types';
import { CORE_TOPICS, ALL_QUESTIONS, getQuestionsByFilters } from '../data/questionDatabase';
import { QuestionCard } from '../components/QuestionCard';
import { SolvedRecord } from '../utils/analytics';

interface QuestionBankViewProps {
  onOpenQuestion: (question: Question) => void;
  solvedRecords: Record<string, SolvedRecord>;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  getQuestionViews: (id: string, baseViews: number) => number;
  onOpenPrintWorksheet: (questions: Question[], subject?: string) => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({
  onOpenQuestion,
  solvedRecords,
  bookmarkedIds,
  onToggleBookmark,
  getQuestionViews,
  onOpenPrintWorksheet,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'unanswered' | 'incorrect' | 'attempted' | 'bookmarked'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<'id' | 'difficulty' | 'time' | 'subtopic'>('id');

  const pageSize = 18;

  // Available topics based on selected subject
  const availableTopics = useMemo(() => {
    if (selectedSubject === 'All') {
      return Array.from(new Set(CORE_TOPICS.map((c) => c.topic)));
    }
    return CORE_TOPICS.filter((c) => c.subject === selectedSubject).map((c) => c.topic);
  }, [selectedSubject]);

  // Available subtopics based on selected topic
  const availableSubtopics = useMemo(() => {
    if (selectedTopic === 'All') {
      if (selectedSubject === 'All') {
        return Array.from(new Set(CORE_TOPICS.flatMap((c) => c.subtopics)));
      }
      return CORE_TOPICS.filter((c) => c.subject === selectedSubject).flatMap((c) => c.subtopics);
    }
    const found = CORE_TOPICS.find((c) => c.topic === selectedTopic);
    return found ? found.subtopics : [];
  }, [selectedSubject, selectedTopic]);

  // Solved and incorrect ID lists for status filtering
  const solvedIds = useMemo(() => Object.keys(solvedRecords), [solvedRecords]);
  const incorrectIds = useMemo(
    () =>
      Object.entries(solvedRecords)
        .filter(([_, rec]) => !rec.isCorrect)
        .map(([id]) => id),
    [solvedRecords]
  );

  // Filtered list
  const filteredQuestions = useMemo(() => {
    const list = getQuestionsByFilters({
      subject: selectedSubject,
      topic: selectedTopic,
      subtopic: selectedSubtopic,
      difficulty: selectedDifficulty,
      questionType: selectedType,
      searchQuery,
      bookmarkedIds,
      solvedIds,
      incorrectIds,
      statusFilter: selectedStatus,
    });

    return [...list].sort((a, b) => {
      if (sortBy === 'subtopic') {
        return a.subtopic.localeCompare(b.subtopic);
      }
      if (sortBy === 'difficulty') {
        const order: Record<Difficulty, number> = { Easy: 1, Medium: 2, Hard: 3 };
        return order[b.difficulty] - order[a.difficulty];
      }
      if (sortBy === 'time') {
        return b.estimatedTimeSeconds - a.estimatedTimeSeconds;
      }
      return a.id.localeCompare(b.id);
    });
  }, [
    selectedSubject,
    selectedTopic,
    selectedSubtopic,
    selectedDifficulty,
    selectedType,
    searchQuery,
    bookmarkedIds,
    solvedIds,
    incorrectIds,
    selectedStatus,
    sortBy,
    getQuestionViews,
  ]);

  const totalPages = Math.ceil(filteredQuestions.length / pageSize) || 1;
  const currentQuestions = filteredQuestions.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const resetFilters = () => {
    setSelectedSubject('All');
    setSelectedTopic('All');
    setSelectedSubtopic('All');
    setSelectedDifficulty('All');
    setSelectedType('All');
    setSelectedStatus('all');
    setSearchQuery('');
    setCurrentPage(1);
    setSortBy('id');
  };

  const handleSubjectChange = (subj: string) => {
    setSelectedSubject(subj);
    setSelectedTopic('All');
    setSelectedSubtopic('All');
    setCurrentPage(1);
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    setSelectedSubtopic('All');
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Filter Strip */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-display text-slate-900 tracking-tight">
              SAT Question Bank
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Filter through authentic Digital SAT Reading, Writing, and Math items with full option analyses.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenPrintWorksheet(filteredQuestions, selectedSubject !== 'All' ? selectedSubject : undefined)}
              className="px-3.5 py-2 text-xs font-semibold text-[#0f2347] bg-[#0f2347]/5 border border-[#0f2347]/20 rounded hover:bg-[#0f2347]/10 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Export Printable Worksheet</span>
            </button>
            <button
              onClick={resetFilters}
              className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded hover:bg-slate-50 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Search Bar & Interactive Status Filter Tabs */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by topic, keyword, or question ID (e.g. ISAT-RW-1001, Quadratic)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:outline-hidden focus:ring-2 focus:ring-[#0f2347] bg-white"
            />
          </div>

          {/* Status Segmented Buttons (Conforming to anti-slop rules for interactive controls) */}
          <div className="flex items-center bg-slate-100 p-1 rounded-md text-xs font-medium overflow-x-auto">
            <button
              onClick={() => {
                setSelectedStatus('all');
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                selectedStatus === 'all' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({ALL_QUESTIONS.length.toLocaleString()})
            </button>
            <button
              onClick={() => {
                setSelectedStatus('unanswered');
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                selectedStatus === 'unanswered' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Unanswered
            </button>
            <button
              onClick={() => {
                setSelectedStatus('attempted');
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                selectedStatus === 'attempted' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Attempted ({solvedIds.length})
            </button>
            <button
              onClick={() => {
                setSelectedStatus('incorrect');
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                selectedStatus === 'incorrect' ? 'bg-white text-rose-800 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Incorrect ({incorrectIds.length})
            </button>
            <button
              onClick={() => {
                setSelectedStatus('bookmarked');
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                selectedStatus === 'bookmarked' ? 'bg-white text-amber-800 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Saved ({bookmarkedIds.length})
            </button>
          </div>
        </div>

        {/* Detailed Dropdown Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-1">
          {/* Subject */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Subject
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => handleSubjectChange(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs font-medium border border-slate-300 rounded bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0f2347]"
            >
              <option value="All">All Subjects</option>
              <option value="Reading and Writing">Reading & Writing</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          </div>

          {/* Topic */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Topic Domain
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => handleTopicChange(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs font-medium border border-slate-300 rounded bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0f2347]"
            >
              <option value="All">All Topics</option>
              {availableTopics.map((top) => (
                <option key={top} value={top}>
                  {top}
                </option>
              ))}
            </select>
          </div>

          {/* Subtopic */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Subtopic Skill
            </label>
            <select
              value={selectedSubtopic}
              onChange={(e) => {
                setSelectedSubtopic(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-2.5 py-1.5 text-xs font-medium border border-slate-300 rounded bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0f2347]"
            >
              <option value="All">All Subtopics</option>
              {availableSubtopics.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-2.5 py-1.5 text-xs font-medium border border-slate-300 rounded bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0f2347]"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Question Type / Sort */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Sort Order
            </label>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs font-medium border border-slate-300 rounded bg-white focus:outline-hidden focus:ring-1 focus:ring-[#0f2347]"
            >
              <option value="id">Question ID</option>
              <option value="difficulty">Difficulty (Hard to Easy)</option>
              <option value="time">Estimated Solving Time</option>
              <option value="subtopic">Subtopic (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <div className="flex items-center gap-2">
          <span>
            Found <strong className="text-slate-900 font-semibold tabular-nums">{filteredQuestions.length.toLocaleString()}</strong> questions
          </span>
          <span aria-hidden="true">·</span>
          <span>
            Page <strong className="text-slate-900 tabular-nums">{currentPage}</strong> of{' '}
            <strong className="text-slate-900 tabular-nums">{totalPages}</strong>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-500">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>Digital SAT Curriculum Standard</span>
          </span>
        </div>
      </div>

      {/* Question Cards Grid */}
      {currentQuestions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentQuestions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              solvedRecord={solvedRecords[q.id]}
              isBookmarked={bookmarkedIds.includes(q.id)}
              onToggleBookmark={onToggleBookmark}
              onOpenQuestion={onOpenQuestion}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-lg p-12 text-center space-y-3">
          <SlidersHorizontal className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 font-display">No questions matched your filters</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query, difficulty, or topic selections to view questions from the bank.
          </p>
          <button
            onClick={resetFilters}
            className="mt-2 px-4 py-2 text-xs font-semibold text-white bg-[#0f2347] rounded hover:bg-[#1a386b] transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="bg-white border border-slate-200 rounded-lg px-4 py-3 flex items-center justify-between text-xs">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1.5 border border-slate-200 rounded text-slate-700 font-medium hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-1 font-mono text-xs">
            {Array.from({ length: Math.min(5, totalPages) }, (_, idx) => {
              let pageNum = idx + 1;
              if (totalPages > 5 && currentPage > 3) {
                pageNum = Math.min(totalPages - 4 + idx, currentPage - 2 + idx);
              }
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-7 h-7 rounded font-medium transition-colors ${
                    currentPage === pageNum
                      ? 'bg-[#0f2347] text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 py-1.5 border border-slate-200 rounded text-slate-700 font-medium hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
