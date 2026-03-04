---
title: "Updating Data Without Navigation"
lectureId: 325
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [react-router, useFetcher, form, mutation, no-navigation]
---

## 中文短总结

用 `fetcher.Form` 在不导航的情况下提交数据。为订单添加"标为优先"功能。`fetcher.Form` + `method="PATCH"` → 调用当前路由的 action → 更新数据 → 页面自动重新验证。

## 中文长总结

### UpdateOrder 组件
```jsx
function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

// Action
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
```

### fetcher.Form vs Form
| | Form | fetcher.Form |
|---|---|---|
| 导航 | 提交后导航（redirect） | 不导航 |
| 页面 | 跳转到 action 路由 | 停留在当前页 |
| 重新验证 | ✅ | ✅ |

### 工作流程
1. 用户点击 "Make priority" 按钮
2. `fetcher.Form` 提交 PATCH 请求
3. 调用当前路由的 action 函数
4. action 调用 API 更新订单
5. React Router 自动重新验证数据
6. 页面更新（不离开当前页）

### 要点
- PATCH 方法用于部分更新
- action 返回 null（不需要 redirect，因为不导航）
- 重新验证自动发生 — 数据始终最新

## English Short Summary

`fetcher.Form` submits data without navigation. PATCH method for partial updates. Action updates via API, React Router auto-revalidates. Page stays current, data refreshes automatically. Used for "Make priority" feature.
