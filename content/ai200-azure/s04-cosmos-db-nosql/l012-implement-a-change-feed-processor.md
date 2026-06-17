---
title: "Implement a change feed processor"
lectureId: 12
section: 4
sectionTitle: "Develop AI solutions by using Azure Cosmos DB for NoSQL"
date: "2026-06-17"
tags: ["cosmos-db", "change-feed", "event-driven", "ai-200"]
---

## 中文短总结

Cosmos DB **Change Feed** 发布 container 中每次 insert/update。**Change Feed Processor**（C# SDK 支持较好；Python SDK 对 processor 支持有限）需额外 **leases container**（partition key = id）追踪读取进度。Processor 可离线累积变更，重启后从 lease 续读。**不处理 delete**——删除需另方案。典型用途：增量同步、触发下游 AI pipeline。

## 中文长总结

Change Feed 是 Cosmos DB 内置的变更流机制：每当 container 中有 item 被插入或更新，变更即被发布，供外部消费者处理。

**架构组件**：
- **Monitored container**：被监听的源 container（如 `products`）
- **Leases container**：必需，用于存储 processor 的检查点/租约，partition key 为 `id`
- **Change Feed Processor**：SDK 提供的 builder，注册 callback，持续或按需拉取变更

**工作流程**：
1. 在同一 database 创建 `leases` container
2. 启动 processor，指向 source container + leases container
3. 在 portal 或通过 SDK 插入/更新 item → callback 收到变更（打印 ID、内容等）
4. Processor 停止期间变更仍被 Change Feed 保留；重启后 leases 使 processor 从上次位置继续

**语言/SDK 注意**：Python `azure.cosmos` 的 Change Feed Processor 支持不完善，生产/demo 常用 **.NET SDK**（`ChangeFeedProcessorBuilder`）。REST API 可 workaround 但复杂。

**限制（考试重点）**：Change Feed **仅捕获 insert 和 replace/update，不捕获 delete**。删除场景需 soft delete（标记字段）或 TTL + 其他机制。

**AI 场景**：新文档入库后自动触发 embedding 生成、索引更新或 Service Bus 通知——典型 event-driven AI 数据管道模式。

## 考试要点

- Change Feed 检测 **new and updated items only**，不含 delete
- 实现 Change Feed Processor 必须配置 **leases container**
- Leases container 的 partition key 通常为 **/id**
- Processor 支持 **at-least-once** 语义；lease 管理 checkpoint
- 离线期间变更不丢失，重启后继续消费
- Python SDK limitation：考试可能考概念，实现示例多用 C#/.NET
- 与 AWS DynamoDB Streams 概念类似，但 API/lease 模型不同

## English Short Summary

Cosmos DB Change Feed publishes inserts/updates (not deletes). Implement a **Change Feed Processor** with a dedicated **leases container** (partition key `/id`) for checkpointing. Processor callbacks fire on changes; missed changes while offline are picked up on restart. .NET SDK is the primary supported path; Python processor support is limited. Use for incremental sync and triggering downstream AI workflows.
