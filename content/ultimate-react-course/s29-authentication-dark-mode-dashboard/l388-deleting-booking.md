---
title: "Deleting a Booking"
lectureId: 388
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [delete, booking, mutation, confirmation]
---

## 中文短总结

删除预订：Context Menu 中添加 Delete 按钮 → 弹出确认 Modal → 确认后执行删除 mutation。复用 `ConfirmDelete` 组件和 Modal compound component。`useDeleteBooking` 新 hook。

## 中文长总结

### useDeleteBooking Hook
```jsx
export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}
```

### 在 BookingRow 中
```jsx
<Modal.Open opens="delete">
  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
</Modal.Open>
<Modal.Window name="delete">
  <ConfirmDelete
    resourceName="booking"
    disabled={isDeleting}
    onConfirm={() => deleteBooking(bookingId)}
  />
</Modal.Window>
```

### 在详情页中
```jsx
<Modal>
  <Modal.Open opens="delete">
    <Button variation="danger">Delete booking</Button>
  </Modal.Open>
  <Modal.Window name="delete">
    <ConfirmDelete
      resourceName="booking"
      disabled={isDeleting}
      onConfirm={() => {
        deleteBooking(bookingId, { onSettled: () => navigate(-1) });
      }}
    />
  </Modal.Window>
</Modal>
```

## English Short Summary

Delete booking: context menu or detail page trigger. `ConfirmDelete` modal for confirmation. `useDeleteBooking` mutation. Detail page navigates back on settled. Reuses existing Modal compound component.
