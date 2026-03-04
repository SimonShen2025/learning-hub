---
title: "Setting Up a New React Project: The Options"
lectureId: 15
section: 3
sectionTitle: "A First Look at React"
date: "2026-03-04"
tags: [react, create-react-app, vite, nextjs, remix]
---

## 中文短总结

React 项目搭建三个主要选项：**Create-React-App (CRA)** 开箱即用但底层 webpack 过时、刷新慢，仅适合学习/小项目；**Vite** 现代构建工具、HMR 极快，适合正式项目但需手动配置 ESLint 等工具；**React 框架**（Next.js、Remix）提供 routing/data fetching/SSR 等完整方案，适合生产应用但学习 React 基础时暂不需要。课程策略：小项目用 CRA，后期大项目转 Vite。

## 中文长总结

### 三大选项对比

| 方案 | 优点 | 缺点 | 适用场景 |
|------|------|------|----------|
| **CRA** | 开箱即用（ESLint、Prettier、Jest、Babel 预配置） | webpack 过时、刷新慢、已停止更新 | 学习/教程/小实验 |
| **Vite** | 极快 HMR 和 bundling | 需手动配置 ESLint 等开发工具（特别是与 React 配合时） | 正式项目/生产应用 |
| **React 框架**（Next.js/Remix） | 内置 routing、data fetching、SSR | 增加复杂度，非所有应用都需要 | 全栈/生产级应用 |

### 关键洞察
- CRA "已死"只针对生产级应用，对学习完全足够。
- Vite 并非 CRA 的直接替代——它是构建工具，恰好提供了 React 模板。
- React 官方推荐使用 React 框架创建新项目，但这并非适用所有场景，Vanilla React 应用仍有其重要地位。
- **学 React 本身在先**，即使最终要用 Next.js 也得先掌握 React。

### 课程策略
- 小型学习项目 → CRA（快速上手）
- 后期 2-3 个大项目 → Vite（更贴近真实开发）

## English Short Summary

Three options for React project setup: **CRA** — preconfigured but slow/outdated (fine for learning), **Vite** — blazing fast HMR but requires manual tool config (best for production), **React frameworks** (Next.js/Remix) — full solutions with routing/SSR (for full-stack apps). Course uses CRA for small projects, Vite for larger real-world projects later.
