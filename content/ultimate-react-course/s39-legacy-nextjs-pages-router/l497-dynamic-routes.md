---
title: "Dynamic Routes"
lectureId: 497
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [dynamic-routes, params, useRouter, pages-router]
---

## 中文短总结

动态路由用 `[param]` 文件名：`pages/cabins/[cabinId].js`。通过 `useRouter().query` 或 `getServerSideProps` 的 `context.params` 获取参数。支持 catch-all：`[...slug].js` 和可选 catch-all：`[[...slug]].js`。

## 中文长总结

### 动态路由文件
```
pages/
├── cabins/
│   ├── index.js        → /cabins
│   └── [cabinId].js    → /cabins/1, /cabins/2, etc.
└── blog/
    └── [...slug].js    → /blog/a, /blog/a/b, /blog/a/b/c
```

### 获取参数
```jsx
// pages/cabins/[cabinId].js
import { useRouter } from "next/router";

export default function Cabin() {
  const router = useRouter();
  const { cabinId } = router.query; // "1", "2", etc.

  return <h1>Cabin {cabinId}</h1>;
}
```

### 使用 getServerSideProps
```jsx
// pages/cabins/[cabinId].js
export async function getServerSideProps(context) {
  const { cabinId } = context.params;
  const cabin = await getCabin(cabinId);

  if (!cabin) {
    return { notFound: true }; // 显示 404
  }

  return {
    props: { cabin },
  };
}

export default function Cabin({ cabin }) {
  return <h1>{cabin.name}</h1>;
}
```

### 使用 getStaticProps + getStaticPaths
```jsx
// pages/cabins/[cabinId].js
export async function getStaticPaths() {
  const cabins = await getAllCabins();
  const paths = cabins.map(cabin => ({
    params: { cabinId: String(cabin.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { cabinId } = context.params;
  const cabin = await getCabin(cabinId);
  return { props: { cabin } };
}
```

### Catch-all 路由
```jsx
// pages/blog/[...slug].js
// /blog/2024 → { slug: ["2024"] }
// /blog/2024/react → { slug: ["2024", "react"] }

// pages/blog/[[...slug]].js (可选 catch-all)
// /blog → { slug: undefined }
// /blog/2024 → { slug: ["2024"] }
```

## English Short Summary

Dynamic routes: `[param].js` filename. Access via `useRouter().query` or `context.params` in data functions. Catch-all `[...slug].js` for nested paths. `getStaticPaths` for SSG with dynamic routes.
