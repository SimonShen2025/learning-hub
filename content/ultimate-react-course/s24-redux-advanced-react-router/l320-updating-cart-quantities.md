---
title: "Updating Cart Quantities"
lectureId: 320
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux, cart, quantity, update]
---

## 中文短总结

实现购物车数量增减。创建 UpdateItemQuantity 组件，+/- 按钮。Dispatch `increaseItemQuantity` 和 `decreaseItemQuantity`。数量至 0 时自动删除。在 CartItem 和 MenuItem 中复用。

## 中文长总结

### UpdateItemQuantity 组件
```jsx
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-bold">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
```

### 在 CartItem 中使用
```jsx
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="flex items-center justify-between py-3 sm:gap-6">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-3 sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}
```

### 关键模式
- 减到 0 → reducer 自动调用 deleteItem
- 组件接收 currentQuantity 作为 prop
- 圆形按钮（`type="round"`）用于 +/-

## English Short Summary

Update cart quantities: UpdateItemQuantity component with +/- buttons. Dispatches `increaseItemQuantity`/`decreaseItemQuantity`. Auto-deletes when quantity reaches 0. Reusable in CartItem and MenuItem.
