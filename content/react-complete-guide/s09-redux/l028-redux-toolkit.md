---
title: "Redux Toolkit — Modern Redux"
lectureId: 28
section: 9
sectionTitle: "Redux & Global State Management"
date: "2026-03-03"
tags: ["redux", "redux-toolkit", "state-management"]
---

## Summary

Redux Toolkit (RTK) is the official, opinionated toolset for Redux. It dramatically reduces boilerplate compared to classic Redux by providing `createSlice`, `configureStore`, and `createAsyncThunk`.

## Key Concepts

- `configureStore` sets up the Redux store with good defaults
- `createSlice` generates actions and reducers together
- `useSelector` reads from the store; `useDispatch` sends actions
- RTK includes Immer — you can write "mutating" logic that stays immutable

## Detailed Notes

```bash
npm install @reduxjs/toolkit react-redux
```

**cartSlice.js:**
```js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload); // Immer makes this safe
      state.total += action.payload.price;
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

**store.js:**
```js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: { cart: cartReducer },
});
```

## Code Examples

```jsx
// In a component
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const itemCount = useSelector(state => state.cart.items.length);

  return (
    <div>
      <p>Cart: {itemCount} items</p>
      <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
    </div>
  );
}
```
