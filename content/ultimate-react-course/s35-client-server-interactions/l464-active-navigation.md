---
title: "Highlighting Current Side Navigation Link"
lectureId: 464
section: 35
sectionTitle: "Client and Server Interactions"
date: "2026-03-05"
tags: [navigation, active-link, usePathname, client-component]
---

## 中文短总结

高亮当前导航链接。需要用 `usePathname()` 获取当前路径 → 需要 Client Component。SideNavigation 标记 `"use client"`。当前路径匹配时添加高亮样式。只有需要 hook 的组件才标记为 CC。

## 中文长总结

### 高亮导航
```jsx
// _components/SideNavigation.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/account" },
  { name: "Reservations", href: "/account/reservations" },
  { name: "Guest profile", href: "/account/profile" },
];

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map(link => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathname === link.href ? "bg-primary-900 text-primary-100" : ""
              }`}
              href={link.href}
            >
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### 为什么需要 Client Component
- `usePathname()` 是 React hook → 只在 CC 中可用
- Server Component 不知道当前 URL（渲染时不关注请求路径）
- 替代方案：Middleware 设置 header（更复杂）

### 影响
- SideNavigation 变成 CC → 发送 JS 到客户端
- 但这个组件很小 → 影响不大
- 如果导航很复杂 → 考虑只把高亮逻辑提取为 CC

## English Short Summary

Active link highlighting: `usePathname()` hook requires `"use client"`. Compare pathname with link href, add active styles conditionally. Small component, minimal client JS impact.
