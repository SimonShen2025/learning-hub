---
title: "Writing Data With React Router \"Actions\""
lectureId: 291
section: 22
sectionTitle: "React Router With Data Loading (v6.4+)"
date: "2026-03-04"
tags: [react, react-router, actions, Form, data-mutation]
---

## 中文短总结

Actions：React Router 的表单提交处理。用 `<Form method="POST">` 替代原生 `<form>`。三步：① 创建 action 函数处理表单数据 ② 关联到路由 ③ 用 React Router 的 Form 组件。action 接收 `{ request }` → `formData` → API 调用 → `redirect()`。

## 中文长总结

### 步骤 1：创建 Action
```jsx
import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}
```

### 步骤 2：关联路由
```jsx
{
  path: "/order/new",
  element: <CreateOrder />,
  action: createOrderAction,
}
```

### 步骤 3：使用 Form
```jsx
import { Form } from "react-router-dom";

function CreateOrder() {
  return (
    <Form method="POST">
      <input type="text" name="customer" required />
      <input type="tel" name="phone" required />
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      <button>Order now</button>
    </Form>
  );
}
```

### Loader vs Action
| Loader | Action |
|--------|--------|
| 读取数据 | 写入/修改数据 |
| 导航时自动执行 | Form 提交时执行 |
| GET 请求语义 | POST/PUT/DELETE 语义 |
| useLoaderData 获取 | redirect 或 return data |

## English Short Summary

React Router Actions: handle form submissions. `<Form method="POST">` triggers action function. Action receives `{ request }`, extracts formData, calls API, returns `redirect()`. Loaders = read, Actions = write. No manual state management for form flow.
