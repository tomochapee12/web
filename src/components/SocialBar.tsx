import type { SocialLink } from '../lib/links';
import { cn } from '../lib/utils';

type SocialBarProps = {
  items: SocialLink[];
  className?: string;
};

export function SocialBar({ items, className }: SocialBarProps) {
  return (
    <nav
      aria-label="Social links"
      className={cn('flex flex-wrap items-center gap-3', className)}
    >
      {items.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label={label}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/60 text-slate-700 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:focus-visible:ring-slate-600 dark:focus-visible:ring-offset-slate-950"
        >
          <Icon aria-hidden className="h-5 w-5" />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </nav>
  );
}
