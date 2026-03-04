---
title: "Pure React"
lectureId: 13
section: 3
sectionTitle: "A First Look at React"
date: "2026-03-04"
tags: [react, createElement, pure-react, react-dom]
---

## 中文短总结

演示在纯 HTML 文件中使用 React（无构建工具）：通过 `<script>` 引入 react 和 react-dom 两个库，用 `React.createElement()` 代替 JSX 创建元素，用 `ReactDOM.createRoot()` 将组件渲染到 DOM 的 root 节点。还演示了 `React.useState` 和 `React.useEffect` + `setInterval` 实现实时时钟。核心目的是理解为什么需要现代构建工具。

## 中文长总结

### 两个 React 库
- **react**：核心库，提供 components、state、hooks 等 API（`React.createElement`、`React.useState`、`React.useEffect`）
- **react-dom**：渲染层，负责将 React 组件渲染到浏览器 DOM（`ReactDOM.createRoot`）
- React 也可渲染到其他环境（如 React Native → 原生应用）

### 纯 React 工作流
1. HTML 中创建 `<div id="root">` 作为应用挂载点
2. 用 `<script>` 标签引入 react 和 react-dom CDN
3. 定义 Component 函数，用 `React.createElement(tagName, props, children)` 代替 JSX
4. `ReactDOM.createRoot(document.getElementById('root'))` → `root.render(React.createElement(App))`

### 为什么 JSX 不能直接用
- JSX 不是合法 JavaScript，需要构建工具（如 Babel）转译
- 没有构建工具 → 只能用 `React.createElement` 手写，可读性差

### State & Effect 示例（时钟）
```javascript
const [time, setTime] = React.useState(new Date().toLocaleTimeString());
React.useEffect(function() {
  setInterval(function() {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
}, []);
```

### 纯 React 的局限
无模块系统、无 JSX 转译、无 HMR（需手动刷新）、无开发服务器 → 因此需要 CRA/Vite 等现代工具。

## English Short Summary

Demonstrates React without build tools: include react and react-dom via `<script>` tags, use `React.createElement()` instead of JSX, render with `ReactDOM.createRoot()`. Built a clock using `React.useState` + `React.useEffect` + `setInterval`. Key takeaway: pure React works but lacks JSX, modules, HMR, and dev server — that's why modern tooling (CRA/Vite) is essential.
