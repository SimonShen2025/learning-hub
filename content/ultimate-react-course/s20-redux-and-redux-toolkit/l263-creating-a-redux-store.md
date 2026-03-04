---
title: "Creating a Redux Store"
lectureId: 263
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, store, createStore, combineReducers]
---

## 中文短总结

用 `createStore` + `combineReducers` 创建 Redux store。combineReducers 将多个 reducer 合成一个 root reducer。每个 reducer 管理 state 的一个 "slice"。`store.dispatch()` 发送 action，`store.getState()` 获取当前 state。

## 中文长总结

### 创建 Store
```jsx
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
```

### Store 的 state 结构
```jsx
store.getState();
// {
//   account: { balance: 0, loan: 0, loanPurpose: "" },
//   customer: { fullName: "", nationalID: "", createdAt: "" }
// }
```

### 使用 Store
```jsx
// Dispatch action
store.dispatch({ type: "account/deposit", payload: 500 });

// 获取更新后的 state
console.log(store.getState());
// { account: { balance: 500, ... }, customer: { ... } }

// 订阅变化（React-Redux 会自动处理）
store.subscribe(() => console.log(store.getState()));
```

### 注意
- `createStore` 在新项目中被 RTK 的 `configureStore` 替代
- 这里先学原理，后面迁移到 RTK
- combineReducers 让每个 reducer 只关心自己的 slice

## English Short Summary

Create Redux store: `combineReducers` merges multiple reducers into root reducer. Each reducer manages one state slice. `store.dispatch()` sends actions, `store.getState()` reads state. `createStore` is legacy — RTK's `configureStore` is modern replacement.
