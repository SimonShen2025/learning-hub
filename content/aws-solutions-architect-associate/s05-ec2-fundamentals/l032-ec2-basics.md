---
title: "EC2 Basics"
lectureId: 32
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ec2", "iaas", "user-data", "bootstrap", "virtual-machine"]
---

## 中文短总结

EC2（Elastic Compute Cloud）是 AWS 最核心的 IaaS 服务，用于租用虚拟机。EC2 涵盖：虚拟机（EC2 实例）、虚拟磁盘（EBS）、负载均衡器（ELB）、自动伸缩组（ASG）。实例可配置操作系统（Linux/Windows/macOS）、CPU、RAM、存储类型（网络存储 EBS/EFS 或硬件存储 Instance Store）、网络和安全组（防火墙）。EC2 User Data 脚本以 root 身份在首次启动时执行，用于自动化引导任务（安装更新、软件等）。

## 中文长总结

**EC2 概述：**
- EC2 = Elastic Compute Cloud，AWS 最受欢迎的服务之一
- 本质是 Infrastructure as a Service（IaaS）- 按需租用虚拟服务器
- 体现云计算核心优势：按需获取计算资源，无需购买物理服务器

**EC2 生态组件：**
- **EC2 实例**：虚拟机（可租用的虚拟服务器）
- **EBS 卷**：虚拟磁盘（Elastic Block Store）
- **ELB**：弹性负载均衡器（Elastic Load Balancer）
- **ASG**：自动伸缩组（Auto-Scaling Group）

**实例配置选项：**
- **操作系统**：Linux（最常用）、Windows、macOS
- **CPU**：计算核心数量
- **RAM**：内存大小
- **存储**：网络存储（EBS/EFS）或硬件直连（EC2 Instance Store）
- **网络**：网卡速度、公网 IP 类型
- **防火墙**：Security Group（安全组）
- **引导脚本**：EC2 User Data

**EC2 User Data（用户数据脚本）：**
- 仅在实例首次启动时执行一次
- 以 root 用户（sudo 权限）运行
- 用途：安装更新、安装软件、下载文件等自动化引导任务
- 脚本越长，启动时间越长

## 考试要点

- EC2 是 AWS 的核心 IaaS 服务
- EC2 User Data 脚本仅在首次启动时运行一次，以 root 身份执行
- 了解 EC2 配置选项：OS、CPU、RAM、存储、网络、安全组
- EC2 生态包括 EBS、ELB、ASG

## English Short Summary

EC2 (Elastic Compute Cloud) is AWS's core IaaS service for renting virtual machines. An EC2 ecosystem includes instances, EBS volumes, ELB, and ASG. Instances can be configured with OS (Linux/Windows/macOS), CPU, RAM, storage (network-attached EBS/EFS or hardware Instance Store), networking, and security groups. EC2 User Data scripts run once at first boot with root privileges to automate bootstrap tasks like installing updates and software.
