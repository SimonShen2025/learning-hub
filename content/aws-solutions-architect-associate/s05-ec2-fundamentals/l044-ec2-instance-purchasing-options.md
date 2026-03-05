---
title: "EC2 Instance Purchasing Options"
lectureId: 44
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ec2", "pricing", "on-demand", "reserved", "savings-plan", "spot", "dedicated-host", "capacity-reservation"]
---

## 中文短总结

EC2 实例购买选项全解析：On-Demand（按秒计费，最贵但无承诺）、Reserved Instances（1/3年，最高72%折扣，固定配置）、Convertible Reserved（可变更配置，66%折扣）、Savings Plans（承诺消费金额，灵活配置，70%折扣）、Spot Instances（最高90%折扣，可被随时回收）、Dedicated Hosts（独占物理服务器，用于合规/BYOL）、Dedicated Instances（独占硬件，无物理服务器可见性）、Capacity Reservations（预留容量，按On-Demand价格计费）。

## 中文长总结

**1. On-Demand（按需实例）：**
- Linux/Windows 按秒计费（首分钟后），其他 OS 按小时
- 最高价格，无预付、无长期承诺
- 适合短期、不可中断、无法预测的负载

**2. Reserved Instances（预留实例）：**
- 相比 On-Demand 最高 72% 折扣
- 绑定特定实例类型、区域、租户、OS
- 期限：1年或3年，支付方式：无预付/部分预付/全预付（全预付折扣最大）
- 可在 Reserved Instance Marketplace 买卖
- Convertible Reserved：可更改实例类型/系列/OS/范围/租户，最高 66% 折扣

**3. Savings Plans（节省计划）：**
- 承诺每小时消费金额（如 $10/h），期限 1-3 年
- 最高与 RI 相同的 70% 折扣
- 锁定实例族和区域（如 M5 in us-east-1）
- 灵活项：实例大小、OS、租户
- 超出承诺部分按 On-Demand 计费

**4. Spot Instances（竞价实例）：**
- 最高 90% 折扣，AWS 最具性价比的选项
- 可随时被回收（如果现货价格超过你的最高出价）
- 适合：批处理、数据分析、图像处理、分布式负载
- **不适合**：关键任务、数据库

**5. Dedicated Hosts（专用主机）：**
- 租用整台物理服务器
- 用于合规需求或基于 socket/core/VM 的 BYOL 许可
- On-Demand 或 1/3 年预留
- AWS 最昂贵选项

**6. Dedicated Instances（专用实例）：**
- 运行在专属硬件上，但无物理服务器可见性
- 可能与同账户其他实例共享硬件

**7. Capacity Reservations（容量预留）：**
- 在特定 AZ 预留 On-Demand 容量
- 无时间承诺，任时可取消
- 无折扣，无论是否使用都按 On-Demand 价格计费
- 适合特定 AZ 中短期、不可中断的负载

## 考试要点

- On-Demand：短期、灵活、最贵
- Reserved/Savings Plans：长期负载（1-3年），大幅折扣
- Spot：最便宜（90%折扣），可被回收，不适合关键任务/数据库
- Dedicated Host：合规/BYOL 需求，可见物理服务器
- Dedicated Instance：独占硬件但无物理服务器级别控制
- Capacity Reservation：保证容量可用，按 On-Demand 价格计费

## English Short Summary

EC2 purchasing options: On-Demand (per-second billing, highest cost, no commitment); Reserved Instances (1/3-year, up to 72% off, fixed config); Convertible Reserved (flexible config, 66% off); Savings Plans (commit spend amount, 70% off); Spot (up to 90% off, can be reclaimed—not for critical jobs/databases); Dedicated Hosts (full physical server for compliance/BYOL); Dedicated Instances (dedicated hardware, no server visibility); Capacity Reservations (reserve capacity in specific AZ, On-Demand pricing).
