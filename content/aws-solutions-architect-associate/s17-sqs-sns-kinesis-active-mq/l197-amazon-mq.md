---
title: "Amazon MQ"
lectureId: 197
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [amazon-mq, rabbitmq, activemq, messaging, migration, efs, aws]
---

## 中文短总结

Amazon MQ 是托管的消息代理服务，支持 RabbitMQ 和 ActiveMQ，适用于从本地迁移到云端且不想重构使用 SQS/SNS API 的场景（支持 MQTT、AMQP、STOMP 等开放协议）。与 SQS/SNS 相比，Amazon MQ 扩展性较差，运行在服务器上。支持多可用区高可用部署（Active-Standby），通过 Amazon EFS 作为后端存储实现故障转移时的数据持久化。

## 中文长总结

### 为什么需要 Amazon MQ

SQS 和 SNS 是 AWS **原生的**（Cloud-native）消息服务，使用 AWS 专有 API。但本地（On-premises）应用可能使用**开放协议**：
- **MQTT**
- **AMQP**
- **STOMP**
- **Openwire**
- **WSS**

迁移到云端时，如果不想重构应用以使用 SQS/SNS → 使用 **Amazon MQ**。

### 核心特性

| 特性 | 说明 |
|------|------|
| 支持的消息代理 | **RabbitMQ** 和 **ActiveMQ** |
| 扩展性 | 不如 SQS/SNS（有限扩展） |
| 运行方式 | 运行在**服务器上**（非 Serverless） |
| 功能 | 同时支持 **Queue**（类似 SQS）和 **Topic**（类似 SNS） |

### 高可用架构（Multi-AZ Failover）

```
Region: us-east-1
├── AZ: us-east-1a
│   └── Amazon MQ Broker (Active)
│         ↕ mounted
│         Amazon EFS (共享存储)
│         ↕ mounted
├── AZ: us-east-1b
│   └── Amazon MQ Broker (Standby)
```

- 使用 **Amazon EFS** 作为后端存储（跨 AZ 的网络文件系统）
- Active Broker 故障时，Standby Broker 自动接管
- EFS 保证两个 Broker 共享相同数据，实现数据不丢失的故障转移

## 考试要点

- **Amazon MQ** = 迁移使用开放协议（MQTT/AMQP/STOMP）的本地应用到 AWS
- 支持 **RabbitMQ** 和 **ActiveMQ** 的托管版本
- 与 SQS/SNS 对比：扩展性较差，运行在服务器上
- 同时具有 **Queue** 和 **Topic** 功能
- 高可用：Multi-AZ Active-Standby + **Amazon EFS** 作为共享存储
- 考试场景：从本地迁移消息中间件、不想改代码 → Amazon MQ

## English Short Summary

**Amazon MQ** is a managed message broker service for **RabbitMQ** and **ActiveMQ**, designed for migrating on-premises applications that use open protocols (MQTT, AMQP, STOMP, Openwire, WSS) to AWS without re-engineering to SQS/SNS APIs. Unlike SQS/SNS, Amazon MQ doesn't scale as well and runs on servers. It supports both **queue** (like SQS) and **topic** (like SNS) features within a single broker. For high availability, it uses a **Multi-AZ Active-Standby** architecture with **Amazon EFS** as backend storage, ensuring data persistence during failover.
