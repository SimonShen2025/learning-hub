---
title: "EC2 Instances Launch Types Hands On"
lectureId: 46
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ec2", "spot", "reserved", "savings-plan", "dedicated-host", "capacity-reservation", "hands-on"]
---

## 中文短总结

实操浏览所有 EC2 购买方式的控制台界面：1）Spot Request — 查看价格历史图表，配置 Spot Fleet（实例类型/容量/中断行为/分配策略），预估每小时费用和节省比例；2）直接启动 Spot 实例（Advanced Details 中勾选）；3）Reserved Instances — 搜索可用预留方案（期限/upfront/标准vs可变更）；4）Savings Plans — 按每小时承诺金额购买；5）Dedicated Hosts — 通过 License Manager 或直接分配物理主机；6）Capacity Reservations — 预留特定 AZ 的实例容量。

## English Short Summary

Hands-on tour of all EC2 purchase options in the console: Spot Requests (pricing history, fleet configuration with capacity/allocation strategy/interruption behavior, estimated hourly cost with ~73% savings); launching spot instances directly via Advanced Details; Reserved Instances (search offerings by term/upfront/standard vs. convertible); Savings Plans (commit per-hour spend); Dedicated Hosts (via License Manager or direct allocation); Capacity Reservations (reserve specific AZ capacity regardless of usage).
