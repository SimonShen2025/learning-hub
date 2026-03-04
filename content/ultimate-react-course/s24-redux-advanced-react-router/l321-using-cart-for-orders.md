---
title: "Using the Cart for New Orders"
lectureId: 321
section: 24
sectionTitle: "Adding Redux and Advanced React Router"
date: "2026-03-04"
tags: [redux, cart, order, form-action]
---

## 中文短总结

用购物车数据提交新订单。在 CreateOrder 组件中 `useSelector(getCart)` 获取购物车。将 cart 数据作为隐藏字段放入表单。Action 函数中解析并提交给 API。下单成功后清空购物车。

## 中文长总结

### CreateOrder 组件
```jsx
function CreateOrder() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <Form method="POST">
      {/* ... form fields ... */}
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      <Button type="primary" disabled={isSubmitting}>
        Order now for {formatCurrency(totalCartPrice)}
      </Button>
    </Form>
  );
}
```

### Action 函数
```js
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please give us your correct phone number.";
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  // 清空购物车
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
```

### 注意
- Cart 数据通过 `<input type="hidden">` 传递
- Action 中直接导入 store 调用 dispatch（不在组件中）
- 不推荐直接导入 store，但这是 React Router action 的限制

## English Short Summary

Submit orders using cart data: `useSelector(getCart)` in form, pass cart as hidden JSON input. Action parses cart, submits to API, dispatches `clearCart`. Direct store import in action (React Router limitation).
