---
title: "Creating a New Database"
lectureId: 338
section: 26
sectionTitle: "Supabase Crash Course: Building a Back-End!"
date: "2026-03-04"
tags: [supabase, database, setup, project]
---

## 中文短总结

在 Supabase 上创建新项目和数据库。注册账号 → 新建 Organization → 新建 Project（选区域、设密码）→ 等待数据库启动。免费层支持 2 个项目。Dashboard 展示 API 密钥和连接信息。

## 中文长总结

### 创建步骤
1. **注册** — supabase.com → GitHub 登录
2. **创建 Organization** — 免费计划
3. **创建 Project**
   - 项目名：`the-wild-oasis`
   - 数据库密码（保存好！）
   - 选择区域（选离你近的）
4. **等待启动** — 通常 1-2 分钟

### Dashboard 概览
- **Table Editor** — 可视化编辑表
- **SQL Editor** — 写 SQL 查询
- **Authentication** — 用户管理
- **Storage** — 文件存储
- **API Docs** — 自动生成的 API 文档
- **Settings → API** — API URL 和密钥

### API 密钥
```
Project URL: https://xxxxx.supabase.co
anon (public) key: eyJhb...  // 前端用
service_role key: eyJhb...    // 有完全权限，只在服务端用！
```

### 注意事项
- 免费层：2 个项目、500MB 数据库、1GB 文件存储
- 数据库密码不要丢失
- anon key 可以暴露在前端（受 RLS 保护）

## English Short Summary

Create Supabase project: sign up → new organization → new project (set region, password). Dashboard shows Table Editor, SQL Editor, API docs. Get Project URL and anon key for frontend. Free tier: 2 projects, 500MB DB.
