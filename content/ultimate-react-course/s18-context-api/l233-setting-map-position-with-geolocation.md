---
title: "Setting Map Position With Geolocation"
lectureId: 233
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, geolocation, custom-hook, worldwise]
---

## 中文短总结

用 Geolocation API 定位用户。复用之前写的 `useGeolocation` 自定义 Hook。按钮点击获取当前位置 → 更新地图中心。展示 custom hook 的可复用性 — 直接从之前项目拿来用。

## 中文长总结

### useGeolocation Hook（复用）
```jsx
function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
```

### 在 Map 中使用
```jsx
function Map() {
  const { isLoading: isLoadingPosition, position: geoPosition, getPosition } =
    useGeolocation();

  useEffect(() => {
    if (geoPosition)
      setMapPosition([geoPosition.lat, geoPosition.lng]);
  }, [geoPosition]);

  return (
    <>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Use your position"}
      </Button>
      <MapContainer>...</MapContainer>
    </>
  );
}
```

## English Short Summary

Geolocation for map: reuse `useGeolocation` custom hook. Button click → get position → update map center. Demonstrates hook reusability — same hook from earlier project works here directly.
