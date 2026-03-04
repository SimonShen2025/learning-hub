---
title: "Updating the Profile Using a Server Action"
lectureId: 480
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [server-action, profile-update, form, formData]
---

## 中文短总结

用 Server Action 更新用户 Profile。表单 `action` 绑定 Server Action。`formData.get()` 获取表单值。验证 session → 验证输入 → 更新数据库 → `revalidatePath` 刷新缓存。完整的安全数据修改流程。

## 中文长总结

### Server Action
```js
// app/_lib/actions.js
"use server";

import { auth } from "./auth";
import { updateGuest } from "./data-service";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData) {
  // 1. 认证检查
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2. 获取表单数据
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  // 3. 输入验证
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  // 4. 更新数据库
  const updateData = { nationality, countryFlag, nationalID };
  await updateGuest(session.user.guestId, updateData);

  // 5. 刷新缓存
  revalidatePath("/account/profile");
}
```

### Profile 表单
```jsx
// _components/UpdateProfileForm.js
import { updateProfile } from "@/app/_lib/actions";

export default function UpdateProfileForm({ guest, children }) {
  return (
    <form action={updateProfile} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
      <div className="space-y-2">
        <label>Full name</label>
        <input disabled defaultValue={guest.fullName} name="fullName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400" />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input disabled defaultValue={guest.email} name="email" className="..." />
      </div>

      <div className="space-y-2">
        <label>Nationality</label>
        {children} {/* SelectCountry — Server Component */}
      </div>

      <div className="space-y-2">
        <label>National ID number</label>
        <input defaultValue={guest.nationalID} name="nationalID" className="..." />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
          Update profile
        </button>
      </div>
    </form>
  );
}
```

### 数据流
```
用户填表单 → Submit → FormData 发到服务器
→ Server Action 执行（验证 + 更新）
→ revalidatePath → 页面重新渲染
→ 用户看到更新后的数据
```

## English Short Summary

Profile update: form action binds Server Action. `formData.get()` for values. Auth check → input validation → `updateGuest()` → `revalidatePath()`. Complete secure mutation flow.
