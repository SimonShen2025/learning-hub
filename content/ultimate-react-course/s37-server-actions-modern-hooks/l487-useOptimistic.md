---
title: "Removing Reservations Immediately: The useOptimistic Hook"
lectureId: 487
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [useOptimistic, optimistic-update, ui, react]
---

## 中文短总结

`useOptimistic` hook 实现乐观更新。删除预订时立即从 UI 移除（不等服务器响应）。如果服务器操作失败 → 自动回滚。提供更流畅的用户体验。React 19 新 hook。

## 中文长总结

### useOptimistic
```jsx
// _components/ReservationList.js
"use client";

import { useOptimistic } from "react";
import { deleteReservation } from "@/app/_lib/actions";
import ReservationCard from "./ReservationCard";

export default function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter(booking => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    // 1. 立即从 UI 移除
    optimisticDelete(bookingId);
    // 2. 服务器操作（后台执行）
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map(booking => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
```

### useOptimistic API
```js
const [optimisticState, addOptimistic] = useOptimistic(
  actualState,       // 真实数据（来自 props/server）
  updateFn           // (currentState, optimisticValue) => newOptimisticState
);
```

### 工作流程
```
1. 用户点击删除
2. optimisticDelete(bookingId) → 立即从列表移除 ✅
3. deleteReservation(bookingId) → 服务器执行

成功路径：
4. 服务器删除成功 → revalidatePath → 新数据确认删除

失败路径：
4. 服务器删除失败 → 乐观更新自动回滚 → 项目恢复
```

### useOptimistic vs 手动状态
```
手动方式：
1. 设置 loading
2. 调用 API
3. 等响应
4. 更新状态
5. 取消 loading

useOptimistic：
1. 立即更新 UI
2. 调用 API（后台）
3. 自动回滚或确认
```

### 适用场景
- 删除列表项
- 添加评论/回复
- 点赞/取消点赞
- 标记完成/未完成
- 任何需要即时反馈的操作

## English Short Summary

`useOptimistic`: optimistic UI updates. Remove item from list immediately, server action runs in background. Auto-rollback on failure. `useOptimistic(state, reducerFn)` → `[optimisticState, addOptimistic]`. React 19.
