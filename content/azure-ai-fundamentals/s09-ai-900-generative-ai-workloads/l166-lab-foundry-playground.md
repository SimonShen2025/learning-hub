---
title: "Lab - Microsoft Foundry - Using the playground"
lectureId: 166
section: 9
sectionTitle: "AI-900 - Describe features of generative AI workloads on Azure"
date: "2026-06-10"
tags: [foundry-playground, reasoning-effort, max-tokens, parameters, lab]
---

## 中文短总结

Microsoft Foundry Playground 使用。与 OpenAI Playground 类似：选模型 → 设 system instructions → 调参数（Max Completion Tokens、Reasoning Effort）→ 对话。**Reasoning Effort**：越高→模型思考越深→回复越慢但质量越好；越低→快速回答。**Max Completion Tokens**：限制输出长度（控制成本，百万用户场景下 token 消耗很重要）。

## 考试要点

- Foundry Playground ≈ OpenAI Playground（类似界面）
- 参数：Max Completion Tokens（限制输出长度）
- Reasoning Effort：模型推理深度
- Token 消耗 = 成本核心（input + output tokens）
- System instructions 可设置模型行为

## English Short Summary

Microsoft Foundry Playground usage. Similar to OpenAI Playground: select model → set system instructions → adjust parameters (Max Completion Tokens, Reasoning Effort) → chat. Reasoning Effort: higher → deeper thinking → slower but better; lower → quick answers. Max Completion Tokens: limit output length (cost control — token consumption critical at scale).
