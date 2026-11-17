---
title: "Power Automate - conditions and approvals 4"
lectureId: 145
section: 13
sectionTitle: "Expert - Workflows"
date: "2026-11-17"
tags: ["power-automate", "flow-testing", "approvals", "sharepoint"]
---

## 中文短总结

课程通过提交 Luxury 类别的测试 Item 验证审批流程，审批人从 Teams 中批准或拒绝后，流程将 Approval 结果写回 List。应分别测试批准、拒绝及不需要审批的路径。

## 中文长总结

### 端到端测试

- 用测试记录触发流程，并确认条件分支将其路由到审批动作。
- 审批人检查审批详情和 Item 链接，再提交 Approve 或 Reject。
- 查看流程运行历史和 SharePoint List，确认对应状态已正确写回。
- 再测试其他条件分支，验证无需审批的项目按配置处理。

### 上线检查

确保审批人、状态字段、运行连接和授权均正确；测试失败、超时或被拒绝等情况，避免 Item 保持在不明确状态。

## English Short Summary

Test the approval flow with a sample Luxury item, respond from the approval interface, and confirm the decision is written back to the List. Test approval, rejection, and the non-approval branch.
