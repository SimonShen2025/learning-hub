---
title: "Fetching Data With React Router \"Loaders\": Pizza Menu"
lectureId: 287
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, react-router, loaders, data-fetching, useLoaderData]
---

## 中文短总结

Loader：路由渲染前获取数据。三步：① 创建 loader 函数 ② 在路由配置中关联 ③ 组件中用 `useLoaderData()` 获取数据。数据在**导航时**就开始 fetch — 不是组件 mount 后。消除了 loading spinner + useEffect fetch 模式。

## 中文长总结

### 步骤 1：创建 Loader
```jsx
// features/menu/menuLoader.js
import { getMenu } from "../../services/apiRestaurant";

export async function loader() {
  const menu = await getMenu();
  return menu;
}
```

### 步骤 2：关联到路由
```jsx
import { loader as menuLoader } from "./features/menu/menuLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/menu", element: <Menu />, loader: menuLoader },
    ],
  },
]);
```

### 步骤 3：组件中使用
```jsx
import { useLoaderData } from "react-router-dom";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
```

### Loader vs useEffect
| useEffect 模式 | Loader 模式 |
|----------------|-------------|
| 组件 mount → fetch → loading | 导航时 fetch → 完成后渲染 |
| 需要管理 loading state | React Router 自动处理 |
| 数据获取在组件中 | 数据获取在路由配置中 |
| "fetch on render" | "render as you fetch" |

## English Short Summary

React Router Loaders: fetch data before route renders. Three steps: create loader function, attach to route config, use `useLoaderData()` in component. Data fetches on navigation (not after mount). Eliminates useEffect+loading state pattern.
