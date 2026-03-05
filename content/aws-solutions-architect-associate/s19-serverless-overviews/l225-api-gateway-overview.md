---
title: "API Gateway Overview"
lectureId: 225
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["api-gateway", "serverless", "rest-api", "lambda", "edge-optimized", "regional", "cognito"]
---

## 中文短总结

Amazon API Gateway 是无服务器 REST API 服务，代理请求到 Lambda/HTTP/AWS 服务。提供认证、API 版本管理、多环境(dev/test/prod)、API Key、限流、Swagger/OpenAPI 导入导出、响应缓存、SDK 生成。三种端点类型：Edge-Optimized（默认，通过 CloudFront）、Regional、Private（VPC 内访问）。安全支持 IAM Roles、Cognito、Custom Authorizer (Lambda)，HTTPS 通过 ACM 证书。

## 中文长总结

### API Gateway 核心功能

API Gateway + Lambda = **完整的无服务器应用**，无需管理基础设施。

**主要功能**：
- **WebSocket** 支持（实时双向通信）
- **API 版本管理**（v1 → v2 → v3 不影响现有客户端）
- **多环境**：dev、test、prod
- **安全**：认证和授权
- **API Keys** + **请求限流** (Throttling)
- **Swagger / OpenAPI 3.0** 导入导出
- **请求/响应转换和验证**
- **SDK 生成** 和 API 规范
- **响应缓存**

### 三种集成方式

| 集成类型 | 说明 | 用例 |
|----------|------|------|
| **Lambda** | 最常见，完整无服务器 | REST API 后端 |
| **HTTP** | 代理到任何 HTTP 端点 | 本地服务、ALB 后端 |
| **AWS Service** | 暴露 AWS API | SQS 发消息、Step Functions 启动、Kinesis 推数据 |

**AWS Service 集成示例**：
```
Client → API Gateway → Kinesis Data Streams → Firehose → S3
```
无需给客户端 AWS 凭证，通过 API Gateway 安全访问 Kinesis。

### 三种端点类型

| 端点类型 | 说明 |
|----------|------|
| **Edge-Optimized**（默认） | 全球客户端，通过 CloudFront 边缘路由，API 仍在单区域 |
| **Regional** | 同区域客户端，可自建 CloudFront 分发 |
| **Private** | 仅 VPC 内访问，通过 Interface VPC Endpoint (ENI)，用 Resource Policy 控制访问 |

### 安全机制

| 方式 | 适用场景 |
|------|----------|
| **IAM Roles** | 内部应用（如 EC2 实例） |
| **Amazon Cognito** | 外部用户（移动/Web 应用） |
| **Custom Authorizer** | 自定义逻辑（Lambda 函数实现） |

### HTTPS / 自定义域名
- 通过 **AWS Certificate Manager (ACM)** 集成
- Edge-Optimized → 证书必须在 **us-east-1**
- Regional → 证书在**同区域**
- 需在 **Route 53** 设置 CNAME 或 A-alias 记录

## 考试要点

- API Gateway + Lambda = **完整无服务器应用**
- 三种端点：**Edge-Optimized**（默认，通过 CloudFront）、**Regional**、**Private**（VPC）
- 三种集成：**Lambda**（最常见）、**HTTP**、**AWS Service**
- 安全：**IAM Roles**（内部）、**Cognito**（外部用户）、**Custom Authorizer**（Lambda）
- Edge-Optimized 端点 ACM 证书**必须在 us-east-1**
- 可暴露任何 AWS 服务（如 SQS、Kinesis）给客户端，无需传递 AWS 凭证
- 支持 **WebSocket**、API 版本管理、多环境、限流、缓存

## English Short Summary

Amazon API Gateway is a serverless service for creating REST APIs that proxy to Lambda, HTTP endpoints, or AWS services. Features include versioning, multi-environment (dev/test/prod), authentication, API keys, throttling, Swagger/OpenAPI import/export, request validation, SDK generation, and response caching. Three endpoint types: Edge-Optimized (default, routes through CloudFront), Regional, and Private (VPC only via Interface VPC Endpoint). Security via IAM Roles (internal apps), Cognito (external users), or Custom Authorizer (Lambda). HTTPS via ACM certificates (must be in us-east-1 for Edge-Optimized). Can expose any AWS service (SQS, Kinesis, Step Functions) without giving clients AWS credentials.
