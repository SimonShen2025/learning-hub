---
title: "Slack Admin Settings"
lectureId: 12
section: 2
sectionTitle: "What you should know!"
date: "2026-11-03"
tags: ["slack", "admin-console", "permissions", "user-groups", "security"]
---

## 中文短总结

只适用于 workspace admin 或 owner。Admin console 地址是 `<workspace-domain>/admin`（入口不明显）。Workspace 设置决定成员能做什么，个人 preferences 只影响自己。核心模块：Members（停用账号、修改 account type）、Settings（加入规则、默认 channel、名字显示、DND、消息和文件保留期、workspace 名称和 URL）、Permissions（@everyone、邀请、Slack Connect、webhook workflows、app 安装）、Authentication（2FA、强制重置密码）、User groups、Invitations、Manage permissions（account types 和 roles）、Billing、Profiles。

## 中文长总结

### 访问方式

- 仅 admin 或 workspace owner 可访问；打不开就说明不是 admin，可跳过本节
- 点左上角 workspace 名称查看域名（如 `test-xxx.slack.com`），在浏览器输入 `<domain>/admin`
- **两层设置**：个人 Preferences 和 Profile 只影响自己；workspace 设置定义规则，决定成员能做什么

### Members（默认首页）

- 列出所有用户：认证方式、billing status、account type、邮箱、加入时间；可按名字或邮箱筛选
- 三个点 → **Deactivate account**；修改 account type（授予或降级 admin、owner 权限）
- **Admin**：完全控制 admin 设置；**Workspace Owner**：权限最高，还能管 billing、关闭整个 workspace

### Settings

- 谁能加入 workspace（邀请规则）、workspace 语言
- **Default channels**：新成员强制加入的 channel
- 名字显示：full name 还是 display name；是否显示邮箱、pronouns
- Slack Connect member profiles 设置
- 团队默认 Do Not Disturb
- 加入或离开 channel 的消息、导出 workflows、新成员加入通知
- Canvas 权限（可否打印、分享）、是否允许移动端使用（按公司对私人手机和公司 app 的政策）
- **消息、文件、canvas 的保留期**（定期删除或永久保留）
- Workspace icon（公司 logo）、名称、URL、删除 workspace

### Permissions

- 有人 @everyone 时提醒、谁能发邀请
- **Slack Connect discoverability**：外部用户能否发现并联系你的成员
- 谁能创建 Slack Connect channel、Slack Connect 中 canvas 的权限：越严格，信息共享越安全
- User groups、能否编辑或删除消息、profile 可定制程度、analytics
- **是否允许带 webhook 的 workflows**：外部 app 触发自动化属于安全决策
- 成员能否安装 apps 和 integrations

### Authentication

- 强制 **2FA**；怀疑账号被盗时**强制所有成员重置密码**
- 最需要认真设置的三块：Settings、Permissions、Authentication

### 其他管理模块

- **User groups**：按部门（Sales、IT、Marketing）分组统一管理权限，可设名称、handle、purpose、默认 channel
- **Invitations**：查看待处理邀请，可撤销或重发
- **Slack Connect connections**：查看并撤销外部连接
- **Salesforce**：连接 Salesforce organization
- **Manage permissions**：*Account types* 细化每种角色能做什么（如禁止 member 归档 channel）；*Roles* 指定专项 admin（如 Salesforce admin、workflow admin），只管自己负责的部分
- **Billing**：账单历史、billing 联系人、支付方式
- **Profiles**：成员资料字段（必填、隐藏），可通过 API 从 HR 系统拉取
- TLS 相关支持仅限 Enterprise 客户

## English Short Summary

For workspace admins or owners only: open the admin console at `<workspace-domain>/admin`. Workspace settings define what members can do, separate from personal preferences. Key areas: member management and account types, workspace settings (default channels, retention, naming), permissions (Slack Connect, webhooks, app installs), authentication (2FA, forced password reset), user groups, invitations, roles, billing and profile fields.
