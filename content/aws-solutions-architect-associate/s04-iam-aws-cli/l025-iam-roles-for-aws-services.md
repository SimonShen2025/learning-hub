---
title: "IAM Roles for AWS Services"
lectureId: 25
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "roles", "ec2", "lambda", "security"]
---

## 中文短总结

IAM Role（角色）用于为 AWS 服务（而非人员）分配权限。当 AWS 服务（如 EC2 实例）需要代表用户执行操作时，需通过 IAM Role 获取权限。Role 类似用户，但供 AWS 服务使用。常见的 Role 包括：EC2 Instance Role、Lambda Function Role、CloudFormation Role。EC2 实例通过绑定 IAM Role 来安全地访问其他 AWS 服务。

## 中文长总结

**IAM Role 的核心概念：**
- IAM Role 是一种身份，类似于用户，但专门设计用于 AWS 服务（而非人类用户）
- 当 AWS 服务需要以你的名义（on your behalf）在你的账户中执行操作时，需要权限
- 通过创建 IAM Role 并附加适当的策略来授予这些权限

**工作机制：**
- 创建 IAM Role → 附加权限策略 → 将 Role 绑定到 AWS 服务
- 绑定后，AWS 服务使用 Role 的权限来访问其他 AWS 资源
- 如果 Role 的权限设置正确，API 调用将成功

**常见 IAM Role 类型：**
- **EC2 Instance Role**：允许 EC2 实例访问其他 AWS 服务（将在下一 Section 详细使用）
- **Lambda Function Role**：允许 Lambda 函数执行 AWS 操作
- **CloudFormation Role**：允许 CloudFormation 管理 AWS 资源

## 考试要点

- IAM Role 用于 AWS 服务，不用于人类用户
- EC2 实例通过 IAM Role 获取访问其他 AWS 服务的权限
- 常见 Role：EC2 Instance Role、Lambda Function Role、CloudFormation Role
- Role 与策略（Policy）配合使用，决定服务可执行的操作

## English Short Summary

IAM Roles assign permissions to AWS services (not people). When an AWS service like EC2 needs to perform actions on your behalf, it uses an IAM Role with attached policies. Common roles include EC2 Instance Roles, Lambda Function Roles, and CloudFormation Roles. The EC2 instance binds to a Role to securely access other AWS services.
