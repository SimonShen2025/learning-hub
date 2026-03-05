---
title: "AWS Batch"
lectureId: 380
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [batch, ecs, docker, spot-instances, hpc]
---

## 中文短总结

AWS Batch：全托管批处理服务。自动管理 EC2 和 Spot 实例的创建与扩展。提交 **Batch Job** → 调度到队列 → 运行在**ECS 上的 Docker 容器**中。处理任意规模的工作负载。**Batch vs Lambda**：Lambda 有时间限制（15min）、有限运行时、有限磁盘/EFS；Batch 无时间限制、任何运行时（Docker 中打包）、依赖 EC2 实例存储（EBS/Instance Store）、**不是 Serverless**（EC2 by AWS 管理但实例可见）。

## 中文长总结

AWS Batch 的核心架构和与 Lambda 的关键区别。

**架构：**
```
提交 Batch Job → 批处理队列 → AWS Batch 调度
  → 自动创建 EC2/Spot 实例
  → 在 ECS 上运行 Docker 容器
  → 完成后自动缩减
```

**Batch vs Lambda 对比：**

| 特性 | Lambda | AWS Batch |
|------|--------|-----------|
| **时间限制** | 15 分钟 | ❌ 无限制 |
| **运行时** | 有限选择 | **任何**（Docker） |
| **磁盘** | 512MB-10GB /tmp + EFS | EC2 实例存储（EBS/Instance Store）|
| **Serverless** | ✅ 完全 | ❌（AWS 管理 EC2）|
| **适用场景** | 短小事件处理 | 长时大规模处理 |

## 考试要点

- Batch = 托管批处理，Docker on ECS
- 无时间限制（vs Lambda 15min）
- 任何运行时（vs Lambda 有限选择）
- 不是 Serverless（底层是 EC2/Spot）
- 自动 provision 和 scale EC2/Spot

## English Short Summary

AWS Batch: fully managed batch processing — auto-provisions and scales EC2/Spot instances. Submit **Batch Jobs** → queue → run as **Docker containers on ECS**. Any scale. **Batch vs Lambda**: Lambda has 15-min limit/limited runtimes/limited disk; Batch has **no time limit**, **any runtime** (Docker), EC2 instance storage (EBS/Instance Store), and is **not serverless** (AWS manages EC2 but instances exist).
