---
title: "Introduction"
lectureId: 1
section: 1
sectionTitle: "Introduction"
date: "2026-06-17"
tags: ["AI-200", "Azure AI", "certification", "exam-overview", "AZ-204"]
---

## 中文短总结

AI-200（Azure AI Cloud Developer Associate）是 2026 年 6 月进入 beta 的新考试，取代已退役的 AZ-204，但重心转向 AI：向量/embedding、Cosmos DB/PostgreSQL/Redis 相似度搜索，仍覆盖容器、Functions、监控。课程逐条对应 exam skills outline，演示用 Azure Portal + VS Code + GitHub（gottagetgit/AI-200 course demos）。

## 中文长总结

### 考试定位
- **AI-200** = Azure AI Cloud Developer Associate，2026 年 6 月 beta
- **AZ-204 继任者**：原 Developer Associate 退役，Microsoft 全面 AI 化
- 课程覆盖 exam requirements **从头到尾**，每个 skill 都有对应视频

### 考试内容分布（与 AWS 对照）
| 领域 | Azure AI-200 重点 |
|------|-------------------|
| 容器 | ACR、App Service、Container Apps、AKS |
| 数据 | Cosmos DB NoSQL、PostgreSQL、Redis（向量存储） |
| 计算 | Azure Functions、事件驱动（Service Bus、Event Grid） |
| AI 特有 | Embeddings、vector similarity search、RAG |
| 运维 | 安全、监控、Log Analytics / Kusto |

### 学习资源
- **Azure Portal** + **VS Code** + **Azure CLI**
- GitHub 示例代码：`gottagetgit` → **AI-200 course demos**
- 每节可 pull 代码自行跟做

### 与 AZ-204 / AWS 的差异
- AZ-204 偏通用 Azure 开发；AI-200 **强制 AI 场景**（向量 DB、语义检索）
- 容器部分与 AWS ECS/EKS 概念类似，但 Azure 服务栈不同（ACR≈ECR，Container Apps≈Fargate+KEDA）

## 考试要点

- AI-200 是 **AZ-204 的 AI 聚焦继任**，2026 beta
- 技能域：容器托管 → 容器编排 → Cosmos DB → PostgreSQL → Redis → 事件/消息 → Functions → 安全 → 监控
- **AI 差异化**：embeddings 存储、vector search、change feed、RAG
- 动手环境：Portal、CLI、VS Code、配套 GitHub repo
- 非纯理论：每 skill 有 demo，考试偏 **怎么做** 而非概念定义

## English Short Summary

AI-200 Azure AI Cloud Developer Associate is a new exam (beta June 2026) replacing retired AZ-204 with an AI-focused scope: vectors/embeddings, similarity search via Cosmos DB/PostgreSQL/Redis, plus containers, Functions, security, and monitoring. The course maps every exam skill to a dedicated video. Labs use Azure Portal, VS Code, Azure CLI, and the gottagetgit/AI-200 course demos GitHub repo. Expect hands-on CLI and SDK tasks, not just theory.
