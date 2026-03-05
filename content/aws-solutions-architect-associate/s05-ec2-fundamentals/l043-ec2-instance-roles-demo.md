---
title: "EC2 Instance Roles Demo"
lectureId: 43
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ec2", "iam-role", "security", "best-practice"]
---

## 中文短总结

演示为 EC2 实例分配 IAM Role 的正确做法。在实例内运行 `aws iam list-users` 默认会失败（无凭证）。**绝对不要**在 EC2 实例上运行 `aws configure` 输入个人 Access Key（任何人通过 Instance Connect 都能获取）。正确做法：通过 Actions → Security → Modify IAM Role 附加之前创建的 DemoRoleForEC2，附加后即可成功执行命令。移除 Role 后权限立即失效。这是 EC2 获取 AWS 凭证的唯一正确方式。

## 中文长总结

**错误做法（绝对禁止）：**
- 在 EC2 实例内运行 `aws configure` 输入个人 Access Key ID 和 Secret Access Key
- 风险：账户内任何人都可通过 EC2 Instance Connect 连接并读取这些凭证
- 看到他人这样做应立即纠正

**正确做法：使用 IAM Role**
1. 在 EC2 控制台选中实例 → Actions → Security → Modify IAM Role
2. 选择之前创建的 DemoRoleForEC2（附加了 IAMReadOnlyAccess 策略）
3. 保存后，实例自动获取权限，`aws iam list-users` 成功返回结果
4. 无需运行 `aws configure`，凭证由 IAM Role 自动提供

**验证实验：**
- 附加 Role 后 → 命令成功
- 移除 Role 的策略 → 命令返回 Access Denied
- 重新附加策略 → 命令恢复（可能需要短暂传播时间）

## 考试要点

- 绝不在 EC2 实例上存储个人 Access Key
- EC2 实例获取 AWS 凭证的唯一正确方式是 IAM Role
- IAM Role 通过 Modify IAM Role 功能附加到实例
- Role 权限变更可能需要短暂传播时间

## English Short Summary

Demo of attaching IAM Roles to EC2 instances. Never run `aws configure` with personal access keys on EC2—anyone with Instance Connect access could retrieve them. Instead, attach an IAM Role (e.g., DemoRoleForEC2 with IAMReadOnlyAccess) via Actions → Security → Modify IAM Role. The instance automatically receives credentials. Removing the role's policy immediately revokes access. IAM Roles are the only correct way for EC2 to obtain AWS credentials.
