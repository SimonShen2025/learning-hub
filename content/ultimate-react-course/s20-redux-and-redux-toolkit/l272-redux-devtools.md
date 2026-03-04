---
title: "The Redux DevTools"
lectureId: 272
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, devtools, debugging]
---

## 中文短总结

Redux DevTools 浏览器扩展。可视化查看：每个 dispatched action、action 的 payload、state 变化（diff）、完整 state 树。支持时间旅行（回放 action）。安装扩展 + npm 包 redux-devtools-extension。

## 中文长总结

### 安装
```bash
# 1. 安装浏览器扩展（Chrome/Firefox）
# 2. 安装 npm 包
npm i redux-devtools-extension
```

### 配置 Store
```jsx
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
```

### 功能
1. **Action 列表**：所有 dispatched actions 按序排列
2. **Action 详情**：查看 type 和 payload
3. **State**：查看当前完整 state 树
4. **Diff**：每个 action 导致的 state 变化
5. **Time Travel**：跳回任意时间点的 state

### 使用场景
- 调试：找到哪个 action 导致了错误 state
- 理解数据流：追踪 action → state 变化
- 开发时实时监控 state

### 与 RTK
- Redux Toolkit 的 `configureStore` **自动配置 DevTools**
- 不需要手动安装 redux-devtools-extension

## English Short Summary

Redux DevTools browser extension: visualize dispatched actions, payloads, state diffs, full state tree. Time travel debugging. Install extension + npm package. RTK's configureStore auto-configures DevTools.
