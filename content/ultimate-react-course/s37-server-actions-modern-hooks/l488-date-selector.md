---
title: "Back to the Cabin Page: Finishing the Date Selector"
lectureId: 488
section: 37
sectionTitle: "Mutations With Server Actions + Modern React Hooks"
date: "2026-03-05"
tags: [date-selector, date-picker, react-day-picker, cabin]
---

## 中文短总结

完善日期选择器。使用 `react-day-picker` 库。禁用已预订日期和过去日期。选择日期范围（from/to）。通过 ReservationContext 共享选中的日期范围。计算住宿天数和总价。

## 中文长总结

### DateSelector 组件
```jsx
// _components/DateSelector.js
"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";
import { differenceInDays, isPast, isSameDay, isWithinInterval } from "date-fns";

export default function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const { regularPrice, discount } = cabin;
  const { minBookingLength, maxBookingLength } = settings;

  // 禁用的日期
  const disabledDays = [
    ...bookedDates,
    { before: new Date() }, // 过去的日期
  ];

  // 计算天数和价格
  const numNights = differenceInDays(range.to, range.from);
  const cabinPrice = numNights * (regularPrice - discount);

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        selected={range}
        onSelect={setRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        disabled={disabledDays}
        captionLayout="dropdown"
        numberOfMonths={2}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">${regularPrice}</span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span>/night</span>
          </p>
          {numNights ? (
            <p className="bg-accent-600 px-3 py-2 text-2xl">
              <span>&times;</span> <span>{numNights}</span>
              <span className="text-lg font-bold uppercase"> total ${cabinPrice}</span>
            </p>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button className="border border-primary-800 py-2 px-4 text-sm font-semibold" onClick={resetRange}>
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
```

### 关键点
- `react-day-picker` — 日历 UI 库
- `mode="range"` — 选择日期范围
- `disabled` — 禁用已预订日期
- `min/max` — 最少/最多住宿天数
- Context 共享 → ReservationForm 可以获取选中的日期

## English Short Summary

DateSelector: `react-day-picker` with range mode. Disable booked dates + past dates. Min/max booking length. Context shares selected range with ReservationForm. Calculate nights and total price.
