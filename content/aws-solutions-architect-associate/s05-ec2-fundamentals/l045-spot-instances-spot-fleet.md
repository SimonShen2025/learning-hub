---
title: "Spot Instances & Spot Fleet"
lectureId: 45
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ec2", "spot-instance", "spot-fleet", "pricing", "cost-optimization"]
---

## 中文短总结

Spot 实例深入讲解：定义最高出价，当现货价格超出时有2分钟缓冲期选择停止或终止实例。Spot Block 可锁定1-6小时不被回收。取消 Spot 请求需注意：先取消请求再终止实例（否则持久请求会重新启动实例）。Spot Fleet 是 Spot + 可选 On-Demand 的集合，通过多 Launch Pool 实现最优分配，策略包括 lowestPrice（最省钱）、diversified（跨池分散，高可用）、capacityOptimized 和 priceCapacityOptimized（推荐）。

## 中文长总结

**Spot 实例机制：**
- 定义最高出价（Max Spot Price），现货价格低于出价时保持实例
- 现货价格超出出价时，有 **2 分钟缓冲期**选择：
  - **Stop**：停止实例，价格回落后可恢复
  - **Terminate**：终止实例，需重新启动
- Spot Block：锁定 1-6 小时不被回收（极少数情况下仍可能被回收）（此功能即将弃用）

**Spot Request 类型：**
- **One-time**：实例被中断后请求自动结束
- **Persistent**：实例被中断后自动重新请求新实例，持续到有效期结束
- 取消顺序：**先取消 Spot 请求 → 再终止实例**（否则持久请求会自动重新启动实例）
- 请求状态：open、active、disabled 状态下才能取消

**Spot Fleet（竞价队列）：**
- Spot 实例 + 可选 On-Demand 实例的组合
- 定义多个 Launch Pool（不同实例类型、OS、AZ）
- 达到预算或目标容量时停止启动
- **分配策略：**
  - **lowestPrice**：选择最低价格的池（考试热门，适合短期负载）
  - **diversified**：跨所有池分散（适合高可用、长期负载）
  - **capacityOptimized**：选择最优可用容量的池
  - **priceCapacityOptimized**：先选高容量池再选最低价格（推荐，适合多数负载）

## 考试要点

- Spot 实例有 2 分钟缓冲期，可选择 Stop 或 Terminate
- 取消 Spot：先取消请求，再终止实例
- One-time vs Persistent 请求的区别
- Spot Fleet 策略：lowestPrice（最省钱）、diversified（高可用）、priceCapacityOptimized（推荐）
- Spot 不适合关键任务和数据库

## English Short Summary

Spot Instance deep dive: set a max price; when spot price exceeds it, you get a 2-minute grace period to stop or terminate. Persistent requests auto-relaunch instances—cancel the request before terminating instances. Spot Fleet combines Spot + optional On-Demand across multiple launch pools. Allocation strategies: lowestPrice (most cost-effective, exam favorite), diversified (high availability), capacityOptimized, and priceCapacityOptimized (recommended for most workloads).
