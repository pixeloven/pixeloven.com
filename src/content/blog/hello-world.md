---
title: "Hello World"
date: 2026-02-14
summary: "A first post to test the blog — exploring what PixelOven is all about."
---

## Welcome to PixelOven

This is the first post on the PixelOven blog. It serves as a test of the blogging system and a preview of what's to come.

### What We Build

At PixelOven, we focus on the intersection of **product engineering** and **platform architecture**. Here are some areas we explore:

- Zero-to-one product development
- Containerized infrastructure and Kubernetes
- Identity and access management (IAM)
- Experimentation and analytics platforms

### A Code Example

Here's a quick look at how we define content collections in Astro:

```typescript
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});
```

### What's Next

Stay tuned for more posts on *engineering craftsmanship*, platform strategy, and the art of the build. You can also find us on [GitHub](https://github.com/pixeloven).
