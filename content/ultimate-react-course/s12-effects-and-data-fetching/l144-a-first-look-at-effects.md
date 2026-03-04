---
title: "A First Look at Effects"
lectureId: 144
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, side-effects, mental-model]
---

## 中文短总结

Effect 的核心心智模型：Effect 是组件与"外部世界"的同步机制。不是生命周期方法的替代品，而是将组件 state/props 与外部系统"同步"。修改 document.title 就是一个 effect（将 React state 同步到浏览器标题栏）。

## 中文长总结

### Effect = 同步机制
```jsx
// 将 React state 同步到 document.title
useEffect(() => {
  document.title = `Movie: ${movieTitle}`;
}, [movieTitle]); // movieTitle 变化 → 重新同步
```

### 什么算 "Effect"
- 数据获取（同步 state 与远程数据）
- 修改 DOM（同步 state 与 document）
- 订阅外部事件
- 设置定时器

### 三种依赖写法
```jsx
useEffect(fn, [a, b]); // a 或 b 变化时执行
useEffect(fn, []);      // 仅 mount
useEffect(fn);          // 每次渲染后
```

### ⚠️ 不要用 useEffect 做的事
- 事件响应（用 event handler）
- 可以在渲染中计算的值（用 derived state）
- 修改 state 来修改另一个 state（state update 链）

## English Short Summary

Mental model: Effects are a **synchronization mechanism** between component state and external systems, not lifecycle replacements. Example: syncing `movieTitle` state to `document.title`. Three dependency patterns: `[a,b]` (on change), `[]` (mount only), none (every render). Don't use effects for event responses or derived values.
