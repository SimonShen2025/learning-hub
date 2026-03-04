---
title: "Analyzing Rendering in Our App"
lectureId: 454
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [rendering-analysis, static, dynamic, build]
---

## 中文短总结

分析应用中每个路由的渲染类型。`npm run build` 输出显示 Static (○) 和 Dynamic (λ)。首页、关于页是 Static。Cabin 详情页 `[cabinId]` 是 Dynamic（因为 params 未知）。可以用 `generateStaticParams` 让动态路由也变成 Static。

## 中文长总结

### Build 输出分析
```bash
npm run build

Route (app)                    Size     First Load JS
┌ ○ /                          5.2 kB   95 kB
├ ○ /about                     1.8 kB   92 kB
├ ○ /cabins                    2.1 kB   92 kB
├ λ /cabins/[cabinId]          3.5 kB   94 kB
├ ○ /account                   1.2 kB   91 kB
├ ○ /account/profile           1.4 kB   92 kB
├ ○ /account/reservations      1.6 kB   92 kB
└ ○ /login                     1.1 kB   91 kB

○ Static   λ Dynamic
```

### 各页面分析
| 路由 | 类型 | 原因 |
|------|------|------|
| `/` | Static | 无数据获取 |
| `/about` | Static | 数据获取被缓存 |
| `/cabins` | Static | 数据获取被缓存 |
| `/cabins/[cabinId]` | Dynamic | 动态参数 |
| `/account/*` | Dynamic | 需要认证（cookies） |

### 问题和优化
```
问题：
/cabins/[cabinId] 是 Dynamic → 每次请求都重新渲染
但 cabin 数据不常变化 → 可以 Static

解决方案：
1. generateStaticParams → 构建时预渲染所有 cabin 页
2. 缓存 → 设置 revalidation 时间
```

### 开发 vs 生产
- **开发模式**：所有页面都是动态渲染（方便开发）
- **生产模式**：根据条件静态/动态渲染
- 必须 `npm run build` 才能看到真实渲染类型

## English Short Summary

`npm run build` shows rendering type: ○ Static, λ Dynamic. Home/about/cabins are Static. Dynamic pages (`[cabinId]`) can be optimized with `generateStaticParams`. Dev mode always renders dynamically.
