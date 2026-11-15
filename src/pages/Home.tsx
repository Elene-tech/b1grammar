import { t } from '@/content/i18n';
import { UNITS, ROUNDUPS } from '@/content';
import { useStore, DAILY_GOAL, useEarnedBadges, BADGES } from '@/store/useStore';
import { nextPath, unitCompletion } from '@/lib/progress';
import { navigate } from '@/hooks/useHashRoute';

export function Home() {
  const lang = useStore((s) => s.lang);
  const stats = useStore((s) => s.stats);
  const streak = useStore((s) => s.streak);
  const daily = useStore((s) => s.daily);
  const xp = useStore((s) => s.xp);
  const badges = useEarnedBadges();

  const doneUnits = UNITS.filter((u) => unitCompletion(u, stats) === 1).length;
  const totalItems = UNITS.reduce((n, u) => n + u.exercises.length, 0) + ROUNDUPS.reduce((n, r) => n + r.exercises.length, 0);
  const doneItems = [...UNITS, ...ROUNDUPS].reduce(
    (n, m) => n + m.exercises.filter((ex) => (stats[ex.id]?.attempts ?? 0) > 0).length,
    0
  );
  const goalPct = Math.min(100, (daily.correct / DAILY_GOAL) * 100);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-28 pt-6">
      {/* hero */}
      <div className="rounded-3xl border-2 border-[#1F2A1A]/90 bg-[#FF6502] p-6 text-white sticker">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-balance text-xl">Grammarway 2</h1>
            <p className="mt-1 text-sm opacity-90">{t('appSub', lang)}</p>
          </div>
          <div className="flex flex-col items-center rounded-2xl border-2 border-[#1F2A1A]/90 bg-white/15 px-4 py-2">
            <span className="text-2xl" aria-hidden="true">🔥</span>
            <span className="font-display text-xl">{streak.count}</span>
            <span className="text-xs opacity-90">{t('streak', lang)}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => navigate(nextPath(stats))}
          className="mt-5 min-h-[56px] w-full rounded-2xl border-2 border-[#1F2A1A]/90 bg-white font-display text-lg text-[#FF6502] sticker"
        >
          {doneItems === 0 ? `${t('startLearning', lang)} →` : `${t('continue', lang)} →`}
        </button>
      </div>

      {/* daily goal */}
      <div className="mt-4 rounded-3xl border-2 border-[#1F2A1A]/90 bg-white p-5 sticker">
        <div className="flex items-center justify-between">
          <h2 className="text-lg">{t('dailyGoal', lang)}</h2>
          <span className="font-bold text-[#FF6502]">
            {daily.correct} / {DAILY_GOAL}
          </span>
        </div>
        <div className="mt-3 h-4 overflow-hidden rounded-full border-2 border-[#1F2A1A]/90 bg-[#FFF6EC]">
          <div
            className="h-full rounded-full bg-[#1F9540] transition-all duration-500"
            style={{ width: `${goalPct}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          {daily.correct >= DAILY_GOAL ? `✅ ${t('dailyGoalDone', lang)}` : `${DAILY_GOAL} ${t('dailyGoalText', lang)}`}
        </p>
      </div>

      {/* progress overview */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <StatCard value={`${doneUnits}/5`} label={t('unitsDone', lang)} bg="#FFE8D9" />
        <StatCard value={String(xp)} label={t('totalXp', lang)} bg="#FDF0D3" />
        <StatCard
          value={`${doneItems}/${totalItems}`}
          label={t('exercise', lang === 'ru' ? 'ru' : lang)}
          bg="#DFF2E3"
        />
      </div>

      {/* badges preview */}
      <div className="mt-4 rounded-3xl border-2 border-[#1F2A1A]/90 bg-white p-5 sticker">
        <div className="flex items-center justify-between">
          <h2 className="text-lg">{t('badges', lang)}</h2>
          <button type="button" onClick={() => navigate('/profile')} className="text-sm font-bold text-[#FF6502]">
            {badges.length}/{BADGES.length}
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {BADGES.map((b) => {
            const earned = badges.includes(b.id);
            return (
              <span
                key={b.id}
                title={`${b.name[lang]} — ${b.desc[lang]}`}
                className={`rounded-full border-2 px-3 py-1.5 text-xs font-bold ${
                  earned ? 'border-[#1F2A1A]/90 bg-[#FDF0D3] text-[#8a6d00]' : 'border-[#1F2A1A]/40 bg-[#FFF6EC] text-muted-foreground opacity-60'
                }`}
              >
                {earned ? '🏅' : '🔒'} {b.name[lang]}
              </span>
            );
          })}
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">💡 {t('firstTimeBonus', lang)}</p>
    </div>
  );
}

function StatCard({ value, label, bg }: { value: string; label: string; bg: string }) {
  return (
    <div className="rounded-3xl border-2 border-[#1F2A1A]/90 p-3 text-center sticker" style={{ backgroundColor: bg }}>
      <div className="font-display text-2xl">{value}</div>
      <div className="text-xs font-bold text-muted-foreground">{label}</div>
    </div>
  );
}
