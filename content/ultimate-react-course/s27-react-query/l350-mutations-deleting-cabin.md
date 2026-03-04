---
title: "Mutations: Deleting a Cabin"
lectureId: 350
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, useMutation, delete, invalidation]
---

## 中文短总结

`useMutation` 用于数据变更操作（增删改）。调用 `mutate()` 触发。成功后用 `queryClient.invalidateQueries` 使缓存失效 → 自动 refetch。`onSuccess`/`onError` 回调处理结果。

## 中文长总结

### useMutation 删除示例
```jsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

function CabinRow({ cabin }) {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      // 使 cabins 缓存失效 → 自动 refetch
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <tr>
      <td>{cabin.name}</td>
      <td>
        <button onClick={() => mutate(cabin.id)} disabled={isDeleting}>
          Delete
        </button>
      </td>
    </tr>
  );
}
```

### API 函数
```js
// services/apiCabins.js
export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id);
  if (error) throw new Error("Cabin could not be deleted");
  return data;
}
```

### 关键概念
| 概念 | 说明 |
|------|------|
| `mutate(data)` | 触发 mutation |
| `onSuccess` | 成功回调 |
| `onError` | 错误回调 |
| `invalidateQueries` | 使缓存失效 → 重新获取 |
| `isLoading` | mutation 进行中 |

## English Short Summary

`useMutation` for data changes (create/update/delete). Call `mutate(data)` to trigger. `onSuccess` callback invalidates queries via `queryClient.invalidateQueries` for auto-refetch. `onError` for error handling.
