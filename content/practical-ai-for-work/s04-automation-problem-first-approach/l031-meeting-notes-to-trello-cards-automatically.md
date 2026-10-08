---
title: "Meeting Notes to Trello Cards Automatically - n8n + AI Task Extraction"
lectureId: 31
section: 4
sectionTitle: "Unlocking with Automation - Problem-First Approach"
date: "2026-10-08"
tags: ["n8n", "trello", "ai-task-extraction", "webhooks"]
---

## 中文短总结

通过 webhook 接收会议 transcript，让 LLM 将行动项整理为结构化 JSON；Split Out 把任务数组拆成独立项目，再映射到 Trello 创建卡片。上线前验证提取、负责人、日期和重复触发，并保护 API 凭据。

## 中文长总结

流程从 Fathom webhook 开始，会议结束后将 transcript 发给 n8n。LLM 按明确 schema 提取任务，包含任务名称、负责人和截止日期，并以 JSON 输出。Split Out node 将任务数组拆成多个 item，Trello create-card node 再逐项创建卡片。

构建时可先从 Trello 动作开始，测试凭据和列表 ID；然后配置 LLM 的系统指令、结构化输出和会议文本输入；再接 Split Out、映射动态字段并测试创建结果。最后再把生产 webhook 接到会议工具。

AI 可能误判行动项、负责人或日期。应明确输出 schema、对缺失字段的处理方式，并对结果做校验；考虑人工确认步骤、重复 webhook 的幂等处理和失败重试。API key、token 和 webhook URL 不应公开。

## English Short Summary

Send meeting transcripts through a webhook, ask an LLM to extract action items as structured JSON, split the task array, and create Trello cards with mapped fields. Validate owners and dates, protect credentials, and handle duplicate events and failures.