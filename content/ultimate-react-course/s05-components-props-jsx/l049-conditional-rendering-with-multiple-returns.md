---
title: "Conditional Rendering With Multiple Returns"
lectureId: 49
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, conditional-rendering, early-return]
---

## 中文短总结

第三种条件渲染方式：在 return 前用 `if` 判断，提前返回不同的 JSX（early return）。每个组件只能有一个最终返回值，但可以有多个 `return` 语句配合 `if` 条件。适合根据条件渲染**完全不同**的 UI（如 loading 状态、空状态）。

## 中文长总结

### 基本模式
```jsx
function Component({ isLoading }) {
  if (isLoading) return <Spinner />;  // early return

  return <MainContent />;  // 正常返回
}
```

### 三种条件渲染方式对比
| 方式 | 位置 | 适用场景 |
|------|------|---------|
| `&&` | JSX 内部 | 简单显示/隐藏 |
| 三元 `? :` | JSX 内部 | 二选一 |
| 多 return | return 前 | 完全不同的 UI 结构 |

### 典型场景
- Loading 状态：`if (isLoading) return <Spinner />`
- 错误状态：`if (error) return <ErrorPage />`
- 空数据：`if (!data) return <EmptyState />`
- 权限判断：`if (!isAuthed) return <LoginPage />`

## English Short Summary

Third conditional rendering approach: multiple `return` statements with `if` conditions (early returns). Use when condition changes the entire UI structure (loading spinners, error pages, empty states), not just parts of it. Each component can have multiple returns but only executes one.
