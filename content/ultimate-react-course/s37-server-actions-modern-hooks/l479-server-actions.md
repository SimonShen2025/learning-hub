---
title: "What are Server Actions?"
lectureId: 479
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [server-actions, use-server, mutations, forms]
---

## 中文短总结

Server Actions：`"use server"` 标记的异步函数，在服务端执行。用于数据修改（创建/更新/删除）。可以直接在 `<form action>` 中使用。替代传统 API endpoint + fetch 模式。自动处理序列化和错误。

## 中文长总结

### Server Action 定义
```jsx
// 方式 1：内联在 Server Component 中
export default function Page() {
  async function createAction(formData) {
    "use server";
    const name = formData.get("name");
    await createItem({ name });
    revalidatePath("/items");
  }

  return (
    <form action={createAction}>
      <input name="name" />
      <button type="submit">Create</button>
    </form>
  );
}
```

```js
// 方式 2：独立文件
// app/_lib/actions.js
"use server";

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("Not authenticated");

  const nationalID = formData.get("nationalID");
  const nationality = formData.get("nationality");

  await updateGuest(session.user.guestId, { nationalID, nationality });
  revalidatePath("/account/profile");
}
```

### 在 Client Component 中使用
```jsx
"use client";
import { updateProfile } from "@/app/_lib/actions";

export default function ProfileForm({ guest }) {
  return (
    <form action={updateProfile}>
      <input name="nationalID" defaultValue={guest.nationalID} />
      <button type="submit">Update</button>
    </form>
  );
}
```

### Server Actions vs API Routes
| Server Actions | API Routes |
|---------------|------------|
| 直接绑定到 form | 需要客户端 fetch |
| 自动处理 FormData | 手动解析 request body |
| `"use server"` 标记 | HTTP 方法函数 |
| 自动序列化 | 手动 JSON |
| 适合表单操作 | 适合第三方 API |

### 安全性
- Server Actions 有唯一 ID（不能被猜到）
- 需要手动验证和授权（检查 session）
- 输入验证必须在服务端做

## English Short Summary

Server Actions: `"use server"` async functions, execute on server. Use in `<form action>`. Replace API endpoint + fetch pattern. Auto-handle FormData. Must validate and authorize manually. `revalidatePath` to update cache.
