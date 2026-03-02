---
title: "Fetching Data with fetch & useEffect"
lectureId: 26
section: 8
sectionTitle: "Data Fetching & HTTP Requests"
date: "2026-03-03"
tags: ["react", "data-fetching", "fetch", "useEffect"]
---

## Summary

The classic React data-fetching pattern combines `useEffect` to trigger the request and `useState` to hold the result, loading, and error states.

## Key Concepts

- Always handle three states: loading, error, and success
- Use an `AbortController` to cancel in-flight requests on cleanup
- Never call `setState` on an unmounted component
- Extract into a custom hook for reusability

## Detailed Notes

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort(); // cleanup on unmount / url change
  }, [url]);

  return { data, loading, error };
}

// Usage
function PostList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

## Code Examples

```jsx
// POST request example
async function createPost(postData) {
  const res = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });
  if (!res.ok) throw new Error('Failed to create post');
  return res.json();
}
```
