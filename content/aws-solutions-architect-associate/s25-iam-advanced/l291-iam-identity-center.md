---
title: "AWS IAM Identity Center"
lectureId: 291
section: "s25"
sectionTitle: "Identity and Access Management (IAM) - Advanced"
date: "2026-03-05"
tags: [iam-identity-center, sso, single-sign-on, permission-sets, saml, abac]
---

## 中文短总结

AWS IAM Identity Center（原 AWS SSO）提供**一次登录访问所有**：多个 AWS 账号（Organizations）、业务云应用（Salesforce/Box/M365 via SAML 2.0）、EC2 Windows 实例。身份源：内置 Identity Store 或第三方（Active Directory/Okta/OneLogin）。通过 **Permission Sets**（权限集=IAM 策略集合）定义用户/组在各账号中的权限，自动在目标账号创建 IAM Role。支持 **ABAC**（基于属性的访问控制）：利用用户属性（成本中心/职级/区域）动态控制权限，只需定义一次 Permission Set。

## 中文长总结

AWS IAM Identity Center（前身 AWS Single Sign-On）是集中式身份管理和访问服务。

**一次登录，访问所有：**
- 所有 AWS 账号（Organizations 内）
- 业务云应用（SAML 2.0 集成：Salesforce、Box、Microsoft 365）
- EC2 Windows 实例

**身份源（Identity Provider）：**
- **内置 Identity Store**：在 Identity Center 创建用户/组
- **第三方**：Active Directory（云端或本地）、Okta、OneLogin

**Permission Sets（权限集）核心机制：**

```
IAM Identity Center → Permission Set（一组 IAM 策略）
                    → 分配到特定账号
                    → 关联用户或组
                    → 自动在目标账号创建 IAM Role
```

**示例：**
- 创建 "Database Admins" Permission Set（RDS + Aurora 权限）
- 分配到 Dev 和 Prod 账号
- 关联 DBA 用户组
- 用户登录后自动获得对应账号的数据库权限

**Multi-Account Permissions：**
- 管理组织内多账号的访问
- Permission Set 定义 IAM 策略集合
- 分配给用户/组
- 登录后自动 AssumeRole

**Application Assignments：**
- 定义用户/组可访问的应用
- 提供 URL、证书、元数据

**ABAC（Attribute-Based Access Control）：**
- 基于 Identity Center 中的用户属性
- 属性如：成本中心、职级、区域
- 只需定义一次 Permission Set
- 修改用户属性即可改变访问权限

## 考试要点

- IAM Identity Center = 原 SSO，一次登录访问多账号
- Permission Sets = IAM 策略集合 → 自动创建 IAM Role
- 身份源：内置 / Active Directory / Okta
- ABAC：基于用户属性控制权限
- 考试常考：一次登录多个 AWS 账号 → IAM Identity Center

## English Short Summary

AWS IAM Identity Center (formerly AWS SSO) provides single login to all AWS accounts (Organizations), business cloud apps (SAML 2.0: Salesforce/Box/M365), and EC2 Windows instances. Identity sources: built-in store or third-party (AD/Okta/OneLogin). **Permission Sets** (IAM policy collections) define access per user/group per account, auto-creating IAM Roles. Supports **ABAC** (Attribute-Based Access Control) using user attributes (cost center, title, locale) — define Permission Sets once, modify access by changing attributes.
