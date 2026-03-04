---
title: "What is Redux Toolkit (RTK)?"
lectureId: 273
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, redux-toolkit, RTK, introduction]
---

## 中文短总结

Redux Toolkit (RTK)：官方推荐的现代 Redux 写法。简化 Redux 的 boilerplate。核心 API：`configureStore`（替代 createStore）、`createSlice`（自动生成 reducer + action creators）。允许直接"修改" state（Immer 内部处理不可变更新）。

## 中文长总结

### RTK 解决的问题
| 经典 Redux 痛点 | RTK 解决方案 |
|----------------|-------------|
| 大量 boilerplate | createSlice 自动生成 |
| 手写 action types | 自动生成 |
| 手写 action creators | 自动生成 |
| 手动配置 store | configureStore 一键配置 |
| 手动配置 middleware/DevTools | 自动包含 |
| 不可变更新复杂 | Immer 允许"直接修改" |

### 安装
```bash
npm i @reduxjs/toolkit
# 不再需要 redux、redux-thunk、redux-devtools-extension
```

### 核心 API 预览
```jsx
// configureStore 替代 createStore + combineReducers + applyMiddleware
import { configureStore } from "@reduxjs/toolkit";

// createSlice 替代手写 reducer + action creators + action types
import { createSlice } from "@reduxjs/toolkit";
```

### RTK 是 Redux
- RTK 是 Redux 的高级封装
- 100% 兼容经典 Redux
- 新项目必用 RTK
- 旧项目可逐步迁移

## English Short Summary

Redux Toolkit (RTK): official, modern Redux. Eliminates boilerplate with `configureStore` (auto DevTools/middleware) and `createSlice` (auto action types/creators). Uses Immer for "mutable" state updates. 100% compatible with classic Redux.
