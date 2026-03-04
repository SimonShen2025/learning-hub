---
title: "Static Site Generation (SSG)"
lectureId: 456
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [ssg, static-site-generation, export, nextjs]
---

## 中文短总结

SSG：所有页面在构建时生成静态 HTML → 可以部署到任何静态托管。`next.config.js` 设置 `output: "export"` 启用全站 SSG。限制：不能用动态渲染、API Routes、middleware 等服务器功能。适合纯静态网站。

## 中文长总结

### 启用 SSG
```js
// next.config.js
module.exports = {
  output: "export",
};
```

### 构建结果
```bash
npm run build
# 生成 out/ 目录
# 包含所有静态 HTML、CSS、JS 文件

out/
  index.html
  about.html
  cabins/
    index.html
    1.html
    2.html
    ...
```

### 限制
| 功能 | SSG 支持 |
|------|---------|
| Static rendering | ✅ |
| `generateStaticParams` | ✅ |
| Dynamic rendering | ❌ |
| API Routes | ❌ |
| Middleware | ❌ |
| ISR (revalidation) | ❌ |
| `cookies()`, `headers()` | ❌ |
| Image optimization | ❌ (需要服务器) |

### 适合的场景
- 文档网站
- 博客（无服务器功能）
- 营销着陆页
- 作品集网站

### 不适合的场景
- 需要用户认证
- 需要动态数据
- 需要 API 端点
- 需要图片优化

### 与其他工具对比
```
Next.js SSG ≈ Gatsby, Astro, Eleventy
但 Next.js 的优势：可以随时切换到动态渲染
```

## English Short Summary

SSG with `output: "export"`: all pages pre-rendered to static HTML in `out/`. No server needed. Cannot use dynamic rendering, API routes, middleware, image optimization. Good for docs/blogs/portfolios.
