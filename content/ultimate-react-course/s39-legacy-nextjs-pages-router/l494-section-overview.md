---
title: "Section Overview"
lectureId: 494
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [nextjs, pages-router, legacy, overview]
---

## 中文短总结

Next.js Pages Router 概览（旧版路由系统）。与 App Router 对比。Pages Router 用 `pages/` 目录，基于文件的路由。了解遗留项目维护很有用。核心概念：`getStaticProps`、`getServerSideProps`、API Routes。

## 中文长总结

### Pages Router vs App Router
| 特性 | Pages Router | App Router |
|-----|-------------|------------|
| 目录 | `pages/` | `app/` |
| 路由 | 文件 = 路由 | 文件夹 + page.js |
| 数据获取 | getStaticProps / getServerSideProps | Server Components + fetch |
| Layout | `_app.js` / `_document.js` | layout.js (嵌套) |
| API | `pages/api/` | `app/api/route.js` |
| 出现时间 | 2016 | 2023 (Next.js 13.4+) |
| 推荐 | 遗留项目 | 新项目 |

### 学习内容
1. 项目搭建
2. 路由/页面/导航
3. 动态路由
4. 自定义 `_app.js`
5. 创建页面
6. 标题和 favicon
7. `getStaticProps`（SSG）
8. `getServerSideProps`（SSR）
9. API Routes
10. 表单提交

### 为什么还要学
- 大量现有项目使用 Pages Router
- 迁移需要理解两套系统
- 面试可能问到
- 某些功能在 Pages Router 中更简单

## English Short Summary

Legacy Pages Router overview. `pages/` directory, file-based routing. Key APIs: `getStaticProps` (SSG), `getServerSideProps` (SSR), API Routes. Still relevant for existing projects. App Router is recommended for new projects.
