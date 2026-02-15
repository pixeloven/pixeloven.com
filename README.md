# pixeloven.com

The personal site and blog for [PixelOven](https://www.pixeloven.com) — Product & Platform Engineering.

## Tech Stack

- [Astro](https://astro.build/) v5 — static site generator
- [Tailwind CSS](https://tailwindcss.com/) v4 — utility-first styling via `@tailwindcss/vite`
- [TypeScript](https://www.typescriptlang.org/) — strict mode
- [pnpm](https://pnpm.io/) — package manager

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build for production to `dist/` |
| `pnpm preview` | Preview the production build locally |

## Project Structure

```
src/
  components/    # Astro components (Header, Footer, Navigation, etc.)
  content/
    blog/        # Markdown blog posts
  layouts/       # Base HTML layout
  pages/         # File-based routing (/, /blog/, /blog/[id]/)
  styles/        # Global CSS with Tailwind v4 theme
  utils/         # Utility functions
public/          # Static assets (CNAME, favicon)
development/     # Archived monorepo files
```

## Blog

Blog posts are Markdown files in `src/content/blog/`. Each post requires frontmatter:

```yaml
---
title: "Post Title"
date: 2026-02-15
summary: "Optional excerpt"
draft: false
---
```

## Deployment

The site deploys to GitHub Pages automatically on push to `main` via the workflow in `.github/workflows/deploy.yml`. The repo's Pages source must be set to **GitHub Actions** (not "Deploy from a branch").

## License

See [LICENSE](./LICENSE).
