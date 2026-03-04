---
title: "Sorting Items"
lectureId: 86
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, sorting, state, select, far-away]
---

## 中文短总结

添加排序功能：`sortBy` state 控制排序方式（输入顺序 / 名称 / 打包状态）。用 `<select>` 受控组件切换。排序不修改原数组 — 使用 `slice().sort()` 创建副本排序。派生值 `sortedItems` 根据 `sortBy` 和 `items` 计算。

## 中文长总结

### 实现
```jsx
const [sortBy, setSortBy] = useState("input");

let sortedItems;
if (sortBy === "input") sortedItems = items;
if (sortBy === "description")
  sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
if (sortBy === "packed")
  sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
```

### 关键点
- `sortedItems` 是**派生值**（不是 state）
- `slice().sort()` → 不修改原 `items` 数组（不可变！）
- `localeCompare()` 用于字符串排序
- `Number(boolean)` 将 true/false 转为 1/0 用于数字排序
- `<select>` 受控组件：`value={sortBy}` + `onChange`

## English Short Summary

Sorting via `sortBy` state with controlled `<select>`. `sortedItems` is derived (not state) — computed by `items.slice().sort(...)` based on `sortBy`. Use `slice()` before `sort()` for immutability. `localeCompare()` for strings, `Number(boolean)` for packed status sorting.
