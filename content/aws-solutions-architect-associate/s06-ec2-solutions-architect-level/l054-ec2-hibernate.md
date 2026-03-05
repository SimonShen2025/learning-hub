---
title: "EC2 Hibernate"
lectureId: 54
section: 6
sectionTitle: "EC2 - Solutions Architect Associate Level"
date: "2026-03-05"
tags: ["ec2", "hibernate", "ebs", "performance", "ram"]
---

## 中文短总结

本讲介绍 EC2 Hibernate（休眠）功能。与普通停止不同，Hibernate 会将 RAM 内存状态写入加密的 Root EBS 卷中，使实例重启时操作系统无需重新引导。这大幅加速启动时间，适合长时间运行进程、需要保存 RAM 状态或需要快速启动的场景。限制：RAM < 150GB、Root EBS 必须加密且足够大、不支持裸金属实例、休眠时间最长 60 天。

## 中文长总结

### 与 Stop/Terminate 的区别
- **Stop**：EBS 数据保留，重启时 OS 重新引导、User Data 重新执行、应用重新启动、缓存重新预热
- **Terminate**：Root EBS 默认销毁（可配置保留）
- **Hibernate**：RAM 内存状态被保留，OS 不停止/重启而是"冻结"，启动速度极快

### Hibernate 工作原理
1. 实例进入 stopping 状态
2. RAM 内容被 dump 到 Root EBS 卷
3. 实例关闭，RAM 清空，但 EBS 保存了 RAM 数据
4. 启动时从 EBS 恢复 RAM 内容
5. 实例如同从未停止过

### 前提条件
- Root EBS 卷**必须加密**
- Root EBS 卷**必须足够大**以容纳 RAM 数据
- 不支持 Bare Metal 实例
- RAM 大小 **< 150GB**（可能变化）
- 支持 Linux 和 Windows

### 使用场景
- 长时间运行的进程不希望中断
- 需要保存 RAM 状态
- 需要快速启动（初始化耗时的服务）

### 其他特性
- 支持 On-Demand、Reserved、Spot 实例
- 休眠最长 **60 天**

## 考试要点

- Hibernate = RAM 保存到加密的 Root EBS，启动时恢复
- Root EBS **必须加密且足够大**
- 最长休眠 **60 天**
- 支持 On-Demand、Reserved、Spot
- 与 Stop 的区别：Hibernate 保留 RAM 状态，OS 不重启
- 考试场景：需要快速启动、保留内存状态 → Hibernate

## English Short Summary

EC2 Hibernate preserves the in-memory (RAM) state by writing it to the encrypted root EBS volume, allowing instances to boot much faster since the OS isn't stopped/restarted but "frozen." Requirements: root EBS must be encrypted and large enough for RAM, RAM < 150GB, no bare metal instances, max 60-day hibernation. Supports On-Demand, Reserved, and Spot instances. Use cases include long-running processes, saving RAM state, and fast boot for services with long initialization times.
