---
title: "Section Overview"
lectureId: 407
section: 30
sectionTitle: "Deployment With Netlify and Vercel"
date: "2026-03-05"
tags: [deployment, netlify, vercel, overview]
---

## 中文短总结

部署 React 应用。两个主流平台：Netlify 和 Vercel。先讲 Netlify（拖拽部署），再讲 Git/GitHub 仓库设置，最后讲 Vercel（Git 自动部署）。两者都免费、简单。

## 中文长总结

### 本节内容
1. **Netlify** — 手动拖拽部署 build 文件夹
2. **Git + GitHub** — 设置版本控制和远程仓库
3. **Vercel** — 连接 GitHub 仓库，自动部署
4. 两种部署方式对比

### 部署流程
```
开发 → npm run build → dist/ 文件夹
  → 拖到 Netlify（手动）
  → 或推到 GitHub → Vercel 自动部署（CI/CD）
```

## English Short Summary

Deploying React apps: Netlify (manual drag-and-drop) and Vercel (Git-based auto-deploy). Set up Git + GitHub repository. Both platforms free tier. Build → deploy workflow.
