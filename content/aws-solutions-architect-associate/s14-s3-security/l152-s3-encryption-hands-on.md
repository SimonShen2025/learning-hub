---
title: "S3 Encryption - Hands On"
lectureId: 152
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "Encryption", "SSE-S3", "SSE-KMS", "Hands-On"]
---

## 中文短总结

本讲演示 S3 加密操作。创建启用 Versioning 的 Bucket，默认加密 SSE-S3。上传文件后可在 Server-Side Encryption Settings 中确认。编辑对象加密会创建新版本。可切换为 SSE-KMS 并选择 KMS Key（默认 AWS/S3 Key 免费，自定义 Key 收费）。Bucket 级别默认加密可在 Properties → Default Encryption 中设置（SSE-S3/SSE-KMS/DSSE-KMS）。SSE-KMS 启用 Bucket Key 可减少 KMS API 调用降低成本。SSE-C 只能通过 CLI 设置，Client-Side 不需要告知 AWS。

## English Short Summary

Hands-on demo of S3 encryption. Creates a versioning-enabled bucket with default SSE-S3 encryption. Uploads show SSE-S3 in server-side encryption settings. Editing encryption to SSE-KMS creates a new version; choose KMS key (default AWS/S3 key is free, custom keys cost money). Bucket-level default encryption configurable in Properties (SSE-S3/SSE-KMS/DSSE-KMS). SSE-KMS Bucket Key reduces KMS API calls. SSE-C is CLI-only; client-side encryption doesn't need AWS configuration.
