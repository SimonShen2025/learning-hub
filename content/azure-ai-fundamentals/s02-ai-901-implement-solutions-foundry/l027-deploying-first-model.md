---
title: "Deploying Your First Model"
lectureId: 27
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [model-deployment, model-catalog, gpt, microsoft-foundry, lab]
---

## 中文短总结

在 Microsoft Foundry 中部署模型的实操步骤。Model Catalog 提供多供应商模型选择。Model Leaderboard 比较模型的四个维度：Quality Index（准确度，0-1 越高越好）、Safety Score（安全性，越低越好）、Throughput（tokens/s，越高越好）、Cost（价格，越低越好）。部署 GPT-5.4 示例：选择模型 → Deploy → 选择部署类型（Global Standard）→ 设置 tokens-per-minute 配额 → 完成。部署后获得 endpoint URL 和 API key。

## 中文长总结

### Model Leaderboard 四维度

| 维度 | 含义 | 越___越好 |
|------|------|-----------|
| Quality Index | 准确度（推理、知识、数学、编码） | 高 |
| Safety Score | 抵御网络犯罪/虚假信息的能力 | 低 |
| Throughput | tokens/second 处理速度 | 高 |
| Cost | 每百万 token 价格 | 低 |

### 部署步骤
1. Discover → Models → 选择模型（如 GPT-5.4）
2. 点击 Deploy
3. 选择部署类型：Global Standard（推荐入门）
4. 设置 Tokens-per-Minute (TPM) 配额
5. 部署完成

### 部署后获得
- **Endpoint URL**：应用调用模型的地址
- **API Key**：认证凭据
- **Deployment Name**：程序中引用的名称

### 配额（Quota）
- TPM (Tokens Per Minute)：每分钟可处理的 token 数
- 不同区域和模型有不同的配额限制
- 配额不足时部署会失败 → 换区域或换模型

### 注意事项
- 不同区域的模型可用性不同
- GPT-5.5 可能因配额不足无法部署 → 选择 GPT-5.4
- 选择区域时考虑模型支持情况

## 考试要点

- Model Catalog = 浏览和部署模型的入口
- 四维度评估：Quality, Safety, Throughput, Cost
- 部署后获得 Endpoint + API Key + Deployment Name
- TPM (Tokens Per Minute) = 配额限制
- Global Standard = 推荐的部署类型
- 区域影响模型可用性和配额

## English Short Summary

Deploying a model in Microsoft Foundry: Model Catalog → select model → Deploy → choose deployment type (Global Standard) → set TPM quota → done. Model Leaderboard compares: Quality Index (accuracy, higher=better), Safety Score (lower=better), Throughput (tokens/s, higher=better), Cost (lower=better). After deployment, you get an endpoint URL, API key, and deployment name. Region affects model availability and quota.
