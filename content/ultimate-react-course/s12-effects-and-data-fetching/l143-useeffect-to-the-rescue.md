---
title: "useEffect to the Rescue"
lectureId: 143
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, data-fetching, side-effects]
---

## 中文短总结

`useEffect(callback, deps)` — 在渲染后安全执行副作用。空依赖数组 `[]` = 只在 mount 时执行一次。第一个参数是 effect 函数，第二个是依赖数组。Effect 在 commit phase 之后异步执行，不阻塞渲染。

## 中文长总结

### 基本用法
```jsx
useEffect(function () {
  fetch("https://www.omdbapi.com/?s=interstellar")
    .then(res => res.json())
    .then(data => setMovies(data.Search));
}, []); // 空数组 → 只在 mount 执行
```

### useEffect 参数
```jsx
useEffect(
  effectFunction,  // 要执行的副作用
  dependencyArray  // 决定何时执行
);
```

### 执行时机
- 渲染完成 → DOM 更新 → 浏览器 paint → **useEffect 执行**
- Effect 是**异步**的，不阻塞渲染
- 保持 UI 响应

### 与事件处理的区别
| useEffect | Event Handler |
|-----------|--------------|
| 渲染后自动执行 | 用户交互触发 |
| 与渲染同步（依赖变化时） | 与用户行为同步 |
| 用于保持同步 | 用于响应事件 |

## English Short Summary

`useEffect(fn, deps)` safely runs side effects after render. Empty dependency array `[]` = run only on mount. Effect executes asynchronously after DOM update and browser paint — doesn't block rendering. First parameter: effect function, second: dependency array controlling when it runs.
