---
title: "Another Loading Indicator: The useTransition Hook"
lectureId: 485
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [useTransition, loading, pending, transition]
---

## 中文短总结

`useTransition` hook 用于在非表单操作中（如按钮 onClick 调用 Server Action）tracking loading 状态。`isPending` 布尔值 + `startTransition` 包裹异步操作。不阻塞 UI 更新。与 `useFormStatus` 的区别：不限于 form。

## 中文长总结

### useTransition
```jsx
"use client";

import { useTransition } from "react";

export default function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?")) {
      startTransition(() => onDelete(bookingId));
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      {isPending ? (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      ) : (
        <>
          <TrashIcon className="h-5 w-5" />
          <span>Delete</span>
        </>
      )}
    </button>
  );
}
```

### useTransition vs useFormStatus
| `useFormStatus` | `useTransition` |
|----------------|----------------|
| 只在 `<form>` 子组件中 | 任何地方 |
| 自动追踪 form 提交 | 手动包裹操作 |
| `pending` | `isPending` + `startTransition` |
| 不需要调用 | 需要 `startTransition(fn)` |

### startTransition 的作用
```jsx
// 不用 startTransition → UI 冻结直到操作完成
onClick={() => deleteReservation(id)} // ❌ 可能冻结

// 用 startTransition → UI 保持响应
onClick={() => startTransition(() => deleteReservation(id))} // ✅
```

### 使用场景
- 删除按钮（不在 form 中）
- 状态切换（toggle）
- 任何按钮触发的 Server Action
- 需要 loading 状态但不是 form 的场景

## English Short Summary

`useTransition`: `[isPending, startTransition]` for non-form Server Action loading states. Wraps async operation in `startTransition()`. UI stays responsive. Unlike `useFormStatus`, works anywhere, not just in forms.
