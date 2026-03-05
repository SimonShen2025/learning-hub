---
title: "Caching Strategies in AWS"
lectureId: 365
section: "s29"
sectionTitle: "More Solution Architectures"
date: "2026-03-05"
tags: [caching, cloudfront, api-gateway, elasticache, dax, redis]
---

## 中文短总结

AWS 缓存策略分层：①**CloudFront**：Edge 缓存（最接近用户，最低延迟），但可能数据过时 → 用 TTL 平衡②**API Gateway**：区域级缓存（无需 CloudFront 也可独立使用）③**应用层缓存**：Redis / Memcached / DAX（针对 DynamoDB）→ 减轻数据库压力，缓存热查询/复杂查询结果④**数据库/S3**：无内置缓存。越靠近用户缓存（Edge）→ 延迟越低但一致性越差。越靠近数据库缓存 → 延迟更高但一致性更好。没有「对或错」的缓存策略，取决于业务场景。

## 中文长总结

AWS 缓存架构全景：

```
客户端 → CloudFront（Edge 缓存）
       → API Gateway（区域缓存）
       → App Logic（EC2/Lambda）
       → Redis/Memcached/DAX（应用缓存）
       → 数据库（RDS/DynamoDB，无缓存）

静态内容路径：
客户端 → CloudFront → S3（无缓存）
```

**缓存层次对比：**

| 缓存位置 | 范围 | 延迟 | 一致性 | 场景 |
|---------|------|------|--------|------|
| **CloudFront** | Edge（全球 PoP） | 最低 | 可能过时（TTL） | 静态+动态 |
| **API Gateway** | 区域 | 低 | 较好 | API 响应 |
| **Redis/DAX** | 应用层 | 中等 | 好 | 热数据/复杂查询 |
| **数据库** | - | 高 | 最佳 | 实时数据 |

**决策因素：**
- 在哪里缓存？
- 缓存多久（TTL）？
- 可接受多大延迟？
- 哪些内容需要缓存？

## 考试要点

- CloudFront = Edge 缓存（最快但可能过时）
- API Gateway 有自己的区域缓存
- Redis/Memcached/DAX = 应用层缓存减轻数据库压力
- 数据库和 S3 本身没有缓存能力
- 无「标准答案」，取决于场景

## English Short Summary

AWS caching layers: (1) **CloudFront** — Edge cache (closest to users, lowest latency, may be stale, use TTL); (2) **API Gateway** — regional cache (independent of CloudFront); (3) **Application cache** — Redis/Memcached/DAX (reduce DB pressure, cache hot/complex queries); (4) **Database/S3** — no built-in caching. Closer to Edge = lower latency but less consistency. No single right answer — depends on scenario, TTL, acceptable latency, and what to cache.
