---
title: "EC2 Hibernate - Hands On"
lectureId: 55
section: 6
sectionTitle: "EC2 - Solutions Architect Associate Level"
date: "2026-03-05"
tags: ["ec2", "hibernate", "hands-on"]
---

## 中文短总结

本实操演示了 EC2 Hibernate 功能：启动 t2.micro 实例时启用 Hibernate，Root EBS 必须加密且大小足够（8GB > 1GB RAM）。使用 `uptime` 命令验证：正常启动后 uptime 为 0-1 分钟，执行 Hibernate 后重新启动，uptime 继续计数（显示 2-3 分钟而非重置为 0），证明操作系统从未真正停止——这就是 Hibernate 的核心效果。

## English Short Summary

Hands-on demo of EC2 Hibernate: launch a t2.micro with hibernation enabled, encrypted root EBS (8GB > 1GB RAM needed). Using `uptime` to verify: after hibernating and restarting, uptime continues counting (shows 2-3 minutes instead of resetting to 0), proving the OS was never actually stopped — that's the core effect of hibernation.
