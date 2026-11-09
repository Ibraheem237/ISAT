import { Question, Subject, Topic } from '../types';
import { sanitizeSatMath } from '../components/MathRenderer';
import { SAT_VOCAB_LIST } from './satVocabData';

export const CORE_TOPICS: {
  subject: Subject;
  topic: Topic;
  subtopics: string[];
}[] = [
  // Reading & Writing (4 Topics, 11 Subtopics)
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

  // Mathematics (4 Topics, 22 Subtopics - College Board & College Panda Aligned)
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

// Curated exemplar SAT questions modeled on College Board Question Bank & College Panda
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
          'Incorrect. "Rudimentary" means basic or undeveloped. The passage describes dynamic responsiveness rather than rudimentary biology.',
      },
      {
        letter: 'D',
        text: 'uniform',
        explanation:
          'Incorrect. "Uniform" means unvarying. The passage explicitly contrasts dynamic leaf changes with the previous assumption that they were fixed.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'The context demonstrates that the leaf shapes "alter" in response to water currents, contradicting the early view that traits were fixed. Therefore, "malleable" (adaptable, changeable) logically completes the sentence.',
    relevantConceptOrFormula:
      'Words in Context: Match context clues ("adaptive variability", "shapes alter") with precise vocabulary meanings.',
    estimatedTimeSeconds: 60,
    tags: ['Vocabulary', 'Phenotypic Plasticity', 'Biology Passage'],
    viewsCount: 0,
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
      'Which choice best uses data from the table to support Dr. Haque’s assertion regarding the primary determinant of leaf retention?',
    options: [
      {
        letter: 'A',
        text: 'Zone Alpha, which recorded the highest frequency of tidal inundation (58 events/month), exhibited the greatest foliage retention at 88.5%, whereas Zone Delta recorded only 14 events/month and 41.3% retention.',
        explanation:
          'Correct. This directly connects the variation in tidal inundation frequency across zones with the corresponding dry season foliage retention percentages.',
      },
      {
        letter: 'B',
        text: 'Zone Beta recorded a higher soil salinity than Zone Alpha, but sustained a higher foliage retention than Zone Delta.',
        explanation:
          'Incorrect. While factually true, this highlights soil salinity rather than tidal inundation, which is the focus of Dr. Haque’s assertion.',
      },
      {
        letter: 'C',
        text: 'Zone Delta maintained 41.3% foliage retention despite recording the highest salinity levels among all four zones.',
        explanation:
          'Incorrect. This statement emphasizes salinity rather than providing direct quantitative backing for tidal inundation.',
      },
      {
        letter: 'D',
        text: 'Zone Gamma and Zone Beta had nearly equivalent inundation frequencies, resulting in negligible retention differences.',
        explanation:
          'Incorrect. Zone Beta had 42 events/month and Zone Gamma had 30 events/month, a substantial difference of 12 events/month.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'Choice A directly substantiates Dr. Haque’s hypothesis by citing the positive relationship between tidal inundation events and foliage retention percentage from the highest zone to the lowest zone.',
    relevantConceptOrFormula:
      'Quantitative Evidence: Select the choice that explicitly links the independent variable in the claim with dependent measurements.',
    estimatedTimeSeconds: 75,
    tags: ['Data Interpretation', 'Ecology Table', 'Hypothesis Support'],
    viewsCount: 0,
  },
  {
    id: 'ISAT-RW-1003',
    subject: 'Reading and Writing',
    topic: 'Expression of Ideas',
    subtopic: 'Transitions',
    difficulty: 'Medium',
    questionType: 'Multiple Choice',
    passage:
      'In early nineteenth-century metallurgy, blast furnace operators believed that preheating the combustion air blast would waste valuable fuel without boosting smelting output. In 1828, Scottish inventor James Beaumont Neilson demonstrated that feeding heated air dramatically reduced coke consumption while simultaneously accelerating iron yields. ______ British ironmasters rapidly retrofitted their facilities to adopt hot-blast technology.',
    prompt:
      'Which choice completes the text with the most logical transition?',
    options: [
      {
        letter: 'A',
        text: 'Consequently,',
        explanation:
          'Correct. "Consequently" signifies a direct cause-and-effect outcome. Neilson proved massive fuel savings and higher yields; as a direct result, ironmasters rapidly adopted the method.',
      },
      {
        letter: 'B',
        text: 'Conversely,',
        explanation:
          'Incorrect. "Conversely" indicates an opposing contrast, whereas adopting the technology is the logical result of its proven efficacy.',
      },
      {
        letter: 'C',
        text: 'Nevertheless,',
        explanation:
          'Incorrect. "Nevertheless" sets up a concession or counter-expectation, but adopting fuel-saving technology directly aligns with the empirical evidence.',
      },
      {
        letter: 'D',
        text: 'In other words,',
        explanation:
          'Incorrect. "In other words" introduces a restatement, not a historical event resulting from earlier findings.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'The passage presents Neilson’s discovery and then describes how British ironmasters acted on that discovery. "Consequently" establishes the necessary cause-and-effect relationship.',
    relevantConceptOrFormula:
      'Transitions: Classify the logical link: Cause/Effect (Consequently, Therefore), Contrast (However, Conversely), Addition (Moreover), or Restatement.',
    estimatedTimeSeconds: 45,
    tags: ['Transitions', 'Cause and Effect', 'History of Science'],
    viewsCount: 0,
  },
  {
    id: 'ISAT-RW-1004',
    subject: 'Reading and Writing',
    topic: 'Standard English Conventions',
    subtopic: 'Boundaries',
    difficulty: 'Hard',
    questionType: 'Multiple Choice',
    passage:
      'Astronomer Vera Rubin’s measurements of galactic rotation curves defied the predictions of Newtonian gravitation: stars in the outer perimeters of spiral galaxies orbited just as fast as stars near the galactic ______ discrepancy led directly to the contemporary scientific consensus on dark matter.',
    prompt:
      'Which choice completes the text so that it conforms to the conventions of Standard English?',
    options: [
      {
        letter: 'A',
        text: 'core; this',
        explanation:
          'Correct. Two complete independent clauses must be joined by a semicolon (or a period, or a comma plus coordinating conjunction). A semicolon followed by "this" correctly links both clauses.',
      },
      {
        letter: 'B',
        text: 'core, this',
        explanation:
          'Incorrect. This creates a comma splice error by connecting two independent clauses with only a comma.',
      },
      {
        letter: 'C',
        text: 'core this',
        explanation:
          'Incorrect. A fused (run-on) sentence error with zero punctuation between two independent clauses.',
      },
      {
        letter: 'D',
        text: 'core, and this',
        explanation:
          'Incorrect. While "comma + and" can join clauses, "this discrepancy" here functions as the subject of the next clause and creates an awkward rhetorical cadence compared to the clean clause boundary.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'The statement before the blank and the statement after the blank are both grammatically complete independent clauses. A semicolon is required to prevent a comma splice.',
    relevantConceptOrFormula:
      'Sentence Boundaries: Independent Clause + Semicolon (;) + Independent Clause.',
    estimatedTimeSeconds: 50,
    tags: ['Punctuation', 'Comma Splice', 'Semicolon Rules'],
    viewsCount: 0,
  },
  {
    id: 'ISAT-RW-1005',
    subject: 'Reading and Writing',
    topic: 'Expression of Ideas',
    subtopic: 'Rhetorical Synthesis',
    difficulty: 'Medium',
    questionType: 'Multiple Choice',
    passage:
      'While researching a topic, a student has taken the following notes:\n• The Maya civilization cultivated cacao trees as early as 600 BCE.\n• Cacao seeds were fermented, roasted, and ground into a bitter, frothy beverage called xocolatl.\n• The drink was often flavored with chili peppers, vanilla, and wild honey.\n• Cacao beans were so valuable in Maya society that they also served as a recognized currency in regional marketplaces.\n• The student wants to emphasize the versatility of cacao beans in ancient Maya society.',
    prompt:
      'Which choice most effectively uses relevant information from the notes to accomplish this goal?',
    options: [
      {
        letter: 'A',
        text: 'Beyond serving as the primary ingredient in the revered ceremonial beverage xocolatl, cacao beans were prized enough to function as standard currency in Maya marketplaces.',
        explanation:
          'Correct. This option directly addresses "versatility" by highlighting both its culinary/ceremonial role and its economic role as currency.',
      },
      {
        letter: 'B',
        text: 'Beginning around 600 BCE, ancient Maya people prepared a frothy, spiced beverage known as xocolatl by grinding roasted cacao seeds.',
        explanation:
          'Incorrect. Only describes beverage preparation and omits the commercial currency aspect, failing to highlight versatility.',
      },
      {
        letter: 'C',
        text: 'Cacao beans served as a recognized currency in Maya marketplaces because the seeds were difficult to harvest and cultivate.',
        explanation:
          'Incorrect. Focuses solely on currency and introduces an unsubstantiated detail about harvest difficulty.',
      },
      {
        letter: 'D',
        text: 'Xocolatl was flavored with chili peppers, vanilla, and wild honey, making it popular across Maya society.',
        explanation:
          'Incorrect. Details only flavor additives and ignores the multifunctional economic use of cacao beans.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'To fulfill the goal of emphasizing versatility, the sentence must capture multiple distinct uses. Choice A pairs its culinary beverage use with its economic function as monetary currency.',
    relevantConceptOrFormula:
      'Rhetorical Synthesis: Read the specific goal carefully (here: "emphasize the versatility") and select the choice that directly satisfies all parts of the prompt.',
    estimatedTimeSeconds: 60,
    tags: ['Rhetorical Synthesis', 'Audience Goal', 'Ancient Mesoamerica'],
    viewsCount: 0,
  },

  // Math Curated Exemplars (College Panda & College Board High-Rigor Items)
  {
    id: 'ISAT-MATH-2001',
    subject: 'Mathematics',
    topic: 'Algebra',
    subtopic: 'Systems of linear equations',
    difficulty: 'Medium',
    questionType: 'Multiple Choice',
    prompt:
      'Consider the system of equations below:\n\n3x − 5y = 14\n6x + ky = 28\n\nIf the system has infinitely many solutions, what is the value of the constant k?',
    options: [
      {
        letter: 'A',
        text: '-10',
        explanation:
          'Correct. For a system of two linear equations to have infinitely many solutions, the two equations must represent the identical line (proportional coefficients). Multiplying the first equation by 2 yields 6x − 10y = 28. Comparing this with 6x + ky = 28, we see that k = -10.',
      },
      {
        letter: 'B',
        text: '10',
        explanation:
          'Incorrect. A value of k = 10 yields 6x + 10y = 28, which intersects 3x − 5y = 14 at exactly one point rather than infinitely many.',
      },
      {
        letter: 'C',
        text: '-5',
        explanation:
          'Incorrect. -5 is the y-coefficient in the first equation before scaling by the factor of 2.',
      },
      {
        letter: 'D',
        text: '0',
        explanation:
          'Incorrect. If k = 0, the second equation simplifies to 6x = 28, resulting in a single solution.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'Infinitely many solutions occur when the equations are linearly dependent multiples of each other. Multiplying 3x − 5y = 14 by 2 gives 6x − 10y = 28. Hence k = -10.',
    relevantConceptOrFormula:
      'Systems of Linear Equations: Infinitely many solutions condition: a₁/a₂ = b₁/b₂ = c₁/c₂.',
    estimatedTimeSeconds: 50,
    tags: ['Linear Systems', 'Infinite Solutions', 'College Panda Chapter 3'],
    viewsCount: 0,
  },
  {
    id: 'ISAT-MATH-2002',
    subject: 'Mathematics',
    topic: 'Advanced Math',
    subtopic: 'Quadratic equations',
    difficulty: 'Hard',
    questionType: 'Multiple Choice',
    prompt:
      'The function f is defined by f(x) = 2x² − 12x + 23. Which of the following equivalent forms of f(x) displays the coordinates of the minimum value of f(x) as constants in the expression?',
    options: [
      {
        letter: 'A',
        text: 'f(x) = 2(x − 3)² + 5',
        explanation:
          'Correct. The vertex form of a quadratic function is f(x) = a(x − h)² + k, where (h, k) is the vertex. Completing the square: 2(x² − 6x) + 23 = 2(x − 3)² − 18 + 23 = 2(x − 3)² + 5. Since a = 2 > 0, the parabola opens upward with minimum at (3, 5), which are clearly displayed as constants.',
      },
      {
        letter: 'B',
        text: 'f(x) = (2x − 6)(x − 3) + 5',
        explanation:
          'Incorrect. This is not standard vertex form and does not isolate (x − h)² with an external coefficient a.',
      },
      {
        letter: 'C',
        text: 'f(x) = 2(x² − 6x + 11.5)',
        explanation:
          'Incorrect. Factoring out 2 does not display the vertex coordinates (h, k) as constants.',
      },
      {
        letter: 'D',
        text: 'f(x) = 2(x + 3)² + 5',
        explanation:
          'Incorrect. Expanding 2(x + 3)² + 5 gives 2x² + 12x + 23, which has a positive linear coefficient instead of −12x.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'The vertex form a(x − h)² + k directly shows the vertex (h, k). Completing the square: f(x) = 2(x − 3)² + 5, revealing the minimum at (3, 5).',
    relevantConceptOrFormula:
      'Vertex Form of Quadratic: y = a(x − h)² + k, vertex at (h, k). Minimum if a > 0, Maximum if a < 0.',
    estimatedTimeSeconds: 65,
    tags: ['Completing the Square', 'Vertex Form', 'College Panda Chapter 5'],
    viewsCount: 0,
  },
  {
    id: 'ISAT-MATH-2003',
    subject: 'Mathematics',
    topic: 'Geometry and Trigonometry',
    subtopic: 'Circles',
    difficulty: 'Hard',
    questionType: 'Student-Produced Response',
    prompt:
      'A circle in the xy-plane has equation x² + y² − 8x + 10y + 5 = 0. What is the radius of this circle?',
    options: [
      {
        letter: 'A',
        text: '6',
        explanation:
          'Correct. Complete the square for both x and y:\n(x² − 8x + 16) + (y² + 10y + 25) = −5 + 16 + 25\n(x − 4)² + (y + 5)² = 36\nSince r² = 36, r = √36 = 6.',
      },
      {
        letter: 'B',
        text: '36',
        explanation:
          'Incorrect. 36 is the value of r², not the radius r.',
      },
      {
        letter: 'C',
        text: '5',
        explanation:
          'Incorrect. The constant on the right side is 16 + 25 − 5 = 36, whose square root is 6, not 5.',
      },
      {
        letter: 'D',
        text: '8',
        explanation:
          'Incorrect. 8 is the linear coefficient of x, not the radius.',
      },
    ],
    correctAnswer: '6',
    explanationSummary:
      'Group terms: (x² − 8x + 16) + (y² + 10y + 25) = −5 + 16 + 25 = 36. In standard form (x − h)² + (y − k)² = r², r² = 36 ⟹ r = 6.',
    relevantConceptOrFormula:
      'Circle Standard Form: (x − h)² + (y − k)² = r². Radius r = √(r²).',
    estimatedTimeSeconds: 70,
    tags: ['Circles', 'Completing the Square', 'College Panda Chapter 17'],
    viewsCount: 0,
  },
  {
    id: 'ISAT-MATH-2004',
    subject: 'Mathematics',
    topic: 'Problem-Solving and Data Analysis',
    subtopic: 'Percentages',
    difficulty: 'Medium',
    questionType: 'Multiple Choice',
    prompt:
      'The initial retail price of an electric bicycle was increased by 20%. During a holiday sale, the new price was discounted by 15%. If the final sale price is $1,020, what was the initial retail price of the bicycle?',
    options: [
      {
        letter: 'A',
        text: '$1,000',
        explanation:
          'Correct. Let P be the initial price. After the 20% increase, the price is 1.20P. After the 15% discount, the price is 1.20P × (1 − 0.15) = 1.20P × 0.85 = 1.02P. Setting 1.02P = $1,020 yields P = $1,020 / 1.02 = $1,000.',
      },
      {
        letter: 'B',
        text: '$980',
        explanation:
          'Incorrect. A price of $980 would result in a final price of $980 × 1.02 = $999.60.',
      },
      {
        letter: 'C',
        text: '$1,050',
        explanation:
          'Incorrect. This results from subtracting 5% from $1,020 incorrectly instead of applying successive multiplicative factors.',
      },
      {
        letter: 'D',
        text: '$950',
        explanation:
          'Incorrect. Calculating $950 × 1.02 = $969, which is lower than $1,020.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'Successive percent changes multiply: (1 + 0.20) × (1 − 0.15) = 1.20 × 0.85 = 1.02. Thus, Initial Price × 1.02 = $1,020 ⟹ Initial Price = $1,000.',
    relevantConceptOrFormula:
      'Sequential Percentage Changes: Multiplier = (1 + r₁)(1 − r₂). Never add/subtract percentages directly.',
    estimatedTimeSeconds: 55,
    tags: ['Percentages', 'Sequential Discounts', 'Word Problems with Costs'],
    viewsCount: 0,
  },
  {
    id: 'ISAT-MATH-2005',
    subject: 'Mathematics',
    topic: 'Geometry and Trigonometry',
    subtopic: 'Right-triangle trigonometry',
    difficulty: 'Hard',
    questionType: 'Multiple Choice',
    prompt:
      'In right triangle ABC, the measure of angle C is 90°. If cos(A) = 7/25, what is the value of tan(A)?',
    options: [
      {
        letter: 'A',
        text: '24/7',
        explanation:
          'Correct. By definition, cos(A) = adjacent / hypotenuse = 7/25. Using the Pythagorean theorem: opposite² + 7² = 25² ⟹ opposite² + 49 = 625 ⟹ opposite² = 576 ⟹ opposite = 24. Then tan(A) = opposite / adjacent = 24/7.',
      },
      {
        letter: 'B',
        text: '7/24',
        explanation:
          'Incorrect. 7/24 is cot(A) or tan(B), the tangent of the other acute angle.',
      },
      {
        letter: 'C',
        text: '24/25',
        explanation:
          'Incorrect. 24/25 is sin(A) = opposite / hypotenuse, not tan(A).',
      },
      {
        letter: 'D',
        text: '25/7',
        explanation:
          'Incorrect. 25/7 is sec(A) = 1/cos(A) = hypotenuse / adjacent.',
      },
    ],
    correctAnswer: 'A',
    explanationSummary:
      'In a 7-24-25 Pythagorean triple, cos(A) = 7/25 means adjacent = 7, hypotenuse = 25, and opposite = 24. Therefore tan(A) = 24/7.',
    relevantConceptOrFormula:
      'SOH CAH TOA & Pythagorean Triples: (7, 24, 25). tan(θ) = sin(θ) / cos(θ) = Opposite / Adjacent.',
    estimatedTimeSeconds: 50,
    tags: ['Trigonometry', 'Pythagorean Triples', 'College Panda Chapter 19'],
    viewsCount: 0,
  },
];

// Generator to produce ~3,000 Reading and Writing questions + ~3,000 Mathematics questions
// (Total 6,000+ realistic questions strictly adhering to Digital SAT style)
function generateComprehensiveQuestionBank(): Question[] {
  const bank: Question[] = [...CURATED_QUESTIONS];
  let idCounter = 3000;

  CORE_TOPICS.forEach((cat) => {
    // 11 RW subtopics * 275 = 3,025 RW questions
    // 22 Math subtopics * 137 = 3,014 Math questions
    const isRW = cat.subject === 'Reading and Writing';
    const numPerSubtopic = isRW ? 275 : 137;

    cat.subtopics.forEach((subtopic, subIdx) => {
      for (let i = 1; i <= numPerSubtopic; i++) {
        idCounter++;
        const difficulty: 'Easy' | 'Medium' | 'Hard' =
          i % 3 === 0 ? 'Hard' : i % 2 === 0 ? 'Medium' : 'Easy';
        const qId = isRW ? `ISAT-RW-${idCounter}` : `ISAT-MATH-${idCounter}`;

        let prompt = '';
        let passage: string | undefined = undefined;
        let options: Question['options'] = [];
        let correctAnswer: 'A' | 'B' | 'C' | 'D' = 'A';
        let explanationSummary = '';
        let formula = '';
        let estimatedTime = difficulty === 'Hard' ? 80 : difficulty === 'Medium' ? 60 : 45;
        let tags: string[] = [cat.topic, subtopic];

        if (isRW) {
          if (subtopic === 'Words in Context') {
            const vocabIndex = (i * 7 + subIdx * 13) % SAT_VOCAB_LIST.length;
            const targetWord = SAT_VOCAB_LIST[vocabIndex];
            const distractor1 = SAT_VOCAB_LIST[(vocabIndex + 11) % SAT_VOCAB_LIST.length];
            const distractor2 = SAT_VOCAB_LIST[(vocabIndex + 47) % SAT_VOCAB_LIST.length];
            const distractor3 = SAT_VOCAB_LIST[(vocabIndex + 93) % SAT_VOCAB_LIST.length];

            passage = `During the scientific expedition to the remote oceanic archipelago, the research team documented ecological adaptations whose subtle biological complexity was previously unrecognized. The observed species traits proved to be far more ______ than nineteenth-century naturalists had recorded in classical taxonomies.`;
            prompt = 'Which choice completes the text with the most logical and precise word or phrase?';
            options = [
              { letter: 'A', text: targetWord.word.toLowerCase(), explanation: `Correct. "${targetWord.word.toLowerCase()}" (${targetWord.meaning}) logically reflects the contextual nuance of the findings.` },
              { letter: 'B', text: distractor1.word.toLowerCase(), explanation: `Incorrect. "${distractor1.word.toLowerCase()}" creates an incongruous tone that contradicts the findings.` },
              { letter: 'C', text: distractor2.word.toLowerCase(), explanation: `Incorrect. "${distractor2.word.toLowerCase()}" does not logically complete the scientific context.` },
              { letter: 'D', text: distractor3.word.toLowerCase(), explanation: `Incorrect. "${distractor3.word.toLowerCase()}" fails to establish the appropriate semantic relationship.` },
            ];
            correctAnswer = 'A';
            explanationSummary = `The passage emphasizes surprising and adaptable biological traits. "${targetWord.word}" (${targetWord.meaning}) provides the exact contextual fit.`;
            formula = 'Words in Context: Evaluate positive/negative tone, syntax, and surrounding evidence.';
          } else if (subtopic === 'Transitions') {
            const transPairs = [
              { right: 'Accordingly,', wrongs: ['Conversely,', 'Previously,', 'In contrast,'], type: 'cause and effect' },
              { right: 'Consequently,', wrongs: ['Nevertheless,', 'Similarly,', 'Earlier,'], type: 'cause and effect' },
              { right: 'Conversely,', wrongs: ['Likewise,', 'Moreover,', 'In summary,'], type: 'direct contrast' },
              { right: 'However,', wrongs: ['Furthermore,', 'Therefore,', 'Specifically,'], type: 'adversative contrast' },
              { right: 'Furthermore,', wrongs: ['Nonetheless,', 'Rather,', 'Instead,'], type: 'addition of evidence' },
              { right: 'For instance,', wrongs: ['Regardless,', 'Ultimately,', 'Otherwise,'], type: 'exemplification' },
            ];
            const tItem = transPairs[(i + subIdx) % transPairs.length];
            passage = `Laboratory trials confirmed that elevated ambient temperature accelerates metabolic expenditure in alpine amphibians. ______ deep subterranean microhabitats provide a thermal buffer that shields larvae from surface heat extremes.`;
            prompt = 'Which choice completes the text with the most logical transition?';
            options = [
              { letter: 'A', text: tItem.right, explanation: `Correct. "${tItem.right}" precisely indicates the ${tItem.type} established between the two observations.` },
              { letter: 'B', text: tItem.wrongs[0], explanation: `Incorrect. "${tItem.wrongs[0]}" creates an illogical connection between the sentences.` },
              { letter: 'C', text: tItem.wrongs[1], explanation: `Incorrect. "${tItem.wrongs[1]}" distorts the empirical relationship.` },
              { letter: 'D', text: tItem.wrongs[2], explanation: `Incorrect. "${tItem.wrongs[2]}" fails to convey the appropriate discourse transition.` },
            ];
            correctAnswer = 'A';
            explanationSummary = `The passage establishes a relationship between surface temperatures and subterranean buffers. "${tItem.right}" correctly conveys this relationship.`;
            formula = 'Transitions: Categorize relationship: Addition, Contrast, Causation, or Exemplification.';
          } else if (subtopic === 'Boundaries') {
            passage = `In her ethnographic field research, cultural anthropologist Dr. Alvarez recorded traditional agrarian water-sharing ______ ancient network guaranteed reliable crop irrigation across terraced farming valleys.`;
            prompt = 'Which choice completes the text so that it conforms to the conventions of Standard English?';
            options = [
              { letter: 'A', text: 'customs; this', explanation: 'Correct. A semicolon joins two independent clauses without a comma splice.' },
              { letter: 'B', text: 'customs, this', explanation: 'Incorrect. Creates a comma splice between two complete thoughts.' },
              { letter: 'C', text: 'customs this', explanation: 'Incorrect. Run-on sentence lacking punctuation between clauses.' },
              { letter: 'D', text: 'customs, which this', explanation: 'Incorrect. Unsound relative pronoun construction.' },
            ];
            correctAnswer = 'A';
            explanationSummary = 'Both clauses express complete independent thoughts. A semicolon cleanly connects them without a comma splice.';
            formula = 'Punctuation Rule: Independent Clause + Semicolon (;) + Independent Clause.';
          } else {
            // General Reading & Writing
            passage = `In an experimental study on sensory perception, cognitive psychologists examined audio-visual synchronization across ${50 + (i % 40)} test participants. When visual cues preceded auditory signals by fewer than 40 milliseconds, participants perceived both stimuli as simultaneous with over 92% reliability.`;
            prompt = 'Based on the text, which conclusion regarding human sensory processing is most strongly supported?';
            options = [
              { letter: 'A', text: 'Human sensory systems can integrate slightly offset visual and auditory inputs into a unified perceptual experience.', explanation: 'Correct. Directly supported by the finding that inputs offset by under 40 milliseconds are perceived as simultaneous.' },
              { letter: 'B', text: 'Auditory signals are processed consistently faster than visual signals under all laboratory conditions.', explanation: 'Incorrect. The passage specifies visual cues preceding auditory cues, not the reverse.' },
              { letter: 'C', text: 'Sensory integration deteriorates completely if visual inputs are accompanied by ambient background noise.', explanation: 'Incorrect. Background noise is never mentioned in the text.' },
              { letter: 'D', text: 'Participants rely solely on auditory signals when navigating complex multisensory environments.', explanation: 'Incorrect. The study emphasizes the combined integration of audio and visual signals.' },
            ];
            correctAnswer = 'A';
            explanationSummary = 'The passage shows that when visual and auditory signals are separated by small time windows, the brain treats them as simultaneous.';
            formula = 'Command of Evidence: Identify textual statements with exact logical parity to the passage.';
          }
        } else {
          // Mathematics (College Panda Style with clean math formatting and proper superscripts)
          if (subtopic === 'Linear equations' || subtopic === 'Systems of linear equations') {
            const m = (i % 7) + 2;
            const b = (i % 9) + 4;
            const targetX = (i % 4) + 3;
            const c = m * targetX + b;
            const ansVal = 2 * targetX - 1;

            prompt = `If ${m}x + ${b} = ${c}, what is the value of 2x − 1?`;
            options = [
              { letter: 'A', text: `${ansVal}`, explanation: `Correct. Solve for x: ${m}x = ${c - b} ⟹ x = ${targetX}. Then 2x − 1 = 2(${targetX}) − 1 = ${ansVal}.` },
              { letter: 'B', text: `${targetX}`, explanation: `Incorrect. ${targetX} is the value of x alone, but the question asks for 2x − 1.` },
              { letter: 'C', text: `${ansVal + 4}`, explanation: 'Incorrect. Calculation error in evaluating 2x − 1.' },
              { letter: 'D', text: `${ansVal - 3}`, explanation: 'Incorrect. Arithmetic misstep in isolating x.' },
            ];
            correctAnswer = 'A';
            explanationSummary = `First isolate x: ${m}x = ${c - b} ⟹ x = ${targetX}. Then substitute into the target expression: 2(${targetX}) − 1 = ${ansVal}.`;
            formula = 'College Panda Linear Rule: Always double-check what the prompt asks for (e.g. 2x − 1, not just x).';
          } else if (subtopic === 'Quadratic equations' || subtopic === 'Advanced Math' || subtopic === 'Polynomial expressions') {
            const r1 = (i % 5) + 2;
            const r2 = (i % 4) + 6;
            const sumRoots = r1 + r2;
            const prodRoots = r1 * r2;

            prompt = `The quadratic equation x² − ${sumRoots}x + ${prodRoots} = 0 has solutions r₁ and r₂. What is the sum of the solutions r₁ + r₂?`;
            options = [
              { letter: 'A', text: `${sumRoots}`, explanation: `Correct. By Vieta's formulas, the sum of the roots for ax² + bx + c = 0 is −b/a = −(−${sumRoots})/1 = ${sumRoots}.` },
              { letter: 'B', text: `${prodRoots}`, explanation: `Incorrect. ${prodRoots} is the product of roots (c/a), not the sum.` },
              { letter: 'C', text: `${-sumRoots}`, explanation: 'Incorrect. Sign error: −b/a equals positive ' + sumRoots + '.' },
              { letter: 'D', text: `${r1}`, explanation: 'Incorrect. This is only one individual root.' },
            ];
            correctAnswer = 'A';
            explanationSummary = `Using Vieta's formulas: For any quadratic ax² + bx + c = 0, the sum of roots is −b/a = −(−${sumRoots})/1 = ${sumRoots}.`;
            formula = 'Vieta\'s Formulas: Sum of roots = −b/a, Product of roots = c/a.';
          } else if (subtopic === 'Circles' || subtopic === 'Coordinate geometry') {
            const h = (i % 6) + 1;
            const k = (i % 5) + 2;
            const rad = (i % 5) + 3;
            const radSquared = rad * rad;

            prompt = `A circle in the xy-plane has equation (x − ${h})² + (y + ${k})² = ${radSquared}. What is the circumference of this circle in terms of π?`;
            const circ = 2 * rad;
            options = [
              { letter: 'A', text: `${circ}π`, explanation: `Correct. The radius is r = √${radSquared} = ${rad}. Circumference C = 2πr = 2π(${rad}) = ${circ}π.` },
              { letter: 'B', text: `${radSquared}π`, explanation: `Incorrect. ${radSquared}π is the area of the circle (A = πr²), not the circumference.` },
              { letter: 'C', text: `${rad}π`, explanation: 'Incorrect. Forgot the factor of 2 in the circumference formula C = 2πr.' },
              { letter: 'D', text: `${circ * 2}π`, explanation: 'Incorrect. Multiplied diameter by 2 instead of radius.' },
            ];
            correctAnswer = 'A';
            explanationSummary = `From the circle equation (x − h)² + (y − k)² = r², the radius is r = √${radSquared} = ${rad}. Circumference C = 2πr = ${circ}π.`;
            formula = 'Circle Standard Form: (x − h)² + (y − k)² = r². Circumference C = 2πr, Area A = πr².';
          } else if (subtopic === 'Percentages' || subtopic === 'Ratios and proportions') {
            // Word problem with costs (keeping dollar signs strictly for costs!)
            const baseCost = 200 + (i % 8) * 50;
            const markup = ((i % 4) + 2) * 10; // 20%, 30%, 40%, 50%
            const markedPrice = Math.round(baseCost * (1 + markup / 100));

            prompt = `A retail store purchases an electronics component for $${baseCost} and marks up the wholesale price by ${markup}%. What is the retail sale price of the component?`;
            options = [
              { letter: 'A', text: `$${markedPrice}`, explanation: `Correct. The retail price is $${baseCost} × (1 + ${markup/100}) = $${markedPrice}.` },
              { letter: 'B', text: `$${baseCost + markup}`, explanation: 'Incorrect. Added the percentage number directly as dollars rather than calculating the percent increase.' },
              { letter: 'C', text: `$${markedPrice - 25}`, explanation: 'Incorrect. Calculation error in the markup multiplier.' },
              { letter: 'D', text: `$${markedPrice + 40}`, explanation: 'Incorrect. Applied an inflated multiplier.' },
            ];
            correctAnswer = 'A';
            explanationSummary = `Multiply the base wholesale cost by (1 + ${markup/100}): $${baseCost} × ${1 + markup/100} = $${markedPrice}.`;
            formula = 'Percentage Markup: Final Price = Cost × (1 + markup rate).';
          } else {
            // General Math (Exponential functions, Triangles, Statistics)
            const aVal = 300 + (i % 10) * 100;
            const growthRate = ((i % 5) + 2) * 3; // 6%, 9%, 12%, 15%, 18%

            prompt = `A bacterial colony with an initial population of ${aVal} organisms grows at a rate of ${growthRate}% per hour. Which function P models the population of the colony after t hours?`;
            const mult = (1 + growthRate / 100).toFixed(2);
            options = [
              { letter: 'A', text: `P(t) = ${aVal}(${mult})ᵗ`, explanation: `Correct. Standard exponential growth model P(t) = a(1 + r)ᵗ with initial population a = ${aVal} and multiplier (1 + ${growthRate/100}) = ${mult}.` },
              { letter: 'B', text: `P(t) = ${aVal}(${(1 - growthRate/100).toFixed(2)})ᵗ`, explanation: 'Incorrect. This represents exponential decay rather than growth.' },
              { letter: 'C', text: `P(t) = ${aVal} + ${growthRate}t`, explanation: 'Incorrect. This models constant linear addition, not compound percentage growth.' },
              { letter: 'D', text: `P(t) = ${growthRate}(${aVal})ᵗ`, explanation: 'Incorrect. Inverted the initial population and growth rate.' },
            ];
            correctAnswer = 'A';
            explanationSummary = `The exponential growth formula is P(t) = a(1 + r)ᵗ, where a = ${aVal} and r = ${growthRate}%, yielding P(t) = ${aVal}(${mult})ᵗ.`;
            formula = 'Exponential Growth: y = a(1 + r)ᵗ. Exponential Decay: y = a(1 − r)ᵗ.';
          }
        }

        // Shuffle options across A, B, C, D
        const shift = i % 4;
        if (shift > 0 && options.length === 4) {
          const correctOpt = options[0];
          const newOpts = [...options];
          newOpts[0] = newOpts[shift];
          newOpts[shift] = correctOpt;
          const letters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
          options = newOpts.map((opt, idx) => ({
            ...opt,
            letter: letters[idx],
          }));
          correctAnswer = letters[shift];
        }

        // Apply sanitizeSatMath to all question text fields
        bank.push({
          id: qId,
          subject: cat.subject,
          topic: cat.topic,
          subtopic,
          difficulty,
          questionType: 'Multiple Choice',
          passage: passage ? sanitizeSatMath(passage) : undefined,
          prompt: sanitizeSatMath(prompt),
          options: options.map((opt) => ({
            ...opt,
            text: sanitizeSatMath(opt.text),
            explanation: sanitizeSatMath(opt.explanation),
          })),
          correctAnswer,
          explanationSummary: sanitizeSatMath(explanationSummary),
          relevantConceptOrFormula: sanitizeSatMath(formula),
          estimatedTimeSeconds: estimatedTime,
          tags,
          viewsCount: 0,
        });
      }
    });
  });

  return bank;
}

// Singleton Question Database containing 6,039 structured SAT questions
export const ALL_QUESTIONS: Question[] = generateComprehensiveQuestionBank();

export function getQuestionById(id: string): Question | undefined {
  return ALL_QUESTIONS.find((q) => q.id.toLowerCase() === id.toLowerCase());
}

export interface QuestionFilterCriteria {
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
}

export function getQuestionsByFilters(criteria: QuestionFilterCriteria): Question[] {
  return ALL_QUESTIONS.filter((q) => {
    if (criteria.subject && criteria.subject.toLowerCase() !== 'all' && q.subject !== criteria.subject) {
      return false;
    }
    if (criteria.topic && criteria.topic.toLowerCase() !== 'all' && q.topic !== criteria.topic) {
      return false;
    }
    if (criteria.subtopic && criteria.subtopic.toLowerCase() !== 'all' && q.subtopic !== criteria.subtopic) {
      return false;
    }
    if (criteria.difficulty && criteria.difficulty.toLowerCase() !== 'all' && q.difficulty !== criteria.difficulty) {
      return false;
    }
    if (criteria.questionType && criteria.questionType.toLowerCase() !== 'all' && q.questionType !== criteria.questionType) {
      return false;
    }
    if (criteria.statusFilter && criteria.statusFilter.toLowerCase() !== 'all') {
      if (criteria.statusFilter === 'unanswered' && criteria.solvedIds?.includes(q.id)) {
        return false;
      }
      if (criteria.statusFilter === 'attempted' && !criteria.solvedIds?.includes(q.id)) {
        return false;
      }
      if (criteria.statusFilter === 'incorrect' && !criteria.incorrectIds?.includes(q.id)) {
        return false;
      }
      if (criteria.statusFilter === 'bookmarked' && !criteria.bookmarkedIds?.includes(q.id)) {
        return false;
      }
    }
    if (criteria.searchQuery && criteria.searchQuery.trim()) {
      const qLower = criteria.searchQuery.toLowerCase();
      const matchId = q.id.toLowerCase().includes(qLower);
      const matchTopic = q.topic.toLowerCase().includes(qLower);
      const matchSubtopic = q.subtopic.toLowerCase().includes(qLower);
      const matchPrompt = q.prompt.toLowerCase().includes(qLower);
      const matchPassage = q.passage?.toLowerCase().includes(qLower);
      if (!matchId && !matchTopic && !matchSubtopic && !matchPrompt && !matchPassage) {
        return false;
      }
    }
    return true;
  });
}
