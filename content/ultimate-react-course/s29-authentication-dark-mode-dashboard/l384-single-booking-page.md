---
title: "Building the Single Booking Page"
lectureId: 384
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [booking, detail-page, useParams, navigation]
---

## 中文短总结

构建预订详情页。通过 Context Menu 的 "See details" 导航到 `/bookings/:bookingId`。`useBooking` 根据 `useParams` 获取单个预订。显示完整信息：客人、日期、金额、状态、备注。

## 中文长总结

### useBooking Hook
```jsx
export function useBooking() {
  const { bookingId } = useParams();

  const { isLoading, data: booking, error } = useQuery({
    queryKey: ["booking", Number(bookingId)],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { isLoading, booking, error };
}
```

### API
```js
export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) throw new Error("Booking not found");
  return data;
}
```

### 详情页面
```jsx
function Booking() {
  const { booking, isLoading } = useBooking();
  const { status, id: bookingId } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        <Button variation="secondary" onClick={moveBack}>Back</Button>
      </ButtonGroup>
    </>
  );
}
```

## English Short Summary

Single booking page: navigate via context menu to `/bookings/:id`. `useBooking` fetches with `useParams`. Full detail display: guest info, cabin, dates, amount, status tag. Action buttons based on status (Check in for unconfirmed).
