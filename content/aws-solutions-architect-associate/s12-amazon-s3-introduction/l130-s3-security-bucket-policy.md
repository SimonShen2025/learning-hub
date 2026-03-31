---
title: "S3 Security: Bucket Policy"
lectureId: 130
section: 12
sectionTitle: "Amazon S3 Introduction"
date: "2026-03-05"
tags: ["S3", "Security", "Bucket Policy", "IAM", "ACL"]
---

## 中文短总结

本讲介绍 S3 安全机制。**User-Based**：通过 IAM Policy 控制用户 API 访问权限。**Resource-Based**：S3 Bucket Policy（JSON 格式，最常用）可设置公共访问、跨账号访问；Object ACL 和 Bucket ACL 可细粒度控制但较少使用。访问规则：IAM 权限允许 **OR** 资源策略允许 **AND** 无显式 Deny → 允许访问。Bucket Policy 结构：Resource（适用资源）、Effect（Allow/Deny）、Action（API 操作）、Principal（适用主体）。**Block Public Access** 是额外安全层，即使 Bucket Policy 设为公开，开启此设置后 Bucket 永远不会公开——防止数据泄露。

## 中文长总结

### S3 安全类型

#### User-Based（基于用户）
- **IAM Policy**：控制特定 IAM 用户允许的 API 调用

#### Resource-Based（基于资源）
- **S3 Bucket Policy**（最常用）：JSON 格式，Bucket 级别规则
  - 允许公共访问
  - 强制上传加密
  - 跨账号访问（Cross-Account）
- **Object ACL**：细粒度控制，可禁用
- **Bucket ACL**：较少使用，可禁用

### 访问判断逻辑
- IAM 权限允许 **OR** 资源策略允许
- **AND** 不存在显式 Deny
- → 则允许访问

### Bucket Policy 结构
```json
{
  "Effect": "Allow",
  "Principal": "*",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::example-bucket/*"
}
```
- **Resource**：策略适用的 Bucket/Object
- **Effect**：Allow 或 Deny
- **Action**：允许/拒绝的 API 操作
- **Principal**：适用的用户/账号（`*` = 所有人）

### 四种访问场景
1. **公共访问**：Bucket Policy 设 Principal = `*`
2. **IAM 用户**：通过 IAM Policy 授权
3. **EC2 实例**：通过 **IAM Role** 授权（非 IAM User）
4. **跨账号**：通过 Bucket Policy 指定其他账号的 IAM 用户

### Block Public Access（阻止公共访问）
- **额外安全层**，防止数据泄露
- 即使 Bucket Policy 设为公开，此设置仍会阻止
- 可在 **Bucket 级别**或**账号级别**设置

## 考试要点

- Bucket Policy 是 S3 安全最常用的方式
- EC2 访问 S3 → 使用 **IAM Role**（不是 IAM User）
- **Block Public Access** 优先于 Bucket Policy
- 跨账号访问必须用 **Bucket Policy**
- 加密是另一种安全方式

## English Short Summary

S3 security includes User-Based (IAM Policies) and Resource-Based (Bucket Policies — most common, Object/Bucket ACLs). Access is granted when IAM permissions OR resource policy allows AND no explicit deny exists. Bucket Policy is JSON (Resource, Effect, Action, Principal). Four access patterns: public access (Principal=*), IAM user (IAM policy), EC2 instance (IAM Role), cross-account (Bucket Policy). Block Public Access is an extra security layer that overrides even public Bucket Policies — prevents data leaks at bucket or account level.
