---
title: "JavaScript Refresher Introduction"
lectureId: 5
section: 2
sectionTitle: "JavaScript Refresher"
date: "2026-03-03"
tags: ["javascript", "introduction"]
---

## Summary

A brief overview of the JavaScript concepts you need to know before diving into React, including modern ES6+ syntax.

## Key Concepts

- React heavily uses modern JavaScript (ES6+)
- Key topics: arrow functions, destructuring, spread/rest, modules, promises, async/await
- Understanding these prevents confusion when reading React code

## Detailed Notes

React code is just JavaScript — but it uses many modern features that can look unfamiliar if you learned JS a while ago. This section is a refresher, not a full JS course.

Topics covered in this section:
1. `let` / `const` vs `var`
2. Arrow functions
3. Template literals
4. Destructuring (arrays and objects)
5. Spread and rest operators
6. ES Modules (`import` / `export`)
7. Array methods: `map`, `filter`, `reduce`
8. Promises and `async/await`

## Code Examples

```js
// ES6+ at a glance
const name = "Alice";
const greet = (name) => `Hello, ${name}!`;
console.log(greet(name)); // Hello, Alice!
```
