---
title: "Getting the User Session"
lectureId: 472
section: 36
sectionTitle: "Authentication With NextAuth (Auth.js)"
date: "2026-03-05"
tags: [session, auth, user, server-component]
---

## 中文短总结

获取用户 Session。Server Component 中用 `auth()` 函数获取。包含 `user.name`, `user.email`, `user.image`。可以根据登录状态条件渲染 UI。Session 来自 JWT cookie（默认）。

## 中文长总结

### Server Component 中获取 Session
```jsx
// app/account/page.js
import { auth } from "@/app/_lib/auth";

export const metadata = { title: "Guest area" };

export default async function Page() {
  const session = await auth();

  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {session.user.name}
    </h2>
  );
}
```

### Session 对象
```js
{
  user: {
    name: "Simon Shen",
    email: "simon@example.com",
    image: "https://lh3.googleusercontent.com/...",
  },
  expires: "2024-04-01T00:00:00.000Z",
}
```

### 条件渲染
```jsx
// _components/Navigation.js
import { auth } from "@/app/_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav>
      <ul>
        <li><Link href="/cabins">Cabins</Link></li>
        <li><Link href="/about">About</Link></li>
        <li>
          {session?.user?.image ? (
            <Link href="/account" className="flex items-center gap-4">
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link href="/account">Guest area</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
```

### 注意
- `auth()` 只在 Server Component / Server Action / Route Handler 中使用
- 调用 `auth()` → 页面变为 Dynamic（因为读取 cookies）
- Client Component 中需要用 `useSession()` hook

## English Short Summary

User session: `auth()` in Server Components returns `{ user: { name, email, image } }`. Conditional UI based on login state. Makes page Dynamic (reads cookies). Client Components use `useSession()`.
