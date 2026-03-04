---
title: "Adding Menu Items to the Cart"
lectureId: 316
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux, dispatch, cart, add-item]
---

## 中文短总结

在 MenuItem 组件中添加"加入购物车"按钮。点击时 dispatch `addItem` action，传入新的购物车项。检查是否已在购物车中，已添加的显示数量控制而非"Add"按钮。

## 中文长总结

### 添加到购物车
```jsx
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li>
      {/* ... pizza info ... */}
      {!soldOut && (
        isInCart ? (
          <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
        ) : (
          <Button type="small" onClick={handleAddToCart}>Add to cart</Button>
        )
      )}
    </li>
  );
}
```

### 关键点
- 构造 newItem 对象作为 payload
- 条件渲染：已在购物车 → 数量控制；未添加 → Add 按钮
- 售罄的不显示任何操作按钮

## English Short Summary

Add items to cart: dispatch `addItem` with pizza data. Conditionally render Add button or quantity controls based on cart state. Sold-out items show no action buttons. Use selector to check if item already in cart.
