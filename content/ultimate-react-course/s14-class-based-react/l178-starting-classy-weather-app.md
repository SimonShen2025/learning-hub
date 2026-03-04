---
title: "Starting the \"Classy Weather\" App"
lectureId: 178
section: 14
sectionTitle: "[Optional] React Before Hooks: Class-Based React"
date: "2026-03-04"
tags: [react, class-components, weather-app, project]
---

## 中文短总结

开始 Classy Weather 项目。Class 组件版本的天气应用：输入城市 → 搜索天气 → 显示未来几天预报。App 组件用 class 编写，包含 location state 和 input 处理。使用 Open-Meteo 免费天气 API。

## 中文长总结

### 项目结构
```jsx
class App extends React.Component {
  state = {
    location: "",
    isLoading: false,
    displayLocation: "",
    weather: {},
  };

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <input
          value={this.state.location}
          onChange={(e) => this.setState({ location: e.target.value })}
        />
        {/* 天气显示 */}
      </div>
    );
  }
}
```

### API
- Open-Meteo：免费、无需 API key
- 先用 geocoding API 获取经纬度
- 再用 weather API 获取天气数据

## English Short Summary

Start Classy Weather project with class components. Weather app: input city → search → display forecast. Class App component with location, isLoading, weather state. Uses free Open-Meteo API (geocoding + weather endpoints). No API key needed.
