---
title: "What is Next.js?"
lectureId: 419
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [nextjs, framework, react, full-stack]
---

## 中文短总结

Next.js 是 React 全栈框架（by Vercel）。提供：服务端渲染、文件路由、数据获取、Server Components、Server Actions、图片优化、字体优化。React 核心团队推荐使用框架构建 React 应用。

## 中文长总结

### Next.js 特性
| 特性 | 说明 |
|------|------|
| **SSR** | 服务端渲染所有页面 |
| **文件路由** | `app/` 目录结构 = 路由结构 |
| **数据获取** | Server Components 中直接 fetch |
| **RSC** | React Server Components 默认启用 |
| **Server Actions** | 服务端函数处理表单 |
| **图片优化** | `<Image />` 自动优化 |
| **字体优化** | `next/font` 零 CLS |
| **缓存** | 多层缓存机制 |
| **SEO** | 内置 metadata API |
| **TypeScript** | 一等支持 |

### React "框架时代"
- React 文档推荐使用框架
- Next.js 是最成熟的选择
- 其他选择：Remix、Gatsby
- 纯 Vite React 适合 SPA/内部工具

### App Router vs Pages Router
```
Pages Router (旧) — pages/ 目录
App Router (新) — app/ 目录，支持 RSC, Server Actions, Streaming
```
- 课程使用 App Router（推荐方式）

## English Short Summary

Next.js: React full-stack framework by Vercel. SSR, file-based routing, RSC, Server Actions, image/font optimization, caching, SEO metadata. React team recommends frameworks. App Router (new) vs Pages Router (legacy).
