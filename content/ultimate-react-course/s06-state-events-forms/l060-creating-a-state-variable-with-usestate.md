---
title: "Creating a State Variable With useState"
lectureId: 60
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, useState, hooks]
---

## 中文短总结

`useState(initialValue)` 返回 `[value, setValue]` — 当前值和更新函数。调用 `setValue(newValue)` 更新 state 并触发 re-render。**规则**：只能在组件**顶层**调用 Hook（不能在 if/for/嵌套函数中）。这是 React Hooks 体系的第一个 Hook。

## 中文长总结

### 基本用法
```jsx
import { useState } from 'react';

function Steps() {
  const [step, setStep] = useState(1);  // 初始值 = 1

  function handleNext() {
    setStep(step + 1);  // 更新 state → 触发 re-render
  }

  return <button onClick={handleNext}>Next (Step {step})</button>;
}
```

### useState 返回值
- `step` — 当前 state 值
- `setStep` — 更新函数（setter）
- 使用数组解构获取

### Hook 规则（重要！）
1. **只在组件顶层调用** — 不能在 if/for/嵌套函数中
2. **只能在 React 函数组件或自定义 Hook 中调用**
3. 这些规则适用于所有 Hooks（useState, useEffect 等）

### 渲染机制
- 调用 setState → React 安排重新渲染
- 重新渲染 = 重新调用组件函数
- useState 在 re-render 时返回更新后的值（不是初始值）

## English Short Summary

`useState(initial)` returns `[value, setValue]`. Call `setValue(newValue)` to update state and trigger a re-render. Hook rules: call only at top level of components (not in if/for/nested functions). On re-render, `useState` returns the updated value, not the initial one.
