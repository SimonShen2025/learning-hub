---
title: "Implementing the Countries List"
lectureId: 214
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, derived-state, countries, reduce]
---

## 中文短总结

从 cities 数据派生 countries 列表（不需要单独 API）。用 `reduce()` 从 cities 中提取唯一国家。CountryList 渲染 CountryItem 组件。这是派生状态的实际应用 — 不需要额外的 state。

## 中文长总结

### 派生 countries
```jsx
function CountryList({ cities, isLoading }) {
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
```

### 为什么用派生而非单独 state
- countries 完全由 cities 决定
- 新增/删除城市自动更新国家列表
- 不需要额外的 API 调用或 state 同步
- 保持 single source of truth

## English Short Summary

Derive countries from cities data (no separate API). Use `reduce()` to extract unique countries. CountryList renders CountryItem. Derived state in practice — countries auto-update when cities change. Single source of truth principle.
