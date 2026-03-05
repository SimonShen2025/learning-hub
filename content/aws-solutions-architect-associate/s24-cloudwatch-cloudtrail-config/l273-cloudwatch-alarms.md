---
title: "CloudWatch Alarms"
lectureId: 273
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudwatch, alarms, composite-alarm, ec2-recovery, sns, auto-scaling]
---

## 中文短总结

CloudWatch Alarms 基于指标触发通知。三种状态：OK / INSUFFICIENT_DATA / ALARM。三大目标：①EC2 动作（停止/终止/重启/恢复）②Auto Scaling 动作（扩缩容）③SNS 通知（→Lambda 可做任意操作）。Composite Alarms：组合多个告警（AND/OR 条件），减少告警噪声。EC2 Instance Recovery：监控 Status Check（实例/系统/EBS）→告警触发恢复（保留原 IP/元数据/置放组）。可基于 Logs Metric Filter 创建告警（如错误次数超阈值→SNS）。测试告警：`set-alarm-state` CLI 命令。

## 中文长总结

CloudWatch Alarms 是基于指标的通知和自动化服务。

**告警状态：**
- **OK**：未触发
- **INSUFFICIENT_DATA**：数据不足以判断状态
- **ALARM**：阈值被突破，发送通知

**三大目标动作：**
1. **EC2 动作**：停止、终止、重启、恢复实例
2. **Auto Scaling 动作**：触发扩容（Scale Out）或缩容（Scale In）
3. **SNS 通知**：发送到 SNS → 可触发 Lambda 执行任意操作

**Composite Alarms（组合告警，考试重点）：**
- 监控多个其他告警的状态
- 使用 AND / OR 条件组合
- 目的：减少告警噪声
- 示例：仅当 CPU 高 **AND** IOPS 高时才触发（而非单独触发）

**EC2 Instance Recovery：**
- 监控 Status Check：Instance Status（VM）、System Status（硬件）、EBS Status
- 告警触发恢复：将实例迁移到另一台主机
- 恢复后保留：相同的 Private/Public/Elastic IP、元数据、置放组
- 可同时发送 SNS 告警通知

**Logs → Metric Filter → Alarm：**
- CloudWatch Logs Metric Filter 统计特定关键词出现次数
- 超过阈值 → 触发 CloudWatch Alarm → SNS 通知

**测试告警：**
- CLI 命令：`aws cloudwatch set-alarm-state` 手动设置告警状态，测试告警动作是否正确

## 考试要点

- 三种状态：OK / INSUFFICIENT_DATA / ALARM
- 三大目标：EC2 动作 / Auto Scaling / SNS
- Composite Alarms = 多告警组合（AND/OR），减少噪声
- EC2 Recovery 保留原 IP/元数据/置放组
- Logs Metric Filter → Alarm = 日志关键词监控
- `set-alarm-state` 用于测试告警

## English Short Summary

CloudWatch Alarms trigger notifications from metrics with three states: OK/INSUFFICIENT_DATA/ALARM. Three targets: EC2 actions (stop/terminate/reboot/recover), Auto Scaling actions, and SNS notifications (→Lambda for anything). Composite Alarms combine multiple alarms with AND/OR conditions to reduce noise. EC2 Instance Recovery monitors Status Checks and migrates instances while preserving IPs/metadata/placement group. Can create alarms from Logs Metric Filters (e.g., error count threshold→SNS). Test alarms with `set-alarm-state` CLI.
