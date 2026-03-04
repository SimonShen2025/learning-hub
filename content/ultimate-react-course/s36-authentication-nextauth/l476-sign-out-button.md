---
title: "Building a Custom Sign Out Button"
lectureId: 476
section: 36
sectionTitle: "Authentication With NextAuth (Auth.js)"
date: "2026-03-05"
tags: [sign-out, logout, nextauth, server-action]
---

## 中文短总结

自定义登出按钮。同样用 Server Action 调用 `signOut()`。放在 SideNavigation 底部。登出后重定向到首页。简单的 form + button 模式。

## 中文长总结

### SignOutButton 组件
```jsx
// _components/SignOutButton.js
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOut } from "@/app/_lib/auth";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}
```

### 在 SideNavigation 中使用
```jsx
// _components/SideNavigation.js
"use client";
import SignOutButton from "./SignOutButton";

export default function SideNavigation() {
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {/* 导航链接 */}
        {navLinks.map(link => (...))}

        {/* 登出按钮放在底部 */}
        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
```

### 流程
```
1. 用户点击 "Sign out"
2. Form 提交 → Server Action 执行
3. signOut() 清除 session cookie
4. 重定向到 "/" (首页)
5. 用户已登出 ✅
```

### 对比 signIn/signOut
| | signIn | signOut |
|--|--------|---------|
| 函数 | `signIn("google")` | `signOut()` |
| 调用方式 | Server Action (form) | Server Action (form) |
| 重定向 | `redirectTo: "/account"` | `redirectTo: "/"` |

## English Short Summary

Sign out button: Server Action calls `signOut({ redirectTo: "/" })`. Form + button pattern. Clears session cookie. Place in SideNavigation at bottom with `mt-auto`.
