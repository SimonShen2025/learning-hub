---
title: "Enhance your CRM with automation"
lectureId: 37
section: 6
sectionTitle: "Bonus: Automate your Notion workspace"
date: "2026-10-13"
tags: [notion-crm, zapier, lead-intake]
---

## 中文短总结

将预约工具的新预约事件接入 Zapier，先按 event type 过滤，再创建 Notion CRM 线索并映射姓名、公司、联系方式和需求；Status 可设为 Lead，预估金额留空供人工判断。务必测试字段映射。

## 中文长总结

- Trigger 使用预约工具的 invitee-created 事件；添加 Filter，要求 event type 精确匹配 CRM demo，避免内部或其他类型会议误生成线索。
- Action 在 Notion CRM 数据库创建记录。将预约表单的“讨论主题”映射为项目名称，姓名映射为联系人，电话、邮箱、公司和补充信息映射至相应属性。
- 新预约的 Status 设为 Lead，负责人可设置默认值；Estimated value 不应从表单猜测，可留空后由销售人员评估。
- 先测试 trigger 和各字段映射，再启用 Zap。若记录值落入错误字段，检查源数据项和 Notion 属性映射后重新测试。

## English Short Summary

Trigger on a new booking, filter for the intended event type, then create a CRM lead in Notion. Map contact and project details, set status to Lead, leave estimated value for human assessment, and test every field mapping before enabling.