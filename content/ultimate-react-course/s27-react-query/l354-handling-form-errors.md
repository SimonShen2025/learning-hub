---
title: "Handling Form Errors"
lectureId: 354
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-hook-form, validation, errors, form]
---

## 中文短总结

React Hook Form 表单验证和错误处理。`formState.errors` 包含所有验证错误。每个字段可设置 required、min、max、validate 规则。错误信息在 `errors.fieldName.message` 中。`getValues()` 实现交叉字段验证。

## 中文长总结

### 显示错误
```jsx
function CreateCabinForm() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <input {...register("name", { required: "This field is required" })} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <input type="number" {...register("maxCapacity", {
          required: "This field is required",
          min: { value: 1, message: "Capacity should be at least 1" },
        })} />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <input type="number" defaultValue={0} {...register("discount", {
          required: "This field is required",
          validate: (value) =>
            value <= getValues().regularPrice ||
            "Discount should be less than regular price",
        })} />
      </FormRow>
    </form>
  );
}
```

### FormRow 组件
```jsx
function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}
```

### 验证类型
- `required` — 必填
- `min/max` — 数值范围
- `validate` — 自定义（可用 `getValues()` 交叉验证）
- `onError` — handleSubmit 第二个参数，表单无效时调用

## English Short Summary

React Hook Form validation: `formState.errors` for error messages. Field rules: required, min, max, validate (custom). `getValues()` for cross-field validation. FormRow component displays label + input + error message.
