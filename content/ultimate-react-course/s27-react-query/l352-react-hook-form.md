---
title: "Introducing Another Library: React Hook Form"
lectureId: 352
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-hook-form, forms, useForm, register]
---

## 中文短总结

React Hook Form 简化表单处理。`useForm()` 返回 `register`、`handleSubmit`、`reset`、`formState`。用 `register("fieldName")` 注册字段。提交时自动收集数据。性能好（不触发不必要的 re-render）。

## 中文长总结

### 基本用法
```jsx
import { useForm } from "react-hook-form";

function CreateCabinForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    // { name: "Cabin 008", maxCapacity: 8, regularPrice: 300, ... }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input type="text" id="name" {...register("name", { required: "This field is required" })} />

      <input type="number" id="maxCapacity" {...register("maxCapacity", {
        required: "This field is required",
        min: { value: 1, message: "Capacity should be at least 1" },
      })} />

      <input type="number" id="regularPrice" {...register("regularPrice", { required: "This field is required" })} />

      <input type="number" id="discount" {...register("discount", {
        validate: (value) => value <= getValues().regularPrice || "Discount should be less than price",
      })} />

      <button type="submit">Create new cabin</button>
    </form>
  );
}
```

### register 验证选项
| 选项 | 说明 |
|------|------|
| `required` | 必填 |
| `min/max` | 最小/最大值 |
| `minLength/maxLength` | 最小/最大长度 |
| `pattern` | 正则匹配 |
| `validate` | 自定义验证函数 |

### 优势
- 非受控组件 → 性能好
- 内置验证
- `getValues()` 交叉验证
- `reset()` 重置表单

## English Short Summary

React Hook Form: `useForm()` returns `register`, `handleSubmit`, `reset`, `formState`. Register fields with `{...register("name", validations)}`. Built-in validation (required, min, max, validate). Uncontrolled → high performance.
