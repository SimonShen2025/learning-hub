---
title: "CHALLENGE #1: useGeolocate"
lectureId: 173
section: 13
sectionTitle: "Custom Hooks, Refs, and More State"
date: "2026-03-04"
tags: [react, challenge, custom-hooks, geolocation]
---

## 中文短总结

挑战：创建 `useGeolocation()` 自定义 Hook。封装浏览器 Geolocation API。管理 position、isLoading、error state。返回 `{ position, isLoading, error, getPosition }`。调用 `getPosition()` 获取当前位置。综合实践自定义 Hook 模式。

## 中文长总结

### 实现
```jsx
function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
  const countRef = useRef(0);

  function getPosition() {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation");
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setIsLoading(false);
        countRef.current++;
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

### 使用
```jsx
const { isLoading, position, error, getPosition } = useGeolocation();

<button onClick={getPosition}>Get my position</button>
{position.lat && <p>Lat: {position.lat}, Lng: {position.lng}</p>}
```

### 练习要点
- 返回函数（不只是数据）
- useRef 存储请求次数（不触发渲染）
- 错误处理

## English Short Summary

Challenge: `useGeolocation()` custom hook encapsulating browser Geolocation API. Manages position, isLoading, error state. Returns `{isLoading, position, error, getPosition}`. Uses useRef to count requests without re-rendering. Comprehensive custom hook practice.
