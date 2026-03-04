---
title: "An Overview of Server-Side Rendering (SSR)"
lectureId: 415
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [ssr, server-side-rendering, csr, comparison]
---

## 中文短总结

SSR vs CSR 对比。CSR：浏览器下载空 HTML + JS → JS 渲染 UI（慢首屏、SEO 差）。SSR：服务器渲染完整 HTML → 快首屏 + SEO 好。但 SSR 需要 hydration 才能交互。两者各有优缺。

## 中文长总结

### CSR (Client-Side Rendering)
```
1. 浏览器请求 → 服务器返回空 HTML + <script>
2. 下载 JS bundle（可能很大）
3. React 在浏览器中渲染 UI
4. 用户看到内容

问题：
- 白屏等待（下载 + 执行 JS）
- 搜索引擎看不到内容（SEO 差）
- 适合内部工具、Dashboard
```

### SSR (Server-Side Rendering)
```
1. 浏览器请求 → 服务器运行 React → 生成 HTML
2. 返回完整 HTML（用户立即看到内容）
3. 下载 JS bundle
4. Hydration（把事件绑定上去 → 可交互）

优点：
- 首屏快（First Contentful Paint）
- SEO 友好
- 适合公开网站、博客、电商
```

### 对比表
| 特性 | CSR | SSR |
|------|-----|-----|
| 首屏速度 | 慢 | 快 |
| SEO | 差 | 好 |
| JS Bundle | 必须全部下载 | 可以渐进 |
| 交互 | 立即 | 需要 hydration |
| 服务器负载 | 低 | 高 |
| 复杂度 | 低 | 高 |

## English Short Summary

SSR vs CSR: CSR renders in browser (slow FCP, bad SEO). SSR renders on server (fast FCP, SEO-friendly, needs hydration). SSR better for public sites, CSR for dashboards/internal tools. Each has trade-offs.
