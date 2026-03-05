---
title: "Route 53 - TTL"
lectureId: 106
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "TTL", "DNS Caching"]
---

## 中文短总结

本讲讲解了 DNS Record 的 TTL（Time To Live）机制。TTL 告诉客户端将 DNS 查询结果缓存多长时间。High TTL（如 24 小时）减少 Route 53 流量和费用，但记录更新需要更长时间传播；Low TTL（如 60 秒）增加流量和费用，但记录更新更快生效。演示了将 TTL 设为 120 秒后，即使修改了 DNS 记录，在 TTL 过期前客户端仍返回旧值。变更记录的策略：先降低 TTL → 等客户端刷新 → 修改记录值 → 再提高 TTL。TTL 对所有记录类型是**必填项**，Alias Record 除外。

## 中文长总结

### TTL 工作机制
- DNS 查询结果返回 TTL 值（如 300 秒）
- 客户端在 TTL 期间**缓存结果**，不会重复查询 DNS
- TTL 过期后，客户端才会重新查询 Route 53

### High TTL vs Low TTL

| 特性 | High TTL（如 24 小时） | Low TTL（如 60 秒） |
|------|----------------------|---------------------|
| Route 53 流量 | 少 | 多 |
| 费用 | 低 | 高 |
| 记录更新传播 | 慢（最多等 24 小时） | 快（60 秒内生效） |

### 变更记录的策略
1. 先降低 TTL（如从 24 小时降到 60 秒）
2. 等待旧 TTL 过期，客户端获取新的低 TTL
3. 修改 DNS 记录值
4. 所有客户端快速获取新值
5. 再提高 TTL 回原值

### TTL 适用规则
- **所有记录类型必填**，唯一例外是 **Alias Record**（TTL 由 Route 53 自动设置）

## 考试要点

- TTL 控制 DNS 记录在客户端的**缓存时间**
- High TTL = 省钱但更新慢，Low TTL = 贵但更新快
- Alias Record 不需要设置 TTL
- 变更策略：先降 TTL → 改记录 → 再升 TTL

## English Short Summary

TTL (Time To Live) controls how long DNS query results are cached by clients. High TTL (e.g., 24 hours) reduces Route 53 traffic and costs but slows record propagation; Low TTL (e.g., 60 seconds) increases traffic/costs but enables faster updates. The demo shows that even after changing a record, clients return the old value until TTL expires. Strategy for changes: lower TTL first → wait → change record → raise TTL. TTL is mandatory for all records except Alias Records (auto-set by Route 53).
