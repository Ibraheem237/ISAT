import React, { useState, useMemo } from 'react';
import {
  Search,
  BookOpen,
  Volume2,
  CheckCircle2,
  Bookmark,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Filter,
  Check,
  Eye,
  Award,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { SAT_VOCAB_LIST, VOCAB_STUDY_TIPS, SatVocabItem } from '../data/satVocabData';

interface VocabListViewProps {
  onQuickPractice?: () => void;
}

export const VocabListView: React.FC<VocabListViewProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [selectedPos, setSelectedPos] = useState<string>('All');
  const [selectedSet, setSelectedSet] = useState<number | 'All'>('All');
  const [activeTab, setActiveTab] = useState<'list' | 'flashcards' | 'quiz'>('list');

  // Mastered words tracked in localStorage
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('isat_mastered_vocab');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleMastered = (id: string) => {
    setMasteredIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('isat_mastered_vocab', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Text-to-speech pronunciation
  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.9;
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  // Available initial letters
  const availableLetters = useMemo(() => {
    const letters = new Set(SAT_VOCAB_LIST.map((v) => v.letter));
    return ['All', ...Array.from(letters).sort()];
  }, []);

  // Filtered list
  const filteredWords = useMemo(() => {
    return SAT_VOCAB_LIST.filter((item, index) => {
      // Set filtering (15 words per set)
      if (selectedSet !== 'All') {
        const itemSet = Math.floor(index / 15) + 1;
        if (itemSet !== selectedSet) return false;
      }

      if (selectedLetter !== 'All' && item.letter !== selectedLetter) {
        return false;
      }

      if (selectedPos !== 'All') {
        if (selectedPos === 'v' && item.partOfSpeech !== 'verb') return false;
        if (selectedPos === 'adj' && item.partOfSpeech !== 'adjective') return false;
        if (selectedPos === 'n' && item.partOfSpeech !== 'noun') return false;
        if (selectedPos === 'adv' && item.partOfSpeech !== 'adverb') return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchWord = item.word.toLowerCase().includes(q);
        const matchMeaning = item.meaning.toLowerCase().includes(q);
        const matchExample = item.example.toLowerCase().includes(q);
        if (!matchWord && !matchMeaning && !matchExample) return false;
      }

      return true;
    });
  }, [searchQuery, selectedLetter, selectedPos, selectedSet]);

  // Flashcards state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Generate 10 random quiz questions
  const quizQuestions = useMemo(() => {
    const shuffled = [...SAT_VOCAB_LIST].sort(() => 0.5 - Math.random()).slice(0, 10);
    return shuffled.map((target) => {
      // 3 wrong distractors
      const distractors = SAT_VOCAB_LIST.filter((w) => w.id !== target.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((w) => w.meaning);

      const options = [...distractors, target.meaning].sort(() => 0.5 - Math.random());
      return {
        word: target.word,
        posLabel: target.posLabel,
        correctMeaning: target.meaning,
        example: target.example,
        options,
      };
    });
  }, [quizCompleted]);

  const currentFlashcard = filteredWords[flashcardIndex] || SAT_VOCAB_LIST[0];

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev + 1) % (filteredWords.length || 1));
  };

  const handlePrevFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex((prev) => (prev - 1 + filteredWords.length) % (filteredWords.length || 1));
  };

  const totalSets = Math.ceil(SAT_VOCAB_LIST.length / 15);

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0f2347]/5 text-[#0f2347] text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-[#0f2347]" />
              <span>Official Digital SAT Preparation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
              SAT Vocabulary Builder
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              384 authentic Digital SAT high-frequency words with simple definitions and contextual example sentences. Master these words to excel in Reading &amp; Writing Words in Context questions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center min-w-[130px]">
              <div className="text-2xl font-bold font-mono text-[#0f2347] tabular-nums">
                {masteredIds.length} <span className="text-xs font-normal text-slate-400">/ 384</span>
              </div>
              <div className="text-xs font-medium text-slate-500 mt-0.5">Words Mastered</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center min-w-[120px]">
              <div className="text-2xl font-bold font-mono text-emerald-700 tabular-nums">
                {Math.round((masteredIds.length / 384) * 100)}%
              </div>
              <div className="text-xs font-medium text-slate-500 mt-0.5">Completion</div>
            </div>
          </div>
        </div>

        {/* Study Strategy Tip Callout from PDF */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-3 text-xs text-slate-600 bg-amber-50/70 p-3.5 rounded border-amber-200/60">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-800">How to study: </span>
            Learn 10–15 words at a time. Read the meaning, say the example sentence aloud, then make your own sentence. Review the words again the next day to lock them into memory.
          </div>
        </div>

        {/* Navigation Tabs (List, Flashcards, Quiz) */}
        <div className="mt-6 flex items-center gap-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('list')}
            className={`pb-3 px-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'list'
                ? 'border-[#0f2347] text-[#0f2347]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Complete Word Bank (384)</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('flashcards');
              setFlashcardIndex(0);
              setIsFlipped(false);
            }}
            className={`pb-3 px-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'flashcards'
                ? 'border-[#0f2347] text-[#0f2347]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Flashcards</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('quiz');
              setQuizIndex(0);
              setQuizScore(0);
              setSelectedOption(null);
              setIsAnswerSubmitted(false);
              setQuizCompleted(false);
            }}
            className={`pb-3 px-3 text-xs font-semibold flex items-center gap-1.5 border-b-2 transition-colors ${
              activeTab === 'quiz'
                ? 'border-[#0f2347] text-[#0f2347]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Vocabulary Quiz</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: FULL VOCABULARY LIST */}
      {activeTab === 'list' && (
        <div className="space-y-4">
          {/* Controls Bar: Search + Filters */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 384 words, definitions, or example sentences..."
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#0f2347] focus:border-[#0f2347]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Part of Speech */}
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-xs text-slate-500 mr-1">POS:</span>
                {(['All', 'v', 'adj', 'n', 'adv'] as const).map((pos) => (
                  <button
                    key={pos}
                    onClick={() => setSelectedPos(pos)}
                    className={`px-2.5 py-1 text-xs rounded transition-colors ${
                      selectedPos === pos
                        ? 'bg-[#0f2347] text-white font-medium'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {pos === 'All' ? 'All' : `(${pos})`}
                  </button>
                ))}
              </div>

              {/* Study Sets (15 words each) */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-xs text-slate-500">Study Set:</span>
                <select
                  value={selectedSet}
                  onChange={(e) =>
                    setSelectedSet(e.target.value === 'All' ? 'All' : parseInt(e.target.value, 10))
                  }
                  className="text-xs border border-slate-200 rounded px-2 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-[#0f2347]"
                >
                  <option value="All">All Sets (1–{totalSets})</option>
                  {Array.from({ length: totalSets }).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      Set {i + 1} (Words {i * 15 + 1}–{Math.min((i + 1) * 15, 384)})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Letter Bar A–Z */}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs text-slate-400 mr-1 shrink-0">Letter:</span>
              {availableLetters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`w-6 h-6 rounded flex items-center justify-center text-xs shrink-0 transition-colors ${
                    selectedLetter === letter
                      ? 'bg-[#0f2347] text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Results count & quick clear */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing <strong className="text-slate-800">{filteredWords.length}</strong> of 384 SAT vocabulary words
            </span>
            {(selectedLetter !== 'All' || selectedPos !== 'All' || selectedSet !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedLetter('All');
                  setSelectedPos('All');
                  setSelectedSet('All');
                  setSearchQuery('');
                }}
                className="text-xs text-[#0f2347] font-semibold hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Words Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredWords.map((item) => {
              const isMastered = masteredIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`bg-white border rounded-lg p-4 transition-all hover:shadow-xs flex flex-col justify-between ${
                    isMastered ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-baseline gap-2">
                        <h3 className="text-base font-bold text-slate-900 tracking-tight font-display">
                          {item.word}
                        </h3>
                        <span className="text-xs font-serif italic text-slate-500">
                          {item.posLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => speakWord(item.word)}
                          title="Pronounce word"
                          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => toggleMastered(item.id)}
                          title={isMastered ? 'Mark as learning' : 'Mark as mastered'}
                          className={`p-1 rounded transition-colors ${
                            isMastered
                              ? 'text-emerald-600 bg-emerald-100 hover:bg-emerald-200'
                              : 'text-slate-300 hover:text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs font-medium text-slate-700 mb-2.5 leading-snug">
                      {item.meaning}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 mt-auto">
                    <p className="text-xs text-slate-500 italic leading-relaxed">
                      &ldquo;{item.example}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredWords.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-lg p-12 text-center">
              <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No matching vocabulary words found</p>
              <p className="text-xs text-slate-500 mt-1">Try searching with a different term or clearing your filters.</p>
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: INTERACTIVE FLASHCARDS */}
      {activeTab === 'flashcards' && (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Card <strong className="text-slate-800">{flashcardIndex + 1}</strong> of {filteredWords.length}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">Click card to flip</span>
              <button
                onClick={() => {
                  const randomIndex = Math.floor(Math.random() * filteredWords.length);
                  setFlashcardIndex(randomIndex);
                  setIsFlipped(false);
                }}
                className="text-xs font-semibold text-[#0f2347] hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Shuffle
              </button>
            </div>
          </div>

          {/* Flashcard Component */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer bg-white border border-slate-200 rounded-xl p-8 min-h-[300px] flex flex-col justify-between items-center text-center shadow-sm hover:border-[#0f2347]/50 transition-all select-none relative group"
          >
            <div className="w-full flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px]">ID: {currentFlashcard.id}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speakWord(currentFlashcard.word);
                }}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <div className="my-auto py-6">
              {!isFlipped ? (
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">
                    {currentFlashcard.word}
                  </h2>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-serif italic text-slate-600">
                    {currentFlashcard.posLabel}
                  </span>
                  <p className="text-xs text-slate-400 mt-4">Tap anywhere to reveal meaning &amp; SAT sentence</p>
                </div>
              ) : (
                <div className="space-y-4 max-w-lg">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Meaning</span>
                    <p className="text-lg font-semibold text-slate-900 leading-snug">
                      {currentFlashcard.meaning}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">SAT Example Sentence</span>
                    <p className="text-sm text-slate-600 italic mt-1 leading-relaxed">
                      &ldquo;{currentFlashcard.example}&rdquo;
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="w-full flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMastered(currentFlashcard.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                  masteredIds.includes(currentFlashcard.id)
                    ? 'bg-emerald-50 text-emerald-700 font-semibold'
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>{masteredIds.includes(currentFlashcard.id) ? 'Mastered' : 'Mark as Mastered'}</span>
              </button>

              <span className="text-[11px] text-slate-400">{isFlipped ? 'Showing Back' : 'Showing Front'}</span>
            </div>
          </div>

          {/* Flashcard Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevFlashcard}
              className="flex-1 py-2.5 px-4 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1 shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" /> Previous Word
            </button>
            <button
              onClick={handleNextFlashcard}
              className="flex-1 py-2.5 px-4 bg-[#0f2347] text-white rounded-lg text-xs font-semibold hover:bg-[#1a386b] flex items-center justify-center gap-1 shadow-2xs"
            >
              Next Word <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* VIEW 3: VOCABULARY QUIZ */}
      {activeTab === 'quiz' && (
        <div className="max-w-2xl mx-auto space-y-4">
          {!quizCompleted ? (
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span>
                  Question <strong>{quizIndex + 1}</strong> of 10
                </span>
                <span className="font-semibold text-[#0f2347]">Score: {quizScore} / {quizIndex}</span>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-medium">Which choice best defines:</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                    {quizQuestions[quizIndex]?.word}
                  </h2>
                  <span className="text-sm font-serif italic text-slate-500">
                    {quizQuestions[quizIndex]?.posLabel}
                  </span>
                </div>
                <p className="text-xs text-slate-500 italic mt-2">
                  Context clue: &ldquo;{quizQuestions[quizIndex]?.example}&rdquo;
                </p>
              </div>

              <div className="space-y-2.5">
                {quizQuestions[quizIndex]?.options.map((option, idx) => {
                  const isCorrect = option === quizQuestions[quizIndex]?.correctMeaning;
                  const isSelected = selectedOption === option;

                  let optionStyle = 'border-slate-200 hover:border-slate-300 bg-white text-slate-800';
                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                    } else if (isSelected) {
                      optionStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                    }
                  } else if (isSelected) {
                    optionStyle = 'border-[#0f2347] bg-[#0f2347]/5 text-[#0f2347] font-medium';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => setSelectedOption(option)}
                      className={`w-full p-3.5 text-left text-xs border rounded-lg transition-all flex items-start gap-3 ${optionStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-[10px] font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 leading-snug">{option}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                {!isAnswerSubmitted ? (
                  <button
                    disabled={!selectedOption}
                    onClick={() => {
                      if (!selectedOption) return;
                      setIsAnswerSubmitted(true);
                      if (selectedOption === quizQuestions[quizIndex]?.correctMeaning) {
                        setQuizScore((prev) => prev + 1);
                      }
                    }}
                    className={`px-5 py-2 text-xs font-semibold rounded text-white transition-colors ${
                      selectedOption
                        ? 'bg-[#0f2347] hover:bg-[#1a386b]'
                        : 'bg-slate-300 cursor-not-allowed'
                    }`}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (quizIndex < 9) {
                        setQuizIndex((prev) => prev + 1);
                        setSelectedOption(null);
                        setIsAnswerSubmitted(false);
                      } else {
                        setQuizCompleted(true);
                      }
                    }}
                    className="px-5 py-2 text-xs font-semibold rounded text-white bg-[#0f2347] hover:bg-[#1a386b]"
                  >
                    {quizIndex < 9 ? 'Next Question' : 'View Results'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center space-y-4 shadow-xs">
              <Award className="w-12 h-12 text-[#0f2347] mx-auto" />
              <h2 className="text-2xl font-bold text-slate-900 font-display">Vocabulary Quiz Completed!</h2>
              <p className="text-sm text-slate-600">
                You scored <strong className="text-slate-900 font-mono text-base">{quizScore} / 10</strong> on Digital SAT vocabulary comprehension.
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setQuizIndex(0);
                    setQuizScore(0);
                    setSelectedOption(null);
                    setIsAnswerSubmitted(false);
                    setQuizCompleted(false);
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded text-white bg-[#0f2347] hover:bg-[#1a386b]"
                >
                  Take Another Quiz
                </button>
                <button
                  onClick={() => setActiveTab('list')}
                  className="px-4 py-2 text-xs font-semibold rounded text-slate-700 bg-slate-100 hover:bg-slate-200"
                >
                  Back to Word Bank
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
