---
title: "Uploading Sample Data"
lectureId: 378
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [sample-data, supabase, seed, development]
---

## 中文短总结

上传样本数据到 Supabase。data 文件夹有 bookings、guests、cabins 的示例数据。创建 Uploader 组件，一键清除旧数据并插入新数据。用于开发和测试。上传完调用 `invalidateQueries` 刷新缓存。

## 中文长总结

### Uploader 组件
```jsx
function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // 按顺序上传（有外键依赖）
    await deleteBookings();
    await deleteGuests();
    await deleteCabins();
    await createGuests();
    await createCabins();
    await createBookings();
    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <StyledUploader>
      <h3>SAMPLE DATA</h3>
      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>
      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </Button>
    </StyledUploader>
  );
}
```

### 注意事项
- 仅在开发模式下显示
- 删除顺序考虑外键约束（先删 bookings → guests → cabins）
- 插入顺序相反（先 guests/cabins → bookings）
- 日期自动计算为相对当前日期

## English Short Summary

Upload sample data to Supabase for development. Three data files: bookings, guests, cabins. Uploader component handles deletion order (foreign keys) and sequential insertion. Dev-only feature.
