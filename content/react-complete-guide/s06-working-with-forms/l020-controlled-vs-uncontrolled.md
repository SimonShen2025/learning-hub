---
title: "Forms in React — Controlled vs Uncontrolled"
lectureId: 20
section: 6
sectionTitle: "Working with Forms"
date: "2026-03-03"
tags: ["react", "forms", "controlled-components"]
---

## Summary

React offers two approaches for handling form inputs: controlled components (state-driven) and uncontrolled components (ref-driven). Controlled is the React-idiomatic pattern.

## Key Concepts

- **Controlled**: input value is driven by React state — single source of truth
- **Uncontrolled**: input manages its own DOM state; read via `useRef`
- Controlled inputs give you real-time validation and conditional UI
- Use `onSubmit` on the `<form>` element (not a button `onClick`)

## Detailed Notes

**Controlled input:**
```jsx
function EmailInput() {
  const [email, setEmail] = useState('');

  return (
    <input
      type="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="you@example.com"
    />
  );
}
```

**Uncontrolled input (useRef):**
```jsx
function SearchForm() {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">Search</button>
    </form>
  );
}
```

## Code Examples

```jsx
// Prevent default browser form submission
function handleSubmit(e) {
  e.preventDefault();
  // process formData
}
```
