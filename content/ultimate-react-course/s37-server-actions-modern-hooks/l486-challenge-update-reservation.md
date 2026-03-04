---
title: "CHALLENGE #1: Updating a Reservation"
lectureId: 486
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [challenge, update, reservation, server-action]
---

## 中文短总结

练习挑战：实现预订更新功能。创建编辑页面 `/account/reservations/edit/[bookingId]`。Server Action 处理表单提交。`bind` 传递 bookingId。验证权限 + 更新数据 + revalidate 缓存。

## 中文长总结

### 编辑页面
```jsx
// app/account/reservations/edit/[bookingId]/page.js
import { getBooking, getCabin } from "@/app/_lib/data-service";
import { updateReservation } from "@/app/_lib/actions";
import SubmitButton from "@/app/_components/SubmitButton";

export default async function Page({ params }) {
  const { bookingId } = params;
  const booking = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(booking.cabinId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form action={updateReservation} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <input type="hidden" name="bookingId" value={bookingId} />

        <div className="space-y-2">
          <label>How many guests?</label>
          <select name="numGuests" defaultValue={booking.numGuests} className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm">
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(x => (
              <option value={x} key={x}>{x} {x === 1 ? "guest" : "guests"}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label>Anything we should know about your stay?</label>
          <textarea name="observations" defaultValue={booking.observations} className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm" />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating...">Update reservation</SubmitButton>
        </div>
      </form>
    </div>
  );
}
```

### Server Action
```js
export async function updateReservation(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const bookingId = Number(formData.get("bookingId"));

  // 授权检查
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map(b => b.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error("You are not allowed to update this booking");

  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  await updateBooking(bookingId, updateData);

  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}
```

## English Short Summary

Update reservation challenge: edit page at `/account/reservations/edit/[bookingId]`. Form with numGuests select + observations textarea. Server Action: auth → authorize → update → revalidate → redirect.
