---
title: "Displaying a Loading Indicator: The useFormStatus Hook"
lectureId: 482
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [useFormStatus, loading, pending, form]
---

## 中文短总结

`useFormStatus` hook 获取表单提交状态。`pending` 属性表示是否正在提交。用于禁用按钮和显示 loading 文本。必须在 `<form>` 的**子组件**中使用（不能在 form 同级组件）。React 19 新 hook。

## 中文长总结

### useFormStatus
```jsx
// _components/SubmitButton.js
"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
```

### 在表单中使用
```jsx
// UpdateProfileForm.js
import SubmitButton from "./SubmitButton";

export default function UpdateProfileForm({ guest }) {
  return (
    <form action={updateProfile}>
      {/* 表单字段 */}
      <SubmitButton pendingLabel="Updating...">
        Update profile
      </SubmitButton>
    </form>
  );
}
```

### useFormStatus 返回值
```js
const { pending, data, method, action } = useFormStatus();

// pending: boolean — 是否正在提交
// data: FormData | null — 提交的数据
// method: string — HTTP 方法
// action: function — 正在执行的 action
```

### 关键规则
```
❌ 错误：在 form 同级使用
function Form() {
  const { pending } = useFormStatus(); // 不工作！
  return <form action={...}>...</form>;
}

✅ 正确：在 form 的子组件中使用
function SubmitButton() {
  const { pending } = useFormStatus(); // ✅ 工作
  return <button disabled={pending}>Submit</button>;
}

function Form() {
  return (
    <form action={...}>
      <SubmitButton />  {/* 在 form 内部 */}
    </form>
  );
}
```

### 常见用法
- 禁用提交按钮（防止重复提交）
- 显示"Saving..."文本
- 显示 Spinner
- 禁用表单字段

## English Short Summary

`useFormStatus` hook: `pending` boolean for form submission state. Disable button + show loading text. Must be in a child component of `<form>`, not sibling. Reusable SubmitButton pattern.
