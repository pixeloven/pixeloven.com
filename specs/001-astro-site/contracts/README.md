# Contracts: Astro Site

No API contracts are needed for this feature. The site is fully static with no backend services, REST endpoints, or GraphQL schemas.

**Content contract**: Blog posts follow the Zod schema defined in `src/content.config.ts` (see `data-model.md` for field definitions). Astro validates frontmatter at build time.

**Deployment contract**: GitHub Actions workflow triggers on push to `main`, builds with `withastro/action@v5`, and deploys to GitHub Pages via `actions/deploy-pages@v4`.
