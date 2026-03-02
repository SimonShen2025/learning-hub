---
title: "Styling Options in React"
lectureId: 17
section: 5
sectionTitle: "Styling React Components"
date: "2026-03-03"
tags: ["react", "styling", "css"]
---

## Summary

An overview of the different approaches to styling React components — from plain CSS to CSS Modules, Tailwind CSS, and CSS-in-JS libraries.

## Key Concepts

- Multiple styling approaches exist — each with trade-offs
- CSS Modules solve the global scope problem
- Tailwind CSS provides utility-first styling directly in JSX
- CSS-in-JS (e.g. styled-components) co-locates styles with components

## Detailed Notes

| Approach | Scoping | Colocation | DX |
|---|---|---|---|
| Plain CSS | Global | ❌ | Simple |
| CSS Modules | Local | Partial | Good |
| Tailwind CSS | Utility | ✅ | Fast |
| styled-components | Local | ✅ | Great |
| Inline styles | Local | ✅ | Limited |

**When to choose what:**
- Small project / prototype → Tailwind or plain CSS
- Team with existing CSS knowledge → CSS Modules
- Design system with dynamic theming → styled-components or CSS-in-JS

## Code Examples

```jsx
// Four ways to style the same button
// 1. Plain CSS class
<button className="btn-primary">Click</button>

// 2. CSS Module
import styles from './Button.module.css';
<button className={styles.primary}>Click</button>

// 3. Tailwind
<button className="px-4 py-2 bg-blue-500 text-white rounded">Click</button>

// 4. Inline style
<button style={{ padding: '8px 16px', background: 'blue', color: 'white' }}>Click</button>
```
