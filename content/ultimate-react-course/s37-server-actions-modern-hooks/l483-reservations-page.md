---
title: "Building the Guest's Reservations Page"
lectureId: 483
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [reservations, list, guest, server-component]
---

## 中文短总结

构建用户预订列表页。Server Component 获取当前用户的预订（通过 `session.user.guestId`）。展示每个预订的 cabin 信息、日期、价格。提供编辑和删除按钮。日期格式化用 `date-fns` 或 `Intl`。

## 中文长总结

### 预订列表页
```jsx
// app/account/reservations/page.js
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import ReservationList from "@/app/_components/ReservationList";

export const metadata = { title: "Reservations" };

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet.
          Check out our <a href="/cabins" className="underline text-accent-500">luxury cabins &rarr;</a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
```

### 预订卡片
```jsx
// _components/ReservationCard.js
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export default function ReservationCard({ booking, onDelete }) {
  const { id, startDate, endDate, numNights, totalPrice, numGuests, created_at, cabins: { name, image } } = booking;

  return (
    <div className="flex border border-primary-800">
      <div className="relative h-32 aspect-square">
        <Image src={image} alt={`Cabin ${name}`} fill className="object-cover border-r border-primary-800" />
      </div>

      <div className="flex-grow px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>

          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">past</span>
          ) : (
            <span className="bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm">upcoming</span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {format(parseISO(startDate), "EEE, MMM dd yyyy")} &mdash;{" "}
          {format(parseISO(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline">
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-primary-300">&bull; {numGuests} guest{numGuests > 1 && "s"}</p>
          <p className="ml-auto text-sm text-primary-400">
            Booked {format(parseISO(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l border-primary-800 w-[100px]">
        {!isPast(startDate) && (
          <>
            <Link href={`/account/reservations/edit/${id}`} className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900">
              Edit
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        )}
      </div>
    </div>
  );
}
```

## English Short Summary

Reservations page: auth → get bookings by guestId → display list. ReservationCard shows cabin image, dates, price, guests. Past/upcoming badges. Edit/Delete buttons for upcoming reservations. `date-fns` for formatting.
