---
title: "CHALLENGE #1: Creating a Bank Account With useReducer"
lectureId: 202
section: 16
sectionTitle: "The Advanced useReducer Hook"
date: "2026-03-04"
tags: [react, useReducer, challenge, practice]
---

## 中文短总结

编码挑战：用 useReducer 构建简化版银行账户。功能：开户、存款、取款、申请贷款、还贷款、关户。类似之前的 useReducer 类比，但这次是完整实现。练习 action 设计和 reducer 逻辑。

## 中文长总结

### State 设计
```jsx
const initialState = {
  balance: 0,
  loan: 0,
  isActive: false, // 账户是否已开通
};
```

### Action 类型
```jsx
// reducer
function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return { ...state, balance: 500, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "requestLoan":
      if (state.loan > 0) return state; // 已有贷款
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case "payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };
    case "closeAccount":
      if (state.loan > 0 || state.balance !== 0) return state;
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}
```

### 关键逻辑
- 未开户时忽略所有非 openAccount action
- 有未还贷款时不能关户
- 余额不为 0 时不能关户
- 已有贷款时不能再贷

## English Short Summary

Challenge: build bank account with useReducer. Actions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Guards: ignore actions before opening, can't close with loan/balance, can't loan twice. Practice designing actions and reducer logic.
