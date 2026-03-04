---
title: "Back to React! Connecting Redux With React"
lectureId: 267
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, react-redux, Provider, useSelector]
---

## 中文短总结

用 react-redux 连接 Redux 和 React。安装 `react-redux`。`<Provider store={store}>` 包裹 App。`useSelector(state => state.account.balance)` 读取 state。`useDispatch()` 获取 dispatch 函数。组件自动订阅 state 变化。

## 中文长总结

### 安装
```bash
npm i react-redux
```

### Provider 包裹
```jsx
// main.jsx
import { Provider } from "react-redux";
import store from "./store";

<Provider store={store}>
  <App />
</Provider>
```

### 读取 State
```jsx
import { useSelector } from "react-redux";

function BalanceDisplay() {
  const balance = useSelector(state => state.account.balance);
  return <p>Balance: ${balance}</p>;
}
```

### Dispatch Actions
```jsx
import { useDispatch } from "react-redux";
import { deposit, withdraw } from "./accountSlice";

function AccountOperations() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(deposit(500))}>
        Deposit $500
      </button>
      <button onClick={() => dispatch(withdraw(200))}>
        Withdraw $200
      </button>
    </div>
  );
}
```

### 工作原理
- Provider 让整个组件树可以访问 store
- useSelector 订阅指定的 state slice → 值变化时组件 re-render
- useDispatch 返回 dispatch 函数 → 发送 action 到 store

## English Short Summary

Connect Redux to React with react-redux. Provider wraps app with store. `useSelector` reads state slices (auto-subscribes). `useDispatch` gets dispatch function. Components re-render when selected state changes.
