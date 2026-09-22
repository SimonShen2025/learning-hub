---
title: "Lab: Upload Vector Embeddings to PostgreSQL (Hands-On Lab)"
lectureId: 83
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "pgvector", "langchain", "azure-openai"]
---

## 中文短总结

使用 LangChain 的 `RecursiveCharacterTextSplitter`（块大小 500、重叠 50 字符）将 `esg_text_data` 表中的可持续发展报告文本拆分为多个分块，为每个分块调用 Azure OpenAI 的 text-embedding-ada-002 模型生成 1536 维向量嵌入，写入 `esg_chunks` 表；最后使用 `CREATE INDEX ... USING hnsw` 创建余弦相似度的 HNSW 向量索引（m=16, ef_construction=64），并通过 `pg_indexes` 系统表验证索引已创建。

## 中文长总结

### 环境准备

- `.env` 配置 Azure OpenAI 终结点、API Key、嵌入模型名（text-embedding-ada-002，输出 1536 维）
- 使用 Psycopg + Psycopg Pool 建立数据库连接池，使用 LangChain Community 库的文本拆分函数，使用 OpenAI SDK 调用嵌入模型

### 文本分块

- 编写 `document_chunker` 辅助函数，使用 LangChain 的 `RecursiveCharacterTextSplitter`：chunk_size=500，chunk_overlap=50，通过换行符/句号等分隔符切分文本
- 从 `esg_text_data` 表查询各公司的 record_id、company_name、sustainability_report 文本
- 对每条记录的报告文本调用分块函数，生成多个分块，并组织为包含 record_id、company_name、chunk_text 的字典列表

### 生成向量嵌入并上传

- 编写 `generate_embeddings` 辅助函数，调用 Azure OpenAI 的 `embeddings.create` 接口为每个分块文本生成向量
- 为每个分块字典新增 `embedding` 键，存储对应向量
- 将全部分块数据（record_id、company_name、chunk_text、chunk_embedding）批量插入 `rag.esg_chunks` 表

### 创建 HNSW 向量索引

- 使用 `CREATE INDEX esg_chunks_embedding_hnsw_idx ON rag.esg_chunks USING hnsw (chunk_embedding vector_cosine_ops) WITH (m = 16, ef_construction = 64);` 创建 HNSW 索引
- 通过查询系统表 `pg_indexes`（在 rag schema 下）验证索引已成功创建，确认索引类型为 HNSW，作用于 chunk_embedding 列

## English Short Summary

Used LangChain's `RecursiveCharacterTextSplitter` (chunk size 500, overlap 50) to split sustainability report text from `esg_text_data` into chunks, generated 1536-dimension embeddings for each chunk via Azure OpenAI's text-embedding-ada-002, bulk-inserted them into `esg_chunks`, and finally created an HNSW cosine-similarity vector index (`m=16`, `ef_construction=64`) on the `chunk_embedding` column, verified via the `pg_indexes` system table.
