---
title: "CloudFront Overview"
lectureId: 165
section: 15
sectionTitle: "CloudFront & AWS Global Accelerator"
date: "2026-03-05"
tags: ["CloudFront", "CDN", "Edge Location", "OAC", "VPC Origin"]
---

## 中文短总结

本讲介绍 CloudFront——AWS 的 CDN 服务。通过全球 **216+ Edge Locations** 缓存内容，降低用户延迟。附带 **DDoS 保护**（Shield + WAF）。支持多种 Origin：**S3 Bucket**（分发文件，通过 OAC 安全访问，也可上传）、**VPC Origin**（私有子网中的 ALB/NLB/EC2）、**Custom HTTP Origin**（S3 静态网站、公共 ALB 等）。工作流程：客户端请求 → Edge Location 查缓存 → 无缓存则从 Origin 获取并缓存。**CloudFront vs S3 Cross-Region Replication**：CloudFront 缓存静态内容到全球 216 个 PoP（约一天 TTL）；S3 Replication 需逐个 Region 设置，近实时更新但无缓存，适合少量 Region 的动态内容。

## 中文长总结

### CloudFront 概述
- **CDN**（Content Delivery Network）
- 全球 **216+ Edge Locations** 缓存内容
- 降低延迟，提升用户体验
- DDoS 保护（Shield + WAF）

### Origin 类型
| Origin | 说明 |
|--------|------|
| **S3 Bucket** | 分发文件，OAC 安全访问 |
| **VPC Origin** | 私有子网中的 ALB/NLB/EC2 |
| **Custom HTTP** | S3 静态网站、公共 ALB 等 |

### 工作流程
1. 客户端 → 最近的 Edge Location
2. Edge Location 查缓存
3. 缓存命中 → 直接返回
4. 未命中 → 从 Origin 获取 → 缓存 → 返回

### CloudFront vs S3 Cross-Region Replication
| 特性 | CloudFront | S3 Replication |
|------|-----------|---------------|
| 范围 | 全球 216 PoP | 需逐个 Region 设置 |
| 缓存 | ✅（约一天 TTL） | ❌ 无缓存 |
| 更新 | 缓存过期后更新 | 近实时 |
| 适用 | 全球分发静态内容 | 少量 Region 动态内容 |

## 考试要点

- CDN = CloudFront
- OAC（Origin Access Control）保护 S3 Origin
- VPC Origin = 私有子网中的后端
- CloudFront 缓存内容，S3 Replication 复制整个 Bucket

## English Short Summary

CloudFront is AWS's CDN with 216+ edge locations globally, caching content for low latency and DDoS protection (Shield + WAF). Origins: S3 Bucket (secured with OAC), VPC Origin (private ALB/NLB/EC2), Custom HTTP (S3 website, public ALB). Flow: client → edge location → cache hit returns directly, cache miss fetches from origin then caches. CloudFront vs S3 Replication: CloudFront caches static content globally (~1 day TTL); S3 Replication updates near real-time per region for dynamic content.
