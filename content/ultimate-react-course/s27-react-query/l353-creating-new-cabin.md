---
title: "Creating a New Cabin"
lectureId: 353
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, useMutation, create, supabase]
---

## 中文短总结

用 useMutation + React Hook Form 创建新小木屋。表单提交 → mutate(data) → API 调用 Supabase insert → 成功后 invalidateQueries 更新列表 + reset 表单。完整的表单提交 → 缓存更新流程。

## 中文长总结

### API 函数
```js
export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select()
    .single();

  if (error) throw new Error("Cabin could not be created");
  return data;
}
```

### 表单集成
```jsx
function CreateCabinForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset(); // 重置表单
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* fields with register... */}
      <button disabled={isCreating}>Create cabin</button>
    </form>
  );
}
```

### 数据流
1. 用户填写表单 → 点击提交
2. handleSubmit 收集数据 → 调用 onSubmit
3. mutate(data) → 调用 createCabin API
4. Supabase insert 成功
5. onSuccess → toast + invalidateQueries + reset
6. cabins 列表自动刷新

## English Short Summary

Create cabin: React Hook Form collects data → `mutate(data)` → Supabase insert → `onSuccess` invalidates cache + resets form. Complete form submission → cache update → UI refresh flow.
