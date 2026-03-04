---
title: "Building the Dashboard Layout"
lectureId: 399
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [dashboard, layout, grid, components]
---

## 中文短总结

仪表盘布局。用 CSS Grid 四列布局：统计卡片行 + 折线图 + 饼图 + 当日活动。`DashboardLayout` 组件获取最近预订和入住数据，传给子组件。过滤器选择时间范围（7/30/90 天）。

## 中文长总结

### Dashboard 页面
```jsx
function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}
```

### DashboardLayout
```jsx
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length} />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
```

### DashboardFilter
```jsx
<Filter
  filterField="last"
  options={[
    { value: "7", label: "Last 7 days" },
    { value: "30", label: "Last 30 days" },
    { value: "90", label: "Last 90 days" },
  ]}
/>
```

## English Short Summary

Dashboard layout: CSS Grid 4-column layout. Stats row + line chart + pie chart + today's activity. `DashboardFilter` for 7/30/90 day ranges. Three data hooks: recent bookings, confirmed stays, cabins.
