---
title: "Elastic Load Balancer - Cross Zone Load Balancing"
lectureId: 79
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["elb", "cross-zone", "load-balancing", "availability-zone"]
---

## 中文短总结

跨区域负载均衡（Cross-Zone Load Balancing）使每个 ELB 节点将流量均匀分配到所有 AZ 的所有已注册实例，而非仅限于本 AZ 的实例。**ALB**：默认开启，可在 Target Group 级别关闭，无跨 AZ 数据传输费。**NLB/GWLB**：默认关闭，启用后产生跨 AZ 数据传输费。**CLB**：默认关闭，启用后不收费。

## 中文长总结

**Cross-Zone Load Balancing 行为：**
- **开启时**：ELB 节点将流量均匀分配到所有 AZ 的所有注册实例
  - 例：AZ1 有 2 个实例，AZ2 有 8 个实例 → 每个实例各获得 10% 流量
- **关闭时**：ELB 节点仅将流量分配到本 AZ 的实例
  - 例：AZ1 有 2 个实例，AZ2 有 8 个实例 → AZ1 实例各获 25%，AZ2 实例各获 6.25%
  - 如果各 AZ 实例数不均衡，某些实例会承受更多流量

**各负载均衡器默认行为和费用：**

| 类型 | 默认状态 | 跨 AZ 数据传输费 |
|------|---------|-----------------|
| ALB | 开启（可在 TG 级别关闭） | 不收费 |
| NLB | 关闭 | 收费 |
| GWLB | 关闭 | 收费 |
| CLB | 关闭 | 不收费 |

## 考试要点

- ALB 默认开启 Cross-Zone，无跨 AZ 费用
- NLB 和 GWLB 默认关闭，启用后有跨 AZ 数据费
- 跨 AZ 负载均衡确保实例间流量均匀分配，避免因 AZ 间实例数不均导致的负载倾斜

## English Short Summary

Cross-Zone Load Balancing distributes traffic evenly across all registered instances in all AZs, regardless of which AZ the ELB node is in. ALB has it enabled by default (no inter-AZ charges, configurable per target group). NLB and GWLB have it disabled by default (charges apply when enabled). CLB has it disabled by default (no charges). Without cross-zone balancing, traffic stays within each AZ, potentially causing uneven load if instance counts differ across AZs.
