---
title: "Lab - Azure Content Understanding - Document Analyzer - Code Execution"
lectureId: 65
section: 3
sectionTitle: "AI-901 - Implement AI solutions - Azure AI Services"
date: "2026-06-10"
tags: [azure-content-understanding, python, sdk, document-analyzer, lab]
---

## 中文短总结

Python 代码调用 Azure Content Understanding Document Analyzer。安装 `azure-ai-contentunderstanding` 包。代码结构：配置 endpoint + key（从 Foundry → Build → Models → AI Services → Content Understanding → key 图标获取）→ 指定 invoice URL（Azure Blob Storage 中的文件链接）→ 调用 prebuilt invoice analyzer → 获取字段值（vendor, customer, date, amounts）。企业通常从 Blob Storage 读取文件而非本地。

## 中文长总结

### 安装
```bash
pip install azure-ai-contentunderstanding
```

### 代码结构
```python
from azure.ai.contentunderstanding import ContentUnderstandingClient

# 认证
endpoint = "<FOUNDRY_ENDPOINT>"
key = "<API_KEY>"

# 发票 URL（从 Azure Blob Storage）
invoice_url = "<BLOB_URL>"

# 调用 Document Analyzer
# 使用 prebuilt invoice analyzer
# 获取字段：vendor_name, customer_name, invoice_date, etc.
```

### 获取 Endpoint 和 Key
- Foundry → Build → Models → AI Services → Content Understanding
- 点击 key 图标 → 显示 endpoint 和 key

### 输入来源
- 不是从本地文件读取
- 从 Azure Blob Storage 的 URL 获取
- 企业实际场景：文件存储在云端

### 输出
- 结构化字段值（name-value pairs）
- 基于 prebuilt invoice schema
- 如：vendor_name, customer_name, invoice_date, line_items, total

## 考试要点

- SDK 包：`azure-ai-contentunderstanding`
- 需要 endpoint + key（从 Content Understanding 模型获取）
- 输入通常是 Blob Storage URL
- 使用 prebuilt analyzer 无需自定义 schema
- 输出是结构化字段值

## English Short Summary

Python code for Azure Content Understanding Document Analyzer. Install `azure-ai-contentunderstanding` → configure endpoint + key (from Foundry → Build → AI Services → Content Understanding → key icon) → provide invoice URL from Azure Blob Storage → call prebuilt invoice analyzer → get structured field values (vendor, customer, date, amounts). Enterprise pattern: files in cloud storage, not local.
