---
title: "Dynamic Routes & URL Params"
lectureId: 24
section: 7
sectionTitle: "React Router & Navigation"
date: "2026-03-03"
tags: ["react", "routing", "url-params"]
---

## Summary

Dynamic routes let you capture variable segments from the URL (e.g., `/users/42`). Use `useParams()` to read them inside the component.

## Key Concepts

- Define dynamic segments with `:paramName` syntax
- `useParams()` returns an object with all matched params
- `useSearchParams()` reads query strings (`?page=2&sort=name`)
- Combine static and dynamic segments freely

## Detailed Notes

```jsx
// Route definition
<Route path="/courses/:courseId/lectures/:lectureId" element={<LecturePage />} />

// Inside LecturePage.jsx
import { useParams } from 'react-router-dom';

function LecturePage() {
  const { courseId, lectureId } = useParams();

  return (
    <div>
      <p>Course: {courseId}</p>
      <p>Lecture: {lectureId}</p>
    </div>
  );
}
```

**Query strings:**
```jsx
import { useSearchParams } from 'react-router-dom';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);

  return (
    <button onClick={() => setSearchParams({ page: page + 1 })}>
      Next Page
    </button>
  );
}
```

## Code Examples

```jsx
// Programmatic navigation
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  async function handleLogin() {
    await login();
    navigate('/dashboard', { replace: true }); // replace history entry
  }
}
```
