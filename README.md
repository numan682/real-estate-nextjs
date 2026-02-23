# Home Real Estate - Next.js Real Estate Template with Dashboard

High-performance, SEO-friendly real estate web template built with Next.js App Router.

## Overview

Home Real Estate is a production-ready Next.js template focused on:

- Pixel-accurate UI and smooth animations
- Public website and built-in dashboard pages
- Reusable component architecture
- Fast static rendering for public pages
- SEO-first metadata structure
- Vercel-friendly deployment setup

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript + JSX modules
- ESLint for code quality

## Project Architecture

The project is organized for maintainability, code reuse, and clear separation of concerns.

```text
src/
  app/                        # App Router entries (layout, home, dynamic routes, robots, sitemap)
  components/                 # Reusable low-level infrastructure components
  features/
    home/                     # Component-based homepage sections
    shared/                   # Shared UI blocks (header, footer, modal, preloader, etc.)
  generated/
    template-pages/           # Route page modules mapped into App Router
    template-registry.ts      # Central route-to-page registry
  lib/                        # SEO helpers and site config
public/                       # Static assets (images, fonts, vendor scripts/styles)
```

## How The Code Works

- `src/app/layout.tsx` defines global metadata, viewport, and shared assets.
- `src/app/page.tsx` serves the homepage using reusable feature components.
- `src/app/[...slug]/page.tsx` resolves all template routes from `src/generated/template-registry.ts`.
- `src/components/template-page-shell.tsx` wraps page output with shared script lifecycle logic.
- `src/components/template-scripts.tsx` handles safe script loading, link hardening, preloader fallback, and runtime copyright year sync.
- `src/lib/seo.ts` + `src/lib/site-config.ts` centralize metadata defaults for consistent SEO across pages.

## SEO Implementation

This template includes:

- Per-page metadata support (`title`, `description`, keywords)
- Canonical URL defaults
- Open Graph and Twitter metadata
- `robots.txt` route (`src/app/robots.ts`)
- Dynamic sitemap route (`src/app/sitemap.ts`)
- Semantic HTML structure preserved across page modules
- Static pre-rendering for crawlable content

## Performance & Optimization

- Static generation for routes using `generateStaticParams`
- Optimized script loading and de-duplication
- Strong cache/security headers in `next.config.ts`
- Reusable components to reduce duplication and simplify maintenance
- Clean folder structure to keep bundle and development flow efficient

## Component Reusability

Key reusable modules:

- `src/features/shared/site-header.tsx`
- `src/features/shared/site-footer.tsx`
- `src/features/shared/login-modal.tsx`
- `src/features/shared/preloader.tsx`
- `src/components/template-page-shell.tsx`
- `src/components/template-scripts.tsx`

Homepage sections are split into independent components under `src/features/home/sections/` for easy reuse and extension.

## Installation

1. Clone the repository.
2. Install dependencies.
3. Start development server.

```bash
npm install
npm run dev
```

App runs by default at `http://localhost:3000`.

## Build & Run

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Environment Variables

Create `.env.local` (optional but recommended):

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This is used for canonical/SEO URL generation.

## Deployment (Vercel)

1. Push this project to GitHub.
2. Import repository in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel environment variables.
4. Deploy with default Next.js settings.

## Contact

- Name: Jahidul Hasan Numan
- Phone: +8801317558946
- WhatsApp: https://jhnuman.com/wp
- Portfolio: https://jhnuman.com
- Mail: jhnuman00@gmail.com
- Mail: mail@jhnuman.com
