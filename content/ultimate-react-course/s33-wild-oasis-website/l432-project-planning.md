---
title: "Project Planning: \"The Wild Oasis\" Customer Website"
lectureId: 432
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [project-planning, features, pages, nextjs]
---

## 中文短总结

项目规划。定义页面：首页、关于、小屋列表、小屋详情、预订、账户（个人资料、预订管理）。定义功能：浏览小屋、筛选、预订、登录/注册、管理预订。技术决策：Next.js App Router + Supabase。

## 中文长总结

### 页面规划
```
/                     → 首页（Hero + 介绍）
/about               → 关于页
/cabins              → 小屋列表（筛选）
/cabins/[cabinId]    → 小屋详情 + 预订表单
/account             → 账户页
/account/profile     → 个人资料
/account/reservations → 预订管理
/login               → 登录
```

### 功能清单
1. **浏览小屋** — 图片、价格、容量
2. **筛选小屋** — 按容量筛选
3. **预订小屋** — 选日期、填信息、提交
4. **用户认证** — Google OAuth 登录
5. **管理预订** — 查看/编辑/取消

### 技术决策
| 方面 | 选择 | 原因 |
|------|------|------|
| 框架 | Next.js App Router | SSR + RSC |
| 样式 | Tailwind CSS | 快速开发 |
| 后端 | Supabase | 复用已有数据库 |
| 认证 | NextAuth.js | Google OAuth |
| 部署 | Vercel | Next.js 最佳托管 |

## English Short Summary

Project planning: pages (home, about, cabins, cabin detail, account, login), features (browse, filter, book, auth, manage reservations). Tech: Next.js App Router + Tailwind + Supabase + NextAuth + Vercel.
