---
title: "Lambda Concurrency"
lectureId: 216
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["lambda", "concurrency", "throttling", "cold-start", "provisioned-concurrency", "reserved-concurrency"]
---

## 中文短总结

Lambda 并发与限流机制：默认 1000 并发上限（所有函数共享），可设置 Reserved Concurrency 限制单函数并发。同步调用限流返回 429 错误，异步调用自动重试后进 DLQ。Cold Start 问题可通过 Provisioned Concurrency 解决 — 预分配温暖实例消除初始化延迟，配合 Application Auto Scaling 管理。

## 中文长总结

### 并发与限流 (Concurrency & Throttling)

- Lambda 函数随调用量自动扩展产生并发执行
- **默认并发上限 1000**（整个账户所有函数共享）
- 推荐设置 **Reserved Concurrency**（保留并发）限制单函数上限
- 超过并发限制 → **限流 (Throttle)**

**限流行为差异**：
| 调用方式 | 限流行为 |
|----------|----------|
| 同步 (Synchronous) | 返回 **429 ThrottleError** |
| 异步 (Asynchronous) | 自动重试 → 最终进入 **DLQ** |

### 并发限制的风险

**1000 并发上限是所有函数共享的**，一个函数占用过多并发会导致其他函数被限流：
- 例：ALB 后端的 Lambda 函数因促销活动并发飙升占满 1000 限额
- 结果：API Gateway 和 CLI/SDK 调用的其他 Lambda 函数都被限流

### 异步调用的限流处理

- 限流和系统错误 (429/500) → 事件返回**内部事件队列**
- **最多重试 6 小时**
- 重试间隔**指数退避**：1 秒 → 最大 5 分钟

### Cold Start 与 Provisioned Concurrency

**Cold Start 问题**：
- 新 Lambda 实例需要加载代码并执行 init 初始化
- 初始化大量代码/依赖/数据库连接 → 首次请求延迟高
- 用户可能等待数秒，体验差

**Provisioned Concurrency 解决方案**：
- 在函数被调用前**预分配并发实例**
- 消除 Cold Start，所有调用低延迟
- 使用 **Application Auto Scaling** 管理（支持计划调度或目标追踪）

### VPC 中的 Cold Start

- 2019 年 AWS 显著优化了 VPC 中 Lambda 的冷启动时间
- VPC 中的冷启动影响已大幅减小

## 考试要点

- 默认并发上限 **1000**（整个账户所有函数共享，per region）
- **Reserved Concurrency** — 限制单函数最大并发，防止影响其他函数
- 同步限流 → **429 错误**；异步限流 → **自动重试（最长 6 小时，指数退避）→ DLQ**
- **Cold Start** — 新实例初始化延迟，对用户体验有影响
- **Provisioned Concurrency** — 预分配实例消除 Cold Start，配合 Application Auto Scaling 管理
- 一个函数并发过高 → 其他函数被限流（共享 1000 上限）
- 超过 1000 并发需提交 support ticket 申请增加

## English Short Summary

Lambda has a default 1000 concurrent execution limit shared across all functions per account/region. Use Reserved Concurrency to cap individual functions and prevent one function from throttling others. Sync throttling returns 429 error; async throttling retries for up to 6 hours with exponential backoff, then goes to DLQ. Cold starts occur when new instances initialize — solved with Provisioned Concurrency (pre-allocated warm instances) managed via Application Auto Scaling. VPC cold starts have been significantly improved since 2019.
