---
title: "Page Title and Favicon"
lectureId: 500
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [head, title, favicon, seo, pages-router]
---

## 中文短总结

Pages Router 中用 `next/head` 的 `Head` 组件设置页面标题和 meta 信息。每个页面可以有自己的 `<Head>`。Favicon 放在 `public/` 目录。与 App Router 的 `metadata` export 对比。

## 中文长总结

### 使用 Head 组件
```jsx
// pages/cabins.js
import Head from "next/head";

export default function Cabins() {
  return (
    <>
      <Head>
        <title>All Cabins | The Wild Oasis</title>
        <meta name="description" content="Browse our luxury cabins" />
      </Head>

      <div>
        <h1>All Cabins</h1>
      </div>
    </>
  );
}
```

### 全局默认 Title
```jsx
// pages/_app.js
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Wild Oasis</title>
        <meta name="description" content="Luxury cabin hotel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
// 页面级 Head 会覆盖 _app 中的同名标签
```

### Favicon
```
public/
└── favicon.ico   ← 自动被 Next.js 使用

或在 Head 中指定：
<link rel="icon" href="/favicon.png" />
```

### Pages Router vs App Router
```
Pages Router:
import Head from "next/head";
<Head><title>Page Title</title></Head>

App Router:
export const metadata = { title: "Page Title" };
// 或
export function generateMetadata({ params }) {
  return { title: `Cabin ${params.cabinId}` };
}
```

## English Short Summary

`next/head` `Head` component for page title, meta tags, favicon. Each page can override. Global defaults in `_app.js`. Favicon in `public/`. App Router uses `metadata` export instead.
