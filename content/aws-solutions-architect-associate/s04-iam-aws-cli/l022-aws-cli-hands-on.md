---
title: "AWS CLI Hands On"
lectureId: 22
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["cli", "access-keys", "hands-on", "iam"]
---

## 中文短总结

实操演示 Access Key 创建和 CLI 配置：在 IAM 用户的 Security Credentials 中创建 Access Key（选择 CLI 用途）；使用 `aws configure` 配置 Access Key ID、Secret Access Key 和默认区域；运行 `aws iam list-users` 测试。验证权限机制：移除用户组权限后 CLI 同样返回拒绝，证明 CLI 权限与控制台一致。

## 中文长总结

**创建 Access Key：**
1. 在 IAM 控制台进入用户 → Security credentials → Create access key
2. 选择用途（如 CLI），AWS 会推荐替代方案（如 CloudShell 或 IAM Identity Center），但可选择继续创建
3. Access Key ID 和 Secret Access Key 仅在创建时可查看，需妥善保存

**配置 AWS CLI：**
1. 运行 `aws configure`
2. 输入 Access Key ID 和 Secret Access Key
3. 输入默认区域名称（如 eu-west-1，可从控制台区域下拉菜单获取区域代码）
4. 默认输出格式可留空

**CLI 使用验证：**
- `aws iam list-users`：列出账户中所有用户（返回 UserId、ARN、创建时间等信息）
- 与控制台查看的信息一致

**权限一致性验证：**
- 将用户从 admin 组移除后，CLI 的 `iam list-users` 同样被拒绝
- 证明 CLI 权限与管理控制台权限完全一致
- 重新加入组后权限恢复

## English Short Summary

Hands-on creating access keys and configuring the CLI: generate an access key from IAM user Security Credentials, run `aws configure` to set up credentials and default region, then test with `aws iam list-users`. Demonstrated that CLI permissions mirror console permissions—removing a user from a group causes both CLI and console access to be denied.
