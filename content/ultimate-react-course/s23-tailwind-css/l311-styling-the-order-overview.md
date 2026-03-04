---
title: "Styling the Order Overview"
lectureId: 311
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, styling, order-page, practice]
---

## 中文短总结

为订单概览页写样式。展示订单状态、预计送达时间、已点比萨列表、价格明细。用条件类名标记优先订单（亮色背景）。Tailwind 样式综合实战的最后一课。

## 中文长总结

### Order 页面
```jsx
function Order() {
  const order = useLoaderData();
  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>
        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map(item => <OrderItem item={item} key={item.pizzaId} />)}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-medium">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
```

### 关键样式
- `space-y-8` — 各区块垂直间距
- Badge 标签：`rounded-full bg-red-500 px-3 py-1 text-sm uppercase`
- 信息栏：`bg-stone-200 px-6 py-5`
- 价格明细：`space-y-2`

## English Short Summary

Style order overview: status badges, delivery countdown, pizza list, price breakdown. Priority badge in red, status in green. Info sections with `bg-stone-200`. Final comprehensive Tailwind styling exercise.
