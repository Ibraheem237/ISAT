/**
 * Official SAT Vocabulary Builder
 * 384 authentic Digital SAT high-frequency words, simple meanings, and example sentences
 * Direct from official Digital SAT test specifications and past exam items.
 */

export interface SatVocabItem {
  id: string;
  word: string;
  partOfSpeech: 'verb' | 'adjective' | 'noun' | 'adverb';
  posLabel: string;
  meaning: string;
  example: string;
  letter: string;
  category: 'High-Frequency' | 'Academic Core' | 'Nuance & Rhetoric';
}

export const SAT_VOCAB_LIST: SatVocabItem[] = [
  {
    "id": "VOCAB-001",
    "word": "Abate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to become less active, less intense, or less in amount",
    "example": "As I began my speech, my feelings of nervousness quickly abated.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-002",
    "word": "Abrupt",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Sudden and unexpected.",
    "example": "His abrupt departure surprised everyone.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-003",
    "word": "Abstract",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "existing purely in the mind; not representing actual reality",
    "example": "Julie had trouble understanding the appeal of the abstract painting.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-004",
    "word": "Abysmal",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "extremely bad",
    "example": "I got an abysmal grade on my research paper!",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-005",
    "word": "Acceptable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Satisfactory or permissible.",
    "example": "The teacher deemed Sara's late assignment acceptable.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-006",
    "word": "Accidental",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Happening by chance.",
    "example": "The oil spill was purely accidental.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-007",
    "word": "Accommodate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To provide space or make adjustments.",
    "example": "The Grand Hotel can accommodate up to 500 guests.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-008",
    "word": "Accuracy",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The quality of being correct or precise.",
    "example": "The accuracy of the intern's report was impressive.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-009",
    "word": "Acknowledge",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To recognize or admit the truth.",
    "example": "She refused to acknowledge her mistake.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-010",
    "word": "Acquired",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Gained through effort or experience.",
    "example": "Edmund had acquired a taste for fine wine.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-011",
    "word": "Adapt",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To adjust to new conditions.",
    "example": "Newly-released animals generally adapt to their environments over time.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-012",
    "word": "Adept",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "having knowledge or skill (usu. in a particular area)",
    "example": "Beth loves playing the piano, but she’s especially adept at the violin.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-013",
    "word": "Adequate",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "having sufficient qualifications to meet a specific task or purpose",
    "example": "Though his resume was adequate, the company doubted whether he’d be a good fit.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-014",
    "word": "Adhere",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To stick to or follow closely.",
    "example": "You must adhere to the rules if you don't want to get in trouble.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-015",
    "word": "Adjust",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To modify or change slightly.",
    "example": "He had to adjust his seat for comfort.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-016",
    "word": "Admire",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To respect or look up to.",
    "example": "I admire my mother's dedication to her work.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-017",
    "word": "Advantageous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Beneficial or useful.",
    "example": "Speaking multiple languages is advantageous.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-018",
    "word": "Advent",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "the arrival or creation of something",
    "example": "The world has never been the same since the advent of the light bulb.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-019",
    "word": "Advise",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To recommend or give guidance.",
    "example": "I advise you to study for the exam.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-020",
    "word": "Aggravate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To worsen or intensify.",
    "example": "Scratching the rash will only aggravate it.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-021",
    "word": "Aggressive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Forceful or overly assertive.",
    "example": "The man's aggressive tone made everyone uneasy.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-022",
    "word": "Allude",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to make a secretive mention of something",
    "example": "She alluded to the problem at hand but didn’t say anything more about it.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-023",
    "word": "Ambiguity",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "Uncertainty or multiple interpretations.",
    "example": "The ambiguity in his vague statement caused confusion.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-024",
    "word": "Ambivalence",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "Mixed or conflicting feelings.",
    "example": "Jessie felt ambivalence about moving to a new city.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-025",
    "word": "Ameliorate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To improve or make better.",
    "example": "The new policy aims to ameliorate working conditions for all employees.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-026",
    "word": "Amplify",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To increase in size or effect.",
    "example": "The microphone will amplify your voice.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-027",
    "word": "Amusing",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Entertaining or humorous.",
    "example": "Jason's joke was quite amusing.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-028",
    "word": "Analogous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "similar but not identical",
    "example": "Green onions are considered analogous to spring onions.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-029",
    "word": "Annotate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To add notes or comments.",
    "example": "Please annotate the medical text with your observations.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-030",
    "word": "Announce",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To make a public statement.",
    "example": "The CEO will announce the new policy tomorrow.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-031",
    "word": "Anomaly",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "something different from the norm",
    "example": "This result is an anomaly and very rarely happens.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-032",
    "word": "Antagonistic",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Showing hostility or opposition.",
    "example": "His antagonistic behavior created tension at work.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-033",
    "word": "Antecedent",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A preceding event or condition.",
    "example": "The antecedent to the war was political unrest.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-034",
    "word": "Anticipate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To expect or predict.",
    "example": "Does the weatherman anticipate a rise in temperatures next week?",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-035",
    "word": "Antipathy",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "a strong feeling of dislike",
    "example": "Her antipathy toward the professor was obvious: she rolled her eyes whenever he entered the classroom.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-036",
    "word": "Apex",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "the highest point of something",
    "example": "The spring play was the apex of our school year.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-037",
    "word": "Appropriate",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Suitable for a specific situation.",
    "example": "Lily's velvet dress was appropriate for the formal occasion.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-038",
    "word": "Approximate",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Nearly accurate or close to.",
    "example": "The approximate cost is $50.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-039",
    "word": "Arcane",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Mysterious or known by few.",
    "example": "The ancient book contained arcane knowledge.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-040",
    "word": "Arduous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Difficult and requiring effort.",
    "example": "The steep hike up the mountain was arduous.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-041",
    "word": "Assemble",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To gather or put together.",
    "example": "We need to assemble the bed if we want a place to sleep tonight.",
    "letter": "A",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-042",
    "word": "Austere",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "extremely plain; stern and forbidding; relating to self-denial",
    "example": "He lived in a small, austere cabin in the middle of the woods.",
    "letter": "A",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-043",
    "word": "Avoid",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To stay away from or prevent.",
    "example": "Mara hates fighting, so she always tries to avoid conflict.",
    "letter": "A",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-044",
    "word": "Beneficial",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Producing good results.",
    "example": "A balanced diet is beneficial to your health.",
    "letter": "B",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-045",
    "word": "Benevolent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "kind, generous",
    "example": "Many cultures believe in benevolent spirits.",
    "letter": "B",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-046",
    "word": "Bold",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Courageous or striking.",
    "example": "Elsie made a bold move by quitting her job.",
    "letter": "B",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-047",
    "word": "Borrow",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To take temporarily.",
    "example": "Libraries will let you borrow books for several weeks.",
    "letter": "B",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-048",
    "word": "Buttress",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To support or strengthen.",
    "example": "The evidence will buttress his argument.",
    "letter": "B",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-049",
    "word": "Bypass",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To go around or avoid.",
    "example": "We took a shortcut to bypass traffic.",
    "letter": "B",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-050",
    "word": "Calibrate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To adjust for precision.",
    "example": "The scientist had to calibrate the instrument to ensure his measurements were accurate.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-051",
    "word": "Candid",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "direct, blunt",
    "example": "Josh is candid about his desire to become an actor.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-052",
    "word": "Carelessly",
    "partOfSpeech": "adverb",
    "posLabel": "(adv)",
    "meaning": "Without caution.",
    "example": "He carelessly left his keys on the bus.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-053",
    "word": "Catastrophic",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Disastrous or causing great damage.",
    "example": "The catastrophic hurricane destroyed dozens of homes.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-054",
    "word": "Cause",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A reason for an action or event.",
    "example": "The fire's cause is still unknown.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-055",
    "word": "Characterization",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The way a character is described.",
    "example": "The novel's characterization was deep and complex.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-056",
    "word": "Circumvent",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To find a way around.",
    "example": "They found a loophole to circumvent the rule.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-057",
    "word": "Coincidence",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A surprising and unexpected event.",
    "example": "Meeting my neighbor at the airport was a coincidence.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-058",
    "word": "Collaboration",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "Working together on a task.",
    "example": "The scientists' collaboration led to a breakthrough.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-059",
    "word": "Commercialization",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The process of making something a business.",
    "example": "The commercialization of the product increased sales.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-060",
    "word": "Committed",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Dedicated to a cause or task.",
    "example": "Ava is committed to her studies and always wants top grades.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-061",
    "word": "Common",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Occurring frequently or shared.",
    "example": "It's very common for students to feel stressed before exams.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-062",
    "word": "Compelling",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Captivating or persuasive.",
    "example": "The debater gave a compelling argument.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-063",
    "word": "Competent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Having the necessary ability or skill.",
    "example": "Noah has worked at this job for a long time and is a competent engineer.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-064",
    "word": "Complementary",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Enhancing or completing another.",
    "example": "The artist and the engineer have skills that are complementary in the project.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-065",
    "word": "Complexity",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The state of being intricate or complicated.",
    "example": "The complexity of the 1,000 piece puzzle made it challenging.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-066",
    "word": "Compose",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To create or write.",
    "example": "Jordan plans to compose a new symphony.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-067",
    "word": "Compound",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To intensify or combine.",
    "example": "The traffic was compounded by bad weather.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-068",
    "word": "Comprise",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To consist of or include.",
    "example": "The book comprises ten chapters.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-069",
    "word": "Conceal",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To hide or keep secret.",
    "example": "Luca tried to conceal his disappointment.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-070",
    "word": "Concede",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To admit or yield.",
    "example": "She conceded that she was wrong during the argument.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-071",
    "word": "Conceptualize",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To form an idea or concept.",
    "example": "In this lab, scientists conceptualize new theories on viruses.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-072",
    "word": "Concerning",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Causing worry or distress.",
    "example": "The news about the approaching hurricane is quite concerning.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-073",
    "word": "Condition",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The state of something.",
    "example": "The car I bought is in excellent condition.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-074",
    "word": "Confident",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Feeling sure or self-assured.",
    "example": "Michael Jordan is confident in his abilities as a basketball player.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-075",
    "word": "Conflated",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Combined in a misleading way.",
    "example": "The two issues were conflated in the argument.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-076",
    "word": "Conform",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To comply with rules or expectations.",
    "example": "The alternative rocker refuses to conform to societal norms.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-077",
    "word": "Consensus",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "General agreement.",
    "example": "The team finally reached a consensus on the decision.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-078",
    "word": "Consistent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Acting in the same way over time.",
    "example": "My grandmother's knitting is always consistent in quality.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-079",
    "word": "Conspicuous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Easily noticed or standing out.",
    "example": "Veronica's red dress was conspicuous in the crowd.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-080",
    "word": "Constant",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Occurring continuously.",
    "example": "The criminal lived in constant fear that he'd be found out.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-081",
    "word": "Contentious",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Causing disagreement or debate.",
    "example": "Politics are highly contentious these days.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-082",
    "word": "Contingent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Dependent on something else.",
    "example": "Our family ski trip is contingent on the weather.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-083",
    "word": "Contradict",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to be in contrast with",
    "example": "The camera footage contradicts his alibi.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-084",
    "word": "Contrived",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Artificial or overly planned.",
    "example": "The movie's plot felt contrived and unrealistic.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-085",
    "word": "Controversial",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Causing public disagreement.",
    "example": "The judge's decision to free the criminal was highly controversial.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-086",
    "word": "Cordially",
    "partOfSpeech": "adverb",
    "posLabel": "(adv)",
    "meaning": "In a warm or friendly manner.",
    "example": "The two old friends greeted each other cordially.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-087",
    "word": "Corroborate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to provide evidence for; to back up (a claim)",
    "example": "The note signed by her father corroborates her claim that she was absent from class that day.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-088",
    "word": "Corrosive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Gradually destructive or harmful",
    "example": "The corrosive chemical has ruined the paint on my car.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-089",
    "word": "Costly",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Expensive or requiring sacrifice.",
    "example": "The mistake was a costly one and caused the company to go bankrupt.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-090",
    "word": "Counteract",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to work in opposition to",
    "example": "This ingredient seems to counteract the other ones.",
    "letter": "C",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-091",
    "word": "Critical",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Expressing analysis or judgment.",
    "example": "The review was highly critical of the film.",
    "letter": "C",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-092",
    "word": "Criticize",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To express disapproval.",
    "example": "My father tends to criticize others harshly.",
    "letter": "C",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-093",
    "word": "Deceptive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Misleading or dishonest.",
    "example": "The advertisement was deceptive in its claims of weight loss.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-094",
    "word": "Deciding",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Determining or influencing an outcome.",
    "example": "The final goal was the deciding factor in the match.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-095",
    "word": "Decisive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Conclusive or firm.",
    "example": "My boss's decisive leadership helped solve our company's crisis.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-096",
    "word": "Deficient",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "not enough in degree or amount",
    "example": "I feel as though the sources for my paper are deficient.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-097",
    "word": "Defunct",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "No longer existing or functional.",
    "example": "After people stopped using fax machines, the fax company became defunct.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-098",
    "word": "Delegate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To assign tasks or authority to others.",
    "example": "A good leader knows how to delegate responsibilities.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-099",
    "word": "Deliberation",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "Careful consideration or discussion.",
    "example": "After much deliberation, they made their decision.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-100",
    "word": "Delicate",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Fragile or requiring careful handling.",
    "example": "The delicate glass sculpture broke easily.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-101",
    "word": "Demarcate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To set boundaries or distinguish.",
    "example": "The Tornio river demarcates the border between Sweden and Finland.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-102",
    "word": "Derived",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Obtained or developed from a source.",
    "example": "The word \"aqua\" is derived from Latin.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-103",
    "word": "Despise",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To strongly dislike or look down upon.",
    "example": "The judge despises dishonesty.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-104",
    "word": "Desultory",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Lacking a clear plan or enthusiasm.",
    "example": "The tired boy's desultory efforts did not impress the coach.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-105",
    "word": "Determine",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To establish or decide.",
    "example": "The final exam will determine your grade.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-106",
    "word": "Deviate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To move away from a set path or norm.",
    "example": "When the new evidence was uncovered the lawyer deviated from the original plan.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-107",
    "word": "Devise",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to come up with (a plan)",
    "example": "Lana devised a plan to make herself famous.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-108",
    "word": "Diminish",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To decrease in size or importance.",
    "example": "The politician's influence has diminished over time.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-109",
    "word": "Directed",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Managed or guided.",
    "example": "This new film was directed by a renowned artist.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-110",
    "word": "Disagreement",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A difference of opinion.",
    "example": "An intense disagreement arose over the contract terms.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-111",
    "word": "Disastrous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Causing great harm or failure.",
    "example": "The earthquake had disastrous consequences for the island.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-112",
    "word": "Disconcerting",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Causing discomfort or confusion.",
    "example": "My girlfriend's sudden change in behavior is disconcerting.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-113",
    "word": "Discord",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "disagreement",
    "example": "Disputes over money caused intense discord in the family.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-114",
    "word": "Discount",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To disregard or reduce in value.",
    "example": "The teacher discounted his students' concerns.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-115",
    "word": "Discourage",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To dissuade or deter.",
    "example": "Luna tried to discourage her brother from moving out of the house.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-116",
    "word": "Discretion",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The ability to make responsible choices.",
    "example": "The detective handled the matter with great discretion.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-117",
    "word": "Disengage",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To separate or withdraw.",
    "example": "I was exhausted, so I tried to disengage from the argument.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-118",
    "word": "Dismiss",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To reject or send away.",
    "example": "The teacher dismissed the idea to end class early.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-119",
    "word": "Disorienting",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Causing confusion or loss of direction.",
    "example": "The vast corn maze was disorienting.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-120",
    "word": "Disparage",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To belittle or speak negatively about.",
    "example": "The politician disparaged his opponent's ideas on tax cuts.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-121",
    "word": "Disparate",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Essentially different or unconnected.",
    "example": "Many European countries have disparate Christmas traditions.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-122",
    "word": "Dispute",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A disagreement or argument.",
    "example": "The neighbors had a dispute over the new fence.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-123",
    "word": "Distinct",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Clearly different or separate.",
    "example": "My twin sons have distinct personalities.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-124",
    "word": "Distract",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To divert attention.",
    "example": "The rattling noise distracted Javi from his work.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-125",
    "word": "Distressed",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Suffering from anxiety or pain.",
    "example": "The woman looked distressed after the doctor's call.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-126",
    "word": "Diverge",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To move apart or differ.",
    "example": "My parents' opinions on politics began to diverge as they grew older.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-127",
    "word": "Diverse",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Showing variety or differences.",
    "example": "New York City has a diverse population.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-128",
    "word": "Dominance",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The state of being in control or superior.",
    "example": "The company's dominance in the market is evident.",
    "letter": "D",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-129",
    "word": "Dormant",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Inactive but capable of becoming active.",
    "example": "The volcano beneath Mount Fuji has been dormant for centuries.",
    "letter": "D",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-130",
    "word": "Dynamic",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Constantly changing or energetic.",
    "example": "My coworker is a dynamic speaker who commands attention wherever she goes.",
    "letter": "D",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-131",
    "word": "Earnest",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Serious and sincere.",
    "example": "He felt terrible about breaking the mirror and made an earnest apology.",
    "letter": "E",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-132",
    "word": "Eclipse",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To overshadow or surpass.",
    "example": "The headliner's performance eclipsed all others in the concert.",
    "letter": "E",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-133",
    "word": "Eloquent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "having refined or expressive communication skills (in speaking or writing)",
    "example": "His speech was not only eloquent but also extremely compelling.",
    "letter": "E",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-134",
    "word": "Elusive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Hard to find or understand.",
    "example": "Nothing became clearer, and the answer remained elusive.",
    "letter": "E",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-135",
    "word": "Encompass",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To include or surround.",
    "example": "The project encompasses multiple disciplines.",
    "letter": "E",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-136",
    "word": "Encounter",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To meet or face unexpectedly.",
    "example": "She encountered an old friend at the store.",
    "letter": "E",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-137",
    "word": "Encourage",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To support or inspire.",
    "example": "Teachers often encourage students to ask questions.",
    "letter": "E",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-138",
    "word": "Enduring",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Lasting over time.",
    "example": "Their 50-year friendship is enduring.",
    "letter": "E",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-139",
    "word": "Evidence",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "Information that supports a conclusion.",
    "example": "There is strong evidence to support the theory.",
    "letter": "E",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-140",
    "word": "Evoke",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to draw forth or call up",
    "example": "Horror movies are great at evoking fear.",
    "letter": "E",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-141",
    "word": "Exacerbate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To make a problem worse.",
    "example": "His rude comments only exacerbated the tense situation.",
    "letter": "E",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-142",
    "word": "Exactitude",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The quality of being precise or accurate.",
    "example": "The scientist's exactitude ensured reliable results.",
    "letter": "E",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-143",
    "word": "Exaggerate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To overstate or magnify beyond the truth.",
    "example": "My cousin tends to exaggerate his achievements.",
    "letter": "E",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-144",
    "word": "Exceed",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To go beyond a limit.",
    "example": "The driver exceeded the speed limit by nearly 30 miles an hour.",
    "letter": "E",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-145",
    "word": "Exemplify",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To serve as a typical example of something.",
    "example": "The woman's kindness to her neighbors exemplifies true generosity.",
    "letter": "E",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-146",
    "word": "Exhaustive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Thorough and complete.",
    "example": "The 300-page report provided an exhaustive analysis.",
    "letter": "E",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-147",
    "word": "Expansion",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The act of increasing in size or scope.",
    "example": "The company's expansion into international markets has been successful so far.",
    "letter": "E",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-148",
    "word": "Expensive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Costing a lot of money.",
    "example": "My sister's diamond ring was extremely expensive.",
    "letter": "E",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-149",
    "word": "Experiment",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A test to discover something new.",
    "example": "The scientist conducted an experiment to test the theory.",
    "letter": "E",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-150",
    "word": "Explicable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Able to be explained.",
    "example": "Once I knew the full story, my boyfriend's actions were explicable given the circumstances.",
    "letter": "E",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-151",
    "word": "Exploit",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To take advantage of something unfairly.",
    "example": "The mining company was accused of exploiting workers.",
    "letter": "E",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-152",
    "word": "Extensive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Covering a large area or scope.",
    "example": "The Art Institute of Chicago has an extensive Impressionist collection.",
    "letter": "E",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-153",
    "word": "Extraneous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Unrelated or unnecessary.",
    "example": "The report contained too much extraneous information that didn't matter to the trial.",
    "letter": "E",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-154",
    "word": "Fabricate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To invent or create, often dishonestly.",
    "example": "The criminal fabricated evidence to support his bogus claim.",
    "letter": "F",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-155",
    "word": "Foretell",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To predict or anticipate.",
    "example": "Ancient prophecies foretold the end of the world.",
    "letter": "F",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-156",
    "word": "Foster",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To encourage or promote development.",
    "example": "Teachers should strive to foster creativity in students.",
    "letter": "F",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-157",
    "word": "Fragile",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Easily broken or delicate.",
    "example": "The glass vase is very fragile.",
    "letter": "F",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-158",
    "word": "Fruitless",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Failing to achieve desired results.",
    "example": "Their search for survivors was fruitless.",
    "letter": "F",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-159",
    "word": "Genuine",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Authentic or real.",
    "example": "His apology seemed genuine.",
    "letter": "G",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-160",
    "word": "Grapple",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To struggle or wrestle with something.",
    "example": "The country is grappling with economic issues.",
    "letter": "G",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-161",
    "word": "Habitual",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Done regularly or repeatedly.",
    "example": "His habitual lateness annoyed his coworkers.",
    "letter": "H",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-162",
    "word": "Haphazard",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Lacking organization or planning.",
    "example": "The project was completed in a haphazard manner.",
    "letter": "H",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-163",
    "word": "Hibernation",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A state of dormancy or deep sleep.",
    "example": "Many bear species go into hibernation during the winter.",
    "letter": "H",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-164",
    "word": "Highlight",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To emphasize or make noticeable.",
    "example": "The article highlights key points of the debate.",
    "letter": "H",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-165",
    "word": "Hinder",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To obstruct or slow progress.",
    "example": "The heavy traffic hindered our journey.",
    "letter": "H",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-166",
    "word": "Hoard",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To accumulate and store excessively.",
    "example": "He hoarded food supplies and toilet paper during the pandemic.",
    "letter": "H",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-167",
    "word": "Homogeneous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Uniform or similar throughout.",
    "example": "The population of the village is homogeneous.",
    "letter": "H",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-168",
    "word": "Hypothesize",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To form a theory or assumption.",
    "example": "Scientists hypothesize about the origin of the universe.",
    "letter": "H",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-169",
    "word": "Imaginative",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Creative and full of new ideas.",
    "example": "The artist's work is highly imaginative.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-170",
    "word": "Imitation",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A copy or replica of something.",
    "example": "The purse was an imitation of a designer brand.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-171",
    "word": "Imminent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "About to happen soon.",
    "example": "A storm is imminent according to the forecast.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-172",
    "word": "Immune",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Resistant to disease or harm.",
    "example": "He's immune to the virus due to vaccination.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-173",
    "word": "Impartial",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Fair and not biased.",
    "example": "Judges must always remain impartial during a trial.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-174",
    "word": "Impending",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Approaching or about to happen.",
    "example": "They prepared for the impending storm by boarding up windows.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-175",
    "word": "Impenetrable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Impossible to pass through.",
    "example": "The fortress was impenetrable to enemy attack.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-176",
    "word": "Imperceptible",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Very slight or difficult to notice.",
    "example": "Alex's reaction was imperceptible, so I couldn't tell what he was thinking.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-177",
    "word": "Implement",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To put into effect or execute.",
    "example": "The business will implement new rules to comply with the change in laws.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-178",
    "word": "Implication",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A possible consequence or meaning.",
    "example": "The policy change has serious implications for lobbyists.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-179",
    "word": "Implicit",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Implied rather than stated directly.",
    "example": "His approval was implicit in his silence.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-180",
    "word": "Impractical",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not sensible or realistic.",
    "example": "The dress design was too impractical to actually wear.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-181",
    "word": "Improvise",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To create or perform spontaneously.",
    "example": "The actor had to improvise when he forgot his lines.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-182",
    "word": "Inactive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not engaged in movement or activity.",
    "example": "The volcano has been inactive for decades.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-183",
    "word": "Inadequate",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Insufficient or lacking.",
    "example": "I felt inadequate when I didn't make the final shot during the basketball game.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-184",
    "word": "Inadvertently",
    "partOfSpeech": "adverb",
    "posLabel": "(adv)",
    "meaning": "Unintentionally or by accident.",
    "example": "The new worker caused a ruckus when he inadvertently deleted an important file.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-185",
    "word": "Incite",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to encourage or stir up",
    "example": "Her hateful words incited anger in the crowd.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-186",
    "word": "Inconspicuous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not being easily seen or noticed.",
    "example": "The spy was inconspicuous as he moved through the crowd.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-187",
    "word": "Indecipherable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Impossible to understand or read.",
    "example": "His messy handwriting was indecipherable.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-188",
    "word": "Indicate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To point out or show.",
    "example": "The results indicate a positive trend.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-189",
    "word": "Indifference",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "Lack of interest or concern.",
    "example": "Natalia's indifference to the situation frustrated her sisters.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-190",
    "word": "Indisputable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Unable to be challenged or denied.",
    "example": "Because the evidence was indisputable, the lawyer was certain his client would go free.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-191",
    "word": "Indistinct",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not clear or sharply defined.",
    "example": "The figure in the distance was blurry and indistinct.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-192",
    "word": "Indulge",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To allow oneself to enjoy.",
    "example": "After a long day of work, Jane decided to indulge in a piece of cake.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-193",
    "word": "Ineffectual",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not producing the desired effect.",
    "example": "The mayor's efforts to change the city's parking rules were ineffectual.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-194",
    "word": "Inevitable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Certain to happen; unavoidable.",
    "example": "You must accept that change is inevitable in life.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-195",
    "word": "Inexpensive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not costly.",
    "example": "The new Vietnamese restaurant down the street serves inexpensive but delicious meals.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-196",
    "word": "Inexplicable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Unable to be explained.",
    "example": "My uncle's sudden departure from the family reunion was inexplicable.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-197",
    "word": "Influence",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The power to affect others.",
    "example": "The pastor's speech had a strong influence on the audience.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-198",
    "word": "Infrequent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not occurring often.",
    "example": "Rain is infrequent in the Atacama Desert.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-199",
    "word": "Inhibit",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To hinder or restrain.",
    "example": "Fear of failure can inhibit creativity.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-200",
    "word": "Innocuous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Harmless or inoffensive.",
    "example": "The comment seemed innocuous, but it upset him.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-201",
    "word": "Insensible",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Unaware or indifferent.",
    "example": "The father was insensible to his children's boredom.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-202",
    "word": "Insignificant",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Too small or unimportant to matter.",
    "example": "The difference in price between the two ice creams was insignificant.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-203",
    "word": "Inspect",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To examine closely.",
    "example": "The contractor will inspect the building for safety.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-204",
    "word": "Inspirational",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Providing motivation or encouragement.",
    "example": "Evan's story of recovering from a severe car accident was inspirational to many.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-205",
    "word": "Intangible",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not able to be touched or measured.",
    "example": "Love is an intangible concept.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-206",
    "word": "Intentional",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Done on purpose.",
    "example": "By reading the evidence, I could tell the man’s actions were intentional.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-207",
    "word": "Interchangeable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Able to be substituted for each other.",
    "example": "These parts are interchangeable so it doesn't matter which one you use.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-208",
    "word": "Interject",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To insert a comment abruptly.",
    "example": "My brother interjected with a sarcastic remark.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-209",
    "word": "Interpret",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To explain the meaning of something.",
    "example": "I don't understand this poem; can you interpret it for me?",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-210",
    "word": "Intersect",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To cross or meet at a point.",
    "example": "The two streets intersect downtown.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-211",
    "word": "Intricate",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Very detailed or complicated.",
    "example": "The artist created an intricate design on the fabric.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-212",
    "word": "Intriguing",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Arousing curiosity or interest.",
    "example": "The mystery novel was intriguing because I couldn't figure out who the murderer was.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-213",
    "word": "Invalidate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To make something void or null.",
    "example": "The new evidence invalidated his argument.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-214",
    "word": "Invent",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To create something new.",
    "example": "Thomas Edison invented the incandescent light bulb.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-215",
    "word": "Investigation",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "Systematic inquiries to uncover facts.",
    "example": "The police conducted a thorough investigation of the crime scene.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-216",
    "word": "Involuntarily",
    "partOfSpeech": "adverb",
    "posLabel": "(adv)",
    "meaning": "Done without conscious control.",
    "example": "She involuntarily gasped in surprise.",
    "letter": "I",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-217",
    "word": "Irrelevant",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not related or applicable.",
    "example": "His comment was irrelevant to the discussion.",
    "letter": "I",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-218",
    "word": "Isolate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To separate from others.",
    "example": "We need to isolate the patient with the very contagious disease.",
    "letter": "I",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-219",
    "word": "Lacking",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not having enough of something.",
    "example": "The short essay was lacking in detail.",
    "letter": "L",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-220",
    "word": "Latent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Present but not active.",
    "example": "He had a latent talent for music.",
    "letter": "L",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-221",
    "word": "Legitimate",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Lawful or valid.",
    "example": "Because he was named in the will, John's claim to the property was legitimate.",
    "letter": "L",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-222",
    "word": "Localized",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Restricted to a particular area.",
    "example": "The disease was localized to one region.",
    "letter": "L",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-223",
    "word": "Manageable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Able to be controlled or handled.",
    "example": "I'm lucky that my workload is manageable today, so I'll be home in time for dinner.",
    "letter": "M",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-224",
    "word": "Mandatory",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Required or obligatory.",
    "example": "Attendance at the meeting is mandatory for all employees.",
    "letter": "M",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-225",
    "word": "Mimic",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To imitate.",
    "example": "Parrots can mimic human speech.",
    "letter": "M",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-226",
    "word": "Misanthropic",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Disliking people or society.",
    "example": "The old man was known for his misanthropic views.",
    "letter": "M",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-227",
    "word": "Misrepresent",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To give a false impression.",
    "example": "The article misrepresented the facts.",
    "letter": "M",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-228",
    "word": "Moderate",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not extreme; average.",
    "example": "He never has strong opinions, and most of his views are moderate.",
    "letter": "M",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-229",
    "word": "Multifaceted",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Having many aspects or features.",
    "example": "The housing problem is multifaceted and will take multiple solutions to solve.",
    "letter": "M",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-230",
    "word": "Neglect",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To fail to care for properly.",
    "example": "He neglected his responsibilities when he decided to play video games instead of clean the house.",
    "letter": "N",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-231",
    "word": "Neutrality",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The state of not taking sides.",
    "example": "Switzerland maintained neutrality during World War II.",
    "letter": "N",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-232",
    "word": "Newfound",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Recently discovered or developed.",
    "example": "The recently-released prisoner enjoyed his newfound freedom.",
    "letter": "N",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-233",
    "word": "Notional",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Existing only in theory.",
    "example": "Because we hadn't started it, the plan was still notional.",
    "letter": "N",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-234",
    "word": "Novel",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "New or original.",
    "example": "The doctor introduced a novel approach to hip surgery.",
    "letter": "N",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-235",
    "word": "Nuanced",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Having subtle differences.",
    "example": "His argument was well-developed and nuanced.",
    "letter": "N",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-236",
    "word": "Obligate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To compel or require.",
    "example": "The contract obligates him to pay.",
    "letter": "O",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-237",
    "word": "Obscure",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not easily understood or seen.",
    "example": "The meaning of the letter was obscure and I didn't know what to make of it.",
    "letter": "O",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-238",
    "word": "Observable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Able to be seen or noticed.",
    "example": "The rings of Saturn were observable through the telescope.",
    "letter": "O",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-239",
    "word": "Observant",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Quick to notice things.",
    "example": "The detective is very observant of small details.",
    "letter": "O",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-240",
    "word": "Obsolete",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "no longer used; rare or uncommon",
    "example": "Historians assumed record players would be obsolete by now, but in fact they’re making a huge comeback.",
    "letter": "O",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-241",
    "word": "Obstructed",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Blocked or hindered.",
    "example": "We couldn't leave town because the road was obstructed by fallen trees.",
    "letter": "O",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-242",
    "word": "Occupy",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To take up space or time.",
    "example": "The kids occupied themselves with games.",
    "letter": "O",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-243",
    "word": "Oddity",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "Something unusual or strange.",
    "example": "The museum displayed an interesting oddity.",
    "letter": "O",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-244",
    "word": "Offhand",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Done without preparation or thought.",
    "example": "His offhand remark surprised everyone.",
    "letter": "O",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-245",
    "word": "Omnipotent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "almighty and all powerful",
    "example": "Gods are omnipotent beings who can control human destiny.",
    "letter": "O",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-246",
    "word": "Onset",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "the beginning or early stages",
    "example": "At the onset of her career as a lawyer, things were looking up.",
    "letter": "O",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-247",
    "word": "Operative",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Functioning or having effect.",
    "example": "The new policy is now operative so be sure to follow it.",
    "letter": "O",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-248",
    "word": "Ornamental",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Decorative rather than functional.",
    "example": "The garden was filled with ornamental plants that helped beautify the space.",
    "letter": "O",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-249",
    "word": "Oust",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to remove or force out of (usu. a position or office)",
    "example": "Sick and tired of putting up with his bad moods, the pirates ousted their captain.",
    "letter": "O",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-250",
    "word": "Outstrip",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To surpass or exceed.",
    "example": "Sales of my new novel outstripped all expectations.",
    "letter": "O",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-251",
    "word": "Overcome",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To succeed in dealing with a problem.",
    "example": "She overcame her fear of public speaking and was able to deliver her remarks.",
    "letter": "O",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-252",
    "word": "Overlook",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To fail to notice or consider.",
    "example": "The officer overlooked an important detail that would have helped solve the crime.",
    "letter": "O",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-253",
    "word": "Overreact",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To respond too strongly.",
    "example": "My sister overreacted to our parents' criticism of her outfit.",
    "letter": "O",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-254",
    "word": "Overshadow",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To be more important than something else.",
    "example": "His success overshadowed his past failures.",
    "letter": "O",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-255",
    "word": "Overtly",
    "partOfSpeech": "adverb",
    "posLabel": "(adv)",
    "meaning": "Openly and clearly.",
    "example": "He overtly expressed his disapproval by telling me what he thought.",
    "letter": "O",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-256",
    "word": "Overwhelmed",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Feeling excessive stress or emotion.",
    "example": "Agatha felt overwhelmed by her workload and had no idea how she'd finish it all in time.",
    "letter": "O",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-257",
    "word": "Paramount",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "predominant, superior, most important",
    "example": "Our paramount concern is the safety of our employees.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-258",
    "word": "Paucity",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A scarcity or lack.",
    "example": "The crime will be difficult to solve because there is a paucity of evidence.",
    "letter": "P",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-259",
    "word": "Perceive",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To become aware of something.",
    "example": "She perceived a hint of sadness in his voice.",
    "letter": "P",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-260",
    "word": "Peripheral",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "On the edge or outer part of something.",
    "example": "My involvement was peripheral to the project because I didn't do much.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-261",
    "word": "Permanent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Lasting indefinitely.",
    "example": "The marker left a permanent stain on my favorite shirt that I won't be able to get out.",
    "letter": "P",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-262",
    "word": "Perpetual",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Continuing forever or indefinitely.",
    "example": "The con artist lived in perpetual fear of being arrested.",
    "letter": "P",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-263",
    "word": "Persistent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Continuing despite difficulty.",
    "example": "After fifty years of buying lottery tickets, persistent efforts paid off when he won the jackpot.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-264",
    "word": "Popularize",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To make widely known.",
    "example": "The internet popularized online shopping.",
    "letter": "P",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-265",
    "word": "Postulate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To assume or propose a theory.",
    "example": "Scientists postulated a new hypothesis for the origin of the universe.",
    "letter": "P",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-266",
    "word": "Pragmatic",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Practical and realistic.",
    "example": "Elliot put his emotions aside and took a pragmatic approach to problem-solving.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-267",
    "word": "Praise",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To express approval or admiration.",
    "example": "The teacher praised the students' hard work.",
    "letter": "P",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-268",
    "word": "Precarious",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Uncertain or unstable.",
    "example": "The goat was perched on a precarious edge of the cliff.",
    "letter": "P",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-269",
    "word": "Preclude",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To prevent from happening.",
    "example": "Dylan's injury precluded him from playing in the soccer match.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-270",
    "word": "Predatory",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Exploiting others for personal gain.",
    "example": "The credit company engaged in predatory lending practices.",
    "letter": "P",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-271",
    "word": "Predetermined",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Decided in advance.",
    "example": "The outcome seemed predetermined and that we could do nothing to change it.",
    "letter": "P",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-272",
    "word": "Predict",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To say what will happen in the future.",
    "example": "Meteorologists predict rain tomorrow.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-273",
    "word": "Premeditated",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Planned beforehand.",
    "example": "Because the man had planned the theft for weeks, it was obvious the crime was premeditated.",
    "letter": "P",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-274",
    "word": "Prescribe",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To recommend or order a treatment.",
    "example": "The doctor prescribed antibiotics when I had an ear infection.",
    "letter": "P",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-275",
    "word": "Preserve",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To keep something in its original state.",
    "example": "The builders worked to preserve the house's original decorations.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-276",
    "word": "Presume",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To assume something to be true.",
    "example": "I presume he will be late to the party.",
    "letter": "P",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-277",
    "word": "Prevail",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To win or be more powerful.",
    "example": "Justice will always prevail.",
    "letter": "P",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-278",
    "word": "Preventable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Able to be avoided.",
    "example": "Many diseases are preventable with vaccines.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-279",
    "word": "Probability",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "Likelihood of something happening.",
    "example": "When you live in the desert, there's almost always a low probability of rain.",
    "letter": "P",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-280",
    "word": "Proclaim",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To announce officially.",
    "example": "The king proclaimed a new law.",
    "letter": "P",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-281",
    "word": "Produce",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To create or generate something.",
    "example": "The Ford factory produces thousands of cars each year.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-282",
    "word": "Profusion",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A large quantity of something.",
    "example": "The garden had a profusion of flowers every spring.",
    "letter": "P",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-283",
    "word": "Prolong",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To extend in duration.",
    "example": "He tried to prolong the meeting from one hour to two.",
    "letter": "P",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-284",
    "word": "Prominent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Important or well-known.",
    "example": "Marie Curie was a prominent scientist who won many awards.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-285",
    "word": "Proponent",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A supporter of a cause or idea.",
    "example": "The environmentalist was a proponent of renewable energy.",
    "letter": "P",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-286",
    "word": "Provoke",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To stir up or incite.",
    "example": "Miriam's rude words provoked an argument.",
    "letter": "P",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-287",
    "word": "Prudently",
    "partOfSpeech": "adverb",
    "posLabel": "(adv)",
    "meaning": "In a wise or careful manner.",
    "example": "My grandmother always prudently saved money for emergencies.",
    "letter": "P",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-288",
    "word": "Quantity",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "An amount or number.",
    "example": "The pudding recipe requires a small quantity of sugar.",
    "letter": "Q",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-289",
    "word": "Quarrel",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "An angry argument or dispute.",
    "example": "The couple had a loud quarrel over money.",
    "letter": "Q",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-290",
    "word": "Questionable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Doubtful or uncertain.",
    "example": "Despite claiming to want to help people, the politician's motives were questionable.",
    "letter": "Q",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-291",
    "word": "Ramify",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to split into two or more branches",
    "example": "Cars ramified throughout the world in the twentieth century.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-292",
    "word": "Rarely",
    "partOfSpeech": "adverb",
    "posLabel": "(adv)",
    "meaning": "Infrequently or seldom.",
    "example": "My sister rarely eats fast food.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-293",
    "word": "Rationalize",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To justify an action with reasoning.",
    "example": "He tried to rationalize his mistake by explaining his thought process.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-294",
    "word": "Rebellion",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "An act of resistance against authority.",
    "example": "The peasants led a rebellion against the king.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-295",
    "word": "Recalcitrant",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Stubbornly resistant to authority.",
    "example": "The recalcitrant student refused to obey.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-296",
    "word": "Recant",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To take back a previous statement.",
    "example": "He was forced to recant his confession.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-297",
    "word": "Receptive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Open to new ideas.",
    "example": "The new dancer was receptive to feedback.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-298",
    "word": "Reciprocate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To give in return.",
    "example": "I reciprocated my brother's kindness by buying him dinner.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-299",
    "word": "Recognizable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Easily identified.",
    "example": "The Nike logo is instantly recognizable.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-300",
    "word": "Rectify",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To correct or fix something.",
    "example": "She tried to rectify her mistake with an apology.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-301",
    "word": "Redefine",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To change the meaning of something.",
    "example": "The company redefined its mission.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-302",
    "word": "Redress",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To set right or remedy.",
    "example": "They sought to redress past injustices.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-303",
    "word": "Reform",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To improve by making changes.",
    "example": "The government promised to reform the healthcare system.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-304",
    "word": "Refuse",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To decline or reject.",
    "example": "Emilia refused the job offer.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-305",
    "word": "Refute",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To prove false or incorrect.",
    "example": "The scientist refuted the claim that the Earth was flat.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-306",
    "word": "Regrettable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Causing sorrow or disappointment.",
    "example": "Forgetting my boyfriend's birthday was a regrettable mistake.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-307",
    "word": "Regulate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To control or manage.",
    "example": "The government regulates nuclear energy facilities.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-308",
    "word": "Reject",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To dismiss or refuse to accept.",
    "example": "She rejected her boyfriend's proposal.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-309",
    "word": "Relocate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To move to a new place.",
    "example": "The dentist relocated to a bigger office.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-310",
    "word": "Renounce",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To give up or reject formally.",
    "example": "He renounced his citizenship after moving to a new country.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-311",
    "word": "Replenish",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To refill or restore.",
    "example": "After we finished the lemonade, the hostess replenished the pitcher.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-312",
    "word": "Replicable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Able to be copied or repeated.",
    "example": "The experiment's results were replicable.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-313",
    "word": "Representative",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A person acting on behalf of others.",
    "example": "The company's representative spoke at the meeting.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-314",
    "word": "Repress",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To suppress or hold back.",
    "example": "Although devastated, Jalen repressed his emotions.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-315",
    "word": "Reprieve",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A temporary relief or delay.",
    "example": "Because the defendant needed surgery, the judge granted a reprieve.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-316",
    "word": "Repudiate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To reject or disown.",
    "example": "She repudiated the accusation that she'd stolen money from the company.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-317",
    "word": "Resilient",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Able to recover quickly.",
    "example": "Even after setbacks, the patient is very resilient.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-318",
    "word": "Resolve",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To find a solution.",
    "example": "The warring siblings eventually resolved their differences.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-319",
    "word": "Responsive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Reacting quickly or positively.",
    "example": "The team wanted to improve and was very responsive to feedback.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-320",
    "word": "Restore",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To bring back to original condition.",
    "example": "The architecture team carefully restored the old house.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-321",
    "word": "Restrain",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To hold back or limit.",
    "example": "Even though Tom was furious, he restrained his anger.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-322",
    "word": "Retain",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To keep or hold onto.",
    "example": "I use this pitcher to retain water for my herb garden.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-323",
    "word": "Retaliate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To respond to an attack.",
    "example": "After Celia yelled at Dom, he retaliated with a counterattack.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-324",
    "word": "Reticent",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Reluctant to share one's thoughts or feelings; reserved",
    "example": "My neighbor is so reticent I never know what she really thinks of anything.",
    "letter": "R",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-325",
    "word": "Rousing",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Exciting or stirring.",
    "example": "The speaker gave a rousing speech that brought the audience to its feet.",
    "letter": "R",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-326",
    "word": "Rudimentary",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Basic or simple.",
    "example": "The little boy only has a rudimentary understanding of math.",
    "letter": "R",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-327",
    "word": "Sanction",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To authorize or approve.",
    "example": "The government sanctioned the project so construction will start soon.",
    "letter": "S",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-328",
    "word": "Sanguine",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Optimistic or hopeful.",
    "example": "He remained sanguine despite repeated setbacks.",
    "letter": "S",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-329",
    "word": "Saturate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To soak or fill completely.",
    "example": "The sponge was saturated with water.",
    "letter": "S",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-330",
    "word": "Scorn",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "to look down on with disdain",
    "example": "It’s difficult for me not to scorn those who use improper grammar.",
    "letter": "S",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-331",
    "word": "Scrutinize",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To examine closely.",
    "example": "I'm going to have my lawyer scrutinize the contract.",
    "letter": "S",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-332",
    "word": "Secretive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Keeping things hidden.",
    "example": "He was secretive about his plans for Valentine's Day.",
    "letter": "S",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-333",
    "word": "Sensitive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Easily affected or aware.",
    "example": "She is very sensitive to criticism.",
    "letter": "S",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-334",
    "word": "Simulate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To imitate or replicate.",
    "example": "The pilot simulated an emergency landing.",
    "letter": "S",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-335",
    "word": "Sincerity",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The quality of being genuine.",
    "example": "His sincerity was evident in his speech.",
    "letter": "S",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-336",
    "word": "Skeptical",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Doubtful or questioning.",
    "example": "The teacher was skeptical of the student's claim that the dog ate her homework.",
    "letter": "S",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-337",
    "word": "Sophisticated",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Complex or refined.",
    "example": "The building's design was intricate and sophisticated.",
    "letter": "S",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-338",
    "word": "Span",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The extent or length of something.",
    "example": "The Golden Gate Bridge has a long span.",
    "letter": "S",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-339",
    "word": "Sparingly",
    "partOfSpeech": "adverb",
    "posLabel": "(adv)",
    "meaning": "insufficiently, meagerly, or in a restricted manner",
    "example": "Due to my blood pressure, I must eat salt sparingly.",
    "letter": "S",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-340",
    "word": "Speculate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To guess or theorize.",
    "example": "He speculated about the outcome of the soccer match.",
    "letter": "S",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-341",
    "word": "Spurious",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "False or deceptive.",
    "example": "The claims were spurious and therefore thrown out in court.",
    "letter": "S",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-342",
    "word": "Stark",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Very plain; devoid of any details or features",
    "example": "Looking out at the stark landscape, I felt a keen sense of isolation.",
    "letter": "S",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-343",
    "word": "Strenuously",
    "partOfSpeech": "adverb",
    "posLabel": "(adv)",
    "meaning": "With great effort.",
    "example": "She strenuously denied the accusations against her.",
    "letter": "S",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-344",
    "word": "Sturdily",
    "partOfSpeech": "adverb",
    "posLabel": "(adv)",
    "meaning": "Strongly or solidly.",
    "example": "The chair was sturdily built and had no chance of breaking.",
    "letter": "S",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-345",
    "word": "Stymie",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To hinder or block.",
    "example": "The restoration project was stymied by a lack of funds.",
    "letter": "S",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-346",
    "word": "Substantial",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Large or important.",
    "example": "Jackie made a substantial donation to her alma mater.",
    "letter": "S",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-347",
    "word": "Subtle",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Hard to detect or analyze",
    "example": "The author gave a subtle hint as to who the murderer was.",
    "letter": "S",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-348",
    "word": "Succumb",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To give in or surrender.",
    "example": "He succumbed to the temptation to eat the entire bag of gummy bears.",
    "letter": "S",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-349",
    "word": "Superficial",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Shallow or lacking depth.",
    "example": "The candidate struggled to answer questions about policy because his knowledge was superficial.",
    "letter": "S",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-350",
    "word": "Supplement",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To add to something.",
    "example": "She supplemented her income by starting a side hustle.",
    "letter": "S",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-351",
    "word": "Surmise",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To infer or guess.",
    "example": "He surmised the answer based on context clues.",
    "letter": "S",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-352",
    "word": "Surpass",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To exceed or go beyond.",
    "example": "She surpassed expectations by winning the national spelling bee.",
    "letter": "S",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-353",
    "word": "Surrender",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To give up or yield.",
    "example": "The weakened army surrendered to the enemy.",
    "letter": "S",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-354",
    "word": "Susceptible",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Easily influenced or affected.",
    "example": "With his weakened immune system, Marcelo is susceptible to illness.",
    "letter": "S",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-355",
    "word": "Synchronization",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The process of coordinating events.",
    "example": "The synchronization of lights helped traffic flow.",
    "letter": "S",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-356",
    "word": "Tentative",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Uncertain or not fully decided.",
    "example": "Our plans are tentative and may change.",
    "letter": "T",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-357",
    "word": "Tenuous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Weak or insubstantial.",
    "example": "His argument was tenuous at best.",
    "letter": "T",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-358",
    "word": "Theoretical",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Based on theory rather than practice.",
    "example": "The idea remains theoretical until tested.",
    "letter": "T",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-359",
    "word": "Theory",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "A system of ideas intended to explain something.",
    "example": "Einstein's theory of relativity changed physics.",
    "letter": "T",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-360",
    "word": "Thoughtfulness",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "Consideration for others.",
    "example": "Her thoughtfulness made her a great friend.",
    "letter": "T",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-361",
    "word": "Tranquil",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Peaceful and calm.",
    "example": "The lake was tranquil at sunset.",
    "letter": "T",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-362",
    "word": "Transform",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To change in form or appearance.",
    "example": "The caterpillar transformed into a butterfly.",
    "letter": "T",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-363",
    "word": "Ubiquitous",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Present everywhere.",
    "example": "Smartphones have become ubiquitous in society.",
    "letter": "U",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-364",
    "word": "Uncontroversial",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not likely to cause disagreement.",
    "example": "The decision was uncontroversial and widely accepted.",
    "letter": "U",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-365",
    "word": "Undeniable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Cannot be disputed.",
    "example": "Simone Biles' talent as a gymnast is undeniable.",
    "letter": "U",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-366",
    "word": "Underscore",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To emphasize.",
    "example": "The report underscored the importance of safety.",
    "letter": "U",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-367",
    "word": "Unimportant",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not significant.",
    "example": "The details were unimportant to the main issue.",
    "letter": "U",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-368",
    "word": "Unintended",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not planned or meant.",
    "example": "The side effects of the medication were unintended.",
    "letter": "U",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-369",
    "word": "Universal",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Common to all.",
    "example": "The desire for love is universal.",
    "letter": "U",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-370",
    "word": "Unmistakable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Clearly recognizable.",
    "example": "Morgan Freeman's voice is unmistakable.",
    "letter": "U",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-371",
    "word": "Unobtrusive",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Not attracting attention.",
    "example": "The waitress did her best to be unobtrusive while clearing the table.",
    "letter": "U",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-372",
    "word": "Unoriginal",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Lacking originality.",
    "example": "His speech was unoriginal and predictable.",
    "letter": "U",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-373",
    "word": "Unpredictable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Difficult to foresee.",
    "example": "The weather in winter can often be unpredictable.",
    "letter": "U",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-374",
    "word": "Validate",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To confirm the accuracy of something.",
    "example": "The test results validated his hypothesis.",
    "letter": "V",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-375",
    "word": "Variable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Likely to change.",
    "example": "The weather is highly variable in spring.",
    "letter": "V",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-376",
    "word": "Verisimilitude",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The appearance of being true or real.",
    "example": "The novel’s verisimilitude made it compelling.",
    "letter": "V",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-377",
    "word": "Veritable",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Used to emphasize truth.",
    "example": "Einstein was a veritable genius.",
    "letter": "V",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-378",
    "word": "Vigilance",
    "partOfSpeech": "noun",
    "posLabel": "(n)",
    "meaning": "The action of keeping careful watch.",
    "example": "Constant vigilance is needed for security.",
    "letter": "V",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-379",
    "word": "Vital",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Urgently necessary",
    "example": "It is vital that you respond by the deadline.",
    "letter": "V",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-380",
    "word": "Volatile",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Liable to change rapidly and unpredictably; easily evaporated (in scientific contexts)",
    "example": "My uncle's mood is very volatile, so we never know how he's going to react.",
    "letter": "V",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-381",
    "word": "Waive",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To give up a right or claim voluntarily.",
    "example": "He waived his right to an attorney.",
    "letter": "W",
    "category": "Nuance & Rhetoric"
  },
  {
    "id": "VOCAB-382",
    "word": "Warranted",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Justified or necessary.",
    "example": "The decision was warranted by the evidence.",
    "letter": "W",
    "category": "High-Frequency"
  },
  {
    "id": "VOCAB-383",
    "word": "Widespread",
    "partOfSpeech": "adjective",
    "posLabel": "(adj)",
    "meaning": "Found or occurring over a large area.",
    "example": "The disease became widespread.",
    "letter": "W",
    "category": "Academic Core"
  },
  {
    "id": "VOCAB-384",
    "word": "Withdraw",
    "partOfSpeech": "verb",
    "posLabel": "(v)",
    "meaning": "To remove or retreat.",
    "example": "She withdrew from the competition.",
    "letter": "W",
    "category": "Nuance & Rhetoric"
  }
];

export const VOCAB_STUDY_TIPS = [
  "Learn 10–15 words at a time as recommended by the Digital SAT guidelines.",
  "Read the meaning, say the example sentence aloud, then craft your own original sentence.",
  "Review the words again the next day to solidify them in long-term memory.",
  "In Words in Context questions, eliminate choices that don't match the positive/negative tone and specific subject matter of the sentence."
];
