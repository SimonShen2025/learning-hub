---
title: "Setting Up a GitHub Repository"
lectureId: 491
section: 38
sectionTitle: "Deployment With Vercel"
date: "2026-03-05"
tags: [github, repository, git, version-control]
---

## 中文短总结

为项目创建 GitHub 仓库。`git init` → `.gitignore`（含 `node_modules`、`.env.local`）→ `git add .` → commit → 创建 GitHub repo → push。确保敏感信息（API key、secrets）不被提交。

## 中文长总结

### 步骤
```bash
# 初始化 Git
git init
git add .
git commit -m "Initial commit"

# 创建 GitHub 仓库（通过 GitHub 网页或 CLI）
gh repo create the-wild-oasis-website --public --source=. --push

# 或手动添加 remote
git remote add origin https://github.com/username/the-wild-oasis-website.git
git push -u origin main
```

### .gitignore（Next.js 自动生成）
```
node_modules/
.next/
.env.local
.env*.local
```

### 重要注意
- `.env.local` 已在默认 .gitignore 中
- 永远不要提交 secrets（API keys、认证密钥）
- 这些将在 Vercel 中通过环境变量设置
- `next.config.js` 中不含敏感信息 → 可以提交

### 文件结构
```
项目根目录/
├── .git/
├── .gitignore          ← 排除敏感文件
├── .env.local          ← 不提交
├── package.json
├── next.config.js
├── app/
└── ...
```

## English Short Summary

Create GitHub repo for deployment. `git init` → commit → push. `.env.local` auto-excluded by .gitignore. Never commit secrets. Sensitive values go in Vercel environment variables.
