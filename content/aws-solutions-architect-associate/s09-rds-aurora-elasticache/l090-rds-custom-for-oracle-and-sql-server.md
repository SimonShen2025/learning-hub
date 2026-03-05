---
title: "RDS Custom for Oracle and Microsoft SQL Server"
lectureId: 90
section: 9
sectionTitle: "AWS Fundamentals: RDS + Aurora + ElastiCache"
date: "2026-03-05"
tags: ["RDS Custom", "Oracle", "SQL Server", "EC2 Access"]
---

## 中文短总结

本讲介绍了 RDS Custom，它仅适用于 Oracle 和 Microsoft SQL Server 两种引擎。与标准 RDS 不同，RDS Custom 允许用户访问底层操作系统和数据库，可以配置内部设置、安装补丁、启用原生功能，并通过 SSH 或 SSM Session Manager 访问底层 EC2 实例。执行自定义操作前建议关闭自动化模式并拍摄数据库快照以防操作出错。

## 中文长总结

### RDS vs RDS Custom
- **RDS**：完全托管，AWS 管理整个数据库和操作系统，用户无法访问底层
- **RDS Custom**：仅适用于 **Oracle** 和 **Microsoft SQL Server**
  - 保留 RDS 的自动化配置、运维和扩展能力
  - 额外提供底层 OS 和数据库的完全管理员访问权限

### RDS Custom 能做什么
- 配置数据库内部设置
- 安装自定义补丁
- 启用数据库原生功能
- 通过 **SSH** 或 **SSM Session Manager** 访问底层 EC2 实例

### 操作注意事项
- 执行自定义操作前：**建议关闭自动化模式**（Deactivate Automation Mode），防止 RDS 在自定义过程中执行维护或扩展操作
- **务必先拍摄数据库快照**（Database Snapshot），否则无法从错误操作中恢复

## 考试要点

- RDS Custom **仅支持 Oracle 和 Microsoft SQL Server**
- RDS Custom 提供底层 OS 和数据库的 **完全管理员访问**
- 可通过 SSH 或 SSM Session Manager 访问 EC2 实例
- 操作前要关闭自动化模式 + 拍摄快照

## English Short Summary

RDS Custom is available only for Oracle and Microsoft SQL Server, providing full admin access to the underlying OS and database. Unlike standard RDS, users can configure internal settings, install patches, enable native features, and SSH/SSM into the underlying EC2 instance. Before performing customizations, it's recommended to deactivate automation mode and take a database snapshot for recovery purposes.
