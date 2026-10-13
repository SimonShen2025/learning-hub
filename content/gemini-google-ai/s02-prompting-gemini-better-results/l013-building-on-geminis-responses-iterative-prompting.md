---
title: "Building on Gemini’s Responses: Iterative Prompting"
lectureId: 13
section: 2
sectionTitle: "Prompting Gemini for Better Results"
date: "2026-10-14"
tags: [iterative-prompting, prompt-engineering, fact-checking]
---

## 中文短总结

把 prompting 当作多轮协作，而非一次性提问：先提出初步目标，再逐步聚焦范围、补充细节、核查假设并润色结果。对事实性内容，可要求列出依据、不确定项和优先核验处；若对话偏离目标，可重新表述或开新对话。

## 中文长总结

- 先用一个宽泛请求建立初稿，再逐步指定需要扩展的部分、目标对象、范围或具体输出。
- 复杂工作可分解成连续步骤。例如先形成业务提案大纲，再分别完善市场分析和财务预测，而不是一开始要求一次性产出所有细节。
- 对准确性要求高的任务，可依次要求模型说明假设和证据、检查自身回答中最可能错误或过时的内容，并提出优先验证事项。
- 在同一聊天中，可以引用先前讨论的结论继续工作，避免重复输入上下文。若对话方向不理想，则重新组织初始请求或另开聊天。
- 最后可要求整体评估并润色成果；分阶段检查中间结果，有助于保留控制权并逐步增加复杂度。

## English Short Summary

Treat prompting as an iterative conversation: begin with a broad request, refine scope and details, check assumptions and evidence, then polish. Reuse chat context when useful, and restart or reframe when the conversation drifts.