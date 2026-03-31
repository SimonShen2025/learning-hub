---
title: "S3 Hands On"
lectureId: 129
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Hands-On", "Pre-signed URL"]
---

## 中文短总结

本讲演示了 S3 基本操作：创建 Bucket（选择 Region，Bucket 名称全球唯一）、上传 Object（coffee.jpg）、打开 Object 的两种方式（Open 按钮使用 **Pre-signed URL** 包含签名凭证可以访问，Object URL 是公共 URL 返回 403 Access Denied）、创建文件夹、删除文件夹等。关键发现：Pre-signed URL 在 URL 中编码了用户凭证，因此可以访问；公共 Object URL 不包含凭证所以被拒绝。

## English Short Summary

This hands-on demonstrates S3 basics: creating a bucket (globally unique name, region-specific), uploading objects (coffee.jpg), opening objects via two methods — the "Open" button generates a **Pre-signed URL** (contains encoded credentials, works) vs. the Object URL (public URL, returns 403 Access Denied). Also covers creating and deleting folders. Key insight: pre-signed URLs embed user credentials for authorized access.
