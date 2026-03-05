---
title: "AMI Overview"
lectureId: 60
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["ami", "ec2", "image", "customization"]
---

## 中文短总结

本讲介绍 AMI（Amazon Machine Image）。AMI 是 EC2 实例的自定义镜像，包含 OS、软件配置、监控工具等预安装内容，使实例启动更快。AMI 绑定到特定 Region，可跨 Region 复制。来源有三种：AWS 公共 AMI（如 Amazon Linux 2）、自建 AMI（需自行维护）、AWS Marketplace AMI（第三方创建/售卖）。创建流程：启动实例 → 自定义 → 停止 → 创建 AMI（自动创建 EBS Snapshot）→ 从 AMI 启动新实例。

## 中文长总结

### AMI 基本概念
- AMI = Amazon Machine Image
- EC2 实例的**自定义镜像**
- 包含：OS、软件配置、监控工具等预安装内容
- 使用自定义 AMI → **启动更快**（软件已预装，无需再安装）

### AMI 类型
1. **Public AMI**：AWS 提供（如 Amazon Linux 2）
2. **自建 AMI**：用户自行创建和维护
3. **Marketplace AMI**：第三方在 AWS Marketplace 售卖的 AMI

### AMI 特性
- **绑定到 Region**，可跨 Region 复制
- 创建 AMI 时自动创建 EBS Snapshot

### 创建流程
1. 启动 EC2 实例
2. 自定义配置（安装软件等）
3. **停止实例**（确保数据完整性）
4. 创建 AMI（自动创建 EBS Snapshot）
5. 从新 AMI 启动实例（其他 AZ 也可以）

## 考试要点

- AMI 绑定到 **Region**，可跨 Region 复制
- 创建 AMI 前需**停止实例**确保数据完整性
- 自定义 AMI 加速启动（软件预装）
- 可在 AWS Marketplace 买卖 AMI
- AMI 创建时背后自动生成 EBS Snapshot

## English Short Summary

AMI (Amazon Machine Image) is a customization of EC2 instances containing OS, software, and monitoring tools pre-packaged for faster boot times. AMIs are region-specific but can be copied across regions. Three sources: AWS public AMIs, your own AMIs (create by launching → customizing → stopping → creating image), and Marketplace AMIs from third parties. Creating an AMI automatically generates EBS snapshots behind the scenes.
