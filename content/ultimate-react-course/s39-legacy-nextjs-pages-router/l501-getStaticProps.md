---
title: "Fetching Data With getStaticProps (SSG)"
lectureId: 501
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [getStaticProps, SSG, static-generation, data-fetching]
---

## 中文短总结

`getStaticProps` 在**构建时**获取数据。生成静态 HTML。适合内容不频繁变化的页面。返回 `{ props }` 传给页面组件。配合 `revalidate` 实现 ISR。与 App Router 的 Server Components 对比。

## 中文长总结

### getStaticProps
```jsx
// pages/cabins.js
import { getCabins } from "../lib/data-service";

export async function getStaticProps() {
  const cabins = await getCabins();

  return {
    props: {
      cabins,
    },
    // 可选：ISR（每 3600 秒重新生成）
    // revalidate: 3600,
  };
}

export default function Cabins({ cabins }) {
  return (
    <ul>
      {cabins.map(cabin => (
        <li key={cabin.id}>{cabin.name}</li>
      ))}
    </ul>
  );
}
```

### 运行时机
```
npm run build 时执行：
1. Next.js 调用 getStaticProps()
2. 获取数据
3. 将 props 传给组件
4. 渲染 HTML
5. 保存为 .html 文件

请求时：
→ 直接返回预生成的 HTML（极快）
```

### ISR (Incremental Static Regeneration)
```jsx
export async function getStaticProps() {
  const cabins = await getCabins();

  return {
    props: { cabins },
    revalidate: 60, // 60 秒后下次请求触发重新生成
  };
}
```

### 动态路由 + getStaticPaths
```jsx
// pages/cabins/[cabinId].js
export async function getStaticPaths() {
  const cabins = await getCabins();
  const paths = cabins.map(cabin => ({
    params: { cabinId: String(cabin.id) },
  }));

  return { paths, fallback: false };
  // fallback: false → 未列出的路径返回 404
  // fallback: true → 未列出的路径按需生成
  // fallback: "blocking" → 未列出的路径 SSR 生成
}

export async function getStaticProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}
```

### getStaticProps vs App Router
```
Pages Router:
export async function getStaticProps() { ... }
export default function Page({ data }) { ... }

App Router (Server Component):
export default async function Page() {
  const data = await fetchData(); // 直接 fetch
  return <div>{data}</div>;
}
```

## English Short Summary

`getStaticProps`: fetch data at build time, generate static HTML. Returns `{ props }` to page. `revalidate` for ISR. `getStaticPaths` for dynamic routes. App Router replaces this with Server Components.
