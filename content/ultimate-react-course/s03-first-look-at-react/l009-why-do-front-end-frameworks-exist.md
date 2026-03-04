---
title: "Why Do Front-End Frameworks Exist?"
lectureId: 9
section: 3
sectionTitle: "A First Look at React"
date: "2026-03-04"
tags: [react, frontend-frameworks, spa, ssr, csr]
---

## 中文短总结

前端框架存在的核心原因：**保持 UI 与数据（state）同步非常困难**。传统 SSR 网站（如 WordPress）在服务端渲染 HTML；随着 JS 代码量增长，出现了 CSR 的 SPA 模式。用 Vanilla JS 构建复杂 SPA 面临两大问题：大量手动 DOM 操作导致 spaghetti code；state 分散存储在 DOM 中导致 bug。框架通过自动同步 UI 与 data 解决了这些问题，同时提供统一的代码组织方式。

## 中文长总结

### Web 开发演进
- **SSR 时代**（~2010 前）：网站在服务端渲染（如 WordPress），JS 仅用于简单动画/hover 效果，jQuery 解决浏览器兼容问题。
- **SPA 时代**：JS 代码量增长 → 完整的 web application → 渲染工作从 server 转移到 client（Client-Side Rendering）。
- **SSR 回归**：Next.js、Remix 等框架让 SSR 再次流行，但底层仍基于现代客户端框架。

### 前端应用的本质
所有前端应用的核心任务：**接收数据 → 处理数据变化 → 在 UI 上展示当前数据**。保持 UI 与 data 同步是最重要也最困难的任务。

### Vanilla JS 的两大痛点
1. **大量手动 DOM 操作**：元素选择（querySelector）、class 切换、DOM 遍历、CSS/文本修改 → 复杂应用中变成 spaghetti code。
2. **State 分散存储在 DOM 中**：没有集中的 state 管理，多处代码直接读写 DOM → bug 丛生、难以维护。

### 前端框架的价值
1. **自动同步 UI 与 data**：开发者只关注数据和 UI 描述，框架负责保持两者一致。
2. **强制代码结构规范**：提供约定和最佳实践，避免混乱。
3. **团队一致性**：统一的构建方式让协作更高效，代码库更一致。

## English Short Summary

Front-end frameworks exist because keeping UI in sync with data is extremely hard. Vanilla JS requires extensive manual DOM manipulation (leading to spaghetti code) and scatters state across the DOM (causing bugs). Frameworks like React automatically synchronize UI with data, enforce consistent code structure, and enable better team collaboration. The evolution went from SSR (WordPress era) → CSR/SPAs → SSR comeback via frameworks like Next.js.
