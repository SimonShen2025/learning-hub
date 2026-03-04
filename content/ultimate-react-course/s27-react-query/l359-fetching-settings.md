---
title: "Fetching Applications Settings"
lectureId: 359
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, settings, useQuery, supabase]
---

## 中文短总结

用 React Query 获取应用设置。`useSettings` 自定义 hook 获取 settings 表的单行数据。Settings 页面显示最小/最大预订天数、每次最多客人数、早餐价格四个字段。

## 中文长总结

### API
```js
export async function getSettings() {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .single();
  if (error) throw new Error("Settings could not be loaded");
  return data;
}
```

### 自定义 Hook
```js
export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, error, settings };
}
```

### 使用
```jsx
function UpdateSettingsForm() {
  const { isLoading, settings } = useSettings();

  if (isLoading) return <Spinner />;

  const { minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice } = settings;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <input type="number" defaultValue={minBookingLength} id="min-nights" />
      </FormRow>
      {/* ... other fields */}
    </Form>
  );
}
```

## English Short Summary

Fetch app settings with React Query: `useSettings` custom hook wraps `useQuery`. Single row from settings table. Display min/max booking length, max guests, breakfast price. Same pattern as cabins.
