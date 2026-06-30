---
title: "Unit 6: Agentic RAG – Dynamic Retrieval for Agents"
lectureId: 7
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "agentic-RAG", "Azure-AI-Search", "embeddings", "grounding"]
---

## 中文短总结

**Grounding** 用自有数据回答，避免 LLM 仅依赖训练 cutoff。**Static RAG** 每次注入搜索结果浪费 token；**Agentic RAG** 让 Agent 通过 search tool **自主决定**是否/如何搜索（query + filter）。核心：**Embedding** 模型将文本转为向量 → **Azure AI Search**（vector/hybrid）或 **Cosmos DB vector search**、**Bing**（公网实时）、**Fabric OneLake**（企业数据湖）。五步流程：问题 → embed → search → 构造 prompt（**grounding 内容放问题之前**）→ LLM；按 relevance **score (0–1)** 过滤结果。

## 中文长总结

### Static vs Agentic RAG
| Static RAG | Agentic RAG |
|------------|-------------|
| 每 prompt 强制注入搜索结果 | Agent 决定是否调用 search tool |
| 浪费 token（简单问候也搜索） | 按需搜索，省 token/延迟/费用 |
| Agent 无检索决策权 | Agent 自选 query、filter |

### Search Tool
- 在 Foundry toolkit 配置；参数含 **query**、**filter**
- Agent 推理 → 需要信息则调用 tool → 结果回传继续

### Embedding 与 Vector Search
- **Embedding**：文本语义的数字向量（如 text-embedding-3-small → ~1536 维）
- 文档预索引 embedding；用户问题也 embed → 计算多维距离找最相似文档
- 例：“how do I get a refund?” 匹配 “Return Policy and Procedures”（无 refund 字样）

### Azure AI Search
- **Vector search**：语义相似
- **Hybrid search**：keyword + vector 合并结果
- SDK：`client.search(search_text=..., vector_queries=...)`
- REST POST body 含 `vectorQueries`、返回 `value[]` 每文档含 **content** + **score (0–1)**
- 考试：按 score 过滤最相关文档

### Bing Search Tool
- 公网实时信息（新闻、2026 年后事件）；需 API key；有 rate limit 与 per-query 成本

### Cosmos DB Vector Store
-  operational 数据 + embedding 同库；直接 vector search，适合产品目录/订单/用户 profile 等需强一致场景

### Microsoft Fabric / OneLake
- 统一企业数据湖；AI Search 可指向 OneLake → Agent 查询跨系统 live 数据（如 “欧洲上季度销售额”）

### System Message 引导检索
- 示例：“仅有 products/prices/policies 问题时才用 search tool；问候直接回复”
- Agent 判断训练知识是否足够 vs 需要最新/内部数据

### Dynamic Filtering
- Agent 从用户问题提取 date range、category、product ID 等作为 search **filter** 参数
- System message 描述可用 filter 字段

### Prompt 构造技巧
```
Based on this information: {grounding_context}
Answer the user's question: {user_question}
```
- **Grounding 内容放在用户问题之前**，让 LLM 先读上下文
- 注意 token limit（如 128K）；大 grounding 结果可能占满上下文

### 五步编码流程
1. 接收用户问题
2. Embedding 模型转向量
3. 调用 Search（AI Search / Bing / Cosmos DB）
4. 解析 JSON `value[]`，提取 content + score，构建 prompt
5. 发送完整 prompt 至 LLM

## 考试要点

- Static vs **Agentic RAG** 区别与优劣
- Embedding 概念、embedding model、向量维度
- Azure AI Search：**hybrid** search、SDK `client.search`、REST `vectorQueries`
- 结果 JSON：`value[]`、**relevance score 0–1**、按 score 过滤
- Grounding context **prepend** 到 user question 之前
- Bing = 公网实时；Cosmos DB = operational + vector；Fabric OneLake = 企业级
- Search tool 参数：**query**、**filter**；Agent 自主决定
- Token limit 与 grounding 结果大小的权衡

## English Short Summary

Grounding supplies agents with private or recent facts beyond LLM training cutoffs. Static RAG always injects search hits; agentic RAG gives agents a search tool to decide if, when, and how to query—saving tokens and latency. Embeddings convert text to vectors for semantic retrieval via Azure AI Search (vector/hybrid), Cosmos DB vector fields, Bing for live web data, or Fabric OneLake for enterprise lakes. Implement five steps: embed the question, search, parse value[] with relevance scores (0–1), prepend grounding context before the user question, then call the LLM. System messages can constrain when to search and which filters to apply dynamically.
