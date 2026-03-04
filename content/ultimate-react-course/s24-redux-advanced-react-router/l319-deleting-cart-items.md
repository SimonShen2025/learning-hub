---
title: "Deleting Cart Items"
lectureId: 319
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux, cart, delete, dispatch]
---

## 中文短总结

实现删除购物车项。创建 DeleteItem 组件，接收 `pizzaId` prop。点击按钮 dispatch `deleteItem(pizzaId)`。在 CartItem 和 MenuItem 中复用。Reducer 已写好，只需连接 UI。

## 中文长总结

### DeleteItem 组件
```jsx
function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
```

### 在 CartItem 中使用
```jsx
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between py-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-3">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}
```

### 关键点
- Reducer 用 `filter` 实现删除
- 组件可复用（购物车页 + 菜单页）
- dispatch 只需传 pizzaId 即可

## English Short Summary

Delete cart items: reusable DeleteItem component dispatches `deleteItem(pizzaId)`. Used in both CartItem and MenuItem. Reducer filters out the item by pizzaId. Simple dispatch-based pattern.
