---
title: "Creating a New City"
lectureId: 235
section: 18
sectionTitle: "Advanced State Management: The Context API"
date: "2026-03-04"
tags: [react, context-api, crud, POST, worldwise]
---

## 中文短总结

实现创建城市功能。表单提交 → 调用 context 中的 `createCity()` → POST 到 fake API → 更新本地 cities state → 导航回城市列表。使用 async/await。创建后立即更新 UI（乐观更新的变体 — 等 API 成功后更新）。

## 中文长总结

### createCity（Context 中）
```jsx
async function createCity(newCity) {
  try {
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/cities`, {
      method: "POST",
      body: JSON.stringify(newCity),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setCities((cities) => [...cities, data]); // 更新本地 state
  } catch {
    alert("Error creating city...");
  } finally {
    setIsLoading(false);
  }
}
```

### 表单提交
```jsx
async function handleSubmit(e) {
  e.preventDefault();
  if (!cityName || !date) return;

  const newCity = {
    cityName,
    country,
    emoji,
    date,
    notes,
    position: { lat, lng },
  };

  await createCity(newCity);
  navigate("/app/cities");
}
```

### 流程
1. 用户填写表单 → 提交
2. 构建 newCity 对象
3. POST 到 API
4. API 返回带 id 的完整对象
5. 追加到本地 cities 数组
6. 导航回列表

## English Short Summary

Create city: form submit → `createCity()` in context → POST to API → append to local cities state → navigate back. Build newCity object from form fields + lat/lng. Wait for API success before updating UI and navigating.
