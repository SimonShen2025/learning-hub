---
title: "What are Custom Hooks? When to Create One?"
lectureId: 169
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, custom-hooks, reusability, abstraction]
---

## 中文短总结

自定义 Hook = 以 `use` 开头的函数，内部使用其他 Hooks。用于提取可复用的有状态逻辑。与普通函数的区别：自定义 Hook 可以使用 Hooks（useState、useEffect 等）。每个使用自定义 Hook 的组件获得独立的 state 实例。

## 中文长总结

### 什么是自定义 Hook
```jsx
// 普通函数：不能用 Hooks
function formatDate(date) { ... }

// 自定义 Hook：可以用 Hooks（名字以 use 开头）
function useLocalStorage(key) {
  const [value, setValue] = useState(() => JSON.parse(localStorage.getItem(key)));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
```

### 何时创建
1. 逻辑在多个组件中重复
2. 涉及 Hooks 的逻辑（state + effect）
3. 想要 separation of concerns（将逻辑从组件中抽出）

### 规则
- 函数名必须以 `use` 开头
- 内部可以使用任何 Hook
- 可以返回任何值（state、函数、对象等）
- 每个组件调用获得独立的 state 拷贝

### 不需要自定义 Hook 的情况
- 纯计算逻辑（没有 Hooks）→ 普通函数
- 只是 JSX 复用 → 组件

## English Short Summary

Custom hooks: functions starting with `use` that use other hooks inside. Extract reusable stateful logic. Each component using a custom hook gets its own independent state copy. Create when: logic is repeated across components, involves hooks, or needs separation of concerns. No hooks needed → use regular function.
