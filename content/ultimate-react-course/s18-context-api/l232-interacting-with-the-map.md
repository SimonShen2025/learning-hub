---
title: "Interacting With the Map"
lectureId: 232
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, leaflet, react-leaflet, map-events, worldwise]
---

## 中文短总结

地图交互：点击城市列表项 → 地图移动到该城市位置。用 react-leaflet 的 `useMap()` hook 和自定义 ChangeCenter 组件。地图位置同步来自 URL query string（lat/lng）。useMapEvents 监听地图点击事件。

## 中文长总结

### 动态改变地图中心
```jsx
// 自定义组件：改变地图位置
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null; // 不渲染任何 UI
}

// 在 MapContainer 内使用
<MapContainer>
  <ChangeCenter position={mapPosition} />
</MapContainer>
```

### 从 URL 读取位置
```jsx
const [searchParams] = useSearchParams();
const mapLat = searchParams.get("lat");
const mapLng = searchParams.get("lng");

useEffect(() => {
  if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
}, [mapLat, mapLng]);
```

### 监听地图点击
```jsx
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}
```

### 流程
- 点击列表项 → URL query string 更新 → 地图移动
- 点击地图 → 导航到 form 页面并传递坐标

## English Short Summary

Map interaction: click city list item → map moves (via URL query string sync). Custom ChangeCenter component uses `useMap()` to set view. DetectClick uses `useMapEvents` to navigate to form with lat/lng on map click.
