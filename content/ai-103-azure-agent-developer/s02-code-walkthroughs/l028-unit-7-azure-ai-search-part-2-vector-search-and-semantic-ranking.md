---
title: "Unit 7: Azure AI Search (Part 2) - Vector Search and Semantic Ranking"
lectureId: 28
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - azure-ai-search
  - vector-search
  - embeddings
  - semantic-ranking
  - hnsw
  - hybrid-search
  - lab
---

## 中文短总结

部署 Foundry + **text-embedding-3-small**（1536 维）+ AI Search，实现 **hybrid search**（BM25 keyword + vector similarity）与 **semantic re-ranking**。客户端预生成 embedding 后上传；查询时将问题也转为 vector。

## 中文长总结

### Bicep 资源

- AI Foundry + Project + **Embedding model** (`text-embedding-3-small`, 1536 dimensions)
- Azure AI Search（独立资源，与 Foundry 无直接 Bicep 关联）
- Outputs：OpenAI endpoint、embedding deployment name、search endpoint

### Embedding 模型前置条件

- **Trial 订阅不可用**；需升级为 **Pay-As-You-Go**
- 需提交 **quota request**（Global Standard，如 20 TPM）才能部署 embedding 模型
- 所有 embedding 模型均有此限制

### Index Schema 扩展

```python
# Vector field
SearchField(
    name="content_vector",
    type=SearchFieldDataType.Collection(SearchFieldDataType.Single),
    vector_search_dimensions=1536,
    vector_search_profile_name="my-profile"
)

# HNSW algorithm
HnswAlgorithmConfiguration(name="hnsw-config", ...)

# Semantic configuration
SemanticConfiguration(
    name="default",
    prioritized_fields=SemanticPrioritizedFields(
        title_field=SemanticField(field_name="title"),
        content_fields=[SemanticField(field_name="content")]
    )
)
```

### 工作流程

1. **Create index** — fields + vectorSearch + semanticSearch
2. **Get documents** — 纯文本 JSON
3. **Generate embeddings** — `client.embeddings.create(model=..., input=doc["content"])`
4. **Upload** — 文档 + `content_vector` 一并上传（**客户端生成**，非 Search 内置）
5. **Hybrid search** — 问题也 embedding → `search(text=query, vector_queries=[...], query_type="semantic")`

### 算法与评分

- Vector algorithm：**HNSW**（Hierarchical Navigable Small World）；备选 IVF、PQ
- 返回 **keyword score** + **semantic score**（Part 1 仅有 keyword score）
- 无 semantic configuration → 仅 keyword 结果，无 re-ranking

### RBAC

同 Part 1：Search Service Contributor、Search Index Data Contributor、Search Index Data Reader

## 考试要点

- Vector field 类型：`Collection(Edm.Single)`，dimensions 须与 embedding 模型匹配（1536 for text-embedding-3-small）
- **Hybrid search** = keyword (BM25) + vector similarity + semantic re-ranking
- Embedding 可在客户端生成或在 Search 集成生成（本单元演示客户端方式）
- HNSW 为默认高效 vector 相似度算法
- Semantic configuration 指定 re-ranking 优先字段（title, content）
- Embedding 模型需 Pay-As-You-Go + quota approval

## English Short Summary

Unit 7 (Part 2) adds Foundry embedding deployment (text-embedding-3-small, 1536d), extends the search index with vector fields (HNSW profile) and semantic configuration, generates embeddings client-side, uploads documents with vectors, and runs hybrid semantic search combining BM25, vector similarity, and semantic re-ranking. Requires Pay-As-You-Go subscription and quota approval for embedding models. Exam focus: vector field schema, HNSW, hybrid vs keyword-only search, semantic configuration, and client-side vs integrated embedding generation.
