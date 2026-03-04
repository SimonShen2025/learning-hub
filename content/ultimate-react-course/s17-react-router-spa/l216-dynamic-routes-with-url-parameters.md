---
title: "Dynamic Routes With URL Parameters"
lectureId: 216
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, react-router, useParams, dynamic-routes]
---

## 中文短总结

动态路由：`path="cities/:id"` 中 `:id` 是动态参数。用 `useParams()` 在组件中获取参数值。CityItem 链接到 `/app/cities/${id}`。City 组件用 useParams 获取 id → fetch 详情数据。

## 中文长总结

### 定义动态路由
```jsx
<Route path="cities/:id" element={<City />} />
```

### 创建链接
```jsx
// CityItem.jsx
<Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
  {cityName}
</Link>
```

### 读取参数
```jsx
// City.jsx
import { useParams } from "react-router-dom";

function City() {
  const { id } = useParams(); // 从 URL 获取 id

  useEffect(() => {
    async function getCity() {
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      setCity(data);
    }
    getCity();
  }, [id]);

  return <div>{/* 城市详情 */}</div>;
}
```

### 流程
1. 用户点击 CityItem
2. URL 变为 `/app/cities/73723`
3. React Router 匹配 `cities/:id`
4. 渲染 City 组件
5. useParams() 返回 `{ id: "73723" }`
6. fetch 该城市详情

## English Short Summary

Dynamic routes: `path="cities/:id"` with `:id` parameter. `useParams()` extracts values in component. CityItem links to `/app/cities/${id}`. City component reads id with useParams, fetches details. URL params always returned as strings.
