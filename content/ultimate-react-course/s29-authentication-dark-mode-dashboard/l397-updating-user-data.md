---
title: "Updating User Data and Password"
lectureId: 397
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [user-update, avatar, password, supabase-auth]
---

## 中文短总结

更新用户信息：fullName、avatar（上传到 Storage）、password。`supabase.auth.updateUser()` 更新密码或 `user_metadata`。头像上传到 Supabase Storage → URL 写入 metadata。两个独立表单：数据更新 + 密码更新。

## 中文长总结

### API
```js
export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. 更新密码或名字
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };
  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. 上传头像
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);

  // 3. 更新用户头像 URL
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (error2) throw new Error(error2.message);
  return updatedUser;
}
```

### useUpdateUser Hook
```jsx
export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser, isUpdating };
}
```

### 更新密码表单
- 最小 8 位
- 确认密码匹配
- 成功后 reset 表单

## English Short Summary

Update user data: `supabase.auth.updateUser()` for password or `user_metadata` (fullName). Avatar upload to Supabase Storage → URL saved in metadata. Two forms: data update + password update. `setQueryData` updates local cache.
