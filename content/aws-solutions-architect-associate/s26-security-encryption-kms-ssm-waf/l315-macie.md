---
title: "Amazon Macie"
lectureId: 315
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [macie, pii, data-privacy, s3, ml]
---

## 中文短总结

Amazon Macie：全托管数据安全与隐私服务，使用机器学习和模式匹配发现 S3 中的**敏感数据**（特别是 PII — 个人身份信息）。工作流程：Macie 分析 S3 Bucket → 发现敏感数据 → 生成 Findings → EventBridge 通知（可触发 Lambda/SNS/SQS 等）。简单记忆：看到 PII 数据发现 + S3 → Macie。

## 中文长总结

Amazon Macie 是 AWS 的数据安全与隐私服务。

**核心能力：**
- 使用 **机器学习 + 模式匹配** 发现和保护敏感数据
- 专注于 **S3 存储桶** 中的数据分析
- 主要识别 **PII（Personally Identifiable Information / 个人身份信息）**
  - 姓名、地址、信用卡号、社保号等

**工作流程：**
```
S3 Bucket（数据）→ Macie 分析 → 发现 PII/敏感数据 → Findings
→ EventBridge → SNS/Lambda/SQS 通知和响应
```

**使用场景：**
- 合规性检查（GDPR、HIPAA 等）
- 数据泄露风险评估
- S3 中敏感信息的自动发现和告警

## 考试要点

- Macie = ML 发现 S3 中的 PII/敏感数据
- 看到 PII + S3 → Macie
- EventBridge 集成做通知
- 区分：GuardDuty（威胁检测）/ Inspector（漏洞扫描）/ Macie（PII 数据发现）

## English Short Summary

Amazon Macie: fully managed data security and privacy service using ML and pattern matching to discover **sensitive data** (especially PII — Personally Identifiable Information) in S3 buckets. Workflow: Macie analyzes S3 → discovers PII → generates Findings → EventBridge notification (triggers Lambda/SNS/SQS). Key exam tip: PII discovery + S3 → Macie.
