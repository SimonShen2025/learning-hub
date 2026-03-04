---
title: "Creating the Store With RTK"
lectureId: 274
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, redux-toolkit, configureStore]
---

## 中文短总结

用 `configureStore` 替代 `createStore + combineReducers + applyMiddleware`。一个函数搞定：reducer 合并、Thunk middleware、DevTools。配置直观 — 传一个对象，reducer 属性是各 slice。

## 中文长总结

### 经典 vs RTK
```jsx
// 经典 Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
```

```jsx
// RTK
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
```

### configureStore 自动包含
- combineReducers（根据 reducer 对象）
- Redux Thunk middleware
- Redux DevTools 配置
- 开发环境额外检查（如 state mutation 检测）

### 迁移路径
1. 安装 `@reduxjs/toolkit`
2. 替换 store 创建代码
3. 删除 `redux`、`redux-thunk`、`redux-devtools-extension` 依赖
4. Reducer 和 action creators 先保持不变（兼容）

## English Short Summary

`configureStore` replaces createStore + combineReducers + applyMiddleware. Auto-includes thunk middleware, DevTools, mutation detection. One object with reducer property. Migration: swap store creation, remove legacy packages.
