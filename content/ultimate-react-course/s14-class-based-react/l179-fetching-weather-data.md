---
title: "Fetching Weather Data"
lectureId: 179
section: 14
sectionTitle: "[Optional] React Before Hooks: Class-Based React"
date: "2026-03-04"
tags: [react, class-components, data-fetching, api]
---

## 中文短总结

在 class 组件中 fetch 天气数据。用 async 方法 `fetchWeather()`。两步 API调用：① geocoding（城市 → 经纬度）→ ② weather forecast（经纬度 → 天气数据）。用 `this.setState()` 更新 isLoading、weather、displayLocation。

## 中文长总结

### 实现
```jsx
class App extends React.Component {
  fetchWeather = async () => {
    try {
      this.setState({ isLoading: true });

      // 1. Geocoding
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      const { latitude, longitude, timezone, name, country_code } =
        geoData.results[0];
      this.setState({ displayLocation: `${name} ${country_code}` });

      // 2. Weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      this.setState({ weather: weatherData.daily });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };
}
```

### 触发
- 按钮点击触发 `fetchWeather`
- 后续改为在 location 变化时自动触发（生命周期方法）

## English Short Summary

Fetch weather in class components: async `fetchWeather()` method. Two-step API: geocoding (city → lat/lng) → weather forecast (lat/lng → daily data). Update state with `this.setState()`. Open-Meteo API, no key required. Error handling with try/catch/finally.
