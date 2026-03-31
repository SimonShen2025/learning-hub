---
title: "S3 Object Lambda"
lectureId: 164
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "Object Lambda", "Access Points", "Lambda"]
---

## 中文短总结

本讲介绍 S3 Object Lambda——在对象被检索前通过 Lambda 函数修改对象内容，无需创建重复 Bucket。架构：S3 Bucket → S3 Access Point → Lambda Function → S3 Object Lambda Access Point → 应用。用例：Analytics 应用需要脱敏数据（PII Redaction），Lambda 删除敏感信息后返回；Marketing 应用需要富化数据，Lambda 查询客户忠诚度数据库后返回增强对象。一个 Bucket 通过不同 Lambda 和 Object Lambda Access Points 为不同应用提供不同的数据视图。其他用例：XML 转 JSON、图片水印/调整大小。

## 中文长总结

### S3 Object Lambda 概述
- 在对象**被检索前**通过 Lambda 修改内容
- 无需创建多个重复 Bucket

### 架构
```
S3 Bucket → S3 Access Point → Lambda Function → S3 Object Lambda AP → Application
```

### 使用场景

#### Analytics 应用——数据脱敏
- Lambda 函数**删除 PII 信息**
- 返回脱敏后的对象

#### Marketing 应用——数据富化
- Lambda 函数查询**客户忠诚度数据库**
- 返回增强后的对象

### 其他用例
- **XML → JSON** 格式转换
- **图片水印/调整大小**（水印可按用户定制）

### 核心价值
- **一个 S3 Bucket** + 不同 Lambda = 不同数据视图
- 避免数据重复存储

## 考试要点

- Object Lambda = 检索时通过 Lambda 修改对象
- 需要 S3 Access Point + S3 Object Lambda Access Point
- 常见用例：PII 脱敏、数据格式转换、图片水印
- 避免重复 Bucket

## English Short Summary

S3 Object Lambda modifies objects on-the-fly before retrieval using Lambda functions, eliminating the need for duplicate buckets. Architecture: S3 Bucket → S3 Access Point → Lambda Function → S3 Object Lambda Access Point → Application. Use cases: Analytics app gets redacted data (PII removed by Lambda), Marketing app gets enriched data (Lambda queries customer loyalty DB), XML-to-JSON conversion, image resizing/watermarking per user. One S3 bucket serves different data views to different applications through different Lambda functions.
