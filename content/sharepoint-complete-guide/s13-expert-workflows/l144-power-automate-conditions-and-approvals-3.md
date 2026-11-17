---
title: "Power Automate - conditions and approvals 3"
lectureId: 144
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["power-automate", "approvals", "sharepoint", "flow-conditions"]
---

## 中文短总结

审批流程应分别处理 Approve、Reject 和不需审批的条件分支。课程示例把审批结果写入 Approval 列；Luxury 项目依审批决定更新，其他 Specialty 则直接标记为批准。

## 中文长总结

### 更新审批结果

- 在批准分支添加 SharePoint **Update item**，保留原记录字段并将 Approval 设置为 Approved。
- 在拒绝分支更新同一 Item，将 Approval 记录为拒绝状态。
- 对不符合审批条件的项目，按业务规则走自动处理分支；课程示例直接将其标记为 Approved。

### 保持数据完整

更新 Item 时需正确传递记录 ID 和原字段值，避免意外清空其他列。明确拒绝状态的用词，并测试每个分支及错误处理。

## English Short Summary

Update the SharePoint item for each outcome: mark approved or denied after approval, and handle items outside the approval condition according to the defined rule. Preserve other field values and test every branch.
