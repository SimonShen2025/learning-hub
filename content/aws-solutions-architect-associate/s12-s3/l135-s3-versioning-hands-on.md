---
title: "S3 Versioning - Hands On"
lectureId: 135
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Versioning", "Delete Marker", "Hands-On"]
---

## 中文短总结

本讲演示了 S3 版本控制的实际操作。启用版本控制后重新上传 index.html（修改内容为"I REALLY love coffee"），通过 Show Versions 开关可看到同一文件的多个版本。启用前上传的文件版本 ID 为 null。**永久删除**特定版本 ID → 回退到上一版本。**普通删除**（不选版本）→ 添加 Delete Marker，文件看似消失但实际仍在。删除 Delete Marker → 恢复文件。

## English Short Summary

This hands-on demonstrates S3 versioning in action. After enabling, re-uploading index.html creates a new version (visible via Show Versions toggle). Pre-versioning files have null version IDs. Permanently deleting a specific version ID rolls back to the previous version. Regular deletion (without version) adds a Delete Marker — the file appears gone but still exists. Removing the Delete Marker restores the file.
