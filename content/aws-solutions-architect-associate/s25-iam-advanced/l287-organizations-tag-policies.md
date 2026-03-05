---
title: "Organizations - Tag Policies"
lectureId: 287
section: "s25"
sectionTitle: "Identity and Access Management (IAM) - Advanced"
date: "2026-03-05"
tags: [organizations, tag-policy, compliance, cost-allocation, abac]
---

## 中文短总结

Tag Policy 用于在 AWS 组织中标准化标签使用。定义允许的标签键和值，确保跨账号标签一致性。用途：成本分配（Cost Allocation Tags）和基于属性的访问控制（ABAC）。可阻止不合规的标签操作（但不影响未标签的资源）。可生成报告列出所有合规/不合规标签资源。用 EventBridge 检查不合规标签。考试关键词：跨账号一致标签 → Tag Policies。

## 中文长总结

Tag Policy 是 AWS Organizations 中的策略类型，用于标准化组织内的标签使用。

**核心功能：**
- 定义标签键及允许的值
- 确保跨账号的一致标签
- 支持直接应用到资源或限制标签分配

**主要用途：**
- **Cost Allocation Tags**：基于标签的成本分配和账单分析
- **ABAC（Attribute-Based Access Control）**：基于标签的访问控制
- 两者组合使用效果最佳（限制标签确保一致性 → 实现精确的成本核算和权限控制）

**合规特性：**
- 可阻止不合规的标签操作
- 不影响未标签的资源
- 生成合规/不合规标签资源报告
- 使用 EventBridge 监控不合规标签

## 考试要点

- 跨账号标签一致性 → Tag Policies
- 与 Cost Allocation Tags + ABAC 配合使用
- 不影响无标签资源
- EventBridge 监控不合规标签

## English Short Summary

Tag Policies standardize tags across an AWS Organization. Define allowed tag keys/values to ensure consistency for Cost Allocation Tags and ABAC (Attribute-Based Access Control). Can prevent non-compliant tagging operations (but doesn't affect untagged resources). Generates compliance reports. Use EventBridge for non-compliant tag detection. Exam keyword: consistent tags across accounts → Tag Policies.
