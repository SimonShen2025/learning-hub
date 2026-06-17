---
title: "Implement connection optimization (pgbouncer)"
lectureId: 18
section: 5
sectionTitle: "Develop AI solutions by using Azure Database for PostgreSQL"
date: "2026-06-17"
tags: ["postgresql", "pgbouncer", "connection-pooling", "ai-200"]
---

## 中文短总结

**PgBouncer** 是 PostgreSQL 连接池，复用长连接、减少每次请求 open/close 开销。**仅 General Purpose 及以上可用**（Burstable 不支持）。启用：Server parameters 打开 PgBouncer。连接端口变化：直连 **5432** → 池化 **6432**。AI 短请求高并发场景（vector search）收益明显。升级 Burstable → GP 需 restart，成本约 2–3×。

## 中文长总结

AI 应用（尤其 serverless、短生命周期 vector query）频繁创建 DB 连接，开销在 CPU 和 latency 上累积。**PgBouncer** 解决此问题。

**PgBouncer 原理**：
- 位于应用与 PostgreSQL 之间的 **connection pooler**
- 维护一组 ready 的长连接，分发给多个客户端
- 客户端短连接映射到 pooled 长连接，避免 per-request handshake
- 降低 latency、提高 throughput、避免 hitting **max_connections** 上限

**Azure 配置要求**：
1. **Compute tier 必须 ≥ General Purpose**——Burstable 无 PgBouncer 选项
2. Portal → Server parameters → 启用 **PgBouncer**
3. 启用后可配：max clients、max pool size、pool mode 等

**连接端口（考试重点）**：
| 模式 | 端口 |
|---|---|
| Direct PostgreSQL | **5432** |
| PgBouncer pooled | **6432** |

应用代码仅改 `port=6432`，host/user/password/SSL 不变。

**成本权衡**：B2s Burstable ~$58/mo → D2s General Purpose ~$140/mo，但 PgBouncer 是生产 AI throughput 的必要组件。

**适用场景**：高并发短查询（vector similarity、API backend）、Function Apps、Container Apps 等无持久连接的环境。

## 考试要点

- **PgBouncer** = connection pooling for throughput + lower latency
- **Not available on Burstable** tier—requires General Purpose or higher
- Pooled connections use port **6432** (direct = **5432**)
- Reuses long-lived DB connections across many short client requests
- Prevents max connection exhaustion under AI/high-concurrency loads
- Enable via Server parameters after tier upgrade (restart required)
- Exam objective wording: "connection optimization to improve throughput and minimize latency"

## English Short Summary

**PgBouncer** pools PostgreSQL connections—reuse long-lived connections for many short AI requests. Only on **General Purpose+** tiers (not Burstable). Enable in server parameters; connect via port **6432** instead of 5432. Reduces connection overhead and max-connection pressure. Required for high-throughput vector/RAG backends.
