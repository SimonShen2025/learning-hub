---
title: "Setting Up Storage Buckets"
lectureId: 344
section: 26
sectionTitle: "Supabase Crash Course: Building a Back-End!"
date: "2026-03-04"
tags: [supabase, storage, buckets, file-upload]
---

## 中文短总结

设置 Supabase Storage Buckets 存储文件。创建 `avatars`（头像）和 `cabin-images`（小木屋图片）两个 bucket。配置公开访问。上传示例数据图片。Storage URL 格式：`${supabaseUrl}/storage/v1/object/public/${bucket}/${file}`。

## 中文长总结

### 创建 Bucket
1. Supabase Dashboard → Storage
2. 点击 "New bucket"
3. 创建 `avatars` bucket（公开）
4. 创建 `cabin-images` bucket（公开）

### 公开 vs 私有
| 类型 | 说明 |
|------|------|
| **Public** | 任何人都可以通过 URL 直接访问文件 |
| **Private** | 需要认证 token 才能访问 |

### 图片 URL 格式
```
https://xxxxx.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
```

### 上传文件（JS）
```js
const { data, error } = await supabase.storage
  .from("cabin-images")
  .upload("cabin-001.jpg", file);
```

### 在表中引用
```js
// cabins 表的 image 字段存储完整 URL
const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

// 创建 cabin 时包含图片路径
const { data, error } = await supabase
  .from("cabins")
  .insert([{ ...newCabin, image: imagePath }]);
```

### RLS for Storage
- Storage 也有自己的 RLS 策略
- 需要单独配置上传/下载/删除权限
- 开发阶段可创建 allow-all policy

## English Short Summary

Set up Supabase Storage: create `avatars` and `cabin-images` buckets (public). Upload files via JS SDK. URL format: `${supabaseUrl}/storage/v1/object/public/${bucket}/${file}`. Storage has its own RLS policies for upload/download.
