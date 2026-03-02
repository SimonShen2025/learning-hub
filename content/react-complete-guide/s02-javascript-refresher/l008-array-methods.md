---
title: "Array Methods: map, filter, reduce"
lectureId: 8
section: 2
sectionTitle: "JavaScript Refresher"
date: "2026-03-03"
tags: ["javascript", "arrays", "map", "filter", "reduce"]
---

## Summary

`map`, `filter`, and `reduce` are the three most important array methods in React development. `map` is especially critical for rendering lists.

## Key Concepts

- `map` transforms every element — returns a new array of the same length
- `filter` keeps only elements matching a condition
- `reduce` accumulates a single value from an array
- All three are **pure** — they do not mutate the original array

## Detailed Notes

```js
const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Mouse",  price: 29,  inStock: false },
  { id: 3, name: "Keyboard", price: 79, inStock: true },
];

// map — get all names
const names = products.map(p => p.name);
// ["Laptop", "Mouse", "Keyboard"]

// filter — only in-stock items
const available = products.filter(p => p.inStock);
// [Laptop, Keyboard]

// reduce — total price of in-stock items
const total = products
  .filter(p => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);
// 1078
```

## Code Examples

```jsx
// Rendering a list in React
function ProductList({ products }) {
  return (
    <ul>
      {products
        .filter(p => p.inStock)
        .map(p => <li key={p.id}>{p.name} — ${p.price}</li>)
      }
    </ul>
  );
}
```
