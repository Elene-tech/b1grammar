// ─── Checking engine ────────────────────────────────────────────────────────
// Normalises learner input and compares it against accepted keys.
// Also owns seeded shuffling so correct-option positions are spread evenly
// (never A-B-C-D in sequence, never the same letter for a whole exercise).

/** Normalise typed input for comparison. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[?!.,;:"]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** True if the typed answer matches any accepted key. */
export function matchesTyped(input: string, keys: string[]): boolean {
  const n = normalize(input);
  if (!n) return false;
  return keys.some((k) => normalize(k) === n);
}

/** Normalised form used to display the accepted key after checking. */
export function displayKey(keys: string[]): string {
  return keys[0];
}

// ── Seeded RNG ──────────────────────────────────────────────────────────────

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function seededShuffle<T>(arr: T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Shuffle the options of a multiple-choice item so that the position of the
 * correct answer is balanced across an exercise: we pre-compute a "position
 * plan" that uses every option slot roughly equally, then shuffle the rest.
 * `plan` is an array of target indices (0-based) for each item, produced by
 * makePositionPlan(); it is consumed one entry per item.
 */
export function shuffledOptions(
  options: string[],
  seed: number,
  correctIndex: number,
  planIndex: number
): { shown: string[]; correctPos: number } {
  const rand = mulberry32(seed + planIndex * 7919);
  const others = options
    .map((opt, i) => ({ opt, i }))
    .filter((o) => o.i !== correctIndex);
  for (let i = others.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [others[i], others[j]] = [others[j], others[i]];
  }
  const pos = planIndex % options.length;
  const shown: string[] = [];
  let oi = 0;
  for (let i = 0; i < options.length; i++) {
    if (i === pos) {
      shown.push(options[correctIndex]);
    } else {
      shown.push(others[oi].opt);
      oi++;
    }
  }
  return { shown, correctPos: pos };
}

/**
 * Build a position plan for an exercise with `count` choice items and
 * `slots` options each. The plan is a seed-rotated cycle through all slots:
 * every slot is used equally, the same slot never repeats twice in a row,
 * and the cycle never runs A-B-C-D in order (rotation 0 uses a reversed
 * cycle). This guarantees answers never sit in one position or march
 * sequentially down the options.
 */
export function makePositionPlan(count: number, slots: number, seed: number): number[] {
  // Perfect-shuffle cycle: evens first, then odds. No two adjacent entries
  // ever ascend by one (0,1,2…), and rotation by seed varies the start.
  const evens: number[] = [];
  const odds: number[] = [];
  for (let i = 0; i < slots; i++) (i % 2 === 0 ? evens : odds).push(i);
  const base = [...evens, ...odds];
  const r = ((seed % slots) + slots) % slots;
  const cycle = base.map((_, i) => base[(i + r) % slots]);
  const plan: number[] = [];
  for (let i = 0; i < count; i++) plan.push(cycle[i % slots]);
  return plan;
}
