---
title: "Styling the Order Form"
lectureId: 310
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, styling, form, practice]
---

## 中文短总结

为订单表单写样式。Input 统一样式（用 @apply 或复用类名）。Label + input 纵向排列。Priority checkbox 样式化。Submit 按钮显示总价。表单整体用 `space-y-4` 控制垂直间距。

## 中文长总结

### 表单布局
```jsx
function CreateOrder() {
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" required />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <input className="input grow" type="tel" name="phone" required />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <input className="input grow" type="text" name="address" required />
        </div>
        <div className="mb-12 flex items-center gap-5">
          <input type="checkbox" name="priority" className="h-6 w-6 accent-yellow-400" />
          <label className="font-medium">Want to give your order priority?</label>
        </div>
        <Button type="primary" disabled={isSubmitting}>
          {isSubmitting ? "Placing order..." : `Order now for ${formatCurrency(totalPrice)}`}
        </Button>
      </Form>
    </div>
  );
}
```

### 响应式表单
- 手机：label 和 input 纵向排列（`flex-col`）
- 平板+：横向排列（`sm:flex-row`）
- label 固定宽度：`sm:basis-40`

## English Short Summary

Style order form: responsive layout (vertical on mobile, horizontal on tablet+). Consistent input styles. Priority checkbox with `accent-yellow-400`. Submit button shows total price. `sm:basis-40` for fixed label width.
