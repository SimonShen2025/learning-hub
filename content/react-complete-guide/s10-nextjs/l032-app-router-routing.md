---
title: "Next.js App Router — File-based Routing"
lectureId: 32
section: 10
sectionTitle: "Next.js — The React Framework"
date: "2026-03-03"
tags: ["nextjs", "app-router", "routing"]
---

## Summary

The Next.js App Router uses the file system as the router. Folders define routes, and special files (`page.tsx`, `layout.tsx`, `loading.tsx`) define the UI for each segment.

## Key Concepts

- `app/about/page.tsx` → `/about`
- `app/blog/[slug]/page.tsx` → `/blog/:slug`
- `app/layout.tsx` → root layout (wraps all pages)
- Route groups `(group)` organize routes without affecting the URL
- Parallel routes (`@slot`) render multiple pages in the same layout simultaneously

## Detailed Notes

**Directory structure → URL mapping:**
```
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
├── blog/
│   ├── page.tsx          → /blog
│   └── [slug]/
│       └── page.tsx      → /blog/:slug
└── (marketing)/          → route group, no URL segment
    ├── pricing/
    │   └── page.tsx      → /pricing
    └── layout.tsx        → shared layout for marketing pages
```

**Dynamic segment params:**
```tsx
// app/blog/[slug]/page.tsx
interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string };
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  return <article><h1>{post.title}</h1></article>;
}

// Generate static pages at build time
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}
```

## Code Examples

```tsx
// app/layout.tsx — root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>...</nav>
        {children}
      </body>
    </html>
  );
}
```
