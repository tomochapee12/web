# t12jp.org home

A minimalist personal home base for Tomoya (t12jp) built with React, Vite, Tailwind CSS, and TypeScript. The single-page layout keeps essential links, subtle widgets, and a persistent light/dark theme toggle within a compact footprint.

## Tech stack
- React 19 with Vite 7
- Tailwind CSS with custom gradient and noise background
- TypeScript, ESLint (`@typescript-eslint`), and SWC-powered React plugin
- framer-motion micro-interactions and lucide-react icons

## Getting started
```bash
npm install
npm run dev
```

## Available scripts
- `npm run dev`: start the local development server
- `npm run build`: create an optimized production build
- `npm run preview`: preview the production build locally
- `npm run lint`: run ESLint on the project sources

## Project structure
- `src/pages/Home.tsx`: single-page layout assembly
- `src/components/`: accessible UI components (social bar, link cards, widgets)
- `src/lib/links.ts`: data sources powering cards and badges
- `src/index.css`: Tailwind directives with background styling

## Accessibility & UX
- Keyboard navigable, focus-visible styles on every interactive element
- `aria-label`s on icon-only controls and descriptive alt text for the avatar
- Progress widgets announce values to assistive technologies
- Theme preference persists in `localStorage` and updates the `dark` class on `<html>`
