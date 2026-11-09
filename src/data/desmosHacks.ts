import { DesmosHack } from '../types';

export const DESMOS_HACKS: DesmosHack[] = [
  {
    id: 'desmos-systems-intersection',
    title: 'Instant System of Equations Solver',
    category: 'Systems',
    shortSummary: 'Find solutions to any linear or nonlinear system in 5 seconds by clicking intersections.',
    howItWorks:
      'On the Digital SAT, you do not need to do tedious substitution or elimination. Type both equations into Desmos exactly as written (e.g. 3x − 4y = 12 and y = 2x² − 5x + 1). Desmos plots both graphs immediately. Click on the intersection point: Desmos displays a gray dot with the exact (x, y) coordinates.',
    desmosSyntax: 'Line 1: 3x - 4y = 12\nLine 2: 2x + 5y = 31',
    exampleQuestion: {
      prompt: 'If (x, y) is a solution to the system of equations 4x + 3y = 25 and 2x − y = 5, what is the value of x + y?',
      options: [
        { letter: 'A', text: '4' },
        { letter: 'B', text: '7' },
        { letter: 'C', text: '9' },
        { letter: 'D', text: '12' },
      ],
      correctAnswer: 'B',
      desmosSolutionStep:
        'Enter "4x + 3y = 25" on Line 1. Enter "2x - y = 5" on Line 2. Click the intersection point: it shows (4, 3). The question asks for x + y, so 4 + 3 = 7. Choose B.',
    },
    tip: 'If lines are parallel and never intersect, there are 0 solutions. If lines overlap completely, there are infinitely many solutions.',
  },
  {
    id: 'desmos-quadratic-roots-extrema',
    title: 'Quadratic Roots, Vertex & Extrema',
    category: 'Advanced Math',
    shortSummary: 'Identify x-intercepts, minimums, maximums, and axis of symmetry without factoring.',
    howItWorks:
      'Type the quadratic function directly into Desmos. Desmos automatically highlights key feature points with gray dots: the x-intercepts (zeros / roots), the y-intercept, and the vertex (peak or valley). Click the vertex dot to read (h, k).',
    desmosSyntax: 'y = -2x² + 12x - 10',
    exampleQuestion: {
      prompt: 'What is the maximum value of the function g(x) = −3x² + 18x − 15?',
      options: [
        { letter: 'A', text: '3' },
        { letter: 'B', text: '12' },
        { letter: 'C', text: '18' },
        { letter: 'D', text: '21' },
      ],
      correctAnswer: 'B',
      desmosSolutionStep:
        'Type "y = -3x^2 + 18x - 15" into Desmos. The parabola opens downward. Click the top point (vertex): it shows (3, 12). The maximum VALUE refers to the y-coordinate, which is 12.',
    },
    tip: 'Always distinguish between "the value of x where the minimum occurs" (x-coordinate) versus "the minimum value of the function" (y-coordinate).',
  },
  {
    id: 'desmos-regression-table',
    title: 'Linear & Exponential Regression Hack',
    category: 'Regression',
    shortSummary: 'Find unknown slopes, y-intercepts, or growth constants from tables and points instantly.',
    howItWorks:
      'Click the "+" button in Desmos and select "Table". Input the given (x, y) coordinates. On the next line, type "y1 ~ mx1 + b" for linear, or "y1 ~ a(b)ˣ¹" for exponential. Desmos instantly calculates m, b, a, and r² with machine precision.',
    desmosSyntax: 'y1 ~ mx1 + b   or   y1 ~ a*bˣ¹',
    exampleQuestion: {
      prompt: 'A line passes through the points (−2, 11) and (4, −1). What is the y-intercept of the line?',
      options: [
        { letter: 'A', text: '5' },
        { letter: 'B', text: '7' },
        { letter: 'C', text: '-2' },
        { letter: 'D', text: '9' },
      ],
      correctAnswer: 'B',
      desmosSolutionStep:
        'In Desmos, create a table with x1 = [-2, 4] and y1 = [11, -1]. Below it, type "y1 ~ mx1 + b". Desmos shows m = -2 and b = 7. The y-intercept is 7.',
    },
    tip: 'Use the tilde (~) symbol, which is located on the key next to 1 on your keyboard or in the Desmos ABC keyboard.',
  },
  {
    id: 'desmos-slider-equivalence',
    title: 'Slider Method for "Equivalent Expressions"',
    category: 'Algebra',
    shortSummary: 'Verify polynomial equivalence or solve for unknown constants without tedious algebra.',
    howItWorks:
      'When asked "Which expression is equivalent to (2x − 3)(x + 4) − 5x?", you can simply type the original expression on line 1, and each of the 4 answer choices on lines 2 through 5. The correct answer will produce a graph that perfectly overlaps the original expression!',
    desmosSyntax: 'f(x) = (2x - 3)(x + 4) - 5x\ng(x) = 2x² + 5x - 12 - 5x\n...',
    exampleQuestion: {
      prompt: 'Which of the following is equivalent to (3x − 2)² − (x + 4)?',
      options: [
        { letter: 'A', text: '9x² − 13x' },
        { letter: 'B', text: '9x² − 13x + 0' },
        { letter: 'C', text: '9x² + 13x' },
        { letter: 'D', text: '9x² − 11x − 2' },
      ],
      correctAnswer: 'A',
      desmosSolutionStep:
        'Type "y = (3x - 2)^2 - (x + 4)". Then graph each answer option. The curve for 9x² − 13x lies exactly on top of the original curve at every single point.',
    },
    tip: 'If there is an unknown constant like c or k, type the equation with k and Desmos will prompt: "add slider: k". Drag the slider until conditions match.',
  },
  {
    id: 'desmos-circle-equations',
    title: 'Circle Equations without Completing the Square',
    category: 'Geometry',
    shortSummary: 'Graph un-factored circle equations directly to find radius, diameter, and center.',
    howItWorks:
      'College Board loves giving circle equations in general form: x² + y² + Ax + By + C = 0. Instead of spending 2 minutes completing the square by hand, type the equation directly into Desmos. Desmos graphs the circle instantly! Click the leftmost and rightmost points to find the diameter, or read the center (h, k).',
    desmosSyntax: 'x² + y² - 6x + 8y - 24 = 0',
    exampleQuestion: {
      prompt: 'The circle x² + y² − 10x + 6y + 9 = 0 has center (h, k) and radius r. What is the value of r?',
      options: [
        { letter: 'A', text: '3' },
        { letter: 'B', text: '4' },
        { letter: 'C', text: '5' },
        { letter: 'D', text: '7' },
      ],
      correctAnswer: 'C',
      desmosSolutionStep:
        'Type "x^2 + y^2 - 10x + 6y + 9 = 0" into Desmos. Look at the circle: its horizontal span is from x = 0 to x = 10, meaning diameter = 10, so radius r = 5.',
    },
    tip: 'Radius is half the distance between the two horizontal or vertical tangent points.',
  },
];
