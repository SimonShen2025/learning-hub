---
title: "Lab - Azure Content Understanding - Extract Information from Documents"
lectureId: 61
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [azure-content-understanding, document-analyzer, lab, invoice-processing]
---

## 中文短总结

使用 Azure Content Understanding 的 Document Analyzer 从文档中提取信息。在 Foundry 中：Build → Models → AI Services → Content Understanding → 选择 Document modality → 提交文档 → 服务分析并提取内容和字段值。预构建分析器可识别发票信息（供应商名、日期、金额等）。类似于 Azure Document Intelligence 服务，但整合在 Foundry 中。后续将展示通过 Python 程序调用。

## 中文长总结

### 在 Foundry 中使用 Document Analyzer
1. Build → Models → AI Services → Content Understanding
2. 选择 Modality: Document
3. 上传或选择文档
4. 服务分析文档 → 返回结构化信息

### 功能
- 读取文档内容
- 提取特定字段值（基于 schema）
- 支持发票、收据等常见文档类型
- 预构建的 Invoice Analyzer 可提取：供应商名、客户名、发票日期、行项目、金额

### 与 Azure Document Intelligence 的关系
- 功能类似（预构建的 invoice/receipt 模型）
- 现在整合到 Foundry 的 Content Understanding 中
- 使用 prebuilt document analyzer

### 后续步骤
- 通过 Python SDK 调用 Document Analyzer
- 结合 Azure Blob Storage 处理远程文档
- 需要部署 GPT-4.1, GPT-4.1-mini, text-embedding-3-large

## 考试要点

- Document Analyzer 从文档中提取结构化信息
- 预构建分析器支持：发票、收据等
- 通过 Foundry 的 Content Understanding 访问
- 可提取 name-value pairs（如发票字段）
- 需要特定模型部署支持

## English Short Summary

Using Azure Content Understanding's Document Analyzer to extract information from documents. In Foundry: Build → Models → AI Services → Content Understanding → Document modality → submit document → get structured field values. Prebuilt invoice analyzer extracts vendor name, dates, amounts, etc. Similar to Azure Document Intelligence but integrated in Foundry. Requires GPT-4.1 and text-embedding-3-large deployments.
