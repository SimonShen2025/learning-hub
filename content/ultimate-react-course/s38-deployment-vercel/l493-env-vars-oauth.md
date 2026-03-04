---
title: "Updating Environment Variables and OAuth"
lectureId: 493
section: 38
sectionTitle: "Deployment With Vercel"
date: "2026-03-05"
tags: [env-vars, oauth, google, production]
---

## 中文短总结

部署后更新 Google OAuth 回调 URL。在 Google Cloud Console 添加生产域名 `https://your-app.vercel.app` 作为 Authorized redirect URI。更新 `NEXTAUTH_URL` 环境变量为生产 URL。重新部署使变更生效。

## 中文长总结

### 更新 Google OAuth
```
Google Cloud Console → APIs & Services → Credentials:

1. OAuth 2.0 Client IDs → 点击编辑
2. Authorized JavaScript origins:
   - http://localhost:3000 （开发环境保留）
   - https://your-app.vercel.app （添加）
3. Authorized redirect URIs:
   - http://localhost:3000/api/auth/callback/google （开发）
   - https://your-app.vercel.app/api/auth/callback/google （添加）
4. 保存
```

### 更新 Vercel 环境变量
```
Vercel Dashboard → 项目 → Settings → Environment Variables:

修改 NEXTAUTH_URL:
- 旧值: http://localhost:3000
- 新值: https://your-app.vercel.app

注意：修改后需要 Redeploy 才生效
```

### 重新部署
```
方式 1: Vercel Dashboard → Deployments → Redeploy
方式 2: git push 触发新构建
```

### 其他注意事项
- **NEXTAUTH_SECRET** — 生产环境必须是强随机字符串
- **Supabase** — 如需限制客户端只能访问 production URL，更新 Supabase RLS 或 API settings
- **Domain** — 可以在 Vercel 中配置自定义域名
- 开发和生产的环境变量可以分开设置（Vercel 支持 Development / Preview / Production 分组）

### 常见问题
| 问题 | 原因 | 解决 |
|-----|------|------|
| OAuth 失败 | redirect URI 不匹配 | 在 Google Console 添加生产 URL |
| 登录后 404 | NEXTAUTH_URL 还是 localhost | 更新为生产 URL |
| 环境变量没生效 | 修改后没 redeploy | 重新部署 |

## English Short Summary

Post-deploy: add production URL to Google OAuth (redirect URIs). Update `NEXTAUTH_URL` to production URL in Vercel. Redeploy for changes to take effect. Keep dev and prod URLs separate.
