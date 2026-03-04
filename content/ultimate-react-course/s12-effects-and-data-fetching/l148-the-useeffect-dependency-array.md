---
title: "The useEffect Dependency Array"
lectureId: 148
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, dependency-array, synchronization]
---

## 中文短总结

依赖数组是 useEffect 的核心。它告诉 React：当这些值变化时，重新执行 effect。每个在 effect 中使用的 state/prop 都必须在依赖数组中。遗漏依赖 → stale closure bug。空数组 = 无依赖 = 只在 mount 执行。无数组 = 每次渲染执行。

## 中文长总结

### 三种模式
```jsx
// 1. 指定依赖 → mount + 依赖变化时
useEffect(fn, [query, page]);

// 2. 空数组 → 仅 mount
useEffect(fn, []);

// 3. 无数组 → 每次渲染后
useEffect(fn);
```

### 依赖 = 同步触发器
- 依赖数组中的值变化 → React 重新执行 effect
- "将 effect 与某些值保持同步"
- 类似 addEventListener：依赖变化就是"事件"

### 规则
- ✅ effect 中用到的所有 reactive values 都要列入依赖
  - state, props, context values, 从它们派生的变量
- ❌ 不要遗漏依赖（ESLint `exhaustive-deps` 规则会警告）
- ❌ 不要为了消除警告而撒谎（加空数组但实际有依赖）

### Stale Closure 问题
```jsx
useEffect(() => {
  // 如果 query 不在依赖中 → 永远用的是初始值
  fetch(`api?q=${query}`); // query 是 stale 的！
}, []); // ❌ 缺少 query
```

## English Short Summary

Dependency array is the core of useEffect. Values that change trigger re-execution. Every reactive value (state, props, context) used inside the effect must be listed. Missing deps → stale closure bugs. `[]` = mount only, `[a,b]` = on change, no array = every render. Don't lie about dependencies.
