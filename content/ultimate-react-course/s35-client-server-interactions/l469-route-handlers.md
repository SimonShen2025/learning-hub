---
title: "Creating an API Endpoint With Route Handlers"
lectureId: 469
section: 35
sectionTitle: "Client and Server Interactions"
date: "2026-03-05"
tags: [route-handlers, api, endpoint, nextjs]
---

## 中文短总结

Route Handlers：在 `app/api/` 目录创建 API 端点。`route.js` 文件导出 HTTP 方法函数（GET, POST 等）。返回 `NextResponse.json()`。适用于：webhook、第三方 API、客户端数据获取。在 Next.js 中大多数场景用 Server Actions 替代。

## 中文长总结

### Route Handler
```js
// app/api/cabins/route.js
import { NextResponse } from "next/server";
import { getCabins } from "@/app/_lib/data-service";

export async function GET() {
  const cabins = await getCabins();
  return NextResponse.json(cabins);
}
```

### 带参数的 Route Handler
```js
// app/api/cabins/[cabinId]/route.js
export async function GET(request, { params }) {
  const cabin = await getCabin(params.cabinId);
  return NextResponse.json(cabin);
}
```

### 其他 HTTP 方法
```js
export async function POST(request) {
  const body = await request.json();
  // 处理创建
  return NextResponse.json({ success: true }, { status: 201 });
}

export async function PATCH(request, { params }) {
  const body = await request.json();
  // 处理更新
  return NextResponse.json({ success: true });
}

export async function DELETE(request, { params }) {
  // 处理删除
  return NextResponse.json({ success: true });
}
```

### 实际使用
```jsx
// 在 Client Component 中调用
"use client";

async function handleSubmit() {
  const res = await fetch("/api/cabins", {
    method: "POST",
    body: JSON.stringify({ name: "New Cabin" }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
}
```

### Route Handlers vs Server Actions
| Route Handlers | Server Actions |
|---------------|---------------|
| HTTP API 端点 | 绑定到表单/按钮 |
| 返回 JSON | 直接修改数据 + revalidate |
| 客户端 fetch 调用 | 在表单 action 中调用 |
| 适合第三方集成 | 适合表单操作 |

## English Short Summary

Route Handlers: `app/api/*/route.js` exports HTTP method functions (GET, POST, etc.). Return `NextResponse.json()`. For webhooks, 3rd-party APIs, client-side fetch. Most mutations use Server Actions instead.
