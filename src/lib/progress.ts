import type { Unit, Roundup, Exercise } from '@/types/exercise';
import { UNITS } from '@/content';
import type { ExerciseStat, Medal } from '@/store/useStore';
import { computeMedal } from '@/store/useStore';

export function isUnitUnlocked(unit: Unit, stats: Record<string, ExerciseStat>): boolean {
  if (unit.id === 1) return true;
  // a unit opens when the PREVIOUS unit's exercises have all been attempted
  const prev = UNITS.find((u) => u.id === unit.id - 1);
  if (!prev) return true;
  return prev.exercises.every((ex) => (stats[ex.id]?.attempts ?? 0) > 0);
}

export function isRoundupUnlocked(roundup: Roundup, stats: Record<string, ExerciseStat>): boolean {
  return roundup.exercises.every((ex) => (stats[ex.id]?.attempts ?? 0) > 0) ? true
    : roundup.covers.every((u) => {
        // every exercise of every covered unit attempted at least once
        return ['warmup', 'core', 'challenge'].every((lv) => (stats[`u${u}-${lv}`]?.attempts ?? 0) > 0);
      });
}

export function unitMedal(unit: Unit, stats: Record<string, ExerciseStat>): Medal | undefined {
  const pcts = unit.exercises.map((ex) => stats[ex.id]?.bestFirstTryPct);
  if (pcts.some((p) => p === undefined)) return undefined;
  return computeMedal(pcts as number[]);
}

export function roundupMedal(roundup: Roundup, stats: Record<string, ExerciseStat>): Medal | undefined {
  const pcts = roundup.exercises.map((ex) => stats[ex.id]?.bestFirstTryPct);
  if (pcts.some((p) => p === undefined)) return undefined;
  return computeMedal(pcts as number[]);
}

export function unitCompletion(unit: Unit, stats: Record<string, ExerciseStat>): number {
  const done = unit.exercises.filter((ex) => (stats[ex.id]?.attempts ?? 0) > 0).length;
  return done / unit.exercises.length;
}

/** First exercise of the first unit that is not finished yet (attempted). */
export function nextExercise(unitOrRoundup: Unit | Roundup, stats: Record<string, ExerciseStat>): Exercise | undefined {
  return unitOrRoundup.exercises.find((ex) => (stats[ex.id]?.attempts ?? 0) === 0);
}

export function nextPath(stats: Record<string, ExerciseStat>): string {
  // find first unit with unfinished exercise
  for (let u = 1; u <= 5; u++) {
    const prefix = `u${u}-`;
    for (const lv of ['warmup', 'core', 'challenge']) {
      if ((stats[`${prefix}${lv}`]?.attempts ?? 0) === 0) {
        return `/play/${prefix}${lv}`;
      }
    }
  }
  // then round-up
  for (const id of ['r1-check', 'r1-mix', 'r1-test']) {
    if ((stats[id]?.attempts ?? 0) === 0) return `/play/${id}`;
  }
  return '/map';
}
