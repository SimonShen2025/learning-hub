---
title: "Generating Dynamic Metadata"
lectureId: 450
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [metadata, dynamic, generateMetadata, seo]
---

## 中文短总结

`generateMetadata` 异步函数为动态路由生成 metadata。根据数据动态设置页面标题和描述。Next.js 自动去重相同的数据请求（`getCabin` 在 `generateMetadata` 和 `Page` 中各调用一次，实际只请求一次）。

## 中文长总结

### 动态 Metadata
```jsx
// app/cabins/[cabinId]/page.js
import { getCabin } from "@/app/_lib/data-service";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
  // → "Cabin 001 | The Wild Oasis" (用根布局的 template)
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId); // 同样的调用
  // ...
}
```

### 请求去重 (Request Deduplication)
```
getCabin(7) 在 generateMetadata 调用一次
getCabin(7) 在 Page 调用一次
→ 实际只发一次网络请求（Next.js / React 自动去重）
```

### 去重条件
- 同一个渲染过程中
- 相同的 URL + 参数
- 使用 `fetch` API 或 React cache

### Metadata 优先级
```
页面 metadata > 布局 metadata > 父布局 metadata

app/layout.js: { title: { template: "%s | The Wild Oasis" } }
app/cabins/[cabinId]/page.js: generateMetadata → { title: "Cabin 001" }
→ 最终: "Cabin 001 | The Wild Oasis"
```

## English Short Summary

`generateMetadata()` for dynamic SEO metadata. Async function receives `params`. Next.js deduplicates identical data requests (called in both `generateMetadata` and `Page`, only fetched once). Child metadata overrides parent.
