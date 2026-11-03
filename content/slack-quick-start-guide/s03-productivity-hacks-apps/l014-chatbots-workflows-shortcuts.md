---
title: "Let Slack reply and safe your time - Chatbots, workfows, and shortcuts"
lectureId: 14
section: 3
sectionTitle: "Productivity hacks - Apps"
date: "2026-11-03"
tags: ["slack", "slackbot", "workflow-builder", "automation", "slash-commands"]
---

## 中文短总结

三种自动化：1）**Slackbot 自动回复**（需要 admin）：在 admin console → Customize → Slackbot 设置触发词和回复，如“WiFi password”，适合高频重复问题。2）**Workflow Builder**：trigger（link、webhook、schedule、list 更新、加入 channel、emoji reaction，或外部 app 事件）加 actions（form、发消息、canvas、channel、list、user group、delay），可加按钮做分支。示例：用 link 启动设备申请 form，提交后发到 channel，再把 link 设成 Slackbot 回复。3）**Shortcuts 和 slash commands**：`/remind`、`/shrug`、列出成员、运行 workflow 等。

## 中文长总结

### 1. Slackbot 自动回复

- 适合需要反复回答同样信息的场景（公开 channel、help channel、标准化问题）
- 生效范围：所有 channel，长期有效
- **需要 admin 权限**；没有的话请 admin 帮你建
- 路径：`<workspace-domain>/admin` → Customize → **Slackbot** tab → Add New Response
- 设置回复内容（如“The WiFi password is 1234”）和多个触发词（逗号分隔：wifi password, password, mobile network）
- 可建无限多条，有搜索功能便于管理
- 有人发送含触发词的消息时，Slackbot 自动回复

### 2. Workflow Builder（if this, then that）

- 入口：左侧 + → Workflow
- 示例：同事请求审批，你点 👍 reaction，workflow 自动发出完整的审批消息（附链接并引用原消息）
- **Triggers**：
  - Slack 事件：**start from a link**（消息里生成 Run workflow 按钮）、**webhook**（第三方 URL 调用，不用直接集成 app）、**schedule**（如每周一提醒更新项目状态）、**list item 更新**、**有人加入 channel**（如通过 DM 给新员工发入职资源）、**emoji reaction**
  - 外部 app 事件：如 Asana 中创建 project
- **Actions**：canvas（创建或分享）、channel（bookmark、archive、create、pin message）、**form**（收集信息）、list（选择或删除 item、通知）、messages（回复、发到 channel）、user group（加入或移除）、workflow controls（如 delay 一天）
- 可以串联多个步骤；后续步骤可引用前面步骤的数据作为变量（如触发人、触发时间）
- 消息里可加 **buttons** 触发后续动作（继续 workflow、打开链接、连接另一个 workflow），实现类似决策树的预分流
- **Publish**：设置名称、描述，以及谁能发现和使用

### 端到端示例：手机设备申请

1. Trigger：start from a link
2. Action：form“Mobile device order”，问题包括姓名、需要日期（date 类型，required）
3. Action：把提交内容发到指定 channel（可用变量替代“姓名”字段）
4. Publish 得到 workflow link
5. 在 Slackbot 中新建回复：触发词“mobile phone order”，回复内容就是 link
6. 用户发“mobile phone order” → 收到 link → Start workflow → 填 form → 提交后出现在申请 channel
- 可以继续扩展：新消息自动加入 list 作为 to-do，item 完成后通知申请人领取

### 3. Shortcuts 和 slash commands

- 消息框的 shortcut 按钮，或输入 `/` 查看所有命令
- 可以运行 workflow、触发已连接 app 的操作、折叠或展开文件、查看分配给自己的 action items、打开 channel
- `/remind me ... in 5 minutes`：Slackbot 确认提醒时间
- `/shrug`：在文字后加 ¯\\\_(ツ)\_/¯
- 列出当前 channel 成员、给 channel 添加 app 等

### 资源

- 讲师提供“automation world”：一组自动化 recipes，可作为自定义 workflow 和 Slackbot 的灵感

## English Short Summary

Three automation layers: Slackbot custom responses (admin only, trigger words → canned answers), Workflow Builder (triggers like link, webhook, schedule, list change, channel join, emoji reaction or external apps; actions like forms, messages, canvas, lists, delays and buttons), and shortcuts or slash commands. Example: a link-triggered device order form, exposed through a Slackbot trigger phrase.
