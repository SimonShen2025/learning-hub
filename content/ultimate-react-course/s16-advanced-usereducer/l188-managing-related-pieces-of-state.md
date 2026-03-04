---
title: "Managing Related Pieces of State"
lectureId: 188
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, state-management]
---

## 中文短总结

useReducer 适合管理关联的多个 state。将 count 和 step 合并到一个 state 对象中。一个 action 可以同时更新多个 state 字段。Reducer 返回整个 state 对象（用展开运算符保留未变字段）。比多个 useState 更清晰。

## 中文长总结

### 合并 State
```jsx
// 之前：多个 useState
const [count, setCount] = useState(0);
const [step, setStep] = useState(1);

// 之后：一个 useReducer
const initialState = { count: 0, step: 1 };
const [state, dispatch] = useReducer(reducer, initialState);
```

### Reducer 处理多个字段
```jsx
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState; // 一次性重置所有 state
    default:
      throw new Error("Unknown action");
  }
}
```

### 优势
- 一个 action 可以更新多个关联字段
- `reset` 可以一步回到初始状态
- 状态更新逻辑集中，不分散在组件各处

## English Short Summary

useReducer excels at managing related state pieces. Combine count & step into one state object. One action can update multiple fields. Spread operator preserves unchanged fields. Reset returns to initialState in one step. Clearer than multiple useState calls.
