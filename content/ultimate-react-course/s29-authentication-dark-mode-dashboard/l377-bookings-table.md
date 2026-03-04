---
title: "Building the Bookings Table"
lectureId: 377
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [bookings, table, supabase, useQuery]
---

## 中文短总结

构建预订表格。从 Supabase 获取 bookings 数据（关联 cabins 和 guests 表）。用已有的 Table compound component 展示。BookingRow 显示入住信息、状态标签（unconfirmed/checked-in/checked-out）。

## 中文长总结

### API 获取关联数据
```js
export async function getBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select("id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)");

  if (error) throw new Error("Bookings could not be loaded");
  return data;
}
```

### 状态标签
```jsx
const statusToTagName = {
  unconfirmed: "blue",
  "checked-in": "green",
  "checked-out": "silver",
};

<Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
```

### BookingRow
```jsx
function BookingRow({ booking }) {
  const { id, startDate, endDate, numNights, totalPrice, status,
    guests: { fullName, email }, cabins: { name: cabinName } } = booking;

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>
      <Stacked>
        <span>{fullName}</span>
        <span>{email}</span>
      </Stacked>
      <Stacked>
        <span>{isToday(new Date(startDate)) ? "Today" : formatDistanceFromNow(startDate)}</span>
        <span>{format(new Date(startDate), "MMM dd yyyy")} — {format(new Date(endDate), "MMM dd yyyy")}</span>
      </Stacked>
      <Tag type={statusToTagName[status]}>{status}</Tag>
      <Amount>{formatCurrency(totalPrice)}</Amount>
    </Table.Row>
  );
}
```

## English Short Summary

Bookings table: Supabase query with `select` for related cabins/guests. Reuse Table compound component. BookingRow shows cabin, guest info, dates, status tag (color-coded), total price. Date formatting with date-fns.
