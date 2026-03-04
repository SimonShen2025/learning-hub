---
title: "Manual Cache Revalidation"
lectureId: 481
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [revalidation, cache, revalidatePath, revalidateTag]
---

## 中文短总结

数据修改后手动刷新缓存。`revalidatePath(path)` 让指定路由的缓存失效。`revalidateTag(tag)` 让带特定标签的 fetch 缓存失效。在 Server Action 中调用。确保 UI 显示最新数据。

## 中文长总结

### revalidatePath
```js
"use server";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData) {
  // ... 更新数据库

  // 让 /account/profile 的缓存失效
  revalidatePath("/account/profile");

  // 也可以让整个路由段失效
  revalidatePath("/account", "layout"); // layout 级别
  revalidatePath("/", "layout"); // 整个应用
}
```

### revalidateTag
```js
// 数据获取时标记 tag
const res = await fetch(url, {
  next: { tags: ["profile"] },
});

// Server Action 中按 tag 失效
export async function updateProfile(formData) {
  // ...
  revalidateTag("profile");
}
```

### 对比
| `revalidatePath` | `revalidateTag` |
|-----------------|-----------------|
| 按路由路径 | 按数据标签 |
| 让整个路由缓存失效 | 只让特定 fetch 缓存失效 |
| 简单直接 | 更精细控制 |

### 缓存失效流程
```
1. 用户提交表单 → Server Action
2. 修改数据库
3. revalidatePath("/account/profile")
4. Next.js 标记该路由的缓存为"过期"
5. 下次访问时重新渲染页面（获取最新数据）
6. 如果是当前页面 → 自动重新渲染
```

### 常见模式
```js
// 创建 → revalidate 列表页
export async function createReservation(formData) {
  await insertReservation(data);
  revalidatePath("/account/reservations");
}

// 删除 → revalidate 列表页
export async function deleteReservation(id) {
  await deleteBooking(id);
  revalidatePath("/account/reservations");
}

// 更新 → revalidate 当前页和列表页
export async function updateReservation(formData) {
  await updateBooking(id, data);
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${id}`);
}
```

## English Short Summary

Cache revalidation after mutations. `revalidatePath(path)` invalidates route cache. `revalidateTag(tag)` invalidates tagged fetch cache. Call in Server Actions after DB changes. Ensures UI shows fresh data.
