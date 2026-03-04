---
title: "Building a Custom Sign In Page"
lectureId: 475
section: 36
sectionTitle: "Authentication With NextAuth (Auth.js)"
date: "2026-03-05"
tags: [sign-in, login, custom-page, nextauth]
---

## 中文短总结

自定义登录页替代 NextAuth 默认页面。在 `app/login/page.js` 创建自定义 UI。用 Server Action 调用 `signIn("google")` 触发 OAuth。`pages.signIn: "/login"` 配置 NextAuth 使用自定义页面。

## 中文长总结

### 登录页面
```jsx
// app/login/page.js
import SignInButton from "@/app/_components/SignInButton";

export const metadata = { title: "Login" };

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  );
}
```

### SignInButton 组件
```jsx
// _components/SignInButton.js
import { signIn } from "@/app/_lib/auth";
import Image from "next/image";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/account" });
      }}
    >
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}
```

### 配置自定义页面
```js
// auth.js
const authConfig = {
  // ...
  pages: {
    signIn: "/login", // ← 告诉 NextAuth 用你的页面
  },
};
```

### Server Action 形式
```jsx
// signIn 是服务端函数 → 通过 form action 调用
<form action={async () => {
  "use server";
  await signIn("google", { redirectTo: "/account" });
}}>
  <button>Sign in</button>
</form>
```

### 注意
- `signIn()` 会重定向到 Google → 用户授权 → 回调到你的应用
- `redirectTo` 指定登录成功后跳转的页面
- 不需要 `"use client"`（form action 是 Server Action）

## English Short Summary

Custom sign-in page: `app/login/page.js` with SignInButton. Server Action calls `signIn("google", { redirectTo: "/account" })`. Configure `pages.signIn: "/login"` in NextAuth. No `"use client"` needed (form action).
