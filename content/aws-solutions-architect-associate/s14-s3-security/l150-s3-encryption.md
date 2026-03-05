---
title: "S3 Encryption"
lectureId: 150
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "Encryption", "SSE-S3", "SSE-KMS", "SSE-C", "Client-Side"]
---

## 中文短总结

本讲深入介绍 S3 四种加密方式。**SSE-S3**（默认）：AWS 管理密钥，AES-256，Header `"AES256"`。**SSE-KMS**：用户通过 KMS 管理密钥，可用 CloudTrail 审计，但有 API 调用配额限制（5,500-30,000/秒），高吞吐场景可能成为瓶颈。**SSE-C**：客户提供密钥，AWS 不存储密钥，必须用 HTTPS，密钥通过 HTTP Header 传递，只能通过 CLI 使用。**Client-Side Encryption**：客户端加密后上传，客户端管理密钥和加密过程。**传输加密**：推荐 HTTPS，SSE-C 强制要求 HTTPS。可通过 Bucket Policy 的 `aws:SecureTransport` 条件强制使用 HTTPS。

## 中文长总结

### 四种加密方式

#### 1. SSE-S3（默认）
- AWS 管理和拥有密钥
- 加密类型：**AES-256**
- Header：`"x-amz-server-side-encryption": "AES256"`
- **所有新 Bucket 和新对象默认启用**

#### 2. SSE-KMS
- 使用 **KMS 服务**管理密钥
- 优势：用户控制密钥 + **CloudTrail** 审计
- Header：`"x-amz-server-side-encryption": "aws:kms"`
- 读取文件需要访问对象 + KMS 密钥权限
- **限制**：API 调用计入 KMS 配额（5,500-30,000/秒）
- 高吞吐 S3 Bucket 可能遇到瓶颈（考试考点）

#### 3. SSE-C
- 客户提供加密密钥，AWS **不存储**密钥
- 必须使用 **HTTPS**
- 密钥通过 **HTTP Header** 传递
- 读取文件时必须再次提供密钥
- **只能通过 CLI 使用**，不能在控制台操作

#### 4. Client-Side Encryption
- 客户端加密后上传
- 客户端解密后使用
- 客户端**完全管理**密钥和加密过程

### 传输加密（Encryption in Transit）
- HTTP Endpoint = 未加密
- HTTPS Endpoint = 加密传输（推荐）
- SSE-C **必须**使用 HTTPS
- 通过 Bucket Policy 强制 HTTPS：条件 `"aws:SecureTransport": "false"` → Deny

## 考试要点

- SSE-S3 = 默认，AES-256，AWS 管理密钥
- SSE-KMS = 用户控制 + CloudTrail 审计 + **有 API 配额限制**
- SSE-C = 客户提供密钥，必须 HTTPS，只能 CLI
- Client-Side = 客户端完全管理
- 强制 HTTPS：`aws:SecureTransport` Bucket Policy 条件

## English Short Summary

Four S3 encryption methods: **SSE-S3** (default, AES-256, AWS-managed keys), **SSE-KMS** (user-controlled keys via KMS, CloudTrail audit, but subject to KMS API quota of 5,500-30,000 req/s — potential bottleneck for high-throughput), **SSE-C** (customer-provided keys, must use HTTPS, CLI only, AWS never stores the key), and **Client-Side Encryption** (client manages everything). Encryption in transit: HTTPS recommended (mandatory for SSE-C). Enforce HTTPS via bucket policy using `aws:SecureTransport` condition.
