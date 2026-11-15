// ─── Content model ──────────────────────────────────────────────────────────
// Every piece of learner-facing text is stored in three languages
// (simple wording, British English for the exercises themselves).

export type Lang = 'ru' | 'ua' | 'en';

export type LocalString = Record<Lang, string>;

export type ExerciseLevel = 'warmup' | 'core' | 'challenge';

// gap ── fill the missing word / verb form (typed answer, mandatory)
export interface GapItem {
  type: 'gap';
  id: string;
  before: string;          // sentence part before the gap
  after: string;           // sentence part after the gap
  answer: string[];        // accepted answers; [0] is the display key
  hint?: LocalString;      // e.g. Russian/Ukrainian cue for translation gaps
  explain: LocalString;    // why this is correct
}

// choice ── pick the correct option; options get shuffled at render time
export interface ChoiceItem {
  type: 'choice';
  id: string;
  question: string;        // sentence with a gap or a direct question
  options: string[];       // 3–4 options, includes the correct one
  correct: string;         // the correct option (matched by value, not index)
  explain: LocalString;
}

// build ── put the words in the right order (typed or tap-to-build)
export interface BuildItem {
  type: 'build';
  id: string;
  words: string[];         // shown in scrambled order
  answer: string;          // the full correct sentence
  explain: LocalString;
}

// transform ── rewrite the sentence (e.g. active → passive)
export interface TransformItem {
  type: 'transform';
  id: string;
  instruction: LocalString;
  source: string;          // the sentence to transform
  answer: string[];        // accepted rewrites; [0] is the display key
  explain: LocalString;
}

// match ── match two halves / a sentence to its rule
export interface MatchItem {
  type: 'match';
  id: string;
  left: string[];
  right: string[];
  pairs: [number, number][]; // left index → right index
  rightLabel?: LocalString;
  explain: LocalString;
}

export type Item = GapItem | ChoiceItem | BuildItem | TransformItem | MatchItem;

export interface Exercise {
  id: string;              // e.g. 'u1-core'
  title: LocalString;
  level: ExerciseLevel;
  intro?: LocalString;
  items: Item[];
}

export interface TheoryBlock {
  heading: LocalString;
  body: LocalString;       // simple wording; \n = new paragraph
  table?: { head?: string[]; rows: string[][] };
  note?: LocalString;      // typical mistakes / memory hook
}

export interface Unit {
  id: number;              // 1..20
  title: { en: string; ru: string; ua: string };
  color: string;           // hex accent for this unit
  colorSoft: string;       // soft background tint
  theory: TheoryBlock[];
  exercises: Exercise[];   // ordered warmup → core → challenge
}

export interface Roundup {
  id: number;              // 1..4
  title: { en: string; ru: string; ua: string };
  covers: number[];        // unit ids included
  intro: LocalString;
  exercises: Exercise[];
}
