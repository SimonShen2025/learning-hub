---
title: "Auto Scaling Groups - Scaling Policies Hands On"
lectureId: 86
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["asg", "scaling-policy", "target-tracking", "cloudwatch", "hands-on"]
---

## 中文短总结

实操 ASG 扩缩容策略：(1) Scheduled Actions — 设定未来某时的 Desired/Min/Max 容量变更；(2) Predictive Scaling — 选择指标（如 CPU）和目标值，由 ML 基于历史数据自动生成预测；(3) Dynamic Scaling — 创建 Target Tracking 策略（如 CPU 40%），ASG 自动创建两个 CloudWatch Alarm（AlarmHigh 触发 Scale Out，AlarmLow 触发 Scale In）。用 `stress -c 4` 命令提升 CPU 到 100% 触发 Scale Out（1→2→3 实例），停止 stress 后 CPU 下降触发 Scale In（3→2→1）。

## English Short Summary

Hands-on ASG scaling policies: (1) Scheduled Actions — plan capacity changes at specific times; (2) Predictive Scaling — ML-driven forecasting based on selected metrics; (3) Dynamic Target Tracking — set CPU target 40%, ASG auto-creates two CloudWatch Alarms (AlarmHigh for scale-out, AlarmLow for scale-in). Demonstrated using `stress -c 4` to spike CPU to 100%, triggering scale-out from 1→3 instances. After stopping stress, CPU drops and triggers scale-in back to 1 instance.
