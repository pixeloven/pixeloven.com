# Research: Astro Site

**Branch**: `001-astro-site` | **Date**: 2026-02-14

## Decision 1: GitHub Pages Deployment Strategy

**Decision**: Use the official `withastro/action@v5` GitHub Action with a two-job workflow (build + deploy).

**Rationale**: The official Astro action auto-detects pnpm from `pnpm-lock.yaml`, handles caching, and follows GitHub Pages best practices with the `actions/deploy-pages@v4` deploy step. The GitHub Pages source must be set to "GitHub Actions" in repo settings.

**Alternatives considered**:
- Manual pnpm setup with `pnpm/action-setup@v4` + `actions/setup-node@v4` — more verbose, no advantage
- Direct deploy via branch — deprecated in favor of Actions-based deployment

**Key details**:
- Workflow file: `.github/workflows/deploy.yml`
- Requires `permissions: { contents: read, pages: write, id-token: write }`
- CNAME file must be in `public/` to be included in build output
- `astro.config.mjs` needs `site: 'https://www.pixeloven.com'` (no `base` needed with custom domain)
- `output: 'static'` is the default in Astro 5

## Decision 2: Tailwind CSS v4 Setup

**Decision**: Use `@tailwindcss/vite` plugin (not the deprecated `@astrojs/tailwind` integration). Configuration is CSS-first via `@theme` and `@variant` directives in `src/styles/global.css`.

**Rationale**: Tailwind v4 fundamentally changed configuration from JavaScript to CSS. The `@astrojs/tailwind` integration is deprecated as of Astro 5.2+. The new approach provides ~70% smaller CSS output and faster builds.

**Alternatives considered**:
- `@astrojs/tailwind` — deprecated for Tailwind v4
- Vanilla CSS — more verbose, no utility-class productivity
- Sass/SCSS — unnecessary overhead when Tailwind v4 has CSS-native config

**Key details**:
- Install: `pnpm add -D @tailwindcss/vite`
- No `tailwind.config.js` file — all config in CSS
- Dark mode: `@variant dark (&:where(.dark, .dark *));` in global CSS
- Brand color: `--color-oven: #ff5722;` in `@theme` block
- Global CSS imported in base layout: `import '../styles/global.css';`

**Global CSS structure** (`src/styles/global.css`):
```css
@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));

@theme {
  --color-oven: #ff5722;
}
```

**Astro config addition**:
```javascript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

## Decision 3: Content Collections (Astro 5.x Content Layer API)

**Decision**: Use Astro 5's Content Layer API with `loader: glob()` for blog post collections. Config lives at `src/content.config.ts`.

**Rationale**: Astro 5.0 introduced the Content Layer API as a breaking change from v4. It provides 5x faster Markdown builds, 2x faster MDX, and 25-50% less memory usage. Content can now live anywhere on disk.

**Alternatives considered**:
- Legacy `type: 'content'` approach — deprecated in Astro 5
- External CMS — overkill for a simple Markdown blog
- Manual file reading — loses type safety and schema validation

**Key changes from Astro 4.x**:
- Config moved from `src/content/config.ts` to `src/content.config.ts`
- `type: 'content'` replaced by `loader: glob()`
- `post.slug` replaced by `post.id`
- `await post.render()` replaced by `import { render } from 'astro:content'; await render(post)`

**Blog post schema**:
```typescript
z.object({
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string().optional(),
  draft: z.boolean().optional().default(false),
})
```

**Excerpt strategy**: Use frontmatter `summary` field if provided; otherwise auto-generate from `post.body` by stripping Markdown/HTML and truncating to ~150 characters.

## Decision 4: Dark/Light Mode Implementation

**Decision**: Inline `is:inline` script in `<head>` for FOUC prevention, `sessionStorage` for session-only persistence, default to dark mode.

**Rationale**: `sessionStorage` persists across page navigations and refreshes within a session but clears when the browser/tab closes — exactly matching the requirement for session-only persistence that resets to dark on new visits. The inline script in `<head>` prevents any flash of wrong theme.

**Alternatives considered**:
- `localStorage` — persists across sessions (not wanted)
- In-memory only — lost on every page navigation (poor UX)
- CSS `prefers-color-scheme` media query — doesn't allow manual toggle override

**Key details**:
- FOUC prevention script must use `is:inline` and be in `<head>` before stylesheets
- Default: `document.documentElement.classList.add('dark')` when `sessionStorage` has no theme
- Toggle: Astro component (no framework needed) that toggles `dark` class and updates `sessionStorage`
- Tailwind v4: `@variant dark (&:where(.dark, .dark *));` in global CSS

## Decision 5: Repository Structure Reorganization

**Decision**: Astro site at repo root. Existing monorepo project and non-essential files relocated to `development/` subdirectory.

**Rationale**: User explicitly requested root-level Astro setup. The existing monorepo (apps, packages, turbo) is legacy and should be preserved but not interfere with the Astro site.

**Files staying at root**: `index.html` (design reference), `CNAME` (also copied to `public/`), `LICENSE`, `README.md`, `.gitignore`, `.git/`, `.claude/`, `.specify/`, `specs/`

**Files moving to `development/`**: `apps/`, `packages/`, `turbo.json`, `.eslintrc.js`, `.nvmrc`, `prettier.config.js`, `package.json`, `package-lock.json`, `page.html`, `page2.html`, `NOTES.md`, `favicon.ico`, `favicon.png`, `.nojekyll`

**New root-level Astro files**: `astro.config.mjs`, `package.json` (new, for Astro), `pnpm-lock.yaml`, `tsconfig.json`, `src/`, `public/`
