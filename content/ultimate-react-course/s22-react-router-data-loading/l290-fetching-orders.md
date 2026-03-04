---
title: "Fetching Orders"
lectureId: 290
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, react-router, loaders, params, order]
---

## 中文短总结

用 loader 获取单个订单。Loader 函数接收 `{ params }` 参数 → `params.orderId` 从 URL 获取 ID → fetch 订单数据。SearchOrder 组件用 `useNavigate` 导航到 `/order/:orderId`。loader 支持动态路由参数。

## 中文长总结

### Order Loader
```jsx
// features/order/orderLoader.js
import { getOrder } from "../../services/apiRestaurant";

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
```

### 路由配置
```jsx
{
  path: "/order/:orderId",
  element: <Order />,
  loader: orderLoader,
  errorElement: <Error />,
}
```

### Order 组件
```jsx
function Order() {
  const order = useLoaderData();
  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } = order;

  return (
    <div>
      <h2>Order #{id} status</h2>
      <p>{status === "delivered" ? "Delivered" : `${estimatedDelivery} minutes left`}</p>
      {/* 订单详情 */}
    </div>
  );
}
```

### 搜索订单
```jsx
function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search order #" />
    </form>
  );
}
```

## English Short Summary

Order loader: receives `{ params }` → fetch order by `params.orderId`. Dynamic route params in loaders. SearchOrder navigates to `/order/:id`. Loader handles data fetching before render.
