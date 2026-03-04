---
title: "Creating a New Reservation"
lectureId: 489
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [create-reservation, form, server-action, bind]
---

## 中文短总结

创建新预订。ReservationForm 收集 guests 数量和备注。通过 `bind` 预绑定 cabin 和日期数据到 Server Action。Action 中组合所有数据 → 创建预订 → revalidate → redirect。完整的 CRUD 闭环。

## 中文长总结

### ReservationForm
```jsx
// _components/ReservationForm.js
"use client";

import { useReservation } from "./ReservationContext";
import { createReservation } from "@/app/_lib/actions";
import SubmitButton from "./SubmitButton";
import { differenceInDays } from "date-fns";

export default function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id: cabinId } = cabin;

  const startDate = range?.from;
  const endDate = range?.to;
  const numNights = differenceInDays(endDate, startDate);

  // 用 bind 预绑定数据
  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice: numNights * (regularPrice - discount),
    cabinId,
  };

  const createReservationWithData = createReservation.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>
        <div className="flex gap-4 items-center">
          <img referrerPolicy="no-referrer" className="h-8 rounded-full" src={user.image} alt={user.name} />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createReservationWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label>How many guests?</label>
          <select name="numGuests" className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm" required>
            <option value="">Select number of guests...</option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(x => (
              <option value={x} key={x}>{x} {x === 1 ? "guest" : "guests"}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label>Anything we should know about your stay?</label>
          <textarea name="observations" className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm" />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">Start by selecting dates</p>
          ) : (
            <SubmitButton pendingLabel="Reserving...">Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}
```

### Server Action
```js
export async function createReservation(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  await createBooking(newBooking);

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}
```

### bind 模式
```js
// 用 bind 预绑定额外数据（不来自表单的数据）
const createReservationWithData = createReservation.bind(null, bookingData);
// createReservation(bookingData, formData) ← formData 自动传入
```

## English Short Summary

Create reservation: ReservationForm collects guests + observations. `bind()` pre-binds cabin/date data to Server Action. Action combines all data → create booking → revalidate → redirect. Complete CRUD cycle.
