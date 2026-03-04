---
title: "Displaying a Loading Indicator"
lectureId: 428
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [loading, suspense, streaming, nextjs]
---

## 中文短总结

`loading.js` 特殊文件：在 async Server Component 数据加载时自动显示。Next.js 内部用 `<Suspense>` 包裹页面。也可以手动用 `<Suspense>` + `fallback` 更精细控制加载状态。Streaming SSR。

## 中文长总结

### loading.js
```jsx
// app/cabins/loading.js
import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}
```

### 工作原理
```
用户访问 /cabins
  → Next.js 开始渲染 page.js (async)
  → 数据获取中... 显示 loading.js 内容
  → 数据获取完成 → 替换为 page.js 的实际内容
```

### 手动 Suspense
```jsx
// 更精细控制
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <h1>Our Luxury Cabins</h1>
      <Filter />
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
```

### Streaming SSR
- 不等所有数据加载完才发送 HTML
- 先发送布局 + 加载状态
- 数据就绪后流式发送（streaming）
- 用户更快看到部分内容

### loading.js vs Suspense
| `loading.js` | `<Suspense>` |
|--------------|-------------|
| 整个页面加载状态 | 局部加载状态 |
| 自动应用 | 手动放置 |
| 简单 | 灵活 |

## English Short Summary

`loading.js` for page-level loading state during async Server Component data fetching. Next.js uses Suspense internally. Manual `<Suspense fallback>` for granular control. Streaming SSR sends layout first, then data.
