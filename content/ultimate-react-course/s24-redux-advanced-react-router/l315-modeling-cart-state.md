---
title: "Modeling the 'Cart' State"
lectureId: 315
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux-toolkit, cart, state-modeling]
---

## 中文短总结

创建购物车 slice。State 是 `cart` 数组，每项含 `pizzaId, name, quantity, unitPrice, totalPrice`。Reducers：addItem、deleteItem、increaseItemQuantity、decreaseItemQuantity、clearCart。

## 中文长总结

### Cart Slice
```js
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem { pizzaId, name, quantity, unitPrice, totalPrice }
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
```

### 设计考量
- 数量为 0 时自动删除
- `totalPrice` 存储而非计算（方便显示）
- `caseReducers` 可在 reducer 内部调用其他 reducer

## English Short Summary

Cart slice: array of `{pizzaId, name, quantity, unitPrice, totalPrice}`. Reducers: addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart. Auto-delete when quantity reaches 0 using `caseReducers`.
