---
title: "Auto Scaling Groups - Scaling Policies"
lectureId: 85
section: 8
sectionTitle: "High Availability and Scalability: ELB & ASG"
date: "2026-03-05"
tags: ["asg", "scaling-policy", "target-tracking", "predictive-scaling", "cooldown"]
---

## 中文短总结

ASG 扩缩容策略分四类：(1) **Target Tracking**（目标跟踪）— 设定指标目标值（如 CPU 40%），自动调整实例数；(2) **Simple/Step Scaling** — 基于 CloudWatch Alarm 手动定义增减规则；(3) **Scheduled Scaling** — 按已知时间模式预设扩容；(4) **Predictive Scaling** — ML 分析历史数据预测负载并提前调度。常用指标包括 CPU 利用率、RequestCountPerTarget、网络 I/O。Cooldown Period 默认 300 秒，防止扩缩容操作后立即触发新的扩缩容。

## 中文长总结

**动态扩缩容策略（Dynamic Scaling）：**
- **Target Tracking**：最简单。定义目标指标和目标值（如 CPU 40%），ASG 自动调整
- **Simple/Step Scaling**：基于 CloudWatch Alarm 添加/移除指定数量的实例
  - Step Scaling 支持根据 Alarm 值的不同阈值设置不同步长

**计划扩缩容（Scheduled Scaling）：**
- 基于已知时间模式预设扩缩容
- 示例：每周五 17:00 最小容量设为 10

**预测扩缩容（Predictive Scaling）：**
- 基于 ML 分析历史负载模式
- 自动生成预测并提前调度扩缩容
- 适合周期性负载模式

**推荐扩缩容指标：**
- **CPU Utilization**：平均 CPU 使用率
- **RequestCountPerTarget**：每个目标的请求数
- **Average Network In/Out**：网络 I/O 带宽
- **自定义指标**：推送到 CloudWatch 的应用级指标

**Cooldown Period（冷却期）：**
- 扩缩容后进入冷却期，默认 300 秒（5 分钟）
- 冷却期间不触发新的扩缩容操作
- 目的：等待指标稳定
- 建议：使用 Ready-to-use AMI 减少配置时间，以便缩短冷却期
- 启用 Detailed Monitoring 获取每分钟指标更新

## 考试要点

- Target Tracking 最简单：设定目标指标值，ASG 自动调整
- Predictive Scaling 使用 ML 预测负载
- Scheduled Scaling 用于可预知的负载变化
- Cooldown 默认 300 秒，防止频繁扩缩容
- 常用指标：CPU Utilization、RequestCountPerTarget、Network I/O

## English Short Summary

ASG scaling policies include: (1) Target Tracking — set a target metric value (e.g., CPU 40%) for automatic adjustment; (2) Simple/Step Scaling — CloudWatch Alarm-triggered scaling with defined thresholds; (3) Scheduled Scaling — pre-planned scaling based on known patterns; (4) Predictive Scaling — ML-based historical analysis for proactive scheduling. A cooldown period (default 300s) prevents cascading scaling actions. Key metrics: CPU utilization, RequestCountPerTarget, network I/O, and custom metrics.
