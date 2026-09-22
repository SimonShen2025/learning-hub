---
title: "Lab: Handle Secret Versioning and Rotation Gracefully (Hands-On Lab)"
lectureId: 121
section: 13
sectionTitle: "Application Secrets and Configuration with Azure Key Vault"
date: "2026-09-22"
tags: ["azure-key-vault", "secret-versioning", "sdk", "python"]
---

## 中文短总结

Key Vault 中的每个密钥都有唯一版本标识符，默认 `get_secret(name).value` 只返回当前（最新）版本值。可通过列出属性的方法查看某密钥所有版本（含创建时间、启用状态、过期时间）。在门户手动创建新版本后，旧版本会被保留但不再是"当前版本"；若要获取旧版本值，需在调用 `get_secret` 时显式传入该版本的唯一标识符，否则总是取回最新版本。

## 中文长总结

### 密钥版本的基本概念

- Key Vault 中每次更新密钥值都会生成一个新版本，由字母数字组成的唯一标识符区分
- 默认情况下，SDK 的 `get_secret(secret_name).value` 只返回**当前（最新）版本**的值

### 列出所有版本及其属性

- 可通过专门的属性列举函数，传入密钥名称，获取该密钥所有版本的属性列表：版本标识符、创建时间（created on）、是否启用（enabled）、过期时间（expires on，若无自定义过期时间则为 None）
- 初始状态下只有一个版本存在

### 创建新版本并验证获取逻辑

- 在门户中点击 "New Version" 手动创建新版本（输入任意新密钥值），原版本自动降级为 "Older Version"，但两者都仍然存在于 Key Vault 中
- 若不在 SDK 调用中显式指定版本号，`get_secret` 始终返回**最新版本**的值；此时列出所有版本会显示两个版本记录（Version 1 和当前的 Version 2）

### 获取历史版本的值

- 若需获取旧版本的密钥值，必须在调用 `get_secret` 时同时传入密钥名称**和**该旧版本的唯一标识符
- 从门户复制旧版本的标识符并传入 SDK 调用后，即可成功取回该历史版本对应的密钥值，验证了手动版本管理策略的可行性

## English Short Summary

Each Key Vault secret update creates a new version with a unique identifier. By default, `get_secret(name).value` returns only the current version; a properties-listing call reveals all versions (creation date, enabled status, expiry). After manually creating a new version in the portal, the older version remains stored but is no longer current. Retrieving an older value requires passing its version identifier to `get_secret`, demonstrating manual secret-versioning.
