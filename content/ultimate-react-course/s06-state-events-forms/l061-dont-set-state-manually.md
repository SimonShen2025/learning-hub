---
title: "Don't Set State Manually!"
lectureId: 61
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, state, anti-pattern]
---

## 中文短总结

**永远不要直接修改 state 变量**（`step = step + 1` ❌），必须使用 setter 函数（`setStep(step + 1)` ✅）。直接修改不会触发 re-render → UI 不更新。对于对象/数组 state，也不能直接 mutate，必须创建新的对象/数组。这是 React 的核心规则。

## 中文长总结

### 错误示范
```jsx
// ❌ 直接修改 — UI 不更新！
function handleNext() {
  step = step + 1;  // React 不知道 state 变了
}
```

### 正确做法
```jsx
// ✅ 使用 setter 函数
function handleNext() {
  setStep(step + 1);  // React 知道要 re-render
}
```

### 对象/数组 state
```jsx
// ❌ 直接 mutate 对象
user.name = "New Name";
setUser(user);  // 同一个引用，React 可能跳过更新

// ✅ 创建新对象
setUser({ ...user, name: "New Name" });
```

### 为什么？
- React 通过 **引用比较** 判断 state 是否改变
- 直接修改 → 引用不变 → React 认为没有变化 → 不 re-render
- setter 函数通知 React "state 变了，请 re-render"

## English Short Summary

Never mutate state directly (`step = step + 1` ❌). Always use the setter function (`setStep(step + 1)` ✅). Direct mutation doesn't trigger re-renders — React doesn't know state changed. For objects/arrays, create new instances (`{...obj, key: val}`) instead of mutating.
