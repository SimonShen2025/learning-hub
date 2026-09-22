---
title: "Lab: Create a Queue Triggered Function App (Hands-On Lab)"
lectureId: 118
section: 12
sectionTitle: "Build Event Driven Backends with Function Apps"
date: "2026-09-22"
tags: ["azure-functions", "service-bus-trigger", "blob-output-binding", "azure-openai"]
---

## 中文短总结

在同一 function_app.py 中新增一个 Service Bus 队列触发函数：输入绑定声明队列名（images queue）与 Service Bus 连接字符串环境变量，无需 SDK 代码；输出绑定声明 Blob 输出路径（descriptions 容器 + 随机 GUID 文件名 + .txt）与存储账户连接字符串环境变量。为避免描述文件写回原图片存储账户触发新事件形成死循环，专门新建了独立的 image-description 存储账户。函数逻辑：解析队列消息 JSON 中的 data.url，调用 Azure OpenAI 生成图片描述，通过输出绑定写入新 Blob。发布后需在门户新增 Service Bus 连接字符串和目标存储账户连接字符串两个应用设置并重启。

## 中文长总结

### 架构设计要点：避免无限循环

- 复用此前已配置好的 Storage 账户（含 Event Grid 系统主题 + 订阅，事件写入 images 队列），无需重复搭建
- 关键设计：函数生成的描述文本文件**不能**写回同一个触发事件的 Storage 账户，否则会再次触发 Blob Created 事件，形成无限循环
- 因此新建独立的 **image-description** 存储账户及 descriptions 容器（同样需要在 Configuration 中启用匿名 Blob 访问），专门存放描述文件

### 在同一函数文件中新增队列触发函数

- 一个 Function App 资源的 `function_app.py` 可包含多个独立函数，各自按需扩缩容
- 新函数使用 **Service Bus Queue Trigger** 作为输入绑定：
  - `arg_name` 用于在代码中引用消息对象（如 `message`）
  - 声明队列名称（`images queue`）
  - 连接字符串通过环境变量在运行时动态提供，不写死在代码中
- 使用 **Blob 输出绑定**：
  - `arg_name` 引用待创建的 Blob 对象（如 `output_blob`）
  - `path` 指定目标容器（descriptions）与随机 GUID 文件名 + `.txt` 后缀
  - 存储账户连接字符串同样通过环境变量提供
- 整个绑定声明仅需几行代码，无需手写 Service Bus SDK 或 Storage SDK 的认证/连接逻辑

### 函数处理逻辑

- 函数名 `generate_image_description`，从 Service Bus 消息中解析 JSON 负载，提取 `data.url` 字段获取图片 URL
- 复用已有的 Azure OpenAI 环境变量（终结点、API Key、模型名）创建客户端，调用 Chat Completions API（视觉输入 + "describe this image" 提示）生成描述
- 将生成的描述文本通过输出绑定写入新的 Blob 文件

### 发布与配置

- 通过 `az login` 登录后，用 Function Core Tools CLI 在本地项目目录下发布，指定目标 Function App 名称（AI200FunctionApp）
- 发布成功后门户中会出现第二个函数（Queue 触发），需要新增两个应用设置：Service Bus 连接字符串（来自 Service Bus 的 Shared Access Policies）与目标存储账户连接字符串（来自 Access Keys），保存后重启 Function App 生效

## English Short Summary

Added a second function triggered by a Service Bus message via an input binding (no SDK code), writing results via a Blob output binding. To avoid an infinite loop, description files go to a separate "image-description" account rather than the one being watched. The function parses `data.url`, calls Azure OpenAI for a vision description, and writes the text blob via the output binding. Published via the Functions Core Tools CLI; two connection-string settings were added and the app restarted.
