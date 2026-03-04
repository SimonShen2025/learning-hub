---
title: "Creating Our First App With Vite: \"WorldWise\""
lectureId: 204
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, vite, project-setup, worldwise]
---

## 中文短总结

首次使用 Vite 替代 Create React App。`npm create vite@latest` → 选 React + JavaScript。Vite 优势：更快的开发服务器（ESM 原生模块）、更快的构建（Rollup）、更小的 bundle。基本配置与 CRA 类似但更轻量。

## 中文长总结

### Vite 项目创建
```bash
npm create vite@latest worldwise -- --template react
cd worldwise
npm install
npm run dev
```

### Vite vs Create React App
| 维度 | CRA | Vite |
|------|-----|------|
| 打包工具 | Webpack | Rollup (build) + ESBuild (dev) |
| 开发服务器 | 慢 | 极快（ESM 原生） |
| HMR | 较慢 | 即时 |
| 配置 | 隐藏 | 可自定义 |
| 维护状态 | 已停维护 | 活跃维护 |

### 项目结构差异
- `index.html` 在根目录（不在 public/）
- 入口文件用 `<script type="module">`
- CSS/assets 导入方式相同
- 环境变量前缀 `VITE_` 而非 `REACT_APP_`

### WorldWise 项目
- 旅行追踪应用
- 地图上标记城市
- CRUD 操作

## English Short Summary

First time using Vite instead of CRA. `npm create vite@latest` — faster dev server (native ESM), faster builds (Rollup). WorldWise: travel tracking app with map markers. Vite differences: index.html at root, `VITE_` env prefix, actively maintained.
