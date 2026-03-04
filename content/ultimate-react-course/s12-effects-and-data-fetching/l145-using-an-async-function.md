---
title: "Using an async Function"
lectureId: 145
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, async-await, data-fetching]
---

## 中文短总结

useEffect 的回调函数**不能直接是 async**（因为 async 返回 Promise，但 effect 只能返回 cleanup 函数或 undefined）。解决方案：在 effect 内部定义 async 函数并立即调用。

## 中文长总结

### ❌ 错误写法
```jsx
// effect 不能直接 async
useEffect(async () => {
  const res = await fetch("...");
  // ❌ async 返回 Promise，effect 期望返回 cleanup 或 void
}, []);
```

### ✅ 正确写法
```jsx
useEffect(function () {
  async function fetchMovies() {
    const res = await fetch("https://www.omdbapi.com/?s=interstellar");
    const data = await res.json();
    setMovies(data.Search);
  }
  fetchMovies();
}, []);
```

### 为什么
- useEffect 期望返回 `cleanup 函数` 或 `undefined`
- `async function` 返回 `Promise`
- Promise 不能被 React 用作 cleanup

### 模式
```
useEffect(() => {
  async function doWork() { ... }
  doWork();
}, [deps]);
```

## English Short Summary

useEffect callback cannot be `async` directly (async returns Promise, but effect must return cleanup function or undefined). Pattern: define async function inside effect and call it immediately. `useEffect(() => { async function fn() {...} fn(); }, [])`.
