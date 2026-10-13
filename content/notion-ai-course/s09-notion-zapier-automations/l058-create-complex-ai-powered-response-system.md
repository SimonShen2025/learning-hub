---
title: "Create a Complex AI-Powered Response System"
lectureId: 58
section: 9
sectionTitle: "Use Notion + Zapier to Create Powerful Automations"
date: "2026-10-14"
tags: [ai-email, zapier-paths, knowledge-base]
---

## 中文短总结

Gmail 新邮件触发 AI 分类（退款、支持、账户问题、其他），Zapier Paths 决定处理流程；AI 可参考 Google Docs 知识资料生成回复，再发 Gmail 并将记录保存到 Notion。自动回复需先人工审核与测试。

## 中文长总结

- Trigger 监听 Gmail 收件箱新邮件，AI by Zapier 将内容分类为退款、支持、账户问题或其他类别。
- Paths 按分类选择处理流程；特定问题路径可从 Google Docs 知识资料提取相关信息，再由 AI 起草回复。
- Gmail action 发送回复，Notion 保存主题、发件人、正文、类别及响应信息；无法匹配的邮件可进入“Other”数据库供后续分析。
- 分类错误或知识库内容过期会导致错误回复。先用代表性邮件测试每条路径，并在稳定前采用人工审核，不要直接对外自动发送未经验证的生成内容。

## English Short Summary

Classify incoming Gmail messages with AI, route them through Zapier Paths, retrieve relevant Google Docs guidance, draft a response, and log the interaction in Notion. Test categories and knowledge retrieval, and require human review before enabling external auto-replies.