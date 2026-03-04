---
title: "Managing State With useReducer"
lectureId: 189
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, state-management, theory]
---

## 中文短总结

深入 useReducer 概念。Reducer 必须是纯函数（无副作用、不修改原 state）。State 不可变 — 始终返回新对象。Action 对象约定：`{ type: string, payload?: any }`。useReducer 将"做什么"（dispatch）和"怎么做"（reducer）解耦。

## 中文长总结

### useReducer 工作流
```
组件 → dispatch(action) → reducer(state, action) → newState → re-render
```

### Reducer 规则
1. **纯函数** — 相同输入永远返回相同输出
2. **不可变** — 不修改原 state，返回新对象
3. **无副作用** — 不做 API 调用、不写 localStorage
4. **不能是 async**

### Action 约定
```jsx
{ type: "deposit", payload: 500 }
{ type: "withdraw", payload: 200 }
{ type: "requestLoan", payload: { amount: 1000, purpose: "car" } }
```

### 解耦优势
```
// useState：组件直接定义更新逻辑
setBalance(balance + amount);

// useReducer：组件只声明意图
dispatch({ type: "deposit", payload: amount });
// reducer 集中处理逻辑
```

### 与 Event Handler 的关系
- Event handler 中调用 dispatch
- Reducer 中处理实际的 state 变更
- 组件不需要知道 state 如何变化

## English Short Summary

useReducer deep dive: reducer must be pure (no side effects, no state mutation). Always return new state object. Action convention: `{ type, payload }`. Decouples "what happened" (dispatch) from "how state changes" (reducer). Event handlers dispatch, reducer handles logic.
