import { useEffect, useMemo, useState } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const syncThemeClass = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

export function ThemeToggle({ className }: { className?: string }) {
  const initialTheme = useMemo(getPreferredTheme, []);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    syncThemeClass(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (event: MediaQueryListEvent) => {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setTheme(event.matches ? 'dark' : 'light');
      }
    };

    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={theme === 'dark'}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-sky-300 dark:focus-visible:ring-slate-600 dark:focus-visible:ring-offset-slate-950',
        className,
      )}
    >
      {theme === 'dark' ? (
        <>
          <MoonStar aria-hidden className="h-4 w-4" />
          <span>Dark</span>
        </>
      ) : (
        <>
          <Sun aria-hidden className="h-4 w-4" />
          <span>Light</span>
        </>
      )}
    </button>
  );
}
