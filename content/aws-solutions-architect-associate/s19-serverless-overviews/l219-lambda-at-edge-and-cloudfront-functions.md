---
title: "Lambda@Edge & CloudFront Functions"
lectureId: 219
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["lambda-at-edge", "cloudfront-functions", "edge", "cdn", "customization"]
---

## 中文短总结

边缘函数 (Edge Functions) 允许在 CloudFront 边缘位置执行代码以减少延迟。两种类型：**CloudFront Functions** — JavaScript、<1ms 执行、仅处理 Viewer 请求/响应、百万级 RPS；**Lambda@Edge** — Node.js/Python、5-10 秒执行、可处理全部 4 种请求/响应（Viewer + Origin）、千级 RPS、在 us-east-1 编写后全球复制。

## 中文长总结

### 边缘函数概述
- **Edge Functions**：在 CloudFront 边缘位置运行的代码
- 目的：在请求到达应用前执行逻辑，减少用户延迟
- 完全无服务器，全球部署，按使用量付费

### CloudFront 请求流程
```
Client → [Viewer Request] → CloudFront → [Origin Request] → Origin Server
Origin Server → [Origin Response] → CloudFront → [Viewer Response] → Client
```

### CloudFront Functions vs Lambda@Edge 对比

| 特性 | CloudFront Functions | Lambda@Edge |
|------|---------------------|-------------|
| 运行时 | **JavaScript only** | **Node.js / Python** |
| 规模 | **百万级请求/秒** | **千级请求/秒** |
| 触发点 | **仅 Viewer (请求/响应)** | **Viewer + Origin (全部 4 种)** |
| 最大执行时间 | **< 1 毫秒** | **5-10 秒** |
| 代码管理 | CloudFront 内管理 | 在 **us-east-1** 编写，全球复制 |
| 第三方库 | ❌ | ✅ 可加载 SDK 等库 |
| 网络访问 | ❌ | ✅ 可访问外部服务 |
| 文件系统/HTTP Body | ❌ | ✅ |

### 使用场景

**CloudFront Functions（轻量、< 1ms）**：
- Cache Key 标准化（转换请求属性优化缓存键）
- Header 操作（插入/修改/删除 HTTP 头）
- URL 重写或重定向
- 请求认证/授权（创建和验证 JWT Token）

**Lambda@Edge（复杂、最长 10s）**：
- 可调节 CPU 和内存
- 依赖第三方库（如 AWS SDK 访问其他 AWS 服务）
- 网络访问外部服务进行数据处理
- 访问文件系统或 HTTP 请求体

### 通用用例
网站安全/隐私、动态 Web 应用、SEO、智能路由、Bot 防护、实时图片转换、A/B 测试、用户认证/授权、用户追踪和分析

## 考试要点

- **CloudFront Functions**：JavaScript、< 1ms、仅 Viewer、百万级 RPS → 轻量场景（Cache Key、Header、URL 重写、JWT 验证）
- **Lambda@Edge**：Node.js/Python、5-10s、全部 4 种触发、千级 RPS → 复杂场景（第三方库、外部服务、HTTP Body）
- Lambda@Edge 在 **us-east-1** 编写，CloudFront 自动复制到所有边缘位置
- CloudFront Functions 是 CloudFront 原生功能，代码直接在 CloudFront 内管理
- 区分考试题中的场景：简单快速操作 → CloudFront Functions；需要外部服务/复杂逻辑 → Lambda@Edge

## English Short Summary

Edge Functions run code at CloudFront edge locations to minimize latency. Two types: **CloudFront Functions** (JavaScript, <1ms execution, viewer request/response only, millions of RPS) for lightweight operations like cache key normalization, header manipulation, URL rewrites, and JWT validation. **Lambda@Edge** (Node.js/Python, 5-10s execution, all 4 CloudFront events including origin, thousands of RPS) for complex operations requiring third-party libraries, external network access, or HTTP body processing. Lambda@Edge is authored in us-east-1 and replicated globally by CloudFront.
