---
title: "IAM Policies"
lectureId: 14
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "policies", "json", "permissions", "security"]
---

## 中文短总结

深入讲解 IAM Policy 的继承机制和 JSON 结构。组策略自动应用于组内所有成员；用户可继承多个组的策略，也可拥有直接附加的内联策略（Inline Policy）。Policy JSON 结构包含 Version、Statement（含 Effect/Allow|Deny、Principal、Action、Resource、Condition 等关键字段）。

## 中文长总结

**策略继承机制：**
- 附加到组的策略自动应用于组内所有成员
- 用户属于多个组时，继承所有组的策略（权限叠加）
- 内联策略（Inline Policy）：直接附加到单个用户的策略，不通过组继承
- 示例：Charles 同时属于 Developers 组和 Audit Team 组，可继承两个组的权限

**IAM Policy JSON 结构：**
- **Version**：策略语言版本（通常为 "2012-10-17"）
- **Id**：策略标识符（可选）
- **Statement**：一个或多个声明，每个声明包含：
  - **Sid**：声明 ID（可选标识符）
  - **Effect**：`Allow` 或 `Deny`，决定是否允许访问
  - **Principal**：策略适用的账户/用户/角色
  - **Action**：受影响的 API 调用列表
  - **Resource**：Action 所作用的资源列表
  - **Condition**：策略生效的条件（可选）

## 考试要点

- 理解 Effect（Allow/Deny）、Principal、Action、Resource 四个核心字段
- 组策略会被组内所有用户继承
- 用户可从多个组继承不同策略
- Inline Policy 直接附加到用户，不经过组
- Policy 使用 JSON 格式定义

## English Short Summary

Deep dive into IAM Policy inheritance and JSON structure. Group policies apply to all members; users inherit policies from multiple groups and can have inline policies attached directly. Policy JSON contains Version, Statement blocks with key fields: Effect (Allow/Deny), Principal, Action, Resource, and optional Condition.
