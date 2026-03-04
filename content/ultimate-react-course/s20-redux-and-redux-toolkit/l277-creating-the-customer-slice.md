---
title: "Creating the Customer Slice"
lectureId: 277
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, redux-toolkit, createSlice, challenge]
---

## 中文短总结

挑战：将 customer reducer 转换为 RTK createSlice。createCustomer 用 prepare callback 生成 createdAt 时间戳（副作用不放在 reducer 中）。updateName 直接修改 state.fullName。简单直接的 RTK 迁移练习。

## 中文长总结

### Customer Slice
```jsx
import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    fullName: "",
    nationalID: "",
    createdAt: "",
  },
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
```

### 关键点
- `prepare` callback 用于 `new Date()` — 保持 reducer 纯净
- 直接"修改" state — Immer 处理
- 自动生成 action types：`"customer/createCustomer"`、`"customer/updateName"`

## English Short Summary

Convert customer reducer to RTK createSlice. Use prepare callback for `new Date()` (keep reducer pure). Direct state mutation via Immer. Auto-generated action types and creators. Clean RTK migration exercise.
