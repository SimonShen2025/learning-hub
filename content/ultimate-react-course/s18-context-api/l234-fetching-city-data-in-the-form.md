---
title: "Fetching City Data in the Form"
lectureId: 234
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, data-fetching, reverse-geocoding, form, worldwise]
---

## 中文短总结

表单中根据点击坐标反向地理编码获取城市信息。用 BigDataCloud API（免费）将 lat/lng → 城市名、国家。自动填充表单的城市名和国名字段。处理无效位置（海洋等）显示错误提示。

## 中文长总结

### 反向地理编码
```jsx
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    async function fetchCityData() {
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError("");
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json();

        if (!data.countryCode)
          throw new Error("That doesn't seem to be a city. Click somewhere else 😊");

        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }

    if (lat && lng) fetchCityData();
  }, [lat, lng]);
}
```

### 流程
1. 用户在地图上点击
2. 导航到 `/app/form?lat=X&lng=Y`
3. Form 组件读取 query string
4. useEffect 调用反向地理编码 API
5. 自动填充城市名和国家

## English Short Summary

Reverse geocoding in form: BigDataCloud API converts lat/lng to city/country. Auto-fills form fields. Handles invalid locations (ocean clicks) with error messages. Flow: map click → form URL with coords → fetch city data → populate fields.
