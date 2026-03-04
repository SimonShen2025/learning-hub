---
title: "Styling the Cart"
lectureId: 309
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, styling, cart-page, practice]
---

## 中文短总结

为购物车页面写 Tailwind 样式。购物车项列表、数量调整按钮、总价、操作按钮。用之前创建的 Button 组件实现不同按钮变体。删除和清空购物车用 secondary 样式。

## 中文长总结

### Cart 页面
```jsx
function Cart() {
  const username = useSelector(state => state.user.username);
  const cart = useSelector(getCart);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map(item => <CartItem item={item} key={item.pizzaId} />)}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">Order pizzas</Button>
        <Button type="secondary" onClick={handleClearCart}>Clear cart</Button>
      </div>
    </div>
  );
}
```

### CartItem
```jsx
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  return (
    <li className="flex items-center justify-between py-3">
      <p>{quantity}&times; {name}</p>
      <div className="flex items-center gap-3">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}
```

### 实用技巧
- `space-x-2` — 子元素水平间距
- `divide-y` — 列表分割线
- `border-b` — 底部边框

## English Short Summary

Style cart page: item list with dividers, quantity display, prices, action buttons (order/clear). Reuse Button component variants. `space-x-2` for button spacing, `divide-y` for list separators.
