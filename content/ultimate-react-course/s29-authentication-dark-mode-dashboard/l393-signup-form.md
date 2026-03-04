---
title: "Building the Sign Up Form"
lectureId: 393
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [signup, form, react-hook-form, validation]
---

## 中文短总结

构建注册表单。只有已登录用户可创建新用户（内部系统）。用 React Hook Form 管理表单。字段：full name、email、password（最小 8 位）、repeat password（validate 匹配）。

## 中文长总结

### SignupForm 组件
```jsx
function SignupForm() {
  const { register, formState: { errors }, getValues, handleSubmit, reset } = useForm();
  const { signup, isLoading } = useSignup();

  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input {...register("fullName", { required: "This field is required" })} />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input type="email" {...register("email", {
          required: "This field is required",
          pattern: { value: /\S+@\S+\.\S+/, message: "Please provide a valid email" },
        })} />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input type="password" {...register("password", {
          required: "This field is required",
          minLength: { value: 8, message: "Password needs a minimum of 8 characters" },
        })} />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input type="password" {...register("passwordConfirm", {
          required: "This field is required",
          validate: (value) => value === getValues().password || "Passwords need to match",
        })} />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">Cancel</Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}
```

### 注意
- 不是公开注册 → 只有内部员工可创建新用户
- `type="reset"` 按钮原生重置表单
- `getValues()` 交叉验证两个密码字段

## English Short Summary

Sign-up form for internal use (only authenticated users can create new users). React Hook Form with fullName, email, password (min 8 chars), passwordConfirm (validate match). Reset on settled.
