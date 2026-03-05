---
title: "AWS Config - Hands On"
lectureId: 283
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [config, hands-on, compliance, security-group, remediation]
---

## 中文短总结

实操演示 AWS Config：①设置 Config 记录所有资源（含全局资源如 IAM），需创建 Service-Linked Role 和 S3 存储桶②添加 restricted-ssh 规则检查安全组是否开放 22 端口③发现不合规安全组（port 22 from anywhere）→ 修改安全组删除规则 → Config 自动重新评估 → 变为合规④查看 Resource Timeline 显示配置变更历史、CloudTrail 事件和规则合规状态变化⑤设置 Remediation（SSM Automation Documents，自动/手动，可设重试）⑥Aggregators 可跨账号聚合。注意：Config 记录资源越多费用越高。

## English Short Summary

Hands-on demo of AWS Config: set up recording for all resources (including global IAM), creating service-linked role and S3 bucket. Added restricted-ssh rule checking security group port 22 access. Found non-compliant security groups (port 22 open from anywhere) → modified security group → Config re-evaluated → became compliant. Viewed Resource Timeline showing configuration changes, CloudTrail events, and rule compliance transitions. Set up Remediation with SSM Automation Documents (auto/manual with retries). Note: more recorded resources = higher costs.
