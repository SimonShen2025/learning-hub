---
title: "Setting Up NextAuth"
lectureId: 471
section: 36
sectionTitle: "Authentication With NextAuth (Auth.js)"
date: "2026-03-05"
tags: [nextauth, setup, google-oauth, configuration]
---

## 中文短总结

安装和配置 NextAuth。安装 `next-auth`，创建 `auth.js` 配置文件，设置 Google Provider。需要 Google Cloud Console 创建 OAuth 凭据。环境变量：`AUTH_SECRET`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`。创建 API route handler。

## 中文长总结

### 安装
```bash
npm install next-auth@beta
```

### 配置文件
```js
// app/_lib/auth.js
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
```

### API Route Handler
```js
// app/api/auth/[...nextauth]/route.js
export { GET, POST } from "@/app/_lib/auth";
```

### 环境变量
```env
# .env.local
AUTH_SECRET=your-random-secret-at-least-32-chars
AUTH_GOOGLE_ID=xxx.apps.googleusercontent.com
AUTH_GOOGLE_SECRET=GOCSPX-xxx
NEXTAUTH_URL=http://localhost:3000
```

### Google Cloud Console 设置
1. 创建 OAuth 2.0 Client ID
2. 授权的重定向 URI：`http://localhost:3000/api/auth/callback/google`
3. 获取 Client ID 和 Secret

### 生成 AUTH_SECRET
```bash
npx auth secret
# 或
openssl rand -base64 32
```

## English Short Summary

NextAuth setup: install `next-auth@beta`, create auth config with Google Provider. API route at `app/api/auth/[...nextauth]/route.js`. Env vars: `AUTH_SECRET`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`. Google Cloud Console for OAuth credentials.
