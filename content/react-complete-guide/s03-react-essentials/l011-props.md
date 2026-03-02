---
title: "Props — Passing Data to Components"
lectureId: 11
section: 3
sectionTitle: "React Essentials - Components, JSX, Props, State"
date: "2026-03-03"
tags: ["react", "props"]
---

## Summary

Props (properties) are how you pass data from a parent component to a child component. They make components reusable and configurable.

## Key Concepts

- Props are passed like HTML attributes: `<Card title="Hello" />`
- Components receive props as a plain object parameter
- Props are **read-only** — never mutate them
- Use destructuring for cleaner code

## Detailed Notes

```jsx
// Parent passes props
function App() {
  return (
    <div>
      <Card title="React Basics" author="Alice" likes={42} />
      <Card title="Advanced Hooks" author="Bob" likes={118} />
    </div>
  );
}

// Child receives props
function Card({ title, author, likes }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>By {author}</p>
      <span>👍 {likes}</span>
    </div>
  );
}
```

**Special prop: `children`**
```jsx
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

// Usage:
<Button onClick={handleClick}>Save Changes</Button>
```

## Code Examples

```jsx
// Default props with destructuring
function Avatar({ name, size = 40, src = "/default-avatar.png" }) {
  return <img src={src} alt={name} width={size} height={size} />;
}
```
