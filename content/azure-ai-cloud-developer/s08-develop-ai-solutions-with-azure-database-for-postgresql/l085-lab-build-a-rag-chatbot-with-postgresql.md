---
title: "Lab: Build a RAG Chatbot with PostgreSQL (Hands-On Lab)"
lectureId: 85
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "rag", "azure-openai", "hands-on-lab"]
---

## 中文短总结

整合前几课成果，构建基于 PostgreSQL 的完整 RAG 聊天机器人：为用户查询生成向量嵌入，运行加权混合搜索（向量 70% + 关键词 30%）检索 top-5 相关文本块作为上下文，编写详细 system prompt 限定 GPT-4.1 只依据检索内容回答（并在信息不足时明确说明），最终通过实际问答（对比两家公司范围三排放挑战、GreenSteel 碳中和目标年份）验证回答的准确性和可追溯性。

## 中文长总结

### 环境准备

- `.env` 补充聊天补全模型名称（GPT-4.1，已部署于 Microsoft Foundry）
- 创建连接池、Azure OpenAI 客户端、向量嵌入生成辅助函数

### 检索阶段

- 示例查询 1："compare the scope three emissions challenges faced by Green Steel Limited and Urban Retail. Also compare the company performance according to their ESG reports."
- 为查询生成向量嵌入后，执行加权混合搜索查询（向量搜索权重 70%，关键词搜索权重 30%，合成 RRF/混合分数），检索 chunk_id、company_name、hybrid_score、chunk_text 组成的 top-5 上下文
- 将检索结果组织为便于直接用于 API 调用的数据结构（用户查询 + 检索文档列表）

### 生成阶段

- 编写详细 system prompt：将 LLM 设定为 "ESG and sustainability reporting assistant for CarbonObs"，要求仅依据检索到的上下文回答问题；若上下文中信息不足，需明确声明"未能在检索文档中找到充分信息"（用于抑制幻觉）
- 构造增强用户提示词（用户查询 + 检索上下文），调用 Chat Completions API（GPT-4.1，temperature=0.2，偏向准确而非创造性）
- 输出结果对比了 Green Steel Limited（通过工艺优化和燃料切换实现范围一二减排 22%，实施先进监测系统）与 Urban Retail（通过回收计划推进可持续发展整合，但进展不均衡，供应链透明度有限）的表现

### 二次验证

- 示例查询 2："What is Green Steel Limited's target year for achieving carbon neutrality?"
- 检索到相关上下文后，模型回答"2035 年"，并可在原始 PDF 报告文本中核实该说法准确无误

## English Short Summary

Assembled a PostgreSQL-backed RAG chatbot: embedded the user query, ran a weighted hybrid search (70% vector, 30% keyword) to retrieve the top-5 chunks as context, used a system prompt constraining GPT-4.1 to answer only from retrieved context, and validated with two queries — comparing Scope 3 challenges between two companies and confirming Green Steel Limited's 2035 carbon-neutrality target against the source PDF.
