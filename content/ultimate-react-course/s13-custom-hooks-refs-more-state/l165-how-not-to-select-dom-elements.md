---
title: "How NOT to Select DOM Elements in React"
lectureId: 165
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, dom, querySelector, anti-pattern]
---

## 中文短总结

错误示范：在 React 中用 `document.querySelector` 或 `getElementById` 选择 DOM 元素。问题：React 管理 DOM，手动选择可能与 React 的更新机制冲突。正确方式：useRef（下一讲）。

## 中文长总结

### 错误做法
```jsx
useEffect(() => {
  const el = document.querySelector(".search");
  el.focus(); // ❌ 手动选择 DOM 元素
}, []);
```

### 为什么不好
- React 管理 DOM → 手动操作可能被 React 覆盖
- 依赖 class name / id → 脆弱（class 改了就坏了）
- 不符合 React 的声明式范式
- 在大型应用中可能选到错误的元素

### 正确方式
- `useRef` + `ref` prop → React 原生方式
- 下一讲详解

## English Short Summary

Anti-pattern: using `document.querySelector` in React to select DOM elements. Problems: conflicts with React's DOM management, fragile (depends on class names), breaks declarative paradigm. Correct approach: useRef (next lecture).
