# ChronosTech — Global Recruitment & Talent Acquisition

A modern, premium, responsive landing page for ChronosTech, a global recruitment
and talent acquisition company. Built with **React**, **TypeScript**, **Vite**,
and **Tailwind CSS**.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** — fast dev server and optimized production builds
- **Tailwind CSS 3** — utility-first styling with a custom design system
- **lucide-react** — icon library

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run typecheck # run the TypeScript compiler
npm run lint     # run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── ui/            # Reusable primitives (Eyebrow, Badge, IconCard, IconCardGrid, SectionContainer)
│   ├── About.tsx
│   ├── AnimatedCounter.tsx
│   ├── CTAButton.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Industries.tsx
│   ├── Insights.tsx
│   ├── Navbar.tsx
│   ├── Newsletter.tsx
│   ├── Reveal.tsx
│   ├── SectionHeading.tsx
│   ├── Services.tsx
│   ├── Stats.tsx
│   └── WhyChoose.tsx
├── data/
│   └── content.ts     # All page content (nav, services, industries, stats, articles, footer)
├── hooks/
│   └── useScrollReveal.ts
├── App.tsx
└── index.css
```

## Component Architecture

Reusable UI primitives live in `src/components/ui/` and are shared across
sections:

- **`Eyebrow`** — the recurring uppercase section-label pill.
- **`Badge`** — small glassy pill for blog categories.
- **`IconCard`** — a single icon + title + description card, with three
  variants (`solid`, `glass`, `horizontal`) used by Services, Why Choose, and
  Industries.
- **`IconCardGrid`** — responsive grid that staggers scroll-reveal animations
  on its children.
- **`SectionContainer`** — consistent section padding and max-width wrapper.
- **`CTAButton`** — polymorphic button/link with four variants.
- **`Reveal`** + **`useScrollReveal`** — IntersectionObserver-based scroll
  reveal animation.

All page content is centralized in `src/data/content.ts` so copy changes don't
require touching component logic.

## Deploying to GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys
the site automatically on every push to `main`.

### One-time repository setup

1. Push the project to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.

The workflow sets `VITE_BASE_PATH` to `/<repository-name>/` automatically, so
asset paths resolve correctly for project sites. If you deploy to a custom
domain or a `user.github.io` repo, set `VITE_BASE_PATH=/` in your repo
variables or edit the workflow.

### Manual deploy

```bash
npm run build
# push the dist/ folder to your gh-pages branch, or serve via your host of choice
```

## Customization

- **Brand colors & theme**: `tailwind.config.js`
- **Global styles & utilities** (glass, gradient, reveal): `src/index.css`
- **Content**: `src/data/content.ts`
- **SEO meta**: `index.html`
