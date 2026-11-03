---
title: "Slack Apps"
lectureId: 13
section: 3
sectionTitle: "Productivity hacks - Apps"
date: "2026-11-03"
tags: ["slack", "app-integrations", "outlook", "asana", "slash-commands"]
---

## 中文短总结

Apps → Add Apps → App Marketplace，可按 featured、staff picks、collections（如 Office 365）和类别（如 project management：Trello、Notion、Asana）浏览。每个 app 页面列出功能、权限、安全合规、支持语言和**价格**（有的需要对方 app 的付费订阅）。安装流程：Add to Slack → 授权 → 登录对方 app。示例：Outlook Calendar（用 slash command 创建会议、查看 today 或 tomorrow 的会议、settings 或断开连接）、Asana（创建 task、把消息转成 task、取消授权）。

## 中文长总结

### 为什么集成

- 每天在十几个 app 间切换很浪费时间；把工具集成进 Slack，让它成为生产力中心

### App Marketplace

- 左侧 Apps → **Add Apps** → Browse Apps
- 左侧分类：featured、staff picks、collections（如 Office 365）、按类别（如 project management：Trello、Notion、Asana）
- 每个 app 有 overview 页面：功能、Slack 内预览、**permissions**、**security & compliance**、支持语言、**pricing**
- 注意：部分集成收费，或需要对方 app 的付费订阅

### Outlook 集成

- 两个不同的 app：
  - **Slack for Outlook**：把邮件发到 Slack 与同事讨论
  - **Outlook Calendar**：在 Slack 中同步和创建会议（本例使用）
- Add to Slack → Allow 权限 → 登录 Microsoft 账号 → 再次授权 → 回到 Slack
- 已安装的 app 出现在左侧 Apps 下，有自己的说明页和消息页
- 在消息框输入 `/` 可看到所有可用的 slash commands
- 用法：
  - 创建日历事件：标题、参会人、日历、日期、时长 → Create，同步到 Outlook
  - 输入 `/ocal today`（或 `tomorrow`）列出会议，点击可在 Outlook 打开
  - `/ocal settings`：查看设置或断开账号

### Asana 集成

- 搜索 Asana → Add → Add to Slack → 登录 Asana → 授权
- `/asana`：查看可用操作，如创建 task，会同步出现在 Asana
- 任意 channel 或 DM 中消息三个点 → **Create task** 或 Add as task comment，把消息变成 Asana task
- `/asana settings`：管理设置或 de-authorize（断开连接）

### 结论

- 集成后可以直接在 Slack 触发其他 app 的操作，减少切换

## English Short Summary

Browse the Slack App Marketplace (Apps → Add Apps) by featured, collections or category; each app page lists features, permissions, security and pricing. Install via Add to Slack and authorize the partner app. Examples: Outlook Calendar (create events, list today's meetings, settings or disconnect via slash commands) and Asana (create tasks, turn messages into tasks, de-authorize).
