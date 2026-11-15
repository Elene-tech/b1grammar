import { useState } from 'react';
import { t } from '@/content/i18n';
import type { Unit, Roundup } from '@/types/exercise';
import { useStore } from '@/store/useStore';
import { unitMedal } from '@/lib/progress';
import { navigate } from '@/hooks/useHashRoute';
import { ExercisePlayer } from '@/components/ExercisePlayer';
import { MedalBadge } from '@/pages/MapPage';

/** Unit page: theory blocks + exercise list; also used for round-ups (theory = intro). */
export function ModulePage({ unit, roundup }: { unit?: Unit; roundup?: Roundup }) {
  const lang = useStore((s) => s.lang);
  const stats = useStore((s) => s.stats);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const color = unit?.color ?? '#F5B301';
  const colorSoft = unit?.colorSoft ?? '#FDF0D3';
  const title = unit ? unit.title[lang] : roundup!.title[lang];
  const exercises = (unit ?? roundup)!.exercises;
  const playing = exercises.find((ex) => ex.id === playingId);

  if (playing) {
    return (
      <ExercisePlayer
        exercise={playing}
        color={color}
        onExit={() => {
          setPlayingId(null);
          navigate(unit ? `/unit/${unit.id}` : `/roundup/${roundup!.id}`);
        }}
        onRetry={() => {}}
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-28 pt-6">
      <div
        className="rounded-3xl border-2 border-[#1F2A1A]/90 p-5 sticker"
        style={{ backgroundColor: colorSoft }}
      >
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/map')}
            aria-label="Back"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-[#1F2A1A]/90 bg-white sticker"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-balance text-xl leading-snug">{title}</h1>
          {unit && unitMedal(unit, stats) && <MedalBadge medal={unitMedal(unit, stats)!} lang={lang} />}
        </div>
        {roundup && <p className="mt-2 text-sm text-muted-foreground">{roundup.intro[lang]}</p>}
      </div>

      {/* theory */}
      {(unit?.theory ?? []).length > 0 && (
        <section className="mt-6">
          <h2 className="text-xl">{t('theory', lang)}</h2>
          <div className="mt-3 space-y-4">
            {unit!.theory.map((block, i) => (
              <article key={i} className="rounded-3xl border-2 border-[#1F2A1A]/90 bg-white p-5 sticker">
                <h3 className="text-lg" style={{ color }}>{block.heading[lang]}</h3>
                {block.body[lang].split('\n').map((p, n) => (
                  <p key={n} className="mt-2 text-[15px] leading-relaxed">
                    {p}
                  </p>
                ))}
                {block.table && (
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      {block.table.head && (
                        <thead>
                          <tr>
                            {block.table.head.map((h, n) => (
                              <th key={n} className="border-2 border-[#1F2A1A]/70 bg-[#FFF6EC] px-2 py-1.5 text-left font-extrabold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      <tbody>
                        {block.table.rows.map((row, n) => (
                          <tr key={n}>
                            {row.map((cell, m) => (
                              <td key={m} className="border-2 border-[#1F2A1A]/70 px-2 py-1.5">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {block.note && (
                  <p className="mt-3 rounded-2xl bg-[#FDF0D3] p-3 text-sm font-semibold text-[#8a6d00]">
                    {block.note[lang]}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* exercises */}
      <section className="mt-6">
        <h2 className="text-xl">{t('practice', lang)}</h2>
        <div className="mt-3 space-y-3">
          {exercises.map((ex, i) => {
            const stat = stats[ex.id];
            const attempted = (stat?.attempts ?? 0) > 0;
            const pct = Math.round((stat?.bestFirstTryPct ?? 0) * 100);
            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => {
                  setPlayingId(ex.id);
                  navigate(`/play/${ex.id}`);
                }}
                className="flex w-full items-center gap-4 rounded-3xl border-2 border-[#1F2A1A]/90 bg-white p-4 text-left sticker transition-transform active:scale-[0.99]"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-[#1F2A1A]/90 font-display text-lg text-white"
                  style={{ backgroundColor: color }}
                >
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold leading-snug">{ex.title[lang]}</span>
                  <span className="mt-0.5 block text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    {ex.level === 'warmup' ? t('warmup', lang) : ex.level === 'core' ? t('core', lang) : t('challenge', lang)} ·{' '}
                    {ex.items.length} {t('question', lang === 'ru' ? 'ru' : lang).toLowerCase()}
                  </span>
                </span>
                <span className="shrink-0 text-right">
                  {attempted ? (
                    <>
                      <span className={`block font-display text-lg ${pct >= 70 ? 'text-[#1F9540]' : pct >= 40 ? 'text-[#B8860B]' : 'text-[#E84B3C]'}`}>
                        {pct}%
                      </span>
                      <span className="block text-xs text-muted-foreground">×{stat.attempts}</span>
                    </>
                  ) : (
                    <span className="text-2xl" aria-hidden="true">→</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">💡 {t('firstTimeBonus', lang)}</p>
      </section>
    </div>
  );
}
