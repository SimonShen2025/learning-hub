---
title: "Thinking In React: Advanced State Management"
lectureId: 226
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, state-management, architecture, thinking]
---

## 中文短总结

状态管理全局思考。状态分类：Local（组件内）vs Global（跨组件）。工具选择：Local → useState/useReducer。Global → Context API（少量更新）或 Redux（频繁更新）。还有 URL state 和 server state。根据状态类型和更新频率选择方案。

## 中文长总结

### 状态分类
| 类型 | 说明 | 工具 |
|------|------|------|
| Local state | 单个组件内 | useState / useReducer |
| Global state | 多个组件共享 | Context API / Redux / Zustand |
| URL state | URL params / query | React Router |
| Server state | 来自 API 的远程数据 | React Query / SWR / RTK Query |

### 状态提升 vs Context
- 状态提升：将 state 提到共同祖先 → 可能导致 prop drilling
- Context：跳过中间层直接访问 → 适合真正的全局数据

### 何时用 Context vs Redux
| 场景 | Context | Redux |
|------|---------|-------|
| 低频更新（主题、用户） | ✅ | 过度 |
| 高频更新（购物车、复杂表单） | ⚠️ 性能问题 | ✅ |
| 大型应用多个全局 state | 多个 Context 嵌套复杂 | ✅ 统一 store |
| 中间件/DevTools | ❌ | ✅ |

### 决策流程
1. 这个 state 只在一个组件用？→ Local state
2. 需要跨组件共享？→ 提升到共同父组件
3. 提升导致 prop drilling？→ Context API
4. 全局 + 高频更新 + 需要 DevTools？→ Redux

## English Short Summary

State management taxonomy: Local (useState/useReducer), Global (Context/Redux), URL (Router), Server (React Query). Context: good for low-frequency global updates (theme, user). Redux: for complex, high-frequency state with middleware/DevTools. Decision flow based on scope and update frequency.
