---
title: "S3 Default Encryption"
lectureId: 153
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "Default Encryption", "Bucket Policy"]
---

## 中文短总结

本讲介绍 S3 默认加密与 Bucket Policy 的关系。所有新 Bucket 默认启用 **SSE-S3**，可改为 SSE-KMS。也可通过 **Bucket Policy** 强制要求特定加密方式（如拒绝没有 KMS Header 的 PUT 请求），例如拒绝缺少 SSE-KMS 或 SSE-C 加密头的上传请求。**关键点**：Bucket Policy 的评估**优先于** Default Encryption 设置。

## 中文长总结

### 默认加密
- 所有新 Bucket 默认 **SSE-S3**
- 可更改为 SSE-KMS

### Bucket Policy 强制加密
- 可拒绝缺少特定加密 Header 的 PUT 请求
- 示例 1：拒绝没有 `aws:kms` Header 的请求（强制 SSE-KMS）
- 示例 2：拒绝没有 customer algorithm 的请求（强制 SSE-C）

### 评估优先级
- **Bucket Policy 先于 Default Encryption 评估**

## 考试要点

- 默认加密 = SSE-S3（可更改）
- Bucket Policy **优先于** Default Encryption
- 可通过 Bucket Policy 强制特定加密方式

## English Short Summary

All new S3 buckets have SSE-S3 default encryption (changeable to SSE-KMS). Bucket policies can additionally enforce specific encryption by denying PUT requests without correct encryption headers (e.g., deny uploads lacking SSE-KMS or SSE-C headers). Key point: bucket policies are always evaluated before default encryption settings.
