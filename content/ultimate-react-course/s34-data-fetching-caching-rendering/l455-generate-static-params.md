---
title: "Making Dynamic Pages Static With generateStaticParams"
lectureId: 455
section: 34
sectionTitle: "Data Fetching, Caching, and Rendering"
date: "2026-03-05"
tags: [generateStaticParams, static, dynamic-routes, nextjs]
---

## 中文短总结

`generateStaticParams` 让动态路由 `[param]` 在构建时预渲染为静态页面。返回所有可能的参数数组。构建时为每个参数生成一个 HTML 文件。未列出的参数可以 fallback 到动态渲染或返回 404。

## 中文长总结

### generateStaticParams
```jsx
// app/cabins/[cabinId]/page.js
import { getCabins, getCabin } from "@/app/_lib/data-service";

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map(cabin => ({
    cabinId: String(cabin.id),
  }));
}

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  // ...
}
```

### 构建结果
```bash
npm run build

Route (app)                         Size
├ ○ /cabins/[cabinId]               3.5 kB
│   ├ /cabins/1
│   ├ /cabins/2
│   ├ /cabins/3
│   └ ... (所有 cabin 都预渲染)

○ = 现在是 Static！
```

### Fallback 行为
```jsx
// 当用户访问 generateStaticParams 中没有列出的参数时
export const dynamicParams = true;   // 默认：动态渲染（ISR）
export const dynamicParams = false;  // 返回 404
```

### 使用场景
- 产品详情页
- 博客文章
- 文档页面
- 任何参数有限且已知的动态路由

### 注意
- 参数值**必须是字符串**
- 如果数据量很大 → 构建时间长
- 结合 ISR 可以按需重新生成

## English Short Summary

`generateStaticParams()`: pre-render dynamic routes at build time. Return array of param objects. Converts λ Dynamic to ○ Static. `dynamicParams` controls fallback (true=dynamic, false=404). Params must be strings.
