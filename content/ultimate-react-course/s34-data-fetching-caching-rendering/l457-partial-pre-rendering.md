---
title: "Partial Pre-Rendering"
lectureId: 457
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [ppr, partial-pre-rendering, experimental, nextjs]
---

## 中文短总结

PPR（Partial Pre-Rendering）：实验性功能。同一个页面中，静态部分预渲染（构建时）+ 动态部分请求时渲染。Suspense 边界定义动态"洞"。结合 Static 的速度和 Dynamic 的灵活性。Next.js 14+ 实验性支持。

## 中文长总结

### PPR 概念
```
传统方式：整个页面要么 Static，要么 Dynamic

PPR 方式：
  ┌──── 页面 ───────────────┐
  │ [Static] Header/Nav     │ ← 构建时预渲染
  │ [Static] 标题和描述      │ ← 构建时预渲染
  │ ┌─────────────────────┐ │
  │ │ [Dynamic] 用户信息   │ │ ← 请求时渲染
  │ └─────────────────────┘ │
  │ [Static] Cabin 列表     │ ← 构建时预渲染
  │ ┌─────────────────────┐ │
  │ │ [Dynamic] 预订表单   │ │ ← 请求时渲染
  │ └─────────────────────┘ │
  │ [Static] Footer         │ ← 构建时预渲染
  └─────────────────────────┘
```

### 启用 PPR
```js
// next.config.js
module.exports = {
  experimental: {
    ppr: true,
  },
};
```

### 使用 Suspense 定义动态边界
```jsx
export default function Page() {
  return (
    <div>
      <h1>Our Luxury Cabins</h1>           {/* Static */}
      <Suspense fallback={<Spinner />}>
        <UserGreeting />                    {/* Dynamic (uses cookies) */}
      </Suspense>
      <CabinList />                         {/* Static */}
      <Suspense fallback={<Spinner />}>
        <ReservationForm />                 {/* Dynamic (uses session) */}
      </Suspense>
    </div>
  );
}
```

### 工作流程
```
构建时：预渲染静态部分 + Suspense fallback（作为"壳"）
请求时：
  1. 立即返回预渲染的静态 HTML（包含 fallback）
  2. 服务器开始渲染动态部分
  3. 流式发送动态内容替换 fallback
```

### 当前状态
- Next.js 14 引入（实验性）
- 仍在积极开发中
- 未来可能成为默认行为

## English Short Summary

PPR (experimental): static and dynamic parts in same page. Static shell pre-rendered at build, dynamic "holes" (Suspense boundaries) rendered at request time. Combines speed of static + flexibility of dynamic. Next.js 14+.
