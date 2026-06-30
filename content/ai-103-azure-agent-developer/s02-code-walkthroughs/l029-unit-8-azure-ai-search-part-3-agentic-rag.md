---
title: "Unit 8: Azure AI Search (Part 3) - Agentic RAG"
lectureId: 29
section: 2
sectionTitle: "Code Walkthroughs"
date: "2026-07-01"
tags:
  - agentic-rag
  - azure-ai-search
  - grounding
  - rag
  - content-safety
  - lab
---

## 中文短总结

将 Azure AI Search 集成回主 agent 脚本：semantic search 检索订单文档 → **grounding results** 追加到 system instructions → intent 路由 + Content Safety + LLM 回复。通过 **top_k=1** 优化检索精度；代码拆分为 `functions/` 模块。

## 中文长总结

### Bicep 全量资源

- Foundry + Project + Content Safety + AI Search
- 三个模型：**LLM、SLM、Embedding**（Bicep `dependsOn` 顺序部署避免并行错误）
- 大量 outputs：各 endpoint 与 deployment names

### 成本警示

- AI Search 按**小时**计费（非按 token），长时间运行成本显著（演示中从 ~$0.03 升至 ~$3）
- 测试完毕应立即删除资源组

### 端到端 RAG 流程

```
User message
  → Content Safety (input)
  → Create index (skip if exists) + upload docs (skip if exists)
  → Semantic search → grounding results string
  → Build system instructions + append grounding
  → Intent classification → route SLM/LLM
  → LLM response
  → Content Safety (output)
```

### 关键代码模式

- `functions/` 文件夹拆分 helper、intent、routing、ai_search 模块
- `get_documents()` 改为订单数据（order ID、TV 等）供退款场景使用
- `config.yaml` 新增 **top_k**（检索返回文档数；设为 1 减少无关结果）
- Grounding 追加到 system instructions（此前为 `none`）

### 调试要点

- 初始 bug：search 函数返回 iterator 未转为 string → grounding 为空
- top_k=4 时问 TV 退款会返回 coffee machine、yoga mat 等无关文档
- 提供 order ID 后 agent 能识别具体 TV 型号并处理退款（无需用户描述产品细节）

### RBAC

同前：object ID + subscription ID + resource group → 三个 Search 角色 CLI 分配

## 考试要点

- **Agentic RAG**：search 结果作为 grounding context 注入 system prompt
- top_k 控制检索文档数量，影响精度与 token 成本
- AI Search 与 Foundry 独立部署，应用层集成
- Bicep `dependsOn` 顺序部署多模型避免冲突
- Content Safety 可放在 pipeline 最前端（input）与 LLM 输出端（output）
- Index/documents 可缓存跳过重复创建以加速开发

## English Short Summary

Unit 8 integrates Azure AI Search into the full agent pipeline: semantic search retrieves order documents, grounding results append to system instructions, then content safety, intent routing, and LLM generation produce grounded refund responses. Code refactored into functions/ modules. top_k tuning reduces irrelevant retrieval. AI Search bills hourly—delete promptly. Exam focus: agentic RAG grounding pattern, top_k, pipeline ordering (safety → search → LLM), and sequential model deployment in Bicep.
