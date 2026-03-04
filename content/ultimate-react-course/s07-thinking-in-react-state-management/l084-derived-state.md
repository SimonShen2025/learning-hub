---
title: "Derived State"
lectureId: 84
section: 7
sectionTitle: "Thinking In React: State Management"
date: "2026-03-04"
tags: [react, derived-state, best-practices]
---

## 中文短总结

**Derived State（派生状态）**：从现有 state 或 props **计算**出来的值，而非创建新的 state 变量。例如 `const numItems = items.length`（不需要 `useState`）。避免不必要的 state → 减少同步问题、减少 re-render、代码更简洁。原则：能计算的就不要存储。

## 中文长总结

### 错误做法
```jsx
const [items, setItems] = useState([]);
const [numItems, setNumItems] = useState(0);      // ❌ 冗余！
const [numPacked, setNumPacked] = useState(0);     // ❌ 冗余！

// 每次添加/删除 item 都要同时更新三个 state → 容易出错
```

### 正确做法（Derived State）
```jsx
const [items, setItems] = useState([]);
const numItems = items.length;                                  // ✅ 派生
const numPacked = items.filter(i => i.packed).length;          // ✅ 派生
const percentPacked = Math.round(numPacked / numItems * 100);  // ✅ 派生
```

### 优势
- **永远同步**：从 source of truth 计算，不可能不一致
- **更少 re-render**：不需要额外的 `setState` 调用
- **更少代码**：不需要额外的 `useState` 和更新逻辑
- **更少 bug**：没有"忘记同步更新"的风险

### 判断规则
- 如果一个值可以从其他 state/props 计算出来 → **不要用 state**
- 如果一个值需要用户输入或异步获取 → **用 state**

## English Short Summary

Derived state: compute values from existing state/props instead of creating separate state variables. `const numItems = items.length` instead of `useState(0)`. Always in sync, fewer re-renders, less code, fewer bugs. Rule: if computable from existing state → don't use `useState`.
