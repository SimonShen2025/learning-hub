---
title: "Routes, Pages, and Navigation"
lectureId: 496
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [routes, pages, navigation, Link]
---

## 中文短总结

Pages Router 中文件即路由：`pages/about.js` → `/about`。`next/link` 的 `Link` 组件做客户端导航。`useRouter` hook 获取路由信息和编程式导航。嵌套路由用文件夹：`pages/blog/index.js` → `/blog`。

## 中文长总结

### 文件 = 路由
```
pages/
├── index.js          → /
├── about.js          → /about
├── contact.js        → /contact
├── blog/
│   ├── index.js      → /blog
│   └── [slug].js     → /blog/:slug
└── 404.js            → Custom 404 page
```

### 页面组件
```jsx
// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}
// → 访问 /about 显示这个组件
```

### 导航
```jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}
```

### useRouter
```jsx
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  // 编程式导航
  function handleClick() {
    router.push("/about");
  }

  // 路由信息
  console.log(router.pathname);  // /blog/[slug]
  console.log(router.query);     // { slug: "hello" }
  console.log(router.asPath);    // /blog/hello

  return <button onClick={handleClick}>Go to About</button>;
}
```

### 与 App Router 对比
```
Pages Router: useRouter from "next/router"
App Router:   useRouter from "next/navigation"
              usePathname, useSearchParams (分开的 hooks)
```

## English Short Summary

File-based routing: `pages/about.js` → `/about`. `Link` component for client-side navigation. `useRouter` for programmatic navigation and route info (`pathname`, `query`). Nested routes via folders.
