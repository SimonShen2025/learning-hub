---
title: "Instantiating Applications Quickly"
lectureId: 125
section: 11
sectionTitle: "Classic Solutions Architecture Discussions"
date: "2026-03-05"
tags: ["Golden AMI", "User Data", "Snapshot", "Bootstrap"]
---

## 中文短总结

本讲讨论如何加速应用部署。**Golden AMI**：预装所有应用和依赖后创建 AMI，新实例直接从 Golden AMI 启动——最快方式。**EC2 User Data**：启动时自动安装配置（Bootstrapping），速度较慢但适合动态配置（如数据库 URL）。最佳实践是**混合使用**：Golden AMI + User Data 处理动态配置。**RDS 数据库**：从 Snapshot 恢复比执行 INSERT 语句快得多。**EBS Volume**：从 Snapshot 恢复比格式化空盘快。Elastic Beanstalk 使用了相同的混合原则。

## 中文长总结

### 快速启动方法

#### EC2 实例
| 方法 | 速度 | 适用场景 |
|------|------|----------|
| **Golden AMI** | 最快 | 预装 OS + 应用 + 依赖 |
| **User Data** | 慢 | 动态配置（DB URL、密码） |
| **混合** | 快 | Golden AMI + User Data（推荐） |

- **Golden AMI**：安装所有依赖 → 创建 AMI → 新实例直接启动
- **User Data（Bootstrapping）**：首次启动时运行配置脚本
- **混合方式**：Golden AMI 预装静态内容 + User Data 配置动态参数

#### RDS 数据库
- 从 **Snapshot 恢复** → Schema + 数据立即可用
- 比执行大量 INSERT 语句**快得多**

#### EBS Volume
- 从 **Snapshot 恢复** → 已格式化、已有数据
- 比使用空白、未格式化的磁盘快

### Elastic Beanstalk
- 使用相同的混合原则：预配置 AMI + User Data

## 考试要点

- **Golden AMI** 是最快启动 EC2 实例的方式
- RDS 从 **Snapshot 恢复**而非 INSERT 语句
- EBS 从 **Snapshot 恢复**而非空白磁盘
- 混合方式（Golden AMI + User Data）是推荐最佳实践

## English Short Summary

Speed up application deployment with: (1) **Golden AMI** — pre-install everything, create AMI, launch instantly (fastest); (2) **EC2 User Data** — bootstrap dynamic config at startup (slower); (3) **Hybrid** — Golden AMI + User Data for dynamic parts (recommended, used by Beanstalk). For RDS, restore from Snapshots instead of running INSERT statements. For EBS, restore from Snapshots instead of formatting empty volumes. These patterns are key for solutions architecture.
