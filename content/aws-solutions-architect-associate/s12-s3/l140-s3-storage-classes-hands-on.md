---
title: "S3 Storage Classes Hands On"
lectureId: 140
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Storage Classes", "Lifecycle Rules", "Hands-On"]
---

## 中文短总结

本讲演示了 S3 存储类别的实际操作。上传 Object 时可选择存储类别（Standard、Intelligent-Tiering、Standard-IA、One Zone-IA、三种 Glacier 级别等）。上传后可在 Properties 中手动修改存储类别。在 Management 中可创建 **Lifecycle Rules** 自动化迁移：例如 30 天后转 Standard-IA → 60 天后转 Intelligent-Tiering → 180 天后转 Glacier Flexible Retrieval。Lifecycle Rules 可以可视化查看所有转换路径。

## English Short Summary

This hands-on demonstrates S3 storage class operations. Storage class can be selected during upload (Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, three Glacier tiers, etc.) and modified later in Properties. Lifecycle Rules in Management automate transitions: e.g., Standard-IA after 30 days → Intelligent-Tiering after 60 days → Glacier Flexible Retrieval after 180 days. Transition paths can be visualized in the review.
