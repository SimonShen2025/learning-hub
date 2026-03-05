---
title: "AWS Control Tower"
lectureId: 294
section: "s25"
sectionTitle: "Identity and Access Management (IAM) - Advanced"
date: "2026-03-05"
tags: [control-tower, multi-account, guardrails, scp, config, compliance]
---

## 中文短总结

AWS Control Tower 快速建立安全合规的多账号环境（基于 Organizations 自动创建账号）。两种 Guardrails（护栏）：①**Preventive Guardrail（预防性）**——使用 SCP 阻止操作（如限制只能使用特定区域）②**Detective Guardrail（检测性）**——使用 AWS Config 检测不合规（如未标签资源），不合规 → SNS → 可触发 Lambda 自动修复。Dashboard 监控整体合规状态。

## 中文长总结

AWS Control Tower 是多账号治理服务，基于最佳实践快速设置安全合规环境。

**核心价值：**
- 自动化环境设置（几次点击）
- 使用 AWS Organizations 创建账号
- 自动化持续策略管理
- 检测并自动修复违规
- 交互式 Dashboard 监控合规

**两种 Guardrails（护栏）：**

| 类型 | 机制 | 用途 | 示例 |
|------|------|------|------|
| **Preventive（预防性）** | SCP | 阻止账号执行操作 | 限制只能在 us-east-1 和 eu-west-2 操作 |
| **Detective（检测性）** | AWS Config | 检测不合规资源 | 识别未标签资源 |

**Detective Guardrail 自动修复流程：**
```
Control Tower → Config（部署到所有成员账号）
             → 检测不合规资源
             → SNS Topic 通知
             → Lambda 函数自动修复（如添加标签）
```

**与 Organizations 的关系：**
- Control Tower 建立在 Organizations 之上
- Preventive Guardrails 底层使用 SCP
- 提供更高级别的抽象和自动化

## 考试要点

- Control Tower = 多账号安全合规管理（基于 Organizations）
- Preventive Guardrail → SCP（阻止）
- Detective Guardrail → AWS Config（检测）
- 不合规检测 → SNS → Lambda 自动修复
- 区别于 Organizations：Control Tower 是更高层级的管理工具

## English Short Summary

AWS Control Tower provides easy setup of secure, compliant multi-account environments (built on Organizations). Two types of Guardrails: (1) **Preventive** — uses SCP to block actions (e.g., restrict to specific regions); (2) **Detective** — uses AWS Config to detect non-compliance (e.g., untagged resources) → SNS notification → Lambda auto-remediation. Interactive dashboard for compliance monitoring across all accounts.
