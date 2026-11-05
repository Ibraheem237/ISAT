export type Subject = 'Reading and Writing' | 'Mathematics';

export type RWTopic =
  | 'Information and Ideas'
  | 'Craft and Structure'
  | 'Expression of Ideas'
  | 'Standard English Conventions';

export type MathTopic =
  | 'Algebra'
  | 'Advanced Math'
  | 'Problem-Solving and Data Analysis'
  | 'Geometry and Trigonometry';

export type Topic = RWTopic | MathTopic;

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type QuestionType = 'Multiple Choice' | 'Student-Produced Response';

export interface AnswerOption {
  letter: 'A' | 'B' | 'C' | 'D';
  text: string;
  explanation: string;
}

export interface Question {
  id: string; // e.g. ISAT-RW-101
  subject: Subject;
  topic: Topic;
  subtopic: string;
  difficulty: Difficulty;
  questionType: QuestionType;
  prompt: string;
  passage?: string; // For Reading & Writing
  tableData?: { headers: string[]; rows: (string | number)[][] };
  figureSvg?: string; // For math geometric/coordinate figures
  options: AnswerOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | string; // Letter or numeric string for SPR
  explanationSummary: string;
  relevantConceptOrFormula: string;
  estimatedTimeSeconds: number;
  tags: string[];
  viewsCount: number;
}

export interface UserAnswerRecord {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
  timestamp: number;
}

export interface PracticeTestModule {
  id: string;
  title: string;
  section: Subject;
  timeLimitMinutes: number;
  questionIds: string[];
}

export interface PracticeTest {
  id: string;
  title: string;
  description: string;
  totalQuestions: number;
  totalTimeMinutes: number;
  modules: PracticeTestModule[];
}

export interface DesmosHack {
  id: string;
  title: string;
  category: 'Algebra' | 'Advanced Math' | 'Systems' | 'Regression' | 'Geometry';
  shortSummary: string;
  howItWorks: string;
  desmosSyntax: string;
  exampleQuestion: {
    prompt: string;
    options: { letter: string; text: string }[];
    correctAnswer: string;
    desmosSolutionStep: string;
  };
  tip: string;
}
