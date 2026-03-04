---
title: "Building the Cart Page"
lectureId: 318
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux, cart-page, useSelector]
---

## 中文短总结

构建购物车页面。用 `useSelector(getCart)` 获取购物车数据。显示用户名、列表、清空按钮、下单链接。空购物车显示提示信息。组件拆分：Cart、CartItem、EmptyCart。

## 中文长总结

### Cart 组件
```jsx
function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">
        Your cart, {username}
      </h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">Order pizzas</Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}
```

### EmptyCart
```jsx
function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}
```

## English Short Summary

Build cart page: `useSelector(getCart)` to get items, display list with CartItem components, clear cart button, order link. Show EmptyCart component when cart is empty.
