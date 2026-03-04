---
title: "Fetching Data Without Navigation: useFetcher"
lectureId: 324
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [react-router, useFetcher, data-loading, no-navigation]
---

## 中文短总结

`useFetcher` 在不导航的情况下加载数据。在订单页面获取菜单数据以显示比萨配料（不跳转到 /menu 页）。`fetcher.load("/menu")` 加载 → `fetcher.data` 获取结果。`fetcher.state` 跟踪状态。

## 中文长总结

### useFetcher 用法
```jsx
import { useFetcher } from "react-router-dom";

function OrderItem({ item, ingredients }) {
  const fetcher = useFetcher();

  // 组件挂载时加载菜单数据
  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load("/menu");
    }
  }, [fetcher]);

  return (
    <li className="py-3">
      <p>{item.quantity}&times; {item.name}</p>
      <p className="text-sm capitalize italic text-stone-500">
        {fetcher.state === "loading"
          ? "Loading..."
          : fetcher.data
              ?.find((el) => el.id === item.pizzaId)
              ?.ingredients?.join(", ")}
      </p>
    </li>
  );
}
```

### useFetcher vs useLoaderData
| | useLoaderData | useFetcher |
|---|---|---|
| 导航 | 需要导航到该路由 | 不导航 |
| 数据源 | 当前路由的 loader | 任何路由的 loader |
| 触发 | 自动（路由匹配时） | 手动（`fetcher.load()`） |
| 数据 | 直接返回 | `fetcher.data` |

### fetcher 状态
| state | 含义 |
|-------|------|
| `"idle"` | 未开始或已完成 |
| `"loading"` | 正在加载 |
| `"submitting"` | 正在提交 |

## English Short Summary

`useFetcher` loads data without navigation. `fetcher.load("/menu")` triggers another route's loader. Access data via `fetcher.data`, track with `fetcher.state`. Useful for fetching related data on a different page.
