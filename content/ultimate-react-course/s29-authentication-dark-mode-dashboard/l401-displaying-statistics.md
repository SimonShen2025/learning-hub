---
title: "Displaying Statistics"
lectureId: 401
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [statistics, dashboard, cards, calculations]
---

## 中文短总结

仪表盘统计卡片：预订数量、销售总额、入住数量、入住率。每个统计是 `Stat` 组件（图标 + 标题 + 数值 + 颜色）。入住率 = confirmed stays 天数 / (总天数 × 小木屋数)。

## 中文长总结

### Stats 组件
```jsx
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. 预订数
  const numBookings = bookings.length;

  // 2. 销售总额
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3. 入住数
  const checkins = confirmedStays.length;

  // 4. 入住率
  const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount);

  return (
    <>
      <Stat title="Bookings" color="blue" icon={<HiOutlineBriefcase />} value={numBookings} />
      <Stat title="Sales" color="green" icon={<HiOutlineBanknotes />} value={formatCurrency(sales)} />
      <Stat title="Check ins" color="indigo" icon={<HiOutlineCalendarDays />} value={checkins} />
      <Stat title="Occupancy rate" color="yellow" icon={<HiOutlineChartBar />} value={Math.round(occupation * 100) + "%"} />
    </>
  );
}
```

### Stat 组件
```jsx
function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}
```

## English Short Summary

Dashboard stats: 4 cards — Bookings count, Sales total (reduce), Check-ins count, Occupancy rate (stay nights / total capacity). Reusable `Stat` component with icon, title, value, color.
