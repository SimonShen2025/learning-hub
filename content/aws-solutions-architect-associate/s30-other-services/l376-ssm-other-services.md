---
title: "SSM Other Services"
lectureId: 376
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [ssm, run-command, patch-manager, maintenance-window, automation]
---

## 中文短总结

SSM 其他服务概览：①**Run Command**：在多个 EC2/on-premises 上执行脚本，无需 SSH，输出到 S3/CloudWatch，失败通知到 SNS，可由 EventBridge 触发②**Patch Manager**：自动化 OS/应用/安全补丁，扫描生成合规报告，按需或通过 Maintenance Window 调度③**Maintenance Window**：定义操作时间窗口（调度+时长+目标实例+任务）④**Automation**：简化常见维护（重启实例/创建 AMI/EBS Snapshot），使用 **Runbook**（预定义 SSM 文档），可由 EventBridge / Maintenance Window / **AWS Config 不合规修复** 触发。

## 中文长总结

Systems Manager 的四个重要子服务：

| 服务 | 用途 | 触发方式 |
|------|------|---------|
| **Run Command** | 执行脚本/命令（多实例） | 手动/EventBridge |
| **Patch Manager** | OS/应用补丁（合规报告） | 按需/Maintenance Window |
| **Maintenance Window** | 定义维护时间窗口 | 定时调度 |
| **Automation** | 重启/AMI/Snapshot 等 | 手动/EventBridge/Config |

**Run Command 特点：**
- 无需 SSH（通过 SSM Agent）
- 输出 → S3 / CloudWatch Logs
- 状态通知 → SNS

**Patch Manager 特点：**
- AWS-RunPatchBaseline Run Command
- 生成补丁合规报告（哪些实例缺少补丁）

**Automation 特点：**
- 使用 **Runbook**（SSM Document）
- AWS Config 集成：不合规 → 自动修复

## 考试要点

- Run Command = 多实例执行命令，无需 SSH
- Patch Manager = 补丁管理 + 合规报告
- Automation + Config = 自动修复不合规资源
- Maintenance Window = 定时维护操作

## English Short Summary

SSM sub-services: (1) **Run Command**: execute scripts on multiple EC2/on-premises without SSH, output → S3/CloudWatch, notifications → SNS, triggered by EventBridge; (2) **Patch Manager**: automate OS/app/security patches, generate compliance reports, on-demand or via Maintenance Window; (3) **Maintenance Window**: define schedule + duration + instances + tasks for maintenance; (4) **Automation**: common tasks (restart instances/create AMI/EBS Snapshot) using **Runbooks** (SSM Documents), triggered by EventBridge/Maintenance Window/**AWS Config non-compliance remediation**.
