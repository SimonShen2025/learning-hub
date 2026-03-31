---
title: "S3 Lifecycle Rules - Hands On"
lectureId: 143
section: 13
sectionTitle: "Advanced Amazon S3"
date: "2026-03-05"
tags: ["S3", "Lifecycle Rules", "Hands-On"]
---

## 中文短总结

本讲演示了创建 S3 Lifecycle Rule 的完整流程。在 Management 中创建规则，可配置五种操作：移动当前版本对象、移动非当前版本对象、过期当前版本、永久删除非当前版本、删除过期删除标记/不完整上传。演示了当前版本的多级转换链（30 天 Standard-IA → 60 天 Intelligent-Tiering → 90 天 Glacier Instant → 180 天 Flexible → 365 天 Deep Archive）和非当前版本转换（90 天 Glacier Flexible），以及 700 天后过期和永久删除。界面提供时间线视图可视化所有转换路径。

## English Short Summary

This hands-on creates S3 Lifecycle Rules in Management. Five configurable actions: transition current/non-current versions, expire current versions, permanently delete non-current versions, and delete markers/incomplete uploads. Demo shows a multi-stage transition chain for current versions (30d Standard-IA → 60d Intelligent-Tiering → 90d Glacier Instant → 180d Flexible → 365d Deep Archive), non-current to Glacier Flexible at 90d, and expiration/deletion at 700d. The UI provides a timeline visualization of all transitions.
