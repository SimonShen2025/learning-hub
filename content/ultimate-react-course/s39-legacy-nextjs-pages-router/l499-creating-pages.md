---
title: "Creating Some Pages"
lectureId: 499
section: 39
sectionTitle: "[Legacy] The Next.js Pages Router"
date: "2026-03-05"
tags: [pages, components, pages-router]
---

## 中文短总结

创建多个页面组件。`pages/cabins.js` → `/cabins`，`pages/cabins/[cabinId].js` → `/cabins/:id`，`pages/account.js` → `/account`。每个文件 export default 一个 React 组件。简洁直接。

## 中文长总结

### 创建页面
```jsx
// pages/cabins.js
export default function Cabins() {
  return (
    <div>
      <h1>All Cabins</h1>
      <p>List of cabins will go here</p>
    </div>
  );
}
```

```jsx
// pages/account.js
export default function Account() {
  return (
    <div>
      <h1>Your Account</h1>
    </div>
  );
}
```

```jsx
// pages/cabins/[cabinId].js
import { useRouter } from "next/router";

export default function Cabin() {
  const { cabinId } = useRouter().query;

  return (
    <div>
      <h1>Cabin {cabinId}</h1>
    </div>
  );
}
```

### 与 Header 配合
```jsx
// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">The Wild Oasis</Link>
      <nav>
        <Link href="/cabins">Cabins</Link>
        <Link href="/about">About</Link>
        <Link href="/account">Account</Link>
      </nav>
    </header>
  );
}
```

### Pages Router 页面特点
- 每个文件 = 一个路由
- `export default` 组件被 Next.js 自动识别
- 不需要 `"use client"` 或 `"use server"`
- 所有组件默认客户端渲染（除非用 getStaticProps/getServerSideProps）

## English Short Summary

Create page files: `pages/cabins.js` → `/cabins`, `pages/cabins/[cabinId].js` → `/cabins/:id`. Each file exports a default React component. No `"use client"`/`"use server"` needed. Simple and direct.
