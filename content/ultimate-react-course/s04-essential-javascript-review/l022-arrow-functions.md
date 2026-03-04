---
title: "Arrow Functions"
lectureId: 22
section: 4
sectionTitle: "[Optional] Review of Essential JavaScript for React"
date: "2026-03-04"
tags: [javascript, arrow-functions]
---

## 中文短总结

箭头函数（`(params) => expression`）适合简短的单行函数，单表达式时可省略 `{}` 和 `return`（隐式返回）。多行逻辑需要加 `{}` 和显式 `return`。在 React 中大量用于回调（event handlers、map/filter 回调等）。讲师个人偏好：只在短回调中用箭头函数，普通函数声明用 `function`。

## 中文长总结

### 基本语法
```javascript
// 单表达式 — 隐式返回
const getYear = (str) => str.split("-")[0];

// 多行 — 需显式 return
const getYear = (str) => {
  const year = str.split("-")[0];
  return year;
};
```

### 关键特性
- 单参数可省略括号：`x => x * 2`
- 隐式返回只适用于**单个表达式**（无花括号时）
- 不绑定自己的 `this`（继承外层 `this`）

### React 中常见用法
```jsx
onClick={() => setCount(c => c + 1)}
items.map(item => <li key={item.id}>{item.name}</li>)
items.filter(item => item.active)
```

## English Short Summary

Arrow functions (`() => expr`) provide concise syntax with implicit return for single expressions. Multi-line bodies need `{}` and explicit `return`. No own `this` binding. In React, used extensively for callbacks (event handlers, map/filter/reduce), inline state updaters, and short utility functions.
