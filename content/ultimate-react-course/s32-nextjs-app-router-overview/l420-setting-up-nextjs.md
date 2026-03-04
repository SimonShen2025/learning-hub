---
title: "Setting Up a Next.js Project"
lectureId: 420
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [nextjs, setup, create-next-app, project]
---

## 中文短总结

`npx create-next-app@latest` 创建 Next.js 项目。选项：TypeScript、ESLint、Tailwind CSS、src/ 目录、App Router。`npm run dev` 启动开发服务器。`app/page.js` 是首页，`app/layout.js` 是根布局。

## 中文长总结

### 创建项目
```bash
npx create-next-app@latest the-wild-oasis-website
```

### 选项
```
✔ Would you like to use TypeScript? → No
✔ Would you like to use ESLint? → Yes
✔ Would you like to use Tailwind CSS? → Yes
✔ Would you like to use `src/` directory? → No
✔ Would you like to use App Router? → Yes
✔ Would you like to customize the default import alias? → No (@/*)
```

### 项目结构
```
app/
  layout.js      ← 根布局（必须有 <html>, <body>）
  page.js        ← 首页 (/)
  globals.css    ← 全局样式
public/
  ...            ← 静态文件
next.config.js   ← Next.js 配置
tailwind.config.js
```

### 命令
```bash
npm run dev    # 开发模式（http://localhost:3000）
npm run build  # 生产构建
npm start      # 运行生产构建
```

### 与 Vite React 项目的区别
- 不需要 `react-router-dom`（内置文件路由）
- `app/` 替代 `src/`
- 每个文件夹 = 一个路由
- `layout.js` 替代 `index.html`

## English Short Summary

`create-next-app` setup: choose TypeScript, ESLint, Tailwind, App Router. `app/page.js` = home, `app/layout.js` = root layout. `npm run dev` to start. File-based routing, no react-router needed.
