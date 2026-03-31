---
title: "S3 Pre-signed URLs"
lectureId: 160
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "Pre-signed URL", "Temporary Access"]
---

## 中文短总结

本讲介绍 S3 Pre-signed URL。通过 Console/CLI/SDK 生成包含过期时间的 URL。Console 最长 **12 小时**，CLI 最长 **168 小时**。获得 URL 的用户**继承生成者的 GET/PUT 权限**。用例：私有 Bucket 临时分享文件、只允许登录用户下载付费视频、动态生成 URL 允许不断变化的用户列表访问、临时允许用户上传到指定位置——同时保持 Bucket 私有。

## 中文长总结

### Pre-signed URL
- 通过 Console / CLI / SDK 生成
- 包含**过期时间**

### 有效期
| 生成方式 | 最长有效期 |
|----------|-----------|
| Console | **12 小时** |
| CLI | **168 小时**（7 天） |

### 权限继承
- URL 接收者**继承生成者的权限**
- 适用于 GET 和 PUT 操作

### 使用场景
- 私有 Bucket 中临时分享文件
- 只允许登录用户下载付费视频
- 动态生成 URL 给不断变化的用户列表
- 临时允许用户上传到指定位置

## 考试要点

- Console 最长 12 小时，CLI 最长 168 小时
- 继承生成者权限
- 用于临时访问私有 S3 文件

## English Short Summary

S3 Pre-signed URLs provide temporary access to private S3 objects. Generated via Console (max 12 hours), CLI (max 168 hours), or SDK. The recipient inherits the permissions of the user who generated the URL for GET or PUT operations. Use cases: temporary file sharing from private buckets, allowing logged-in users to download premium content, dynamically granting access to changing user lists, and temporary upload access to specific locations — all while keeping the bucket private.
