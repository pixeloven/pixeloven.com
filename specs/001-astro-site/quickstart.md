# Quickstart: Astro Site

**Branch**: `001-astro-site` | **Date**: 2026-02-14

## Prerequisites

- Node.js >= 22
- pnpm (`corepack enable && corepack prepare pnpm@latest --activate`)

## Setup

```bash
# Clone and switch to feature branch
git clone <repo-url> && cd pixeloven.com
git checkout 001-astro-site

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

## Development

```bash
# Dev server with hot reload
pnpm dev           # http://localhost:4321

# Production build
pnpm build         # Output: ./dist/

# Preview production build
pnpm preview       # http://localhost:4321
```

## Creating a Blog Post

Create a Markdown file in `src/content/blog/`:

```markdown
---
title: "My New Post"
date: 2026-02-14
summary: "Optional excerpt shown on the blog listing page"
---

Post content here. Supports **bold**, *italic*, `code`, lists, headings, images, and links.
```

- Filename becomes the URL slug: `my-new-post.md` → `/blog/my-new-post/`
- Add `draft: true` to hide from production builds (still visible in dev)
- If `summary` is omitted, an excerpt is auto-generated from the body (~150 chars)

## Project Structure

```
pixeloven.com/
├── src/
│   ├── content.config.ts    # Content collection schemas
│   ├── content/
│   │   └── blog/            # Blog post Markdown files
│   ├── components/          # Reusable Astro components
│   ├── layouts/             # Page layouts (BaseLayout)
│   ├── pages/               # File-based routing
│   │   ├── index.astro      # Homepage
│   │   ├── blog/
│   │   │   ├── index.astro  # Blog listing
│   │   │   └── [id].astro   # Individual post
│   │   └── 404.astro        # Custom 404
│   ├── styles/
│   │   └── global.css       # Tailwind v4 config + global styles
│   └── utils/
│       └── excerpt.ts       # Excerpt generation utility
├── public/
│   ├── CNAME                # Custom domain for GitHub Pages
│   └── favicon.svg          # Site favicon
├── astro.config.mjs         # Astro configuration
├── package.json             # pnpm project
├── tsconfig.json            # TypeScript config
├── index.html               # Design reference (not part of build)
├── CNAME                    # Original CNAME (preserved at root)
├── development/             # Archived monorepo project
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment
└── specs/                   # Feature specifications
```

## Deployment

Deployment is automatic via GitHub Actions:
1. Push to `main` branch
2. `withastro/action@v5` builds the site with pnpm
3. `actions/deploy-pages@v4` deploys to GitHub Pages
4. Live at https://www.pixeloven.com

## Key Technology

| Tool | Version | Purpose |
|------|---------|---------|
| Astro | 5.x | Static site generator |
| Tailwind CSS | 4.x | Utility-first CSS (via `@tailwindcss/vite`) |
| pnpm | latest | Package manager |
| GitHub Actions | - | CI/CD deployment |
| GitHub Pages | - | Static hosting |
