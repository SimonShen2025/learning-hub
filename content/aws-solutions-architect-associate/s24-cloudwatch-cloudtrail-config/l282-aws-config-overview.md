---
title: "AWS Config - Overview"
lectureId: 282
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [config, compliance, audit, rules, remediation, ssm, eventbridge]
---

## 中文短总结

AWS Config 记录资源配置变更并评估合规性。规则类型：AWS 托管规则（75+）或自定义规则（Lambda）。触发方式：配置变更时 或 定期评估。**Config 不阻止操作**，仅记录和评估合规状态。补救措施（Remediation）：通过 SSM Automation Documents 自动修复不合规资源（如 RevokeUnusedIAMUserCredentials），支持最多 5 次自动重试。通知：EventBridge（不合规事件触发）或 SNS（所有变更+可过滤）。按区域服务，可跨区域/账号聚合。配置历史可存入 S3 供 Athena 分析。注意成本：按配置项记录 + 规则评估次数计费。

## 中文长总结

AWS Config 是资源配置审计和合规服务。

**核心功能：**
- 记录资源配置及其变更历史
- 基于规则评估资源合规性
- 查看资源配置时间线（何时变更、谁变更的）
- 与 CloudTrail 关联查看 API 调用

**解决的问题：**
- 安全组是否有不受限的 SSH 访问？
- S3 桶是否有公开访问？
- ALB 配置是否随时间变化？

**规则类型：**
- **AWS 托管规则**：75+ 条预建规则
- **自定义规则**：使用 Lambda 函数自定义（如检查 EBS 是否为 gp2、dev 环境 EC2 是否为 t2.micro）

**触发方式：**
- 配置变更时评估
- 定期评估（如每 2 小时）

**重要特性：**
- **Config 不阻止操作，不替代 IAM** → 仅记录和评估合规状态
- **Remediation（补救）**：
  - 使用 SSM Automation Documents 自动修复不合规资源
  - AWS 托管文档（如 RevokeUnusedIAMUserCredentials）或自定义文档
  - 自定义文档可调用 Lambda 函数
  - 支持最多 5 次自动重试

**通知方式：**
- **EventBridge**：不合规事件触发自动化
- **SNS**：所有配置项变更（可通过 SNS Filtering 过滤特定事件）

**部署特性：**
- 按区域服务
- 可跨区域和账号聚合数据
- 配置历史存入 S3，可用 Athena 查询
- 成本：$0.003/配置项记录 + $0.001/规则评估

## 考试要点

- Config = 资源配置审计 + 合规评估
- **不阻止操作**（不替代 IAM/安全组）
- 75+ AWS 托管规则 + 自定义 Lambda 规则
- Remediation 通过 SSM Automation Documents（最多 5 次重试）
- 按区域，可聚合跨区域/账号
- 通知：EventBridge（不合规触发）+ SNS（所有变更）
- Config 历史 → S3 → Athena

## English Short Summary

AWS Config records resource configurations and evaluates compliance against rules. Rule types: AWS managed (75+) or custom (Lambda). Triggers: on configuration change or periodic evaluation. **Config does not prevent actions** — only records and evaluates compliance. Remediation via SSM Automation Documents (e.g., RevokeUnusedIAMUserCredentials) with up to 5 auto-retries. Notifications: EventBridge (non-compliant events) or SNS (all changes, filterable). Per-region service with cross-region/account aggregation. Configuration history stored in S3 for Athena analysis.
