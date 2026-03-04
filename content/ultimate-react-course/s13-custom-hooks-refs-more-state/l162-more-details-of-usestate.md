---
title: "More Details of useState"
lectureId: 162
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, useState, state-management]
---

## 中文短总结

useState 细节：初始值只在 mount 时使用（后续渲染忽略）。setState 可以传值或传回调函数。传回调时基于前一个 state 更新。可以用 setState 传入与当前相同的值 → React 跳过 re-render（Object.is 比较）。

## 中文长总结

### 初始值行为
```jsx
const [count, setCount] = useState(0);
// 0 只在 mount 时生效
// re-render 时 React 忽略初始值参数
```

### setState 两种方式
```jsx
// 1. 直接值
setCount(5);

// 2. 回调函数（推荐用于基于当前值的更新）
setCount(c => c + 1);
```

### 相同值 = 跳过渲染
```jsx
setCount(0); // 如果 count 已经是 0
// → React 用 Object.is() 比较
// → 相同 → 跳过 re-render（bail out）
```

### 注意
- Object.is 对对象比较引用（不是深比较）
- `setState({...obj})` 总是触发渲染（新引用）
- `setState(sameObj)` 跳过渲染（同引用）

## English Short Summary

useState details: initial value only used on mount (ignored on re-renders). setState accepts value or callback function. Same value (Object.is comparison) → React skips re-render. For objects, reference equality matters — `setState({...obj})` always triggers render, `setState(sameObj)` doesn't.
