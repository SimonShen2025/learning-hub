---
title: "Redux vs. Context API"
lectureId: 278
section: 20
sectionTitle: "Redux and Modern Redux Toolkit (With Thunks)"
date: "2026-03-04"
tags: [react, redux, context-api, comparison, state-management]
---

## 中文短总结

Redux vs Context API 全面对比。Context API：内置、轻量、适合小中型应用和低频更新。Redux：第三方、强大、适合大型应用和复杂全局 state。Redux 优势：DevTools、middleware、生态系统。Context 优势：零额外依赖、学习成本低。

## 中文长总结

### 对比表
| 维度 | Context API | Redux (RTK) |
|------|-------------|-------------|
| 来源 | React 内置 | 第三方库 |
| 额外依赖 | 无 | @reduxjs/toolkit + react-redux |
| Boilerplate | 少 | 中（RTK 大幅减少） |
| 全局 State 管理 | 多个 Context 嵌套 | 单一 Store |
| DevTools | ❌ | ✅ 强大 |
| Middleware | ❌ | ✅（thunks, saga 等） |
| 性能优化 | 手动拆分 Context | useSelector 自动优化 |
| 学习曲线 | 低 | 中 |
| 适合 | 小中型应用 | 中大型应用 |

### 选择建议
```
小型应用（个人项目、小团队）
  → Context API + useReducer ✅

中型应用（多个全局 state、团队协作）
  → 看需求：Context 可能够用，Redux 更规范

大型应用（复杂 state、多人协作、需要 DevTools）
  → Redux (RTK) ✅

需要异步中间件、时间旅行调试
  → Redux ✅
```

### 不是非此即彼
- 可以同时使用 Context（主题/语言）和 Redux（业务 state）
- 第三方替代：Zustand、Jotai、Recoil

## English Short Summary

Redux vs Context: Context is built-in, lightweight, good for small/medium apps. Redux has DevTools, middleware, single store — suits large complex apps. Not either/or: can use both. Alternatives: Zustand, Jotai, Recoil.
