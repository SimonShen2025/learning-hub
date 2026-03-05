---
title: "CloudFormation Intro"
lectureId: 370
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [cloudformation, iac, infrastructure-as-code, declarative]
---

## 中文短总结

CloudFormation：AWS 声明式 Infrastructure as Code（IaC）工具。用 YAML/JSON 模板定义所有 AWS 资源 → CloudFormation 自动按正确顺序创建。优势：①代码化基础设施（代码审查控制变更）②成本优化（自动标签、5PM 删除/8AM 重建）③生产力提升（快速创建/销毁，自动化实验）④几乎支持所有 AWS 资源（不支持的用 Custom Resource）。可用 **Infrastructure Composer** 可视化模板。考试关键词：IaC、跨环境/区域/账号重复架构。

## 中文长总结

CloudFormation 是 AWS 基础设施管理的核心。

**核心概念：**
- **声明式**：只说"要什么"，CloudFormation 决定"怎么做"
- **模板**：YAML 或 JSON 格式定义资源
- **Stack**：模板创建的资源集合

**优势：**

| 方面 | 优势 |
|------|------|
| **代码控制** | 所有变更通过代码审查 |
| **成本** | 自动标签 + 定时创建/删除（省夜间费用） |
| **生产力** | 快速创建/销毁环境 |
| **可视化** | Infrastructure Composer 查看架构图 |
| **复用** | 模板跨环境/区域/账号使用 |

**支持几乎所有 AWS 资源**，不支持的用 Custom Resource。

## 考试要点

- CloudFormation = IaC 声明式
- 跨环境/区域/账号重复架构
- 几乎支持所有 AWS 资源
- Infrastructure Composer 可视化

## English Short Summary

CloudFormation: AWS declarative **Infrastructure as Code (IaC)**. Define all resources in YAML/JSON templates → CloudFormation creates them in correct order. Benefits: code review for changes, cost savings (auto-tag, scheduled create/delete), rapid creation/destruction, supports almost all AWS resources (Custom Resource for unsupported). **Infrastructure Composer** for visual template viewing. Exam: IaC, repeat architecture across environments/regions/accounts.
