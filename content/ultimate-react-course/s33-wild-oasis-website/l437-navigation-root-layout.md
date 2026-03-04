---
title: "Improving the Navigation and Root Layout"
lectureId: 437
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [navigation, root-layout, header, nextjs]
---

## 中文短总结

完善根布局和导航。Header 包含 Logo + 导航链接。用 `<Link>` 客户端导航。布局在路由切换时不重新渲染。Footer 包含版权信息。导航高亮当前页面（可选）。

## 中文长总结

### 根布局
```jsx
// app/layout.js
import Header from "./_components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
```

### 导航组件
```jsx
// _components/Navigation.js
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li><Link href="/cabins" className="hover:text-accent-400 transition-colors">Cabins</Link></li>
        <li><Link href="/about" className="hover:text-accent-400 transition-colors">About</Link></li>
        <li><Link href="/account" className="hover:text-accent-400 transition-colors">Guest area</Link></li>
      </ul>
    </nav>
  );
}
```

### Header 组件
```jsx
// _components/Header.js
import Navigation from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
```

### Logo 组件
```jsx
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} height="60" width="60" alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">The Wild Oasis</span>
    </Link>
  );
}
```

## English Short Summary

Root layout with Header (Logo + Navigation) and main content area. `<Link>` for client-side nav. Navigation component with hover styles. Layout persists across route changes.
