---
title: "What is Power Automate?"
lectureId: 135
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["power-automate", "workflows", "connectors", "approvals"]
---

## 中文短总结

Power Automate 可用 Trigger、Action、条件和人工审批组合简单或复杂流程，并通过 Connectors 与不同服务交互。流程可用于自动化重复业务任务，但需考虑连接器、许可、错误处理和访问权限。

## 中文长总结

### 流程组成

- Trigger 启动流程，例如提交费用报告或更新 SharePoint Item。
- Actions 执行后续步骤，例如读取数据、发送通知或更新其他服务。
- 条件和审批可根据数据或人员决策改变流程路径。

### Connectors 与治理

Connectors 连接 Power Automate 与 SharePoint、邮件或其他应用。可用连接器和功能取决于环境与许可证。设计业务流程时，应确认连接身份、数据共享边界、失败处理和审批责任，并先在授权环境测试。

Power Automate 可减少重复手工操作，但自动化会按配置执行；发布前应验证触发条件、目标对象及错误情形。

## English Short Summary

Power Automate combines triggers, actions, conditions, and approvals, using connectors to work across services. Verify licensing, connection identities, data access, and failure handling, then test the workflow before deployment.
