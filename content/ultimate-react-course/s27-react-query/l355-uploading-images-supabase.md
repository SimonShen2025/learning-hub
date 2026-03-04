---
title: "Uploading Images to Supabase"
lectureId: 355
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [supabase, storage, image-upload, file-upload]
---

## 中文短总结

处理文件上传到 Supabase Storage。表单中用 `<input type="file">` 并 register。提交时先上传图片到 bucket → 获取 URL → 再创建/更新 cabin 记录。如果上传失败则删除已创建的记录。

## 中文长总结

### 上传流程
```js
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. 创建/编辑 cabin
  let query = supabase.from("cabins");
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();
  if (error) throw new Error("Cabin could not be created");

  // 2. 上传图片
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. 上传失败则删除记录
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Image could not be uploaded, cabin was not created");
  }

  return data;
}
```

### 表单中处理文件
```jsx
<input
  type="file"
  accept="image/*"
  {...register("image", { required: isEditSession ? false : "This field is required" })}
/>
```

### 关键点
- `FileList` 对象从 input 获取
- `Math.random()` 生成唯一文件名
- 如果是编辑且未更换图片，保留原 URL
- 上传失败回滚（删除记录）

## English Short Summary

Upload images to Supabase Storage: file input with register, generate unique filename, upload to bucket, get URL. Create cabin with image URL. Rollback (delete record) if upload fails. Handle edit case with existing image.
