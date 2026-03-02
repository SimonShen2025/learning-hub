---
title: "useEffect — Side Effects in React"
lectureId: 13
section: 4
sectionTitle: "React Essentials - Deep Dive"
date: "2026-03-03"
tags: ["react", "hooks", "useEffect", "side-effects"]
---

## Summary

`useEffect` lets you synchronize a component with an external system — fetching data, subscribing to events, or manipulating the DOM after render.

## Key Concepts

- Runs **after** every render by default
- The dependency array controls when it re-runs
- Return a cleanup function to prevent memory leaks
- Empty `[]` = run once on mount

## Detailed Notes

```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This runs after render, when userId changes
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]); // re-run when userId changes

  if (!user) return <p>Loading...</p>;
  return <h2>{user.name}</h2>;
}
```

**Cleanup example (event listeners):**
```jsx
useEffect(() => {
  const handler = () => console.log('resized');
  window.addEventListener('resize', handler);

  return () => {
    window.removeEventListener('resize', handler); // cleanup
  };
}, []);
```

## Code Examples

```jsx
// Dependency array variants
useEffect(() => { /* runs on every render */ });
useEffect(() => { /* runs once on mount */ }, []);
useEffect(() => { /* runs when value changes */ }, [value]);
```
