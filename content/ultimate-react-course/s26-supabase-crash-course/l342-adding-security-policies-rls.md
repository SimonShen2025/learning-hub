---
title: "Adding Security Policies (RLS)"
lectureId: 342
section: 26
sectionTitle: "Supabase Crash Course: Building a Back-End!"
date: "2026-03-04"
tags: [supabase, rls, security, row-level-security]
---

## 中文短总结

行级安全（RLS）控制谁能访问哪些行。Supabase 默认启用 RLS — 启用后所有请求被拒绝，必须创建 Policy 来允许。开发阶段可以暂时禁用或创建简单的 allow-all policy。生产环境必须配置细粒度策略。

## 中文长总结

### RLS 概念
```sql
-- 默认：RLS 开启后，所有操作被拒绝
-- 需要创建 Policy 来允许

-- 允许所有人读取 cabins
CREATE POLICY "Enable read for all users"
ON cabins FOR SELECT
USING (true);

-- 允许认证用户增删改
CREATE POLICY "Enable insert for authenticated"
ON cabins FOR INSERT
WITH CHECK (auth.role() = 'authenticated');
```

### 在 Dashboard 中操作
1. Table Editor → 选择表
2. 点击 RLS 按钮
3. 创建 Policy：
   - **Target**: SELECT / INSERT / UPDATE / DELETE
   - **Using expression**: 条件表达式
   - `true` → 允许所有
   - `auth.uid() = user_id` → 只允许自己的数据

### 开发阶段方案
```
方案 1: 禁用 RLS（开发用）
方案 2: 创建 allow-all policy（true）
```

### 生产注意
- **永远不要**在生产环境禁用 RLS
- anon key 暴露在前端，RLS 是唯一的安全防线
- 细粒度策略：按用户、角色、数据所有权控制

### API 测试
```js
// 有 RLS policy 后
const { data, error } = await supabase
  .from("cabins")
  .select("*");
// 如果 policy 允许 → 返回数据
// 如果 policy 拒绝 → 返回空数组
```

## English Short Summary

Row-Level Security (RLS) controls data access per row. Enabled by default in Supabase — blocks all until policies are created. Create policies (SELECT/INSERT/UPDATE/DELETE) with conditions. For dev: allow-all. Production: fine-grained per-user policies.
