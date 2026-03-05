---
title: "Mobile Application: MyTodoList"
lectureId: 229
section: "20"
sectionTitle: "Serverless Solution Architecture Discussions"
date: "2026-03-05"
tags: ["serverless", "architecture", "api-gateway", "lambda", "dynamodb", "cognito", "dax", "s3"]
---

## 中文短总结

经典无服务器 REST API 架构讨论：Mobile Client → API Gateway (HTTPS) → Lambda → DynamoDB。使用 Cognito 认证并生成临时凭证访问 S3（不要在客户端存储 AWS 凭证）。高读取吞吐量优化：DynamoDB DAX 缓存读取 + API Gateway 响应缓存。全架构无需人为管理，按使用量付费。

## 中文长总结

### 需求分析
- 暴露 HTTPS REST API
- 无服务器架构
- 用户直接访问 S3 管理文件
- 通过托管服务认证
- 用户以读操作为主（高读取吞吐量）

### 架构设计

**基础架构**：
```
Mobile Client → API Gateway (HTTPS) → Lambda → DynamoDB
                      ↑
              Cognito (认证验证)
```

**S3 访问模式**（关键考试题）：
```
Mobile Client → Cognito 认证 → 获取临时 AWS Credentials
→ 使用临时凭证直接访问 S3 (受限策略)
```
⚠️ **错误做法**：在移动客户端存储 AWS 用户凭证
✅ **正确做法**：使用 Cognito 生成临时凭证

**读取性能优化**：
1. **DynamoDB DAX** — 缓存高频读取，减少 RCU 和成本
2. **API Gateway 响应缓存** — 缓存静态/低变化的 API 响应

### 架构总结

| 组件 | 作用 |
|------|------|
| API Gateway | HTTPS REST API 入口 |
| Lambda | 无服务器计算 |
| DynamoDB | 可扩展数据库 |
| DAX | 读取缓存（减少 RCU + 降低成本） |
| Cognito | 认证 + 临时 AWS 凭证 |
| S3 | 用户文件存储 |
| API Gateway Cache | API 响应缓存 |

## 考试要点

- 经典无服务器 REST API：**API Gateway → Lambda → DynamoDB**
- 移动端访问 S3：**Cognito 生成临时凭证**（不要存储 AWS 凭证在客户端）
- 高读取吞吐量优化：**DAX 缓存**减少 DynamoDB 读取 + **API Gateway Cache** 缓存响应
- Cognito 与 API Gateway 直接集成验证认证
- 所有组件均无服务器，按使用量付费

## English Short Summary

Classic serverless mobile app architecture: Mobile Client → API Gateway (HTTPS) → Lambda → DynamoDB with Cognito for authentication. Users access S3 via Cognito-generated temporary credentials (never store AWS credentials on clients). For high read throughput: add DAX caching layer before DynamoDB to reduce RCU/costs, plus API Gateway response caching for static responses. Entirely serverless, pay-per-use, no infrastructure management.
