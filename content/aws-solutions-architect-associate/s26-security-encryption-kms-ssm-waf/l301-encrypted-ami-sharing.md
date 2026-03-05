---
title: "Encrypted AMI Sharing Process"
lectureId: 301
section: "s26"
sectionTitle: "AWS Security & Encryption: KMS, SSM Parameter Store, Shield, WAF"
date: "2026-03-05"
tags: [ami, kms, cross-account, sharing, ec2]
---

## 中文短总结

跨账号共享 KMS 加密 AMI 的流程：①修改 AMI 的 Launch Permission 添加目标账号②通过 Key Policy 共享 KMS Key 给目标账号③目标账号创建 IAM Role/User，授予 KMS 权限（DescribeKey、ReEncrypt、CreateGrant、Decrypt）④从 AMI 启动 EC2 实例⑤可选：使用目标账号自己的 KMS Key 重新加密 Volumes。

## 中文长总结

跨账号共享加密 AMI 并启动 EC2 实例的完整流程：

**步骤：**

1. **修改 AMI Launch Permission**
   - 在源账号中修改 AMI 属性
   - 添加目标账号 ID 到 Launch Permission 列表

2. **共享 KMS Key**
   - 修改 KMS Key Policy
   - 授权目标账号使用该 KMS Key

3. **目标账号配置 IAM 权限**
   - 创建 IAM Role 或 User
   - 所需 KMS 权限：
     - `kms:DescribeKey`
     - `kms:ReEncrypt`
     - `kms:CreateGrant`
     - `kms:Decrypt`

4. **启动 EC2 实例**
   - 从共享的 AMI 直接启动

5. **可选：重新加密**
   - 使用目标账号自己的 KMS Key 重新加密 EBS Volumes

## 考试要点

- 共享加密 AMI 需两步：AMI Launch Permission + KMS Key Policy
- 目标账号需 IAM 权限：DescribeKey、ReEncrypt、CreateGrant、Decrypt
- 可用目标账号 KMS Key 重新加密

## English Short Summary

Cross-account encrypted AMI sharing process: (1) Modify AMI Launch Permission to add target account; (2) Share KMS Key via Key Policy; (3) Target account creates IAM Role/User with KMS permissions (DescribeKey, ReEncrypt, CreateGrant, Decrypt); (4) Launch EC2 instance from shared AMI; (5) Optionally re-encrypt volumes with target account's own KMS Key.
