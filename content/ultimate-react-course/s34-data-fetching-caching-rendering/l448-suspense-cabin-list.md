---
title: "Streaming UI With Suspense: Cabin List"
lectureId: 448
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [suspense, streaming, cabin-list, granular-loading]
---

## 中文短总结

用 `<Suspense>` 替代 `loading.js` 实现更精细的加载控制。把 `<CabinList />` 包裹在 `<Suspense>` 中 → 标题和文字立即显示，只有列表部分显示 Spinner。比整个页面 loading 更好的用户体验。

## 中文长总结

### 精细 Suspense
```jsx
// app/cabins/page.js
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import CabinList from "@/app/_components/CabinList";
import Filter from "@/app/_components/Filter";

export const metadata = { title: "Cabins" };

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins...
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList />
      </Suspense>
    </div>
  );
}
```

### 对比
```
loading.js 方式：
  ┌──── Page ─────────┐
  │ [全部 Spinner]      │  ← 标题、文字、列表全部替换为 Spinner
  └───────────────────┘

Suspense 方式：
  ┌──── Page ─────────┐
  │ Our Luxury Cabins  │  ← 标题立即显示
  │ Cozy yet...        │  ← 文字立即显示
  │ [All] [1-3] [4-7]  │  ← 筛选器立即显示
  │ [Spinner]          │  ← 只有列表部分 loading
  └───────────────────┘
```

### key 强制重渲染
```jsx
// 当 filter 变化时，key 变了 → Suspense 重新触发
<Suspense fallback={<Spinner />} key={filter}>
  <CabinList filter={filter} />
</Suspense>
```

### 最佳实践
- 删除 `loading.js`（用 Suspense 替代）
- 把慢的组件包裹在 Suspense 中
- 可以有多个并行的 Suspense 边界

## English Short Summary

Manual `<Suspense>` for granular loading: title/text show immediately, only CabinList shows spinner. Remove `loading.js`. Use `key` prop to re-trigger Suspense on filter change. Multiple Suspense boundaries for parallel loading.
