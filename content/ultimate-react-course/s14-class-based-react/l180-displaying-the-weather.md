---
title: "Displaying the Weather"
lectureId: 180
section: 14
sectionTitle: "[Optional] React Before Hooks: Class-Based React"
date: "2026-03-04"
tags: [react, class-components, rendering, weather-app]
---

## 中文短总结

渲染天气数据：创建 Weather 和 Day 子组件显示每日预报。传递天气数据作为 props。用 `new Date().toLocaleDateString()` 格式化日期。根据 weather code 显示对应天气 emoji 图标。Class 和函数组件混用。

## 中文长总结

### Weather 组件
```jsx
class Weather extends React.Component {
  render() {
    const { temperature_2m_max: max, temperature_2m_min: min,
            time: dates, weathercode: codes } = this.props.weather;

    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, i) => (
            <Day
              date={date}
              max={max[i]}
              min={min[i]}
              code={codes[i]}
              key={date}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}
```

### Day 组件
```jsx
function Day({ date, max, min, code, isToday }) {
  return (
    <li className="day">
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? "Today" : formatDay(date)}</p>
      <p>{Math.floor(min)}° — <strong>{Math.ceil(max)}°</strong></p>
    </li>
  );
}
```

## English Short Summary

Render weather: Weather component receives daily data as props, maps over dates to render Day components. Day shows weather icon (by code), formatted date, and min/max temperatures. Class and function components can be mixed. Weather codes mapped to emoji icons.
