---
title: "What Is a Prompt? Prompting, Prompt Engineering, Personal vs. Production Prompts"
lectureId: 11
section: 2
sectionTitle: "Prompting Gemini for Better Results"
date: "2026-10-14"
tags: [prompt-engineering, prompt-design, ai-workflows]
---

## 中文短总结

Prompt 是交给 AI 的输入，包括任务指令和上下文；prompting 是编写并使用这些输入；prompt engineering 则系统地设计、测试和改进提示。个人聊天提示可以在对话中灵活修正，可复用的生产提示则要考虑不同用户、异常输入、一致性、输出格式和防护规则。

## 中文长总结

- **Prompt** 是驱动回答的输入，可包含任务、背景、文本、文件、图像、链接、示例或数据。
- **Prompting** 是与模型交互并提供指令的过程；**prompt engineering** 是更系统的方法，会分析模型行为、测试指令、迭代提示并考虑边界情况。
- **个人提示** 面向当前聊天任务，允许通过追问澄清需求和逐轮修正，通常无需一开始就设计完美提示。
- **生产或企业提示** 会被团队、产品或工作流反复使用，因此要应对拼写错误、模糊请求、缺失信息等输入变化。通常需要更明确的规则、稳定的输出格式和适当的 guardrails。
- 选择提示设计方式时，应先判断目标是一次性的个人协助，还是需要在大量请求中持续稳定复用的系统。

## English Short Summary

A prompt is the model input, prompting is the act of using it, and prompt engineering is the systematic design and testing of prompts. Personal chat prompts can be refined interactively, while production prompts need consistency, explicit formats, and safeguards across varied inputs.