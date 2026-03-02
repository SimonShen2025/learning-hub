---
title: "What is React?"
lectureId: 2
section: 1
sectionTitle: "Getting Started"
date: "2026-03-03"
tags: ["react", "introduction"]
---

## Summary

An introduction to React — what it is, why it was created, and how it differs from vanilla JavaScript and other frameworks.

## Key Concepts

- React is a declarative, component-based JavaScript library maintained by Meta
- It solves the problem of building complex, interactive UIs efficiently
- React uses a Virtual DOM to minimize expensive real DOM operations

## Detailed Notes

React was first released by Facebook (now Meta) in 2013. The key insight behind React is **declarative UI**: you describe *what* the UI should look like given the current state, and React handles the DOM updates.

Unlike full frameworks like Angular, React focuses solely on the view layer. You compose your UI from small, reusable **components**.

## Code Examples

```jsx
// A simple React component
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```
