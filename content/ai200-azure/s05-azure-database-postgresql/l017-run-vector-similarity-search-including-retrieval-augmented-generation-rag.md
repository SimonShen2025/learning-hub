---
title: "Run vector similarity search including retrieval-augmented generation (RAG)"
lectureId: 17
section: 5
sectionTitle: "Develop AI solutions by using Azure Database for PostgreSQL"
date: "2026-06-17"
tags: ["postgresql", "rag", "vector-search", "embeddings", "ai-200"]
---

## 中文短总结

PostgreSQL RAG 两阶段：① embedding 模型向量化 query，**`<=>` cosine distance** 检索 top-K 文档 ② 将检索结果作为 **context** 传给 GPT 生成答案。流程：CREATE TABLE knowledge_base → embed & INSERT → similarity SELECT → LLM prompt with context。Distance 越小越相似。避免将全部文档塞入 prompt，只传最相关片段——标准 RAG pattern。

## 中文长总结

本讲在 PostgreSQL 实现完整 **RAG pipeline**，与 Cosmos DB 向量检索 demo 对应。

**Stage 1 — Retrieval（向量相似度搜索）**：
1. 确保 `vector` extension 已启用
2. 创建 `knowledge_base` 表（text + embedding vector(1536)）
3. 用 Azure OpenAI embedding 模型将知识片段向量化并 INSERT
4. 用户 question 同样 embed
5. SQL：`ORDER BY embedding <=> query_embedding LIMIT K`（distance 升序 = 最相似）

**Stage 2 — Generation（RAG）**：
1. 将 top-K 检索结果拼接为 **context**
2. Prompt 模板：`Based on the following content, answer: {question}`
3. 调用 GPT（如 gpt-4.1）生成最终答案
4. LLM 仅看到相关 context，非全库——降低 token 成本、提高准确性

**Demo 结果**：问 "Which database supports vector search?" → 检索命中 PostgreSQL 和 Cosmos DB 条目 → LLM 选择 PostgreSQL（因 question 强调 native vector similarity）。

**与纯 vector search 区别**：Retrieval alone 返回相似文档；RAG adds **LLM synthesis** step。考试需理解两阶段架构。

**依赖**：Azure OpenAI embedding deployment + chat model deployment；`psycopg2` + OpenAI SDK。

## 考试要点

- RAG = **Retrieval** (vector similarity) + **Augmented Generation** (LLM with context)
- pgvector cosine distance：**`<=>`**，lower = more similar
- Top-K retrieval via `ORDER BY ... LIMIT`
- Context 来自 DB 检索结果，非全量文档
- Embedding model 与 chat model 通常分开部署
- 与 Cosmos DB vector search 概念相同，SQL 语法不同
- 典型 AI-200 场景：knowledge base Q&A

## English Short Summary

Two-stage RAG on PostgreSQL: (1) embed query, run **top-K cosine similarity** (`<=>`, lower is closer); (2) pass retrieved chunks as **context** to GPT for grounded answers. Store embeddings in pgvector table, retrieve relevant docs only—not the full corpus. Same pattern as Cosmos DB RAG but with SQL + pgvector operators.
