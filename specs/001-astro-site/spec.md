# Feature Specification: Astro Site

**Feature Branch**: `001-astro-site`
**Created**: 2026-02-14
**Status**: Draft
**Input**: User description: "Create a static site using hugo that supports a simple blog. index.html should act as our inspiration for our theme. We will use github actions to deploy from main to github pages from main."

## Clarifications

### Session 2026-02-14

- Q: Where should the Astro site files live within the repository? → A: All site files contained within `./site` directory to keep them separate from other work in the repository.
- Q: Should the blog listing show only title and date, or also include a brief excerpt? → A: Title, date, and a brief excerpt (first ~150 characters or author-defined summary).
- Q: Which static site generator should be used? → A: Astro (https://astro.build/) instead of Hugo.
- Q: What should the feature name be (branch and spec directory)? → A: `001-astro-site` — shorter name reflecting that the site is more than just a blog.
- Q: What CSS/styling approach should the Astro site use? → A: Tailwind CSS — utility-first framework with first-party Astro integration.
- Q: Which package manager should be used? → A: pnpm — Astro's recommended default, fast installs, strict dependency resolution.
- Q: Where should the Astro site files live? → A: Repository root (not `./site`). The existing monorepo project (apps, packages, turbo config) moves to a `development/` subfolder. Existing `index.html` and `CNAME` remain in place at root. GitHub Actions workflow will be rebuilt from scratch following Astro best practices.
- Q: What should happen to other non-Astro files at root (page.html, page2.html, NOTES.md, favicons, .nojekyll)? → A: Move all to `development/` alongside the old project. Astro will handle favicons via `public/`. `.nojekyll` is unnecessary with Astro's GitHub Pages workflow.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View the Homepage (Priority: P1)

A visitor navigates to the PixelOven website and sees a professional landing page that communicates the brand identity, personal philosophy, background, consulting availability, and open source work. The page preserves the visual identity established by the existing `index.html` — bold uppercase italic headings, a clean centered layout, the PixelOven brand accent color, and support for both dark and light modes with a toggle.

**Why this priority**: The homepage is the foundation of the site. Without it, there is no site. It must faithfully carry forward the existing design language so the migration to a static site generator is invisible to visitors.

**Independent Test**: Can be fully tested by navigating to the root URL and verifying all homepage sections render correctly in both dark and light mode, delivering the same visual experience as the current `index.html`.

**Acceptance Scenarios**:

1. **Given** a visitor opens the site root URL, **When** the page loads, **Then** they see the PixelOven homepage with header, philosophy section, personal statement, background, consulting CTA, open source section, and footer.
2. **Given** a visitor is on the homepage in dark mode, **When** they click the theme toggle, **Then** the page transitions to light mode (and vice versa) with smooth color transitions.
3. **Given** a visitor is on a mobile device, **When** the page loads, **Then** the layout adapts responsively — single-column layout on small screens, multi-column on larger screens.

---

### User Story 2 - Read a Blog Post (Priority: P2)

A visitor discovers and reads a blog post on the site. Blog posts are accessible from a dedicated blog listing page. Each post displays its title, publication date, and full content using the same visual theme as the rest of the site. Posts support standard content formatting (headings, paragraphs, lists, code blocks, images, links).

**Why this priority**: The blog is the primary new capability being added. It transforms the site from a static landing page into a content platform, but depends on the homepage and theme being in place first.

**Independent Test**: Can be fully tested by navigating to the blog listing, clicking a post, and verifying the post content renders with correct formatting, date, and consistent theme styling.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the blog listing page, **When** the page loads, **Then** they see a chronologically ordered list of blog posts showing each post's title, publication date, and a brief excerpt, with the most recent post first.
2. **Given** a visitor clicks on a blog post title from the listing, **When** the post page loads, **Then** they see the full post content with proper formatting, the post title, publication date, and navigation back to the blog listing.
3. **Given** a blog post contains formatted content (headings, code blocks, images, links), **When** the post renders, **Then** all content elements display correctly using styles consistent with the site theme.

---

### User Story 3 - Navigate Between Sections (Priority: P3)

A visitor can navigate between the homepage and the blog (and any future sections) using a consistent site-wide navigation element. Navigation is accessible on all pages and clearly indicates the current section.

**Why this priority**: Navigation ties the homepage and blog together into a cohesive site experience. It is lower priority because individual pages can function independently, but it is necessary for a polished user experience.

**Independent Test**: Can be fully tested by clicking navigation links from any page and verifying they lead to the correct destination, with the current section visually indicated.

**Acceptance Scenarios**:

1. **Given** a visitor is on any page, **When** they look at the navigation, **Then** they see links to the homepage and blog.
2. **Given** a visitor clicks a navigation link, **When** the destination page loads, **Then** the navigation visually indicates which section is currently active.

---

### User Story 4 - Automated Deployment on Publish (Priority: P4)

The site owner pushes content changes (new blog posts, page edits) to the main branch, and the site is automatically built and deployed to GitHub Pages without any manual steps. The published site is available at the configured domain.

**Why this priority**: Automated deployment is essential for a sustainable publishing workflow but is an operational concern rather than a user-facing feature. The site must exist before deployment matters.

**Independent Test**: Can be fully tested by pushing a commit to main and verifying the live site updates within a few minutes with the expected changes.

**Acceptance Scenarios**:

1. **Given** the site owner pushes a commit to the main branch, **When** the automated build and deploy pipeline runs, **Then** the updated site is published to GitHub Pages within 5 minutes.
2. **Given** the automated pipeline encounters a build error, **When** the build fails, **Then** the previously deployed version remains live and the site owner is notified of the failure via GitHub Actions status.

---

### Edge Cases

- What happens when a blog post has no content body? The post page should still render with the title and date, showing an empty content area.
- What happens when there are no blog posts yet? The blog listing page should display a message indicating no posts are available yet.
- What happens when a visitor navigates to a URL that does not exist? The site should display a branded 404 page consistent with the site theme.
- What happens when a visitor has JavaScript disabled? The site should remain readable and navigable. The dark/light mode toggle may default to one mode, but content must be accessible.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST present a homepage that preserves all content sections from the existing `index.html` — header with brand name and tagline, philosophy section, personal statement, background with skill highlights, consulting call-to-action with LinkedIn link, open source section with GitHub link, and footer with external links and copyright.
- **FR-002**: The site MUST support a dark mode and light mode with a user-accessible toggle. The default mode MUST be dark, matching the current `index.html` behavior.
- **FR-003**: The site theme MUST use the established PixelOven visual language: bold uppercase italic headings with tight letter-spacing, the brand accent color (orange-red), monospace font for small detail text, high-contrast color scheme, and a clean centered single-column layout.
- **FR-004**: The site MUST include a blog section with a listing page that displays all posts in reverse chronological order (newest first), showing each post's title, publication date, and a brief excerpt (approximately 150 characters, auto-generated from the post body or author-defined via a summary field).
- **FR-005**: Each blog post MUST have its own page displaying the post title, publication date, and full content with support for standard rich text formatting (headings, paragraphs, bold/italic, lists, code blocks, inline code, images, and links).
- **FR-006**: The site MUST include a persistent navigation element on all pages that links to the homepage and blog section.
- **FR-007**: The site MUST be responsive, providing an appropriate layout for mobile, tablet, and desktop screen sizes.
- **FR-008**: The site MUST include a custom 404 error page styled consistently with the site theme.
- **FR-009**: The site MUST be automatically built and deployed to GitHub Pages when changes are pushed to the main branch. The build pipeline MUST use pnpm as the package manager and follow Astro's official GitHub Pages deployment guide. The GitHub Actions workflow will be written from scratch (replacing any existing workflow).
- **FR-010**: The site MUST generate valid, semantic HTML with appropriate meta tags (charset, viewport, title, description).
- **FR-011**: The Astro site MUST be configured at the repository root (astro.config, src/, public/, package.json, etc.). The existing monorepo project (apps/, packages/, turbo.json, .eslintrc.js, .nvmrc, prettier.config.js, and related config) and other non-Astro files (page.html, page2.html, NOTES.md, favicon.ico, favicon.png, .nojekyll) MUST be relocated to a `development/` subdirectory. The existing `index.html` and `CNAME` files MUST remain at the repository root.
- **FR-012**: The site MUST use Tailwind CSS v4 for styling via the `@tailwindcss/vite` plugin (the `@astrojs/tailwind` integration is deprecated). All visual design (brand colors, typography, layout, dark/light mode) MUST be implemented using Tailwind utility classes and CSS-first configuration (`@theme`, `@variant` directives).

### Key Entities

- **Page**: A standalone content page (e.g., the homepage). Has a title, content body, and layout designation.
- **Blog Post**: A dated content entry within the blog section. Has a title, publication date, optional summary/excerpt, and content body. Appears in the blog listing with title, date, and excerpt. Posts are ordered by publication date.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The homepage visually matches the existing `index.html` design, preserving all content sections, layout structure, brand colors, typography, and dark/light mode behavior.
- **SC-002**: A new blog post can be created and published by adding a content file and pushing to the main branch, with the post appearing on the live site within 5 minutes.
- **SC-003**: All pages load in under 3 seconds on a standard broadband connection.
- **SC-004**: The site scores 90+ on Lighthouse accessibility and SEO audits.
- **SC-005**: The site renders correctly and is fully navigable on the latest versions of Chrome, Firefox, Safari, and Edge, on both desktop and mobile viewports.
- **SC-006**: The dark/light mode toggle functions correctly on all pages, and the user's mode preference persists across page navigations within the same session.

## Assumptions

- The site will be hosted on GitHub Pages using the repository's existing GitHub configuration.
- The domain/URL for the site is the default GitHub Pages URL (e.g., `<username>.github.io/<repo-name>`) unless a custom domain is already configured.
- Blog posts will be authored in Markdown format, which is standard for static site generators.
- The project uses pnpm as its package manager. CI/CD pipelines and local development instructions assume pnpm.
- There is no need for comments, search, tags/categories, or RSS feed in the initial version — the blog is intentionally simple.
- The existing `index.html` and `CNAME` at the repository root are preserved in place. The `index.html` is a design reference only and is not part of the Astro site build. The `CNAME` file should be copied to `public/` so it is included in the Astro build output for GitHub Pages custom domain configuration.
- The Astro site is configured at the repository root. The existing monorepo project (apps, packages, turbo config, etc.) is relocated to `development/`.
- The existing `index.html` content (text, links, structure) will be preserved exactly in the Astro homepage; no content changes are in scope.
- The dark/light mode preference does not need to persist across browser sessions (no cookie/localStorage requirement) — it resets to dark on each new visit.
