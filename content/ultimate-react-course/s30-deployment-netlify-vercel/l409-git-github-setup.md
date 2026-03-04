---
title: "Setting Up a Git and GitHub Repository"
lectureId: 409
section: 30
sectionTitle: "Deployment With Netlify and Vercel"
date: "2026-03-05"
tags: [git, github, version-control, repository]
---

## 中文短总结

设置 Git 和 GitHub。`git init` → `git add` → `git commit` → 在 GitHub 创建仓库 → `git remote add origin` → `git push`。Vite 项目已有 `.gitignore`。为 Vercel 自动部署做准备。

## 中文长总结

### Git 命令
```bash
# 初始化
git init
git add -A
git commit -m "Initial commit"

# 连接 GitHub
git remote add origin https://github.com/username/the-wild-oasis.git
git branch -M main
git push -u origin main
```

### .gitignore（Vite 自动生成）
```
node_modules
dist
.env
```

### 注意事项
- 不要提交 `node_modules`（太大）
- 不要提交 `.env`（含敏感信息如 Supabase Key）
- `.env` 中的变量在部署平台的环境变量中设置
- Vite 环境变量需要 `VITE_` 前缀

### GitHub 仓库设置
- 可选 Public 或 Private
- 不需要 README（已有代码）
- 不需要 `.gitignore`（已有）

## English Short Summary

Git + GitHub setup: `git init`, `add`, `commit`, create GitHub repo, `git remote add origin`, `push`. Vite project has `.gitignore` (node_modules, dist, .env). Prepare for Vercel auto-deploy from Git.
