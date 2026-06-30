---
title: "Unit 7: Advanced Grounding – Fabric & Cosmos DB"
lectureId: 8
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "Azure AI", "grounding", "RAG", "Microsoft Fabric", "Cosmos DB", "OneLake", "hybrid search"]
---

## 中文短总结

企业级 grounding 超越基础 RAG：Microsoft Fabric OneLake 统一数据湖/仓库，Agent 经 Azure AI Search 转 Fabric SQL 实时查询；Cosmos DB 向量+运营数据同库、毫秒更新。选 Cosmos（频繁变更/事务）vs AI Search（大文档/混合检索）。安全用 Entra Agent ID 行列级权限；CDC 保索引同步；Redis 缓存、预过滤、小 embedding 降成本。

## 中文长总结

### 企业 Grounding 背景
- 大型企业数据分散在数百系统，Agent 需**就地访问**而非复制到新系统
- 基础 RAG 用 Azure AI Search + Bing；进阶需 **Fabric** 与 **Cosmos DB**

### Microsoft Fabric / OneLake
- **统一数据平台**：数据湖、数据仓库、分析整合为 **OneLake**（取代分散的 Synapse/Data Lake 等）
- 数据只存一份，各工具访问同一副本
- **Agent 访问路径**：Agent → Azure AI Search 工具 → Search Index 指向 OneLake 表 → 转 **Fabric SQL** → 实时返回（**不复制数据**）
- **用例**：跨系统 JOIN（销售+客服）、实时库存、历史对比分析

### Fabric 安全（Entra Agent ID）
- Fabric 集成 **Entra ID / Entra Agent ID**
- **行级安全**：如 Agent 仅见欧洲订单
- **列级安全**：隐藏支付详情等敏感列
- 权限继承方式与 Unit 3 一致

### Cosmos DB 向量搜索
- **向量 + 运营数据同库**：更新价格时 embedding 自动同步
- 原生 **VectorDistance** 函数，SDK 示例：`SELECT TOP 10 ... ORDER BY VectorDistance(c.embedding, @queryEmbedding)`
- 过滤：`VectorDistance > 0.75` 阈值后再送 LLM

### Cosmos DB vs Azure AI Search（考试重点）
| 场景 | 选择 |
|------|------|
| 数据日变更 >10 次、需事务、毫秒延迟 | **Cosmos DB** |
| 静态文档、高级相关性调优、混合搜索、大文档（≤16 MB） | **Azure AI Search** |

### 连接认证
- Connection string（endpoint + key）→ 存 **Key Vault**
- 生产推荐：**Managed Identity** + Cosmos DB Data Contributor 角色

### 混合搜索（Hybrid Search）
- **AI Search**：向量语义 + 关键词（如型号 XF1000）
- **Cosmos DB**：`CONTAINS` + `VectorDistance` 组合查询

### 成本优化
- **Redis 缓存**常见查询结果
- **预过滤**：先 keyword/类别过滤再向量搜索
- 选小 embedding 模型（如 text-embedding-3-small 1536 维 vs large 3072 维，成本约减半）

### 多索引路由
- 工具接受 `indexName` 参数（产品目录 / 客服文章 / 内部政策）
- 小 LLM 分类用户问题 → 字典映射 index endpoint

### CDC（Change Data Capture）
- **Fabric OneLake**：源变更自动反映，无需显式 CDC 配置
- **Cosmos DB**：Change Feed + **Azure Function** → 更新 AI Search 索引

### 多语言 Grounding
- text-embedding-3-large 支持 ~100 语言
- 西班牙语查询可匹配英语文档，Agent 用西班牙语回答

### 监控指标
- **Retrieval precision**：检索文档相关比例
- **Grounding faithfulness**：回答是否忠于检索内容（可用 LLM 评判）
- **Foundry Trace**：记录 embedding、搜索结果、引用文档

## 考试要点

- Fabric = OneLake 统一存储；Agent 经 **AI Search index → Fabric SQL** 实时查询
- Cosmos DB：**运营+向量一体**；`VectorDistance`；频繁变更选 Cosmos，静态/大文档选 AI Search
- 认证：Managed Identity > connection string + Key Vault
- 混合搜索、CDC、多索引路由、多语言 embedding
- 成本：Redis 缓存、预过滤、小 embedding 模型
- 监控：retrieval precision、grounding faithfulness、Foundry Trace

## English Short Summary

Advanced enterprise grounding extends basic RAG beyond Azure AI Search and Bing. Microsoft Fabric OneLake unifies lakes, warehouses, and analytics; agents query live via Azure AI Search indexes that translate to Fabric SQL without copying data. Cosmos DB stores vectors alongside operational data for real-time updates and VectorDistance queries—choose it for frequently changing transactional data; use AI Search for static docs, hybrid search, and large files. Secure with Entra Agent ID row/column security. Optimize cost via Redis caching, pre-filtering, and smaller embeddings. CDC keeps indexes fresh; Foundry Trace monitors retrieval precision and grounding faithfulness.
