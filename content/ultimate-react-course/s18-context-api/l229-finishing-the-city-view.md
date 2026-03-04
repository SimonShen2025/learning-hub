---
title: "Finishing the City View"
lectureId: 229
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, worldwise, city-detail]
---

## 中文短总结

用 Context 完成城市详情页。`getCity(id)` 函数 fetch 单个城市数据 → 存入 currentCity。City 组件用 useCities() 获取 currentCity 和 getCity 函数。useEffect 中根据 URL params 的 id 调用 getCity。

## 中文长总结

### getCity 函数
```jsx
// CitiesProvider 中
async function getCity(id) {
  try {
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/cities/${id}`);
    const data = await res.json();
    setCurrentCity(data);
  } catch {
    alert("Error loading city...");
  } finally {
    setIsLoading(false);
  }
}
```

### City 组件
```jsx
function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id]);

  if (isLoading) return <Spinner />;

  const { cityName, emoji, date, notes } = currentCity;
  return (
    <div>
      <h2>{emoji} {cityName}</h2>
      <p>You went to {cityName} on {formatDate(date)}</p>
      <p>{notes}</p>
    </div>
  );
}
```

### 数据流
1. URL 包含 city id（params）
2. City 组件从 URL 读取 id
3. useEffect 调用 getCity(id)
4. Context 更新 currentCity
5. City 组件重新渲染

## English Short Summary

Complete city detail view using Context. `getCity(id)` fetches single city → sets currentCity. City component reads id from useParams, calls getCity in useEffect. Data flows: URL params → getCity → context update → re-render.
