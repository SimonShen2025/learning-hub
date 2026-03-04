---
title: "Protecting Routes With NextAuth Middleware"
lectureId: 474
section: 36
sectionTitle: "Authentication With NextAuth (Auth.js)"
date: "2026-03-05"
tags: [route-protection, middleware, nextauth, authorization]
---

## 中文短总结

用 NextAuth 的 `authorized` callback + Middleware 保护路由。未登录用户访问 `/account/*` → 自动重定向到 `/login`。NextAuth 提供 `auth` 作为 middleware 函数。`matcher` 配置保护的路由。

## 中文长总结

### NextAuth Middleware
```js
// middleware.js
export { auth as middleware } from "@/app/_lib/auth";

export const config = {
  matcher: ["/account/:path*"],
};
```

### Auth 配置中的 authorized callback
```js
// app/_lib/auth.js
const authConfig = {
  providers: [Google({...})],
  callbacks: {
    authorized({ auth, request }) {
      // 返回 true → 允许访问
      // 返回 false → 重定向到登录页
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login", // 自定义登录页路径
  },
};
```

### 保护流程
```
1. 用户访问 /account/profile
2. Middleware 运行 → 调用 authorized callback
3. auth?.user 存在？
   - ✅ 是 → NextResponse.next()（允许访问）
   - ❌ 否 → 重定向到 /login
```

### 更复杂的保护
```js
authorized({ auth, request }) {
  const isLoggedIn = !!auth?.user;
  const isOnAccount = request.nextUrl.pathname.startsWith("/account");

  if (isOnAccount) {
    if (isLoggedIn) return true;
    return false; // 重定向到登录
  }

  return true; // 其他路由允许
},
```

### 注意
- Middleware 运行在 Edge → 每次请求都检查
- 不只是客户端保护（服务端也保护）
- 未登录时自动记住原始 URL → 登录后重定向回去

## English Short Summary

Route protection: export `auth as middleware`, configure `matcher` for protected routes. `authorized` callback returns boolean. False → redirect to `/login`. Edge-level protection on every request. Auto-remembers original URL.
