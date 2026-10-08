---
title: "Prompt Engineering Fundamentals: Clear instructions and context"
lectureId: 3
section: 1
sectionTitle: "Introduction to practical AI for work"
date: "2026-10-08"
tags: ["prompt-engineering", "context-engineering", "business-communication"]
---

## 中文短总结

低上下文提示会让模型依赖常见模式，产出泛化内容。提供对象与关系、业务背景、语气、目标和约束，能让输出更贴近真实需求；关键是给 AI 足以完成任务的人类级上下文。

## 中文长总结

以合作邮件为例，“给 Sarah 写一封合作邮件”没有说明收件人的职位、双方关系或合作内容，模型只能生成通用措辞。逐步补充她是合作方 CTO、双方曾讨论 AI 集成、产品如何互补、沟通风格以及期望的下一步后，草稿会更具体且不易显得模板化。

提示词可按以下信息组织：
- **对象与关系**：收件人是谁，双方如何认识。
- **业务背景**：合作内容、当前情况及相关事实。
- **语气与风格**：正式或轻松、直接或委婉。
- **目标与约束**：希望对方采取什么行动、需包含哪些信息以及长度限制。

Prompt engineering 负责清楚表达指令；context engineering 则提供模型完成任务所需的信息。无需堆砌复杂术语，优先补足会改变答案的上下文。初稿仍需人工检查和编辑。

## English Short Summary

Sparse prompts produce generic results because the model must guess missing context. Specify the audience, relationship, business situation, tone, desired outcome, and constraints to get a more relevant draft. Prompt engineering gives instructions; context engineering supplies the information needed to fulfill them.