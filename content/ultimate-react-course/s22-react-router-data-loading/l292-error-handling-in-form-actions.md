---
title: "Error Handling in Form Actions"
lectureId: 292
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, react-router, actions, error-handling, useActionData]
---

## 中文短总结

Action 中的错误处理。验证失败时 → action 返回错误对象（不 throw）→ 组件用 `useActionData()` 获取错误 → 显示错误信息。区分两种错误：验证错误（返回数据）和服务端错误（throw → errorElement）。`useNavigation` 检测提交状态。

## 中文长总结

### Action 中验证
```jsx
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  // 验证
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please give us your correct phone number.";

  if (Object.keys(errors).length > 0) return errors; // 返回错误，不 redirect

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}
```

### 组件中显示错误
```jsx
import { useActionData, useNavigation } from "react-router-dom";

function CreateOrder() {
  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="POST">
      <input type="tel" name="phone" />
      {formErrors?.phone && <p className="error">{formErrors.phone}</p>}

      <button disabled={isSubmitting}>
        {isSubmitting ? "Placing order..." : "Order now"}
      </button>
    </Form>
  );
}
```

### 两种错误处理
- **验证错误** → action 返回数据 → useActionData 获取
- **服务端错误** → throw Error → errorElement 渲染

## English Short Summary

Error handling in actions: validation errors returned as data → `useActionData()` in component. Server errors thrown → caught by errorElement. `useNavigation().state === "submitting"` for submit feedback. Two error strategies for different scenarios.
