---
title: "Identifying AI Workloads - Information Extraction"
lectureId: 13
section: 1
sectionTitle: "AI-901 - Identify AI concepts and capabilities"
date: "2026-06-10"
tags: [ai-workloads, information-extraction, ner, named-entity-recognition, document-processing]
---

## 中文短总结

四大 AI 工作负载类型之四：信息提取。从非结构化/半结构化源（文档、邮件、合同、发票、表单）中提取特定结构化信息。核心技术：Named Entity Recognition（NER，识别人名、组织、地点、日期）和发票/收据处理（自动提取供应商名、发票号、金额、到期日）。企业中最具即时应用价值的工作负载。最强大的企业 AI 系统会组合使用全部四种工作负载类型。

## 中文长总结

### 信息提取定义
- 从非结构化或半结构化源中提取特定的结构化信息
- 数据源：文档、邮件、合同、发票、表单、网页
- 核心价值：将埋藏在自由文本中的有价值数据变为结构化字段

### 核心技术

**Named Entity Recognition (NER)**
- 在文本中识别和标注实体：人名、组织、地点、日期等
- 应用：从新闻文章自动构建结构化数据库（who did what, where, when）

**发票和收据处理**
- 从发票中自动提取：供应商名、发票号、行项目、金额、到期日
- 替代人工数据录入到会计系统

### 四种工作负载协同示例
客户服务平台可同时使用：
1. Speech-to-Text → 转录通话
2. Text Analysis → 分类问题、检测情感
3. Information Extraction → 提取对话中的账户详情
4. LLM → 为客服代表生成回复建议

## 考试要点

- Information Extraction = 从非结构化源提取结构化信息
- NER = 识别人名、组织、地点、日期等实体
- 典型场景：发票处理、合同分析、文档自动化
- 四种工作负载可组合使用，最强企业系统会综合利用
- 场景识别：发票、合同、表单 → Information Extraction

## English Short Summary

Information extraction pulls structured data from unstructured/semi-structured sources (documents, emails, invoices, forms). Key techniques: Named Entity Recognition (NER — identifies people, organizations, locations, dates) and invoice/receipt processing (extracts vendor name, invoice number, amounts). Most powerful enterprise AI systems combine all four workload types together.
