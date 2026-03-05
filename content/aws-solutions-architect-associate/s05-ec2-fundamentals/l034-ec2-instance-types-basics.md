---
title: "EC2 Instance Types Basics"
lectureId: 34
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ec2", "instance-types", "general-purpose", "compute-optimized", "memory-optimized", "storage-optimized"]
---

## 中文短总结

EC2 实例类型命名规则：如 m5.2xlarge 中，m=实例类别、5=代数、2xlarge=大小。四大类型：1）通用型（General Purpose，T/M 系列）— 均衡计算/内存/网络；2）计算优化型（Compute Optimized，C 系列）— 批处理、HPC、ML；3）内存优化型（Memory Optimized，R/X/Z 系列）— 内存数据库、缓存、大数据实时处理；4）存储优化型（Storage Optimized，I/D/H 系列）— OLTP、数据仓库、分布式文件系统。

## 中文长总结

**实例命名规则（如 m5.2xlarge）：**
- **m** = 实例类别（Instance Class），如通用型
- **5** = 代数（Generation），硬件升级后递增
- **2xlarge** = 大小，从 small → large → 2xlarge → 4xlarge...，越大 CPU/内存越多

**四大实例类型类别：**

1. **通用型（General Purpose）**
   - 均衡的计算、内存、网络性能
   - 适合 Web 服务器、代码仓库等多种负载
   - 课程使用 t2.micro（Free Tier）
   - 代表系列：T, M

2. **计算优化型（Compute Optimized）**
   - 高 CPU 性能
   - 适合批处理、媒体转码、高性能 Web 服务器、HPC、机器学习、游戏服务器
   - 代表系列：C（C5, C6 等）

3. **内存优化型（Memory Optimized）**
   - 大内存（RAM）
   - 适合内存数据库、分布式缓存（ElastiCache）、BI 应用、大数据实时处理
   - 代表系列：R（R=RAM）、X1、High Memory、Z1

4. **存储优化型（Storage Optimized）**
   - 高频本地存储访问
   - 适合 OLTP 系统、关系型/NoSQL 数据库、Redis 缓存、数据仓库、分布式文件系统
   - 代表系列：I、D、H1

**实用工具**：ec2instances.info 网站可比较所有实例类型的规格和价格。

## 考试要点

- 通用型（General Purpose）：均衡，适合多种负载
- 计算优化型（Compute Optimized，C 系列）：高 CPU，批处理/HPC/ML
- 内存优化型（Memory Optimized，R 系列）：大 RAM，内存数据库/缓存
- 存储优化型（Storage Optimized，I/D/H）：高频存储，OLTP/数据仓库
- 命名规则：类别 + 代数 + 大小

## English Short Summary

EC2 instance type naming: m5.2xlarge = m (instance class) + 5 (generation) + 2xlarge (size). Four categories: General Purpose (T/M, balanced), Compute Optimized (C series, high CPU for batch/HPC/ML), Memory Optimized (R/X/Z, large RAM for in-memory databases/caches), Storage Optimized (I/D/H, high I/O for OLTP/data warehousing). Use ec2instances.info to compare specs and pricing.
