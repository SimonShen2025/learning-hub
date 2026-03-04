---
title: "Professional Redux File Structure: State Slices"
lectureId: 266
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, file-structure, slices, organization]
---

## 中文短总结

按 feature/slice 组织 Redux 代码。每个 feature 一个文件（如 accountSlice.js、customerSlice.js）。文件包含：reducer（default export）+ action creators（named exports）。Store 文件只负责 combineReducers + createStore。

## 中文长总结

### 文件结构
```
src/
  features/
    accounts/
      accountSlice.js    # reducer + action creators
      AccountOperations.jsx
      BalanceDisplay.jsx
    customers/
      customerSlice.js   # reducer + action creators
      CreateCustomer.jsx
      Customer.jsx
  store.js               # createStore + combineReducers
```

### accountSlice.js
```jsx
const initialState = { balance: 0, loan: 0, loanPurpose: "" };

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit": /* ... */
    case "account/withdraw": /* ... */
    default: return state;
  }
}

// Named exports: action creators
export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
```

### store.js
```jsx
import { createStore, combineReducers } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
export default store;
```

### 约定
- Reducer: default export
- Action creators: named exports
- 文件名用 `*Slice.js` 后缀

## English Short Summary

Organize Redux by feature/slice. Each file: reducer (default export) + action creators (named exports). Store file: combineReducers + createStore. File naming: `*Slice.js`. Clean separation of concerns.
