---
title: "Section Overview"
lectureId: 461
section: 35
sectionTitle: "Client and Server Interactions"
date: "2026-03-05"
tags: [client-server, rsc, interactions, overview]
---

## 中文短总结

Client-Server 交互综述。深入 RSC 边界、如何在 Server/Client Component 之间传递数据和组合组件。学习 URL 状态共享、Context API、Route Handlers。

## 中文长总结

### 学习内容
1. **RSC 边界** — Server/Client Component 边界详解（Part 4）
2. **Client in Server** — 在 Server Component 中使用 Client Component
3. **导航高亮** — 当前路由高亮
4. **URL 状态共享** — searchParams 在 Server/Client 之间共享
5. **Server in Client** — 在 Client Component 中使用 Server Component（高级）
6. **数据获取策略** — Reservation 区域的设计
7. **Context API** — 在 Next.js 中使用 Context
8. **Route Handlers** — API 端点

### 核心问题
```
Server Component 和 Client Component 如何协作？
- SC 可以导入 CC ✅
- CC 不能导入 SC ❌ （但有变通方法）
- CC 可以通过 children 渲染 SC ✅
- 如何在两者之间共享状态？ → URL
```

## English Short Summary

Client-server interactions: RSC boundary details, composing Server/Client components, URL state sharing, Context API in Next.js, Route Handlers. How SC and CC collaborate and share data.
