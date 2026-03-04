---
title: "The Legacy Way of Connecting Components to Redux"
lectureId: 269
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, connect, mapStateToProps, legacy]
---

## 中文短总结

旧版 Redux 连接方式：`connect()` HOC。`mapStateToProps` 将 state 映射为 props，`mapDispatchToProps` 将 dispatch 映射为 props。在 Hooks 之前是唯一方式。现在用 useSelector/useDispatch 替代。了解即可 — 旧项目会遇到。

## 中文长总结

### connect 用法
```jsx
import { connect } from "react-redux";

function BalanceDisplay({ balance }) {
  return <p>Balance: ${balance}</p>;
}

function mapStateToProps(state) {
  return { balance: state.account.balance };
}

export default connect(mapStateToProps)(BalanceDisplay);
```

### 完整版（含 dispatch）
```jsx
function mapStateToProps(state) {
  return { balance: state.account.balance };
}

function mapDispatchToProps(dispatch) {
  return {
    deposit: (amount) => dispatch(deposit(amount)),
    withdraw: (amount) => dispatch(withdraw(amount)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountOperations);
```

### 对比
```jsx
// 旧版 connect
export default connect(mapStateToProps)(Component);

// 新版 Hooks
function Component() {
  const balance = useSelector(state => state.account.balance);
  const dispatch = useDispatch();
}
```

### 何时遇到
- 旧项目（React 16.8 之前，无 Hooks）
- 类组件（不能用 Hooks）

## English Short Summary

Legacy Redux: `connect()` HOC with `mapStateToProps` and `mapDispatchToProps`. Pre-hooks approach — class component friendly. Now replaced by useSelector/useDispatch hooks. Know it for legacy codebases.
