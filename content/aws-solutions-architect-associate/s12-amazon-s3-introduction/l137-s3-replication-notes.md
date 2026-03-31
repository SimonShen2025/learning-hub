---
title: "S3 Replication Notes"
lectureId: 137
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Replication", "Batch Replication", "Delete Marker"]
---

## 中文短总结

本讲补充 S3 复制的重要注意事项。启用复制后**只复制新对象**；要复制已有对象需使用 **S3 Batch Replication**。Delete Marker 的复制是**可选设置**（默认不复制）。**永久删除**（带 Version ID）**不会被复制**（防止恶意删除跨 Bucket 传播）。**不存在链式复制**：Bucket 1 → Bucket 2 → Bucket 3，Bucket 1 的对象不会到 Bucket 3。

## 中文长总结

### 复制限制和注意事项

| 规则 | 说明 |
|------|------|
| 新对象 | 启用复制后**只复制新上传的对象** |
| 已有对象 | 需要 **S3 Batch Replication** 单独处理 |
| Delete Marker | **可选复制**（默认不复制） |
| 永久删除（Version ID） | **不会被复制**（防止恶意删除） |
| 链式复制 | **不支持**（1→2→3，1 的对象不到 3） |

## 考试要点

- 复制**只影响启用后的新对象**
- 已有对象 → **S3 Batch Replication**
- 永久删除（Version ID）**不会复制**
- **无链式复制**
- Delete Marker 复制是可选的

## English Short Summary

Key replication notes: only new objects are replicated after enabling; use S3 Batch Replication for existing objects. Delete marker replication is optional (disabled by default). Permanent deletes (with version ID) are NOT replicated to prevent malicious cross-bucket deletions. No chaining: if Bucket 1 → Bucket 2 → Bucket 3, objects from Bucket 1 don't reach Bucket 3.
