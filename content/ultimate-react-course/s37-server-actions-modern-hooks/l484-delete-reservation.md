---
title: "Deleting a Reservation"
lectureId: 484
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [delete, server-action, reservation, authorization]
---

## 中文短总结

删除预订的 Server Action。验证用户权限（只能删除自己的预订）→ 删除数据库记录 → `revalidatePath`。用 `bind` 传递 `bookingId`。安全性：永远在 Server Action 中验证权限。

## 中文长总结

### Server Action
```js
// app/_lib/actions.js
"use server";

import { auth } from "./auth";
import { getBookings, deleteBooking } from "./data-service";
import { revalidatePath } from "next/cache";

export async function deleteReservation(bookingId) {
  // 1. 认证
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2. 授权（只能删除自己的预订）
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map(b => b.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to delete this booking");

  // 3. 删除
  await deleteBooking(bookingId);

  // 4. Revalidate
  revalidatePath("/account/reservations");
}
```

### DeleteReservation 组件
```jsx
// _components/DeleteReservation.js
"use client";

import { useTransition } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function DeleteReservation({ bookingId, onDelete }) {
  return (
    <button
      onClick={() => onDelete(bookingId)}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      <span className="mt-1">Delete</span>
    </button>
  );
}
```

### 在 ReservationList 中使用 bind
```jsx
"use client";
import { deleteReservation } from "@/app/_lib/actions";

export default function ReservationList({ bookings }) {
  function handleDelete(bookingId) {
    if (confirm("Are you sure?")) {
      deleteReservation(bookingId);
    }
  }

  return (
    <ul>
      {bookings.map(booking => (
        <ReservationCard
          key={booking.id}
          booking={booking}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
```

### 安全最佳实践
- 永远在 Server Action 中检查认证
- 永远检查授权（用户只能操作自己的数据）
- 不要信任客户端传来的数据
- bookingId 可以被伪造 → 必须验证所有权

## English Short Summary

Delete reservation: Server Action with auth + authorization check (user owns booking). `deleteBooking()` → `revalidatePath()`. Never trust client data — always verify ownership server-side. Confirm dialog before delete.
