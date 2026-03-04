---
title: "More Thoughts About State + State Guidelines"
lectureId: 66
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, state, guidelines, best-practices]
---

## 中文短总结

State 使用指南：1）每个组件都有自己独立的 state 实例，2）UI 是所有 state 的视觉表现，3）用 state 驱动所有需要 React 跟踪的动态数据。**实用原则**：只创建会触发 re-render 的 state（不需要触发 re-render 的数据用 `useRef`）；不要用 state 存储可从现有 state/props 派生的数据（derived state）。

## 中文长总结

### 关于 State 的思考
1. **State 是隔离的**：同一组件的多个实例各自有独立 state
2. **UI = f(state)**：UI 是所有 state 在某一时刻的视觉映射
3. 整个应用就是不断地：state 变化 → UI 更新

### State 使用指南
| 需要 State 吗？ | 说明 |
|----------------|------|
| 数据可从 props/state 计算得出 | ❌ 不需要，使用派生值（derived state） |
| 数据变化时需要 re-render | ✅ 需要 state |
| 数据变化但不需要 re-render | ❌ 使用 `useRef` |

### Derived State（派生状态）
```jsx
// ❌ 错误：用 state 存储可计算的值
const [items, setItems] = useState([...]);
const [count, setCount] = useState(items.length);  // 冗余！

// ✅ 正确：直接计算
const [items, setItems] = useState([...]);
const count = items.length;  // 派生值，无需额外 state
```

### 核心原则
- State 是"最小必要状态"
- 能从现有 state 计算的，不要创建新 state

## English Short Summary

State guidelines: 1) Each component instance has isolated state, 2) UI = visual representation of state. Practical tips: only use state for data that triggers re-renders; use refs for non-rendering data. Avoid derived state — compute values from existing state/props instead of storing them separately (`count = items.length` instead of a separate `count` state).
