---
title: "Displaying Stays for Current Day"
lectureId: 404
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [today-activity, check-in, check-out, dashboard]
---

## 中文短总结

显示当天到达和离开的客人。`useTodayActivity` 获取今天 startDate 或 endDate 匹配的预订。区分待入住（unconfirmed）和待退房（checked-in）。按钮直接跳转到 check-in/check-out 操作。

## 中文长总结

### useTodayActivity Hook
```jsx
export function useTodayActivity() {
  const { isLoading, data: activities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });
  return { activities, isLoading };
}
```

### API
```js
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  return data;
}
```

### TodayActivity 组件
```jsx
function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>
      {activities?.length > 0 ? (
        <TodayList>
          {activities.map((activity) => (
            <TodayItem activity={activity} key={activity.id} />
          ))}
        </TodayList>
      ) : (
        <NoActivity>No activity today...</NoActivity>
      )}
    </StyledToday>
  );
}
```

### TodayItem
- `unconfirmed` → "Arriving" 标签 + Check in 按钮
- `checked-in` → "Departing" 标签 + Check out 按钮
- 显示国旗、客人姓名、入住天数

## English Short Summary

Today's activity: arrivals (unconfirmed + today's startDate) and departures (checked-in + today's endDate). Supabase `.or()` filter. TodayItem shows guest info + action button (check-in or check-out).
