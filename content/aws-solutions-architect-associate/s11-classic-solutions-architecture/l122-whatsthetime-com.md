---
title: "WhatsTheTime.com"
lectureId: 122
section: 11
sectionTitle: "Classic Solutions Architecture Discussions"
date: "2026-03-05"
tags: ["Solutions Architecture", "Stateless", "EC2", "ELB", "ASG", "Route 53", "Multi-AZ"]
---

## 中文短总结

本讲通过 WhatIsTheTime.com（显示时间的简单无状态应用）展示了架构从简单到复杂的演进过程。从单个 EC2 + Elastic IP 开始，遇到垂直扩展停机问题后转向水平扩展；多实例 + 多 Elastic IP 管理困难，引入 Route 53 A Record 但受 TTL 限制；最终使用 ELB（Alias Record）+ Private EC2 + ASG + Multi-AZ 构建了高可用、自动扩展、无停机的完整架构，并通过 Reserved Instance 降低成本。

## 中文长总结

### 架构演进路径

#### 阶段 1：单实例 + Elastic IP
- T2 Micro + Elastic IP → 可用但无法扩展
- **限制**：单点故障，流量增大时性能不足

#### 阶段 2：垂直扩展
- T2 Micro → M5 Large（更换实例类型）
- **限制**：需要停机更换，用户体验差

#### 阶段 3：水平扩展 + Elastic IP
- 多个 M5 实例，每个配 Elastic IP
- **限制**：
  - Elastic IP 数量有限（默认每 Region 每账号 5 个）
  - 用户需要知道所有 IP

#### 阶段 4：Route 53 A Record
- 使用 Route 53 代替 Elastic IP
- A Record 返回多个 IP
- **限制**：TTL 导致实例移除后用户仍连接已下线实例

#### 阶段 5：ELB + Private Instance
- ELB 使用 **Alias Record**（IP 动态变化无法用 A Record）
- 实例变为 Private，通过安全组限制只接受 ELB 流量
- **Health Check** 确保只将流量发到健康实例
- 可随意添加/移除实例无停机

#### 阶段 6：ASG（Auto Scaling Group）
- 自动根据需求扩缩容
- 无需手动添加/移除实例
- 按需付费，成本优化

#### 阶段 7：Multi-AZ
- ELB Multi-AZ + ASG Multi-AZ
- 即使整个 AZ 故障，应用仍然可用
- **高可用、灾难恢复**

#### 阶段 8：Reserved Instance 降成本
- 最小容量的实例使用 Reserved Instance
- 额外实例用 On-Demand 或 Spot Instance
- 大幅节省长期运行成本

### 架构设计要点总结
| 组件 | 作用 |
|------|------|
| Elastic IP | 静态 IP，管理困难，数量有限 |
| Route 53 | DNS 解析，TTL 限制 |
| ELB + Alias | 动态负载均衡，Health Check |
| ASG | 自动扩缩容 |
| Multi-AZ | 高可用、灾难恢复 |
| Security Group | EC2 只接受 ELB 流量 |
| Reserved Instance | 成本优化 |

## 考试要点

- Elastic IP 有数量限制（默认 5/Region/Account）
- ELB 动态 IP → 必须用 **Alias Record** 而非 A Record
- Route 53 TTL 导致更新延迟 → ELB 解决此问题
- ASG + Multi-AZ = 高可用 + 自动扩展
- Security Group 引用：EC2 只允许来自 ELB 的流量
- Reserved Instance 用于已知的最小容量以降低成本

## English Short Summary

This lecture traces a stateless web app (WhatIsTheTime.com) from a single EC2 with Elastic IP through vertical scaling (downtime), horizontal scaling with multiple Elastic IPs (management overhead), Route 53 A Records (TTL issues), to the final architecture: ELB with Alias Record + Private EC2 instances + ASG + Multi-AZ for high availability with no downtime. Cost optimization through Reserved Instances for minimum capacity. Key takeaways: ELB needs Alias Records (not A), ASG handles auto-scaling, Multi-AZ survives AZ failures, security groups restrict EC2 to ELB-only traffic.
