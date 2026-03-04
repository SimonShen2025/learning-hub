---
title: "Deleting a City"
lectureId: 236
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, crud, DELETE, worldwise]
---

## 中文短总结

实现删除城市功能。CityItem 的删除按钮 → 调用 context 的 `deleteCity(id)` → DELETE 请求到 API → 从本地 cities state 过滤掉该城市。比创建简单得多。

## 中文长总结

### deleteCity（Context 中）
```jsx
async function deleteCity(id) {
  try {
    setIsLoading(true);
    await fetch(`${BASE_URL}/cities/${id}`, { method: "DELETE" });
    setCities((cities) => cities.filter((city) => city.id !== id));
  } catch {
    alert("Error deleting city...");
  } finally {
    setIsLoading(false);
  }
}
```

### CityItem 中使用
```jsx
function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();

  function handleClick(e) {
    e.preventDefault(); // 阻止 Link 导航
    deleteCity(city.id);
  }

  return (
    <li>
      <Link to={`${city.id}?lat=...&lng=...`}>
        {city.cityName}
        <button className="deleteBtn" onClick={handleClick}>×</button>
      </Link>
    </li>
  );
}
```

### 要点
- `e.preventDefault()` 阻止删除按钮触发 Link 导航
- 调用 API 后用 filter 从本地数组移除
- CRUD 三操作（Read, Create, Delete）都通过 Context 管理

## English Short Summary

Delete city: button click → `deleteCity(id)` → DELETE API call → filter from local state. `e.preventDefault()` prevents Link navigation. Simple CRUD completion. All data operations managed through CitiesContext.
