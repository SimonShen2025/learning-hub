---
title: "Unit 5: Model Selection – LLMs vs. SLMs for Agent Tasks"
lectureId: 6
section: 1
sectionTitle: "Theory"
date: "2026-07-01"
tags: ["AI-103", "LLM", "SLM", "Phi-3", "TPM-capacity"]
---

## 中文短总结

**LLM**（>10B 参数，如 GPT-5）：复杂推理、多步规划、多 Agent 管理者，成本高、延迟 500–2000ms。**SLM**（<10B，如 Phi-3 Mini 3.8B）：分类/摘要/实体抽取，成本低 10–50 倍、延迟 50–200ms。Foundry 部署模型获独立 endpoint + API key；**TPM**（tokens per minute）配额，超限返回 **429**。推荐 **hybrid routing**：SLM 做 intent 分类，复杂请求 escalate 到 LLM；SLM 需更短直接的 system instructions。

## 中文长总结

### LLM vs SLM
| | LLM (e.g. GPT-5) | SLM (e.g. Phi-3 Mini) |
|--|------------------|----------------------|
| 参数 | >10B，可达万亿级 | <10B（3.8B–18B 档） |
| 优势 | 复杂推理、长上下文（~1M tokens）、多模态 | 高速、低成本、高吞吐 |
| 适用 | Manager agent、行程规划、高精度 | 分类、情感分析、摘要、路由 |
| 延迟 | 500–2000 ms | 50–200 ms |
| 成本 | ~$0.01/1K tokens 量级 | 可低一个数量级以上 |

### Phi 系列特点
- 用**高质量 synthetic + filtered web** 数据训练 → 小模型保留较多 LLM 能力
- Phi-3 Mini (3.8B) / Small (7B) / Medium (18B)；Phi-4 (~14B) 增强推理

### Foundry 模型部署
- Catalog 选模型 → 设 deployment name、**capacity (TPM)**、region
- 每 deployment 独立 endpoint + API key（header 发送）
- Agent code 可配置/切换 model endpoint
- 生命周期：版本更新、扩容、删除

### TPM 与配额
- **TPM** = 每分钟可处理 token 上限；区域 per-model 全局 quota
- 超限 → HTTP **429 Too Many Requests**
- Foundry metrics 监控用量；高流量需申请 quota increase

### Hybrid Multi-Model 模式
1. SLM 做 intent classification
2. `if simple → SLM 直接回复` / `if complex → 调用 GPT-5`
3. 90% 便宜路径 + 10% 昂贵路径 → 大幅降本保精度
- **Caching** 重复响应进一步降本提速

### System Instructions 差异
- LLM：可承载长条件逻辑（“若退款且 <30 天则批准”）
- SLM：需**短、直接**指令；同一 prompt 在 GPT-5 有效可能在 Phi-3 失败 → **必须按模型测试**

### 调用与 Streaming
- SDK：`client.chat.completions.create(...)` → `choices[0].message.content`
- REST：POST chat/completions，body 含 messages 数组
- **Streaming**（`stream=True`）：token-by-token 输出，改善 UX；批处理后台任务用 `stream=False`

### 成本示例
- 100 万 tokens/天：GPT-5 ~$10/天 vs Phi-3 Mini ~$0.20/天

## 考试要点

- LLM vs SLM 定义（**10B 参数**分界）、适用场景、成本/延迟权衡
- **TPM** 含义、429 错误、quota 与 capacity 配置
- Deployment endpoint + API key in header
- Hybrid routing：SLM classify → LLM escalate
- SLM 需要更简 system instructions；跨模型测试
- `choices[0].message.content` 响应提取
- Streaming vs batched 使用场景
- GPT-5 适合 multi-agent manager；Phi-3 适合 high-volume 分类/摘要

## English Short Summary

Choose LLMs (>10B params, e.g., GPT-5) for complex reasoning, long context, and manager agents in multi-agent systems—expensive and slower (500–2000 ms). SLMs (<10B, e.g., Phi-3 Mini at 3.8B) excel at classification, summarization, and routing with 10–50× lower cost and 50–200 ms latency. Deploy models in Foundry for dedicated endpoints; capacity sets TPM quotas—exceeding returns 429. Hybrid patterns route simple intents to SLMs and escalate complex ones to LLMs via an initial classification step. SLMs need shorter system prompts; test per model. Use streaming for interactive UX; batch for background jobs. Memorize choices[0].message.content for exam code snippets.
