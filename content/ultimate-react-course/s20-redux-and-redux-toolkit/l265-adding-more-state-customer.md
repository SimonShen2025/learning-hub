---
title: "Adding More State: Customer"
lectureId: 265
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, reducer, customer-state]
---

## 中文短总结

创建 Customer state slice。新增 customerReducer — 管理 fullName、nationalID、createdAt。从 action creators 开始写（先考虑 API），再写 reducer。`new Date().toISOString()` 在 action creator 中生成（不在 reducer — reducer 必须纯）。

## 中文长总结

### Customer Action Creators
```jsx
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(), // 副作用在 action creator 中
    },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
```

### Customer Reducer
```jsx
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}
```

### 关键原则
- **Reducer 必须是纯函数** → 不能有 `new Date()`、`Math.random()` 等
- 副作用放在 action creator 或中间件中
- 先设计 API（action creators）再实现 reducer

## English Short Summary

Customer state slice: fullName, nationalID, createdAt. Action creators first (API design), then reducer. Side effects (`new Date()`) in action creators, NOT in reducers — reducers must be pure functions.
