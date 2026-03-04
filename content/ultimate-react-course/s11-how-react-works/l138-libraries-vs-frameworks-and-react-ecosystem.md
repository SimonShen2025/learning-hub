---
title: "Libraries vs. Frameworks & The React Ecosystem"
lectureId: 138
section: 11
sectionTitle: "How React Works Behind the Scenes"
date: "2026-03-04"
tags: [react, ecosystem, libraries, frameworks]
---

## 中文短总结

React 是**库**而非框架 — 只负责 UI 渲染，其他功能（路由、状态管理、表单等）需要第三方库。优势：灵活选择。劣势：选择太多、需要自行组合。全栈框架（Next.js、Remix）基于 React 提供完整方案。

## 中文长总结

### Library vs Framework
| | Library (React) | Framework (Angular) |
|--|----------------|-------------------|
| 包含 | 只有视图层 | 全套工具 |
| 灵活性 | 高 — 自由选择库 | 低 — 用框架提供的 |
| 学习曲线 | 初始低，但需要选择生态 | 初始高，但方向明确 |

### React 生态系统
| 功能 | 常用库 |
|------|--------|
| 路由 | React Router, TanStack Router |
| 状态管理 | Context API, Redux, Zustand, Jotai |
| 表单 | React Hook Form, Formik |
| 样式 | styled-components, Tailwind CSS, CSS Modules |
| HTTP | fetch, axios, React Query |
| 动画 | Framer Motion, React Spring |
| UI 组件 | MUI, shadcn/ui, Chakra UI |

### React 全栈框架
- **Next.js** — 最流行（SSR、路由、优化）
- **Remix** — 全栈 Web 框架
- **Gatsby** — 静态站点生成

## English Short Summary

React is a **library** (UI only), not a framework. Need third-party libraries for routing, state management, forms, styling, etc. Advantage: flexibility. Disadvantage: choice overload. Full-stack frameworks (Next.js, Remix) build on React for complete solutions. Overview of the React ecosystem.
