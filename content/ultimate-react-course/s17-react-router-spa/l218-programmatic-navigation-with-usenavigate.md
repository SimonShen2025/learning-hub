---
title: "Programmatic Navigation with useNavigate"
lectureId: 218
section: 17
sectionTitle: "React Router: Building Single-Page Applications (SPA)"
date: "2026-03-04"
tags: [react, react-router, useNavigate, programmatic-navigation]
---

## 中文短总结

`useNavigate()` hook 实现编程式导航 — 不需要用户点击链接。常见场景：表单提交后跳转、点击地图后跳转。`navigate("/app/cities")` 前进，`navigate(-1)` 后退一步。

## 中文长总结

### 基本用法
```jsx
import { useNavigate } from "react-router-dom";

function Map() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("form")}>
      {/* 点击地图 → 打开新建城市表单 */}
    </div>
  );
}
```

### 导航方式
```jsx
// 绝对路径
navigate("/app/cities");

// 相对路径
navigate("form"); // 相对于当前路由

// 后退
navigate(-1); // 等同于浏览器后退按钮

// 前进
navigate(1);
```

### 常见场景
1. **表单提交后跳转**
   ```jsx
   async function handleSubmit(e) {
     e.preventDefault();
     await createCity(newCity);
     navigate("/app/cities");
   }
   ```

2. **后退按钮**
   ```jsx
   <button onClick={() => navigate(-1)}>← Back</button>
   ```

3. **条件跳转**
   ```jsx
   if (!isAuthenticated) navigate("/login");
   ```

## English Short Summary

`useNavigate()` for programmatic navigation without links. `navigate("/path")` for absolute, `navigate("form")` for relative, `navigate(-1)` for back. Use cases: redirect after form submit, back button, conditional navigation.
