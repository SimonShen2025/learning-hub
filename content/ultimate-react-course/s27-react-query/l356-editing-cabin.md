---
title: "Editing a Cabin"
lectureId: 356
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, edit, form, reuse]
---

## 中文短总结

复用 CreateCabinForm 组件实现编辑功能。通过 `cabinToEdit` prop 区分创建/编辑模式。`useForm({ defaultValues })` 预填数据。编辑用 Supabase 的 `update().eq("id", id)`。同一个 API 函数处理创建和编辑。

## 中文长总结

### 复用表单
```jsx
function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { mutate: createCabin, isLoading: isCreating } = useCreateCabin();
  const { mutate: editCabin, isLoading: isEditing } = useEditCabin();
  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession) {
      editCabin({ newCabinData: { ...data, image }, id: editId });
    } else {
      createCabin({ ...data, image }, { onSuccess: () => reset() });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 同样的字段... */}
      <button disabled={isWorking}>
        {isEditSession ? "Edit cabin" : "Create new cabin"}
      </button>
    </form>
  );
}
```

### 要点
- `defaultValues` 预填编辑数据
- `typeof data.image === "string"` 检查图片是否更换
- 按钮文字根据模式变化
- 同一组件、同一 API 函数处理两种情况

## English Short Summary

Reuse CreateCabinForm for editing: pass `cabinToEdit` prop, use `useForm({ defaultValues })` to prefill. Check if image changed (string vs FileList). Same API function handles create and update via `id` parameter.
