---
title: "Adding Optional Breakfast"
lectureId: 386
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [breakfast, check-in, optional, pricing]
---

## 中文短总结

Check-in 时可选择加购早餐。添加 checkbox 让员工确认客人是否要加早餐。勾选后重新计算总价（早餐价 × 人数 × 天数）。将 `hasBreakfast`、`extrasPrice`、`totalPrice` 更新到数据库。

## 中文长总结

### 实现
```jsx
function CheckinBooking() {
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking } = useBooking();
  const { settings } = useSettings();

  const { numNights, numGuests, totalPrice, hasBreakfast } = booking;
  const optionalBreakfastPrice = settings.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((a) => !a);
              setConfirmPaid(false); // 价格变了需要重新确认
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox checked={confirmPaid} onChange={() => setConfirmPaid((c) => !c)}>
          Confirm payment of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(totalPrice + optionalBreakfastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakfastPrice)})`}
        </Checkbox>
      </Box>
    </>
  );
}
```

### 要点
- 早餐只能在 check-in 时加购
- 切换早餐选项后需要重新确认付款
- 已有早餐的预订不显示加购选项
- 价格 = breakfastPrice × numNights × numGuests

## English Short Summary

Optional breakfast at check-in: checkbox to add breakfast. Price = `breakfastPrice × numNights × numGuests`. Updates `hasBreakfast`, `extrasPrice`, `totalPrice` in booking. Toggleing breakfast resets payment confirmation.
