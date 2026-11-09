import { Question } from '../types';

export interface SolvedRecord {
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
  timestamp: number;
}

export interface PracticeTestResult {
  testId: string;
  testTitle: string;
  date: number;
  scoreRw: number;
  scoreMath: number;
  totalScore: number;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  timeSpentMinutes: number;
}

const STORAGE_KEYS = {
  BOOKMARKS: 'isat_bookmarks',
  SOLVED: 'isat_solved_records',
  QUESTION_VIEWS: 'isat_question_views',
  GLOBAL_PAGE_VIEWS: 'isat_global_views',
  TEST_RESULTS: 'isat_test_results',
  TARGET_SCORE: 'isat_target_score',
};

// Safe JSON parser for localStorage
function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw);
  } catch {
    return defaultValue;
  }
}

function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn('Failed to save to localStorage:', err);
  }
}

export function getBookmarks(): string[] {
  return loadFromStorage<string[]>(STORAGE_KEYS.BOOKMARKS, ['ISAT-RW-1001', 'ISAT-MATH-2002']);
}

export function toggleBookmark(questionId: string): string[] {
  const current = getBookmarks();
  const exists = current.includes(questionId);
  const updated = exists ? current.filter((id) => id !== questionId) : [...current, questionId];
  saveToStorage(STORAGE_KEYS.BOOKMARKS, updated);
  return updated;
}

export function getSolvedRecords(): Record<string, SolvedRecord> {
  return loadFromStorage<Record<string, SolvedRecord>>(STORAGE_KEYS.SOLVED, {
    'ISAT-RW-1001': { selectedAnswer: 'A', isCorrect: true, timeSpentSeconds: 48, timestamp: Date.now() - 3600000 },
    'ISAT-MATH-2001': { selectedAnswer: 'A', isCorrect: true, timeSpentSeconds: 42, timestamp: Date.now() - 7200000 },
  });
}

export function recordQuestionAnswer(
  questionId: string,
  selectedAnswer: string,
  isCorrect: boolean,
  timeSpentSeconds: number
): void {
  const current = getSolvedRecords();
  current[questionId] = {
    selectedAnswer,
    isCorrect,
    timeSpentSeconds,
    timestamp: Date.now(),
  };
  saveToStorage(STORAGE_KEYS.SOLVED, current);
}

export function getQuestionViewCount(questionId: string, baseViews: number): number {
  const customViews = loadFromStorage<Record<string, number>>(STORAGE_KEYS.QUESTION_VIEWS, {});
  return (customViews[questionId] || 0) + baseViews;
}

export function incrementQuestionView(questionId: string): number {
  const customViews = loadFromStorage<Record<string, number>>(STORAGE_KEYS.QUESTION_VIEWS, {});
  const next = (customViews[questionId] || 0) + 1;
  customViews[questionId] = next;
  saveToStorage(STORAGE_KEYS.QUESTION_VIEWS, customViews);
  return next;
}

export function getGlobalPlatformViews(): number {
  const stored = loadFromStorage<number>(STORAGE_KEYS.GLOBAL_PAGE_VIEWS, 184520);
  return stored;
}

export function incrementGlobalPlatformViews(): number {
  const current = getGlobalPlatformViews();
  const updated = current + 1;
  saveToStorage(STORAGE_KEYS.GLOBAL_PAGE_VIEWS, updated);
  return updated;
}

export function getTestResults(): PracticeTestResult[] {
  return loadFromStorage<PracticeTestResult[]>(STORAGE_KEYS.TEST_RESULTS, [
    {
      testId: 'isat-practice-test-1',
      testTitle: 'Digital SAT Official Diagnostic Exam 1',
      date: Date.now() - 86400000 * 2,
      scoreRw: 710,
      scoreMath: 750,
      totalScore: 1460,
      totalQuestions: 44,
      correctCount: 39,
      incorrectCount: 5,
      timeSpentMinutes: 58,
    },
  ]);
}

export function saveTestResult(result: PracticeTestResult): void {
  const results = getTestResults();
  results.unshift(result);
  saveToStorage(STORAGE_KEYS.TEST_RESULTS, results);
}

export function getTargetScore(): number {
  return loadFromStorage<number>(STORAGE_KEYS.TARGET_SCORE, 1530);
}

export function setTargetScore(score: number): void {
  saveToStorage(STORAGE_KEYS.TARGET_SCORE, score);
}

export function calculateTopicMastery(
  questions: Question[],
  solved: Record<string, SolvedRecord>
): { topic: string; total: number; attempted: number; correct: number; percent: number }[] {
  const map: Record<string, { total: number; attempted: number; correct: number }> = {};

  questions.forEach((q) => {
    if (!map[q.topic]) {
      map[q.topic] = { total: 0, attempted: 0, correct: 0 };
    }
    map[q.topic].total++;
    const s = solved[q.id];
    if (s) {
      map[q.topic].attempted++;
      if (s.isCorrect) map[q.topic].correct++;
    }
  });

  return Object.entries(map).map(([topic, data]) => ({
    topic,
    total: data.total,
    attempted: data.attempted,
    correct: data.correct,
    percent: data.attempted > 0 ? Math.round((data.correct / data.attempted) * 100) : 0,
  }));
}
