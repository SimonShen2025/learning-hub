---
title: "Working With Action Creators"
lectureId: 264
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, action-creators]
---

## 中文短总结

Action creators：返回 action 对象的函数。封装 action 的创建逻辑，避免到处手写 `{ type: "...", payload: ... }`。约定 — 不直接写 action 对象，用 action creator。防止拼写错误，便于重构。

## 中文长总结

### Action Creators
```jsx
// account action creators
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

function payLoan() {
  return { type: "account/payLoan" };
}
```

### 使用
```jsx
// ❌ 手写 action（容易拼写错误）
store.dispatch({ type: "account/deposite", payload: 500 }); // typo!

// ✅ 使用 action creator
store.dispatch(deposit(500));
store.dispatch(requestLoan(1000, "Buy a car"));
store.dispatch(payLoan());
```

### 优势
- 单一真实来源（action type 只在一处定义）
- 自动补全支持
- 更容易重构
- 可以包含逻辑（如参数验证）

## English Short Summary

Action creators: functions returning action objects. Encapsulate action creation — avoid typos and manual action object writing. Single source of truth for action types. Easier refactoring and IDE support.
