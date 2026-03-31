---
title: "S3 Access Logs - Hands On"
lectureId: 159
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "Access Logs", "Hands-On"]
---

## 中文短总结

本讲演示启用 S3 Access Logs。创建专用日志 Bucket。在监控 Bucket 的 Properties → Server Access Logging 中启用，指定日志 Bucket 为目标。启用后 AWS 自动更新日志 Bucket 的 Bucket Policy，允许 S3 Logging Service 写入对象。在监控 Bucket 中执行操作（上传、浏览）后，需要等待数小时日志才会出现在日志 Bucket 中。日志文件包含 API 调用、成功/失败、访问者、时间等信息。

## English Short Summary

Hands-on enabling S3 Access Logs. Create a dedicated logging bucket. Enable in monitored bucket's Properties → Server Access Logging, specifying the logging bucket as destination. AWS automatically updates the logging bucket's policy to allow S3 logging service to write objects. After performing operations (uploads, browsing) on the monitored bucket, logs appear in the logging bucket after several hours. Log files contain API calls, success/failure status, accessor identity, timestamps, etc.
