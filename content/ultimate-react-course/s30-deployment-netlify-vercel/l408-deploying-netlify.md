---
title: "Deploying to Netlify"
lectureId: 408
section: 30
sectionTitle: "Deployment With Netlify and Vercel"
date: "2026-03-05"
tags: [netlify, deployment, spa, redirects]
---

## 中文短总结

用 Netlify 部署 SPA。`npm run build` → 将 `dist` 文件夹拖到 Netlify Dashboard。需要设置 `_redirects` 文件让所有 URL 指向 `index.html`（SPA 路由）。免费、快速、简单。

## 中文长总结

### 步骤
1. **构建**：`npm run build` → 生成 `dist/` 文件夹
2. **创建 `_redirects` 文件**（放在 `public/`）：
   ```
   /* /index.html 200
   ```
3. **重新构建**：`npm run build`
4. **拖拽部署**：将 `dist/` 拖到 Netlify Dashboard → Sites → Drag & Drop

### 为什么需要 `_redirects`
- SPA 只有一个 HTML 文件（`index.html`）
- 用户直接访问 `/dashboard` → 服务器找不到 `dashboard.html` → 404
- `_redirects` 告诉 Netlify：所有请求都返回 `index.html`
- 然后 React Router 在客户端处理路由

### Netlify 特点
- 免费 tier 足够个人项目
- 自定义域名
- HTTPS 自动配置
- 也支持 Git 自动部署

## English Short Summary

Deploy to Netlify: `npm run build` → drag `dist/` to Netlify. Create `_redirects` file (`/* /index.html 200`) for SPA routing. Free tier, auto HTTPS, custom domains. Quick manual deployment.
