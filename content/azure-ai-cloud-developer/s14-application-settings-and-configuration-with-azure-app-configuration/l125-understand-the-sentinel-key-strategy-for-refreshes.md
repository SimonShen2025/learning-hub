---
title: "Understand the \"Sentinel Key\" Strategy for Refreshes"
lectureId: 125
section: 14
sectionTitle: "Application Settings and Configuration with Azure App Configuration"
date: "2026-09-22"
tags: ["azure-app-configuration", "sentinel-key", "caching", "rate-limiting"]
---

## 中文短总结

若应用实例每次都直接向 Azure App Configuration 发起 API 调用读取配置，实例数量一多容易触发限流，返回 429（Too Many Requests）。为此需要引入缓存策略，但随之而来的问题是：配置值变更后，各应用实例如何知道需要刷新缓存？Sentinel Key 策略的做法是：额外维护一个"哨兵键"，每次修改任意配置值时同步修改该哨兵键；应用实例定期检查哨兵键是否变化——若变化则重新拉取全部配置并刷新缓存，若未变化则继续使用本地缓存，从而在保证性能的同时实现配置变更的及时感知。

## 中文长总结

### 问题：直接调用带来的限流风险

- 运行在 App Service、AKS、Container Apps、Functions 等资源上的应用实例都需要引用 Azure App Configuration 中的环境变量
- 若不做任何缓存，每个实例的每次读取都直接调用 App Configuration API，实例数量或调用频率一高，极易触发 Azure App Configuration 的速率限制，返回 **429 Too Many Requests** 错误

### 问题：缓存后如何感知变更

- 引入本地缓存可以缓解限流问题，但又带来新问题：配置值在 App Configuration 中被修改后，各应用实例的本地缓存并不会自动知晓，可能长期使用过期（stale）配置

### 解决方案：Sentinel Key 策略

- 除了业务配置键值对外，额外维护一个专门的"哨兵键（Sentinel Key）"
- 约定：每当修改任意一个业务配置值时，都同步修改这个哨兵键的值
- 应用实例定期检查哨兵键的当前值：
  - 若哨兵键值发生变化 → 说明有配置被更新，需要重新调用 App Configuration API 拉取全部最新值并刷新本地缓存
  - 若哨兵键值未变化 → 说明配置无更新，继续使用已缓存的值，无需额外调用 API
- 该策略在应用实例首次启动时进行一次初始拉取并缓存，此后仅需轻量地轮询哨兵键即可判断是否需要全量刷新，兼顾了性能（减少 API 调用）与一致性（及时感知配置变更）

## English Short Summary

If application instances query Azure App Configuration directly on every read, many can trigger rate limiting (HTTP 429). Caching solves that but introduces staleness: how do instances know a cached value changed? The Sentinel Key strategy maintains a dedicated "sentinel" key updated alongside any real change; instances periodically check only this key, refreshing their cache only when it changes, otherwise reusing cached values — balancing performance with timely updates.
