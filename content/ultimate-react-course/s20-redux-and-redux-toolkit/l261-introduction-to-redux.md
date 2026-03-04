---
title: "Introduction to Redux"
lectureId: 261
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, introduction, theory]
---

## 中文短总结

Redux：第三方全局状态管理库。单一 store 存所有全局 state。Action dispatch 到 reducer → 返回新 state → UI 更新。与 useReducer 相似但有全局 store 和中间件。Redux 独立于 React — 可与任何 UI 库搭配。

## 中文长总结

### Redux 核心概念
```
UI → dispatch(action) → Reducer → Store(new state) → UI update
```

### 与 useReducer 对比
| 特性 | useReducer | Redux |
|------|-----------|-------|
| 范围 | 组件/局部 | 全局 |
| Store | 无 | 单一全局 store |
| 中间件 | 无 | 支持（thunks 等） |
| DevTools | 无 | 强大的 DevTools |
| 使用场景 | 组件内复杂 state | 应用级全局 state |

### Redux 数据流
```
1. 用户点击按钮
2. 组件 dispatch({ type: "deposit", payload: 100 })
3. Action 经过中间件（可做异步操作）
4. Reducer 接收 action → 返回新 state
5. Store 更新
6. 所有订阅的组件用新 state 重新渲染
```

### 为什么学经典 Redux
- 理解底层原理
- 很多现有项目仍在用
- RTK 是对经典 Redux 的封装
- 面试可能会问

## English Short Summary

Redux: third-party global state management. Single store for all global state. UI dispatches actions → reducers produce new state → UI updates. Like useReducer but global, with middleware and DevTools. Independent of React. Learn classic first, then RTK.
