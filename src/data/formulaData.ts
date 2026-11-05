export interface FormulaCategory {
  id: string;
  name: string;
  description: string;
  formulas: {
    name: string;
    formula: string;
    explanation: string;
    satExample?: string;
    desmosTip?: string;
  }[];
}

export const OFFICIAL_SAT_MATH_FORMULAS: FormulaCategory = {
  id: 'official-sat-math',
  name: 'Official SAT Math Reference Sheet',
  description: 'These formulas are provided directly inside the Digital SAT Bluebook testing interface.',
  formulas: [
    {
      name: 'Area of a Circle',
      formula: 'A = \\pi r^2',
      explanation: 'Where r is the radius of the circle. Remember diameter d = 2r.',
      satExample: 'If diameter is 12, radius is 6, so Area = 36π.',
      desmosTip: 'Type pi*r^2 with a slider for r.',
    },
    {
      name: 'Circumference of a Circle',
      formula: 'C = 2\\pi r = \\pi d',
      explanation: 'Distance around the perimeter of the circle.',
      satExample: 'A wheel with radius 3 rolls 5 revolutions: distance = 5 * 2π(3) = 30π.',
    },
    {
      name: 'Area of a Rectangle',
      formula: 'A = \\ell w',
      explanation: 'Length times width. Perimeter P = 2l + 2w.',
    },
    {
      name: 'Area of a Triangle',
      formula: 'A = \\frac{1}{2} b h',
      explanation: 'Base times perpendicular height divided by 2.',
      satExample: 'In a right triangle with legs 6 and 8, area = (1/2)(6)(8) = 24.',
    },
    {
      name: 'Pythagorean Theorem',
      formula: 'a^2 + b^2 = c^2',
      explanation: 'In a right triangle with legs a and b and hypotenuse c.',
      satExample: 'Common triples: 3-4-5, 5-12-13, 7-24-25, 8-15-17.',
    },
    {
      name: 'Special Right Triangle (45°-45°-90°)',
      formula: 'x : x : x\\sqrt{2}',
      explanation: 'Isosceles right triangle. Hypotenuse is leg * √2.',
      satExample: 'Square with side 7 has diagonal length 7√2.',
    },
    {
      name: 'Special Right Triangle (30°-60°-90°)',
      formula: 'x : x\\sqrt{3} : 2x',
      explanation: 'Short leg = x (opposite 30°), Long leg = x√3 (opposite 60°), Hypotenuse = 2x (opposite 90°).',
      satExample: 'If hypotenuse is 10, short leg is 5, long leg is 5√3.',
    },
    {
      name: 'Volume of a Rectangular Prism',
      formula: 'V = \\ell w h',
      explanation: 'Length * width * height.',
    },
    {
      name: 'Volume of a Right Circular Cylinder',
      formula: 'V = \\pi r^2 h',
      explanation: 'Base area (circle) times height.',
      satExample: 'If radius is 3 and height is 10, volume = π(3^2)(10) = 90π.',
    },
    {
      name: 'Volume of a Sphere',
      formula: 'V = \\frac{4}{3} \\pi r^3',
      explanation: 'Volume of a 3D sphere with radius r.',
    },
    {
      name: 'Volume of a Right Circular Cone',
      formula: 'V = \\frac{1}{3} \\pi r^2 h',
      explanation: 'One-third the volume of a cylinder with identical base and height.',
    },
    {
      name: 'Volume of a Pyramid',
      formula: 'V = \\frac{1}{3} B h',
      explanation: 'Where B is the area of the base polygon and h is perpendicular height.',
    },
  ],
};

export const ESSENTIAL_ADVANCED_MATH_FORMULAS: FormulaCategory = {
  id: 'essential-advanced-math',
  name: 'Essential Digital SAT Math Formulas (Not Given on Test)',
  description: 'Crucial formulas frequently tested that you MUST memorize for an 800 in SAT Math.',
  formulas: [
    {
      name: 'Quadratic Formula & Roots',
      formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
      explanation: 'Solves any quadratic equation ax^2 + bx + c = 0 for real or complex solutions.',
      satExample: 'For 2x^2 - 4x - 1 = 0: x = (4 ± √(16 - 4(2)(-1))) / 4 = (4 ± √24) / 4 = 1 ± (√6)/2.',
      desmosTip: 'Find the x-intercepts directly on Desmos by clicking on the gray dots on the x-axis.',
    },
    {
      name: 'Vertex Form & Extreme Coordinates',
      formula: 'y = a(x - h)^2 + k, \\quad h = -\\frac{b}{2a}, \\quad k = f(h)',
      explanation: 'Gives the line of symmetry x = h and the minimum (if a > 0) or maximum (if a < 0) value k.',
      satExample: 'For y = 2x^2 - 8x + 3, h = -(-8)/(2*2) = 2. k = 2(4) - 16 + 3 = -5. Vertex is (2, -5).',
      desmosTip: 'Graph y = ax^2 + bx + c and click the gray dot on the peak or trough.',
    },
    {
      name: 'Discriminant & Number of Real Solutions',
      formula: '\\Delta = b^2 - 4ac',
      explanation: 'Δ > 0: two distinct real roots (2 x-intercepts). Δ = 0: exactly one real root (tangent to x-axis). Δ < 0: zero real roots (no x-intercepts).',
      satExample: 'If ax^2 + bx + c = 0 has no real solutions, then b^2 - 4ac < 0.',
      desmosTip: 'In Desmos, if the parabola does not touch the x-axis, Δ < 0.',
    },
    {
      name: 'Vieta’s Formulas (Sum & Product of Roots)',
      formula: 'r_1 + r_2 = -\\frac{b}{a}, \\quad r_1 \\cdot r_2 = \\frac{c}{a}',
      explanation: 'Find sum and product of solutions directly without solving the quadratic.',
      satExample: 'For 3x^2 - 15x + 7 = 0, Sum = -(-15)/3 = 5, Product = 7/3.',
    },
    {
      name: 'Circle Standard Equation in xy-Plane',
      formula: '(x - h)^2 + (y - k)^2 = r^2',
      explanation: 'Center is (h, k) and radius is r = √(r^2). Beware of signs: (x + 3)^2 means h = -3.',
      satExample: '(x - 4)^2 + (y + 1)^2 = 49 has center (4, -1) and radius r = 7.',
      desmosTip: 'Type the equation directly into Desmos; Desmos graphs circles natively!',
    },
    {
      name: 'Exponential Growth and Decay',
      formula: 'y = a(1 \\pm r)^t = a \\cdot b^t',
      explanation: 'a = initial value, r = rate of growth (+) or decay (-), t = number of elapsed time periods.',
      satExample: 'A population of 5,000 grows 6% annually: y = 5000(1.06)^t.',
    },
    {
      name: 'Compound Interest Formula',
      formula: 'A = P\\left(1 + \\frac{r}{n}\\right)^{nt}',
      explanation: 'P = principal, r = annual interest rate, n = times compounded per year, t = years.',
      satExample: 'Compounded quarterly means n = 4; compounded monthly means n = 12.',
    },
    {
      name: 'Arc Length and Sector Area',
      formula: 's = r\\theta, \\quad A = \\frac{1}{2}r^2\\theta = \\left(\\frac{\\theta^\\circ}{360^\\circ}\\right)\\pi r^2',
      explanation: 'Arc length s and sector area A for central angle θ in radians or degrees.',
      satExample: 'For central angle 60° in circle with r = 6, sector area = (60/360) * π(6^2) = 6π.',
    },
    {
      name: 'Trigonometric Ratios (SOH CAH TOA)',
      formula: '\\sin(\\theta) = \\frac{\\text{Opp}}{\\text{Hyp}}, \\quad \\cos(\\theta) = \\frac{\\text{Adj}}{\\text{Hyp}}, \\quad \\tan(\\theta) = \\frac{\\text{Opp}}{\\text{Adj}}',
      explanation: 'Fundamental ratios in right triangles. Note that tan(θ) = sin(θ) / cos(θ).',
      satExample: 'In a 7-24-25 triangle, sin(A) = 24/25, cos(A) = 7/25, tan(A) = 24/7.',
    },
    {
      name: 'Trigonometric Complementary Angles',
      formula: '\\sin(x) = \\cos(90^\\circ - x) \\iff \\sin(A) = \\cos(B) \\text{ when } A + B = 90^\\circ',
      explanation: 'The sine of an angle equals the cosine of its complementary angle.',
      satExample: 'If sin(3x - 10) = cos(2x + 15), then (3x - 10) + (2x + 15) = 90° => 5x = 85 => x = 17.',
    },
    {
      name: 'Slope and Point-Slope Equation',
      formula: 'm = \\frac{y_2 - y_1}{x_2 - x_1}, \\quad y - y_1 = m(x - x_1)',
      explanation: 'Parallel lines have m1 = m2. Perpendicular lines have m1 * m2 = -1 (negative reciprocal).',
    },
  ],
};

export const RW_CONVENTIONS_CHEAT_SHEET: FormulaCategory = {
  id: 'rw-conventions',
  name: 'SAT Reading & Writing Grammar & Conventions Rules',
  description: 'Master these Standard English and rhetorical principles to score 750+ in RW.',
  formulas: [
    {
      name: 'Clause Boundary Hierarchy (Joining Independent Clauses)',
      formula: 'IC. IC \\quad | \\quad IC; IC \\quad | \\quad IC, + \\text{FANBOYS} + IC \\quad | \\quad IC: IC / \\text{List}',
      explanation: 'An Independent Clause (IC) contains a subject and conjugated verb and forms a complete thought. Joining two ICs with only a comma creates a COMMA SPLICE (always wrong on SAT). Joining with no punctuation creates a RUN-ON.',
      satExample: 'Wrong: "The experiment concluded, researchers published findings." Right: "The experiment concluded; researchers published findings."',
    },
    {
      name: 'Semicolon vs Colon Rules',
      formula: '; = . \\quad \\text{vs} \\quad : = \\text{Must have IC before, explains/elaborates after}',
      explanation: 'A semicolon (;) functions identically to a period. A colon (:) REQUIRES a complete independent clause before it, followed by a clarification, quote, or list.',
      satExample: 'Right: "She packed three items: a map, a compass, and a notebook."',
    },
    {
      name: 'Non-Essential Elements & Double Commas / Dashes',
      formula: '\\text{IC start}, \\text{extra info}, \\text{IC end} \\quad \\text{or} \\quad \\text{IC start} - \\text{extra info} - \\text{IC end}',
      explanation: 'If you remove the clause between commas or dashes, the remaining sentence must still be grammatically complete and convey the core thought.',
      satExample: 'Marie Curie, a Polish-born physicist, won two Nobel Prizes.',
    },
    {
      name: 'Transition Word Categories',
      formula: '\\text{Addition (Moreover) } \\cdot \\text{ Contrast (However, Nonetheless) } \\cdot \\text{ Cause/Effect (Thus, Therefore) } \\cdot \\text{ Example (For instance)}',
      explanation: 'Read sentence 1 and sentence 2 independently without the transition. Determine if idea 2 supports, contradicts, results from, or illustrates idea 1.',
    },
    {
      name: 'Rhetorical Synthesis 3-Step Method',
      formula: '1. Read the PROMPT GOAL first \\to 2. Eliminate options that don’t address the goal \\to 3. Confirm factual match to notes',
      explanation: 'Never read all notes first. Look at the last sentence: "The student wants to [X]". Only one option accomplishes [X] using the notes.',
      satExample: 'If the goal is to emphasize a contrast, look for options with words like "While", "Although", or "Unlike".',
    },
    {
      name: 'Subject-Verb Agreement with Intervening Prepositional Phrases',
      formula: '\\text{Subject [prepositional phrase]} + \\text{Verb}',
      explanation: 'The verb must agree in number (singular vs plural) with the actual head noun, NOT the noun inside a prepositional phrase.',
      satExample: '"The discovery of ancient ceramic vessels [was, not were] celebrated by archaeologists."',
    },
  ],
};
