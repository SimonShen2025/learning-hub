---
title: "Lab: Build a RAG Chatbot with Azure CosmosDB (Hands-On Lab)"
lectureId: 66
section: 7
sectionTitle: "Develop AI Solutions with Azure CosmosDB for NoSQL"
date: "2026-09-22"
tags: ["cosmosdb", "rag", "azure-openai", "hands-on-lab"]
---

## 中文短总结

整合前几课的成果，构建完整 RAG 聊天机器人：为用户自然语言查询生成向量嵌入，通过混合搜索（RRF 结合向量距离和全文分数）检索 top-5 相关食品文档作为上下文，编写详细的 system prompt 限定 LLM（GPT-4.1）行为，将用户查询与检索到的上下文组合成增强提示词发送给聊天补全 API，最终返回基于真实数据的回答。

## 中文长总结

### 环境准备

- 在 `.env` 中新增聊天补全模型名称（GPT-4.1，已在 Microsoft Foundry 中部署）
- 创建 Cosmos DB 客户端导航至容器客户端；创建 Azure OpenAI 客户端，用于（1）生成用户查询的向量嵌入，（2）调用聊天补全 API

### 检索阶段（Retrieval）

- 设置用户查询，例如 "suggest me something with mangoes and bananas in it"
- 使用混合搜索查询：`SELECT TOP 5 ... ORDER BY RRF(VectorDistance(...), FullTextScore(...))`，检索最相关的 5 篇文档（包含 name、content、category、price、rating、reviewCount、dietaryTags 等字段）作为 grounding 上下文
- 验证检索结果确实与查询语义相关（如查询提到芒果和香蕉，检索结果中包含 "banana burrito"、含芒果和香蕉的 smoothie）

### 生成阶段（Generation）

- 编写详细的 system prompt，将 LLM 设定为 "Food GPT — Intelligent Restaurant Recommendation Assistant"，并要求：仔细审阅检索到的上下文再作答、只使用上下文中的信息、适当使用要点列表格式
- 构造增强用户提示词：原始用户查询 + 检索到的上下文
- 调用 Chat Completions API（model 为 GPT-4.1，temperature 0.7），传入 system prompt 与增强用户提示词
- 展示两次问答示例：芒果香蕉相关推荐、低碳水食物推荐，均能正确引用检索到的具体菜品及其属性（价格、卡路里、评分等）作答

## English Short Summary

Assembled a full RAG chatbot: embedded the user's query, retrieved the top-5 relevant food documents via hybrid search (RRF combining vector distance and full-text score) as grounding context, authored a detailed system prompt constraining GPT-4.1's behavior, and combined the query with context into an augmented prompt sent to the Chat Completions API — producing grounded answers for mango/banana and low-carb food queries.
