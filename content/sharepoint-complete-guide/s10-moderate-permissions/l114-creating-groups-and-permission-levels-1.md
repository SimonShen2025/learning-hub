---
title: "Creating groups and permission levels 1"
lectureId: 114
section: 10
sectionTitle: "Moderate - Permissions"
date: "2026-11-17"
tags: ["sharepoint-permissions", "custom-permission-levels", "groups", "least-privilege"]
---

## 中文短总结

可为特定职责创建自定义 Permission level，并将其授予专用群组。例如，课程建立可读取、编辑和审批 List Item、但不能新增或删除 Item 的级别，再关联到 Managers 群组。

## 中文长总结

### 建立自定义权限级别

- 在 Permission levels 页面创建新级别，并选取所需操作，例如查看、编辑和审批 List Item。
- 不要勾选职责不需要的操作，例如新增、删除项目或管理权限。
- 自定义级别应按实际功能测试，确认各类站点和 List 操作均符合预期。

### 通过群组授予

- 创建职责明确的群组，例如 Managers。
- 将自定义级别及必要的基础读取级别关联到群组，再把经授权的用户加入群组。
- 不要只为了方便直接把自定义级别授予单个用户；群组方式更容易复核和维护。

## English Short Summary

Create a custom permission level for a specific role, then assign it to a dedicated group. The course example allows viewing, editing, and approving items while excluding creation and deletion; test the resulting access before rollout.
