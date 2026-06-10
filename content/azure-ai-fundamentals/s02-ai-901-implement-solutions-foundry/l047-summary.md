---
title: "Summary"
lectureId: 47
section: 2
sectionTitle: "AI-901 - Implement AI solutions - Microsoft Foundry"
date: "2026-06-10"
tags: [summary, microsoft-foundry, model-deployment, agents, python]
---

## 中文短总结

Section 2 总结。Microsoft Foundry = 构建 AI 应用和代理的统一平台（多供应商模型，需 Azure 订阅）。核心流程：创建 Foundry 资源 → 部署模型 → Playground 测试 → Python 代码调用。关键概念：Inference（推理）、Model Catalog、Endpoint + API Key、Responses API、max_output_tokens、Temperature、Evaluators、Fine-tuning、Agent（Model + Instructions + Tools）。

## 中文长总结

### Microsoft Foundry 核心
- 构建 AI 应用和代理的统一平台
- 多供应商模型（不锁定）
- 需要 Azure 订阅 → 创建 Foundry 资源 → 创建 Project

### 模型使用流程
1. **部署**：Model Catalog → 选模型 → Deploy → 获得 Endpoint + Key
2. **测试**：Playground 中无代码测试
3. **开发**：Python + OpenAI SDK 调用

### 关键概念清单
| 概念 | 说明 |
|------|------|
| Inference | 向模型发送输入接收输出的过程 |
| Model Catalog | 浏览和选择模型 |
| Endpoint + API Key | 认证和调用地址 |
| Deployment Name | 代码中引用模型的名称 |
| Responses API | OpenAI 新版 API（支持 Agent） |
| max_output_tokens | 限制响应 token 数 |
| Temperature | 控制输出随机性 |
| Evaluators | 自动评估输出质量和安全 |
| Fine-tuning | 用自定义数据进一步训练模型 |
| Agent | Model + Instructions + Tools |

### Agent 核心
- 三组件：Model（大脑）+ Instructions（角色）+ Tools（行动）
- tool_choice: auto / required / none
- Agent 可使用工具执行真实操作

## 考试要点

- Foundry = 统一 AI 平台，需 Azure 订阅
- 模型部署后获得 Endpoint + Key + Deployment Name
- Inference = 模型处理输入产生输出的过程
- Responses API（新版）vs Completions API（旧版）
- 参数控制：max_output_tokens, temperature
- Evaluators: fluency, coherence, safety
- Fine-tuning: Supervised, DPO, Reinforcement
- Agent 三组件：Model + Instructions + Tools

## English Short Summary

Section 2 recap: Microsoft Foundry is a unified AI platform (multi-vendor, requires Azure subscription). Core workflow: create Foundry resource → deploy model → test in Playground → call via Python. Key concepts: Inference, Model Catalog, Endpoint + API Key, Responses API, max_output_tokens, Temperature, Evaluators (quality/safety), Fine-tuning (Supervised/DPO/Reinforcement), Agents (Model + Instructions + Tools with tool_choice: auto/required/none).
