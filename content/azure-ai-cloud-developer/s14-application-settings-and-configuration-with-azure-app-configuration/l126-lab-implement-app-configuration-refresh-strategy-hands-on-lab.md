---
title: "Lab: Implement App Configuration Refresh Strategy (Hands-On Lab)"
lectureId: 126
section: 14
sectionTitle: "Application Settings and Configuration with Azure App Configuration"
date: "2026-09-22"
tags: ["azure-app-configuration", "sentinel-key", "sdk", "python", "cache-refresh"]
---

## 中文短总结

在 Configuration Explorer 中创建默认标签下值为 1 的 `Sentinel` 键。创建 `AzureAppConfigurationClient` 时通过连接字符串方式传入 `refresh_on` 参数（指定监听 Sentinel 键，刷新间隔 30 秒）。客户端每次调用刷新方法时，仅当距上次检查超过 30 秒且 Sentinel 键值发生变化，才会重新拉取全部键值对；仅修改业务配置值（如模型名）而不同步修改 Sentinel 键，客户端不会感知变更；必须同时修改 Sentinel 键值，客户端才会在下次刷新时拉到最新配置。

## 中文长总结

### 创建 Sentinel 键

- 在 Configuration Explorer 中新建一个键值对，键名为 `Sentinel`（首字母大写），标签使用默认标签，值任意（如 1）
- 该键本身不承载业务含义，仅作为"配置是否变更"的信号量

### 客户端创建与 refresh_on 配置

- 使用连接字符串方式创建 App Configuration 客户端时，需额外传入 `refresh_on` 参数，指定要监听的键（Sentinel）及刷新间隔（本例为 30 秒）
- 该客户端在每次调用刷新操作时，会检查距上次检查是否已超过刷新间隔；只有满足时间间隔**且** Sentinel 键值确实发生变化时，才会触发对所有配置键值对的重新拉取

### 验证流程

- 首次加载默认标签下的 endpoint、API Key、模型名等值（此时模型名为 GPT-4.1）
- 仅在门户中把模型名的值改为 GPT-5.2 Chat，但不修改 Sentinel 键 —— 此时客户端刷新后仍返回旧值（未感知变更）
- 同时将 Sentinel 键的值从 1 改为 2 后再次调用刷新方法，客户端才会重新拉取，模型名成功变为 GPT-5.2 Chat
- 将模型名改回 GPT-4.1，并同步把 Sentinel 键改为 3（或任意新值），刷新后再次验证客户端成功感知回退变更

## English Short Summary

Created a `Sentinel` key (default label) in Configuration Explorer, and instantiated the App Configuration client with a `refresh_on` parameter watching it every 30 seconds. The client re-fetches all key-value pairs only when the interval elapsed and the Sentinel value changed. Changing a business value alone does not trigger a refresh; only after the Sentinel key is updated too does the client pick up new configuration — verified by toggling the model name between GPT-4.1 and GPT-5.2 Chat.
