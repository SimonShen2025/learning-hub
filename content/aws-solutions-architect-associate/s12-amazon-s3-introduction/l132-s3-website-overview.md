---
title: "S3 Website Overview"
lectureId: 132
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Static Website", "Hosting"]
---

## 中文短总结

本讲介绍 S3 静态网站托管功能。S3 可以托管静态网站（HTML、图片等），网站 URL 格式根据 Region 不同为 `bucket-name.s3-website-region.amazonaws.com` 或 `bucket-name.s3-website.region.amazonaws.com`（区别在于 `-` 和 `.`）。前提条件是必须通过 **Bucket Policy 启用公共读取**。如果遇到 **403 Forbidden** 错误，说明 Bucket 不是公共的，需要添加允许公共访问的 Bucket Policy。

## 中文长总结

### S3 静态网站托管
- S3 可托管**静态网站**并通过互联网访问
- 网站 URL 格式（两种，取决于 Region）：
  - `bucket.s3-website-region.amazonaws.com`
  - `bucket.s3-website.region.amazonaws.com`
- 区别仅为 `-` 和 `.`，无需记忆

### 前提条件
- 必须**启用公共读取**（通过 Bucket Policy）
- 如果出现 **403 Forbidden** → Bucket 不是公共的

## 考试要点

- S3 可托管静态网站
- 必须启用公共读取才能访问
- 403 Forbidden = Bucket Policy 未设为公共

## English Short Summary

S3 can host static websites accessible via the internet. The website URL format varies slightly by region (dash vs. dot). The prerequisite is enabling public reads on the bucket via a Bucket Policy. A 403 Forbidden error indicates the bucket is not public — attach a public access Bucket Policy to resolve it.
