---
title: "Power Automate - notify sales associate 2"
lectureId: 138
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["power-automate", "flow-testing", "run-history", "sharepoint"]
---

## 中文短总结

保存流程后，可通过新增测试 Item 验证通知是否发送给正确的 Sales Associate。Power Automate 的 Run history 可查看运行状态和各步骤结果，帮助定位触发或动作失败。

## 中文长总结

### 端到端测试

- 保存并启用流程，在目标 List 创建一条测试记录。
- 确认测试 Item 的人员列指向预期收件人，并检查邮箱是否收到预期内容。
- 回到流程运行历史查看执行结果，展开各步骤确认 Trigger 和邮件动作均成功。

### 失败排查

若没有收到邮件，不要仅凭列表中出现新记录认定流程成功。应检查运行历史、连接状态、收件人字段、许可和租户策略，并在修正后再次测试。

## English Short Summary

Test the flow by creating a sample item and confirming the correct Sales Associate receives the email. Use Power Automate run history to inspect trigger and action results; verify connections and recipient mappings if a run fails.
