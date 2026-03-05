---
title: "Amazon Cognito Overview"
lectureId: 228
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["cognito", "user-pool", "identity-pool", "authentication", "authorization", "api-gateway", "alb"]
---

## 中文短总结

Amazon Cognito 为 Web/移动应用外部用户提供身份管理。**Cognito User Pools (CUP)** — 无服务器用户数据库，提供注册/登录/MFA/社交登录，与 API Gateway 和 ALB 集成验证 Token。**Cognito Identity Pools**（前身 Federated Identity）— 为已认证用户提供临时 AWS Credentials 直接访问 AWS 资源（如 S3、DynamoDB），支持基于 Cognito Identity 的 DynamoDB 行级安全。Cognito 面向外部用户（区别于 IAM 的内部用户）。

## 中文长总结

### Cognito vs IAM

| 特性 | IAM | Cognito |
|------|-----|---------|
| 用户类型 | 内部 AWS 用户 | **外部 Web/移动应用用户** |
| 规模 | 有限 | **数百甚至数百万用户** |
| 关键词 | AWS 管理员/开发者 | 移动用户、SAML、社交登录 |

### 1. Cognito User Pools (CUP)

**功能**：
- 无服务器用户数据库
- 用户名/邮箱 + 密码登录
- 密码重置、邮箱/手机验证
- **MFA 多因素认证**
- **社交登录**（Facebook、Google 等）

**与 API Gateway 集成**：
```
用户 → Cognito User Pool（获取 Token）→ 携带 Token 访问 API Gateway
→ API Gateway 验证 Token → 传递用户身份给 Lambda 函数
```

**与 ALB 集成**：
```
用户 → Cognito User Pool（认证）→ 携带 Token 访问 ALB
→ ALB 验证登录 → 在请求头中添加用户身份 → 转发到后端
```

### 2. Cognito Identity Pools（Federated Identity）

**功能**：
- 为用户提供**临时 AWS Credentials**
- 用户可**直接访问 AWS 资源**（不通过 API Gateway 或 ALB）

**身份来源**：
- Cognito User Pools
- 第三方社交登录
- SAML / OpenID Connect

**IAM 策略**：
- 在 Cognito Identity Pool 中定义
- 可基于 **User ID 进行细粒度控制**
- 可设置**默认 IAM 角色**（Guest 用户 / 未指定角色的认证用户）

**流程**：
```
Web/Mobile App → 登录获取 Token → 将 Token 交给 Identity Pool
→ Identity Pool 验证 Token → 生成临时 AWS 凭证（包含定制 IAM 策略）
→ 直接访问 S3 / DynamoDB 等 AWS 资源
```

### DynamoDB 行级安全 (Row-Level Security)

通过 Cognito Identity Pool 的 IAM Policy 实现：
- 条件：`dynamodb:LeadingKeys` = Cognito Identity User ID
- 效果：用户**只能读写自己的数据行**，不能访问其他用户的数据

## 考试要点

- **Cognito User Pools (CUP)**：无服务器用户数据库，登录/MFA/社交登录，与 **API Gateway** 和 **ALB** 集成
- **Cognito Identity Pools**：提供临时 AWS Credentials，**直接访问 AWS 资源**（S3、DynamoDB）
- **Cognito ≠ IAM**：Cognito 面向外部 Web/移动用户，IAM 面向内部 AWS 用户
- **DynamoDB 行级安全**：通过 Identity Pool 的 IAM Policy 限制用户只能访问自己的数据
- 关键词：数百用户、移动用户、SAML、社交登录 → **Cognito**（不是 IAM）
- CUP 与 API Gateway/ALB 的集成是考试高频考点

## English Short Summary

Amazon Cognito provides identity management for external web/mobile users (vs IAM for internal AWS users). **Cognito User Pools (CUP)**: serverless user database with sign-up/sign-in, MFA, social login, integrates with API Gateway and ALB for token verification. **Cognito Identity Pools** (formerly Federated Identity): provides temporary AWS credentials for users to directly access AWS resources (S3, DynamoDB) without going through API Gateway/ALB. Enables DynamoDB row-level security via IAM policy conditions (leading key = Cognito user ID). Look for keywords: hundreds of users, mobile users, SAML, social login → Cognito.
