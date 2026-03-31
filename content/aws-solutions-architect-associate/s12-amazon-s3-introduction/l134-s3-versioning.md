---
title: "S3 Versioning"
lectureId: 134
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Versioning"]
---

## 中文短总结

本讲介绍 S3 版本控制。在 **Bucket 级别**启用后，上传同一 Key 的文件会创建新版本（v1→v2→v3）而非覆盖。两大优势：**防误删**（删除只添加 Delete Marker，可恢复）和**版本回滚**（可回退到任意历史版本）。注意事项：启用前已存在的文件版本为 **null**；暂停版本控制不会删除已有版本（安全操作）。这是 S3 最佳实践。

## 中文长总结

### 版本控制特性
- 在 **Bucket 级别**启用
- 同一 Key 上传多次 → 创建新版本（不覆盖）
- 版本 ID 自动生成

### 两大优势
1. **防误删**：删除操作添加 **Delete Marker**，不是真正删除
   - 删除 Delete Marker → 恢复文件
2. **版本回滚**：可回退到任意历史版本

### 注意事项
- 启用前的文件版本 ID = **null**
- **暂停版本控制不会删除已有版本**（安全）

## 考试要点

- 版本控制在 **Bucket 级别**启用
- 启用前文件版本为 **null**
- 删除 = 添加 **Delete Marker**（可恢复）
- 暂停不删除已有版本

## English Short Summary

S3 Versioning is enabled at the bucket level. Uploading the same key creates new versions (v1, v2, v3) instead of overwriting. Benefits: protection against unintended deletes (deletion adds a Delete Marker, which can be removed to restore the file) and easy rollback to previous versions. Files uploaded before enabling versioning have version ID `null`. Suspending versioning does not delete existing versions — it's a safe operation.
