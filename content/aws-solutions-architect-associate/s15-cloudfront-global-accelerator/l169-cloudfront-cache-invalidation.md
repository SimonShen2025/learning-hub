---
title: "CloudFront - Cache Invalidation"
lectureId: 169
section: 15
sectionTitle: "CloudFront & AWS Global Accelerator"
date: "2026-03-05"
tags: ["CloudFront", "Cache Invalidation", "TTL"]
---

## 中文短总结

本讲介绍 CloudFront Cache Invalidation。更新 Origin 后，Edge Location 需等 TTL 过期才会刷新缓存。如需立即生效，可执行 **Cache Invalidation**（缓存失效），强制清除 Edge 缓存。支持两种路径模式：`/*`（失效所有文件）和特定路径如 `/images/*`。失效后下次用户请求时 Edge Location 会从 Origin 重新获取最新内容。

## 中文长总结

### 问题
- Origin 更新后 Edge Location 仍提供旧缓存
- 需等 TTL 过期才会刷新

### 解决方案：Cache Invalidation
- **强制清除** Edge Location 缓存
- 绕过 TTL 限制

### 路径模式
| 模式 | 说明 |
|------|------|
| `/*` | 失效**所有**文件 |
| `/images/*` | 失效 images 目录下所有文件 |
| `/index.html` | 失效特定文件 |

### 工作流程
1. 更新 Origin 中的文件
2. 执行 Cache Invalidation（指定路径）
3. Edge Location 清除匹配的缓存
4. 下次用户请求 → Edge 从 Origin 获取最新内容

## 考试要点

- Cache Invalidation = 强制清除 Edge 缓存
- 支持通配符路径（`/*`、`/images/*`）
- 用于 Origin 更新后立即生效

## English Short Summary

CloudFront Cache Invalidation forces edge locations to clear cached content when the origin is updated, bypassing TTL. Specify file paths: `/*` to invalidate all files, `/images/*` for a directory, or `/index.html` for a specific file. After invalidation, the next user request causes the edge location to fetch the latest content from the origin.
