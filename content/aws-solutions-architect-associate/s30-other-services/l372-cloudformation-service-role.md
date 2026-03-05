---
title: "CloudFormation - Service Role"
lectureId: 372
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [cloudformation, iam, service-role, least-privilege, passrole]
---

## 中文短总结

CloudFormation Service Role：专门为 CloudFormation 创建的 IAM 角色，允许 CloudFormation 代替用户创建/更新/删除资源。**用途**：用户本身没有直接操作资源的权限，但可以通过传递 Service Role 给 CloudFormation 来间接操作 → **最小权限原则**。例如：用户只有 CloudFormation + iam:PassRole 权限 → Service Role 有 S3 完全访问权限 → CloudFormation 用 Service Role 创建 S3 Bucket。**关键**：用户需要 **iam:PassRole** 权限才能传递角色给服务。

## 中文长总结

CloudFormation Service Role 实现安全的最小权限。

**架构：**
```
用户（仅 CloudFormation + iam:PassRole 权限）
    ↓ 传递 Service Role
CloudFormation（使用 Service Role 的权限）
    ↓ 创建/更新/删除
AWS 资源（如 S3 Bucket）
```

**关键权限：**
- 用户需要：CloudFormation 操作 + **iam:PassRole**
- Service Role 需要：目标资源操作权限（如 s3:*）
- 不指定 Service Role → 使用用户自己的权限

## 考试要点

- Service Role = 最小权限原则
- 用户不需要直接资源权限，只需 iam:PassRole
- iam:PassRole = 允许将角色传递给 AWS 服务的关键权限

## English Short Summary

CloudFormation Service Role: IAM role dedicated to CloudFormation for creating/updating/deleting resources on user's behalf. Enables **least privilege**: user needs only CloudFormation actions + **iam:PassRole** — the Service Role has actual resource permissions (e.g., S3 full access). Without Service Role → uses user's own permissions. Key: **iam:PassRole** permission required to assign a role to any AWS service.
