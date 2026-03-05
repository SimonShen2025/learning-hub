---
title: "Trusted Advisor Overview"
lectureId: 386
section: "s31"
sectionTitle: "WhitePapers and Architectures"
date: "2026-03-05"
tags: [trusted-advisor, support-plan, best-practices, cost-optimization]
---

## 中文短总结

AWS Trusted Advisor：自动化账户级评估工具，提供 **6 类检查**：①成本优化②性能③安全④容错⑤服务限制⑥卓越运营。**免费层（Basic/Developer Support Plan）**：仅核心检查（7 项，如 S3 权限/SG 端口/IAM 使用/MFA/EBS/RDS 快照/服务限制）。**完整检查需 Business/Enterprise Support Plan** 才能启用。支持 CloudWatch Alarm 设置在服务限制上。**考试关键**：看到"所有 Trusted Advisor 检查" → 必须有 Business 或更高支持计划。

## 中文长总结

Trusted Advisor 是 AWS 自动化最佳实践检查服务。

**6 类检查：**

| 类别 | 英文 | 示例 |
|------|------|------|
| 成本优化 | Cost Optimization | 低利用率实例、未使用资源 |
| 性能 | Performance | 高利用率资源 |
| 安全 | Security | MFA、SG 配置 |
| 容错 | Fault Tolerance | 跨 AZ、备份 |
| 服务限制 | Service Limits | 服务配额使用率 |
| 卓越运营 | Operational Excellence | 日志、监控 |

**Support Plan 分级：**

| Support Plan | Trusted Advisor 检查 |
|-------------|---------------------|
| Basic / Developer | **仅 7 项核心检查** |
| **Business** | ✅ 全部检查 |
| **Enterprise** | ✅ 全部检查 |

**7 项核心免费检查：**
1. S3 Bucket 权限
2. Security Group（特定端口无限制访问）
3. IAM 使用
4. Root 账号 MFA
5. EBS 公开快照
6. RDS 公开快照
7. 服务限制

## 考试要点

- Trusted Advisor = 6 类自动化最佳实践检查
- Basic/Developer → 仅 7 项核心检查
- Business/Enterprise → 全部检查
- 看到"启用全部 Trusted Advisor" → 需要 Business/Enterprise Support Plan
- 可对服务限制设置 CloudWatch Alarm

## English Short Summary

AWS Trusted Advisor: automated account-level assessment across **6 categories**: cost optimization, performance, security, fault tolerance, service limits, and operational excellence. **Free tier (Basic/Developer)**: only 7 core checks (S3 permissions, SG unrestricted ports, IAM usage, root MFA, EBS/RDS public snapshots, service limits). **Full checks require Business/Enterprise Support Plan**. Can set CloudWatch Alarms on service limits. **Exam**: "all Trusted Advisor checks" → must have Business or higher support plan.
