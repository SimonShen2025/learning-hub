---
title: 'IAM Introduction: Users, Groups, Policies'
lectureId: 11
section: 4
sectionTitle: IAM & AWS CLI
date: '2026-03-05'
tags:
  - iam
  - users
  - groups
  - policies
  - security
  - least-privilege
note: ''
---

## 中文短总结

IAM（Identity and Access Management）是 AWS 的全局服务，用于创建和管理用户、用户组及权限策略。root 账户仅用于初始设置，日常应使用 IAM 用户。用户可分组（组只能包含用户，不能嵌套），也可属于多个组。通过 JSON 格式的 IAM Policy 为用户/组分配权限，遵循最小权限原则（Least Privilege Principle），仅授予用户完成工作所需的最少权限。

## 中文长总结

IAM（Identity and Access Management）是 AWS 的核心安全服务，属于全局服务（Global Service），不区分区域。

**核心概念：**
- **Root 账户**：创建 AWS 账号时自动生成，拥有最高权限。仅应用于账户初始设置，之后不应日常使用或共享。
- **IAM 用户**：代表组织中的一个真实人员，每人一个用户。
- **IAM 用户组**：将用户归组管理。组只能包含用户，不能包含其他组。用户可以不属于任何组，也可以同时属于多个组。

**IAM Policy（策略）：**
- 使用 JSON 文档定义权限，描述用户或组被允许执行的操作。
- Policy 可附加到用户或组，组内所有用户继承该组的权限。
- 示例：允许用户使用 EC2 的 Describe 操作、ELB 的 Describe 操作、CloudWatch 服务等。

**最小权限原则（Least Privilege Principle）：**
- AWS 的核心安全理念：只给用户完成工作所必需的权限，不多给。
- 新用户不应拥有对所有服务的完全访问权限，以避免安全风险和成本浪费。

## 考试要点

- IAM 是全局服务，不受区域限制
- Root 账户仅用于初始设置，日常使用 IAM 用户
- 用户组只能包含用户，不能嵌套（不能包含其他组）
- 一个用户可以属于多个组
- IAM Policy 是 JSON 格式文档，定义用户/组的权限
- 遵循最小权限原则（Least Privilege Principle）

## English Short Summary

IAM (Identity and Access Management) is a global AWS service for managing users, groups, and permissions. The root account should only be used for initial setup; daily operations should use IAM users. Users can be organized into groups (groups contain only users, no nesting). Permissions are defined via JSON IAM Policies attached to users or groups, following the Least Privilege Principle—granting only the minimum permissions needed.
