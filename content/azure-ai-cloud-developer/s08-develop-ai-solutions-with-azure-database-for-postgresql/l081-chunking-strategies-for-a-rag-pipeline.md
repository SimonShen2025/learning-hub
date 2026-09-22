---
title: "Chunking Strategies for a RAG Pipeline"
lectureId: 81
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["rag", "chunking", "langchain"]
---

## 中文短总结

分块（Chunking）是将大段文本（如 PDF 文档）拆分为较小片段以便分别生成向量嵌入的策略，需要在保留上下文语义和检索精度之间取得平衡。主要策略包括：固定大小分块（配合重叠字符保留语义连续性，课程采用此策略并结合 LangChain 实现）、语义分块（按逻辑边界拆分）、上下文增强分块（附加关键词等元数据）、AI 驱动动态分块（用 LLM 决定分块方式，但成本和可控性较差，不推荐）。

## 中文长总结

### 为什么需要分块

- RAG 架构的检索（Retrieval）环节依赖向量数据库；如果将一份 100-200 页的 PDF 文档不做拆分直接生成向量嵌入，其对应的数万字文本压缩进单一向量会严重损失语义信息，降低召回率、精确率和准确率
- 目标是将大段文本拆分为较小的组成部分，分别生成向量嵌入并单独存储，从而更好保留语义
- 分块过大可能超出 token 限制或稀释语义焦点；分块过小则可能丢失重要上下文——需要找到平衡点

### 固定大小分块（Fixed-Size Chunking）

- 将文本按固定字符/token 数拆分为等长片段（如每块 2000 字符），并设置重叠区域（如 500 字符）以保留跨块的语义连续性
- 可借助开源库 LangChain 实现，是课程实验中采用的策略——简单且有效

### 语义分块（Semantic Chunking）

- 按文档中已有的逻辑边界（如引言、优势、结论等章节）拆分，保留每个块内部的语义连贯性

### 上下文增强分块（Context-Enriched Chunking）

- 在分块文本基础上附加额外元数据（如关键词字段），帮助检索系统判断该块的相关性，提升检索准确率和答案质量

### AI 驱动动态分块（AI-Driven Dynamic Chunking）

- 通过预设系统提示词让 LLM 自主决定分块方式
- 缺点：分块方式缺乏可控性；且需要大量文本输入到 LLM API 调用中，会产生较高且难以预估的 token 成本
- 课程作者认为该策略在实际生产中并不理想，推荐固定大小分块作为最简单有效的方案

## English Short Summary

Chunking splits large texts (e.g., PDFs) into smaller pieces before embedding, balancing context preservation against retrieval precision. Strategies include fixed-size chunking (with character overlap for continuity, implemented via LangChain and used in this course), semantic chunking (splitting on logical boundaries), context-enriched chunking (appending metadata like keywords), and AI-driven dynamic chunking (LLM-decided, but costly and less controllable — not recommended).
