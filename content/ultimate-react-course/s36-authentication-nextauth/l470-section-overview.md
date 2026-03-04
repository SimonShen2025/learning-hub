---
title: "Section Overview"
lectureId: 470
section: 36
sectionTitle: "Authentication With NextAuth (Auth.js)"
date: "2026-03-05"
tags: [nextauth, auth, authentication, overview]
---

## 中文短总结

NextAuth (Auth.js) 认证综述。学习 OAuth 认证流程、NextAuth 配置、Session 管理、Middleware 路由保护、自定义登录/登出页面、首次登录创建 Guest 记录。

## 中文长总结

### 学习内容
1. **NextAuth 设置** — 安装和基本配置
2. **Session 获取** — 在 SC 和 CC 中获取用户信息
3. **Middleware** — Next.js 中间件概念
4. **路由保护** — 用 Middleware 保护 `/account/*`
5. **自定义登录页** — 替换 NextAuth 默认页面
6. **登出按钮** — 自定义退出功能
7. **新用户处理** — 首次 OAuth 登录时创建 Guest

### NextAuth 是什么
```
NextAuth.js（现在叫 Auth.js）：
- 开源 Next.js 认证库
- 支持多种 Provider：Google, GitHub, Facebook, Email...
- 自动处理 OAuth 流程
- Session 管理（JWT 或 Database）
- 推荐的 Next.js 认证方案
```

### OAuth 流程
```
1. 用户点击 "Sign in with Google"
2. 重定向到 Google 登录页
3. 用户授权
4. Google 回调到你的应用
5. NextAuth 处理回调 → 创建 Session
6. 用户已登录 ✅
```

## English Short Summary

NextAuth (Auth.js) overview: OAuth flow, setup, session management, middleware route protection, custom sign-in/out pages, create guest on first login. Supports Google, GitHub, etc.
