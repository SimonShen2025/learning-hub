---
title: "Intro to the \"ESG Reporting\" Case-Study for Labs"
lectureId: 70
section: 8
sectionTitle: "Develop AI Solutions with Azure Database for PostgreSQL"
date: "2026-09-22"
tags: ["postgresql", "case-study", "esg", "data-modeling"]
---

## 中文短总结

本模块的实验案例围绕 ESG（环境、社会、治理）报告展开：主要聚焦环境（E）部分的碳排放数据，分为范围一（企业自有排放源）、范围二（外购电力/热力/蒸汽产生的间接排放）、范围三（供应链、员工出差等其他间接排放）三个层级。数据库将建立公司表、排放记录表、能源消耗表三张核心表，后续还会加入 PDF 报告文本及向量嵌入表，用于构建 RAG 聊天机器人。

## 中文长总结

### 案例背景

- ESG（Environmental, Social, Governance，环境、社会、治理）是可持续发展报告的三大支柱
- 选择该案例的原因：(1) 是真实行业场景，属于新兴领域；(2) 涉及大量数值型数据，适合结合关系型数据库（Azure Managed PostgreSQL）进行实践

### 碳排放的三个范围（Scope）

1. **范围一（Scope 1）**：企业自有或可控排放源产生的直接排放，如自有车辆、自有工厂
2. **范围二（Scope 2）**：外购电力、热力或蒸汽消耗产生的间接排放
3. **范围三（Scope 3）**：不属于范围一、范围二的其他间接排放，如供应商运输产生的排放、员工商务差旅（飞机使用喷气燃料产生的 CO2）等

### 开发者角色

- 扮演 ESG 顾问兼 IT 顾问角色，使用结构化 SQL 数据（存储于 PostgreSQL）建模排放、能源和可持续发展报告场景
- 应用数据建模、索引、查询、性能调优等 PostgreSQL 概念于真实 ESG 用例
- 使用 PG SQL 分析 ESG 指标，生成洞察，支持数据驱动决策

### 数据库表结构

- **companies 表**：公司 ID、公司名称、所在地区
- **emission_records 表**：各公司范围一/二/三的 CO2 排放数值
- **energy_consumption 表**：能源消耗数据（如电力、喷气燃料等）
- 后续课程还将引入非结构化 PDF 报告数据，为其生成向量嵌入并存入 PostgreSQL 索引化表中，最终构建一个可回答 PDF 文档相关问题的 RAG 聊天机器人

## English Short Summary

This module's labs revolve around an ESG (Environmental, Social, Governance) case study, focusing on the Environmental pillar's carbon emissions: Scope 1 (direct, company-owned), Scope 2 (indirect, purchased electricity/heat/steam), and Scope 3 (other indirect, e.g. supply chain, travel). The database models companies, emission_records, and energy_consumption tables, later extended with PDF text and vector embeddings for a RAG chatbot.
