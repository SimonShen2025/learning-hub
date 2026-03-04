---
title: "The Missing Piece: Hydration"
lectureId: 417
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [hydration, ssr, interactivity, react]
---

## 中文短总结

Hydration 是 SSR 的关键步骤。服务端渲染 HTML 后，客户端 React 接管已有 DOM（不重新创建），绑定事件处理器。用 `hydrateRoot` 替代 `createRoot`。使页面从"静态 HTML"变为"可交互应用"。

## 中文长总结

### Hydration 概念
```
SSR 渲染                    Hydration
服务器: React → HTML        客户端: React → 接管 DOM
  ↓                           ↓
HTML 返回浏览器              JS 下载 → React 重建虚拟 DOM
  ↓                           ↓
用户看到内容                 比对 DOM → 绑定事件
  ↓                           ↓
不可交互                     可交互 ✅
```

### 关键 API
```jsx
// CSR
createRoot(document.getElementById("root")).render(<App />);

// SSR + Hydration
hydrateRoot(document.getElementById("root"), <App />);
```

### React 18 的变化
- `hydrateRoot` 替代旧的 `hydrate`
- 支持 Suspense + Streaming SSR
- 渐进式 hydration（不需要一次性 hydrate 全部）

### 常见问题
- **Hydration mismatch** — 服务端和客户端渲染结果不一致
  - 原因：`Date.now()`, `Math.random()`, browser-only API
  - 解决：确保初始渲染一致
- **Time to Interactive** — hydration 完成前页面不可交互

## English Short Summary

Hydration: client-side React takes over server-rendered HTML. `hydrateRoot()` instead of `createRoot()`. Attaches event handlers to existing DOM. Transforms static HTML into interactive app. Mismatch errors if server/client output differs.
