---
title: "JSX in Depth"
lectureId: 10
section: 3
sectionTitle: "React Essentials - Components, JSX, Props, State"
date: "2026-03-03"
tags: ["react", "jsx"]
---

## Summary

JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. It is compiled to `React.createElement()` calls by Babel/Vite.

## Key Concepts

- JSX is not HTML — it compiles to JavaScript function calls
- `class` → `className`, `for` → `htmlFor`
- Expressions are embedded with `{}`
- Self-closing tags must have `/>`

## Detailed Notes

**JSX vs HTML differences:**

| HTML | JSX |
|------|-----|
| `class="btn"` | `className="btn"` |
| `for="input"` | `htmlFor="input"` |
| `<br>` | `<br />` |
| `onclick="..."` | `onClick={...}` |
| Inline: `style="color:red"` | `style={{ color: 'red' }}` |

**Embedding expressions:**
```jsx
const user = { name: "Alice", age: 30 };

function Profile() {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Adult: {user.age >= 18 ? "Yes" : "No"}</p>
    </div>
  );
}
```

## Code Examples

```jsx
// Fragment — avoid unnecessary wrapper div
function List() {
  return (
    <>
      <h2>Items</h2>
      <ul>...</ul>
    </>
  );
}
```
