---
title: "Introduction to Part 5"
lectureId: 411
section: 31
sectionTitle: "PART 5: FULL-STACK REACT WITH NEXT.JS"
date: "2026-03-05"
tags: [nextjs, full-stack, introduction, part-5]
---

## 中文短总结

课程第 5 部分介绍。从纯客户端 React 转向 Next.js 全栈开发。Next.js 是 React 的全栈框架：服务端渲染、文件路由、API 路由、Server Components。将构建 Wild Oasis 客户网站（与管理后台配套）。

## 中文长总结

### Part 5 概要
| 阶段 | 内容 |
|------|------|
| **Next.js 基础** | SSR、RSC、路由、布局、加载状态 |
| **Wild Oasis Website** | 客户端预订网站 |
| **数据获取** | Server Components 数据获取、缓存 |
| **认证** | NextAuth.js |
| **Server Actions** | 表单提交、数据变更 |
| **部署** | Vercel |

### Wild Oasis 客户网站
- 公开面向客户的预订网站
- 与之前的管理后台（Part 4）共享同一个 Supabase 数据库
- 完全不同的技术栈：Next.js + Server Components + Server Actions
- 不使用 React Query 或 styled-components

### 为什么 Next.js
- React 官方推荐使用框架
- 全栈能力（前端 + 后端）
- SEO 友好（服务端渲染）
- 更好的性能（Server Components 减少客户端 JS）

## English Short Summary

Part 5 intro: transition from client-side React to full-stack Next.js. Build Wild Oasis customer website (paired with admin dashboard). Covers SSR, RSC, NextAuth, Server Actions, Vercel deployment.
