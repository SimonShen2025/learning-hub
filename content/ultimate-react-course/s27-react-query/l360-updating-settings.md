---
title: "Updating Application Settings"
lectureId: 360
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, useMutation, update, settings]
---

## 中文短总结

用 useMutation 实时更新设置。`onBlur` 事件触发单个字段更新。用 `{ [field]: value }` 动态构建更新对象。不需要提交按钮 — 失去焦点即保存。巧妙利用 `e.target.id` 和 `e.target.value`。

## 中文长总结

### API
```js
export async function updateSetting(newSetting) {
  // 只有一行数据，id 始终为 1
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();
  if (error) throw new Error("Settings could not be updated");
  return data;
}
```

### 自定义 Hook
```js
export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateSetting };
}
```

### onBlur 更新
```jsx
function UpdateSettingsForm() {
  const { settings } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <input
          type="number"
          defaultValue={settings.minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      {/* ... */}
    </Form>
  );
}
```

### 技巧
- `onBlur` 替代 submit → 单字段实时保存
- `{ [field]: value }` 动态属性名
- 只更新变化的字段

## English Short Summary

Update settings with `onBlur` — no submit button needed. `useMutation` with dynamic field update `{ [field]: value }`. Invalidate settings cache on success. Clever use of `e.target` for field name and value.
