import { useState } from 'react';
import { t, LANG_NAMES, LANG_FLAGS } from '@/content/i18n';
import type { Lang } from '@/types/exercise';
import { useStore } from '@/store/useStore';

const SLIDES = [
  {
    emoji: '📚',
    key: 'onboarding1' as const,
    bg: '#FFE8D9',
    fg: '#FF6502',
  },
  {
    emoji: '🎯',
    key: 'onboarding2' as const,
    bg: '#DFF2E3',
    fg: '#1F9540',
  },
  {
    emoji: '🏆',
    key: 'onboarding3' as const,
    bg: '#FDF0D3',
    fg: '#B8860B',
  },
];

export function Onboarding() {
  const [slide, setSlide] = useState(0);
  const [lang, setLang] = useState<Lang>('ru');
  const setLangStore = useStore((s) => s.setLang);
  const completeOnboarding = useStore((s) => s.completeOnboarding);
  const complete = () => {
    setLangStore(lang);
    completeOnboarding();
  };
  const s = SLIDES[slide];

  return (
    <div className="mx-auto flex min-h-100dvh w-full max-w-xl flex-col px-6 py-8">
      <div className="mt-4 text-center font-display text-2xl">Grammarway 2</div>
      <p className="text-center text-sm text-muted-foreground">{t('appSub', lang)}</p>

      {slide === 0 && (
        <div className="mt-6">
          <p className="mb-2 text-center text-sm font-bold">{t('chooseLang', lang)}</p>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(LANG_NAMES) as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`min-h-[52px] rounded-2xl border-2 px-2 text-sm font-bold ${
                  lang === l ? 'border-[#1F2A1A]/90 bg-[#FDF0D3] sticker' : 'border-[#1F2A1A]/90 bg-white'
                }`}
              >
                {LANG_FLAGS[l]} {LANG_NAMES[l]}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        key={slide}
        className="mt-6 flex flex-1 flex-col items-center justify-center rounded-3xl border-2 border-[#1F2A1A]/90 p-8 text-center sticker"
        style={{ backgroundColor: s.bg }}
      >
        <div className="text-6xl" aria-hidden="true">{s.emoji}</div>
        <h2 className="mt-4 text-balance text-xl" style={{ color: s.fg }}>
          {t(s.key, lang)}
        </h2>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 rounded-full border-2 border-[#1F2A1A]/90 ${i === slide ? 'w-8 bg-[#FF6502]' : 'w-2.5 bg-white'}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => (slide < SLIDES.length - 1 ? setSlide(slide + 1) : complete())}
        className="mt-6 min-h-[56px] w-full rounded-2xl border-2 border-[#1F2A1A]/90 bg-[#FF6502] font-display text-lg text-white sticker"
      >
        {slide < SLIDES.length - 1 ? t('continue', lang) : t('letsGo', lang)}
      </button>
    </div>
  );
}
