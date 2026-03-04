---
title: "Rendering the Root Component and Strict Mode"
lectureId: 33
section: 5
sectionTitle: "Working With Components, Props, and JSX"
date: "2026-03-04"
tags: [react, root-component, strict-mode, createRoot]
---

## 中文短总结

从零开始构建 Pizza Menu 项目。`index.js` 中使用 `ReactDOM.createRoot(document.getElementById('root'))` 创建根节点，然后 `root.render(<App />)` 渲染根组件。**React.StrictMode** 包裹 App 组件，在开发模式下检测潜在问题（如不安全的生命周期、过时 API），会导致组件渲染两次（仅开发环境）。

## 中文长总结

### 项目起步
- 删除 CRA 生成的默认文件，从空白开始
- 保留 `index.js`（入口文件）和 `index.css`

### 渲染根组件
```javascript
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### React.StrictMode
- 开发模式下**渲染两次**组件，帮助发现副作用问题
- 检测过时 API 和不安全模式
- **生产环境不生效**，无性能影响
- 推荐始终使用

## English Short Summary

Build Pizza Menu from scratch. Use `ReactDOM.createRoot()` to create root, then `root.render(<App />)`. Wrap with `<React.StrictMode>` for development warnings — renders components twice to detect side effects. No production impact.
