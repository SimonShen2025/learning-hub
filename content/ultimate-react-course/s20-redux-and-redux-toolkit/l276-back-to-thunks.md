---
title: "Back to Thunks"
lectureId: 276
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, redux-toolkit, thunks, async]
---

## 中文短总结

在 RTK 中使用 Thunks。RTK 自带 thunk middleware — 无需额外安装。手写 thunk（和经典 Redux 一样）仍然有效。也可以用 `createAsyncThunk`。实际场景中手写 thunk 更常见也更灵活。

## 中文长总结

### RTK 中的手写 Thunk
```jsx
// 和经典 Redux 完全一样的写法
// 在 accountSlice.js 中，单独导出 thunk
export function deposit(amount, currency) {
  if (currency === "USD")
    return { type: "account/deposit", payload: amount };

  return async function (dispatch) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}
```

### 注意事项
- 手写 thunk 需要**覆盖** createSlice 自动生成的同名 action creator
- 或者给 thunk 不同的名字
- createAsyncThunk 是另一种方式，但更复杂

### createAsyncThunk（了解）
```jsx
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deposit = createAsyncThunk(
  "account/deposit",
  async ({ amount, currency }) => {
    if (currency === "USD") return amount;
    const res = await fetch(`...`);
    const data = await res.json();
    return data.rates.USD;
  }
);
// 需要在 extraReducers 中处理 pending/fulfilled/rejected
```

## English Short Summary

Thunks in RTK: thunk middleware included by default. Manual thunks work same as classic Redux. Can override createSlice's auto-generated action creators. createAsyncThunk available but manual thunks often simpler and more flexible.
