---
title: "Lab: Execute your Queue-Based Function App (Hands-On Lab)"
lectureId: 119
section: 12
sectionTitle: "Build Event Driven Backends with Function Apps"
date: "2026-09-22"
tags: ["azure-functions", "service-bus-trigger", "blob-storage", "end-to-end-test"]
---

## 中文短总结

向已配置系统主题的 Storage 账户上传两张新图片，触发 Event Grid → Service Bus 队列 → Function App 队列触发函数的完整链路。几乎瞬间即可在 image-description 存储账户的 descriptions 容器中看到两个新生成的随机文件名 .txt 文件；将容器访问级别临时改为 Container 后可通过浏览器直接打开验证内容，两段描述均准确对应各自图片内容（数据管道架构图与图片处理工作流架构图）。Service Bus 队列监控面板确认了两条入站消息（来自 Event Grid 订阅）与两条出站消息（被 Function App 消费者拉取处理）。

## 中文长总结

### 端到端验证步骤

- 删除 images 容器中原有的两张图片（含快照），改为上传两张新的测试图片（分别关于 Function App/Event Hub/Fabric 实时智能集成，以及"图片上传 → Event Grid → Function App → Content Understanding → Cosmos DB"架构图）
- 上传后 Event Grid 系统主题几乎立即检测到 Blob Created 事件，通过订阅写入 Service Bus 队列，Function App 的队列触发函数随即被激活处理

### 验证输出结果

- 前往 image-description 存储账户的 descriptions 容器，可看到两个通过随机 GUID 命名的 .txt 文件（与代码中生成随机文件名的逻辑一致）
- 将容器访问级别由 Private 临时改为 Container，即可直接在浏览器中打开文件 URL 查看内容，无需 API 密钥
- 两份描述文本均准确反映各自图片内容：一份描述数据处理与自动化管道（数据源、事件流、Fabric 实时智能、Power Automate）；另一份描述图片处理工作流架构（Blob Storage、Event Grid、Azure Functions、Content Understanding、Cosmos DB）

### 监控确认

- 返回 Service Bus 队列监控面板，可观察到两条入站消息（Event Grid 订阅写入）与两条出站消息（Function App 消费者拉取），证实端到端事件驱动流水线运行正常

## English Short Summary

Uploaded two new test images to the monitored Storage account, triggering Event Grid to detect Blob Created events, route them to Service Bus, and have the queue-triggered function process each message almost instantly. Two randomly-named .txt description files appeared in the image-description account's container, verified by making it public and opening the URLs; each accurately described its image. The Service Bus dashboard confirmed two inbound and outbound messages, validating the flow.
