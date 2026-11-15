import type { ReactNode } from 'react';
import { t, LANG_FLAGS } from '@/content/i18n';
import { useStore, levelProgress } from '@/store/useStore';
import { navigate, useHashRoute } from '@/hooks/useHashRoute';

export function Layout({ children }: { children: ReactNode }) {
  const lang = useStore((s) => s.lang);
  const xp = useStore((s) => s.xp);
  const route = useHashRoute();
  const { level, into, need } = levelProgress(xp);

  const tabs = [
    { path: '/', label: t('appName', lang), icon: <HomeIcon />, exact: true },
    { path: '/map', label: t('unitMap', lang), icon: <MapIcon /> },
    { path: '/profile', label: t('profile', lang), icon: <UserIcon /> },
  ];

  return (
    <div className="flex min-h-100dvh flex-col">
      {/* top bar */}
      <header className="sticky top-0 z-30 border-b-2 border-[#1F2A1A]/90 bg-[#FFF6EC]/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-4xl items-center gap-3 px-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 font-display text-base"
            aria-label="Grammarway 2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[#1F2A1A]/90 bg-[#FF6502] text-sm text-white sticker">
              G2
            </span>
            <span className="hidden sm:inline">Grammarway 2</span>
          </button>
          <div className="ml-auto flex items-center gap-2">
            <div
              className="flex items-center gap-2 rounded-full border-2 border-[#1F2A1A]/90 bg-white py-1 pl-3 pr-1 sticker-flat"
              title={`${t('level', lang)} ${level}`}
            >
              <span className="text-xs font-extrabold">{t('level', lang)} {level}</span>
              <span className="h-2.5 w-16 overflow-hidden rounded-full bg-[#FFE8D9]">
                <span
                  className="block h-full rounded-full bg-[#FF6502] transition-all"
                  style={{ width: `${Math.min(100, (into / need) * 100)}%` }}
                />
              </span>
              <span className="rounded-full bg-[#FDF0D3] px-2 py-0.5 text-xs font-extrabold text-[#8a6d00]">
                {xp}
              </span>
            </div>
            <span className="text-lg" aria-hidden="true" title={lang}>
              {LANG_FLAGS[lang]}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-[#1F2A1A]/90 bg-[#FFF6EC]/95 backdrop-blur safe-bottom">
        <div className="mx-auto grid max-w-md grid-cols-3">
          {tabs.map((tab) => {
            const active = tab.exact ? route === tab.path : route.startsWith(tab.path);
            return (
              <button
                key={tab.path}
                type="button"
                onClick={() => navigate(tab.path)}
                aria-current={active ? 'page' : undefined}
                className={`flex min-h-[60px] flex-col items-center justify-center gap-0.5 text-xs font-bold transition-colors ${
                  active ? 'text-[#FF6502]' : 'text-muted-foreground'
                }`}
              >
                {tab.icon}
                <span className="truncate px-1">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" /><path d="M15 5.764v15" /><path d="M9 3.236v15" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}
