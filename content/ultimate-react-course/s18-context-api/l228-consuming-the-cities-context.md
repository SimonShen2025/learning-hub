---
title: "Consuming the CitiesContext"
lectureId: 228
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, worldwise, useCities]
---

## 中文短总结

创建 `useCities()` 自定义 Hook 消费 CitiesContext。CityList、CountryList、Map 等组件用 useCities() 获取 cities 和 isLoading。删除了所有 props drilling。组件更独立，不依赖父组件传递数据。

## 中文长总结

### 自定义 Hook
```jsx
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("useCities must be used within a CitiesProvider");
  return context;
}
```

### 使用示例
```jsx
// CityList.jsx
function CityList() {
  const { cities, isLoading } = useCities();
  // 不再需要 props！
  if (isLoading) return <Spinner />;
  return (
    <ul>{cities.map(city => <CityItem city={city} key={city.id} />)}</ul>
  );
}

// Map.jsx
function Map() {
  const { cities } = useCities();
  // 直接获取数据
}
```

### 重构效果
- App.jsx 不再传递 cities、isLoading props
- 中间层组件（AppLayout、Sidebar）不再做 props 传递
- 每个消费组件按需获取数据

## English Short Summary

Create `useCities()` hook to consume CitiesContext. CityList, CountryList, Map use hook directly — no more props. Removed all prop drilling. Components self-contained, fetch data independently via context.
