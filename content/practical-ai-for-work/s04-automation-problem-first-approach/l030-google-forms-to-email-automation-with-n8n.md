---
title: "Google Forms to Email Automation with n8n - Auto-Reply Setup Tutorial"
lectureId: 30
section: 4
sectionTitle: "Unlocking with Automation - Problem-First Approach"
date: "2026-10-08"
tags: ["n8n", "typeform", "email-automation", "workflow-branching"]
---

## 中文短总结

Typeform trigger 接收提交内容，IF node 按用户选择分支，再由不同 Gmail 节点发送对应回复。先验证字段映射和 true/false 路由；凭据与 access token 要保密并仅授予必要权限。

## 中文长总结

示例表单询问用户需要价格还是产品信息。n8n 通过 Typeform trigger 接收提交，将指定字段交给 IF node 判断：选择 price 时走 true 分支，否则走 false 分支。每个分支连接配置好的 Gmail 节点，发送相应模板邮件。

集成步骤包括连接表单账户、选择目标表单、配置条件值、绑定 Gmail 凭据，并将用户邮箱和姓名映射到邮件的收件人及正文。通过测试提交分别验证两个分支，确认只有预期邮件被发送。

访问 token 和 OAuth 凭据属于秘密信息，不应放进 prompt、日志或共享文件。实际使用前确认收件人同意、邮件内容、错误处理和重复提交策略；将 token 存在 n8n 凭据管理中，并限制权限。

## English Short Summary

A Typeform trigger feeds an IF node that routes submissions to different Gmail reply nodes. Verify field mappings and both branches with test submissions. Store access tokens in credential management, restrict scopes, and handle duplicate submissions and send failures.