---
title: "API Routes"
lectureId: 503
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [api-routes, backend, serverless, pages-router]
---

## 中文短总结

Pages Router 的 API Routes：`pages/api/` 目录下的文件变成 API endpoint。`export default function handler(req, res)` 处理请求。支持 GET/POST/PUT/DELETE。用于后端逻辑、第三方 API 代理、Webhook 等。

## 中文长总结

### 基本 API Route
```js
// pages/api/cabins.js
// → GET /api/cabins

export default async function handler(req, res) {
  if (req.method === "GET") {
    const cabins = await getCabins();
    res.status(200).json(cabins);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
```

### 动态 API Route
```js
// pages/api/cabins/[cabinId].js
// → /api/cabins/1, /api/cabins/2, etc.

export default async function handler(req, res) {
  const { cabinId } = req.query;

  if (req.method === "GET") {
    const cabin = await getCabin(cabinId);
    if (!cabin) return res.status(404).json({ message: "Not found" });
    res.status(200).json(cabin);
  }

  if (req.method === "DELETE") {
    await deleteCabin(cabinId);
    res.status(204).end();
  }
}
```

### req/res API
```js
// req (request)
req.method   // "GET", "POST", "PUT", "DELETE"
req.query    // URL 参数 + 路由参数
req.body     // POST/PUT 请求体（自动解析 JSON）
req.cookies  // Cookies
req.headers  // 请求头

// res (response)
res.status(200)          // 设置状态码
res.json({ data })       // 返回 JSON
res.send("text")         // 返回文本
res.redirect(301, "/")   // 重定向
res.end()                // 结束响应（无 body）
res.setHeader("key", "value")
```

### 与 App Router Route Handlers 对比
```
Pages Router:
// pages/api/cabins.js
export default function handler(req, res) {
  res.status(200).json({ data });
}

App Router:
// app/api/cabins/route.js
export async function GET(request) {
  return Response.json({ data });
}
export async function POST(request) {
  const body = await request.json();
  return Response.json({ created: true });
}
```

### 使用场景
- 第三方 API 代理（隐藏 API key）
- Webhook 接收
- 表单处理
- 认证回调
- 不直接从组件调用（不要在 getStaticProps 中 fetch 自己的 API）

## English Short Summary

API Routes: `pages/api/*.js` files become endpoints. `handler(req, res)` function. HTTP methods via `req.method`. Dynamic routes with `[param].js`. App Router uses Route Handlers (`route.js` with named exports like `GET`, `POST`).
