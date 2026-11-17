---
title: "Creating groups and permission levels 2"
lectureId: 115
section: 10
sectionTitle: "Moderate - Permissions"
date: "2026-11-17"
tags: ["sharepoint-permissions", "custom-permission-levels", "groups", "access-testing"]
---

## 中文短总结

创建自定义 Permission level 并关联到群组后，应使用测试账号验证实际能力，例如确认成员能编辑 List Item，却不能新增或删除记录。按职责将其他用户加入同一群组，可一致地授予相同权限。

## 中文长总结

### 验证自定义级别

- 使用经过授权的测试账号登录，检查目标 List 的实际操作。
- 课程示例验证用户可以编辑现有 Item，但不能新增或删除 Item。
- 还应测试其他目标资源和操作，确保权限既满足工作需要，也没有额外授权。

### 通过群组扩展

将具有同一职责的用户加入对应群组，可统一维护其访问。用户若同时属于其他群组，仍可能取得额外权限；需结合有效权限检查结果判断。

## English Short Summary

After assigning a custom permission level to a group, test the actual capabilities with an authorized account. The course checks editing existing items while blocking creation and deletion, then adds other role members to the same group.
