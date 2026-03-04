---
title: "Navigating Between Pages"
lectureId: 423
section: 32
sectionTitle: "Overview of Next.js With the App Router"
date: "2026-03-05"
tags: [navigation, Link, nextjs, prefetch]
---

## 中文短总结

用 `next/link` 的 `<Link>` 组件导航。不用 `<a>` 标签（会全页刷新）。Link 自动预获取目标页面代码。支持 `href` 属性。客户端导航 → 只加载变化部分，布局保持不变。

## 中文长总结

### Link 组件
```jsx
import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/cabins">Cabins</Link></li>
        <li><Link href="/account">Guest area</Link></li>
      </ul>
    </nav>
  );
}
```

### Link vs \<a\>
| `<a href>` | `<Link href>` |
|-------------|---------------|
| 全页刷新 | 客户端导航 |
| 重新加载所有资源 | 只加载新页面数据 |
| 丢失状态 | 保持布局状态 |
| 慢 | 快 |

### 预获取
- 视口中的 Link 自动预获取页面代码
- 生产模式下有效
- 可用 `prefetch={false}` 禁用
- 用户点击时瞬间加载

### 编程式导航
```jsx
import { useRouter } from "next/navigation";

function Component() {
  const router = useRouter();
  router.push("/cabins");
  router.replace("/");
  router.back();
}
```

## English Short Summary

`<Link href>` from `next/link` for client-side navigation. No full page reload. Auto-prefetches page code. Layout persists between navigations. Programmatic: `useRouter().push()`. Never use plain `<a>` for internal links.
