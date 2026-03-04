---
title: "Routing and Single-Page Applications (SPAs)"
lectureId: 205
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, routing, spa, theory]
---

## 中文短总结

路由原理：URL 与 UI 视图的映射关系。SPA 特点：页面不重新加载、客户端路由、JS 拦截 URL 变化、仅更新变化的部分。传统 MPA 每次导航都从服务器获取新 HTML。SPA 体验更像原生应用。

## 中文长总结

### 路由是什么
- 将不同 URL 映射到不同 UI 视图
- `/` → Home page
- `/pricing` → Pricing page
- `/app/cities` → Cities list

### SPA vs MPA
| 特性 | SPA（单页应用） | MPA（多页应用） |
|------|----------------|----------------|
| 页面加载 | 只加载一次 | 每次导航重新加载 |
| HTML 来源 | 客户端渲染 | 服务器返回 |
| URL 变化 | JS 拦截 | 浏览器请求 |
| 用户体验 | 无刷新、流畅 | 白屏闪烁 |
| 数据获取 | API 调用 | 随 HTML 返回 |

### SPA 工作流程
1. 初始加载：服务器返回空 HTML + JS bundle
2. React 接管渲染
3. 用户点击链接 → JS 更新 URL（不发请求）
4. React Router 匹配新 URL → 渲染对应组件
5. 需要数据时异步 fetch API

## English Short Summary

Routing maps URLs to UI views. SPA: page loads once, JavaScript intercepts URL changes, updates only what changed — no full page reload. MPA: each navigation fetches new HTML. SPA feels like native apps. React Router enables client-side routing.
