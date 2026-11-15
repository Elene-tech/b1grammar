import type { Unit, Roundup } from '@/types/exercise';
import { unit1 } from './units/unit1';
import { unit2 } from './units/unit2';
import { unit3 } from './units/unit3';
import { unit4 } from './units/unit4';
import { unit5 } from './units/unit5';
import { roundup1 } from './roundups/roundup1';

export const UNITS: Unit[] = [unit1, unit2, unit3, unit4, unit5];
export const ROUNDUPS: Roundup[] = [roundup1];

export function getUnit(id: number): Unit | undefined {
  return UNITS.find((u) => u.id === id);
}

export function getRoundup(id: number): Roundup | undefined {
  return ROUNDUPS.find((r) => r.id === id);
}
