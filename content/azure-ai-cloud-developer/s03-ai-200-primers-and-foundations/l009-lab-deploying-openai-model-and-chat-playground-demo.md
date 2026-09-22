---
title: "Lab: Deploying OpenAI Model and Chat Playground Demo (Hands-On Lab)"
lectureId: 9
section: 3
sectionTitle: "AI-200 Primers and Foundations"
date: "2026-09-22"
tags: ["microsoft-foundry", "openai", "chat-playground", "hands-on-lab"]
---

## 中文短总结

本实验在 Foundry 模型目录中部署 GPT-4.1 模型（全局标准部署类型，按调用/token 计费，默认内容护栏），并在 Chat Playground 中演示系统提示词、温度（temperature）与最大补全 token 数等参数对回复效果的影响。

## 中文长总结

### 部署模型

- 在 Discover → Models 中搜索并选择 GPT-4.1（需注意模型仅在特定区域可用，如 Sweden Central）
- 选择聊天完成（chat completion）类模型，点击 Deploy → Custom Settings 命名部署
- 部署类型选择 **Global Standard**：仅按 API 调用与 token 用量计费，无需为底层基础设施预付费用（区别于 Global/Data Zone Provisioned Throughput 需预付基础设施成本）
- 可设置每分钟 token 速率限制（默认 150,000）
- 默认应用内容护栏（Content Guardrails V2），过滤仇恨、暴力、自残、成人内容等有害请求/响应

### Chat Playground 演示

- 修改系统提示词可完全改变模型人设（示例：让模型扮演蝙蝠侠、旅行助手）
- 每次响应展示延迟（如 2.2 秒）与 token 消耗（输入/输出 token 分别统计）
- **最大补全 token 数（Max Completion Tokens）**：控制响应长度上限
- **温度（Temperature）**：范围 0-2，值越高响应越有创意但可能语无伦次（甚至语言混杂），值越低越精确保守（如法律写作场景应设置接近 0）；实验中设为 2 出现异常输出，调回 0.7 后恢复正常

## 考试要点

- Global Standard 部署 = 按 token/调用计费；Provisioned Throughput 部署 = 预付基础设施费用
- Temperature 参数：值越大越随机/创意，值越小越确定/保守
- 默认内容护栏（Content Filter）作用于模型输入输出之间，过滤有害内容

## English Short Summary

Hands-on lab deploying a GPT-4.1 model via the Foundry model catalog using the Global Standard deployment type (pay-per-token/call, default Content Guardrails V2), then testing it in the Chat Playground. Demonstrates how the system prompt shapes model persona, how token usage/latency are reported per response, and how the temperature (0–2) and max completion tokens parameters affect response creativity, accuracy, and length — including a demo of temperature=2 producing erratic output versus 0.7 producing coherent results.
