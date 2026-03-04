---
title: "Redux Middleware and Thunks"
lectureId: 270
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, middleware, thunks, async]
---

## 中文短总结

Redux Middleware：在 dispatch 和 reducer 之间的函数管道。用于日志、异步操作、错误处理。Thunk middleware 允许 dispatch 函数（而非对象）→ 在函数内做异步操作 → 完成后 dispatch 真正的 action 对象。

## 中文长总结

### Middleware 概念
```
dispatch(action) → [Middleware 1] → [Middleware 2] → Reducer → Store
```

### 安装 Redux Thunk
```bash
npm i redux-thunk
```

### 应用 Middleware
```jsx
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
```

### Thunk 是什么
```jsx
// 普通 action creator → 返回对象
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

// Thunk action creator → 返回函数
function deposit(amount, currency) {
  if (currency === "USD")
    return { type: "account/deposit", payload: amount };

  // 返回函数 → thunk middleware 会执行它
  return async function (dispatch, getState) {
    // 异步操作
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
    const data = await res.json();
    const converted = data.rates.USD;

    // 异步完成后 dispatch 真正的 action
    dispatch({ type: "account/deposit", payload: converted });
  };
}
```

### 工作流程
1. dispatch(thunk函数)
2. Thunk middleware 检测：是函数？
3. 执行该函数，传入 dispatch 和 getState
4. 函数内做异步操作
5. 完成后 dispatch 普通 action
6. 普通 action 到达 reducer

## English Short Summary

Redux Middleware: pipeline between dispatch and reducer. Thunk middleware: dispatch functions (not just objects) for async operations. Thunk function receives dispatch + getState, does async work, then dispatches regular actions.
