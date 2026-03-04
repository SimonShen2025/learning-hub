---
title: "Creating the Account Slice"
lectureId: 275
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, redux-toolkit, createSlice, Immer]
---

## 中文短总结

用 `createSlice` 创建 account slice。自动生成 action creators 和 action types。在 reducer 中可以直接"修改" state — Immer 在后台处理不可变更新。切换到 RTK 代码量减少 50%+。prepare callback 自定义 action payload。

## 中文长总结

### createSlice 用法
```jsx
import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: { balance: 0, loan: 0, loanPurpose: "", isLoading: false },
  reducers: {
    deposit(state, action) {
      state.balance += action.payload; // "直接修改" — Immer 处理
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      // prepare callback 自定义 payload
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
```

### Immer 工作原理
```jsx
// 看起来是 mutation
state.balance += 100;

// Immer 实际做的事
return { ...state, balance: state.balance + 100 };
```

### prepare callback
- 当 action creator 需要接收多个参数时
- `prepare(arg1, arg2) → { payload: {...} }`
- 类似经典 Redux 的 action creator 自定义

## English Short Summary

`createSlice`: auto-generates action creators and types. Immer enables "direct mutation" syntax (internally immutable). 50%+ less code. Use `prepare` callback when action creator needs multiple arguments. Export actions and reducer separately.
