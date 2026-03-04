---
title: "Building Our First React App!"
lectureId: 2
section: 1
sectionTitle: "Welcome, Welcome, Welcome!"
date: "2026-03-04"
tags: [react, components, state, useEffect, props, jsx]
---

## 中文短总结

通过在 CodeSandbox（react.new）中构建一个"Advice App"，快速体验 React 核心概念：用函数定义 component 并返回 JSX；用 `useState` 管理状态（advice 文本和 count 计数）；用 `onClick` 处理事件；用 `useEffect` + 空依赖数组在组件首次加载时执行副作用；用 props 在组件间传递数据。状态更新会自动触发 UI 重新渲染。

## 中文长总结

### 环境与工具
- 使用 CodeSandbox（直接访问 `react.new`）作为在线 React 开发环境，无需本地配置。

### React Component
- Component 本质就是一个**函数**，返回 JSX（类似 HTML 的语法）来描述 UI。
- Component 名称必须**大写开头**（如 `App`、`Message`）。
- 通过 `export default` 导出组件。

### State（useState）
- `useState(initialValue)` 返回 `[value, setValue]` 数组，通过解构获取。
- 调用 setter 函数（如 `setAdvice(newValue)`）更新 state → React 自动重新渲染 UI。
- 每个需要动态变化的数据都应该是一个独立的 state。

### 事件处理
- 在 JSX 中用 `onClick={handlerFunction}` 绑定事件，注意传递**函数引用**而非调用。

### useEffect
- `useEffect(fn, [])` 在组件**首次挂载时**执行一次副作用（如 API 请求）。
- 空依赖数组 `[]` 是关键，不传会导致无限循环。

### Props
- 父组件通过 JSX 属性传递数据：`<Message count={count} />`。
- 子组件通过 `props` 对象接收：`function Message(props) { props.count }`。
- Props 是组件间数据传递的核心机制。

### 关键模式
点击按钮 → 调用 handler → fetch API 数据 → `setState` 更新 → React 自动 re-render UI。

## English Short Summary

Built a small "Advice App" in CodeSandbox (react.new) demonstrating core React concepts: components as functions returning JSX, `useState` for reactive state management, `onClick` event handling, `useEffect` with empty dependency array for initial data fetching, and props for passing data between parent and child components. State updates automatically trigger UI re-renders.
