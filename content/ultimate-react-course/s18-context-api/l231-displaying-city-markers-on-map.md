---
title: "Displaying City Markers on Map"
lectureId: 231
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, leaflet, markers, worldwise, context]
---

## 中文短总结

在地图上显示所有城市标记。用 useCities() 获取 cities，map 渲染 Marker + Popup。每个标记位于城市的 lat/lng 坐标。Context API 在这里展现价值 — Map 组件直接获取数据，不需要 props chain。

## 中文长总结

### 渲染标记
```jsx
function Map() {
  const { cities } = useCities();

  return (
    <MapContainer /* ... */>
      <TileLayer /* ... */ />
      {cities.map((city) => (
        <Marker
          position={[city.position.lat, city.position.lng]}
          key={city.id}
        >
          <Popup>
            <span>{city.emoji}</span>
            <span>{city.cityName}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
```

### Context 的价值
- Map 在组件树深处
- 不属于 CityList 的子组件
- 如果用 props 需要复杂传递
- Context 让 Map 直接获取 cities 数据

## English Short Summary

Display city markers on map using context. `useCities()` gives cities array. Map over cities → Marker at lat/lng + Popup with emoji/name. Context value: Map directly accesses data without complex prop threading.
