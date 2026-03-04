---
title: "Displaying a Loading Indicator"
lectureId: 288
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, react-router, useNavigation, loading-indicator]
---

## 中文短总结

用 `useNavigation()` 显示全局加载指示器。`navigation.state` 有三种值：idle、loading、submitting。在 AppLayout 中判断 state === "loading" 显示加载动画。Loader 数据加载期间用户看到加载提示。

## 中文长总结

### 实现
```jsx
import { useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <Outlet />
    </div>
  );
}
```

### Loader 组件
```jsx
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}
```

### navigation.state 值
| State | 含义 |
|-------|------|
| `"idle"` | 没有进行中的导航 |
| `"loading"` | loader 正在获取数据 |
| `"submitting"` | action 正在处理表单提交 |

### 特点
- 全局逻辑，写一次即可
- 自动覆盖所有使用 loader 的路由
- 不需要每个页面单独管理 loading state

## English Short Summary

Global loading indicator with `useNavigation()`. Check `navigation.state === "loading"` in AppLayout. Three states: idle, loading, submitting. Write once — covers all routes with loaders automatically.
