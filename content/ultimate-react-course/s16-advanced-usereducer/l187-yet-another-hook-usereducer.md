---
title: "Yet Another Hook: useReducer"
lectureId: 187
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, hooks, state-management]
---

## 中文短总结

useReducer 初探：`const [state, dispatch] = useReducer(reducer, initialState)`。Reducer 函数接收当前 state 和 action，返回新 state。通过 `dispatch({ type: 'xxx' })` 触发状态更新。类似 Array.reduce — 将多个值归约为一个。

## 中文长总结

### 基本语法
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Reducer 函数
```jsx
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
    case "setCount":
      return { ...state, count: action.payload };
    default:
      throw new Error("Unknown action");
  }
}
```

### 触发更新
```jsx
dispatch({ type: "inc" });
dispatch({ type: "setCount", payload: 10 });
```

### 命名来源
- 灵感来自 JavaScript 的 `Array.prototype.reduce()`
- Reduce：将多个值归约为一个值
- useReducer：将多个 state 更新归约为一个 reducer 函数

### 初始 State
```jsx
const initialState = { count: 0, step: 1 };
```

## English Short Summary

useReducer basics: `const [state, dispatch] = useReducer(reducer, initialState)`. Reducer receives current state + action, returns new state. Dispatch with `{ type, payload }`. Named after Array.reduce — reduces multiple state updates into one centralized function.
