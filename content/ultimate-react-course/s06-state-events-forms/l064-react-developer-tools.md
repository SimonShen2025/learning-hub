---
title: "React Developer Tools"
lectureId: 64
section: 6
sectionTitle: "State, Events, and Forms: Interactive Components"
date: "2026-03-04"
tags: [react, devtools, debugging]
---

## 中文短总结

React Developer Tools 是浏览器扩展（Chrome/Firefox），提供两个面板：**Components**（查看组件树、props、state、hooks）和 **Profiler**（性能分析）。可以实时查看和修改 state 值来调试。是 React 开发的必备工具。

## 中文长总结

### 安装
- Chrome Web Store 搜索 "React Developer Tools"
- 安装后浏览器 DevTools 多出两个 tab

### Components 面板
- 查看完整的组件树结构
- 选中组件可以看到：
  - 当前 props 值
  - 当前 state（hooks）值
  - 组件源码位置
- **可以直接修改 state 值** → 实时看到 UI 变化（调试利器）

### Profiler 面板
- 记录渲染性能
- 查看每次 render 花费的时间
- 识别不必要的 re-render（后续性能优化章节详解）

### 最佳实践
- 开发时始终打开 Components 面板监控 state 变化
- 调试 state 问题时直接在面板中修改值测试

## English Short Summary

React Developer Tools browser extension adds Components tab (inspect component tree, props, state — can modify state live) and Profiler tab (rendering performance analysis). Essential for debugging React apps. Install from Chrome/Firefox extension stores.
