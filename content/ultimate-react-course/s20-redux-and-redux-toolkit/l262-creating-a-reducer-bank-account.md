---
title: "Creating a Reducer: Bank Account"
lectureId: 262
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, reducer, bank-account]
---

## 中文短总结

从零创建 Redux reducer。Bank Account 功能：deposit、withdraw、requestLoan、payLoan。Reducer 是纯函数 — (state, action) → newState。用 switch-case 处理 action types。Redux 约定：action type 用 "domain/event" 格式。

## 中文长总结

### Account Reducer
```jsx
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state; // 已有贷款
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state; // Redux 约定：default 返回原 state
  }
}
```

### Redux 与 useReducer 的差异
- Redux reducer 的 default 返回 `state`（不是 throw error）
- `state = initialState` 用默认参数（Redux store 初始化时调用）
- Action type 格式：`"domain/eventName"`

## English Short Summary

Create Redux reducer for Bank Account: deposit, withdraw, requestLoan, payLoan. Pure function (state, action) → newState. Default case returns state (Redux convention, unlike useReducer's throw). Action type format: "domain/event".
