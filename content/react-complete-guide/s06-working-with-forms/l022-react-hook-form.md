---
title: "React Hook Form Library"
lectureId: 22
section: 6
sectionTitle: "Working with Forms"
date: "2026-03-03"
tags: ["react", "forms", "react-hook-form", "library"]
---

## Summary

React Hook Form (RHF) is the most popular form library for React. It uses uncontrolled inputs under the hood for maximum performance, while offering a clean API for validation and error handling.

## Key Concepts

- `useForm()` returns `register`, `handleSubmit`, `formState`
- `register(name, rules)` connects an input to the form
- Minimal re-renders — only the changed field re-renders
- Built-in support for Zod, Yup, and other schema validators via `@hookform/resolvers`

## Detailed Notes

```bash
npm install react-hook-form
```

```jsx
import { useForm } from 'react-hook-form';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await fakeApiCall(data);
    console.log(data); // { email: '...', password: '...' }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' },
        })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Min 8 characters' } })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit" disabled={isSubmitting}>Login</button>
    </form>
  );
}
```

## Code Examples

```bash
# With Zod schema validation
npm install zod @hookform/resolvers
```
