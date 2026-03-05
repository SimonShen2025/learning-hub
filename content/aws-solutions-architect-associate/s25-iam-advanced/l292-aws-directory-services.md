---
title: "AWS Directory Services"
lectureId: 292
section: "s25"
sectionTitle: "Identity and Access Management (IAM) - Advanced"
date: "2026-03-05"
tags: [directory-services, active-directory, ad-connector, simple-ad, iam-identity-center]
---

## 中文短总结

Microsoft Active Directory = Windows 域集中身份管理（用户/计算机/权限，树→森林）。AWS Directory Services 三种类型：①**AWS Managed Microsoft AD**——AWS 上创建 AD，本地管理用户+支持 MFA，可与 On-Premises AD 建立**双向信任**（两边都有用户）②**AD Connector**——代理网关，将请求**转发到 On-Premises AD**，用户仅在本地管理③**Simple AD**——AWS 独立 AD（无 Microsoft 技术），不能连接 On-Premises。与 IAM Identity Center 集成：AWS Managed AD → 开箱即用；On-Premises AD → 两种方式：通过 Managed AD 建双向信任，或用 AD Connector 代理。

## 中文长总结

**Microsoft Active Directory 基础：**
- 任何 Windows Server 上的目录服务
- 对象数据库：用户、计算机、打印机、文件共享、安全组
- 集中安全管理、账号创建、权限分配
- Domain Controller：所有 Windows 机器连接到域控制器共享身份
- 对象组织为树（Tree），树的集合为森林（Forest）

**AWS Directory Services 三种类型：**

| 类型 | 用户管理 | MFA | On-Premises 连接 | 用例 |
|------|---------|-----|-----------------|------|
| **AWS Managed Microsoft AD** | AWS + On-Premises（双向信任） | ✅ | 双向信任关系 | 需要云端和本地都管理用户 |
| **AD Connector** | 仅 On-Premises | ✅ | 代理转发 | 仅代理到本地 AD |
| **Simple AD** | 仅 AWS | ❌ | ❌ 不支持 | 无本地 AD，仅需 AWS 上的 AD |

**与 IAM Identity Center 集成：**

1. **AWS Managed Microsoft AD** → 直接开箱集成
2. **Self-Managed（On-Premises）两种方式：**
   - 方式 A：创建 AWS Managed AD → 建立双向信任 → IAM Identity Center 集成
   - 方式 B：使用 AD Connector → 代理请求 → IAM Identity Center 集成

选择取决于：是否需要在云端也管理用户（方式 A），还是仅代理请求到本地（方式 B，延迟更高）。

## 考试要点

- 代理到 On-Premises AD → **AD Connector**
- 云端管理用户 + MFA + On-Premises 信任 → **AWS Managed Microsoft AD**
- 独立云端 AD，无 On-Premises → **Simple AD**
- IAM Identity Center + On-Premises AD → Managed AD（双向信任）或 AD Connector

## English Short Summary

AWS Directory Services offers three AD flavors: (1) **AWS Managed Microsoft AD** — AD on AWS with local user management, MFA, and two-way trust with on-premises AD; (2) **AD Connector** — proxy gateway forwarding requests to on-premises AD (users managed only on-premises); (3) **Simple AD** — standalone AD on AWS, no on-premises connection. IAM Identity Center integration: Managed AD = out-of-box; on-premises AD = either via Managed AD two-way trust or AD Connector proxy.
