---
title: "EC2 Instance Store"
lectureId: 62
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["ec2", "instance-store", "storage", "performance", "ephemeral"]
---

## 中文短总结

本讲介绍 EC2 Instance Store——直接连接到物理服务器的硬件磁盘。相比 EBS 网络驱动器，Instance Store 提供极高的 I/O 性能（如 i3 系列可达 330 万 Read IOPS，而 GP2 仅 3.2 万）。但它是**临时存储（ephemeral）**：实例停止/终止时数据丢失，底层服务器故障也会导致数据丢失。适用于 buffer、cache、临时数据。用户必须自行负责数据备份和复制。

## 中文长总结

### Instance Store 概念
- 物理连接到 EC2 实例底层服务器的**硬件磁盘**
- 因为是物理连接（非网络），I/O 性能远超 EBS

### 性能对比
- i3 系列 Instance Store：Random Read IOPS 可达 **330 万**，Write IOPS 达 **140 万**
- EBS GP2：最高 **3.2 万** IOPS
- 性能差距巨大：Instance Store 可达 EBS 的 100 倍

### 关键特性
- **临时存储（Ephemeral）**：实例停止或终止时**数据丢失**
- 底层服务器故障也会导致数据丢失
- 用户必须**自行备份和复制**数据

### 适用场景
- Buffer / Cache
- Scratch Data / 临时内容
- 需要极高磁盘性能的场景

### 不适用场景
- 长期数据存储（应使用 EBS）

## 考试要点

- 考试提到**超高性能硬件磁盘** → 想到 EC2 Instance Store
- Instance Store 是**临时存储**，实例停止/终止/故障时数据丢失
- 用户自行负责备份
- 适合 buffer、cache、临时数据
- **不适合**长期存储或数据库

## English Short Summary

EC2 Instance Store is a hardware disk physically attached to the host server, offering extremely high I/O performance (e.g., i3 instances: 3.3M Read IOPS vs. GP2's 32K IOPS). However, it's ephemeral storage — data is lost when the instance is stopped, terminated, or if the underlying hardware fails. Suitable for buffers, caches, and temporary data. Users are responsible for backup and replication. For the exam: very high performance hardware-attached storage → think Instance Store.
