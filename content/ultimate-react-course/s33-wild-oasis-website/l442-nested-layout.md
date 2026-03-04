---
title: "Adding a Nested Layout"
lectureId: 442
section: 33
sectionTitle: "Building the Wild Oasis Customer Website"
date: "2026-03-05"
tags: [nested-layout, account-layout, sidebar, nextjs]
---

## 中文短总结

为 Account 区域创建嵌套布局。`app/account/layout.js` 添加侧边栏导航（Profile、Reservations 链接）。子页面渲染在 `{children}` 位置。嵌套布局自动包裹在根布局内。路由切换时布局不卸载。

## 中文长总结

### 嵌套布局
```jsx
// app/account/layout.js
import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
```

### 侧边栏导航
```jsx
// _components/SideNavigation.js
import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const navLinks = [
  { name: "Home", href: "/account", icon: <HomeIcon className="h-5 w-5" /> },
  { name: "Reservations", href: "/account/reservations", icon: <CalendarDaysIcon className="h-5 w-5" /> },
  { name: "Guest profile", href: "/account/profile", icon: <UserIcon className="h-5 w-5" /> },
];

export default function SideNavigation() {
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map(link => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### 布局层级
```
RootLayout (app/layout.js)
  └── Header + Navigation
  └── AccountLayout (app/account/layout.js)
       └── SideNavigation + {children}
            └── page.js (Profile 或 Reservations)
```

### 特性
- 嵌套布局自动组合（不需要手动嵌套）
- 路由切换时只替换 `{children}`，布局保持
- 侧边栏状态在子路由间保持

## English Short Summary

Nested layout for Account: `app/account/layout.js` with sidebar navigation. SideNavigation with icon links. `{children}` receives page content. Layout persists across `/account/*` routes. Auto-composed with root layout.
