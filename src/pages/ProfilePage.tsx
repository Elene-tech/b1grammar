import { useState } from 'react';
import { t, LANG_NAMES, LANG_FLAGS } from '@/content/i18n';
import type { Lang } from '@/types/exercise';
import { useStore, BADGES, levelProgress, DAILY_GOAL } from '@/store/useStore';

export function ProfilePage() {
  const lang = useStore((s) => s.lang);
  const setLang = useStore((s) => s.setLang);
  const soundOn = useStore((s) => s.soundOn);
  const toggleSound = useStore((s) => s.toggleSound);
  const xp = useStore((s) => s.xp);
  const totalAnswered = useStore((s) => s.totalAnswered);
  const totalCorrect = useStore((s) => s.totalCorrect);
  const streak = useStore((s) => s.streak);
  const bestFirstTryStreak = useStore((s) => s.bestFirstTryStreak);
  const daily = useStore((s) => s.daily);
  const earned = useStore((s) => s.stats);
  const exportProgress = useStore((s) => s.exportProgress);
  const importProgress = useStore((s) => s.importProgress);
  const resetAll = useStore((s) => s.resetAll);

  const { level, into, need } = levelProgress(xp);
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const [code, setCode] = useState('');
  const [exported, setExported] = useState('');
  const [copied, setCopied] = useState(false);
  const [importMsg, setImportMsg] = useState<'ok' | 'bad' | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const badgeEarned = (id: string) => {
    const stats = Object.values(earned);
    switch (id) {
      case 'first-steps': return stats.length > 0;
      case 'perfect-10': return bestFirstTryStreak >= 10;
      case 'streak-3': return streak.count >= 3;
      case 'xp-500': return xp >= 500;
      case 'unit-gold': {
        for (let u = 1; u <= 5; u++) {
          const p = ['warmup', 'core', 'challenge'].map((lv) => earned[`u${u}-${lv}`]?.bestFirstTryPct);
          if (p.every((x) => x !== undefined && x >= 0.9)) return true;
        }
        return false;
      }
      case 'roundup-star': {
        const p = ['r1-check', 'r1-mix', 'r1-test'].map((id2) => earned[id2]?.bestFirstTryPct);
        return p.every((x) => x !== undefined) && p.reduce((a, b) => a + (b ?? 0), 0) / 3 >= 0.8;
      }
      case 'challenger': {
        return Object.entries(earned).some(([id2, v]) => id2.endsWith('-challenge') && v.bestFirstTryPct === 1);
      }
      default: return false;
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-28 pt-6">
      <h1 className="text-2xl">{t('profile', lang)}</h1>

      {/* level card */}
      <div className="mt-4 rounded-3xl border-2 border-[#1F2A1A]/90 bg-[#FF6502] p-5 text-white sticker">
        <div className="flex items-end justify-between">
          <div>
            <div className="font-display text-4xl">{t('level', lang)} {level}</div>
            <div className="mt-1 text-sm opacity-90">{xp} {t('xp', lang)}</div>
          </div>
          <div className="text-right text-sm opacity-90">
            {into} / {need} XP
          </div>
        </div>
        <div className="mt-3 h-4 overflow-hidden rounded-full border-2 border-[#1F2A1A]/90 bg-white/30">
          <div className="h-full rounded-full bg-white transition-all" style={{ width: `${(into / need) * 100}%` }} />
        </div>
      </div>

      {/* stats */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat value={`${streak.count}🔥`} label={t('streak', lang)} />
        <Stat value={String(bestFirstTryStreak)} label={t('bestStreak', lang)} />
        <Stat value={`${daily.correct}/${DAILY_GOAL}`} label={t('answersToday', lang)} />
        <Stat value={`${accuracy}%`} label={t('accuracy', lang)} />
      </div>

      {/* badges */}
      <h2 className="mt-6 text-xl">{t('badges', lang)}</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {BADGES.map((b) => {
          const has = badgeEarned(b.id);
          return (
            <div
              key={b.id}
              className={`rounded-3xl border-2 p-4 sticker ${
                has ? 'border-[#1F2A1A]/90 bg-[#FDF0D3]' : 'border-[#1F2A1A]/40 bg-white opacity-70'
              }`}
            >
              <div className="font-bold">{has ? '🏅' : '🔒'} {b.name[lang]}</div>
              <div className="mt-1 text-sm text-muted-foreground">{b.desc[lang]}</div>
            </div>
          );
        })}
      </div>

      {/* settings */}
      <h2 className="mt-6 text-xl">{t('settings', lang)}</h2>
      <div className="mt-3 rounded-3xl border-2 border-[#1F2A1A]/90 bg-white p-5 sticker">
        <div className="flex items-center justify-between gap-3">
          <span className="font-bold">{t('language', lang)}</span>
          <div className="flex gap-2">
            {(Object.keys(LANG_NAMES) as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`min-h-[44px] rounded-xl border-2 px-3 text-sm font-bold ${
                  lang === l ? 'border-[#1F2A1A]/90 bg-[#FDF0D3]' : 'border-[#1F2A1A]/90 bg-white'
                }`}
              >
                {LANG_FLAGS[l]} {LANG_NAMES[l]}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-[#1F2A1A]/30 pt-4">
          <span className="font-bold">{t('sound', lang)}</span>
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={soundOn}
            className={`min-h-[44px] w-20 rounded-full border-2 border-[#1F2A1A]/90 font-bold sticker-flat ${
              soundOn ? 'bg-[#1F9540] text-white' : 'bg-white text-muted-foreground'
            }`}
          >
            {soundOn ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* export / import */}
      <h2 className="mt-6 text-xl">{t('exportProgress', lang)}</h2>
      <div className="mt-3 rounded-3xl border-2 border-[#1F2A1A]/90 bg-white p-5 sticker">
        <p className="text-sm text-muted-foreground">{t('exportHint', lang)}</p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => setExported(exportProgress())}
            className="min-h-[48px] rounded-2xl border-2 border-[#1F2A1A]/90 bg-[#DFF2E3] px-4 font-bold"
          >
            {t('exportProgress', lang)}
          </button>
          {exported && (
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(exported).catch(() => {});
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="min-h-[48px] rounded-2xl border-2 border-[#1F2A1A]/90 bg-white px-4 font-bold"
            >
              {copied ? t('copied', lang) : t('copy', lang)}
            </button>
          )}
        </div>
        {exported && (
          <textarea
            readOnly
            value={exported}
            rows={3}
            className="mt-3 w-full rounded-2xl border-2 border-[#1F2A1A]/60 bg-[#FFF6EC] p-3 font-mono text-xs break-all"
            onFocus={(e) => e.target.select()}
          />
        )}
        <div className="mt-4 border-t-2 border-dashed border-[#1F2A1A]/30 pt-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={t('pasteCode', lang)}
            className="min-h-[48px] w-full rounded-2xl border-2 border-[#1F2A1A]/60 bg-[#FFF6EC] px-4 font-mono text-sm"
          />
          <button
            type="button"
            disabled={!code.trim()}
            onClick={() => {
              const ok = importProgress(code);
              setImportMsg(ok ? 'ok' : 'bad');
              if (ok) setCode('');
              setTimeout(() => setImportMsg(null), 2500);
            }}
            className="mt-2 min-h-[48px] rounded-2xl border-2 border-[#1F2A1A]/90 bg-[#FFE8D9] px-4 font-bold disabled:opacity-40"
          >
            {t('importBtn', lang)}
          </button>
          {importMsg === 'ok' && <p className="mt-2 font-bold text-[#1F9540]">✓ {t('importDone', lang)}</p>}
          {importMsg === 'bad' && <p className="mt-2 font-bold text-[#E84B3C]">{t('importBad', lang)}</p>}
        </div>
      </div>

      {/* reset */}
      <div className="mt-6 rounded-3xl border-2 border-[#E84B3C] bg-white p-5">
        {!confirmReset ? (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="min-h-[48px] w-full rounded-2xl border-2 border-[#E84B3C] bg-white font-bold text-[#E84B3C]"
          >
            {t('resetAll', lang)}
          </button>
        ) : (
          <div>
            <p className="font-bold text-[#E84B3C]">{t('resetConfirm', lang)}</p>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  resetAll();
                  setConfirmReset(false);
                }}
                className="min-h-[48px] flex-1 rounded-2xl border-2 border-[#1F2A1A]/90 bg-[#E84B3C] font-bold text-white sticker"
              >
                {t('resetAll', lang)}
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="min-h-[48px] flex-1 rounded-2xl border-2 border-[#1F2A1A]/90 bg-white font-bold"
              >
                {t('close', lang)}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border-2 border-[#1F2A1A]/90 bg-white p-3 text-center sticker">
      <div className="font-display text-xl">{value}</div>
      <div className="text-xs font-bold text-muted-foreground">{label}</div>
    </div>
  );
}
