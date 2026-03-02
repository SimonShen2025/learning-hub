---
title: "Arrow Functions & `this`"
lectureId: 6
section: 2
sectionTitle: "JavaScript Refresher"
date: "2026-03-03"
tags: ["javascript", "arrow-functions", "this"]
---

## Summary

Arrow functions are a concise syntax for writing functions and have a key difference from regular functions: they do not bind their own `this`.

## Key Concepts

- Arrow functions: concise syntax, implicit return for single expressions
- Arrow functions inherit `this` from the surrounding (lexical) scope
- Commonly used for callbacks, event handlers, and array methods

## Detailed Notes

**Regular function vs arrow function:**

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

**`this` behavior:**

```js
function Timer() {
  this.seconds = 0;

  // ❌ Regular function — `this` is undefined in strict mode
  setInterval(function() {
    this.seconds++; // bug!
  }, 1000);

  // ✅ Arrow function — `this` from Timer
  setInterval(() => {
    this.seconds++;
  }, 1000);
}
```

## Code Examples

```js
const numbers = [1, 2, 3, 4, 5];

// Implicit return
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// Single param — parentheses optional
const isEven = numbers.filter(n => n % 2 === 0); // [2, 4]
```
