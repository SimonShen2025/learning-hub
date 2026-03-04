---
title: "Implementing the Cities List"
lectureId: 213
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, data-fetching, json-server, city-list]
---

## 中文短总结

从 fake API 加载城市数据并渲染列表。用 json-server 搭建 API（cities.json）。在 App 中 useEffect + fetch 获取数据。通过 props 传递 cities 和 isLoading 给 CityList。CityItem 渲染每个城市卡片。

## 中文长总结

### Fake API
```bash
npx json-server --watch data/cities.json --port 8000 --delay 500
```

### 数据获取（App 组件）
```jsx
const [cities, setCities] = useState([]);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  async function fetchCities() {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:8000/cities");
      const data = await res.json();
      setCities(data);
    } catch { /* ... */ }
    finally { setIsLoading(false); }
  }
  fetchCities();
}, []);
```

### CityList 组件
```jsx
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
```

### 数据结构
```json
{ "id": 1, "cityName": "Lisbon", "country": "Portugal",
  "emoji": "🇵🇹", "date": "2027-10-31", "notes": "...",
  "position": { "lat": 38.727, "lng": -9.14 } }
```

## English Short Summary

Load cities from fake API (json-server). useEffect + fetch in App, pass cities & isLoading to CityList via props. CityList maps over cities → CityItem cards. Each city has name, country, emoji, date, notes, position (lat/lng).
