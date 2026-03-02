---
title: "Server Components vs Client Components"
lectureId: 31
section: 10
sectionTitle: "Next.js — The React Framework"
date: "2026-03-03"
tags: ["nextjs", "server-components", "client-components"]
---

## Summary

Next.js App Router introduces a clear split between Server Components (default, run on server) and Client Components (`'use client'`, run in browser). Understanding this boundary is essential for modern Next.js development.

## Key Concepts

- All components in `app/` are **Server Components** by default
- Add `'use client'` directive to opt into Client Components
- Server Components can be `async` and `await` data directly
- Client Components can use hooks (`useState`, `useEffect`) and browser APIs

## Detailed Notes

**Server Component (no directive needed):**
```tsx
// app/posts/page.tsx
async function PostsPage() {
  // Direct database or API access — runs on server only
  const posts = await db.posts.findMany();

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
```

**Client Component:**
```tsx
// components/LikeButton.tsx
'use client';

import { useState } from 'react';

export function LikeButton({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      ❤️ {count}
    </button>
  );
}
```

**Composing them together:**
```tsx
// app/posts/[id]/page.tsx — Server Component
import { LikeButton } from '@/components/LikeButton';

async function PostPage({ params }) {
  const post = await getPost(params.id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton initialCount={post.likes} /> {/* Client Component embedded */}
    </article>
  );
}
```

## Code Examples

```
When to use Client Components:
✅ onClick, onChange, event handlers
✅ useState, useEffect, custom hooks
✅ Browser-only APIs (localStorage, window)
✅ Third-party libraries that use React hooks

Stay Server Component when possible:
✅ Fetching data
✅ Accessing backend resources directly
✅ Keeping sensitive info (API keys) off the client
```
