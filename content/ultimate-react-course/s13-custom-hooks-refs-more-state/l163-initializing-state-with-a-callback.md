---
title: "Initializing State With a Callback (Lazy Initial State)"
lectureId: 163
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, useState, lazy-initialization, performance]
---

## 中文短总结

Lazy Initial State：`useState(() => heavyComputation())` — 传函数而非值。函数只在 mount 时执行一次，后续渲染不调用。用于初始值计算昂贵的场景（如从 localStorage 读取、复杂计算）。注意传的是**函数本身**，不是函数调用。

## 中文长总结

### 问题
```jsx
// ❌ 每次渲染都执行 localStorage.getItem（即使值只用一次）
const [watched, setWatched] = useState(
  JSON.parse(localStorage.getItem("watched"))  // 每次渲染都运行！
);
```

### 解决：Lazy Initialization
```jsx
// ✅ 传函数 → 只在 mount 时执行一次
const [watched, setWatched] = useState(function () {
  const stored = localStorage.getItem("watched");
  return JSON.parse(stored);
});
```

### 关键区别
```jsx
useState(fn)     // ✅ 传函数本身 → lazy（只 mount 时调用）
useState(fn())   // ❌ 传函数调用结果 → 每次渲染都执行
```

### 使用场景
- 从 localStorage 读取初始数据
- 复杂计算（大数组处理等）
- 任何"初始化昂贵但只需一次"的情况

## English Short Summary

Lazy initial state: `useState(() => value)` — pass a function, not a value. Function only runs on mount, ignored on re-renders. Use for expensive initialization (localStorage reads, heavy computation). Key: pass `fn` not `fn()`.
