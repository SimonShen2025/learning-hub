---
title: "S3 CORS"
lectureId: 154
section: 14
sectionTitle: "Amazon S3 Security"
date: "2026-03-05"
tags: ["S3", "CORS", "Cross-Origin", "Web Security"]
---

## 中文短总结

本讲介绍 CORS（Cross-Origin Resource Sharing）。**Origin** = Scheme + Host + Port。**同源**：相同协议、域名和端口。浏览器访问一个 Origin 时需要请求另一个 Origin 的资源，必须目标 Origin 通过 **CORS Headers**（`Access-Control-Allow-Origin`）允许。流程：浏览器先发 **Preflight 请求**（OPTIONS）到目标服务器询问是否允许，目标返回 CORS Headers 后浏览器才发正式请求。**S3 应用**：客户端跨 S3 Bucket 请求资源时，需要在目标 Bucket 上启用正确的 CORS Headers，可设为特定 Origin 或 `*`（所有 Origin）。考试常考一题。

## 中文长总结

### Origin 定义
- **Origin** = Scheme（协议）+ Host（域名）+ Port（端口）
- 例：`https://www.example.com`，端口隐含 443

### 同源 vs 跨源
- **同源**：协议 + 域名 + 端口 完全相同
- **跨源**：任一不同即为跨源

### CORS 工作流程
1. 浏览器先发 **Preflight** OPTIONS 请求到跨源服务器
2. 跨源服务器返回 CORS Headers：
   - `Access-Control-Allow-Origin`
   - `Access-Control-Allow-Methods`（GET/PUT/DELETE）
3. 浏览器确认后发正式请求

### S3 中的 CORS
- 客户端从一个 S3 Bucket（静态网站）请求另一个 S3 Bucket 的资源
- 必须在**目标 Bucket** 上配置 CORS Headers
- 可设为特定 Origin URL 或 `*`（所有 Origin）

## 考试要点

- CORS = 浏览器安全机制
- 必须在**目标 Origin** 配置 CORS Headers
- S3 跨 Bucket 资源访问需要启用 CORS
- 考试常考一题

## English Short Summary

CORS (Cross-Origin Resource Sharing) is a browser security mechanism. Origin = scheme + host + port. When a browser at one origin needs resources from another origin, the target must return CORS headers (`Access-Control-Allow-Origin`). Process: browser sends preflight OPTIONS request → target responds with allowed origins/methods → browser proceeds with actual request. For S3: when a client on one S3 static website bucket requests resources from another bucket, the target bucket must have correct CORS configuration (specific origin or `*`). Common exam question.
