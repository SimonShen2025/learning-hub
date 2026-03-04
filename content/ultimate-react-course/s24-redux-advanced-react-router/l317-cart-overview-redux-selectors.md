---
title: "Building the Cart Overview With Redux Selectors"
lectureId: 317
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux, selectors, derived-state, performance]
---

## 中文短总结

Redux Selectors 从 state 计算派生数据。`getTotalCartQuantity` 和 `getTotalCartPrice` 用 `reduce` 汇总。Selector 函数定义在 slice 文件中导出。可用 `reselect` 库做 memoized selectors（性能优化）。

## 中文长总结

### 定义 Selectors
```js
// cartSlice.js — 底部导出 selectors
export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
```

### 使用 Selectors
```jsx
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase">
      <p>{totalCartQuantity} pizzas ・ {formatCurrency(totalCartPrice)}</p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
```

### 要点
- Selector 是纯函数：`(state) => derivedValue`
- 闭包 selector：`(id) => (state) => value`（传参数）
- 为性能敏感场景可用 `createSelector`（reselect）做记忆化

## English Short Summary

Redux selectors compute derived data from state. Define `getTotalCartQuantity`, `getTotalCartPrice`, `getCurrentQuantityById` in slice file. Use with `useSelector`. Closure pattern for parameterized selectors.
