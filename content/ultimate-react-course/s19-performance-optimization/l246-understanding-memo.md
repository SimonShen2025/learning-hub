---
title: "Understanding memo"
lectureId: 246
section: 19
sectionTitle: "Performance Optimization and Advanced useEffect"
date: "2026-03-04"
tags: [react, memo, memoization, performance]
---

## 中文短总结

`memo` 是一个高阶组件（HOC），记忆化组件。当 props 不变时，跳过 re-render。只做**浅比较**。适合：频繁 re-render 的重组件。不能阻止因自身 state 或 context 变化导致的 re-render。

## 中文长总结

### 基本用法
```jsx
const MemoizedComponent = memo(function SlowComponent({ data }) {
  // 只有 data 变化时才 re-render
  return <div>{/* 渲染昂贵的内容 */}</div>;
});
```

### 工作原理
```
父组件 re-render
     ↓
memo 检查 props 是否变化（浅比较）
     ↓
  props 相同？     props 不同？
     ↓                ↓
  跳过 render     正常 render
```

### 浅比较细节
```jsx
// 原始值：比较值
memo(({ count }) => ...) // count: 5 === 5 → 跳过

// 对象/数组/函数：比较引用
memo(({ options }) => ...)
// { a: 1 } !== { a: 1 } → 每次都 re-render！
// 即使内容相同，引用不同就视为 props 变化
```

### 何时使用
- ✅ 组件渲染频繁且渲染昂贵
- ✅ props 经常不变化
- ❌ props 每次都是新对象/数组/函数（需配合 useMemo/useCallback）

## English Short Summary

`memo` HOC memoizes components — skips re-render when props unchanged (shallow comparison). Primitives compared by value, objects/arrays/functions by reference. Use for heavy components with stable props. Doesn't prevent state/context re-renders.
