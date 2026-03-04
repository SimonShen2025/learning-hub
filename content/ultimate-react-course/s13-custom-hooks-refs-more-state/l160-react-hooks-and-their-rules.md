---
title: "React Hooks and Their Rules"
lectureId: 160
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, hooks, rules-of-hooks]
---

## 中文短总结

Hooks 概览和两条规则。所有内置 Hooks 列表。**规则 1**：只在组件或自定义 Hook 的**顶层**调用 Hooks（不能在条件、循环、嵌套函数中）。**规则 2**：只在 React 函数组件或自定义 Hook 中调用。ESLint 插件自动检查。

## 中文长总结

### 常用 Hooks
| Hook | 用途 |
|------|------|
| useState | 状态管理 |
| useEffect | 副作用 |
| useRef | DOM 引用 / 持久数据 |
| useReducer | 复杂状态管理 |
| useContext | 跨组件数据传递 |
| useCallback | 缓存函数 |
| useMemo | 缓存计算值 |

### 规则 1：只在顶层调用
```jsx
// ❌ 条件中
if (x) { const [a, setA] = useState(0); }

// ❌ 循环中
for (...) { useEffect(() => {}, []); }

// ✅ 总是在组件函数顶层
function App() {
  const [a, setA] = useState(0); // ✅
  useEffect(() => {}, []); // ✅
}
```

### 为什么必须顶层
- React 用**调用顺序**（链表）来追踪 Hooks
- 条件/循环改变调用顺序 → React 混乱
- 保证每次渲染 Hooks 调用顺序一致

### 规则 2：只在 React 函数中
- ✅ 函数组件
- ✅ 自定义 Hook（`use` 开头的函数）
- ❌ 普通 JS 函数、class 组件

## English Short Summary

Hooks overview and two rules. **Rule 1**: Only call hooks at the top level (no conditionals, loops, nested functions) — React tracks hooks by call order (linked list). **Rule 2**: Only call in function components or custom hooks. ESLint plugin enforces these rules.
