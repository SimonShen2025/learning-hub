---
title: "TanStack Query (React Query)"
lectureId: 27
section: 8
sectionTitle: "Data Fetching & HTTP Requests"
date: "2026-03-03"
tags: ["react", "data-fetching", "tanstack-query", "react-query"]
---

## Summary

TanStack Query (formerly React Query) is the gold standard for server state management in React. It handles caching, background refetching, loading/error states, and more — with minimal code.

## Key Concepts

- **Server state** (API data) vs **client state** (UI state) should be managed separately
- `useQuery` for GET requests; `useMutation` for POST/PUT/DELETE
- Automatic caching, deduplication, and background refetching
- `staleTime` controls how long data is considered fresh

## Detailed Notes

```bash
npm install @tanstack/react-query
```

```jsx
// main.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

// PostList.jsx
import { useQuery } from '@tanstack/react-query';

function PostList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then(r => r.json()),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

## Code Examples

```jsx
// useMutation for creating data
import { useMutation, useQueryClient } from '@tanstack/react-query';

function NewPostForm() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (post) => fetch('/api/posts', { method: 'POST', body: JSON.stringify(post) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });

  return <button onClick={() => mutation.mutate({ title: 'New Post' })}>Create</button>;
}
```
