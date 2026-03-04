---
title: "Duplicating Cabins"
lectureId: 358
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-query, duplicate, reuse, cabin]
---

## 中文短总结

复用已有代码快速实现复制小木屋功能。点击 "Duplicate" → 用 `useCreateCabin` hook 的 `createCabin` 函数 → 传入现有数据（修改名称加 "Copy of"）。展示代码复用的威力。

## 中文长总结

### 实现
```jsx
function CabinRow({ cabin }) {
  const { createCabin, isCreating } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${cabin.name}`,
      maxCapacity: cabin.maxCapacity,
      regularPrice: cabin.regularPrice,
      discount: cabin.discount,
      image: cabin.image, // 复用原图片 URL
      description: cabin.description,
    });
  }

  return (
    <TableRow>
      {/* ... */}
      <button onClick={handleDuplicate} disabled={isCreating}>
        Duplicate
      </button>
    </TableRow>
  );
}
```

### 要点
- 完全复用 `useCreateCabin` hook
- 图片 URL 直接复用（不需要重新上传）
- API 函数检测到 `hasImagePath` 跳过上传
- 几行代码就完成新功能 — 抽象的好处

## English Short Summary

Duplicate cabin: reuse `useCreateCabin` hook, pass existing data with modified name ("Copy of ..."). Image URL reused (no re-upload). Demonstrates power of abstraction — new feature in just a few lines.
