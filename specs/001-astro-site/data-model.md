# Data Model: Astro Site

**Branch**: `001-astro-site` | **Date**: 2026-02-14

## Entities

### Blog Post (Content Collection)

Markdown files in `src/content/blog/` with Zod-validated frontmatter.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | Yes | Post title, displayed on listing and post pages |
| `date` | `Date` (coerced) | Yes | Publication date, used for sorting (newest first) |
| `summary` | `string` | No | Author-defined excerpt (~150 chars). If absent, auto-generated from body |
| `draft` | `boolean` | No | Default `false`. Drafts visible in dev only, excluded from production build |

**Identity**: `post.id` (derived from filename by Astro Content Layer API)

**Ordering**: Reverse chronological by `date` field

**Collection config** (`src/content.config.ts`):
```typescript
import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
})

export const collections = { blog }
```

### Page (Astro Pages)

Astro components in `src/pages/`. No content collection — pages are hardcoded components.

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Landing page matching existing `index.html` design |
| Blog Listing | `/blog/` | Reverse-chronological list of published posts |
| Blog Post | `/blog/[id]/` | Individual post with full content |
| 404 | `/404/` | Custom error page |

## Relationships

```
Page (homepage) ──links-to──> Blog Listing
Blog Listing ──lists──> Blog Post[] (sorted by date desc, filtered by !draft)
Blog Post ──back-link──> Blog Listing
Navigation ──present-on──> All Pages
```

## State Transitions

Blog posts have no runtime state transitions. The only lifecycle is:

```
Markdown file created → (draft: true) → visible in dev only
                      → (draft: false or omitted) → visible in production build
```

No user authentication, no dynamic state, no database.
