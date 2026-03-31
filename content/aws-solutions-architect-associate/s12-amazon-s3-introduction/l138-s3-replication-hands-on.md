---
title: "S3 Replication - Hands On"
lectureId: 138
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Replication", "CRR", "Hands-On"]
---

## 中文短总结

本讲演示了 S3 跨区域复制的完整流程。创建两个启用版本控制的 Bucket（Origin 在 eu-west-1，Replica 在 us-east-1），在 Origin 的 Management 中创建 Replication Rule，指定目标 Bucket 并创建 IAM Role。启用时提示是否复制已有对象（选 No，已有对象需 Batch Replication）。验证：新上传的文件会自动异步复制到目标 Bucket，**Version ID 保持一致**。启用 Delete Marker Replication 后，Delete Marker 也会被复制。但**永久删除（特定 Version ID）不会复制**到目标 Bucket。

## English Short Summary

This hands-on demonstrates S3 Cross-Region Replication: create two versioning-enabled buckets (origin eu-west-1, replica us-east-1), set up a replication rule in Management with IAM role. Existing objects require S3 Batch Replication (not auto-replicated). New uploads replicate asynchronously with matching version IDs. With Delete Marker Replication enabled, delete markers propagate. Permanent deletes (specific version IDs) are NOT replicated to the target bucket.
