---
title: "Modeling the 'User' State With Redux Toolkit"
lectureId: 313
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux-toolkit, slice, user-state, createSlice]
---

## 中文短总结

用 Redux Toolkit 的 `createSlice` 为 user 状态建模。创建 userSlice：initialState 包含 username。Reducer 函数 `updateName` 修改用户名。导出 action creator 和 reducer，配置到 store。

## 中文长总结

### 创建 User Slice
```js
// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
```

### 配置 Store
```js
// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;
```

### 关键点
- `createSlice` 自动生成 action creators
- Immer 允许直接 "mutate" state（内部不可变）
- initialState 定义状态形状
- 一个 slice 对应一个功能域

## English Short Summary

Model user state with RTK `createSlice`. Define initialState (username, status, position, address). Create `updateName` reducer. Export actions and reducer, configure in store with `configureStore`.
