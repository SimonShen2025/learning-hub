---
title: "Lab - Azure Content Understanding - Document Analyzer - Model setup"
lectureId: 64
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [model-deployment, gpt-4-1, text-embedding, lab, setup]
---

## 中文短总结

为使用 Azure Content Understanding 的 Document Analyzer 部署所需模型。Microsoft 文档要求部署：GPT-4.1、GPT-4.1-mini、text-embedding-3-large。操作极简：Discover → Models → 搜索模型 → Deploy with default settings。三个模型依次部署即可。分析器在后台调用这些模型来处理文档。

## 中文长总结

### 需要部署的模型
| 模型 | 用途 |
|------|------|
| GPT-4.1 | 文档理解和分析 |
| GPT-4.1-mini | 轻量级处理 |
| text-embedding-3-large | 文本嵌入和向量化 |

### 部署步骤（每个模型相同）
1. Discover → Models
2. 搜索模型名称
3. 点击模型 → Deploy
4. 使用默认设置部署

### 为什么需要这些模型？
- Document Analyzer 在后台调用这些模型
- 用于文档理解、内容提取和结构化输出
- 这是 Microsoft 文档明确的前提要求

## English Short Summary

Deploy required models for Azure Content Understanding's Document Analyzer: GPT-4.1, GPT-4.1-mini, and text-embedding-3-large. Simple process: Discover → Models → search → Deploy with default settings for each. The analyzer uses these models in the background for document processing.
