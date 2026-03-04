---
title: "Setting Up the Project"
lectureId: 495
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [setup, create-next-app, pages-router, project]
---

## 中文短总结

创建 Pages Router 项目。`npx create-next-app@latest` 但选择不使用 App Router。项目结构：`pages/`（路由）、`public/`（静态资源）、`styles/`（CSS）。`pages/index.js` 是首页。

## 中文长总结

### 创建项目
```bash
npx create-next-app@latest next-pages-router
# ✔ Would you like to use App Router? → No
# ✔ Would you like to use src/ directory? → No
```

### 项目结构
```
next-pages-router/
├── pages/
│   ├── _app.js          ← 全局 App 组件
│   ├── _document.js     ← HTML 文档结构
│   ├── index.js          ← 首页 (/)
│   └── api/
│       └── hello.js      ← API Route (/api/hello)
├── public/              ← 静态文件
│   ├── favicon.ico
│   └── ...
├── styles/              ← CSS 文件
│   ├── globals.css
│   └── Home.module.css
├── next.config.js
└── package.json
```

### 首页
```jsx
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js Pages Router</h1>
    </div>
  );
}
```

### 启动开发服务器
```bash
npm run dev
# → http://localhost:3000
```

### Pages Router vs App Router 文件结构差异
```
Pages Router:
pages/index.js         → /
pages/about.js         → /about
pages/blog/[slug].js   → /blog/:slug

App Router:
app/page.js           → /
app/about/page.js     → /about
app/blog/[slug]/page.js → /blog/:slug
```

## English Short Summary

Create Pages Router project with `create-next-app` (no App Router). Structure: `pages/` for routes, `public/` for assets. `pages/index.js` = home page. `pages/api/` for API routes.
