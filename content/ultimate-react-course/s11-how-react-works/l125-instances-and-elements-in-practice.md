---
title: "Instances and Elements in Practice"
lectureId: 125
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, instances, elements, console-log, practice]
---

## 中文短总结

实际验证：`console.log(<Tab />)` 显示 React Element 对象（`$$typeof`、`type`、`props` 等）。`typeof <Tab />` 返回 `"object"`。直接调用 `Tab()` 也能工作但不会创建实例（无 state/lifecycle）— **永远不要这样做**。

## 中文长总结

### 观察 React Element
```javascript
console.log(<Tab />);
// { $$typeof: Symbol(react.element), type: Tab, props: {...}, ... }
```

### 不要直接调用组件
```jsx
// ❌ 永远不要
{Tab()}
// 看起来能工作，但：
// - 不创建组件实例
// - 无独立 state
// - 无独立 lifecycle
// - React DevTools 不会显示为组件

// ✅ 正确方式
<Tab />
```

### 要点
- React Element 是普通 JS 对象
- `$$typeof: Symbol(react.element)` — 安全标记
- `type` 指向组件函数
- 直接调用组件 = 只是调用函数，不走 React 的实例机制

## English Short Summary

Verify in practice: `console.log(<Tab />)` shows React Element object with `$$typeof`, `type`, `props`. `typeof` returns "object". Calling `Tab()` directly works but doesn't create an instance (no state/lifecycle) — never do this. Always use JSX `<Tab />`.
