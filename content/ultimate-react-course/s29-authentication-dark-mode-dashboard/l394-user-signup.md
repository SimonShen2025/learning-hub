---
title: "User Sign Up"
lectureId: 394
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [signup, supabase-auth, mutation, user-creation]
---

## 中文短总结

用 Supabase Auth 注册新用户。`supabase.auth.signUp({ email, password, options: { data: { fullName, avatar: "" } } })`。`useSignup` mutation hook。注册后用户收到确认邮件。`user_metadata` 存储额外信息。

## 中文长总结

### API
```js
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}
```

### useSignup Hook
```jsx
export function useSignup() {
  const { mutate: signupFn, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please verify the new email address."
      );
    },
  });

  return { signup: signupFn, isLoading };
}
```

### 关键点
- `options.data` 存储 `user_metadata`（fullName、avatar）
- Supabase 自动发送验证邮件
- 新用户需要验证邮箱才能登录
- 在开发中可在 Supabase Dashboard 确认用户

## English Short Summary

User sign-up with Supabase Auth: `signUp({ email, password, options: { data: { fullName, avatar } } })`. Stores in `user_metadata`. Auto-sends verification email. `useSignup` mutation with success toast.
