---
title: "Lab: Enabling the Vector Extension and adding Vector Tables (Hands-On Lab)"
lectureId: 82
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "pgvector", "rag", "hands-on-lab"]
---

## 中文短总结

在 Azure 门户的服务器参数中启用 `azure.extensions` 里的 vector 扩展，随后创建新的 `rag` schema，包含 `esg_text_data`（存储从 PDF 提取的可持续发展报告文本）和 `esg_chunks`（存储文本分块及 1536 维向量嵌入列，外键关联 esg_text_data）两张表；创建 vector 列时仍需在数据库层执行 `CREATE EXTENSION vector` 才能使用 vector 数据类型。

## 中文长总结

### 启用向量扩展（账户级）

- 在 Azure 门户 PostgreSQL 服务器的 Server Parameters 区域搜索 `azure.extensions`
- 在允许扩展的值列表中勾选 vector 扩展并保存，等待部署完成

### 创建 RAG Schema 与表

- 创建新 schema：`rag`
- **esg_text_data 表**：record_id（主键）、company_id、company_name、review_text、sustainability_report（从 PDF 提取的完整文本）、created_at
- 数据来源：`documents` 文件夹下多份公司可持续发展报告 PDF（如 Ecologistics International、Future Energy Corporation、Green Steel Limited 等），已预先提取为文本并写入 INSERT 脚本
- **esg_chunks 表**：chunk_id（主键）、record_id（外键，关联 esg_text_data）、company_name、chunk_text、chunk_embedding（vector(1536) 类型列）

### 数据库级启用扩展

- 首次创建含 vector 列的表时报错 "type vector does not exist"，原因是账户级启用扩展后仍需在具体数据库中执行 `CREATE EXTENSION vector;`
- 执行后可通过查询 `pg_extension` 系统表确认 vector 扩展已启用（结果为 true）
- 重新执行建表脚本，esg_chunks 表创建成功

### 可视化验证

- 使用 pgAdmin 4 的 ERD 工具，对 rag schema 下的 esg_chunks 表生成实体关系图，确认 esg_text_data.record_id（父键）与 esg_chunks.record_id（外键）之间的关联关系

## English Short Summary

Enabled the vector extension at the server level via Azure portal's `azure.extensions` parameter, created a `rag` schema with an `esg_text_data` table (PDF-derived sustainability report text) and an `esg_chunks` table (chunk text plus a `vector(1536)` embedding column, foreign-keyed to esg_text_data) — discovering that `CREATE EXTENSION vector` must also be run at the database level before the `vector` type becomes available for the table.
