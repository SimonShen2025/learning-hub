---
title: "S3 Lifecycle Rules (with S3 Analytics)"
lectureId: 142
section: 13
sectionTitle: "Advanced Amazon S3"
date: "2026-03-05"
tags: ["S3", "Lifecycle Rules", "S3 Analytics", "Storage Class Transition"]
---

## 中文短总结

本讲介绍 S3 Lifecycle Rules，用于自动在不同存储类别之间迁移对象。规则包含两种 Action：**Transition Action**（如 60 天后转 Standard-IA，6 个月后转 Glacier）和 **Expiration Action**（如 365 天后删除日志文件、删除旧版本、删除不完整的 Multi-Part Upload）。规则可按 **Prefix** 或 **Object Tag** 过滤。考试场景题示例：源图片 60 天内需即时访问后可等 6 小时 → Standard + 60 天 Glacier；缩略图可重建 → One Zone-IA + 60 天过期。**S3 Analytics** 提供 CSV 报告推荐 Standard 和 Standard-IA 之间的最佳转换天数（不适用于 Glacier），24-48 小时开始生成数据。

## 中文长总结

### 存储类别转换路径
- Standard → Standard-IA → Intelligent-Tiering → One Zone-IA → Glacier 系列
- 所有允许的转换路径在图表中定义

### Lifecycle Rule 两种规则

#### Transition Action（转换操作）
- 自动将对象转到另一个存储类别
- 例：60 天后 → Standard-IA，6 个月后 → Glacier

#### Expiration Action（过期操作）
- 自动删除对象
- 例：365 天后删除日志文件
- 删除旧版本的文件
- 删除超过 2 周的不完整 Multi-Part Upload

### 规则过滤
- **Prefix**：按路径过滤
- **Object Tag**：按标签过滤（如 department=finance）

### 考试场景示例

#### 场景 1：图片处理
- 源图片：Standard → 60 天后 Glacier
- 缩略图：One Zone-IA → 60 天后 Expire

#### 场景 2：删除恢复
- 启用 Versioning → Delete Marker 保护
- Non-current 版本 → Standard-IA → Glacier Deep Archive

### S3 Analytics
- 推荐 Standard 和 Standard-IA 之间的最佳转换天数
- **不适用于** One Zone-IA 和 Glacier
- 生成 **CSV 报告**
- **24-48 小时**开始生成分析数据
- 是制定 Lifecycle Rules 的好起点

## 考试要点

- Lifecycle Rules 可按 Prefix 和 Tag 过滤
- Transition = 转换类别，Expiration = 删除
- S3 Analytics 只推荐 Standard ↔ Standard-IA
- Non-current 版本也可以设置独立规则
- Multi-Part Upload 可设置过期自动清理

## English Short Summary

S3 Lifecycle Rules automate object transitions between storage classes. Two action types: Transition (e.g., Standard-IA after 60 days, Glacier after 6 months) and Expiration (e.g., delete logs after 365 days, clean up incomplete multi-part uploads). Rules can filter by prefix or object tags. Exam scenarios: source images → Standard then Glacier; thumbnails → One Zone-IA then expire. S3 Analytics generates CSV reports recommending optimal transition days between Standard and Standard-IA (not for Glacier), with data available after 24-48 hours.
