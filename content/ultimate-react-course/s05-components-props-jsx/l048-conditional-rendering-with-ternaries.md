---
title: "Conditional Rendering With Ternaries"
lectureId: 48
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, conditional-rendering, ternary]
---

## 中文短总结

三元运算符用于需要 **两个分支** 的条件渲染：`{condition ? <ComponentA /> : <ComponentB />}`。比 `&&` 更灵活，因为可以指定条件不满足时显示的替代内容。在 JSX 中使用最广泛的条件渲染方式。

## 中文长总结

### 基本用法
```jsx
{isOpen ? (
  <p>We're currently open!</p>
) : (
  <p>Sorry, we're closed.</p>
)}
```

### 对比 &&
| 特性 | `&&` | 三元 `? :` |
|------|------|-----------|
| 分支数 | 只有 true 分支 | true + false 两个分支 |
| false 时 | 不渲染 | 渲染替代内容 |
| 适用场景 | 简单显示/隐藏 | 二选一渲染 |

### React 中的典型场景
```jsx
{items.length > 0 ? (
  <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
) : (
  <p>No items to display.</p>
)}
```

## English Short Summary

Ternary operator for two-branch conditional rendering: `{cond ? <A /> : <B />}`. More flexible than `&&` — provides both true and false branches. Most widely used conditional rendering pattern in React JSX.
