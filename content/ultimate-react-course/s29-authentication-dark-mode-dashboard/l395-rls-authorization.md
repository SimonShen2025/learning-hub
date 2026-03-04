---
title: "Authorization on Supabase: Protecting Database (RLS)"
lectureId: 395
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [rls, row-level-security, supabase, authorization]
---

## 中文短总结

Supabase Row Level Security (RLS) 保护数据库层面。启用 RLS → 创建 policies → 只有认证用户才能 CRUD。即使有人绕过前端 UI，API 也受保护。在 Supabase Dashboard 的 Authentication → Policies 中配置。

## 中文长总结

### RLS 概念
```
没有 RLS:
  任何有 API Key 的人 → 可以读写所有数据

有 RLS:
  API 请求 → 检查 Policy → 是否允许？ → 是 → 执行
                                      → 否 → 拒绝
```

### 配置步骤
1. 在 Supabase 每个表上启用 RLS
2. 创建 Policy：
   - **SELECT** — 允许认证用户读取
   - **INSERT** — 允许认证用户创建
   - **UPDATE** — 允许认证用户更新
   - **DELETE** — 允许认证用户删除

### Policy 示例
```sql
-- 允许认证用户读取所有 cabins
CREATE POLICY "Enable read access for authenticated users"
ON public.cabins
FOR SELECT
TO authenticated
USING (true);

-- 允许认证用户所有操作
CREATE POLICY "Enable all for authenticated users"
ON public.bookings
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
```

### UI vs API 安全
| 层级 | 安全措施 |
|------|----------|
| **UI** | ProtectedRoute — 防止未登录访问页面 |
| **API** | RLS — 防止未认证的数据操作 |
| 两者都需要 | 前端可被绕过，API 安全是底线 |

## English Short Summary

Supabase Row Level Security (RLS): enable on tables → create policies for authenticated users. Protects database even if frontend is bypassed. UI security (ProtectedRoute) + API security (RLS) = defense in depth.
