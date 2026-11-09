import { PracticeTest } from '../types';
import { ALL_QUESTIONS } from './questionDatabase';

// Select question IDs cleanly distributed across topics
const rwQuestions = ALL_QUESTIONS.filter((q) => q.subject === 'Reading and Writing');
const mathQuestions = ALL_QUESTIONS.filter((q) => q.subject === 'Mathematics');

export const PRACTICE_TESTS: PracticeTest[] = [
  {
    id: 'isat-practice-test-1',
    title: 'Digital SAT Official Diagnostic Exam 1',
    description: 'Realistic exam reflecting the 2026 Digital SAT structure. Includes adaptive module simulation, timer, Desmos calculator, and instant scored analytics.',
    totalQuestions: 44,
    totalTimeMinutes: 64,
    modules: [
      {
        id: 'test-1-rw-m1',
        title: 'Reading and Writing – Module 1',
        section: 'Reading and Writing',
        timeLimitMinutes: 32,
        questionIds: rwQuestions.slice(0, 22).map((q) => q.id),
      },
      {
        id: 'test-1-math-m1',
        title: 'Mathematics – Module 1',
        section: 'Mathematics',
        timeLimitMinutes: 32,
        questionIds: mathQuestions.slice(0, 22).map((q) => q.id),
      },
    ],
  },
  {
    id: 'isat-math-sprint',
    title: 'Digital SAT Math Rapid Section Test',
    description: 'High-intensity math section test covering Algebra, Advanced Math, Problem-Solving, and Geometry with integrated Desmos graphing calculator.',
    totalQuestions: 22,
    totalTimeMinutes: 35,
    modules: [
      {
        id: 'sprint-math-m1',
        title: 'Mathematics Section Test',
        section: 'Mathematics',
        timeLimitMinutes: 35,
        questionIds: mathQuestions.slice(22, 44).map((q) => q.id),
      },
    ],
  },
  {
    id: 'isat-rw-sprint',
    title: 'Digital SAT Reading & Writing Sprint',
    description: 'Timed Reading and Writing section testing Craft and Structure, Information and Ideas, Standard English Conventions, and Expression of Ideas.',
    totalQuestions: 27,
    totalTimeMinutes: 32,
    modules: [
      {
        id: 'sprint-rw-m1',
        title: 'Reading and Writing Section Test',
        section: 'Reading and Writing',
        timeLimitMinutes: 32,
        questionIds: rwQuestions.slice(22, 49).map((q) => q.id),
      },
    ],
  },
  {
    id: 'isat-hard-750-plus',
    title: 'Elite 750+ Hard-Tier SAT Challenge',
    description: 'Targeted challenge set containing exclusively "Hard" difficulty questions from both sections designed for students aiming for 1500-1600.',
    totalQuestions: 20,
    totalTimeMinutes: 30,
    modules: [
      {
        id: 'challenge-hard-m1',
        title: '750+ Challenge Set',
        section: 'Mathematics',
        timeLimitMinutes: 30,
        questionIds: ALL_QUESTIONS.filter((q) => q.difficulty === 'Hard').slice(0, 20).map((q) => q.id),
      },
    ],
  },
];
