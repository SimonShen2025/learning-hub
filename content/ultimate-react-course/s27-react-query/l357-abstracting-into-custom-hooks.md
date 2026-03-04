---
title: "Abstracting React Query Into Custom Hooks"
lectureId: 357
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, custom-hooks, abstraction, best-practice]
---

## 中文短总结

将 React Query 逻辑封装成自定义 hooks。`useCabins`、`useCreateCabin`、`useEditCabin`、`useDeleteCabin`。组件只调用 hook，不直接接触 React Query API。关注点分离，便于复用和测试。

## 中文长总结

### 自定义 Hooks
```js
// features/cabins/useCabins.js
export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { isLoading, error, cabins };
}

// features/cabins/useDeleteCabin.js
export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCabin };
}

// features/cabins/useCreateCabin.js
export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCabin };
}
```

### 使用
```jsx
function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const { isDeleting, deleteCabin } = useDeleteCabin();
  // 组件代码干净简洁
}
```

### 最佳实践
- 每个操作一个 hook
- hook 在 feature 文件夹中（如 `features/cabins/`）
- 组件不导入 React Query 相关的任何内容
- 便于测试和替换数据层

## English Short Summary

Abstract React Query into custom hooks: `useCabins`, `useCreateCabin`, `useEditCabin`, `useDeleteCabin`. Components only call hooks, never touch React Query API directly. Separation of concerns, reusable, testable.
