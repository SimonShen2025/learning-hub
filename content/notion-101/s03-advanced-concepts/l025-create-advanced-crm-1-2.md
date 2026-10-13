---
title: "Project: Create an advanced CRM (1/2)"
lectureId: 25
section: 3
sectionTitle: "Advanced concepts"
date: "2026-10-13"
tags: [notion-crm, sales-pipeline, database-views]
---

## 中文短总结

搭建 CRM 数据库记录项目/线索、公司、联系人、联系方式、状态和负责人。用 Status board 查看 Lead、Proposal、Negotiation、Closed/Lost 阶段，并按负责人分组跟踪工作。

## 中文长总结

- 创建 CRM 数据库，记录 Project name、Company、Contact person、Email、Phone、Status 和 Owner 等字段。
- Status 使用 Select 表示销售管道阶段，如 Lead、Proposal sent、Negotiation、Closed 和 Lost；调整选项顺序和颜色以匹配流程。
- Board view 按 Status 分组，可拖动线索变更阶段；另建按 Owner 分组的视图，查看各成员负责的线索。
- 字段应与团队实际销售流程匹配。公司信息较复杂时，可考虑单独建 Companies 数据库并通过 Relation 关联，而不是重复维护文本字段。

## English Short Summary

Build a CRM database with project, company, contact, email, phone, status, and owner properties. Use a status board for the sales pipeline and an owner-grouped board to see responsibility distribution.