---
title: "Instance Scheduler on AWS"
lectureId: 383
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [instance-scheduler, cost-saving, ec2, rds, cloudformation, lambda]
---

## 中文短总结

Instance Scheduler on AWS：AWS 提供的解决方案（通过 CloudFormation 部署），自动定时启动/停止 EC2 和 RDS 实例，**节约高达 70% 成本**。架构：调度计划存储在 **DynamoDB** 表中 → **Lambda 函数**按调度执行启动/停止 → 支持**跨账号 + 跨区域**。例如：工作日 8AM-5PM 启动，其余时间停止。部署方式是直接在 CloudFormation 中启动预制的解决方案模板。

## 中文长总结

这是一个节省非生产环境成本的方案。

**架构：**
```
CloudFormation 部署 →
  ├─ DynamoDB（存储调度计划）
  ├─ Lambda（执行启停操作）
  ├─ CloudWatch Events（定时触发）
  └─ 跨账号/区域 IAM 角色

调度流程：
CloudWatch Events → Lambda → 读取 DynamoDB 调度
  → 启动/停止 EC2 或 RDS（本账号 + 远程账号）
```

**特点：**
| 特性 | 说明 |
|------|------|
| **部署** | CloudFormation 一键部署 |
| **调度存储** | DynamoDB |
| **执行** | Lambda |
| **跨账号** | ✅ 支持 |
| **跨区域** | ✅ 支持 |
| **节省** | 高达 70% |

## 考试要点

- Instance Scheduler = 定时停启 EC2/RDS
- AWS Solution（CloudFormation 部署）不是原生服务
- 架构：DynamoDB 调度 + Lambda 执行
- 跨账号/跨区域支持
- 节约高达 70% 成本

## English Short Summary

Instance Scheduler on AWS: AWS Solution (deployed via CloudFormation) to automatically start/stop EC2 and RDS instances on schedule, **saving up to 70% costs**. Architecture: schedules stored in **DynamoDB** → **Lambda functions** execute start/stop → supports **cross-account + cross-region**. Example: start at 8AM, stop at 5PM on weekdays. Deployed as a pre-built CloudFormation solution template.
