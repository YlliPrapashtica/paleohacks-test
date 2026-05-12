# PaleoHacks Landing — Next.js

Static landing page built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS**.
Architected with **Atomic Design** (`atoms → molecules → organisms → templates → page`).

## Quick start

```bash
npm install
npm run dev    # http://localhost:3000
```

## Image pipeline

1. Drop high-resolution source JPGs into `public/images/raw/` (gitignored).
2. Run `npm run images` — `sharp` resizes (max 1600px wide) and converts to WebP @ Q78.
3. Commit the resulting `.webp` files in `public/images/`.

`next/image` then serves AVIF/WebP variants per device size automatically at request time.

### Expected files

| File | Used in |
|---|---|
| `banner-seniors.webp` | HeroBanner (LCP, `priority`) |
| `heart-pain.webp` | ProblemSection main |
| `hospital-inset.webp` | ProblemSection inset |
| `ecg-doctor.webp` | MuscleWastingSection |
| `couple-smiling.webp` | ClosingSection |

## Folder structure

```
src/
├── app/                 # Next.js App Router: layout, page, globals, metadata
├── components/
│   ├── atoms/           # Headline, Highlight, Paragraph, ResponsiveImage
│   ├── molecules/       # HeroBanner, ImageCallout, HighlightedClaim
│   ├── organisms/       # HeroSection, ProblemSection, MuscleWastingSection, ClosingSection
│   └── templates/       # LandingTemplate (composes organisms)
├── lib/                 # fonts (Roboto Condensed via next/font), seo metadata
└── styles/
```

## Performance

- All sections are Server Components → first-load JS is Next.js baseline only.
- Tailwind JIT purges unused classes → CSS bundle < 10 KB gzipped.
- LCP image (`banner-seniors.webp`) marked `priority` for `<link rel="preload">`.
- Fonts loaded via `next/font/google` with `display: swap` (no FOUT, no extra DNS).
- `next/image` auto-serves AVIF → WebP → JPG fallback per browser.

## Deploy to Vercel

```bash
npx vercel        # first time — links project
npx vercel --prod # production deploy
```

Or push to GitHub and import the repo in the Vercel dashboard.

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run images` | Convert `public/images/raw/*` → optimized WebP |
| `npm run lint` | Next.js + ESLint |
