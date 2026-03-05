---
title: "S3 Security: Bucket Policy Hands On"
lectureId: 131
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Bucket Policy", "Policy Generator", "Hands-On"]
---

## 中文短总结

本讲演示了创建 S3 Bucket Policy 使 Object 公开访问的步骤。首先在 Permissions 中**禁用 Block Public Access**（危险操作，需确认），然后使用 **AWS Policy Generator** 生成 JSON 策略：选择 S3 Bucket Policy 类型、Allow 效果、Principal `*`、Action `s3:GetObject`、ARN 为 `bucket-arn/*`（注意加 `/*` 表示 Bucket 内的所有 Object）。将生成的 JSON 粘贴到 Bucket Policy 编辑器保存后，Object URL 变为可公开访问。

## English Short Summary

This hands-on demonstrates making S3 objects publicly accessible via Bucket Policy. Steps: disable Block Public Access (dangerous, confirmation required), then use AWS Policy Generator to create a JSON policy (S3 Bucket Policy type, Allow, Principal `*`, Action `s3:GetObject`, ARN `bucket-arn/*` — the `/*` is critical to target objects within the bucket). After saving the policy, the public Object URL becomes accessible, displaying the image.
