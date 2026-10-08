---
title: "ChatGPT/Claude Builds n8n Workflows For You - Natural Language Automation"
lectureId: 32
section: 4
sectionTitle: "Unlocking with Automation - Problem-First Approach"
date: "2026-10-08"
tags: ["n8n", "workflow-json", "generative-ai", "automation"]
---

## 中文短总结

可先用自然语言描述触发条件、数据字段、判断规则和目标动作，让 ChatGPT 或 Claude 生成 n8n workflow JSON，再导入并配置凭据。生成物只是起点；逐节点审查、测试和修复后才能启用。

## 中文长总结

示例需求是定时检查邮件，筛选费用或发票，提取发件人、日期和金额，写入 Google Sheets，并在金额超过阈值时发 Slack 告警。把业务目标用清晰步骤描述，再要求模型输出可导入 n8n 的完整 JSON。

JSON 保存了工作流节点、连接和配置。导入后仍需重新选择服务账户、配置凭据、核对字段与节点版本，并调整布局。模型不能也不应替用户提供 Gmail、Slack 等服务的秘密凭据。

上线前先审查触发频率、筛选条件、金额边界、重复处理、错误路径和外部动作；使用测试数据验证正常与异常场景。即使无需手写代码，理解 trigger、node、connector 和数据映射仍是安全维护流程的基础。

## English Short Summary

Describe triggers, fields, conditions, and actions in plain language, then ask an LLM for importable n8n JSON. After import, configure credentials, inspect nodes and mappings, test edge cases and side effects, and only then activate the workflow.