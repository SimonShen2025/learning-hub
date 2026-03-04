---
title: "Checking Out a Booking (+ Fixing a Small Bug)"
lectureId: 387
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [check-out, booking, mutation, bug-fix]
---

## 中文短总结

Check-out 比 check-in 简单：点击按钮 → 状态改为 "checked-out"。不需要单独页面，直接在预订详情或表格行的 context menu 中操作。修复一个小 bug：BookingDataBox 中日期格式问题。

## 中文长总结

### useCheckout Hook
```jsx
export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-out" }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while checking out"),
  });

  return { checkout, isCheckingOut };
}
```

### 在 Context Menu 中使用
```jsx
{status === "checked-in" && (
  <Menus.Button
    icon={<HiArrowUpOnSquare />}
    onClick={() => checkout(bookingId)}
    disabled={isCheckingOut}
  >
    Check out
  </Menus.Button>
)}
```

### 在详情页使用
```jsx
{status === "checked-in" && (
  <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
    Check out
  </Button>
)}
```

## English Short Summary

Check-out: simple status update to "checked-out". No separate page needed. Available in context menu and booking detail page (only for "checked-in" bookings). `useCheckout` mutation with cache invalidation.
