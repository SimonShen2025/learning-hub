---
title: "CloudWatch Alarms Hands On"
lectureId: 274
section: "s24"
sectionTitle: "AWS Monitoring & Audit: CloudWatch, CloudTrail & Config"
date: "2026-03-05"
tags: [cloudwatch, alarms, ec2, hands-on]
---

## 中文短总结

实操演示创建 CloudWatch Alarm：选择 EC2 实例的 CPUUtilization 指标 → 设置条件（>95% 持续 15 分钟，即 3/3 个 5 分钟周期）→ 设置 EC2 动作为终止实例。使用 `aws cloudwatch set-alarm-state` CLI 命令手动将告警设为 ALARM 状态进行测试 → 成功触发终止动作，实例被关闭。验证了告警→动作链路的正确性。

## English Short Summary

Hands-on demo creating a CloudWatch Alarm: select EC2 CPUUtilization metric → set condition (>95% for 15 minutes, 3/3 five-minute periods) → configure EC2 action to terminate instance. Tested using `aws cloudwatch set-alarm-state` CLI to manually trigger ALARM state → successfully terminated the instance. Validates the alarm→action chain works correctly.
