---
title: "What is React?"
lectureId: 11
section: 3
sectionTitle: "A First Look at React"
date: "2026-03-04"
tags: [react, components, jsx, state, declarative-ui]
---

## 中文短总结

React 是一个**极其流行的、声明式的、基于组件的、状态驱动的** JavaScript 库（非框架）。核心循环：基于 state 渲染 UI → 事件触发 state 变化 → React 自动 re-render UI（这就是"React"名字的由来）。React 只负责 view 层，路由/数据获取等需要第三方库或用 Next.js/Remix 等 React 框架补充。React 拥有最大的生态系统、社区和就业市场。

## 中文长总结

### React 定义
React 是**声明式（declarative）、基于组件（component-based）、状态驱动（state-driven）**的 JavaScript **库**，由 Facebook（Meta）创建。

### 核心概念

**Component-Based**
- Component 是 UI 的构建块（按钮、搜索栏、导航栏等）。
- 通过组合多个 component 构建复杂 UI（像乐高积木）。
- Component 可以复用（如 Airbnb 列表卡片）。

**Declarative + JSX**
- 用 JSX 语法描述 UI 应该是什么样（结合 HTML、CSS、JS），不直接操作 DOM。
- 声明式：告诉 React "要什么"，而非"怎么做"。

**State-Driven**
- State（数据）变化 → React 自动 re-render UI → UI 始终反映最新 state。
- 这就是 React **名字的由来**——React to state changes by re-rendering。

### React 是库而非框架
- React 只提供 view 层，缺少 routing、data fetching 等功能。
- 需要选择第三方库，或使用 **React 框架**（Next.js、Remix）来补齐这些能力。

### 为什么选择 React
- **最高人气**：npm 下载量远超其他框架，差距还在扩大。
- **就业市场**：大量公司采用 → 高需求、高薪岗位。
- **社区与生态**：庞大的社区、丰富的教程和 Stack Overflow 资源、海量第三方库。

### 历史
2011 年 Jordan Walke 在 Facebook 创建，2013 年开源，从根本上改变了前端开发格局。

## English Short Summary

React is a declarative, component-based, state-driven JavaScript **library** (not framework) created by Facebook. Core cycle: render UI from state → event triggers state change → React auto re-renders. React only handles the view layer — routing/data fetching require third-party libs or React frameworks (Next.js, Remix). It dominates in popularity, job market demand, community size, and ecosystem.
