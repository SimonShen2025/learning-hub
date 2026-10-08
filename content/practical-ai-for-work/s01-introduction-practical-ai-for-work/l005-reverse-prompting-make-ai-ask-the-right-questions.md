---
title: "Reverse Prompting: Make AI Ask the Right Questions"
lectureId: 5
section: 1
sectionTitle: "Introduction to practical AI for work"
date: "2026-10-08"
tags: ["reverse-prompting", "prompt-engineering", "requirements-discovery"]
---

## 中文短总结

面对复杂或信息不全的任务，可要求 AI 在作答前先提出澄清问题。反向 prompting 能减少模型自行假设，帮助发现用户尚未想到的约束和关键信息。

## 中文长总结

模糊请求（如“帮我做产品发布计划”）缺少团队规模、产品类型、当前进度、时间线和依赖关系。模型若不提问，就只能自行填补空白，结果往往不适用。

在提示末尾加入“在回答前，请先问我为提供最佳方案所需的澄清问题”，即可让 AI 先收集上下文，再生成结果。这种 reverse prompting 适合复杂任务、首次处理的工作，或用户不确定哪些信息重要的情境。

问题还可能揭示遗漏的合规要求、季节性因素或其他隐含约束。回答 AI 的问题后，仍应核实假设，并继续追问或修订结果；提问过程用于补充上下文，不代表 AI 自动掌握了业务事实。

## English Short Summary

For complex or underspecified tasks, ask the AI to pose clarifying questions before answering. Reverse prompting reduces guesswork and can reveal missing constraints, such as dependencies, compliance needs, or timing factors.