---
title: "Error Handling: \"Not Found\" Errors"
lectureId: 452
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [not-found, 404, error-handling, nextjs]
---

## 中文短总结

`not-found.js` 处理 404 错误。在数据服务中调用 `notFound()` 触发。`app/not-found.js` 处理全局 404。也可以在特定路由段放 `not-found.js`。不需要 `"use client"`（Server Component 即可）。

## 中文长总结

### 全局 not-found.js
```jsx
// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}
```

### 触发 notFound()
```js
// app/_lib/data-service.js
import { notFound } from "next/navigation";

export async function getCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    notFound(); // ← 触发最近的 not-found.js
  }

  return data;
}
```

### 两种 404 场景
| 场景 | 触发方式 |
|------|---------|
| 不存在的路由 | 自动（Next.js 路由匹配失败） |
| 数据不存在 | 手动调用 `notFound()` |

### 路由段级别
```
app/
  not-found.js          ← 全局 404
  cabins/
    [cabinId]/
      not-found.js      ← 小屋不存在时的 404（可选）
      page.js
```

### 注意
- `notFound()` throw 一个特殊错误（不是普通 Error）
- 不会被 `error.js` 捕获 → 专门由 `not-found.js` 处理
- HTTP 状态码自动设为 404

## English Short Summary

`not-found.js` for 404 pages. `notFound()` function triggers it programmatically. Global `app/not-found.js` + route-specific ones. Not caught by `error.js`. Auto 404 for non-existent routes. HTTP 404 status code.
