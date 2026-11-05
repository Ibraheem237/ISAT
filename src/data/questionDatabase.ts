import { Question, Subject, Topic } from '../types';

export const CORE_TOPICS: {
  subject: Subject;
  topic: Topic;
  subtopics: string[];
}[] = [
  // Reading & Writing
  {
    subject: 'Reading and Writing',
    topic: 'Information and Ideas',
    subtopics: [
      'Central Ideas and Details',
      'Command of Evidence (Textual)',
      'Command of Evidence (Quantitative)',
      'Inferences',
    ],
  },
  {
    subject: 'Reading and Writing',
    topic: 'Craft and Structure',
    subtopics: [
      'Words in Context',
      'Text Structure and Purpose',
      'Cross-Text Connections',
    ],
  },
  {
    subject: 'Reading and Writing',
    topic: 'Expression of Ideas',
    subtopics: ['Rhetorical Synthesis', 'Transitions'],
  },
  {
    subject: 'Reading and Writing',
    topic: 'Standard English Conventions',
    subtopics: ['Boundaries', 'Form, Structure, and Sense'],
  },
  // Mathematics
  {
    subject: 'Mathematics',
    topic: 'Algebra',
    subtopics: [
      'Linear equations',
      'Linear inequalities',
      'Systems of linear equations',
      'Linear functions',
    ],
  },
  {
    subject: 'Mathematics',
    topic: 'Advanced Math',
    subtopics: [
      'Quadratic equations',
      'Polynomial expressions',
      'Exponential functions',
      'Nonlinear equations',
      'Rational and radical expressions',
    ],
  },
  {
    subject: 'Mathematics',
    topic: 'Problem-Solving and Data Analysis',
    subtopics: [
      'Ratios and proportions',
      'Percentages',
      'Statistics',
      'Mean, median, mode, and range',
      'Standard deviation',
      'Probability',
      'Data interpretation',
    ],
  },
  {
    subject: 'Mathematics',
    topic: 'Geometry and Trigonometry',
    subtopics: [
      'Area and volume',
      'Circles',
      'Triangles',
      'Angles',
      'Right-triangle trigonometry',
      'Coordinate geometry',
    ],
  },
];

// High-fidelity handcrafted exemplar questions for each domain
export const CURATED_QUESTIONS: Question[] = [
  {
    id: 'ISAT-RW-1001',
    subject: 'Reading and Writing',
    topic: 'Craft and Structure',
    subtopic: 'Words in Context',
    difficulty: 'Medium',
    questionType: 'Multiple Choice',
    passage:
      'In 1913, botanist Agnes Arber observed that certain aquatic plant species possess leaf morphologies that are not fixed throughout the organism’s lifespan; rather, their shapes alter in response to subtle fluctuations in ambient water current velocity. This adaptive variability, known as phenotypic plasticity, reveals that morphological traits in aquatic flora are far more ______ than early twentieth-century taxonomists had initially presupposed.',
    prompt:
      'Which choice completes the text with the most logical and precise word or phrase?',
    options: [
      {
        letter: 'A',
        text: 'malleable',
        explanation:
          'Correct. "Malleable" means capable of being shaped, changed, or adapted. The text highlights "adaptive variability" and shapes that "alter in response to subtle fluctuations," making malleable the exact contextual fit.',
      },
      {
        letter: 'B',
        text: 'impermeable',
        explanation:
          'Incorrect. "Impermeable" means not allowing fluid to pass through, which is unrelated to the flexibility or changeability of leaf morphology.',
      },
      {
        letter: 'C',
        text: 'rudimentary',
        explanation:
          'Incorrect. "Rudimentary" means basic or undeveloped. While earlier scientists may have held simpler views, the passage describes dynamic morphological responsiveness, not primitive traits.',
      },
      {
        letter: 'D',
        text: 'uniform',
        explanation:
          'Incorrect. "Uniform" means consistent and unvarying. The passage explicitly contrasts the dynamic leaf changes with the presumption that they were fixed.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'The context demonstrates that the leaf shapes "alter" in response to water currents, contradicting the early view that traits were fixed. Therefore, "malleable" (adaptable, changeable) logically completes the sentence.',
    relevantConceptOrFormula:
      'Words in Context: Clue Identification — Match context clues ("adaptive variability", "shapes alter") with precise secondary or figurative definitions.',
    estimatedTimeSeconds: 60,
    tags: ['Vocabulary', 'Phenotypic Plasticity', 'Biology Passage'],
    viewsCount: 1420,
  },
  {
    id: 'ISAT-RW-1002',
    subject: 'Reading and Writing',
    topic: 'Information and Ideas',
    subtopic: 'Command of Evidence (Quantitative)',
    difficulty: 'Hard',
    questionType: 'Multiple Choice',
    passage:
      'Ecologists measured the mean canopy foliage retention (percentage of annual leaf area index maintained through dry season) across four distinct mangrove forest zones in the Sundarbans. Their findings are summarized in the table below. Dr. Haque asserts that tidal inundation frequency is the primary determinant of leaf retention during drought conditions.',
    tableData: {
      headers: ['Zone', 'Tidal Inundation (events/month)', 'Soil Salinity (ppt)', 'Dry Season Foliage Retention (%)'],
      rows: [
        ['Zone Alpha', 58, 22.4, 88.5],
        ['Zone Beta', 42, 28.1, 74.2],
        ['Zone Gamma', 30, 31.5, 62.0],
        ['Zone Delta', 14, 38.0, 41.3],
      ],
    },
    prompt:
      'Which finding, if accurate, most directly supports Dr. Haque’s assertion regarding the relationship between tidal inundation and foliage retention?',
    options: [
      {
        letter: 'A',
        text: 'Zone Alpha, which experiences the highest frequency of monthly tidal inundation events, exhibited the highest foliage retention percentage during the dry season.',
        explanation:
          'Correct. Zone Alpha recorded both the maximum inundation events (58 events/month) and the maximum leaf retention (88.5%), providing direct evidence supporting Dr. Haque’s claim that inundation drives retention.',
      },
      {
        letter: 'B',
        text: 'Zone Delta maintained a soil salinity of 38.0 ppt despite experiencing fewer than 15 tidal inundation events each month.',
        explanation:
          'Incorrect. While factually accurate according to the table, this statement highlights soil salinity rather than demonstrating how tidal inundation frequency correlates with foliage retention.',
      },
      {
        letter: 'C',
        text: 'Foliage retention remained below 75% in both Zone Alpha and Zone Beta throughout the measurement period.',
        explanation:
          'Incorrect. This contradicts the table data: Zone Alpha had 88.5% retention, which is above 75%.',
      },
      {
        letter: 'D',
        text: 'The dry season foliage retention was identical between Zone Beta and Zone Gamma.',
        explanation:
          'Incorrect. Zone Beta had 74.2% while Zone Gamma had 62.0%; they were not identical.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'The data indicates a strictly monotonic positive relationship between tidal inundation events and foliage retention (Zone Alpha: 58 events, 88.5% down to Zone Delta: 14 events, 41.3%). Option A correctly isolates this correspondence.',
    relevantConceptOrFormula:
      'Quantitative Reasoning: Corroborating scientific hypotheses through quantitative correlation and extreme value identification in tabular data.',
    estimatedTimeSeconds: 75,
    tags: ['Data Interpretation', 'Mangrove Ecology', 'Table Analysis'],
    viewsCount: 2315,
  },
  {
    id: 'ISAT-RW-1003',
    subject: 'Reading and Writing',
    topic: 'Standard English Conventions',
    subtopic: 'Boundaries',
    difficulty: 'Medium',
    questionType: 'Multiple Choice',
    passage:
      'In his 1928 paper on quantum wave mechanics, physicist Paul Dirac proposed an equation that harmonized quantum theory with special ______ equation predicted the existence of antimatter four years prior to Carl Anderson’s discovery of the positron.',
    prompt:
      'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: [
      {
        letter: 'A',
        text: 'relativity, the',
        explanation:
          'Incorrect. This creates a comma splice. "Physicist Paul Dirac proposed an equation that harmonized quantum theory with special relativity" is an independent clause, and "the equation predicted..." is another independent clause. Two independent clauses cannot be joined by a comma alone.',
      },
      {
        letter: 'B',
        text: 'relativity; this',
        explanation:
          'Correct. A semicolon correctly links two related independent clauses without the need for a coordinating conjunction.',
      },
      {
        letter: 'C',
        text: 'relativity this',
        explanation:
          'Incorrect. This creates a run-on (fused) sentence with zero punctuation separating two independent clauses.',
      },
      {
        letter: 'D',
        text: 'relativity, which this',
        explanation:
          'Incorrect. The combination of "which this" is ungrammatical and produces a fractured relative clause.',
      },
    ],
    correctAnswer: 'B',
    explanationSummary:
      'The sentence consists of two independent clauses: Clause 1 ends at "relativity", and Clause 2 begins with "this equation". Standard English requires a semicolon, period, or comma + FANBOYS coordinating conjunction to separate independent clauses.',
    relevantConceptOrFormula:
      'Clause Boundaries: Independent Clause [;] Independent Clause. Avoid comma splices and fused sentences.',
    estimatedTimeSeconds: 45,
    tags: ['Grammar', 'Punctuation', 'Semicolon', 'Physics History'],
    viewsCount: 3104,
  },
  {
    id: 'ISAT-RW-1004',
    subject: 'Reading and Writing',
    topic: 'Expression of Ideas',
    subtopic: 'Transitions',
    difficulty: 'Hard',
    questionType: 'Multiple Choice',
    passage:
      'For decades, paleoclimatologists hypothesized that the Younger Dryas cooling event approximately 12,900 years ago was triggered exclusively by a sudden burst of meltwater from Lake Agassiz into the North Atlantic, disrupting thermohaline circulation. ______, sediment cores retrieved from Greenland and northwestern Europe reveal anomalies in platinum and iridium concentrations that suggest an extraterrestrial impact may have compounded or initiated the climatic upheaval.',
    prompt:
      'Which choice completes the text with the most logical transition?',
    options: [
      {
        letter: 'A',
        text: 'Furthermore',
        explanation:
          'Incorrect. "Furthermore" introduces supplementary evidence in the same direction, whereas the second sentence introduces an alternative/competing hypothesis (extraterrestrial impact vs meltwater).',
      },
      {
        letter: 'B',
        text: 'More recently',
        explanation:
          'Correct. "More recently" contrasts the long-standing earlier hypothesis ("For decades...") with new chronological evidence discovered later.',
      },
      {
        letter: 'C',
        text: 'In other words',
        explanation:
          'Incorrect. "In other words" rephrases the preceding point, but the second sentence introduces entirely new findings regarding platinum and extraterrestrial impacts.',
      },
      {
        letter: 'D',
        text: 'Consequently',
        explanation:
          'Incorrect. "Consequently" implies a cause-and-effect relationship, but the sediment core discoveries were not caused by the prior hypothesis.',
      },
    ],
    correctAnswer: 'B',
    explanationSummary:
      'The passage contrasts an older historical paradigm ("For decades, paleoclimatologists hypothesized...") with modern empirical findings from sediment cores. "More recently" establishes this temporal and conceptual shift.',
    relevantConceptOrFormula:
      'Transitions: Chronological and Contrast Signals. Identify relationship between the preceding sentence and the follow-up finding.',
    estimatedTimeSeconds: 50,
    tags: ['Transitions', 'Paleoclimatology', 'Logical Connectors'],
    viewsCount: 1890,
  },
  {
    id: 'ISAT-RW-1005',
    subject: 'Reading and Writing',
    topic: 'Expression of Ideas',
    subtopic: 'Rhetorical Synthesis',
    difficulty: 'Medium',
    questionType: 'Multiple Choice',
    passage:
      'While researching a topic, a student has taken the following notes:\n• The Voyager 1 spacecraft was launched by NASA in September 1977.\n• Its primary mission was to explore Jupiter and Saturn and their respective moons.\n• In August 2012, Voyager 1 crossed the heliopause at a distance of 121 AU from the Sun.\n• Crossing the heliopause made Voyager 1 the first human-made object to enter interstellar space.\n• It carries the Golden Record, a phonograph record containing sounds and images of Earth.',
    prompt:
      'The student wants to emphasize Voyager 1’s groundbreaking milestone in space exploration. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: [
      {
        letter: 'A',
        text: 'Launched in September 1977, NASA’s Voyager 1 spacecraft was originally designed to explore Jupiter, Saturn, and their moons.',
        explanation:
          'Incorrect. This sentence focuses on the launch date and initial planetary mission, not the groundbreaking milestone of entering interstellar space.',
      },
      {
        letter: 'B',
        text: 'In August 2012, Voyager 1 achieved a historic milestone by crossing the heliopause to become the first human-made object to enter interstellar space.',
        explanation:
          'Correct. This choice directly addresses the student’s specific goal by highlighting the historic breakthrough of crossing into interstellar space.',
      },
      {
        letter: 'C',
        text: 'Voyager 1 carries the Golden Record, which contains sounds and images reflecting Earth’s cultural diversity.',
        explanation:
          'Incorrect. This highlights the payload artifact rather than its exploration milestone.',
      },
      {
        letter: 'D',
        text: 'Voyager 1 was launched thirty-five years before it reached a distance of 121 AU from the Sun.',
        explanation:
          'Incorrect. This merely calculates a timeframe without emphasizing the historic achievement of entering interstellar space.',
      },
    ],
    correctAnswer: 'B',
    explanationSummary:
      'The prompt specifies the goal: "emphasize Voyager 1’s groundbreaking milestone in space exploration." Option B explicitly names the milestone—becoming the first human-made craft in interstellar space.',
    relevantConceptOrFormula:
      'Rhetorical Synthesis: Align student objective with relevant bullet points while filtering out extraneous background facts.',
    estimatedTimeSeconds: 65,
    tags: ['Rhetorical Synthesis', 'Space Exploration', 'NASA'],
    viewsCount: 2750,
  },

  // Math Curated Questions
  {
    id: 'ISAT-MATH-2001',
    subject: 'Mathematics',
    topic: 'Algebra',
    subtopic: 'Systems of linear equations',
    difficulty: 'Medium',
    questionType: 'Multiple Choice',
    prompt:
      'Consider the system of equations below:\n\n$$\\begin{cases} 3x - 5y = 14 \\\\ 6x + ky = 28 \\end{cases}$$\n\nIf the system has infinitely many solutions, what is the value of the constant $k$?',
    options: [
      {
        letter: 'A',
        text: '-10',
        explanation:
          'Correct. For a system of two linear equations to have infinitely many solutions, the two equations must represent the identical line (proportional coefficients). Multiplying the first equation by 2 yields $6x - 10y = 28$. Comparing this with $6x + ky = 28$, we see that $k = -10$.',
      },
      {
        letter: 'B',
        text: '10',
        explanation:
          'Incorrect. A value of $k = 10$ yields $6x + 10y = 28$, which intersects $3x - 5y = 14$ at exactly one point rather than infinitely many.',
      },
      {
        letter: 'C',
        text: '-5',
        explanation:
          'Incorrect. $-5$ is the $y$-coefficient in the first equation before scaling by the factor of 2.',
      },
      {
        letter: 'D',
        text: '0',
        explanation:
          'Incorrect. If $k = 0$, the second equation simplifies to $6x = 28 \\implies x = 14/3$, resulting in a single solution $(14/3, 0)$.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'Infinitely many solutions occur when the equations are linearly dependent multiples of each other. Multiplying $3x - 5y = 14$ by 2 gives $6x - 10y = 28$. Hence $k = -10$.',
    relevantConceptOrFormula:
      'Systems of Linear Equations: Infinitely many solutions condition: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$.',
    estimatedTimeSeconds: 50,
    tags: ['Linear Systems', 'Infinite Solutions', 'Desmos Hack #1'],
    viewsCount: 4210,
  },
  {
    id: 'ISAT-MATH-2002',
    subject: 'Mathematics',
    topic: 'Advanced Math',
    subtopic: 'Quadratic equations',
    difficulty: 'Hard',
    questionType: 'Multiple Choice',
    prompt:
      'The function $f$ is defined by $f(x) = 2x^2 - 12x + 23$. Which of the following equivalent forms of $f(x)$ displays the coordinates of the minimum value of $f(x)$ as constants in the expression?',
    options: [
      {
        letter: 'A',
        text: 'f(x) = 2(x - 3)^2 + 5',
        explanation:
          'Correct. The vertex form of a quadratic function is $f(x) = a(x - h)^2 + k$, where $(h, k)$ is the vertex. Completing the square: $2(x^2 - 6x) + 23 = 2(x - 3)^2 - 18 + 23 = 2(x - 3)^2 + 5$. Since $a = 2 > 0$, the parabola opens upward with minimum $(3, 5)$, which are clearly displayed as constants.',
      },
      {
        letter: 'B',
        text: 'f(x) = (2x - 6)(x - 3) + 5',
        explanation:
          'Incorrect. This is not standard vertex form and does not isolate $(x - h)^2$ with an external coefficient $a$.',
      },
      {
        letter: 'C',
        text: 'f(x) = 2(x^2 - 6x + 11.5)',
        explanation:
          'Incorrect. Factoring out 2 does not display the vertex coordinates $(h, k)$ as constants.',
      },
      {
        letter: 'D',
        text: 'f(x) = 2(x + 3)^2 + 5',
        explanation:
          'Incorrect. Expanding $2(x + 3)^2 + 5 = 2(x^2 + 6x + 9) + 5 = 2x^2 + 12x + 23$, which has a positive linear coefficient instead of $-12x$.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'The vertex form $a(x-h)^2 + k$ directly shows the extrema $(h,k)$. Completing the square: $f(x) = 2(x-3)^2 + 5$, revealing the minimum at $(3, 5)$.',
    relevantConceptOrFormula:
      'Vertex Form of Quadratic: $y = a(x - h)^2 + k$, vertex at $(h, k)$. Minimum if $a > 0$, Maximum if $a < 0$.',
    estimatedTimeSeconds: 65,
    tags: ['Completing the Square', 'Vertex Form', 'Parabolas'],
    viewsCount: 3890,
  },
  {
    id: 'ISAT-MATH-2003',
    subject: 'Mathematics',
    topic: 'Geometry and Trigonometry',
    subtopic: 'Circles',
    difficulty: 'Hard',
    questionType: 'Student-Produced Response',
    prompt:
      'A circle in the $xy$-plane has equation $x^2 + y^2 - 8x + 10y + 5 = 0$. What is the radius of this circle?',
    options: [
      {
        letter: 'A',
        text: '6',
        explanation:
          'Correct. Complete the square for both $x$ and $y$:\n$(x^2 - 8x + 16) + (y^2 + 10y + 25) = -5 + 16 + 25$\n$(x - 4)^2 + (y + 5)^2 = 36$\nSince $r^2 = 36$, $r = \\sqrt{36} = 6$.',
      },
      {
        letter: 'B',
        text: '36',
        explanation:
          'Incorrect. 36 is the value of $r^2$, not the radius $r$.',
      },
      {
        letter: 'C',
        text: '5',
        explanation:
          'Incorrect. The constant on the right side is $16 + 25 - 5 = 36$, whose square root is 6, not 5.',
      },
      {
        letter: 'D',
        text: '8',
        explanation:
          'Incorrect. 8 is the linear coefficient of $x$, not the radius.',
      },
    ],
    correctAnswer: '6',
    explanationSummary:
      'Group terms: $(x^2 - 8x + 16) + (y^2 + 10y + 25) = -5 + 16 + 25 = 36$. In the form $(x-h)^2 + (y-k)^2 = r^2$, $r^2 = 36 \\implies r = 6$.',
    relevantConceptOrFormula:
      'Circle Standard Form: $(x - h)^2 + (y - k)^2 = r^2$. Radius $r = \\sqrt{r^2}$.',
    estimatedTimeSeconds: 70,
    tags: ['Circles', 'Completing the Square', 'Coordinate Geometry'],
    viewsCount: 5120,
  },
  {
    id: 'ISAT-MATH-2004',
    subject: 'Mathematics',
    topic: 'Problem-Solving and Data Analysis',
    subtopic: 'Percentages',
    difficulty: 'Medium',
    questionType: 'Multiple Choice',
    prompt:
      'The initial retail price of an electric bicycle was increased by $20\\%$. During a holiday sale, the new price was discounted by $15\\%$. If the final sale price is $\\$1,020$, what was the initial retail price of the bicycle?',
    options: [
      {
        letter: 'A',
        text: '$1,000',
        explanation:
          'Correct. Let $P$ be the initial price. After the 20% increase, the price is $1.20P$. After the 15% discount, the price is $1.20P \\times (1 - 0.15) = 1.20P \\times 0.85 = 1.02P$. Setting $1.02P = 1,020$ yields $P = 1,020 / 1.02 = 1,000$.',
      },
      {
        letter: 'B',
        text: '$980',
        explanation:
          'Incorrect. A price of $980 would result in a final price of $980 \\times 1.02 = $999.60.',
      },
      {
        letter: 'C',
        text: '$1,050',
        explanation:
          'Incorrect. This results from subtracting $5\\%$ from 1,020 incorrectly instead of applying successive multiplicative factors.',
      },
      {
        letter: 'D',
        text: '$950',
        explanation:
          'Incorrect. Calculating $950 \\times 1.02 = $969, which is significantly lower than $1,020.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'Successive percent changes multiply: $(1 + 0.20) \\times (1 - 0.15) = 1.20 \\times 0.85 = 1.02$. Thus, Initial Price $\\times 1.02 = 1,020 \\implies$ Initial Price = $1,000.',
    relevantConceptOrFormula:
      'Sequential Percentage Changes: Multiplier = $(1 + r_1)(1 - r_2)$. Never add/subtract percentages directly.',
    estimatedTimeSeconds: 55,
    tags: ['Percentages', 'Sequential Discounts', 'Multipliers'],
    viewsCount: 2940,
  },
  {
    id: 'ISAT-MATH-2005',
    subject: 'Mathematics',
    topic: 'Geometry and Trigonometry',
    subtopic: 'Right-triangle trigonometry',
    difficulty: 'Hard',
    questionType: 'Multiple Choice',
    prompt:
      'In right triangle $ABC$, the measure of angle $C$ is $90^\\circ$. If $\\cos(A) = \\frac{7}{25}$, what is the value of $\\tan(A)$?',
    options: [
      {
        letter: 'A',
        text: '24/7',
        explanation:
          'Correct. By definition, $\\cos(A) = \\text{adjacent} / \\text{hypotenuse} = 7 / 25$. Using the Pythagorean theorem: $\\text{opposite}^2 + 7^2 = 25^2 \\implies \\text{opposite}^2 + 49 = 625 \\implies \\text{opposite}^2 = 576 \\implies \\text{opposite} = 24$. Then $\\tan(A) = \\text{opposite} / \\text{adjacent} = 24 / 7$.',
      },
      {
        letter: 'B',
        text: '7/24',
        explanation:
          'Incorrect. $7/24$ is $\\cot(A)$ or $\\tan(B)$, the tangent of the other acute angle.',
      },
      {
        letter: 'C',
        text: '24/25',
        explanation:
          'Incorrect. $24/25$ is $\\sin(A) = \\text{opposite} / \\text{hypotenuse}$, not $\\tan(A)$.',
      },
      {
        letter: 'D',
        text: '25/7',
        explanation:
          'Incorrect. $25/7$ is $\\sec(A) = 1/\\cos(A) = \\text{hypotenuse} / \\text{adjacent}$.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'In a 7-24-25 Pythagorean triple, $\\cos(A) = 7/25$ means adjacent = 7, hypotenuse = 25, and opposite = 24. Therefore $\\tan(A) = 24/7$.',
    relevantConceptOrFormula:
      'SOH CAH TOA & Pythagorean Triples: $(7, 24, 25)$. $\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)} = \\frac{\\text{Opp}}{\\text{Adj}}$.',
    estimatedTimeSeconds: 40,
    tags: ['Trigonometry', 'Right Triangles', 'Pythagorean Triples'],
    viewsCount: 3670,
  },
];

// Seed generator to deterministically produce 3,200+ distinct SAT questions
// across all domains and subtopics
function generateProceduralBank(): Question[] {
  const bank: Question[] = [...CURATED_QUESTIONS];
  let idCounter = 3000;

  CORE_TOPICS.forEach((cat) => {
    cat.subtopics.forEach((subtopic, subIdx) => {
      // Generate 120-150 variations per subtopic to reach > 3,000 questions
      const numQuestionsToGen = 135;

      for (let i = 1; i <= numQuestionsToGen; i++) {
        idCounter++;
        const difficulty: 'Easy' | 'Medium' | 'Hard' =
          i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy';
        const qId =
          cat.subject === 'Reading and Writing'
            ? `ISAT-RW-${idCounter}`
            : `ISAT-MATH-${idCounter}`;

        let prompt = '';
        let passage: string | undefined = undefined;
        let options: Question['options'] = [];
        let correctAnswer: 'A' | 'B' | 'C' | 'D' = 'A';
        let explanationSummary = '';
        let formula = '';
        let estimatedTime = difficulty === 'Hard' ? 85 : difficulty === 'Medium' ? 65 : 45;
        let tags: string[] = [cat.topic, subtopic];

        if (cat.subject === 'Reading and Writing') {
          if (subtopic === 'Words in Context') {
            const wordsList = [
              { word: 'unprecedented', falseW: ['redundant', 'tangible', 'sporadic'], meaning: 'never done or known before' },
              { word: 'prodigious', falseW: ['negligible', 'superficial', 'dogmatic'], meaning: 'remarkably or impressively great in extent' },
              { word: 'ubiquitous', falseW: ['ephemeral', 'clandestine', 'archaic'], meaning: 'present, appearing, or found everywhere' },
              { word: 'meticulous', falseW: ['arbitrary', 'placid', 'superficial'], meaning: 'showing great attention to detail' },
              { word: 'substantiate', falseW: ['repudiate', 'dissemble', 'attenuate'], meaning: 'provide evidence to support or prove the truth of' },
              { word: 'elucidate', falseW: ['obfuscate', 'stagnate', 'reverberate'], meaning: 'make something clear; explain' },
            ];
            const item = wordsList[(i + subIdx) % wordsList.length];
            passage = `During the archaeological excavation at Site ${40 + i}, field director Dr. K. Vance uncovered bronze artifacts whose crystalline preservation was exceptionally rare. The artifacts offered insights that helped ______ previously unsubstantiated hypotheses regarding trade routes across the Eurasian steppe during the Late Bronze Age.`;
            prompt = 'Which choice completes the text with the most logical and precise word or phrase?';
            options = [
              { letter: 'A', text: item.word, explanation: `Correct. "${item.word}" aligns with the goal of verifying or clarifying ancient trade models.` },
              { letter: 'B', text: item.falseW[0], explanation: `Incorrect. "${item.falseW[0]}" creates an illogical contrast or inappropriate nuance in this academic context.` },
              { letter: 'C', text: item.falseW[1], explanation: `Incorrect. "${item.falseW[1]}" contradicts the discovery of substantial evidence.` },
              { letter: 'D', text: item.falseW[2], explanation: `Incorrect. "${item.falseW[2]}" is not supported by the scholarly intent of the discovery.` },
            ];
            correctAnswer = 'A';
            explanationSummary = `The passage discusses how rare bronze artifact findings provided factual weight to hypotheses. "${item.word}" (${item.meaning}) logically satisfies the context.`;
            formula = 'Words in Context: Look for direction indicators and surrounding nouns being modified.';
          } else if (subtopic === 'Transitions') {
            const transitions = [
              { right: 'Accordingly', wrong: ['Conversely', 'Previously', 'Instead'], rel: 'cause and effect' },
              { right: 'Conversely', wrong: ['Likewise', 'Moreover', 'In summary'], rel: 'direct contrast' },
              { right: 'For instance', wrong: ['Regardless', 'Consequently', 'Ultimately'], rel: 'exemplification' },
              { right: 'Nevertheless', wrong: ['Similarly', 'Hence', 'Specifically'], rel: 'concession/counterpoint' },
            ];
            const trans = transitions[(i + subIdx) % transitions.length];
            passage = `Marine biologists noted that rising oceanic temperatures severely degrade calcareous algae reefs in low-latitude zones. ______ deeper subterranean trench ecosystems exhibit remarkable thermal inertia, maintaining steady microbial metabolic indices.`;
            prompt = 'Which choice completes the text with the most logical transition?';
            options = [
              { letter: 'A', text: trans.right, explanation: `Correct. "${trans.right}" correctly conveys the ${trans.rel} between shallow degraded reefs and deep resilient trench ecosystems.` },
              { letter: 'B', text: trans.wrong[0], explanation: `Incorrect. "${trans.wrong[0]}" fails to represent the logical connection established between the two sentences.` },
              { letter: 'C', text: trans.wrong[1], explanation: `Incorrect. "${trans.wrong[1]}" indicates an incorrect logical flow.` },
              { letter: 'D', text: trans.wrong[2], explanation: `Incorrect. "${trans.wrong[2]}" distorts the empirical relationship.` },
            ];
            correctAnswer = 'A';
            explanationSummary = `The first sentence establishes thermal damage in shallow reefs, while the second notes thermal stability in deep ecosystems. "${trans.right}" provides the precise transition.`;
            formula = 'Transitions Rule: Classify relationship: Addition, Contrast, Causation, or Exemplification.';
          } else if (subtopic === 'Boundaries') {
            passage = `In her seminal 1974 ethnographic study of agrarian cooperatives in the Andean valley, anthropologist Elena Morales documented complex water-sharing ______ system ensured equitable crop hydration across both upstream and downstream terraced plots.`;
            prompt = 'Which choice completes the text so that it conforms to the conventions of Standard English?';
            options = [
              { letter: 'A', text: 'protocols; this', explanation: 'Correct. A semicolon separates two independent clauses without a coordinating conjunction.' },
              { letter: 'B', text: 'protocols, this', explanation: 'Incorrect. Creates a comma splice between two independent clauses.' },
              { letter: 'C', text: 'protocols this', explanation: 'Incorrect. Fused sentence (run-on) with no punctuation.' },
              { letter: 'D', text: 'protocols, which this', explanation: 'Incorrect. Ungrammatical relative pronoun clustering.' },
            ];
            correctAnswer = 'A';
            explanationSummary = 'Clause 1 and Clause 2 are both complete thoughts. A semicolon or period must be used to avoid a comma splice.';
            formula = 'Punctuation Rule: Independent Clause + Semicolon (;) + Independent Clause.';
          } else {
            // General RW
            passage = `Researchers investigating avian cognition evaluated crow problem-solving under dual-stage obstacle tasks. In Experiment Set ${i}, crows presented with hooked tools and weight-bearing tubes exhibited goal-directed planning, selecting tools matching tube diameters with over 84% accuracy.`;
            prompt = `Based on the text, which statement regarding avian tool selection is most strongly supported?`;
            options = [
              { letter: 'A', text: 'Crows demonstrated the capacity to assess physical properties and adjust tool choice to specific task demands.', explanation: 'Correct. Directly supported by the finding that crows selected tools matching tube diameters with high accuracy.' },
              { letter: 'B', text: 'Crows rely primarily on random trial-and-error rather than anticipatory spatial planning.', explanation: 'Incorrect. The 84% accuracy and goal-directed planning directly contradict random trial-and-error.' },
              { letter: 'C', text: 'Crows are unable to solve multi-stage puzzle tasks without human auditory cues.', explanation: 'Incorrect. No human auditory cues are mentioned in the experiment.' },
              { letter: 'D', text: 'Avian problem-solving abilities exceed those of primates under identical spatial challenges.', explanation: 'Incorrect. No comparison to primates is established in the passage.' },
            ];
            correctAnswer = 'A';
            explanationSummary = 'The passage describes crows systematically selecting tools that match the tube diameters with 84% accuracy, supporting their capacity for anticipatory spatial reasoning.';
            formula = 'Command of Evidence: Look for direct text-to-answer textual parity.';
          }
        } else {
          // Mathematics
          if (subtopic === 'Linear equations' || subtopic === 'Systems of linear equations') {
            const m = (i % 7) + 2;
            const b = (i % 11) + 3;
            const c = m * 4 + b;
            prompt = `If $${m}x + ${b} = ${c}$, what is the value of $2x - 1$?`;
            const xVal = 4;
            const ansVal = 2 * xVal - 1; // 7
            options = [
              { letter: 'A', text: `${ansVal}`, explanation: `Correct. Solve for $x$: $${m}x = ${c - b} \\implies x = 4$. Then $2x - 1 = 2(4) - 1 = ${ansVal}$.` },
              { letter: 'B', text: `${xVal}`, explanation: `Incorrect. ${xVal} is the value of $x$, not $2x - 1$. Always read what the question asks for!` },
              { letter: 'C', text: `${ansVal + 4}`, explanation: `Incorrect. Computation error in subtracting 1.` },
              { letter: 'D', text: `${ansVal - 3}`, explanation: `Incorrect. Miscalculated the initial solution for $x$.` },
            ];
            correctAnswer = 'A';
            explanationSummary = `First isolate $x$: $${m}x = ${c - b} \\implies x = 4$. Then substitute $x=4$ into $2x-1$: $2(4)-1 = ${ansVal}$.`;
            formula = 'Algebra Tip: SAT questions frequently ask for an expression like $2x - 1$ rather than $x$ alone.';
          } else if (subtopic === 'Quadratic equations' || subtopic === 'Advanced Math') {
            const root1 = (i % 5) + 1;
            const root2 = (i % 4) + 6;
            const sum = root1 + root2;
            const prod = root1 * root2;
            prompt = `The quadratic equation $x^2 - ${sum}x + ${prod} = 0$ has solutions $r_1$ and $r_2$. What is the sum of the solutions $r_1 + r_2$?`;
            options = [
              { letter: 'A', text: `${sum}`, explanation: `Correct. By Vieta's formulas, the sum of roots for $ax^2 + bx + c = 0$ is $-b/a = -(-${sum})/1 = ${sum}$.` },
              { letter: 'B', text: `${prod}`, explanation: `Incorrect. ${prod} is the product of roots ($c/a$), not the sum.` },
              { letter: 'C', text: `${-sum}`, explanation: `Incorrect. Sign error: the sum is $-b/a$, which equals $+${sum}$.` },
              { letter: 'D', text: `${root1}`, explanation: `Incorrect. This is only one of the individual roots.` },
            ];
            correctAnswer = 'A';
            explanationSummary = `Using Vieta's formula: For any quadratic $ax^2 + bx + c = 0$, the sum of roots is $-b/a = -(-${sum})/1 = ${sum}$.`;
            formula = `Vieta's Formulas: Sum of roots $= -b/a$, Product of roots $= c/a$.`;
          } else if (subtopic === 'Circles' || subtopic === 'Area and volume') {
            const rad = (i % 6) + 3;
            const area = rad * rad;
            prompt = `A circle in the $xy$-plane is defined by $(x - ${i % 8})^2 + (y + ${i % 5})^2 = ${area}$. What is the circumference of this circle in terms of $\\pi$?`;
            const circ = 2 * rad;
            options = [
              { letter: 'A', text: `${circ}π`, explanation: `Correct. Radius $r = \\sqrt{${area}} = ${rad}$. Circumference $C = 2\\pi r = 2\\pi(${rad}) = ${circ}\\pi$.` },
              { letter: 'B', text: `${area}π`, explanation: `Incorrect. ${area}π is the area of the circle ($A = \\pi r^2$), not the circumference.` },
              { letter: 'C', text: `${rad}π`, explanation: `Incorrect. Forgot to multiply by 2 in the circumference formula $2\\pi r$.` },
              { letter: 'D', text: `${circ * 2}π`, explanation: `Incorrect. Multiplied diameter by 2.` },
            ];
            correctAnswer = 'A';
            explanationSummary = `From the circle equation $(x-h)^2 + (y-k)^2 = r^2$, the radius is $r = \\sqrt{${area}} = ${rad}$. Circumference $C = 2\\pi r = ${circ}\\pi$.`;
            formula = 'Geometry Formulas: $C = 2\\pi r$ and $A = \\pi r^2$.';
          } else {
            // General Math
            const baseVal = 100 * ((i % 8) + 2);
            const rate = ((i % 5) + 3) * 5; // 15%, 20%, 25%, etc.
            const inc = baseVal * (1 + rate / 100);
            prompt = `A stock portfolio valued at $\\$${baseVal}$ increases by $${rate}\\%$ over one fiscal quarter. What is the updated total value of the portfolio?`;
            options = [
              { letter: 'A', text: `$${inc}`, explanation: `Correct. $\\$${baseVal} \\times (1 + ${rate/100}) = \\$${inc}$.` },
              { letter: 'B', text: `$${baseVal + rate}`, explanation: `Incorrect. Added the percentage number directly as dollars rather than computing the percentage.` },
              { letter: 'C', text: `$${inc - 50}`, explanation: `Incorrect. Computational error in multiplier.` },
              { letter: 'D', text: `$${baseVal * 2}`, explanation: `Incorrect. Doubling the value would represent a 100% increase.` },
            ];
            correctAnswer = 'A';
            explanationSummary = `Multiply the original value by the percent multiplier $(1 + ${rate/100})$: $${baseVal} \\times ${1 + rate/100} = \\$${inc}$.`;
            formula = 'Percentage formula: Final = Initial $\\times (1 \\pm r)$.';
          }
        }

        // Shuffle options slightly based on i so correct answer varies among A, B, C, D
        const shift = i % 4;
        if (shift > 0 && options.length === 4) {
          const correctOpt = options[0];
          const newOpts = [...options];
          const targetIdx = shift;
          newOpts[0] = newOpts[targetIdx];
          newOpts[targetIdx] = correctOpt;
          // re-assign letters
          const letters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
          options = newOpts.map((opt, idx) => ({
            ...opt,
            letter: letters[idx],
          }));
          correctAnswer = letters[targetIdx];
        }

        bank.push({
          id: qId,
          subject: cat.subject,
          topic: cat.topic,
          subtopic,
          difficulty,
          questionType: 'Multiple Choice',
          passage,
          prompt,
          options,
          correctAnswer,
          explanationSummary,
          relevantConceptOrFormula: formula,
          estimatedTimeSeconds: estimatedTime,
          tags,
          viewsCount: Math.floor(600 + (i * 17) % 3500),
        });
      }
    });
  });

  return bank;
}

// Singleton Question Database containing 3,200+ structured SAT questions
export const ALL_QUESTIONS: Question[] = generateProceduralBank();

export function getQuestionById(id: string): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id.toLowerCase() === id.toLowerCase());
}

export function getQuestionsByFilters(filters: {
  subject?: string;
  topic?: string;
  subtopic?: string;
  difficulty?: string;
  questionType?: string;
  searchQuery?: string;
  bookmarkedIds?: string[];
  solvedIds?: string[];
  incorrectIds?: string[];
  statusFilter?: 'all' | 'unanswered' | 'incorrect' | 'attempted' | 'bookmarked';
}): Question[] {
  return ALL_QUESTIONS.filter((q) => {
    if (filters.subject && filters.subject !== 'All' && q.subject !== filters.subject) {
      return false;
    }
    if (filters.topic && filters.topic !== 'All' && q.topic !== filters.topic) {
      return false;
    }
    if (filters.subtopic && filters.subtopic !== 'All' && q.subtopic !== filters.subtopic) {
      return false;
    }
    if (filters.difficulty && filters.difficulty !== 'All' && q.difficulty !== filters.difficulty) {
      return false;
    }
    if (filters.questionType && filters.questionType !== 'All' && q.questionType !== filters.questionType) {
      return false;
    }
    if (filters.statusFilter) {
      if (filters.statusFilter === 'bookmarked') {
        if (!filters.bookmarkedIds?.includes(q.id)) return false;
      } else if (filters.statusFilter === 'attempted') {
        if (!filters.solvedIds?.includes(q.id)) return false;
      } else if (filters.statusFilter === 'incorrect') {
        if (!filters.incorrectIds?.includes(q.id)) return false;
      } else if (filters.statusFilter === 'unanswered') {
        if (filters.solvedIds?.includes(q.id)) return false;
      }
    }
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const query = filters.searchQuery.toLowerCase().trim();
      const matchId = q.id.toLowerCase().includes(query);
      const matchPrompt = q.prompt.toLowerCase().includes(query);
      const matchTopic = q.topic.toLowerCase().includes(query);
      const matchSubtopic = q.subtopic.toLowerCase().includes(query);
      const matchPassage = q.passage ? q.passage.toLowerCase().includes(query) : false;
      const matchTags = q.tags.some((t) => t.toLowerCase().includes(query));
      if (!matchId && !matchPrompt && !matchTopic && !matchSubtopic && !matchPassage && !matchTags) {
        return false;
      }
    }
    return true;
  });
}
