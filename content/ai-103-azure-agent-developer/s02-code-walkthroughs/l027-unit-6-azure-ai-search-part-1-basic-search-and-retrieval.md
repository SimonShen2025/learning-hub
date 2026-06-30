---
title: "Unit 6: Azure AI Search (Part 1) - Basic Search and Retrieval"
lectureId: 27
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - azure-ai-search
  - indexing
  - bicep
  - rbac
  - keyword-search
  - lab
---

## 中文短总结

独立脚本部署 **Azure AI Search**（Standard tier），通过 SDK 创建 index schema、上传 JSON 文档、执行 keyword 搜索。需 RBAC 分配三个 Search 角色；Basic tier **不支持 vector search**。

## 中文长总结

### Bicep 部署

- 仅部署 `Microsoft.Search/searchServices`，SKU **standard**（basic 无 vector 能力）
- `replicaCount: 1`, `partitionCount: 1`（测试最低配置）
- 资源名**不能含下划线**（仅小写字母数字）
- Output：`searchServiceEndpoint`

### RBAC 角色分配（CLI）

```bash
# 获取 object ID
az ad signed-in-user show --query id -o tsv

# 三个必需角色（scope = search service）
az role assignment create --assignee <objectId> \
  --role "Search Service Contributor" --scope <searchServiceResourceId>
az role assignment create --role "Search Index Data Contributor" ...
az role assignment create --role "Search Index Data Reader" ...
```

免费试用账户可能需用 **object ID** 而非 UPN。

### Index Schema（Part 1 无 vector）

| 字段 | 类型 | 说明 |
|------|------|------|
| id | SimpleField (String, key) | 文档唯一 ID |
| title | SearchableField | 可搜索 |
| content | SearchableField | 可搜索 |
| category | SimpleField (filterable) | 过滤用 |

```python
index_client.create_index(SearchIndex(name=index_name, fields=[...]))
search_client.upload_documents(documents=[{...}])
results = search_client.search(search_text="Azure AI Search best practices", top=3)
```

### 关键概念

- Azure AI Search **不能自动创建 index**，必须明确定义 schema
- 文档须转为 JSON（不能直接上传 PDF）
- Part 1 为 **keyword lookup**（须包含关键词）；底层用 tokenization、stemming、**BM25** 评分
- 即使无 LLM，搜索本身已很强大；结果可后续用于 RAG grounding

### 示例结果

- 问 "Azure AI Search best practices" → 精确匹配文档排第一（高分）
- 问 "What is Docker?" → Docker 文档排第一，Python 文档次之（BM25 语义关联）

## 考试要点

- Standard tier 支持 vector；**Basic tier 不支持**
- 三个 RBAC 角色：Search Service Contributor、Search Index Data Contributor、Search Index Data Reader
- Index 必须手动定义 schema；`SearchableField` vs `SimpleField` vs filterable
- Part 1 无 vector field → 不能做 vector/semantic search
- Keyword search 使用 BM25；与 embedding 无关
- Replicas/partitions 影响规模与延迟

## English Short Summary

Unit 6 (Part 1) deploys Azure AI Search via Bicep (Standard SKU for vector capability later), assigns three RBAC roles via CLI, defines a basic index schema (id, title, content, category), uploads JSON documents, and runs keyword search using BM25 ranking. No LLM involved. Exam focus: Standard vs Basic tier, required RBAC roles, manual index schema, SearchableField types, and that keyword search requires matching terms unlike semantic/vector search in Part 2.
