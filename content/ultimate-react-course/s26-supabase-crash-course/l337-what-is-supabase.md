---
title: "What is Supabase?"
lectureId: 337
section: 26
sectionTitle: "Supabase Crash Course: Building a Back-End!"
date: "2026-03-04"
tags: [supabase, baas, postgres, api]
---

## 中文短总结

Supabase 是 BaaS（后端即服务）。基于 Postgres 数据库，自动创建 REST API。提供认证、文件存储、实时订阅。开源、免费层、与 Firebase 类似但用关系型数据库。前端开发者无需写后端代码。

## 中文长总结

### Supabase 核心功能
| 功能 | 说明 |
|------|------|
| **Database** | Postgres 关系数据库 |
| **Auth** | 邮箱/密码、OAuth 认证 |
| **Storage** | 文件/图片上传存储 |
| **Realtime** | 实时数据订阅（WebSocket） |
| **Edge Functions** | 服务端逻辑（Deno） |
| **REST API** | 自动为每张表生成 API |

### 与 Firebase 对比
| | Supabase | Firebase |
|---|---|---|
| 数据库 | Postgres（关系型） | Firestore（NoSQL） |
| 开源 | ✅ | ❌ |
| 查询 | SQL | 专有 API |
| 自托管 | ✅ | ❌ |

### 为什么选 Supabase
- **免费层**足够学习和小型项目
- **标准 SQL** — 通用技能
- **自动 API** — 无需写路由
- **Dashboard** — 可视化管理数据
- 前端开发者友好

### 使用方式
1. 在 supabase.com 创建项目
2. 在 Dashboard 中创建表
3. 用 Supabase JS client 从前端请求数据
4. 所有交互通过 API（不直接连数据库）

## English Short Summary

Supabase: open-source BaaS with Postgres database. Auto-generates REST API for tables. Includes auth, storage, realtime subscriptions. Like Firebase but relational. Free tier for development. No backend code needed.
