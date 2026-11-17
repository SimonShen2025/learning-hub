---
title: "Power Automate - conditions and approvals 2"
lectureId: 143
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["power-automate", "approvals", "conditional-logic", "sharepoint"]
---

## 中文短总结

可按 Repair Shop Specialty 添加条件分支：例如 Luxury 类别需要审批，其他类别走另一条路径。审批动作可等待指定人员作出决定，再依据 Outcome 更新 Item。

## 中文长总结

### 条件与审批

- 添加 Condition，检查新 Item 的 Specialty 是否为 Luxury。
- 在符合条件的分支加入 **Start and wait for an approval**，设置审批类型、审批人、标题和所需上下文。
- 可在审批详情中加入 Item 链接及相关信息，帮助审批人判断。
- 根据审批 Outcome 设置后续分支，完成后再更新 SharePoint Item。

### 流程设计

明确条件的真、假路径及失败处理。审批过程中应只向审批人提供必要信息，并确保审批权限、目标 List 和更新字段配置正确。

## English Short Summary

Add a condition on Specialty, such as routing Luxury items to a Start and wait for an approval action. Use the approval outcome to select a follow-up branch and update the SharePoint item with the decision.
