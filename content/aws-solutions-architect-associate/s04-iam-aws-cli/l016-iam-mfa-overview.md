---
title: "IAM MFA Overview"
lectureId: 16
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "mfa", "security", "password-policy", "authentication"]
---

## 中文短总结

AWS 账户安全的两大防御机制：密码策略（Password Policy）和多因素认证（MFA）。密码策略可设置最小长度、字符要求、过期时间、禁止重用等。MFA 结合"密码+物理设备"双重验证，即使密码泄露账户也不会被入侵。MFA 设备选项包括虚拟 MFA（Google Authenticator/Authy）、U2F 安全密钥（YubiKey）、硬件 Key Fob（Gemalto）和 GovCloud 专用 Key Fob（SurePassID）。

## 中文长总结

**密码策略（Password Policy）：**
- 设置最小密码长度
- 要求特定字符类型（大写、小写、数字、非字母数字字符）
- 允许/禁止 IAM 用户自行更改密码
- 强制密码定期过期（如每 90 天）
- 防止密码重用
- 有效防止暴力破解攻击

**多因素认证（MFA）：**
- 结合两个要素：你知道的（密码）+ 你拥有的（安全设备）
- 即使密码被盗/被黑，账户仍然安全（攻击者还需物理设备）
- 强烈建议至少为 root 账户和所有 IAM 用户启用 MFA

**MFA 设备选项（考试需知）：**
1. **虚拟 MFA 设备**：Google Authenticator（单设备）或 Authy（多设备支持，可配置多个账户/用户）
2. **U2F 安全密钥**：YubiKey（Yubico 第三方提供），物理设备，支持多个 root 和 IAM 用户共用一把密钥
3. **硬件 Key Fob MFA**：Gemalto 提供（第三方）
4. **AWS GovCloud 专用 Key Fob**：SurePassID 提供（第三方，仅用于美国政府云）

## 考试要点

- 密码策略和 MFA 是 AWS 账户的两大安全防护
- MFA = 密码 + 安全设备，双因素认证
- 虚拟 MFA 设备支持多用户/多账户
- U2F 安全密钥是物理设备，一把密钥支持多用户
- MFA 设备提供商均为第三方（非 AWS 自身提供）
- 必须为 root 账户启用 MFA

## English Short Summary

Two defense mechanisms for AWS account security: Password Policy (minimum length, character requirements, expiration, reuse prevention) and MFA (Multi-Factor Authentication combining password + security device). MFA device options include virtual MFA apps (Google Authenticator/Authy), U2F security keys (YubiKey), hardware key fobs (Gemalto), and GovCloud-specific key fobs (SurePassID). Even if a password is compromised, MFA prevents unauthorized access.
