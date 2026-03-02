---
title: "Your First React Component"
lectureId: 9
section: 3
sectionTitle: "React Essentials - Components, JSX, Props, State"
date: "2026-03-03"
tags: ["react", "components"]
---

## Summary

Learn how to create your first React component and understand the fundamental rules around components.

## Key Concepts

- A component is a JavaScript function that returns JSX
- Component names must start with a capital letter
- Each component file typically exports one default component

## Detailed Notes

A React component is simply a function that returns markup (JSX):

```jsx
function Header() {
  return (
    <header>
      <h1>My App</h1>
    </header>
  );
}

export default Header;
```

**Rules:**
1. Component name must be **PascalCase** (`MyComponent`, not `myComponent`)
2. Must return a single root element (or a Fragment)
3. JSX must be valid — all tags must be closed

## Code Examples

```jsx
// Composing components
function App() {
  return (
    <div>
      <Header />
      <main>Hello World</main>
    </div>
  );
}
```
