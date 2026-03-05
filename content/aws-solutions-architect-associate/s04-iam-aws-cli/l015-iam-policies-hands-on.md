---
title: "IAM Policies Hands On"
lectureId: 15
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "policies", "hands-on", "json", "permissions"]
---

## 中文短总结

实操演示 IAM 策略的工作机制：从组移除用户后权限立即失效（Access Denied）；直接附加 IAMReadOnlyAccess 策略后只能读不能写；演示 AdministratorAccess 策略的 JSON（Action: *, Resource: *）和 IAMReadOnlyAccess 的 JSON（Get*/List* on Resource *）；使用可视化编辑器自定义策略。

## 中文长总结

**权限验证实验：**
1. 将用户从 admin 组移除 → 刷新页面出现 Access Denied（无权执行 iam:ListUsers）
2. 直接附加 IAMReadOnlyAccess → 可以查看用户，但不能创建组（只读权限）
3. 将用户重新加入 admin 组 → 恢复完全管理权限

**策略 JSON 解读：**
- **AdministratorAccess**：`{"Effect": "Allow", "Action": "*", "Resource": "*"}` — 允许对任何资源执行任何操作
- **IAMReadOnlyAccess**：允许 `Get*` 和 `List*` 开头的 IAM API 调用，`Resource: *`
- 通配符 `*` 表示匹配所有（任意操作/资源）

**自定义策略创建：**
- 可使用 JSON 编辑器直接编写
- 可使用可视化编辑器（Visual Editor）选择服务、操作和资源
- 示例：创建仅允许 `iam:ListUsers` 和 `iam:GetUser` 的自定义策略

**权限来源标识：**
- 用户权限页面会显示每个策略的来源：通过组继承（group name）或直接附加（Attached directly）

## English Short Summary

Hands-on with IAM policies: removing a user from a group revokes access immediately; attaching IAMReadOnlyAccess grants read-only permissions. Explored JSON for AdministratorAccess (Action: *, Resource: *) and IAMReadOnlyAccess (Get*/List*). Demonstrated creating custom policies via the visual editor and JSON editor, and how permissions display their source (group-inherited vs. directly attached).
