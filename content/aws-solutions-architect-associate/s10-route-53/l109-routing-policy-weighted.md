---
title: "Routing Policy - Weighted"
lectureId: 109
section: 10
sectionTitle: "Route 53"
date: "2026-03-05"
tags: ["Route 53", "Routing Policy", "Weighted"]
---

## 中文短总结

本讲介绍 Weighted（加权）路由策略。通过为每条记录分配权重来控制流量分配比例，例如 70/20/10。权重不需要加和 100，流量百分比 = 记录权重 / 所有权重之和。所有记录必须**相同名称和类型**，可关联 Health Check。用例包括跨区域负载均衡和新版本灰度测试（发送少量流量）。权重设为 0 会停止向该资源发送流量；所有权重都为 0 时所有记录等权返回。演示中创建了三条同名加权记录，dig 命令显示根据权重返回不同的单个 IP。

## 中文长总结

### Weighted 路由策略
- 通过**权重（Weight）**控制流量到各资源的百分比
- 流量百分比 = 该记录权重 / 所有记录权重之和
- 权重**不需要加和 100**（只是相对值）
- 所有记录必须具有**相同的名称和类型**
- 可关联 **Health Check**

### 关键规则
- **Weight = 0**：停止向该资源发送流量
- **所有 Weight = 0**：所有记录等权返回
- 每条记录返回**单个值**（与 Simple 的多值不同）
- 需要为每条加权记录设置唯一的 **Record ID**

### 使用场景
- 跨区域**负载均衡**
- **灰度发布/金丝雀部署**：向新版本发送少量流量测试
- 逐步迁移流量到新资源

## 考试要点

- Weighted 通过权重分配流量百分比
- 权重不需要加和 100
- Weight = 0 停止流量，全部 = 0 则等权
- 可关联 Health Check（Simple 不可以）
- 适合灰度发布和跨区域负载均衡

## English Short Summary

Weighted routing controls traffic distribution to resources via relative weights (e.g., 70/20/10). Traffic percentage = record weight / sum of all weights. Weights don't need to sum to 100. All records must share the same name and type, and can be associated with Health Checks. Use cases: cross-region load balancing and canary deployments (sending small traffic to new versions). Weight of 0 stops traffic to that resource; all weights at 0 means equal distribution.
