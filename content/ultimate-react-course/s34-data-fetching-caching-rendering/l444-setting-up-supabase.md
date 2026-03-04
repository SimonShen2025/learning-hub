---
title: "Setting Up Supabase"
lectureId: 444
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [supabase, setup, database, nextjs]
---

## 中文短总结

在 Next.js 项目中集成 Supabase。安装 `@supabase/supabase-js`，创建 Supabase 客户端（Server Component 专用）。用环境变量存储 URL 和 anon key。创建数据服务文件封装数据库查询。

## 中文长总结

### 安装
```bash
npm install @supabase/supabase-js
```

### 创建 Supabase 客户端
```js
// app/_lib/supabase.js
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
```

### 环境变量
```env
# .env.local
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJhbGci...
```

### 数据服务
```js
// app/_lib/data-service.js
import { supabase } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function getCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}
```

### 注意事项
- 环境变量**不加** `NEXT_PUBLIC_` 前缀 → 只在服务端可用
- Server Component 直接访问 → 安全（key 不暴露给客户端）
- 复用之前 Wild Oasis 项目的 Supabase 数据库

## English Short Summary

Supabase setup in Next.js: install `@supabase/supabase-js`, create client with env vars (server-only, no `NEXT_PUBLIC_`). Data service functions for CRUD. Reuse existing Supabase database from internal app.
