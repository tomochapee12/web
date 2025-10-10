import { useMemo } from 'react';

const clampPercent = (value: number) => Math.min(100, Math.max(0, value));

export function YearProgress() {
  const percent = useMemo(() => {
    const now = Date.now();
    const currentYear = new Date().getFullYear();
    const start = new Date(currentYear, 0, 1).getTime();
    const end = new Date(currentYear + 1, 0, 1).getTime();
    const progress = ((now - start) / (end - start)) * 100;
    return clampPercent(progress);
  }, []);

  const displayValue = percent.toFixed(1);

  return (
    <section
      aria-label="Year progress"
      className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
        <span className="font-medium text-slate-800 dark:text-slate-100">
          Year in progress
        </span>
        <span>{displayValue}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={Number(displayValue)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="relative h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-[width]"
          style={{ width: `${displayValue}%` }}
        />
      </div>
      <span className="sr-only" aria-live="polite">
        {displayValue}% of the year has passed.
      </span>
    </section>
  );
}
