---
title: "Different Types of SSR: Static vs. Dynamic Rendering"
lectureId: 453
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [static-rendering, dynamic-rendering, ssr, nextjs]
---

## 中文短总结

Next.js 两种渲染：Static（构建时生成 HTML）vs Dynamic（请求时生成 HTML）。默认是 Static。使用 cookies、headers、searchParams、不缓存的 fetch 会自动切换到 Dynamic。Static 更快（CDN 缓存），Dynamic 更灵活。

## 中文长总结

### Static Rendering（默认）
```
构建时 (npm run build)：
  1. React 渲染页面 → HTML
  2. HTML 存储为静态文件
  3. 部署后直接从 CDN 提供

特点：
  - 超快（预生成的 HTML）
  - 可以全球 CDN 分发
  - 适合不常变化的内容
```

### Dynamic Rendering
```
请求时 (每次用户访问)：
  1. 请求到达服务器
  2. React 渲染页面 → HTML
  3. HTML 返回给浏览器

特点：
  - 每次请求都重新渲染
  - 可以访问请求信息（cookies, headers）
  - 适合个性化内容
```

### 何时自动切换到 Dynamic
| 触发条件 | 原因 |
|----------|------|
| `cookies()` | 需要请求时信息 |
| `headers()` | 需要请求时信息 |
| `searchParams` prop | 查询参数每次不同 |
| uncached `fetch` | 数据每次可能不同 |
| `export const dynamic = "force-dynamic"` | 手动强制 |

### 检查渲染类型
```bash
npm run build
# 输出中：
# ○ /about — Static
# λ /cabins/[cabinId] — Dynamic
# ● /cabins — ISR (revalidate: 3600)
```

### 符号说明
```
○ = Static（预渲染）
λ = Dynamic（服务器渲染）
● = ISR（增量静态再生成）
```

## English Short Summary

Static rendering (build-time, cached on CDN) vs Dynamic rendering (request-time). Default is Static. Auto-switches to Dynamic when using cookies, headers, searchParams, uncached fetch. Check with `npm run build` output.
