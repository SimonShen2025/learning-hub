---
title: "Section Overview"
lectureId: 490
section: 38
sectionTitle: "Deployment With Vercel"
date: "2026-03-05"
tags: [deployment, vercel, overview]
---

## 中文短总结

部署概览。将 Next.js 应用部署到 Vercel。步骤：创建 GitHub 仓库 → 连接 Vercel → 设置环境变量 → 部署。Vercel 是 Next.js 官方推荐的部署平台。

## 中文长总结

### 部署流程
```
1. 创建 GitHub Repository
2. 推送代码到 GitHub
3. 登录 Vercel → Import 项目
4. 配置环境变量
5. 一键部署
6. 更新 OAuth 回调 URL
```

### 为什么用 Vercel
- Next.js 的创建者（最佳兼容性）
- 自动检测 Next.js 配置
- 内置 Edge Network / CDN
- 自动 HTTPS
- Serverless Functions 支持
- 预览部署（每个 PR）
- 免费额度足够个人项目

## English Short Summary

Deployment overview: push to GitHub → import to Vercel → set env vars → deploy. Vercel is the recommended platform for Next.js. Auto-detects config, built-in CDN, free tier for personal use.
