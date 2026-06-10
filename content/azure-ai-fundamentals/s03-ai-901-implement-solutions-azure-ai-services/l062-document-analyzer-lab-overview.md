---
title: "Azure Content Understanding - Document Analyzer - Lab Overview"
lectureId: 62
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [azure-content-understanding, document-analyzer, azure-blob-storage, python, lab]
---

## 中文短总结

Document Analyzer Python lab 架构概览。流程：示例发票 → 上传到 Azure Blob Storage → Python 代码使用 Content Understanding SDK 调用 Document Analyzer → 传入发票 URL → 使用预构建 Invoice Analyzer → 返回字段值（vendor name, customer name, invoice date 等）。前提：需部署 GPT-4.1、GPT-4.1-mini、text-embedding-3-large 模型。三步操作：创建 Storage Account → 部署所需模型 → 运行 Python 代码。

## 中文长总结

### Lab 架构
```
示例发票 → Azure Blob Storage → Python 代码 → Content Understanding SDK
                                      ↓
                              Document Analyzer (prebuilt)
                                      ↓
                              结构化字段输出
```

### 前提条件
需要部署以下模型：
- GPT-4.1
- GPT-4.1-mini
- text-embedding-3-large

### 三步操作
1. **创建 Azure Storage Account**
   - 创建 Container（顶层文件夹）
   - 上传发票图像
   
2. **部署所需模型**
   - Discover → Models → 搜索并部署三个模型
   
3. **运行 Python 代码**
   - 使用 Content Understanding SDK
   - 传入 Blob Storage 中的发票 URL
   - 调用 Invoice Analyzer
   - 获取 name-value pairs

### 输出字段示例
- Vendor Name（供应商名）
- Customer Name（客户名）
- Invoice Date（发票日期）
- Line Items（行项目）
- Total Amount（总金额）

## 考试要点

- Content Understanding 需要特定模型部署支持
- Azure Blob Storage 用于存储输入文档
- Document Analyzer 使用 prebuilt schema 提取字段
- 整合流程：Storage → SDK → Analyzer → 结构化输出

## English Short Summary

Document Analyzer Python lab architecture: Sample invoice → Azure Blob Storage → Python code with Content Understanding SDK → call prebuilt Invoice Analyzer → returns structured fields (vendor name, customer name, invoice date, amounts). Prerequisites: deploy GPT-4.1, GPT-4.1-mini, text-embedding-3-large models. Three steps: create Storage Account, deploy models, run Python code.
