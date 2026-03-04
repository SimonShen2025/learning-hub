---
title: "Checking In a Booking"
lectureId: 385
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [check-in, booking, mutation, status-update]
---

## 中文短总结

Check-in 页面：确认客人已付款 → 将预订状态改为 "checked-in" + 标记 `isPaid: true`。用独立的 CheckinBooking 页面，包含确认支付的 checkbox。`useCheckin` mutation 更新状态。

## 中文长总结

### useCheckin Hook
```jsx
export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: () => toast.error("There was an error while checking in"),
  });

  return { checkin, isCheckingIn };
}
```

### Check-in 页面
```jsx
function CheckinBooking() {
  const { booking, isLoading } = useBooking();
  const { checkin, isCheckingIn } = useCheckin();
  const [confirmPaid, setConfirmPaid] = useState(false);

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const { id: bookingId, guests, totalPrice, isPaid } = booking;

  function handleCheckin() {
    if (!confirmPaid) return;
    checkin({ bookingId });
  }

  return (
    <>
      <BookingDataBox booking={booking} />
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((c) => !c)}
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          I confirm that {guests.fullName} has paid {formatCurrency(totalPrice)}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
      </ButtonGroup>
    </>
  );
}
```

### 关键点
- 必须先确认付款才能 check-in
- 已付款的预订 checkbox 默认勾选 + disabled
- 成功后 invalidate 所有活跃 query → 导航到首页

## English Short Summary

Check-in page: confirm payment checkbox → update booking status to "checked-in" + `isPaid: true`. `useCheckin` mutation with `invalidateQueries({ active: true })`. Navigate to dashboard on success. Payment confirmation required.
