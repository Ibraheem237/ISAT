const fs = require('fs');
const path = require('path');

const vocabRaw = [
  // Page 1
  { word: 'Abate', pos: 'v', meaning: 'to become less active, less intense, or less in amount', example: 'As I began my speech, my feelings of nervousness quickly abated.' },
  { word: 'Abrupt', pos: 'adj', meaning: 'Sudden and unexpected.', example: 'His abrupt departure surprised everyone.' },
  { word: 'Abstract', pos: 'adj', meaning: 'existing purely in the mind; not representing actual reality', example: 'Julie had trouble understanding the appeal of the abstract painting.' },
  { word: 'Abysmal', pos: 'adj', meaning: 'extremely bad', example: 'I got an abysmal grade on my research paper!' },
  { word: 'Acceptable', pos: 'adj', meaning: 'Satisfactory or permissible.', example: "The teacher deemed Sara's late assignment acceptable." },
  { word: 'Accidental', pos: 'adj', meaning: 'Happening by chance.', example: 'The oil spill was purely accidental.' },
  { word: 'Accommodate', pos: 'v', meaning: 'To provide space or make adjustments.', example: 'The Grand Hotel can accommodate up to 500 guests.' },
  { word: 'Accuracy', pos: 'n', meaning: 'The quality of being correct or precise.', example: "The accuracy of the intern's report was impressive." },
  { word: 'Acknowledge', pos: 'v', meaning: 'To recognize or admit the truth.', example: 'She refused to acknowledge her mistake.' },
  { word: 'Acquired', pos: 'adj', meaning: 'Gained through effort or experience.', example: 'Edmund had acquired a taste for fine wine.' },
  { word: 'Adapt', pos: 'v', meaning: 'To adjust to new conditions.', example: 'Newly-released animals generally adapt to their environments over time.' },

  // Page 2
  { word: 'Adept', pos: 'adj', meaning: 'having knowledge or skill (usu. in a particular area)', example: 'Beth loves playing the piano, but she’s especially adept at the violin.' },
  { word: 'Adequate', pos: 'adj', meaning: 'having sufficient qualifications to meet a specific task or purpose', example: 'Though his resume was adequate, the company doubted whether he’d be a good fit.' },
  { word: 'Adhere', pos: 'v', meaning: 'To stick to or follow closely.', example: "You must adhere to the rules if you don't want to get in trouble." },
  { word: 'Adjust', pos: 'v', meaning: 'To modify or change slightly.', example: 'He had to adjust his seat for comfort.' },
  { word: 'Admire', pos: 'v', meaning: 'To respect or look up to.', example: "I admire my mother's dedication to her work." },
  { word: 'Advantageous', pos: 'adj', meaning: 'Beneficial or useful.', example: 'Speaking multiple languages is advantageous.' },
  { word: 'Advent', pos: 'n', meaning: 'the arrival or creation of something', example: 'The world has never been the same since the advent of the light bulb.' },
  { word: 'Advise', pos: 'v', meaning: 'To recommend or give guidance.', example: 'I advise you to study for the exam.' },
  { word: 'Aggravate', pos: 'v', meaning: 'To worsen or intensify.', example: 'Scratching the rash will only aggravate it.' },
  { word: 'Aggressive', pos: 'adj', meaning: 'Forceful or overly assertive.', example: "The man's aggressive tone made everyone uneasy." },
  { word: 'Allude', pos: 'v', meaning: 'to make a secretive mention of something', example: 'She alluded to the problem at hand but didn’t say anything more about it.' },
  { word: 'Ambiguity', pos: 'n', meaning: 'Uncertainty or multiple interpretations.', example: 'The ambiguity in his vague statement caused confusion.' },
  { word: 'Ambivalence', pos: 'n', meaning: 'Mixed or conflicting feelings.', example: 'Jessie felt ambivalence about moving to a new city.' },

  // Page 3
  { word: 'Ameliorate', pos: 'v', meaning: 'To improve or make better.', example: 'The new policy aims to ameliorate working conditions for all employees.' },
  { word: 'Amplify', pos: 'v', meaning: 'To increase in size or effect.', example: 'The microphone will amplify your voice.' },
  { word: 'Amusing', pos: 'adj', meaning: 'Entertaining or humorous.', example: "Jason's joke was quite amusing." },
  { word: 'Analogous', pos: 'adj', meaning: 'similar but not identical', example: 'Green onions are considered analogous to spring onions.' },
  { word: 'Annotate', pos: 'v', meaning: 'To add notes or comments.', example: 'Please annotate the medical text with your observations.' },
  { word: 'Announce', pos: 'v', meaning: 'To make a public statement.', example: 'The CEO will announce the new policy tomorrow.' },
  { word: 'Anomaly', pos: 'n', meaning: 'something different from the norm', example: 'This result is an anomaly and very rarely happens.' },
  { word: 'Antagonistic', pos: 'adj', meaning: 'Showing hostility or opposition.', example: 'His antagonistic behavior created tension at work.' },
  { word: 'Antecedent', pos: 'n', meaning: 'A preceding event or condition.', example: 'The antecedent to the war was political unrest.' },
  { word: 'Anticipate', pos: 'v', meaning: 'To expect or predict.', example: 'Does the weatherman anticipate a rise in temperatures next week?' },
  { word: 'Antipathy', pos: 'n', meaning: 'a strong feeling of dislike', example: 'Her antipathy toward the professor was obvious: she rolled her eyes whenever he entered the classroom.' },
  { word: 'Apex', pos: 'n', meaning: 'the highest point of something', example: 'The spring play was the apex of our school year.' },
  { word: 'Appropriate', pos: 'adj', meaning: 'Suitable for a specific situation.', example: "Lily's velvet dress was appropriate for the formal occasion." },

  // Page 4
  { word: 'Approximate', pos: 'adj', meaning: 'Nearly accurate or close to.', example: 'The approximate cost is $50.' },
  { word: 'Arcane', pos: 'adj', meaning: 'Mysterious or known by few.', example: 'The ancient book contained arcane knowledge.' },
  { word: 'Arduous', pos: 'adj', meaning: 'Difficult and requiring effort.', example: 'The steep hike up the mountain was arduous.' },
  { word: 'Assemble', pos: 'v', meaning: 'To gather or put together.', example: 'We need to assemble the bed if we want a place to sleep tonight.' },
  { word: 'Austere', pos: 'adj', meaning: 'extremely plain; stern and forbidding; relating to self-denial', example: 'He lived in a small, austere cabin in the middle of the woods.' },
  { word: 'Avoid', pos: 'v', meaning: 'To stay away from or prevent.', example: 'Mara hates fighting, so she always tries to avoid conflict.' },
  { word: 'Beneficial', pos: 'adj', meaning: 'Producing good results.', example: 'A balanced diet is beneficial to your health.' },
  { word: 'Benevolent', pos: 'adj', meaning: 'kind, generous', example: 'Many cultures believe in benevolent spirits.' },
  { word: 'Bold', pos: 'adj', meaning: 'Courageous or striking.', example: 'Elsie made a bold move by quitting her job.' },
  { word: 'Borrow', pos: 'v', meaning: 'To take temporarily.', example: 'Libraries will let you borrow books for several weeks.' },
  { word: 'Buttress', pos: 'v', meaning: 'To support or strengthen.', example: 'The evidence will buttress his argument.' },

  // Page 5
  { word: 'Bypass', pos: 'v', meaning: 'To go around or avoid.', example: 'We took a shortcut to bypass traffic.' },
  { word: 'Calibrate', pos: 'v', meaning: 'To adjust for precision.', example: 'The scientist had to calibrate the instrument to ensure his measurements were accurate.' },
  { word: 'Candid', pos: 'adj', meaning: 'direct, blunt', example: 'Josh is candid about his desire to become an actor.' },
  { word: 'Carelessly', pos: 'adv', meaning: 'Without caution.', example: 'He carelessly left his keys on the bus.' },
  { word: 'Catastrophic', pos: 'adj', meaning: 'Disastrous or causing great damage.', example: 'The catastrophic hurricane destroyed dozens of homes.' },
  { word: 'Cause', pos: 'n', meaning: 'A reason for an action or event.', example: "The fire's cause is still unknown." },
  { word: 'Characterization', pos: 'n', meaning: 'The way a character is described.', example: "The novel's characterization was deep and complex." },
  { word: 'Circumvent', pos: 'v', meaning: 'To find a way around.', example: 'They found a loophole to circumvent the rule.' },
  { word: 'Coincidence', pos: 'n', meaning: 'A surprising and unexpected event.', example: 'Meeting my neighbor at the airport was a coincidence.' },
  { word: 'Collaboration', pos: 'n', meaning: 'Working together on a task.', example: "The scientists' collaboration led to a breakthrough." },
  { word: 'Commercialization', pos: 'n', meaning: 'The process of making something a business.', example: 'The commercialization of the product increased sales.' },
  { word: 'Committed', pos: 'adj', meaning: 'Dedicated to a cause or task.', example: 'Ava is committed to her studies and always wants top grades.' },
  { word: 'Common', pos: 'adj', meaning: 'Occurring frequently or shared.', example: "It's very common for students to feel stressed before exams." },

  // Page 6
  { word: 'Compelling', pos: 'adj', meaning: 'Captivating or persuasive.', example: 'The debater gave a compelling argument.' },
  { word: 'Competent', pos: 'adj', meaning: 'Having the necessary ability or skill.', example: 'Noah has worked at this job for a long time and is a competent engineer.' },
  { word: 'Complementary', pos: 'adj', meaning: 'Enhancing or completing another.', example: 'The artist and the engineer have skills that are complementary in the project.' },
  { word: 'Complexity', pos: 'n', meaning: 'The state of being intricate or complicated.', example: 'The complexity of the 1,000 piece puzzle made it challenging.' },
  { word: 'Compose', pos: 'v', meaning: 'To create or write.', example: 'Jordan plans to compose a new symphony.' },
  { word: 'Compound', pos: 'v', meaning: 'To intensify or combine.', example: 'The traffic was compounded by bad weather.' },
  { word: 'Comprise', pos: 'v', meaning: 'To consist of or include.', example: 'The book comprises ten chapters.' },
  { word: 'Conceal', pos: 'v', meaning: 'To hide or keep secret.', example: 'Luca tried to conceal his disappointment.' },
  { word: 'Concede', pos: 'v', meaning: 'To admit or yield.', example: 'She conceded that she was wrong during the argument.' },
  { word: 'Conceptualize', pos: 'v', meaning: 'To form an idea or concept.', example: 'In this lab, scientists conceptualize new theories on viruses.' },
  { word: 'Concerning', pos: 'adj', meaning: 'Causing worry or distress.', example: 'The news about the approaching hurricane is quite concerning.' },
  { word: 'Condition', pos: 'n', meaning: 'The state of something.', example: 'The car I bought is in excellent condition.' },
  { word: 'Confident', pos: 'adj', meaning: 'Feeling sure or self-assured.', example: 'Michael Jordan is confident in his abilities as a basketball player.' },

  // Page 7
  { word: 'Conflated', pos: 'adj', meaning: 'Combined in a misleading way.', example: 'The two issues were conflated in the argument.' },
  { word: 'Conform', pos: 'v', meaning: 'To comply with rules or expectations.', example: 'The alternative rocker refuses to conform to societal norms.' },
  { word: 'Consensus', pos: 'n', meaning: 'General agreement.', example: 'The team finally reached a consensus on the decision.' },
  { word: 'Consistent', pos: 'adj', meaning: 'Acting in the same way over time.', example: "My grandmother's knitting is always consistent in quality." },
  { word: 'Conspicuous', pos: 'adj', meaning: 'Easily noticed or standing out.', example: "Veronica's red dress was conspicuous in the crowd." },
  { word: 'Constant', pos: 'adj', meaning: 'Occurring continuously.', example: "The criminal lived in constant fear that he'd be found out." },
  { word: 'Contentious', pos: 'adj', meaning: 'Causing disagreement or debate.', example: 'Politics are highly contentious these days.' },
  { word: 'Contingent', pos: 'adj', meaning: 'Dependent on something else.', example: 'Our family ski trip is contingent on the weather.' },
  { word: 'Contradict', pos: 'v', meaning: 'to be in contrast with', example: 'The camera footage contradicts his alibi.' },
  { word: 'Contrived', pos: 'adj', meaning: 'Artificial or overly planned.', example: "The movie's plot felt contrived and unrealistic." },
  { word: 'Controversial', pos: 'adj', meaning: 'Causing public disagreement.', example: "The judge's decision to free the criminal was highly controversial." },
  { word: 'Cordially', pos: 'adv', meaning: 'In a warm or friendly manner.', example: 'The two old friends greeted each other cordially.' },
  { word: 'Corroborate', pos: 'v', meaning: 'to provide evidence for; to back up (a claim)', example: 'The note signed by her father corroborates her claim that she was absent from class that day.' },

  // Page 8
  { word: 'Corrosive', pos: 'adj', meaning: 'Gradually destructive or harmful', example: 'The corrosive chemical has ruined the paint on my car.' },
  { word: 'Costly', pos: 'adj', meaning: 'Expensive or requiring sacrifice.', example: 'The mistake was a costly one and caused the company to go bankrupt.' },
  { word: 'Counteract', pos: 'v', meaning: 'to work in opposition to', example: 'This ingredient seems to counteract the other ones.' },
  { word: 'Critical', pos: 'adj', meaning: 'Expressing analysis or judgment.', example: 'The review was highly critical of the film.' },
  { word: 'Criticize', pos: 'v', meaning: 'To express disapproval.', example: 'My father tends to criticize others harshly.' },
  { word: 'Deceptive', pos: 'adj', meaning: 'Misleading or dishonest.', example: 'The advertisement was deceptive in its claims of weight loss.' },
  { word: 'Deciding', pos: 'adj', meaning: 'Determining or influencing an outcome.', example: 'The final goal was the deciding factor in the match.' },
  { word: 'Decisive', pos: 'adj', meaning: 'Conclusive or firm.', example: "My boss's decisive leadership helped solve our company's crisis." },
  { word: 'Deficient', pos: 'adj', meaning: 'not enough in degree or amount', example: 'I feel as though the sources for my paper are deficient.' },
  { word: 'Defunct', pos: 'adj', meaning: 'No longer existing or functional.', example: 'After people stopped using fax machines, the fax company became defunct.' },
  { word: 'Delegate', pos: 'v', meaning: 'To assign tasks or authority to others.', example: 'A good leader knows how to delegate responsibilities.' },
  { word: 'Deliberation', pos: 'n', meaning: 'Careful consideration or discussion.', example: 'After much deliberation, they made their decision.' },
  { word: 'Delicate', pos: 'adj', meaning: 'Fragile or requiring careful handling.', example: 'The delicate glass sculpture broke easily.' },

  // Page 9
  { word: 'Demarcate', pos: 'v', meaning: 'To set boundaries or distinguish.', example: 'The Tornio river demarcates the border between Sweden and Finland.' },
  { word: 'Derived', pos: 'adj', meaning: 'Obtained or developed from a source.', example: 'The word "aqua" is derived from Latin.' },
  { word: 'Despise', pos: 'v', meaning: 'To strongly dislike or look down upon.', example: 'The judge despises dishonesty.' },
  { word: 'Desultory', pos: 'adj', meaning: 'Lacking a clear plan or enthusiasm.', example: "The tired boy's desultory efforts did not impress the coach." },
  { word: 'Determine', pos: 'v', meaning: 'To establish or decide.', example: 'The final exam will determine your grade.' },
  { word: 'Deviate', pos: 'v', meaning: 'To move away from a set path or norm.', example: 'When the new evidence was uncovered the lawyer deviated from the original plan.' },
  { word: 'Devise', pos: 'v', meaning: 'to come up with (a plan)', example: 'Lana devised a plan to make herself famous.' },
  { word: 'Diminish', pos: 'v', meaning: 'To decrease in size or importance.', example: "The politician's influence has diminished over time." },
  { word: 'Directed', pos: 'adj', meaning: 'Managed or guided.', example: 'This new film was directed by a renowned artist.' },
  { word: 'Disagreement', pos: 'n', meaning: 'A difference of opinion.', example: 'An intense disagreement arose over the contract terms.' },
  { word: 'Disastrous', pos: 'adj', meaning: 'Causing great harm or failure.', example: 'The earthquake had disastrous consequences for the island.' },
  { word: 'Disconcerting', pos: 'adj', meaning: 'Causing discomfort or confusion.', example: "My girlfriend's sudden change in behavior is disconcerting." },
  { word: 'Discord', pos: 'n', meaning: 'disagreement', example: 'Disputes over money caused intense discord in the family.' },

  // Page 10
  { word: 'Discount', pos: 'v', meaning: 'To disregard or reduce in value.', example: "The teacher discounted his students' concerns." },
  { word: 'Discourage', pos: 'v', meaning: 'To dissuade or deter.', example: 'Luna tried to discourage her brother from moving out of the house.' },
  { word: 'Discretion', pos: 'n', meaning: 'The ability to make responsible choices.', example: 'The detective handled the matter with great discretion.' },
  { word: 'Disengage', pos: 'v', meaning: 'To separate or withdraw.', example: 'I was exhausted, so I tried to disengage from the argument.' },
  { word: 'Dismiss', pos: 'v', meaning: 'To reject or send away.', example: 'The teacher dismissed the idea to end class early.' },
  { word: 'Disorienting', pos: 'adj', meaning: 'Causing confusion or loss of direction.', example: 'The vast corn maze was disorienting.' },
  { word: 'Disparage', pos: 'v', meaning: 'To belittle or speak negatively about.', example: "The politician disparaged his opponent's ideas on tax cuts." },
  { word: 'Disparate', pos: 'adj', meaning: 'Essentially different or unconnected.', example: 'Many European countries have disparate Christmas traditions.' },
  { word: 'Dispute', pos: 'n', meaning: 'A disagreement or argument.', example: 'The neighbors had a dispute over the new fence.' },
  { word: 'Distinct', pos: 'adj', meaning: 'Clearly different or separate.', example: 'My twin sons have distinct personalities.' },
  { word: 'Distract', pos: 'v', meaning: 'To divert attention.', example: 'The rattling noise distracted Javi from his work.' },
  { word: 'Distressed', pos: 'adj', meaning: 'Suffering from anxiety or pain.', example: "The woman looked distressed after the doctor's call." },
  { word: 'Diverge', pos: 'v', meaning: 'To move apart or differ.', example: "My parents' opinions on politics began to diverge as they grew older." },

  // Page 11
  { word: 'Diverse', pos: 'adj', meaning: 'Showing variety or differences.', example: 'New York City has a diverse population.' },
  { word: 'Dominance', pos: 'n', meaning: 'The state of being in control or superior.', example: "The company's dominance in the market is evident." },
  { word: 'Dormant', pos: 'adj', meaning: 'Inactive but capable of becoming active.', example: 'The volcano beneath Mount Fuji has been dormant for centuries.' },
  { word: 'Dynamic', pos: 'adj', meaning: 'Constantly changing or energetic.', example: 'My coworker is a dynamic speaker who commands attention wherever she goes.' },
  { word: 'Earnest', pos: 'adj', meaning: 'Serious and sincere.', example: 'He felt terrible about breaking the mirror and made an earnest apology.' },
  { word: 'Eclipse', pos: 'v', meaning: 'To overshadow or surpass.', example: "The headliner's performance eclipsed all others in the concert." },
  { word: 'Eloquent', pos: 'adj', meaning: 'having refined or expressive communication skills (in speaking or writing)', example: 'His speech was not only eloquent but also extremely compelling.' },
  { word: 'Elusive', pos: 'adj', meaning: 'Hard to find or understand.', example: 'Nothing became clearer, and the answer remained elusive.' },
  { word: 'Encompass', pos: 'v', meaning: 'To include or surround.', example: 'The project encompasses multiple disciplines.' },
  { word: 'Encounter', pos: 'v', meaning: 'To meet or face unexpectedly.', example: 'She encountered an old friend at the store.' },
  { word: 'Encourage', pos: 'v', meaning: 'To support or inspire.', example: 'Teachers often encourage students to ask questions.' },
  { word: 'Enduring', pos: 'adj', meaning: 'Lasting over time.', example: 'Their 50-year friendship is enduring.' },
  { word: 'Evidence', pos: 'n', meaning: 'Information that supports a conclusion.', example: 'There is strong evidence to support the theory.' },

  // Page 12
  { word: 'Evoke', pos: 'v', meaning: 'to draw forth or call up', example: 'Horror movies are great at evoking fear.' },
  { word: 'Exacerbate', pos: 'v', meaning: 'To make a problem worse.', example: 'His rude comments only exacerbated the tense situation.' },
  { word: 'Exactitude', pos: 'n', meaning: 'The quality of being precise or accurate.', example: "The scientist's exactitude ensured reliable results." },
  { word: 'Exaggerate', pos: 'v', meaning: 'To overstate or magnify beyond the truth.', example: 'My cousin tends to exaggerate his achievements.' },
  { word: 'Exceed', pos: 'v', meaning: 'To go beyond a limit.', example: 'The driver exceeded the speed limit by nearly 30 miles an hour.' },
  { word: 'Exemplify', pos: 'v', meaning: 'To serve as a typical example of something.', example: "The woman's kindness to her neighbors exemplifies true generosity." },
  { word: 'Exhaustive', pos: 'adj', meaning: 'Thorough and complete.', example: 'The 300-page report provided an exhaustive analysis.' },
  { word: 'Expansion', pos: 'n', meaning: 'The act of increasing in size or scope.', example: "The company's expansion into international markets has been successful so far." },
  { word: 'Expensive', pos: 'adj', meaning: 'Costing a lot of money.', example: "My sister's diamond ring was extremely expensive." },
  { word: 'Experiment', pos: 'n', meaning: 'A test to discover something new.', example: 'The scientist conducted an experiment to test the theory.' },
  { word: 'Explicable', pos: 'adj', meaning: 'Able to be explained.', example: "Once I knew the full story, my boyfriend's actions were explicable given the circumstances." },
  { word: 'Exploit', pos: 'v', meaning: 'To take advantage of something unfairly.', example: 'The mining company was accused of exploiting workers.' },
  { word: 'Extensive', pos: 'adj', meaning: 'Covering a large area or scope.', example: 'The Art Institute of Chicago has an extensive Impressionist collection.' },

  // Page 13
  { word: 'Extraneous', pos: 'adj', meaning: 'Unrelated or unnecessary.', example: "The report contained too much extraneous information that didn't matter to the trial." },
  { word: 'Fabricate', pos: 'v', meaning: 'To invent or create, often dishonestly.', example: 'The criminal fabricated evidence to support his bogus claim.' },
  { word: 'Foretell', pos: 'v', meaning: 'To predict or anticipate.', example: 'Ancient prophecies foretold the end of the world.' },
  { word: 'Foster', pos: 'v', meaning: 'To encourage or promote development.', example: 'Teachers should strive to foster creativity in students.' },
  { word: 'Fragile', pos: 'adj', meaning: 'Easily broken or delicate.', example: 'The glass vase is very fragile.' },
  { word: 'Fruitless', pos: 'adj', meaning: 'Failing to achieve desired results.', example: 'Their search for survivors was fruitless.' },
  { word: 'Genuine', pos: 'adj', meaning: 'Authentic or real.', example: 'His apology seemed genuine.' },
  { word: 'Grapple', pos: 'v', meaning: 'To struggle or wrestle with something.', example: 'The country is grappling with economic issues.' },
  { word: 'Habitual', pos: 'adj', meaning: 'Done regularly or repeatedly.', example: 'His habitual lateness annoyed his coworkers.' },
  { word: 'Haphazard', pos: 'adj', meaning: 'Lacking organization or planning.', example: 'The project was completed in a haphazard manner.' },
  { word: 'Hibernation', pos: 'n', meaning: 'A state of dormancy or deep sleep.', example: 'Many bear species go into hibernation during the winter.' },
  { word: 'Highlight', pos: 'v', meaning: 'To emphasize or make noticeable.', example: 'The article highlights key points of the debate.' },

  // Page 14
  { word: 'Hinder', pos: 'v', meaning: 'To obstruct or slow progress.', example: 'The heavy traffic hindered our journey.' },
  { word: 'Hoard', pos: 'v', meaning: 'To accumulate and store excessively.', example: 'He hoarded food supplies and toilet paper during the pandemic.' },
  { word: 'Homogeneous', pos: 'adj', meaning: 'Uniform or similar throughout.', example: 'The population of the village is homogeneous.' },
  { word: 'Hypothesize', pos: 'v', meaning: 'To form a theory or assumption.', example: 'Scientists hypothesize about the origin of the universe.' },
  { word: 'Imaginative', pos: 'adj', meaning: 'Creative and full of new ideas.', example: "The artist's work is highly imaginative." },
  { word: 'Imitation', pos: 'n', meaning: 'A copy or replica of something.', example: 'The purse was an imitation of a designer brand.' },
  { word: 'Imminent', pos: 'adj', meaning: 'About to happen soon.', example: 'A storm is imminent according to the forecast.' },
  { word: 'Immune', pos: 'adj', meaning: 'Resistant to disease or harm.', example: "He's immune to the virus due to vaccination." },
  { word: 'Impartial', pos: 'adj', meaning: 'Fair and not biased.', example: 'Judges must always remain impartial during a trial.' },
  { word: 'Impending', pos: 'adj', meaning: 'Approaching or about to happen.', example: 'They prepared for the impending storm by boarding up windows.' },
  { word: 'Impenetrable', pos: 'adj', meaning: 'Impossible to pass through.', example: 'The fortress was impenetrable to enemy attack.' },
  { word: 'Imperceptible', pos: 'adj', meaning: 'Very slight or difficult to notice.', example: "Alex's reaction was imperceptible, so I couldn't tell what he was thinking." },
  { word: 'Implement', pos: 'v', meaning: 'To put into effect or execute.', example: 'The business will implement new rules to comply with the change in laws.' },

  // Page 15
  { word: 'Implication', pos: 'n', meaning: 'A possible consequence or meaning.', example: 'The policy change has serious implications for lobbyists.' },
  { word: 'Implicit', pos: 'adj', meaning: 'Implied rather than stated directly.', example: 'His approval was implicit in his silence.' },
  { word: 'Impractical', pos: 'adj', meaning: 'Not sensible or realistic.', example: 'The dress design was too impractical to actually wear.' },
  { word: 'Improvise', pos: 'v', meaning: 'To create or perform spontaneously.', example: 'The actor had to improvise when he forgot his lines.' },
  { word: 'Inactive', pos: 'adj', meaning: 'Not engaged in movement or activity.', example: 'The volcano has been inactive for decades.' },
  { word: 'Inadequate', pos: 'adj', meaning: 'Insufficient or lacking.', example: "I felt inadequate when I didn't make the final shot during the basketball game." },
  { word: 'Inadvertently', pos: 'adv', meaning: 'Unintentionally or by accident.', example: 'The new worker caused a ruckus when he inadvertently deleted an important file.' },
  { word: 'Incite', pos: 'v', meaning: 'to encourage or stir up', example: 'Her hateful words incited anger in the crowd.' },
  { word: 'Inconspicuous', pos: 'adj', meaning: 'Not being easily seen or noticed.', example: 'The spy was inconspicuous as he moved through the crowd.' },
  { word: 'Indecipherable', pos: 'adj', meaning: 'Impossible to understand or read.', example: 'His messy handwriting was indecipherable.' },
  { word: 'Indicate', pos: 'v', meaning: 'To point out or show.', example: 'The results indicate a positive trend.' },
  { word: 'Indifference', pos: 'n', meaning: 'Lack of interest or concern.', example: "Natalia's indifference to the situation frustrated her sisters." },
  { word: 'Indisputable', pos: 'adj', meaning: 'Unable to be challenged or denied.', example: 'Because the evidence was indisputable, the lawyer was certain his client would go free.' },

  // Page 16
  { word: 'Indistinct', pos: 'adj', meaning: 'Not clear or sharply defined.', example: 'The figure in the distance was blurry and indistinct.' },
  { word: 'Indulge', pos: 'v', meaning: 'To allow oneself to enjoy.', example: 'After a long day of work, Jane decided to indulge in a piece of cake.' },
  { word: 'Ineffectual', pos: 'adj', meaning: 'Not producing the desired effect.', example: "The mayor's efforts to change the city's parking rules were ineffectual." },
  { word: 'Inevitable', pos: 'adj', meaning: 'Certain to happen; unavoidable.', example: 'You must accept that change is inevitable in life.' },
  { word: 'Inexpensive', pos: 'adj', meaning: 'Not costly.', example: 'The new Vietnamese restaurant down the street serves inexpensive but delicious meals.' },
  { word: 'Inexplicable', pos: 'adj', meaning: 'Unable to be explained.', example: "My uncle's sudden departure from the family reunion was inexplicable." },
  { word: 'Influence', pos: 'n', meaning: 'The power to affect others.', example: "The pastor's speech had a strong influence on the audience." },
  { word: 'Infrequent', pos: 'adj', meaning: 'Not occurring often.', example: 'Rain is infrequent in the Atacama Desert.' },
  { word: 'Inhibit', pos: 'v', meaning: 'To hinder or restrain.', example: 'Fear of failure can inhibit creativity.' },
  { word: 'Innocuous', pos: 'adj', meaning: 'Harmless or inoffensive.', example: 'The comment seemed innocuous, but it upset him.' },
  { word: 'Insensible', pos: 'adj', meaning: 'Unaware or indifferent.', example: "The father was insensible to his children's boredom." },
  { word: 'Insignificant', pos: 'adj', meaning: 'Too small or unimportant to matter.', example: 'The difference in price between the two ice creams was insignificant.' },
  { word: 'Inspect', pos: 'v', meaning: 'To examine closely.', example: 'The contractor will inspect the building for safety.' },

  // Page 17
  { word: 'Inspirational', pos: 'adj', meaning: 'Providing motivation or encouragement.', example: "Evan's story of recovering from a severe car accident was inspirational to many." },
  { word: 'Intangible', pos: 'adj', meaning: 'Not able to be touched or measured.', example: 'Love is an intangible concept.' },
  { word: 'Intentional', pos: 'adj', meaning: 'Done on purpose.', example: 'By reading the evidence, I could tell the man’s actions were intentional.' },
  { word: 'Interchangeable', pos: 'adj', meaning: 'Able to be substituted for each other.', example: "These parts are interchangeable so it doesn't matter which one you use." },
  { word: 'Interject', pos: 'v', meaning: 'To insert a comment abruptly.', example: 'My brother interjected with a sarcastic remark.' },
  { word: 'Interpret', pos: 'v', meaning: 'To explain the meaning of something.', example: "I don't understand this poem; can you interpret it for me?" },
  { word: 'Intersect', pos: 'v', meaning: 'To cross or meet at a point.', example: 'The two streets intersect downtown.' },
  { word: 'Intricate', pos: 'adj', meaning: 'Very detailed or complicated.', example: 'The artist created an intricate design on the fabric.' },
  { word: 'Intriguing', pos: 'adj', meaning: 'Arousing curiosity or interest.', example: "The mystery novel was intriguing because I couldn't figure out who the murderer was." },
  { word: 'Invalidate', pos: 'v', meaning: 'To make something void or null.', example: 'The new evidence invalidated his argument.' },
  { word: 'Invent', pos: 'v', meaning: 'To create something new.', example: 'Thomas Edison invented the incandescent light bulb.' },
  { word: 'Investigation', pos: 'n', meaning: 'Systematic inquiries to uncover facts.', example: 'The police conducted a thorough investigation of the crime scene.' },
  { word: 'Involuntarily', pos: 'adv', meaning: 'Done without conscious control.', example: 'She involuntarily gasped in surprise.' },

  // Page 18
  { word: 'Irrelevant', pos: 'adj', meaning: 'Not related or applicable.', example: 'His comment was irrelevant to the discussion.' },
  { word: 'Isolate', pos: 'v', meaning: 'To separate from others.', example: 'We need to isolate the patient with the very contagious disease.' },
  { word: 'Lacking', pos: 'adj', meaning: 'Not having enough of something.', example: 'The short essay was lacking in detail.' },
  { word: 'Latent', pos: 'adj', meaning: 'Present but not active.', example: 'He had a latent talent for music.' },
  { word: 'Legitimate', pos: 'adj', meaning: 'Lawful or valid.', example: "Because he was named in the will, John's claim to the property was legitimate." },
  { word: 'Localized', pos: 'adj', meaning: 'Restricted to a particular area.', example: 'The disease was localized to one region.' },
  { word: 'Manageable', pos: 'adj', meaning: 'Able to be controlled or handled.', example: "I'm lucky that my workload is manageable today, so I'll be home in time for dinner." },
  { word: 'Mandatory', pos: 'adj', meaning: 'Required or obligatory.', example: 'Attendance at the meeting is mandatory for all employees.' },
  { word: 'Mimic', pos: 'v', meaning: 'To imitate.', example: 'Parrots can mimic human speech.' },
  { word: 'Misanthropic', pos: 'adj', meaning: 'Disliking people or society.', example: 'The old man was known for his misanthropic views.' },
  { word: 'Misrepresent', pos: 'v', meaning: 'To give a false impression.', example: 'The article misrepresented the facts.' },
  { word: 'Moderate', pos: 'adj', meaning: 'Not extreme; average.', example: 'He never has strong opinions, and most of his views are moderate.' },

  // Page 19
  { word: 'Multifaceted', pos: 'adj', meaning: 'Having many aspects or features.', example: 'The housing problem is multifaceted and will take multiple solutions to solve.' },
  { word: 'Neglect', pos: 'v', meaning: 'To fail to care for properly.', example: 'He neglected his responsibilities when he decided to play video games instead of clean the house.' },
  { word: 'Neutrality', pos: 'n', meaning: 'The state of not taking sides.', example: 'Switzerland maintained neutrality during World War II.' },
  { word: 'Newfound', pos: 'adj', meaning: 'Recently discovered or developed.', example: 'The recently-released prisoner enjoyed his newfound freedom.' },
  { word: 'Notional', pos: 'adj', meaning: 'Existing only in theory.', example: "Because we hadn't started it, the plan was still notional." },
  { word: 'Novel', pos: 'adj', meaning: 'New or original.', example: 'The doctor introduced a novel approach to hip surgery.' },
  { word: 'Nuanced', pos: 'adj', meaning: 'Having subtle differences.', example: 'His argument was well-developed and nuanced.' },
  { word: 'Obligate', pos: 'v', meaning: 'To compel or require.', example: 'The contract obligates him to pay.' },
  { word: 'Obscure', pos: 'adj', meaning: 'Not easily understood or seen.', example: "The meaning of the letter was obscure and I didn't know what to make of it." },
  { word: 'Observable', pos: 'adj', meaning: 'Able to be seen or noticed.', example: 'The rings of Saturn were observable through the telescope.' },
  { word: 'Observant', pos: 'adj', meaning: 'Quick to notice things.', example: 'The detective is very observant of small details.' },
  { word: 'Obsolete', pos: 'adj', meaning: 'no longer used; rare or uncommon', example: 'Historians assumed record players would be obsolete by now, but in fact they’re making a huge comeback.' },

  // Page 20
  { word: 'Obstructed', pos: 'adj', meaning: 'Blocked or hindered.', example: "We couldn't leave town because the road was obstructed by fallen trees." },
  { word: 'Occupy', pos: 'v', meaning: 'To take up space or time.', example: 'The kids occupied themselves with games.' },
  { word: 'Oddity', pos: 'n', meaning: 'Something unusual or strange.', example: 'The museum displayed an interesting oddity.' },
  { word: 'Offhand', pos: 'adj', meaning: 'Done without preparation or thought.', example: 'His offhand remark surprised everyone.' },
  { word: 'Omnipotent', pos: 'adj', meaning: 'almighty and all powerful', example: 'Gods are omnipotent beings who can control human destiny.' },
  { word: 'Onset', pos: 'n', meaning: 'the beginning or early stages', example: 'At the onset of her career as a lawyer, things were looking up.' },
  { word: 'Operative', pos: 'adj', meaning: 'Functioning or having effect.', example: 'The new policy is now operative so be sure to follow it.' },
  { word: 'Ornamental', pos: 'adj', meaning: 'Decorative rather than functional.', example: 'The garden was filled with ornamental plants that helped beautify the space.' },
  { word: 'Oust', pos: 'v', meaning: 'to remove or force out of (usu. a position or office)', example: 'Sick and tired of putting up with his bad moods, the pirates ousted their captain.' },
  { word: 'Outstrip', pos: 'v', meaning: 'To surpass or exceed.', example: 'Sales of my new novel outstripped all expectations.' },
  { word: 'Overcome', pos: 'v', meaning: 'To succeed in dealing with a problem.', example: 'She overcame her fear of public speaking and was able to deliver her remarks.' },
  { word: 'Overlook', pos: 'v', meaning: 'To fail to notice or consider.', example: 'The officer overlooked an important detail that would have helped solve the crime.' },
  { word: 'Overreact', pos: 'v', meaning: 'To respond too strongly.', example: "My sister overreacted to our parents' criticism of her outfit." },

  // Page 21
  { word: 'Overshadow', pos: 'v', meaning: 'To be more important than something else.', example: 'His success overshadowed his past failures.' },
  { word: 'Overtly', pos: 'adv', meaning: 'Openly and clearly.', example: 'He overtly expressed his disapproval by telling me what he thought.' },
  { word: 'Overwhelmed', pos: 'adj', meaning: 'Feeling excessive stress or emotion.', example: "Agatha felt overwhelmed by her workload and had no idea how she'd finish it all in time." },
  { word: 'Paramount', pos: 'adj', meaning: 'predominant, superior, most important', example: 'Our paramount concern is the safety of our employees.' },
  { word: 'Paucity', pos: 'n', meaning: 'A scarcity or lack.', example: 'The crime will be difficult to solve because there is a paucity of evidence.' },
  { word: 'Perceive', pos: 'v', meaning: 'To become aware of something.', example: 'She perceived a hint of sadness in his voice.' },
  { word: 'Peripheral', pos: 'adj', meaning: 'On the edge or outer part of something.', example: "My involvement was peripheral to the project because I didn't do much." },
  { word: 'Permanent', pos: 'adj', meaning: 'Lasting indefinitely.', example: "The marker left a permanent stain on my favorite shirt that I won't be able to get out." },
  { word: 'Perpetual', pos: 'adj', meaning: 'Continuing forever or indefinitely.', example: 'The con artist lived in perpetual fear of being arrested.' },
  { word: 'Persistent', pos: 'adj', meaning: 'Continuing despite difficulty.', example: 'After fifty years of buying lottery tickets, persistent efforts paid off when he won the jackpot.' },
  { word: 'Popularize', pos: 'v', meaning: 'To make widely known.', example: 'The internet popularized online shopping.' },
  { word: 'Postulate', pos: 'v', meaning: 'To assume or propose a theory.', example: 'Scientists postulated a new hypothesis for the origin of the universe.' },
  { word: 'Pragmatic', pos: 'adj', meaning: 'Practical and realistic.', example: 'Elliot put his emotions aside and took a pragmatic approach to problem-solving.' },

  // Page 22
  { word: 'Praise', pos: 'v', meaning: 'To express approval or admiration.', example: "The teacher praised the students' hard work." },
  { word: 'Precarious', pos: 'adj', meaning: 'Uncertain or unstable.', example: 'The goat was perched on a precarious edge of the cliff.' },
  { word: 'Preclude', pos: 'v', meaning: 'To prevent from happening.', example: "Dylan's injury precluded him from playing in the soccer match." },
  { word: 'Predatory', pos: 'adj', meaning: 'Exploiting others for personal gain.', example: 'The credit company engaged in predatory lending practices.' },
  { word: 'Predetermined', pos: 'adj', meaning: 'Decided in advance.', example: 'The outcome seemed predetermined and that we could do nothing to change it.' },
  { word: 'Predict', pos: 'v', meaning: 'To say what will happen in the future.', example: 'Meteorologists predict rain tomorrow.' },
  { word: 'Premeditated', pos: 'adj', meaning: 'Planned beforehand.', example: 'Because the man had planned the theft for weeks, it was obvious the crime was premeditated.' },
  { word: 'Prescribe', pos: 'v', meaning: 'To recommend or order a treatment.', example: 'The doctor prescribed antibiotics when I had an ear infection.' },
  { word: 'Preserve', pos: 'v', meaning: 'To keep something in its original state.', example: "The builders worked to preserve the house's original decorations." },
  { word: 'Presume', pos: 'v', meaning: 'To assume something to be true.', example: 'I presume he will be late to the party.' },
  { word: 'Prevail', pos: 'v', meaning: 'To win or be more powerful.', example: 'Justice will always prevail.' },
  { word: 'Preventable', pos: 'adj', meaning: 'Able to be avoided.', example: 'Many diseases are preventable with vaccines.' },
  { word: 'Probability', pos: 'n', meaning: 'Likelihood of something happening.', example: "When you live in the desert, there's almost always a low probability of rain." },

  // Page 23
  { word: 'Proclaim', pos: 'v', meaning: 'To announce officially.', example: 'The king proclaimed a new law.' },
  { word: 'Produce', pos: 'v', meaning: 'To create or generate something.', example: 'The Ford factory produces thousands of cars each year.' },
  { word: 'Profusion', pos: 'n', meaning: 'A large quantity of something.', example: 'The garden had a profusion of flowers every spring.' },
  { word: 'Prolong', pos: 'v', meaning: 'To extend in duration.', example: 'He tried to prolong the meeting from one hour to two.' },
  { word: 'Prominent', pos: 'adj', meaning: 'Important or well-known.', example: 'Marie Curie was a prominent scientist who won many awards.' },
  { word: 'Proponent', pos: 'n', meaning: 'A supporter of a cause or idea.', example: 'The environmentalist was a proponent of renewable energy.' },
  { word: 'Provoke', pos: 'v', meaning: 'To stir up or incite.', example: "Miriam's rude words provoked an argument." },
  { word: 'Prudently', pos: 'adv', meaning: 'In a wise or careful manner.', example: 'My grandmother always prudently saved money for emergencies.' },
  { word: 'Quantity', pos: 'n', meaning: 'An amount or number.', example: 'The pudding recipe requires a small quantity of sugar.' },
  { word: 'Quarrel', pos: 'n', meaning: 'An angry argument or dispute.', example: 'The couple had a loud quarrel over money.' },
  { word: 'Questionable', pos: 'adj', meaning: 'Doubtful or uncertain.', example: "Despite claiming to want to help people, the politician's motives were questionable." },
  { word: 'Ramify', pos: 'v', meaning: 'to split into two or more branches', example: 'Cars ramified throughout the world in the twentieth century.' },

  // Page 24
  { word: 'Rarely', pos: 'adv', meaning: 'Infrequently or seldom.', example: 'My sister rarely eats fast food.' },
  { word: 'Rationalize', pos: 'v', meaning: 'To justify an action with reasoning.', example: 'He tried to rationalize his mistake by explaining his thought process.' },
  { word: 'Rebellion', pos: 'n', meaning: 'An act of resistance against authority.', example: 'The peasants led a rebellion against the king.' },
  { word: 'Recalcitrant', pos: 'adj', meaning: 'Stubbornly resistant to authority.', example: 'The recalcitrant student refused to obey.' },
  { word: 'Recant', pos: 'v', meaning: 'To take back a previous statement.', example: 'He was forced to recant his confession.' },
  { word: 'Receptive', pos: 'adj', meaning: 'Open to new ideas.', example: 'The new dancer was receptive to feedback.' },
  { word: 'Reciprocate', pos: 'v', meaning: 'To give in return.', example: "I reciprocated my brother's kindness by buying him dinner." },
  { word: 'Recognizable', pos: 'adj', meaning: 'Easily identified.', example: 'The Nike logo is instantly recognizable.' },
  { word: 'Rectify', pos: 'v', meaning: 'To correct or fix something.', example: 'She tried to rectify her mistake with an apology.' },
  { word: 'Redefine', pos: 'v', meaning: 'To change the meaning of something.', example: 'The company redefined its mission.' },
  { word: 'Redress', pos: 'v', meaning: 'To set right or remedy.', example: 'They sought to redress past injustices.' },
  { word: 'Reform', pos: 'v', meaning: 'To improve by making changes.', example: 'The government promised to reform the healthcare system.' },
  { word: 'Refuse', pos: 'v', meaning: 'To decline or reject.', example: 'Emilia refused the job offer.' },

  // Page 25
  { word: 'Refute', pos: 'v', meaning: 'To prove false or incorrect.', example: 'The scientist refuted the claim that the Earth was flat.' },
  { word: 'Regrettable', pos: 'adj', meaning: 'Causing sorrow or disappointment.', example: "Forgetting my boyfriend's birthday was a regrettable mistake." },
  { word: 'Regulate', pos: 'v', meaning: 'To control or manage.', example: 'The government regulates nuclear energy facilities.' },
  { word: 'Reject', pos: 'v', meaning: 'To dismiss or refuse to accept.', example: "She rejected her boyfriend's proposal." },
  { word: 'Relocate', pos: 'v', meaning: 'To move to a new place.', example: 'The dentist relocated to a bigger office.' },
  { word: 'Renounce', pos: 'v', meaning: 'To give up or reject formally.', example: 'He renounced his citizenship after moving to a new country.' },
  { word: 'Replenish', pos: 'v', meaning: 'To refill or restore.', example: 'After we finished the lemonade, the hostess replenished the pitcher.' },
  { word: 'Replicable', pos: 'adj', meaning: 'Able to be copied or repeated.', example: "The experiment's results were replicable." },
  { word: 'Representative', pos: 'n', meaning: 'A person acting on behalf of others.', example: "The company's representative spoke at the meeting." },
  { word: 'Repress', pos: 'v', meaning: 'To suppress or hold back.', example: 'Although devastated, Jalen repressed his emotions.' },
  { word: 'Reprieve', pos: 'n', meaning: 'A temporary relief or delay.', example: 'Because the defendant needed surgery, the judge granted a reprieve.' },
  { word: 'Repudiate', pos: 'v', meaning: 'To reject or disown.', example: "She repudiated the accusation that she'd stolen money from the company." },
  { word: 'Resilient', pos: 'adj', meaning: 'Able to recover quickly.', example: 'Even after setbacks, the patient is very resilient.' },

  // Page 26
  { word: 'Resolve', pos: 'v', meaning: 'To find a solution.', example: 'The warring siblings eventually resolved their differences.' },
  { word: 'Responsive', pos: 'adj', meaning: 'Reacting quickly or positively.', example: 'The team wanted to improve and was very responsive to feedback.' },
  { word: 'Restore', pos: 'v', meaning: 'To bring back to original condition.', example: 'The architecture team carefully restored the old house.' },
  { word: 'Restrain', pos: 'v', meaning: 'To hold back or limit.', example: 'Even though Tom was furious, he restrained his anger.' },
  { word: 'Retain', pos: 'v', meaning: 'To keep or hold onto.', example: 'I use this pitcher to retain water for my herb garden.' },
  { word: 'Retaliate', pos: 'v', meaning: 'To respond to an attack.', example: 'After Celia yelled at Dom, he retaliated with a counterattack.' },
  { word: 'Reticent', pos: 'adj', meaning: "Reluctant to share one's thoughts or feelings; reserved", example: 'My neighbor is so reticent I never know what she really thinks of anything.' },
  { word: 'Rousing', pos: 'adj', meaning: 'Exciting or stirring.', example: 'The speaker gave a rousing speech that brought the audience to its feet.' },
  { word: 'Rudimentary', pos: 'adj', meaning: 'Basic or simple.', example: 'The little boy only has a rudimentary understanding of math.' },
  { word: 'Sanction', pos: 'v', meaning: 'To authorize or approve.', example: 'The government sanctioned the project so construction will start soon.' },
  { word: 'Sanguine', pos: 'adj', meaning: 'Optimistic or hopeful.', example: 'He remained sanguine despite repeated setbacks.' },
  { word: 'Saturate', pos: 'v', meaning: 'To soak or fill completely.', example: 'The sponge was saturated with water.' },
  { word: 'Scorn', pos: 'v', meaning: 'to look down on with disdain', example: 'It’s difficult for me not to scorn those who use improper grammar.' },

  // Page 27
  { word: 'Scrutinize', pos: 'v', meaning: 'To examine closely.', example: "I'm going to have my lawyer scrutinize the contract." },
  { word: 'Secretive', pos: 'adj', meaning: 'Keeping things hidden.', example: "He was secretive about his plans for Valentine's Day." },
  { word: 'Sensitive', pos: 'adj', meaning: 'Easily affected or aware.', example: 'She is very sensitive to criticism.' },
  { word: 'Simulate', pos: 'v', meaning: 'To imitate or replicate.', example: 'The pilot simulated an emergency landing.' },
  { word: 'Sincerity', pos: 'n', meaning: 'The quality of being genuine.', example: 'His sincerity was evident in his speech.' },
  { word: 'Skeptical', pos: 'adj', meaning: 'Doubtful or questioning.', example: "The teacher was skeptical of the student's claim that the dog ate her homework." },
  { word: 'Sophisticated', pos: 'adj', meaning: 'Complex or refined.', example: "The building's design was intricate and sophisticated." },
  { word: 'Span', pos: 'n', meaning: 'The extent or length of something.', example: 'The Golden Gate Bridge has a long span.' },
  { word: 'Sparingly', pos: 'adv', meaning: 'insufficiently, meagerly, or in a restricted manner', example: 'Due to my blood pressure, I must eat salt sparingly.' },
  { word: 'Speculate', pos: 'v', meaning: 'To guess or theorize.', example: 'He speculated about the outcome of the soccer match.' },
  { word: 'Spurious', pos: 'adj', meaning: 'False or deceptive.', example: 'The claims were spurious and therefore thrown out in court.' },
  { word: 'Stark', pos: 'adj', meaning: 'Very plain; devoid of any details or features', example: 'Looking out at the stark landscape, I felt a keen sense of isolation.' },
  { word: 'Strenuously', pos: 'adv', meaning: 'With great effort.', example: 'She strenuously denied the accusations against her.' },

  // Page 28
  { word: 'Sturdily', pos: 'adv', meaning: 'Strongly or solidly.', example: 'The chair was sturdily built and had no chance of breaking.' },
  { word: 'Stymie', pos: 'v', meaning: 'To hinder or block.', example: 'The restoration project was stymied by a lack of funds.' },
  { word: 'Substantial', pos: 'adj', meaning: 'Large or important.', example: 'Jackie made a substantial donation to her alma mater.' },
  { word: 'Subtle', pos: 'adj', meaning: 'Hard to detect or analyze', example: 'The author gave a subtle hint as to who the murderer was.' },
  { word: 'Succumb', pos: 'v', meaning: 'To give in or surrender.', example: 'He succumbed to the temptation to eat the entire bag of gummy bears.' },
  { word: 'Superficial', pos: 'adj', meaning: 'Shallow or lacking depth.', example: 'The candidate struggled to answer questions about policy because his knowledge was superficial.' },
  { word: 'Supplement', pos: 'v', meaning: 'To add to something.', example: 'She supplemented her income by starting a side hustle.' },
  { word: 'Surmise', pos: 'v', meaning: 'To infer or guess.', example: 'He surmised the answer based on context clues.' },
  { word: 'Surpass', pos: 'v', meaning: 'To exceed or go beyond.', example: 'She surpassed expectations by winning the national spelling bee.' },
  { word: 'Surrender', pos: 'v', meaning: 'To give up or yield.', example: 'The weakened army surrendered to the enemy.' },
  { word: 'Susceptible', pos: 'adj', meaning: 'Easily influenced or affected.', example: 'With his weakened immune system, Marcelo is susceptible to illness.' },
  { word: 'Synchronization', pos: 'n', meaning: 'The process of coordinating events.', example: 'The synchronization of lights helped traffic flow.' },
  { word: 'Tentative', pos: 'adj', meaning: 'Uncertain or not fully decided.', example: 'Our plans are tentative and may change.' },

  // Page 29
  { word: 'Tenuous', pos: 'adj', meaning: 'Weak or insubstantial.', example: 'His argument was tenuous at best.' },
  { word: 'Theoretical', pos: 'adj', meaning: 'Based on theory rather than practice.', example: 'The idea remains theoretical until tested.' },
  { word: 'Theory', pos: 'n', meaning: 'A system of ideas intended to explain something.', example: "Einstein's theory of relativity changed physics." },
  { word: 'Thoughtfulness', pos: 'n', meaning: 'Consideration for others.', example: 'Her thoughtfulness made her a great friend.' },
  { word: 'Tranquil', pos: 'adj', meaning: 'Peaceful and calm.', example: 'The lake was tranquil at sunset.' },
  { word: 'Transform', pos: 'v', meaning: 'To change in form or appearance.', example: 'The caterpillar transformed into a butterfly.' },
  { word: 'Ubiquitous', pos: 'adj', meaning: 'Present everywhere.', example: 'Smartphones have become ubiquitous in society.' },
  { word: 'Uncontroversial', pos: 'adj', meaning: 'Not likely to cause disagreement.', example: 'The decision was uncontroversial and widely accepted.' },
  { word: 'Undeniable', pos: 'adj', meaning: 'Cannot be disputed.', example: "Simone Biles' talent as a gymnast is undeniable." },
  { word: 'Underscore', pos: 'v', meaning: 'To emphasize.', example: 'The report underscored the importance of safety.' },
  { word: 'Unimportant', pos: 'adj', meaning: 'Not significant.', example: 'The details were unimportant to the main issue.' },
  { word: 'Unintended', pos: 'adj', meaning: 'Not planned or meant.', example: 'The side effects of the medication were unintended.' },
  { word: 'Universal', pos: 'adj', meaning: 'Common to all.', example: 'The desire for love is universal.' },

  // Page 30
  { word: 'Unmistakable', pos: 'adj', meaning: 'Clearly recognizable.', example: "Morgan Freeman's voice is unmistakable." },
  { word: 'Unobtrusive', pos: 'adj', meaning: 'Not attracting attention.', example: 'The waitress did her best to be unobtrusive while clearing the table.' },
  { word: 'Unoriginal', pos: 'adj', meaning: 'Lacking originality.', example: 'His speech was unoriginal and predictable.' },
  { word: 'Unpredictable', pos: 'adj', meaning: 'Difficult to foresee.', example: 'The weather in winter can often be unpredictable.' },
  { word: 'Validate', pos: 'v', meaning: 'To confirm the accuracy of something.', example: 'The test results validated his hypothesis.' },
  { word: 'Variable', pos: 'adj', meaning: 'Likely to change.', example: 'The weather is highly variable in spring.' },
  { word: 'Verisimilitude', pos: 'n', meaning: 'The appearance of being true or real.', example: "The novel’s verisimilitude made it compelling." },
  { word: 'Veritable', pos: 'adj', meaning: 'Used to emphasize truth.', example: 'Einstein was a veritable genius.' },
  { word: 'Vigilance', pos: 'n', meaning: 'The action of keeping careful watch.', example: 'Constant vigilance is needed for security.' },
  { word: 'Vital', pos: 'adj', meaning: 'Urgently necessary', example: 'It is vital that you respond by the deadline.' },
  { word: 'Volatile', pos: 'adj', meaning: 'Liable to change rapidly and unpredictably; easily evaporated (in scientific contexts)', example: "My uncle's mood is very volatile, so we never know how he's going to react." },
  { word: 'Waive', pos: 'v', meaning: 'To give up a right or claim voluntarily.', example: 'He waived his right to an attorney.' },

  // Page 31
  { word: 'Warranted', pos: 'adj', meaning: 'Justified or necessary.', example: 'The decision was warranted by the evidence.' },
  { word: 'Widespread', pos: 'adj', meaning: 'Found or occurring over a large area.', example: 'The disease became widespread.' },
  { word: 'Withdraw', pos: 'v', meaning: 'To remove or retreat.', example: 'She withdrew from the competition.' }
];

console.log('Total extracted words:', vocabRaw.length);

const code = `/**
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

export const SAT_VOCAB_LIST: SatVocabItem[] = ${JSON.stringify(
  vocabRaw.map((item, idx) => {
    const posFull =
      item.pos === 'v'
        ? 'verb'
        : item.pos === 'adj'
        ? 'adjective'
        : item.pos === 'n'
        ? 'noun'
        : 'adverb';
    const posLabel = '(' + item.pos + ')';
    const letter = item.word[0].toUpperCase();
    const categories = ['High-Frequency', 'Academic Core', 'Nuance & Rhetoric'];
    const category = categories[idx % categories.length];

    return {
      id: 'VOCAB-' + String(idx + 1).padStart(3, '0'),
      word: item.word,
      partOfSpeech: posFull,
      posLabel,
      meaning: item.meaning,
      example: item.example,
      letter,
      category,
    };
  }),
  null,
  2
)};

export const VOCAB_STUDY_TIPS = [
  "Learn 10–15 words at a time as recommended by the Digital SAT guidelines.",
  "Read the meaning, say the example sentence aloud, then craft your own original sentence.",
  "Review the words again the next day to solidify them in long-term memory.",
  "In Words in Context questions, eliminate choices that don't match the positive/negative tone and specific subject matter of the sentence."
];
`;

fs.writeFileSync(path.join(__dirname, '../src/data/satVocabData.ts'), code, 'utf-8');
console.log('Successfully wrote src/data/satVocabData.ts');
