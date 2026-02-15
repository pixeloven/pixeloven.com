# Implementation Plan: Astro Site

**Branch**: `001-astro-site` | **Date**: 2026-02-14 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-astro-site/spec.md`

## Summary

Build a static site using Astro 5.x at the repository root, preserving the existing `index.html` design as the homepage and adding a Markdown-powered blog. The site uses Tailwind CSS v4 (via `@tailwindcss/vite`), supports dark/light mode with a session-scoped toggle, and deploys automatically to GitHub Pages (www.pixeloven.com) via the official `withastro/action@v5` GitHub Action with pnpm.

## Technical Context

**Language/Version**: TypeScript / Astro 5.x / Node.js >= 22
**Primary Dependencies**: Astro 5.x, `@tailwindcss/vite` (Tailwind CSS v4), `@tailwindcss/typography` (prose styling for blog posts)
**Storage**: Markdown files on disk (Astro Content Collections with glob loader)
**Testing**: Manual browser testing, Lighthouse audits (90+ accessibility/SEO)
**Target Platform**: Static site hosted on GitHub Pages (www.pixeloven.com)
**Project Type**: Single static site
**Performance Goals**: < 3s page load on broadband, Lighthouse 90+ accessibility/SEO
**Constraints**: No SSR, no JavaScript frameworks for interactivity (vanilla JS only), session-only dark mode persistence
**Scale/Scope**: ~5 pages (homepage, blog listing, blog posts, 404), small blog volume

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

No constitution file found. No gates to evaluate. Proceeding.

**Post-Phase 1 re-check**: Single project, no unnecessary abstractions, minimal dependencies. Passes by default.

## Project Structure

### Documentation (this feature)

```text
specs/001-astro-site/
├── plan.md              # This file
├── research.md          # Phase 0 output — technology decisions
├── data-model.md        # Phase 1 output — content collection schemas
├── quickstart.md        # Phase 1 output — developer setup guide
├── contracts/           # Phase 1 output — no API contracts (static site)
│   └── README.md
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
pixeloven.com/
├── src/
│   ├── content.config.ts        # Astro 5 content collection definitions
│   ├── content/
│   │   └── blog/                # Blog post Markdown files
│   │       └── hello-world.md   # Sample post
│   ├── components/
│   │   ├── Navigation.astro     # Site-wide nav (home + blog links)
│   │   ├── ThemeToggle.astro    # Dark/light mode toggle button
│   │   ├── Header.astro         # Site header with brand
│   │   ├── Footer.astro         # Site footer with links
│   │   └── BlogPostCard.astro   # Post card for listing page
│   ├── layouts/
│   │   └── BaseLayout.astro     # Base HTML layout (head, meta, global CSS)
│   ├── pages/
│   │   ├── index.astro          # Homepage (preserves index.html design)
│   │   ├── blog/
│   │   │   ├── index.astro      # Blog listing (reverse chronological)
│   │   │   └── [id].astro       # Individual blog post
│   │   └── 404.astro            # Custom 404 page
│   ├── styles/
│   │   └── global.css           # Tailwind v4 imports, @theme, @variant
│   └── utils/
│       └── excerpt.ts           # Auto-generate excerpt from Markdown body
├── public/
│   ├── CNAME                    # www.pixeloven.com (for GitHub Pages)
│   └── favicon.svg              # Site favicon
├── astro.config.mjs             # Astro config (site URL, Tailwind plugin)
├── package.json                 # pnpm project (Astro + Tailwind deps)
├── tsconfig.json                # TypeScript configuration
├── index.html                   # Original design reference (preserved)
├── CNAME                        # Original CNAME (preserved at root)
├── development/                 # Archived monorepo project
│   ├── apps/
│   ├── packages/
│   ├── turbo.json
│   ├── .eslintrc.js
│   ├── .nvmrc
│   ├── prettier.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── page.html
│   ├── page2.html
│   ├── NOTES.md
│   ├── favicon.ico
│   ├── favicon.png
│   └── .nojekyll
├── .github/
│   └── workflows/
│       └── deploy.yml           # Astro GitHub Pages deployment
├── .gitignore                   # Updated for Astro (node_modules, dist)
├── LICENSE
├── README.md
├── .claude/
├── .specify/
└── specs/
```

**Structure Decision**: Single Astro project at repository root. This is a static site with no backend, no API, and no separate frontend/backend split. The `src/` directory follows standard Astro conventions. The existing monorepo project is archived to `development/` to avoid interference with the Astro build.

## Complexity Tracking

No constitution violations. No complexity justifications needed.

| Aspect | Assessment |
|--------|-----------|
| Dependencies | Minimal: Astro + Tailwind vite plugin + typography plugin |
| Abstractions | None beyond Astro's built-in component/layout system |
| Build pipeline | Single `astro build` command, standard GitHub Action |
| Runtime JS | Minimal: only dark mode toggle script (inline, no framework) |
