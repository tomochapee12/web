import {
  type LucideIcon,
  Archive,
  Clapperboard,
  Github,
  NotebookPen,
  SquareStack,
  Twitter,
  User,
  Youtube,
} from 'lucide-react';

export type SocialLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type LinkCardItem = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PinnedLink = {
  href: string;
  label: string;
};

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/t12jp',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://x.com/t12jp',
    label: 'X (Twitter)',
    icon: Twitter,
  },
  {
    href: 'https://blog.t12jp.org',
    label: 'Blog',
    icon: NotebookPen,
  },
];

export const linkCards: LinkCardItem[] = [
  {
    href: 'https://blog.t12jp.org',
    title: 'Blog',
    description: 'Snapshots from current experiments and the thoughts behind them.',
    icon: NotebookPen,
  },
  {
    href: 'https://github.com/t12jp',
    title: 'Projects',
    description: 'Selected open-source work and long-term playgrounds.',
    icon: SquareStack,
  },
  {
    href: 'https://annict.com/@t12jp',
    title: 'Watching Anime',
    description: 'Realtime track of seasonal shows on Annict.',
    icon: Clapperboard,
  },
  {
    href: 'https://t12jp.org/about',
    title: 'About',
    description: 'Quick background, interests, and ways to collaborate.',
    icon: User,
  },
  {
    href: 'https://t12jp.org/archive',
    title: 'Archive',
    description: 'A tidy index of talks, notes, and experiments from past years.',
    icon: Archive,
  },
  {
    href: 'https://www.youtube.com/@t12jp',
    title: 'Recordings',
    description: 'Lightweight demos, streams, and tutorials preserved on YouTube.',
    icon: Youtube,
  },
];

export const pinnedLinks: PinnedLink[] = [
  {
    href: 'https://status.t12jp.org',
    label: 'Status Board',
  },
  {
    href: 'https://playground.t12jp.org',
    label: 'Playground',
  },
  {
    href: 'https://reading.t12jp.org',
    label: 'Reading List',
  },
  {
    href: 'https://links.t12jp.org',
    label: 'Link Stash',
  },
  {
    href: 'mailto:hello@t12jp.org',
    label: 'Email',
  },
];
