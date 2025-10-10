import { ArrowUpRight } from 'lucide-react';
import { SocialBar } from '../components/SocialBar';
import { LinkCard } from '../components/LinkCard';
import { ThemeToggle } from '../components/ThemeToggle';
import { YearProgress } from '../components/YearProgress';
import { linkCards, pinnedLinks, socialLinks } from '../lib/links';

const avatarPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%233C82F6'/%3E%3Cstop offset='100%25' stop-color='%2395E3D1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='180' height='180' fill='url(%23g)' rx='90'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='Segoe UI, Arial, sans-serif' font-size='72' fill='%23F8FAFC'%3ET%3C/text%3E%3C/svg%3E";

export function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto flex min-h-screen flex-col gap-12 px-4 py-12 sm:py-14">
      <section className="flex flex-col gap-8 rounded-3xl border border-slate-200 bg-white/75 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 md:flex-row md:items-center md:justify-between">
        <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-full border border-slate-200 shadow-lg dark:border-slate-700 md:mx-0">
          <img
            src={avatarPlaceholder}
            alt="Stylized initial T placeholder avatar for Tomoya"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col gap-6 md:pl-8">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
              Tomoya / t12jp
            </h1>
            <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
              Building quiet tools for the open web, crafting calmer interfaces, and making
              space for curious people to tinker together.
            </p>
          </div>
          <SocialBar items={socialLinks} className="pt-1" />
        </div>
      </section>

      <section className="space-y-6">
        <header className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Link Cards
          </h2>
          <ArrowUpRight aria-hidden className="h-5 w-5 text-slate-400 dark:text-slate-500" />
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {linkCards.slice(0, 6).map((item) => (
            <LinkCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Pinned Links
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {pinnedLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-sky-300 dark:focus-visible:ring-slate-600 dark:focus-visible:ring-offset-slate-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <YearProgress />
      </section>

      <footer className="mt-auto flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/75 p-6 text-sm text-slate-500 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {currentYear} Tomoya Yoshimoto. Crafted slowly, updated when curiosity strikes.
        </p>
        <ThemeToggle />
      </footer>
    </div>
  );
}
