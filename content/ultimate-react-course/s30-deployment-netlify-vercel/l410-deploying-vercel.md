---
title: "Deploying to Vercel"
lectureId: 410
section: 30
sectionTitle: "Deployment With Netlify and Vercel"
date: "2026-03-05"
tags: [vercel, deployment, ci-cd, github-integration]
---

## 中文短总结

用 Vercel 部署。连接 GitHub 仓库 → 自动检测 Vite 项目 → 设置环境变量 → Deploy。每次 push 到 main 自动重新部署（CI/CD）。Vercel 自动处理 SPA 路由，不需要 `_redirects`。

## 中文长总结

### 步骤
1. 访问 vercel.com → 用 GitHub 登录
2. Import Git Repository → 选择仓库
3. Vercel 自动检测 Framework（Vite）
4. 设置环境变量：
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_KEY`
5. Deploy → 等待构建完成

### CI/CD 自动部署
```
Push to main → Vercel 自动检测 → Build → Deploy
                                  ↓
                          Preview deployments for PRs
```

### Vercel vs Netlify
| 特性 | Vercel | Netlify |
|------|--------|---------|
| SPA 路由 | 自动处理 | 需要 `_redirects` |
| GitHub 集成 | 原生支持 | 也支持 |
| CI/CD | 自动 | 需配置 |
| Next.js | 最佳支持 | 基本支持 |
| 免费 tier | 够用 | 够用 |

### 注意
- 环境变量在 Vercel Dashboard 中设置（不提交 `.env`）
- Preview deployments 用于 PR 预览
- 可自定义域名

## English Short Summary

Deploy to Vercel: import GitHub repo → auto-detect Vite → set env variables → deploy. Auto CI/CD on push to main. Vercel handles SPA routing automatically. Best for Next.js projects. Preview deployments for PRs.
