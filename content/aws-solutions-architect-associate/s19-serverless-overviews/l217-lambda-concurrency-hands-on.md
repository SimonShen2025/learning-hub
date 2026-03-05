---
title: "Lambda Concurrency - Hands On"
lectureId: 217
section: "19"
sectionTitle: "Serverless Overviews from a Solution Architect Perspective"
date: "2026-03-05"
tags: ["lambda", "concurrency", "hands-on", "reserved-concurrency", "provisioned-concurrency"]
---

## 中文短总结

Lambda 并发设置实操 — 演示在 Configuration → Concurrency 中配置 Reserved Concurrency。默认 1000 unreserved account concurrency 在所有函数间共享。将保留并发设为 0 可测试限流效果，触发 429 速率超限错误。Provisioned Concurrency 需要已发布的版本（不能用 $LATEST），用于消除冷启动但会产生额外费用。

## English Short Summary

Lambda concurrency hands-on: demonstrated configuring Reserved Concurrency under Configuration → Concurrency. Default 1000 unreserved account concurrency is shared across all functions. Setting reserved concurrency to 0 always throttles the function (429 rate exceeded error) — useful for testing throttle handling. Provisioned Concurrency requires a published version (not $LATEST), eliminates cold starts but incurs additional costs.
