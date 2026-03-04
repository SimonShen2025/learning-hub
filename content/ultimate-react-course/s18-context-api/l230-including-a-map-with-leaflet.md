---
title: "Including a Map With the Leaflet Library"
lectureId: 230
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, leaflet, react-leaflet, map, worldwise]
---

## 中文短总结

用 Leaflet + react-leaflet 添加互动地图。安装 `react-leaflet leaflet`。核心组件：MapContainer、TileLayer、Marker、Popup。MapContainer 设置初始中心点和缩放级别。TileLayer 使用 OpenStreetMap 图层。

## 中文长总结

### 安装
```bash
npm i react-leaflet leaflet
```

### 基本地图
```jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>A marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
```

### 注意事项
- 必须导入 Leaflet CSS（全局或在组件中）
- MapContainer 需要固定高度
- center 只在创建时生效（后续移动用其他方式）
- react-leaflet 是 Leaflet 的 React 绑定

## English Short Summary

Add interactive map with Leaflet + react-leaflet. Install both packages. Core components: MapContainer (center, zoom), TileLayer (OpenStreetMap), Marker, Popup. Must import Leaflet CSS. MapContainer needs fixed height. Center only applies on initial render.
