---
title: "Best practices"
lectureId: 108
section: 10
sectionTitle: "Moderate - Permissions"
date: "2026-11-17"
tags: ["sharepoint-permissions", "best-practices", "groups", "inheritance"]
---

## 中文短总结

权限管理建议尽量沿用继承结构、通过群组而非逐用户授权，并在确有需要时建立例外。可从站点权限入口管理访问；定期检查成员和权限，避免累积难以理解的授权。

## 中文长总结

### 管理原则

- 尽量在较高层级配置权限，让下层内容继承，减少重复管理。
- 将权限级别授予适当群组，再通过群组成员维护访问。
- 仅在有明确业务或数据隔离需求时打断继承，并记录和复核例外。
- 避免给予超出职责所需的访问能力。

### 查看权限

课程演示从站点齿轮菜单进入 Site permissions。具体导航名称会因 SharePoint 界面而异；修改前应确认目标站点、群组和操作范围。

## English Short Summary

Prefer inherited permissions, grant access through groups, and create unique-permission exceptions only for a clear need. Review membership and access periodically, and confirm the target site before changing permissions.
