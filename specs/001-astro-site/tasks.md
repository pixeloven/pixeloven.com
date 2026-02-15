# Tasks: Astro Site

**Input**: Design documents from `/specs/001-astro-site/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, quickstart.md

**Tests**: No automated tests requested. Manual browser verification at each checkpoint.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Relocate existing project files and initialize the Astro project at repo root

- [x] T001 Create `development/` directory and move existing monorepo files into it: `apps/`, `packages/`, `turbo.json`, `.eslintrc.js`, `.nvmrc`, `prettier.config.js`, `package.json`, `package-lock.json`, `page.html`, `page2.html`, `NOTES.md`, `favicon.ico`, `favicon.png`, `.nojekyll` — preserve `index.html`, `CNAME`, `LICENSE`, `README.md`, `.gitignore` at root
- [x] T002 Initialize Astro 5.x project at repo root with pnpm: run `pnpm create astro@latest` (or manually create `package.json` with astro dependency), then `pnpm install` to generate `pnpm-lock.yaml` and create `astro.config.mjs`, `tsconfig.json`
- [x] T003 Install Tailwind CSS v4 via `pnpm add -D @tailwindcss/vite` and configure the vite plugin in `astro.config.mjs` — add `import tailwindcss from '@tailwindcss/vite'` and register in `vite.plugins` array; set `site: 'https://www.pixeloven.com'` in astro config
- [x] T004 Create global CSS file at `src/styles/global.css` with Tailwind v4 imports, dark mode variant, and brand theme: `@import "tailwindcss"`, `@variant dark (&:where(.dark, .dark *))`, and `@theme { --color-oven: #ff5722; }` — also add the custom `.theme-transition` and `.font-mono-tight` utility classes from `index.html`
- [x] T005 Update `.gitignore` to include Astro patterns: `node_modules/`, `dist/`, `.astro/`, and any pnpm-specific ignores

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Base layout, theme toggle, and static assets that ALL pages depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Create `BaseLayout.astro` in `src/layouts/BaseLayout.astro` — accepts `title` and `description` props; renders full HTML document with `<html lang="en">`, charset/viewport meta tags, `<title>`, description meta, inline `is:inline` FOUC prevention script in `<head>` that reads `sessionStorage.getItem('theme')` and defaults to dark by adding `dark` class to `<html>`; imports `src/styles/global.css`; applies Tailwind body classes matching `index.html` (`theme-transition bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 min-h-screen font-sans`); includes a `<slot />` for page content
- [x] T007 Create `ThemeToggle.astro` in `src/components/ThemeToggle.astro` — renders a button matching the existing `index.html` toggle style (fixed top-right, border, backdrop blur, shows moon/sun emoji based on dark class); includes `<script>` that toggles `dark` class on `document.documentElement` and writes to `sessionStorage`
- [x] T008 [P] Copy `CNAME` content (`www.pixeloven.com`) to `public/CNAME` and create a site favicon at `public/favicon.svg` (simple PixelOven-branded icon)

**Checkpoint**: `pnpm dev` should start, serve a blank page with dark mode default and working theme toggle

---

## Phase 3: User Story 1 — View the Homepage (Priority: P1) 🎯 MVP

**Goal**: A visitor sees the full PixelOven landing page preserving all content and visual identity from `index.html`

**Independent Test**: Navigate to `http://localhost:4321/`, verify all homepage sections render correctly in both dark and light mode, matching the existing `index.html` design

### Implementation for User Story 1

- [x] T009 [P] [US1] Create `Header.astro` in `src/components/Header.astro` — site header with PixelOven h1 (`text-6xl md:text-8xl font-black uppercase tracking-tighter italic`), tagline ("Product & Platform Engineering" in oven color), and bottom border matching `index.html` header section
- [x] T010 [P] [US1] Create `Footer.astro` in `src/components/Footer.astro` — footer with top border, flex layout with GitHub link, LinkedIn link, Personal Site link, and copyright "© 2026 PixelOven" matching `index.html` footer styling (`text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]`)
- [x] T011 [US1] Create homepage at `src/pages/index.astro` — uses `BaseLayout` with title "PixelOven | Product & Platform Engineering"; includes `ThemeToggle`, `Header`, all content sections from `index.html` (philosophy two-column grid, personal statement with italic blockquote and left border, background section with 3-column grid and skill bullets, consulting CTA card with LinkedIn button and orange left border, open source card with GitHub link and hover arrow), and `Footer`; preserve exact Tailwind classes, text content, and responsive breakpoints from `index.html`

**Checkpoint**: Homepage at `/` should be visually identical to `index.html` in both dark and light modes, responsive on mobile/tablet/desktop

---

## Phase 4: User Story 2 — Read a Blog Post (Priority: P2)

**Goal**: A visitor can browse a blog listing page and read individual blog posts with proper formatting

**Independent Test**: Navigate to `/blog/`, see a list of posts with title, date, and excerpt; click a post to see full content with rich formatting

### Implementation for User Story 2

- [x] T012 [P] [US2] Create content collection config at `src/content.config.ts` — define `blog` collection with `glob` loader pointing to `./src/content/blog`, pattern `**/*.md`; Zod schema with `title` (string), `date` (coerce date), `summary` (optional string), `draft` (optional boolean, default false); export `collections`
- [x] T013 [P] [US2] Create excerpt utility at `src/utils/excerpt.ts` — export `createExcerpt(body: string, length?: number): string` that strips Markdown syntax (headings, bold, italic, links, images, code blocks) from the raw body string, truncates to `length` (default 150) characters at a word boundary, and appends "..."
- [x] T014 [P] [US2] Install `@tailwindcss/typography` via `pnpm add -D @tailwindcss/typography` and add `@plugin "@tailwindcss/typography"` to `src/styles/global.css` for prose styling of blog post content
- [x] T015 [US2] Create `BlogPostCard.astro` in `src/components/BlogPostCard.astro` — accepts `title`, `date`, `excerpt`, and `url` props; renders a linked card with post title, formatted date (`toLocaleDateString` with year, month long, day numeric), and excerpt text; styled consistently with the site theme (oven color on hover, zinc text colors, uppercase date label)
- [x] T016 [US2] Create blog listing page at `src/pages/blog/index.astro` — uses `BaseLayout` with title "Blog | PixelOven"; queries `getCollection('blog')` filtering out drafts in production; sorts by date descending; renders `BlogPostCard` for each post, using `post.data.summary || createExcerpt(post.body)` for excerpt; shows "No posts yet" message when collection is empty
- [x] T017 [US2] Create individual blog post page at `src/pages/blog/[id].astro` — `getStaticPaths` returns all blog posts; uses `import { render } from 'astro:content'` to render post; displays title, formatted date, and `<Content />` wrapped in `prose` class for typography styling; includes "← Back to blog" navigation link; uses `BaseLayout` with post title
- [x] T018 [US2] Create sample blog post at `src/content/blog/hello-world.md` — frontmatter with title "Hello World", date today, summary "A first post to test the blog"; body with example headings, paragraphs, a code block, a list, bold/italic text, and a link to verify all rich formatting renders correctly

**Checkpoint**: `/blog/` shows the hello-world post with title, date, excerpt; clicking it shows full formatted content; "Back to blog" link works

---

## Phase 5: User Story 3 — Navigate Between Sections (Priority: P3)

**Goal**: A persistent navigation element on all pages links to homepage and blog, with active section indicator

**Independent Test**: From any page, navigation shows Home and Blog links; clicking each navigates correctly; current section is visually highlighted

### Implementation for User Story 3

- [x] T019 [US3] Create `Navigation.astro` in `src/components/Navigation.astro` — accepts current URL via `Astro.url.pathname`; renders nav element with "Home" and "Blog" links; active link styled with oven color or underline; inactive links with zinc color and hover effect; positioned consistently (e.g., below header or as a top bar); responsive on mobile
- [x] T020 [US3] Integrate `Navigation.astro` into `BaseLayout.astro` in `src/layouts/BaseLayout.astro` — add Navigation component so it appears on all pages; pass current path for active state detection

**Checkpoint**: Navigation visible on homepage, blog listing, and blog post pages; active state correctly highlights current section; all links work

---

## Phase 6: User Story 4 — Automated Deployment (Priority: P4)

**Goal**: Pushing to main automatically builds and deploys the site to GitHub Pages at www.pixeloven.com

**Independent Test**: Push a commit to main; verify the site updates at www.pixeloven.com within 5 minutes

### Implementation for User Story 4

- [x] T021 [US4] Replace existing GitHub Actions workflow with Astro deployment workflow at `.github/workflows/deploy.yml` — two jobs: `build` (uses `actions/checkout@v5` + `withastro/action@v5`) and `deploy` (uses `actions/deploy-pages@v4`); trigger on push to main + workflow_dispatch; set permissions for `contents: read`, `pages: write`, `id-token: write`; remove the old `ci.yml` workflow

**Checkpoint**: Workflow file is valid YAML; manual `pnpm build` succeeds locally; workflow ready for merge to main

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Edge cases, 404 page, and final validation

- [x] T022 [P] Create custom 404 page at `src/pages/404.astro` — uses `BaseLayout` with title "Page Not Found | PixelOven"; displays a branded error message styled consistently with the site theme; includes a link back to the homepage
- [x] T023 [P] Handle empty blog post body edge case — verify that a post with only frontmatter and no body content renders gracefully in `src/pages/blog/[id].astro` (title, date shown, empty content area, no errors)
- [x] T024 Verify production build succeeds: run `pnpm build` and confirm `dist/` output contains `index.html`, `blog/index.html`, `blog/hello-world/index.html`, `404.html`, and `CNAME`
- [x] T025 Validate all pages have proper semantic HTML with meta tags: charset, viewport, title, and description across homepage, blog listing, blog post, and 404 pages

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **US1 Homepage (Phase 3)**: Depends on Foundational — this is the MVP
- **US2 Blog (Phase 4)**: Depends on Foundational — can run in parallel with US1 but integrates cleaner after US1 establishes the visual pattern
- **US3 Navigation (Phase 5)**: Depends on Foundational — modifies BaseLayout, best after US1 and US2 exist to verify
- **US4 Deployment (Phase 6)**: Depends on Foundational — can be done any time after setup; no dependency on other stories
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: Can start after Foundational (Phase 2) — no dependencies on other stories
- **US2 (P2)**: Can start after Foundational (Phase 2) — no dependencies on US1 (uses BaseLayout directly)
- **US3 (P3)**: Can start after Foundational (Phase 2) — modifies BaseLayout shared by all stories
- **US4 (P4)**: Can start after Setup (Phase 1) — only depends on workflow file and valid build

### Within Each User Story

- Components (Header, Footer, BlogPostCard) before pages that use them
- Content collection config before pages that query it
- Utility functions before pages that call them
- Core page implementation before integration/polish

### Parallel Opportunities

- T009 + T010 (Header and Footer components) — different files, no dependencies
- T012 + T013 + T014 (content config, excerpt utility, typography plugin) — different files, no dependencies
- T022 + T023 (404 page and edge case validation) — different concerns
- US1 and US4 can run in parallel (homepage and deployment workflow are independent)

---

## Parallel Example: User Story 1

```bash
# Launch Header and Footer components in parallel:
Task: "Create Header.astro in src/components/Header.astro"
Task: "Create Footer.astro in src/components/Footer.astro"

# Then build the homepage (depends on both):
Task: "Create homepage at src/pages/index.astro"
```

## Parallel Example: User Story 2

```bash
# Launch content infrastructure in parallel:
Task: "Create content collection config at src/content.config.ts"
Task: "Create excerpt utility at src/utils/excerpt.ts"
Task: "Install @tailwindcss/typography and configure in global.css"

# Then build components and pages (depend on above):
Task: "Create BlogPostCard.astro in src/components/BlogPostCard.astro"
Task: "Create blog listing page at src/pages/blog/index.astro"
Task: "Create blog post page at src/pages/blog/[id].astro"
Task: "Create sample blog post at src/content/blog/hello-world.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (relocate files, init Astro)
2. Complete Phase 2: Foundational (BaseLayout, ThemeToggle, public assets)
3. Complete Phase 3: User Story 1 (Homepage)
4. **STOP and VALIDATE**: Homepage matches `index.html` in both themes, responsive
5. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Astro project running with dark mode toggle
2. Add US1 (Homepage) → Test independently → MVP ready
3. Add US2 (Blog) → Test independently → Blog functional
4. Add US3 (Navigation) → Test independently → Site fully navigable
5. Add US4 (Deployment) → Push to main → Live at www.pixeloven.com
6. Polish → 404 page, edge cases, build validation

### Single Developer Strategy (Recommended)

Phases 1-7 sequentially in order. Each phase builds on the previous. Total: 25 tasks.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- No automated tests — manual browser verification at each checkpoint
- The existing `index.html` at repo root is the design reference for US1; compare side-by-side
- Blog uses Astro 5.x Content Layer API (`glob` loader, `post.id`, `render` import)
- Tailwind v4 config is CSS-first — no `tailwind.config.js` file
- Dark mode uses `sessionStorage` (session-only, resets to dark on new visit)
