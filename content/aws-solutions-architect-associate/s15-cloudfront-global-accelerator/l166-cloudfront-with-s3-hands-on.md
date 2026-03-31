---
title: "CloudFront with S3 - Hands On"
lectureId: 166
section: 15
sectionTitle: "CloudFront & AWS Global Accelerator"
date: "2026-03-05"
tags: ["CloudFront", "S3", "OAC", "Hands-On"]
---

## 中文短总结

本讲演示创建 CloudFront Distribution 并以 S3 为 Origin。上传文件到私有 S3 Bucket（直接通过 Object URL 访问会 Access Denied）。创建 CloudFront Distribution（Free Plan），选择 S3 为 Origin，启用 Private S3 Bucket Access。CloudFront 自动在 S3 Bucket Policy 中添加允许规则。通过 CloudFront Domain Name 访问（`/coffee.jpg`、`/index.html`），内容从 Edge 缓存加载极快。Bucket 保持私有，仅通过 CloudFront 提供访问。

## English Short Summary

Hands-on creating a CloudFront distribution with S3 origin. Upload files to a private S3 bucket (direct Object URL returns Access Denied). Create CloudFront distribution (Free Plan), select S3 origin with private bucket access enabled. CloudFront automatically adds a bucket policy allowing access from the distribution. Access content via CloudFront domain name (`/coffee.jpg`, `/index.html`) — cached loading is nearly instantaneous. Bucket remains private; access only through CloudFront.
