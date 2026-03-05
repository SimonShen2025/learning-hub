---
title: "SQS - Message Visibility Timeout"
lectureId: 185
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [sqs, visibility-timeout, change-message-visibility, aws]
---

## 中文短总结

消息可见性超时（Visibility Timeout）是 SQS 的关键概念：消息被某消费者轮询后，在可见性超时期间（默认 30 秒）对其他消费者不可见。超时后若消息未被删除，则重新变为可见（可能导致重复处理）。消费者可调用 ChangeMessageVisibility API 延长超时时间。超时范围为 0 秒到 12 小时。

## 中文长总结

### 可见性超时机制

当消费者通过 ReceiveMessage API 轮询到一条消息后，该消息在 **Visibility Timeout**（默认 30 秒）期间对其他消费者**不可见**：

```
消费者A 轮询消息 → 消息变为不可见
        |-- Visibility Timeout (30s) --|
        在此期间其他消费者的 ReceiveMessage 不会返回该消息
        超时后若未删除 → 消息重新变为可见 → 可能被消费者B或消费者A再次接收
```

### 关键行为

- 超时期间内消费者必须处理并**删除**消息，否则消息会被**重复处理**
- 如果消费者需要更多时间处理消息，应调用 **ChangeMessageVisibility API** 延长超时
- 消息的 **receive count** 会随着每次被接收而增加

### 超时设置权衡

| 设置过高（如数小时） | 设置过低（如几秒） |
|----------------------|-------------------|
| 消费者崩溃后，消息需要很长时间才能重新变为可见 | 消费者可能来不及处理，导致消息被多个消费者重复处理 |

**最佳实践**：设置合理的默认值，并让消费者在需要时调用 ChangeMessageVisibility API。

### 配置范围

- 最小值：**0 秒**（不推荐）
- 最大值：**12 小时**
- 默认值：**30 秒**

## 考试要点

- **Visibility Timeout** 默认 **30 秒**，范围 0 秒 ~ 12 小时
- 超时期间消息对其他消费者**不可见**
- 超时到期且消息未删除 → 消息重新可见 → **可能重复处理**
- 消费者需要更多时间 → 调用 **ChangeMessageVisibility API**
- 考试场景：消息被多次处理 → 检查 Visibility Timeout 是否设置过低

## English Short Summary

**Message Visibility Timeout** is a key SQS concept: once a consumer polls a message, it becomes invisible to other consumers for the duration of the timeout (default **30 seconds**, range 0s–12h). If the message isn't deleted before the timeout expires, it becomes visible again and may be processed by another consumer (duplicate processing). Consumers can call the **ChangeMessageVisibility API** to extend the timeout if they need more processing time. Setting the timeout too high delays re-processing after crashes; too low causes duplicate processing.
