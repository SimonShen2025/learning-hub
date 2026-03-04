---
title: "Creating a New Guest on First Sign In"
lectureId: 477
section: 36
sectionTitle: "Authentication With NextAuth (Auth.js)"
date: "2026-03-05"
tags: [guest-creation, signIn-callback, nextauth, supabase]
---

## 中文短总结

首次 OAuth 登录时自动在 Supabase 创建 Guest 记录。用 NextAuth 的 `signIn` callback。检查 email 是否已存在 → 不存在则创建新 guest。把 `guestId` 添加到 session 中（通过 `session` callback）。

## 中文长总结

### NextAuth Callbacks
```js
// app/_lib/auth.js
const authConfig = {
  providers: [Google({...})],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },

    // 首次登录时创建 Guest
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest) {
          await createGuest({
            email: user.email,
            fullName: user.name,
          });
        }

        return true; // 允许登录
      } catch {
        return false; // 拒绝登录
      }
    },

    // 添加 guestId 到 session
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
```

### 数据服务函数
```js
// data-service.js
export async function getGuest(email) {
  const { data } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();
  return data; // null if not found
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase
    .from("guests")
    .insert([newGuest]);

  if (error) throw new Error("Guest could not be created");
  return data;
}
```

### Session 中的 guestId
```js
// 在 Server Component 中
const session = await auth();
session.user.guestId; // Supabase guests 表的 ID
// 用于创建预订等操作
```

### 完整流程
```
1. 用户首次 Google 登录
2. signIn callback → 检查 guests 表
3. 没找到 → createGuest({ email, fullName })
4. 返回 true → 允许登录
5. session callback → 添加 guestId
6. 后续操作用 guestId（预订、查看预订等）
```

## English Short Summary

Auto-create guest on first OAuth login: `signIn` callback checks if guest exists, creates if not. `session` callback adds `guestId` to session. `guestId` used for reservations and other operations.
