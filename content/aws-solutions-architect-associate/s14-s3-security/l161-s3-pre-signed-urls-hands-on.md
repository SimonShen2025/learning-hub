---
title: "S3 Pre-signed URLs - Hands On"
lectureId: 161
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "Pre-signed URL", "Hands-On"]
---

## 中文短总结

本讲演示 S3 Pre-signed URL。私有 Bucket 中的对象通过 Object URL 访问返回 Access Denied。但点击 Console "Open" 按钮会打开带 Pre-signed URL 的页面（URL 中包含凭证信息）。手动生成：Object Actions → Share with a pre-signed URL，设置有效期（分钟或小时），生成后任何人可通过该 URL 访问图片直到过期。

## English Short Summary

Hands-on Pre-signed URL demo. Private bucket object returns "Access Denied" via direct Object URL. Console's "Open" button uses a pre-signed URL with embedded credentials. Manual generation: Object Actions → Share with a pre-signed URL, set validity period (minutes or hours). Anyone with the generated URL can access the image until expiration.
