---
title: "Introduction to Next.js"
lectureId: 30
section: 10
sectionTitle: "Next.js — The React Framework"
date: "2026-03-03"
tags: ["nextjs", "ssr", "react"]
---

## Summary

Next.js is a React framework that adds server-side rendering, static generation, file-based routing, and API routes on top of React. It is the recommended way to build production React applications.

## Key Concepts

- **SSR** (Server-Side Rendering): HTML generated on each request
- **SSG** (Static Site Generation): HTML generated at build time
- **ISR** (Incremental Static Regeneration): SSG with periodic revalidation
- **App Router** (Next.js 13+) is the modern routing system using the `app/` directory

## Detailed Notes

**Create a new Next.js project:**
```bash
npx create-next-app@latest my-app --typescript --tailwind --app
```

**App Router file conventions:**

| File | Purpose |
|------|---------|
| `app/page.tsx` | Page component |
| `app/layout.tsx` | Shared layout |
| `app/loading.tsx` | Loading UI |
| `app/error.tsx` | Error boundary |
| `app/not-found.tsx` | 404 page |
| `app/route.ts` | API route handler |

**When to use each rendering mode:**

| Mode | Use case |
|------|---------|
| SSG | Blog posts, docs, marketing pages |
| SSR | Dashboards, personalized content |
| ISR | E-commerce product pages |
| CSR | Highly interactive widgets |

## Code Examples

```tsx
// app/page.tsx — Server Component by default
export default async function HomePage() {
  const data = await fetch('https://api.example.com/posts').then(r => r.json());
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```
