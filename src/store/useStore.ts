import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Lang } from '@/types/exercise';

export type Medal = 'bronze' | 'silver' | 'gold';

export interface ExerciseStat {
  attempts: number;
  /** best share of items answered correctly on the FIRST check (0..1) */
  bestFirstTryPct: number;
  lastFirstTryPct: number;
  lastPlayedAt: string;
}

interface StreakState {
  count: number;
  lastDay: string; // YYYY-MM-DD
}

export interface DailyState {
  date: string;
  correct: number;
}

export const DAILY_GOAL = 10;
export const XP_BY_LEVEL = { warmup: 5, core: 10, challenge: 15 } as const;
export const PERFECT_BONUS = 20;

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function xpForLevel(level: number): number {
  // XP needed to go from `level` to `level+1`
  return 100 + (level - 1) * 50;
}

export function levelFromXp(xp: number): number {
  let level = 1;
  let remaining = xp;
  while (remaining >= xpForLevel(level)) {
    remaining -= xpForLevel(level);
    level++;
  }
  return level;
}

export function levelProgress(xp: number): { level: number; into: number; need: number } {
  let level = 1;
  let remaining = xp;
  while (remaining >= xpForLevel(level)) {
    remaining -= xpForLevel(level);
    level++;
  }
  return { level, into: remaining, need: xpForLevel(level) };
}

interface AppState {
  lang: Lang;
  onboarded: boolean;
  soundOn: boolean;
  xp: number;
  totalAnswered: number;
  totalCorrect: number;
  bestFirstTryStreak: number;
  streak: StreakState;
  daily: DailyState;
  /** stats keyed by exercise id (u1-warmup … r1-test) */
  stats: Record<string, ExerciseStat>;
  setLang: (l: Lang) => void;
  completeOnboarding: () => void;
  toggleSound: () => void;
  /**
   * Record a finished attempt.
   * @param firstTryCorrect number of items correct on the first check
   * @param level exercise level for XP calculation
   */
  recordAttempt: (
    exId: string,
    total: number,
    firstTryCorrect: number,
    level: keyof typeof XP_BY_LEVEL
  ) => { xpGained: number; newBadges: string[] };
  importProgress: (json: string) => boolean;
  exportProgress: () => string;
  resetAll: () => void;
}

const BADGE_DEFS = [
  { id: 'first-steps', name: { ru: 'Первые шаги', ua: 'Перші кроки', en: 'First steps' } as Record<Lang, string>, desc: { ru: 'Пройди первое упражнение', ua: 'Пройди першу вправу', en: 'Complete your first exercise' } as Record<Lang, string> },
  { id: 'perfect-10', name: { ru: 'Снайпер', ua: 'Снайпер', en: 'Sharpshooter' }, desc: { ru: '10 ответов с первой попытки подряд', ua: '10 відповідей з першої спроби поспіль', en: '10 first-try answers in a row' } },
  { id: 'streak-3', name: { ru: 'Три дня огня', ua: 'Три дні вогню', en: 'Three days of fire' }, desc: { ru: 'Занимайся 3 дня подряд', ua: 'Займайся 3 дні поспіль', en: 'Learn 3 days in a row' } },
  { id: 'xp-500', name: { ru: 'Коллекционер XP', ua: 'Колекціонер XP', en: 'XP collector' }, desc: { ru: 'Заработай 500 очков', ua: 'Зароби 500 очок', en: 'Earn 500 XP' } },
  { id: 'unit-gold', name: { ru: 'Золотой юнит', ua: 'Золотий юніт', en: 'Golden unit' }, desc: { ru: 'Золотая медаль в любом юните', ua: 'Золота медаль в будь-якому юніті', en: 'Gold medal in any unit' } },
  { id: 'roundup-star', name: { ru: 'Звезда повторения', ua: 'Зірка повторення', en: 'Round-up star' }, desc: { ru: 'Пройди Round-up на 80%+', ua: 'Пройди Round-up на 80%+', en: 'Finish a Round-up with 80%+' } },
  { id: 'challenger', name: { ru: 'Искатель вызовов', ua: 'Шукач викликів', en: 'Challenge seeker' }, desc: { ru: 'Вызов пройден на 100%', ua: 'Виклик пройдено на 100%', en: 'A challenge exercise at 100%' } },
];

export const BADGES = BADGE_DEFS as { id: string; name: Record<Lang, string>; desc: Record<Lang, string> }[];

export function computeMedal(pcts: number[]): Medal | undefined {
  if (pcts.length === 0) return undefined;
  const avg = pcts.reduce((a, b) => a + b, 0) / pcts.length;
  if (avg >= 0.9) return 'gold';
  if (avg >= 0.7) return 'silver';
  return 'bronze';
}

function computeBadges(s: {
  stats: Record<string, ExerciseStat>;
  xp: number;
  streak: StreakState;
  bestFirstTryStreak: number;
}): string[] {
  const stats = Object.values(s.stats);
  const earned: string[] = [];
  if (stats.length > 0) earned.push('first-steps');
  if (s.bestFirstTryStreak >= 10) earned.push('perfect-10');
  if (s.streak.count >= 3) earned.push('streak-3');
  if (s.xp >= 500) earned.push('xp-500');
  // gold in any unit (u1..u5 exercises)
  for (let u = 1; u <= 5; u++) {
    const pcts = ['warmup', 'core', 'challenge'].map((lv) => s.stats[`u${u}-${lv}`]?.bestFirstTryPct);
    if (pcts.every((p) => p !== undefined) && computeMedal(pcts as number[]) === 'gold') {
      earned.push('unit-gold');
      break;
    }
  }
  const r1 = ['r1-check', 'r1-mix', 'r1-test'].map((id) => s.stats[id]?.bestFirstTryPct);
  if (r1.every((p) => p !== undefined) && (r1 as number[]).reduce((a, b) => a + b, 0) / 3 >= 0.8) {
    earned.push('roundup-star');
  }
  const ch = Object.entries(s.stats).filter(([id]) => id.endsWith('-challenge'));
  if (ch.some(([, v]) => v.bestFirstTryPct === 1)) earned.push('challenger');
  return earned;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      lang: 'ru',
      onboarded: false,
      soundOn: true,
      xp: 0,
      totalAnswered: 0,
      totalCorrect: 0,
      bestFirstTryStreak: 0,
      streak: { count: 0, lastDay: '' },
      daily: { date: today(), correct: 0 },
      stats: {},

      setLang: (lang) => set({ lang }),
      completeOnboarding: () => set({ onboarded: true }),
      toggleSound: () => set((s) => ({ soundOn: !s.soundOn })),

      recordAttempt: (exId, total, firstTryCorrect, level) => {
        const s = get();
        const prev = s.stats[exId];
        const pct = total > 0 ? firstTryCorrect / total : 0;
        const perfect = firstTryCorrect === total;
        let xpGained = firstTryCorrect * XP_BY_LEVEL[level];
        if (perfect) xpGained += PERFECT_BONUS;

        // daily goal + streak (counted once per day, on first correct answer)
        const now = today();
        let daily = s.daily;
        let streak = s.streak;
        let streakBonus = 0;
        if (firstTryCorrect > 0 && daily.date !== now) {
          daily = { date: now, correct: 0 };
          streak =
            s.streak.lastDay === yesterday()
              ? { count: s.streak.count + 1, lastDay: now }
              : { count: 1, lastDay: now };
          if (streak.count > 2) streakBonus = 10;
        }
        daily = { ...daily, correct: daily.correct + firstTryCorrect };

        const stat: ExerciseStat = {
          attempts: (prev?.attempts ?? 0) + 1,
          bestFirstTryPct: Math.max(prev?.bestFirstTryPct ?? 0, pct),
          lastFirstTryPct: pct,
          lastPlayedAt: new Date().toISOString(),
        };
        xpGained += streakBonus;
        set({
          stats: { ...s.stats, [exId]: stat },
          xp: s.xp + xpGained,
          totalAnswered: s.totalAnswered + total,
          totalCorrect: s.totalCorrect + firstTryCorrect,
          bestFirstTryStreak: Math.max(s.bestFirstTryStreak, firstTryCorrect),
          streak,
          daily,
        });
        const newBadges = computeBadges(get()).filter(
          (b) => !computeBadges(s).includes(b)
        );
        return { xpGained, newBadges };
      },

      exportProgress: () => {
        const s = get();
        return btoa(
          unescape(
            encodeURIComponent(
              JSON.stringify({
                v: 1,
                xp: s.xp,
                totalAnswered: s.totalAnswered,
                totalCorrect: s.totalCorrect,
                bestFirstTryStreak: s.bestFirstTryStreak,
                streak: s.streak,
                daily: s.daily,
                stats: s.stats,
              })
            )
          )
        );
      },

      importProgress: (code) => {
        try {
          const data = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
          if (data.v !== 1 || typeof data.xp !== 'number' || typeof data.stats !== 'object') {
            return false;
          }
          set({
            xp: data.xp,
            totalAnswered: data.totalAnswered ?? 0,
            totalCorrect: data.totalCorrect ?? 0,
            bestFirstTryStreak: data.bestFirstTryStreak ?? 0,
            streak: data.streak ?? { count: 0, lastDay: '' },
            daily: data.daily ?? { date: today(), correct: 0 },
            stats: data.stats ?? {},
          });
          return true;
        } catch {
          return false;
        }
      },

      resetAll: () =>
        set({
          xp: 0,
          totalAnswered: 0,
          totalCorrect: 0,
          bestFirstTryStreak: 0,
          streak: { count: 0, lastDay: '' },
          daily: { date: today(), correct: 0 },
          stats: {},
          onboarded: true,
        }),
    }),
    { name: 'grammarway2-trainer' }
  )
);

export function useEarnedBadges(): string[] {
  return computeBadges(useStore());
}
