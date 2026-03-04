---
title: "Conditional Rendering With &&"
lectureId: 47
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, conditional-rendering, short-circuiting]
---

## 中文短总结

用 `&&` 实现条件渲染：`{condition && <Component />}` — 条件为 true 时渲染组件，false 时什么都不渲染。利用了 JS 短路求值特性。**陷阱**：如果条件是数字 `0`，`{0 && <X />}` 会渲染数字 `0` 到页面上（0 是 falsy 但 React 会渲染数字）。解决方法：确保条件是布尔值（`{count > 0 && <X />}`）。

## 中文长总结

### 基本用法
```jsx
{isOpen && <p>We are currently open!</p>}
```
- `isOpen = true` → 渲染 `<p>`
- `isOpen = false` → 什么都不渲染（React 不渲染 `false`/`null`/`undefined`）

### ⚠️ 数字 0 陷阱
```jsx
{pizzas.length && <PizzaList />}
// 如果 length = 0 → 页面上显示数字 "0"！
```
正确写法：
```jsx
{pizzas.length > 0 && <PizzaList />}
```

### 何时使用 &&
- 只需要在条件为 true 时显示内容
- 不需要 else 分支
- 需要 else 分支时 → 用三元运算符

## English Short Summary

`{condition && <Component />}` renders the component when condition is truthy, renders nothing when falsy. **Gotcha**: `{0 && <X />}` renders `0` on screen because React renders numbers. Fix: use boolean conditions (`{count > 0 && <X />}`). Use `&&` when no else branch is needed.
