---
title: "Displaying a Line Chart With the Recharts Library"
lectureId: 402
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [recharts, line-chart, sales, visualization]
---

## 中文短总结

用 Recharts 库绘制销售折线图。`AreaChart` 显示每日总销售额和额外费用（早餐）。按日期聚合数据 → 传入 chart。支持暗色模式（动态颜色）。Tooltip 显示详细信息。

## 中文长总结

### 安装
```bash
npm install recharts
```

### SalesChart 组件
```jsx
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => ({
    label: format(date, "MMM dd"),
    totalSales: bookings
      .filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce((acc, cur) => acc + cur.totalPrice, 0),
    extrasSales: bookings
      .filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce((acc, cur) => acc + cur.extrasPrice, 0),
  }));

  const colors = isDarkMode
    ? { totalSales: { stroke: "#4f46e5", fill: "#4f46e5" }, extrasSales: { stroke: "#22c55e", fill: "#22c55e" }, text: "#e5e7eb", background: "#18212f" }
    : { totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" }, extrasSales: { stroke: "#16a34a", fill: "#dcfce7" }, text: "#374151", background: "#fff" };

  return (
    <StyledSalesChart>
      <Heading as="h2">Sales from {format(allDates.at(0), "MMM dd yyyy")} — {format(allDates.at(-1), "MMM dd yyyy")}</Heading>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis dataKey="label" tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
          <YAxis unit="$" tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area dataKey="totalSales" type="monotone" stroke={colors.totalSales.stroke} fill={colors.totalSales.fill} strokeWidth={2} name="Total sales" unit="$" />
          <Area dataKey="extrasSales" type="monotone" stroke={colors.extrasSales.stroke} fill={colors.extrasSales.fill} strokeWidth={2} name="Extras sales" unit="$" />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}
```

### 关键点
- `eachDayOfInterval` 生成日期范围
- 按日期聚合 bookings 数据
- `ResponsiveContainer` 自适应宽度
- 暗色模式动态切换颜色

## English Short Summary

Recharts `AreaChart` for sales over time. Aggregate bookings by day with `eachDayOfInterval`. Two areas: total sales + extras. Dark mode color switching. `ResponsiveContainer` for responsive width. Tooltip for details.
