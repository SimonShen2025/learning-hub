---
title: "Redux Thunks With createAsyncThunk"
lectureId: 322
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux, thunk, createAsyncThunk, async]
---

## 中文短总结

`createAsyncThunk` 创建异步 action。三个生命周期 action：pending、fulfilled、rejected。在 `extraReducers` 中处理。用于获取地理位置（需要异步 API 调用）。自动管理 loading 状态。

## 中文长总结

### 创建 Async Thunk
```js
// userSlice.js
import { createAsyncThunk } from "@reduxjs/toolkit";

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) 获取位置
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) 反向地理编码
    const addressObj = await getAddress(position);
    const address = `${addressObj.locality}, ${addressObj.city} ${addressObj.postcode}, ${addressObj.countryName}`;

    // 3) 返回数据（作为 fulfilled 的 payload）
    return { position, address };
  }
);
```

### 处理 Thunk 状态
```js
const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    status: "idle",
    position: {},
    address: "",
    error: "",
  },
  reducers: { /* ... */ },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.error = "There was a problem getting your address.";
      }),
});
```

### 三个 Action 类型
| Action | 触发时机 |
|--------|---------|
| `pending` | 异步操作开始 |
| `fulfilled` | 成功完成 |
| `rejected` | 出错 |

## English Short Summary

`createAsyncThunk` for async Redux actions. Returns three lifecycle actions: pending/fulfilled/rejected. Handle in `extraReducers` with builder pattern. Auto-manages loading state. Used for geolocation + reverse geocoding.
