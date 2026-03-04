---
title: "RSC vs. SSR: How are They Related? (RSC – Part 3)"
lectureId: 430
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [rsc, ssr, comparison, rendering-strategies]
---

## 中文短总结

RSC ≠ SSR。它们是不同概念，可以同时使用。SSR = 在服务端生成 HTML（所有组件都参与）。RSC = 组件本身在服务端运行，不发送 JS。Next.js 同时使用 RSC + SSR：所有组件 SSR 生成 HTML，但只有 Client Components 发送 JS。

## 中文长总结

### 不同维度
| | SSR | RSC |
|--|-----|-----|
| 关注点 | **何时**渲染 HTML | **何处**运行组件 |
| 作用 | 首次加载的 HTML | 减少客户端 JS |
| 所有组件参与？ | ✅ 是 | ❌ 只有 Server Components |
| 需要 Hydration？ | ✅ | 只有 Client Components |
| 可以不用对方？ | ✅ | ✅ |

### Next.js 中的组合
```
请求到达 Next.js →
  1. RSC: Server Components 运行，生成 RSC Payload
  2. SSR: 所有组件（SC 结果 + CC 代码） → HTML
  3. HTML 发送到浏览器（快速首屏）
  4. JS Bundle 下载（只有 Client Components 的代码）
  5. Hydration（只 hydrate Client Components）
```

### 关键区别
```
SSR without RSC:
  所有组件都发送 JS → 全部 hydrate → 大 bundle

SSR with RSC:
  Server Components 不发送 JS → 只 hydrate Client Components → 小 bundle

RSC without SSR:
  首次加载没有 HTML → 差体验
  （理论上可以，但实践中总是配合 SSR）
```

### 总结
- SSR 解决：首屏性能和 SEO
- RSC 解决：客户端 JS 大小和数据获取复杂性
- 在 Next.js 中：两者互补，不冲突

## English Short Summary

RSC ≠ SSR. SSR = when to render HTML (server). RSC = where components run (won't send JS). Next.js combines both: RSC → payload, SSR → HTML, then hydrate only Client Components. RSC reduces bundle, SSR improves FCP/SEO.
