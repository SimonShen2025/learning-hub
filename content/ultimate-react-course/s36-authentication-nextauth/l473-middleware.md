---
title: "What is Middleware in Next.js?"
lectureId: 473
section: 36
sectionTitle: "Authentication With NextAuth (Auth.js)"
date: "2026-03-05"
tags: [middleware, nextjs, request, edge]
---

## 中文短总结

Next.js Middleware：在请求到达页面之前执行的代码。`middleware.js` 放在项目根目录。可以做：重定向、重写、添加 headers、认证检查。运行在 Edge Runtime（轻量、快速）。用 `matcher` 配置匹配的路由。

## 中文长总结

### Middleware 基本结构
```js
// middleware.js（项目根目录）
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware running for:", request.url);

  // 重定向示例
  if (request.nextUrl.pathname === "/old-page") {
    return NextResponse.redirect(new URL("/new-page", request.url));
  }

  // 继续处理
  return NextResponse.next();
}

// 配置匹配路由
export const config = {
  matcher: ["/account/:path*", "/cabins/:path*"],
};
```

### Middleware 能做什么
| 功能 | 示例 |
|------|------|
| 重定向 | `NextResponse.redirect()` |
| 重写 | `NextResponse.rewrite()` |
| 设置 Headers | `response.headers.set()` |
| 设置 Cookies | `response.cookies.set()` |
| 认证检查 | 检查 session → 重定向到登录页 |
| A/B 测试 | 重写到不同版本 |
| 地理位置路由 | 根据国家重定向 |

### Edge Runtime
```
Middleware 运行在 Edge Runtime：
- 不是完整的 Node.js
- 轻量、快速
- 限制：不能用 Node.js 原生模块
- 全球边缘部署（低延迟）
```

### matcher 配置
```js
export const config = {
  matcher: [
    "/account/:path*",      // /account 及其所有子路由
    "/cabins/((?!api).*)",   // /cabins 但排除 /cabins/api
  ],
};
```

## English Short Summary

Next.js Middleware: `middleware.js` at project root. Runs before requests reach pages. Can redirect, rewrite, set headers, check auth. Edge Runtime (fast, limited Node.js). `matcher` config controls which routes.
