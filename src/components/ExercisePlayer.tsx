import { useEffect, useMemo, useRef, useState } from 'react';
import type { Exercise, Item, ChoiceItem, Lang } from '@/types/exercise';
import { matchesTyped, makePositionPlan, shuffledOptions, seededShuffle, hashString } from '@/engine/check';
import { t } from '@/content/i18n';
import { useStore, XP_BY_LEVEL, PERFECT_BONUS, BADGES } from '@/store/useStore';
import { playCorrect, playWrong, playWin } from '@/lib/sound';

interface Props {
  exercise: Exercise;
  color: string;
  onExit: () => void;
  onRetry: () => void;
}

interface ItemState {
  tries: number;
  solved: boolean;
  revealed: boolean;
  correctOnFirstTry: boolean;
}

type Phase = 'question' | 'feedback' | 'summary';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export function ExercisePlayer({ exercise, color, onExit, onRetry }: Props) {
  const lang = useStore((s) => s.lang);
  const soundOn = useStore((s) => s.soundOn);
  const recordAttempt = useStore((s) => s.recordAttempt);

  const [attemptSeed, setAttemptSeed] = useState(() => Date.now() % 100000);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('question');
  const [states, setStates] = useState<Record<string, ItemState>>({});
  const [typed, setTyped] = useState('');
  const [picked, setPicked] = useState<number | null>(null);
  const [built, setBuilt] = useState<string[]>([]);
  const [pool, setPool] = useState<string[]>([]);
  const [matchSel, setMatchSel] = useState<number | null>(null);
  const [matchPairs, setMatchPairs] = useState<Map<number, number>>(new Map());
  const [rightOrder, setRightOrder] = useState<string[]>([]);
  const [summary, setSummary] = useState<{ xp: number; firstTry: number; wrong: Item[] } | null>(null);
  const [newBadges, setNewBadges] = useState<string[]>([]);
  const [xpPop, setXpPop] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = exercise.items;
  const item: Item = items[index];
  const state: ItemState = states[item.id] ?? { tries: 0, solved: false, revealed: false, correctOnFirstTry: false };

  // Per-attempt shuffles ────────────────────────────────────────────────────
  const choicePlan = useMemo(() => {
    const choiceItems = items.filter((i): i is ChoiceItem => i.type === 'choice');
    return makePositionPlan(choiceItems.length, 4, attemptSeed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attemptSeed, exercise.id]);

  const choiceView = useMemo(() => {
    if (item.type !== 'choice') return null;
    const correctIndex = item.options.indexOf(item.correct);
    const posInPlan = items.filter((i, n) => i.type === 'choice' && n < index + 1).length - 1;
    return shuffledOptions(item.options, attemptSeed + hashString(item.id), correctIndex, choicePlan[Math.max(0, posInPlan)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, attemptSeed, index]);

  // When a new question shows, reset local inputs
  useEffect(() => {
    setPhase('question');
    setTyped('');
    setPicked(null);
    setBuilt([]);
    setPool(item.type === 'build' ? seededShuffle(item.words, attemptSeed + hashString(item.id)) : []);
    if (item.type === 'match') {
      setMatchSel(null);
      setMatchPairs(new Map());
      setRightOrder(seededShuffle(item.right, attemptSeed + hashString(item.id)));
    }
    const tm = setTimeout(() => inputRef.current?.focus(), 60);
    return () => clearTimeout(tm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id, attemptSeed]);

  const setItemState = (id: string, patch: Partial<ItemState>) => {
    setStates((prev) => {
      const base: ItemState = prev[id] ?? { tries: 0, solved: false, revealed: false, correctOnFirstTry: false };
      return { ...prev, [id]: { ...base, ...patch } };
    });
  };

  const evaluate = (): boolean => {
    switch (item.type) {
      case 'gap':
        return matchesTyped(typed, item.answer);
      case 'transform':
        return matchesTyped(typed, item.answer);
      case 'choice':
        return picked !== null && choiceView !== null && choiceView.shown[picked] === item.correct;
      case 'build':
        return matchesTyped(built.join(' '), [item.answer]);
      case 'match':
        return (
          matchPairs.size === item.pairs.length &&
          item.pairs.every(([l, r]) => matchPairs.get(l) === rightOrder.indexOf(item.right[r]))
        );
    }
  };

  const onCheck = () => {
    const ok = evaluate();
    const isFirstTry = state.tries === 0;
    if (ok) {
      if (soundOn) playCorrect();
      setItemState(item.id, {
        tries: state.tries + 1,
        solved: true,
        correctOnFirstTry: isFirstTry ? true : state.correctOnFirstTry || isFirstTry,
      });
      if (isFirstTry) setXpPop((v) => v + XP_BY_LEVEL[exercise.level]);
      setPhase('feedback');
    } else {
      if (soundOn) playWrong();
      if (state.tries >= 1) {
        // second failure → reveal
        setItemState(item.id, { tries: state.tries + 1, revealed: true });
      } else {
        setItemState(item.id, { tries: state.tries + 1 });
      }
    }
  };

  const onNext = () => {
    if (index + 1 < items.length) {
      setIndex(index + 1);
    } else {
      finish();
    }
  };

  const finish = () => {
    const firstTry = items.filter((i) => states[i.id]?.correctOnFirstTry).length;
    const wrong = items.filter((i) => !states[i.id]?.correctOnFirstTry);
    const { xpGained, newBadges: nb } = recordAttempt(exercise.id, items.length, firstTry, exercise.level);
    setSummary({ xp: xpGained, firstTry, wrong });
    setNewBadges(nb);
    setPhase('summary');
    if (soundOn) playWin();
  };

  const restart = () => {
    setAttemptSeed(Date.now() % 100000);
    setIndex(0);
    setStates({});
    setSummary(null);
    setXpPop(0);
    setNewBadges([]);
    onRetry();
  };

  const canCheck =
    phase === 'question' &&
    (item.type === 'choice'
      ? picked !== null
      : item.type === 'match'
        ? matchPairs.size === item.pairs.length
        : item.type === 'build'
          ? built.length > 0
          : typed.trim().length > 0);

  // ── render ───────────────────────────────────────────────────────────────
  if (phase === 'summary' && summary) {
    const pct = Math.round((summary.firstTry / items.length) * 100);
    return (
      <div className="mx-auto w-full max-w-2xl px-4 pb-28 pt-6">
        <div className="rounded-3xl border-2 border-[#1F2A1A]/90 bg-white p-6 shadow-[0_4px_0_#1F2A1A]/90 sticker">
          <h2 className="text-center text-2xl">{t('yourResult', lang)}</h2>
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="text-center">
              <div className="font-display text-5xl" style={{ color }}>{pct}%</div>
              <div className="text-sm text-muted-foreground">
                {summary.firstTry} {t('of', lang)} {items.length} {t('correctCount', lang)}
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl text-[#F5B301]">+{summary.xp}</div>
              <div className="text-sm text-muted-foreground">{t('xpEarned', lang)}</div>
            </div>
          </div>
          {summary.firstTry === items.length && (
            <p className="mt-4 rounded-2xl bg-[#DFF2E3] p-3 text-center font-bold text-[#1F9540]">
              {t('perfectRound', lang)} +{PERFECT_BONUS} XP 🏆
            </p>
          )}
          {newBadges.length > 0 && (
            <div className="mt-4 space-y-2">
              {newBadges.map((b) => {
                const def = BADGES.find((x) => x.id === b);
                return def ? (
                  <div key={b} className="rounded-2xl bg-[#FDF0D3] p-3 text-center font-bold text-[#8a6d00]">
                    🏅 {def.name[lang]} — {def.desc[lang]}
                  </div>
                ) : null;
              })}
            </div>
          )}
          {summary.wrong.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg">{t('mistakesReview', lang)}</h3>
              <ul className="mt-2 space-y-3">
                {summary.wrong.map((w) => (
                  <li key={w.id} className="rounded-2xl bg-[#FFE8D9] p-3">
                    <MistakeLine item={w} lang={lang} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={restart}
              className="min-h-[48px] flex-1 rounded-2xl border-2 border-[#1F2A1A]/90 px-4 font-bold text-white sticker"
              style={{ backgroundColor: color }}
            >
              {t('tryAgain', lang)}
            </button>
            <button
              type="button"
              onClick={onExit}
              className="min-h-[48px] flex-1 rounded-2xl border-2 border-[#1F2A1A]/90 bg-white px-4 font-bold sticker"
            >
              {t('backToUnit', lang)}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-28 pt-6">
      {/* progress */}
      <div className="mb-4 flex items-center gap-3">
        <button
          type="button"
          onClick={onExit}
          aria-label={t('backToUnit', lang)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#1F2A1A]/90 bg-white sticker"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
          </svg>
        </button>
        <div className="h-4 flex-1 overflow-hidden rounded-full border-2 border-[#1F2A1A]/90 bg-white">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${((index + (phase !== 'question' ? 1 : 0)) / items.length) * 100}%`, backgroundColor: color }}
          />
        </div>
        <span className="whitespace-nowrap text-sm font-bold">
          {index + 1} / {items.length}
        </span>
        {xpPop > 0 && (
          <span className="whitespace-nowrap rounded-full bg-[#FDF0D3] px-2 py-1 text-sm font-extrabold text-[#8a6d00]">
            +{xpPop} XP
          </span>
        )}
      </div>

      <div className="rounded-3xl border-2 border-[#1F2A1A]/90 bg-white p-5 sticker">
        <div className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          {t('question', lang)} {index + 1} {t('of', lang)} {items.length} ·{' '}
          {exercise.level === 'warmup' ? t('warmup', lang) : exercise.level === 'core' ? t('core', lang) : t('challenge', lang)}
        </div>

        {/* ── GAP / TRANSFORM ── */}
        {(item.type === 'gap' || item.type === 'transform') && (
          <div>
            {item.type === 'transform' && (
              <p className="mb-2 font-bold" style={{ color }}>{item.instruction[lang]}</p>
            )}
            {item.type === 'transform' && (
              <p className="mb-3 rounded-2xl bg-[#FFF6EC] p-3 font-semibold">{item.source}</p>
            )}
            <p className="text-lg font-semibold leading-relaxed">
              {item.type === 'gap' && item.before}{' '}
              <span
                className="mx-1 inline-block min-w-[90px] rounded-lg border-b-4 px-2 text-center"
                style={{ borderColor: color, color: state.revealed ? '#1F9540' : color }}
              >
                {state.revealed ? answerKey(item) : typed || '………'}
              </span>{' '}
              {item.type === 'gap' && item.after}
            </p>
            {item.type === 'gap' && item.hint && (
              <p className="mt-1 text-sm text-muted-foreground">{item.hint[lang]}</p>
            )}
            <form
              className="mt-4 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (phase === 'question' && canCheck) onCheck();
                else if (phase === 'feedback') onNext();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={typed}
                disabled={phase !== 'question'}
                onChange={(e) => setTyped(e.target.value)}
                placeholder={t('typeAnswer', lang)}
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
                spellCheck={false}
                className="min-h-[52px] flex-1 rounded-2xl border-2 border-[#1F2A1A]/90 bg-[#FFF6EC] px-4 text-lg font-semibold outline-none focus:ring-4 disabled:opacity-60"
                style={{ '--tw-ring-color': `${color}44` } as React.CSSProperties}
              />
              <ActionButtons />
            </form>
          </div>
        )}

        {/* ── CHOICE ── */}
        {item.type === 'choice' && (
          <div>
            <p className="text-lg font-semibold leading-relaxed">{item.question}</p>
            <div className="mt-4 grid gap-2" role="radiogroup" aria-label={item.question}>
              {choiceView?.shown.map((opt, i) => {
                const isPicked = picked === i;
                const isCorrectOpt = opt === item.correct;
                const showState = phase === 'feedback' || state.revealed;
                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={phase !== 'question'}
                    onClick={() => setPicked(i)}
                    className={`flex min-h-[52px] items-center gap-3 rounded-2xl border-2 px-4 text-left font-bold transition-all ${
                      showState && isCorrectOpt
                        ? 'border-[#1F9540] bg-[#DFF2E3] text-[#1F9540]'
                        : showState && isPicked && !isCorrectOpt
                          ? 'border-[#E84B3C] bg-[#FDE3E0] text-[#E84B3C]'
                          : isPicked
                            ? 'border-[#1F2A1A]/90 bg-[#FDF0D3]'
                            : 'border-[#1F2A1A]/90 bg-white hover:bg-[#FFF6EC]'
                    } ${phase !== 'question' ? 'opacity-90' : ''}`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#1F2A1A]/90 text-sm">
                      {LETTERS[i]}
                    </span>
                    <span>{opt}</span>
                    {showState && isCorrectOpt && <span aria-hidden="true" className="ml-auto">✓</span>}
                    {showState && isPicked && !isCorrectOpt && <span aria-hidden="true" className="ml-auto">✗</span>}
                  </button>
                );
              })}
            </div>
            <div className="mt-4">
              <ActionButtons full />
            </div>
          </div>
        )}

        {/* ── BUILD ── */}
        {item.type === 'build' && (
          <div>
            <p className="mb-1 font-bold" style={{ color }}>{t('buildPrompt', lang)}</p>
            <p className="text-sm text-muted-foreground">{t('tapWords', lang)}</p>
            <div className="mt-3 min-h-[64px] rounded-2xl border-2 border-dashed border-[#1F2A1A]/60 bg-[#FFF6EC] p-3">
              {built.length === 0 ? (
                <span className="text-muted-foreground/60">…</span>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {built.map((w, i) => (
                    <button
                      key={`${w}-${i}`}
                      type="button"
                      onClick={() => {
                        setBuilt(built.filter((_, n) => n !== i));
                        setPool([...pool, w]);
                      }}
                      className="rounded-xl border-2 border-[#1F2A1A]/90 bg-white px-3 py-1.5 font-bold"
                      title={t('tapToRemove', lang)}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {pool.map((w, i) => (
                <button
                  key={`${w}-${i}`}
                  type="button"
                  onClick={() => {
                    setBuilt([...built, w]);
                    setPool(pool.filter((_, n) => n !== i));
                  }}
                  className="min-h-[44px] rounded-xl border-2 border-[#1F2A1A]/90 px-3 py-1.5 font-bold transition-transform active:scale-95"
                  style={{ backgroundColor: `${color}22` }}
                >
                  {w}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <ActionButtons full />
            </div>
          </div>
        )}

        {/* ── MATCH ── */}
        {item.type === 'match' && (
          <div>
            <p className="mb-1 font-bold" style={{ color }}>{t('matchPrompt', lang)}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                {item.left.map((l, i) => {
                  const used = matchPairs.has(i);
                  const isSel = matchSel === i;
                  return (
                    <button
                      key={l}
                      type="button"
                      disabled={used || phase !== 'question'}
                      onClick={() => setMatchSel(isSel ? null : i)}
                      className={`w-full min-h-[48px] rounded-2xl border-2 px-3 py-2 text-left font-bold ${
                        used
                          ? 'border-[#1F2A1A]/40 bg-[#FFF6EC] text-muted-foreground line-through'
                          : isSel
                            ? 'border-[#1F2A1A]/90 bg-[#FDF0D3]'
                            : 'border-[#1F2A1A]/90 bg-white'
                      }`}
                    >
                      {l}
                    </button>
                  );
                })}
              </div>
              <div className="space-y-2">
                {rightOrder.map((r) => {
                  const li = [...matchPairs.entries()].find(([, rv]) => rightOrder.indexOf(r) === rv)?.[0];
                  const used = li !== undefined;
                  return (
                    <button
                      key={r}
                      type="button"
                      disabled={used || phase !== 'question' || matchSel === null}
                      onClick={() => {
                        if (matchSel === null) return;
                        setMatchPairs(new Map(matchPairs.set(matchSel, rightOrder.indexOf(r))));
                        setMatchSel(null);
                      }}
                      className={`w-full min-h-[48px] rounded-2xl border-2 px-3 py-2 text-left font-bold ${
                        used
                          ? 'border-[#1F2A1A]/40 bg-[#FFF6EC] text-muted-foreground'
                          : matchSel !== null
                            ? 'border-[#1F2A1A]/90 bg-white hover:bg-[#FDF0D3]'
                            : 'border-[#1F2A1A]/90 bg-white opacity-70'
                      }`}
                    >
                      {r}
                      {used && <span className="ml-2 text-xs">→ {item.left[li!]}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                disabled={matchPairs.size === 0 || phase !== 'question'}
                onClick={() => {
                  setMatchPairs(new Map());
                  setMatchSel(null);
                }}
                className="min-h-[48px] rounded-2xl border-2 border-[#1F2A1A]/90 bg-white px-4 font-bold disabled:opacity-40"
              >
                ↺
              </button>
              <ActionButtons full />
            </div>
          </div>
        )}

        {/* feedback */}
        {phase === 'feedback' && (
          <div className="mt-4 rounded-2xl border-2 border-[#1F9540] bg-[#DFF2E3] p-4">
            <p className="font-display text-lg text-[#1F9540]">{t('correct', lang)}</p>
            <p className="mt-1">{item.explain[lang]}</p>
          </div>
        )}
        {phase === 'question' && state.tries === 1 && !state.solved && (
          <div className="mt-4 rounded-2xl border-2 border-[#E84B3C] bg-[#FDE3E0] p-4">
            <p className="font-bold text-[#E84B3C]">{t('wrong', lang)} — {t('tryAgain', lang)}…</p>
            <p className="mt-1 text-sm">{item.explain[lang]}</p>
          </div>
        )}
        {phase === 'question' && state.revealed && (
          <div className="mt-4 rounded-2xl border-2 border-[#F5B301] bg-[#FDF0D3] p-4">
            <p className="font-bold">
              {t('acceptedAnswers', lang)}: <span className="text-[#8a6d00]">{answerKey(item)}</span>
            </p>
            <p className="mt-1 text-sm">{item.explain[lang]}</p>
          </div>
        )}
      </div>

    </div>
  );

  function ActionButtons({ full }: { full?: boolean }) {
    if (phase === 'feedback' || (phase === 'question' && state.revealed)) {
      return (
        <button
          type="button"
          onClick={onNext}
          className={`min-h-[52px] rounded-2xl border-2 border-[#1F2A1A]/90 px-6 font-bold text-white sticker ${full ? 'w-full' : 'sm:w-auto'}`}
          style={{ backgroundColor: color }}
        >
          {index + 1 < items.length ? `${t('next', lang)} →` : `${t('finish', lang)} ✓`}
        </button>
      );
    }
    return (
      <div className={`flex gap-2 ${full ? 'w-full' : 'flex-col sm:flex-row'}`}>
        {state.tries >= 1 && !state.revealed && item.type !== 'match' && (
          <button
            type="button"
            onClick={() => setItemState(item.id, { revealed: true })}
            className={`min-h-[52px] rounded-2xl border-2 border-[#1F2A1A]/90 bg-white px-4 font-bold ${full ? 'flex-1' : ''}`}
          >
            {t('showAnswer', lang)}
          </button>
        )}
        <button
          type="button"
          onClick={onCheck}
          disabled={!canCheck}
          className={`min-h-[52px] rounded-2xl border-2 border-[#1F2A1A]/90 px-6 font-bold text-white sticker transition-opacity disabled:opacity-40 ${full ? 'flex-1' : ''}`}
          style={{ backgroundColor: color }}
        >
          {t('check', lang)}
        </button>
      </div>
    );
  }
}

function answerKey(item: Item): string {
  if (item.type === 'gap' || item.type === 'transform') return item.answer[0];
  if (item.type === 'build') return item.answer;
  if (item.type === 'choice') return item.correct;
  if (item.type === 'match') return item.pairs.map(([l, r]) => `${item.left[l]} → ${item.right[r]}`).join('; ');
  return '';
}

function MistakeLine({ item, lang }: { item: Item; lang: Lang }) {
  return (
    <div className="text-sm">
      <p className="font-bold">
        {item.type === 'gap' && (
          <>{item.before} <span className="text-[#1F9540]">{item.answer[0]}</span> {item.after}</>
        )}
        {item.type === 'transform' && (
          <><span className="text-muted-foreground">{item.source}</span> → <span className="text-[#1F9540]">{item.answer[0]}</span></>
        )}
        {item.type === 'choice' && (
          <>{item.question} — <span className="text-[#1F9540]">{item.correct}</span></>
        )}
        {item.type === 'build' && <span className="text-[#1F9540]">{item.answer}</span>}
        {item.type === 'match' && (
          <span className="text-[#1F9540]">{item.pairs.map(([l, r]) => `${item.left[l]} → ${item.right[r]}`).join('; ')}</span>
        )}
      </p>
      <p className="mt-1">{item.explain[lang]}</p>
    </div>
  );
}
