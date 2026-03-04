---
title: "Setting Up a Project With Create-React-App"
lectureId: 16
section: 3
sectionTitle: "A First Look at React"
date: "2026-03-04"
tags: [react, create-react-app, project-setup, npm]
---

## 中文短总结

使用 CRA 创建 React 项目：`npx create-react-app@5 pizza-menu`（锁定 v5 避免未来兼容问题）。项目结构：`package.json`（依赖和 scripts）、`node_modules`（npm 包括 react 和 react-dom）、`src/`（开发代码）、`public/`（静态资源 + `index.html` 含 `<div id="root">`）。启动：`npm start` → localhost:3000，带 HMR 自动刷新。`index.js` 通过 `ReactDOM.createRoot` 将 App 组件渲染到 root div。

## 中文长总结

### 创建项目
```bash
npx create-react-app@5 pizza-menu
```
- `@5` 锁定版本，避免未来版本变化导致不兼容
- 实际开发中可省略版本号

### 项目文件结构
| 文件/目录 | 说明 |
|-----------|------|
| `package.json` | 项目名、版本、依赖、npm scripts |
| `node_modules/` | 安装的所有 npm 包（含 react、react-dom） |
| `src/` | **开发代码**所在目录（App.js、index.js 等） |
| `public/` | 静态资源（favicon、`index.html`） |
| `public/index.html` | 包含 `<div id="root">` — React 应用的挂载点 |

### 核心入口文件 index.js
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```
- 与 Pure React 课程中手写的逻辑完全一致
- CRA 已自动配置好这一切

### 启动与开发
- `npm start`（或 `npm run start`）→ 启动开发服务器 → localhost:3000
- 支持 HMR：保存代码后浏览器自动刷新
- 建议使用 VS Code 内置终端（已自动定位到项目目录）

### 注意
- CRA 生成的文件结构只是一种约定，React 本身不关心文件组织方式
- 后续会清理 CRA 生成的多余文件

## English Short Summary

Create a React project with `npx create-react-app@5 pizza-menu` (version-locked). Key structure: `src/` for dev code, `public/index.html` with root div, `index.js` renders App via `ReactDOM.createRoot`. Run with `npm start` → localhost:3000 with HMR. The file structure is CRA's convention — React itself is file-structure agnostic.
