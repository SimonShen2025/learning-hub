---
title: "Deploying to Vercel"
lectureId: 492
section: 38
sectionTitle: "Deployment With Vercel"
date: "2026-03-05"
tags: [vercel, deploy, production, hosting]
---

## 中文短总结

将 Next.js 项目部署到 Vercel。登录 Vercel → Import Git Repository → 自动检测 Next.js → 添加环境变量 → Deploy。Vercel 自动构建、优化、分配域名。后续推送自动触发重新部署。

## 中文长总结

### 部署步骤
```
1. 访问 vercel.com → 注册/登录（推荐用 GitHub 账号）
2. Dashboard → "Add New" → "Project"
3. Import Git Repository → 选择上一节创建的 repo
4. Framework Preset: 自动检测为 Next.js ✅
5. Environment Variables:
   - SUPABASE_URL → 粘贴值
   - SUPABASE_KEY → 粘贴值
   - NEXTAUTH_URL → https://your-app.vercel.app
   - NEXTAUTH_SECRET → 粘贴值
   - AUTH_GOOGLE_ID → 粘贴值
   - AUTH_GOOGLE_SECRET → 粘贴值
6. "Deploy" → 等待构建完成
7. 获得生产 URL: https://your-app.vercel.app
```

### 构建过程
```
Installing dependencies → npm install
Building application → next build
Generating static pages → SSG
Deploying → Edge Network

Build output:
├── Static pages (HTML)
├── Server-side routes (Serverless Functions)
├── API Routes (Serverless Functions)
└── Static assets (optimized)
```

### 后续部署
```bash
# 推送到 GitHub → 自动触发 Vercel 部署
git add .
git commit -m "Update feature"
git push

# Vercel 自动：
# 1. 检测推送
# 2. 构建
# 3. 部署
# 4. 更新生产环境
```

### Preview Deployments
- 每个 Pull Request 自动创建部署
- 独立 URL 用于预览
- 合并后自动部署到生产

## English Short Summary

Deploy to Vercel: import GitHub repo → detect Next.js → add env vars → deploy. Auto-build on push. Preview deployments for PRs. Production URL assigned automatically. Serverless functions for SSR/API routes.
