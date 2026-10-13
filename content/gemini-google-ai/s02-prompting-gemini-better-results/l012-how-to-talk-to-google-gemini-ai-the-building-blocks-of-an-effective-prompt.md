---
title: "How to Talk to Google Gemini AI The Building Blocks of an Effective Prompt"
lectureId: 12
section: 2
sectionTitle: "Prompting Gemini for Better Results"
date: "2026-10-14"
tags: [prompt-engineering, prompt-structure, grounding, role-prompting]
---

## 中文短总结

有效提示首先说明要完成的任务，并补充模型无法自行知道的背景、目标受众、成功标准和必要约束。还可加入角色、语气、事实核查要求与时效范围。聊天提示不必一次写到完美，可以先开始，再根据回答继续澄清和迭代。

## 中文长总结

- **明确任务**：清楚说明要模型做什么；仅说“帮我做演示”过于宽泛，应补充主题、用途、页数或必须涵盖的要点。
- **提供上下文**：说明结果如何使用、面向谁、什么算成功，以及模型需要覆盖哪些内容。不要假设模型知道未提供的背景。
- **加入约束和风格**：可指定规则、语气或其他要求，例如让内容在专业与易读之间保持平衡。
- **事实任务增加 grounding**：涉及统计、近期事件、产品功能或高准确性内容时，要求引用来源并指出不确定之处；也可限定资料的时间范围，提升时效性。
- **使用角色提示**：指定模型扮演的专业角色，并可同时说明目标受众，使回答更贴合任务场景。
- 不必把每次聊天都变成完整规格文档。可以从宽泛请求开始，再通过后续对话澄清和完善结果。

## English Short Summary

State the task clearly and provide the context, audience, success criteria, constraints, and tone the model cannot infer. For factual or time-sensitive work, request verifiable sources and explicit uncertainty; use role context when it improves relevance, then refine through conversation.