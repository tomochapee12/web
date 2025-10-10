import { motion } from 'framer-motion';
import type { LinkCardItem } from '../lib/links';
import { cn } from '../lib/utils';

type LinkCardProps = LinkCardItem & {
  className?: string;
};

export function LinkCard({
  href,
  title,
  description,
  icon: Icon,
  className,
}: LinkCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      whileFocus={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={cn(
        'group relative flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white/70 p-5 text-left shadow-sm outline-none transition dark:border-slate-800 dark:bg-slate-900/70',
        'focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-600 dark:focus-visible:ring-offset-slate-950',
        className,
      )}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition group-hover:border-slate-300 group-hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:group-hover:border-slate-600 dark:group-hover:text-sky-300">
        <Icon aria-hidden className="h-5 w-5" />
      </span>
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-slate-900 transition group-hover:text-indigo-600 dark:text-slate-50 dark:group-hover:text-sky-300">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      <span className="mt-auto text-sm font-medium text-indigo-600 transition group-hover:translate-x-0.5 dark:text-sky-300">
        Visit
      </span>
    </motion.a>
  );
}
