import { t } from '@/content/i18n';
import type { Lang, Unit, Roundup } from '@/types/exercise';
import { UNITS, ROUNDUPS } from '@/content';
import { useStore, type Medal } from '@/store/useStore';
import { isUnitUnlocked, isRoundupUnlocked, unitMedal, roundupMedal, unitCompletion } from '@/lib/progress';
import { navigate } from '@/hooks/useHashRoute';

export function MapPage() {
  const lang = useStore((s) => s.lang);
  const stats = useStore((s) => s.stats);

  const nodes: React.ReactNode[] = [];
  UNITS.forEach((u, i) => {
    const unlocked = isUnitUnlocked(u, stats);
    nodes.push(
      <UnitCard key={u.id} unit={u} lang={lang} unlocked={unlocked} medal={unitMedal(u, stats)} completion={unitCompletion(u, stats)} />
    );
    if ((i + 1) % 5 === 0) {
      const r = ROUNDUPS.find((x) => x.id === (i + 1) / 5);
      if (r) {
        nodes.push(
          <RoundupCard key={`r${r.id}`} roundup={r} lang={lang} unlocked={isRoundupUnlocked(r, stats)} medal={roundupMedal(r, stats)} />
        );
      }
    }
  });

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-28 pt-6">
      <h1 className="text-2xl">{t('unitMap', lang)}</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        5 {t('unitsDone', lang)} · {t('roundup', lang)} 1
      </p>
      <div className="mt-5 space-y-4">{nodes}</div>
      <div className="mt-6 rounded-3xl border-2 border-dashed border-[#1F2A1A]/40 bg-white/60 p-5 text-center">
        <span className="rounded-full bg-[#FDF0D3] px-3 py-1 text-xs font-extrabold text-[#8a6d00]">
          {t('soonBadge', lang)}
        </span>
        <p className="mt-2 font-bold text-muted-foreground">Units 6–20 · {t('newContent', lang)}</p>
      </div>
    </div>
  );
}

function UnitCard({
  unit,
  lang,
  unlocked,
  medal,
  completion,
}: {
  unit: Unit;
  lang: Lang;
  unlocked: boolean;
  medal?: Medal;
  completion: number;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border-2 border-[#1F2A1A]/90 p-5 sticker ${
        unlocked ? '' : 'opacity-70'
      }`}
      style={{ backgroundColor: unit.colorSoft }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-[#1F2A1A]/90 font-display text-xl text-white sticker"
          style={{ backgroundColor: unit.color }}
        >
          {unit.id}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-balance text-lg leading-snug">{unit.title[lang]}</h2>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {!unlocked && (
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-muted-foreground">
                🔒 {t('locked', lang)}
              </span>
            )}
            {unlocked && medal && <MedalBadge medal={medal} lang={lang} />}
            {unlocked && !medal && completion > 0 && (
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-muted-foreground">
                {Math.round(completion * 100)}% · {t('inProgress', lang)}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!unlocked}
          onClick={() => navigate(`/unit/${unit.id}`)}
          className="min-h-[48px] flex-1 rounded-2xl border-2 border-[#1F2A1A]/90 px-4 font-bold text-white sticker disabled:opacity-50"
          style={{ backgroundColor: unit.color }}
        >
          {t('theory', lang)} + {t('practice', lang)}
        </button>
      </div>
      {!unlocked && (
        <p className="mt-2 text-xs text-muted-foreground">{t('unlockHint', lang)}</p>
      )}
    </div>
  );
}

function RoundupCard({
  roundup,
  lang,
  unlocked,
  medal,
}: {
  roundup: Roundup;
  lang: Lang;
  unlocked: boolean;
  medal?: Medal;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border-2 border-[#1F2A1A]/90 bg-[#FDF0D3] p-5 sticker ${
        unlocked ? '' : 'opacity-70'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-[#1F2A1A]/90 bg-[#F5B301] text-2xl sticker">
          🔁
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg">{roundup.title[lang]}</h2>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {!unlocked && (
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-muted-foreground">
                🔒 {t('locked', lang)}
              </span>
            )}
            {unlocked && medal && <MedalBadge medal={medal} lang={lang} />}
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{roundup.intro[lang]}</p>
      <button
        type="button"
        disabled={!unlocked}
        onClick={() => navigate(`/roundup/${roundup.id}`)}
        className="mt-4 min-h-[48px] w-full rounded-2xl border-2 border-[#1F2A1A]/90 bg-[#F5B301] px-4 font-bold text-white sticker disabled:opacity-50"
      >
        {t('roundup', lang)} 1 →
      </button>
      {!unlocked && <p className="mt-2 text-xs text-muted-foreground">{t('unlockHint', lang)}</p>}
    </div>
  );
}

export function MedalBadge({ medal, lang }: { medal: Medal; lang: Lang }) {
  const conf = {
    bronze: { icon: '🥉', name: t('medalBronze', lang), bg: '#EAD3C1' },
    silver: { icon: '🥈', name: t('medalSilver', lang), bg: '#E5E7EB' },
    gold: { icon: '🥇', name: t('medalGold', lang), bg: '#FDF0D3' },
  }[medal];
  return (
    <span
      className="rounded-full border-2 border-[#1F2A1A]/60 px-3 py-1 text-xs font-extrabold"
      style={{ backgroundColor: conf.bg }}
    >
      {conf.icon} {conf.name}
    </span>
  );
}
