---
title: "S3 Overview"
lectureId: 128
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Storage", "Bucket", "Object"]
---

## 中文短总结

本讲介绍 Amazon S3 核心概念——AWS 的无限扩展存储服务，是 AWS 最重要的构建块之一。S3 以 **Bucket**（顶级目录）存储 **Object**（文件），Bucket 名称**全球唯一**（所有 Region 所有 Account），但 Bucket 定义在特定 Region。Object Key 是文件的完整路径（prefix + object name），不存在真正的"目录"概念。Object 最大 **5 TB**，超过 5 GB 必须使用 **Multi-Part Upload**。Object 还有 Metadata（键值对）、Tags（最多 10 个，用于安全和生命周期）和 Version ID（启用版本控制时）。

## 中文长总结

### S3 基础概念
- **Infinitely scaling storage**（无限扩展存储）
- 许多网站以 S3 为基础，许多 AWS 服务与 S3 集成

### 使用场景
- 备份和存储、灾难恢复、归档
- 混合云存储、应用托管、媒体托管
- Data Lake（数据湖）+ 大数据分析
- 软件交付、静态网站托管

### Bucket（桶）
- S3 的**顶级容器**
- 名称**全球唯一**（所有 Region + 所有 Account）
- 虽然 S3 看起来是全局服务，但 Bucket **定义在特定 Region**
- 命名规则：无大写、无下划线、3-63 字符、不能是 IP、以小写字母或数字开头

### Object（对象）
- **Key** = 文件的完整路径（如 `my-folder/sub-folder/file.txt`）
- Key = **Prefix** + **Object Name**
- S3 没有真正的目录概念，只有包含 `/` 的 Key
- **最大 5 TB**（5000 GB）
- **超过 5 GB** → 必须使用 **Multi-Part Upload**
- **Metadata**：键值对（系统或用户设置）
- **Tags**：最多 10 个 Unicode 键值对
- **Version ID**：启用版本控制时可用

## 考试要点

- Bucket 名称**全球唯一**
- Bucket 定义在**特定 Region**（不是全局的）
- Object 最大 **5 TB**，超 5 GB 用 **Multi-Part Upload**
- S3 没有真正的目录，只有 Key（路径）

## English Short Summary

Amazon S3 is AWS's infinitely scaling storage service. Files (Objects) are stored in Buckets (top-level directories). Bucket names must be globally unique across all regions and accounts, though buckets are defined in specific regions. Object Key is the full path (prefix + object name) — S3 has no real directory concept. Max object size is 5 TB; files over 5 GB require Multi-Part Upload. Objects also have Metadata (key-value pairs), Tags (up to 10), and Version IDs when versioning is enabled.
