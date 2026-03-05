---
title: "Architecture: Snowball into Glacier"
lectureId: 174
section: 16
sectionTitle: "AWS Storage Extras"
date: "2026-03-05"
tags: ["Snowball", "Glacier", "S3 Lifecycle"]
---

## 中文短总结

本讲介绍考试常见场景：Snowball **不能直接**导入 Glacier。解决方案：先导入 **Amazon S3**，再创建 **S3 Lifecycle Policy** 将对象转换到 Glacier。

## 中文长总结

### 问题
- Snowball 无法直接将数据导入 Glacier

### 解决方案
1. Snowball → 导入 **Amazon S3**
2. 创建 **S3 Lifecycle Policy** → 转换到 **Glacier**

## 考试要点

- Snowball → S3 → Lifecycle Policy → Glacier
- **不能**直接 Snowball → Glacier

## English Short Summary

Snowball cannot import data directly into Glacier. Solution: import into Amazon S3 first, then create an S3 Lifecycle Policy to transition objects into Glacier. This is a common exam scenario.
