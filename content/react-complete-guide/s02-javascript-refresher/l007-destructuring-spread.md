---
title: "Destructuring & Spread Operator"
lectureId: 7
section: 2
sectionTitle: "JavaScript Refresher"
date: "2026-03-03"
tags: ["javascript", "destructuring", "spread"]
---

## Summary

Destructuring and the spread/rest operators are used constantly in React — for props, state updates, and array manipulation.

## Key Concepts

- Object destructuring extracts named properties into variables
- Array destructuring extracts by position (used in `useState`)
- Spread creates shallow copies of objects/arrays (important for immutability)
- Rest collects remaining items

## Detailed Notes

**Object destructuring:**
```js
const user = { name: "Alice", age: 30, role: "admin" };

const { name, age } = user;
// Rename: const { name: userName } = user;
// Default: const { name, theme = "light" } = user;
```

**Array destructuring:**
```js
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

// React useState pattern:
const [count, setCount] = useState(0);
```

**Spread operator:**
```js
// Copying objects (immutable updates)
const updated = { ...user, age: 31 };

// Merging arrays
const combined = [...arr1, ...arr2];
```

## Code Examples

```jsx
// In React — passing all props through
function Wrapper(props) {
  const { className, ...rest } = props;
  return <div className={`wrapper ${className}`} {...rest} />;
}
```
