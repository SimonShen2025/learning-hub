---
title: "Settle Messages after Processing - Complete, Abandon, Defer and Dead-Lettering"
lectureId: 99
section: 10
sectionTitle: "Process AI Operations with Azure Service Bus"
date: "2026-09-22"
tags: ["service-bus", "peek-lock", "dead-letter-queue", "message-settlement"]
---

## 中文短总结

在 Peek-Lock 模式下，消费者处理完消息后需要执行结算操作：Complete（成功处理，从队列移除消息）、Abandon（遇到瞬时错误，释放锁使消息可被其他消费者重试）、Dead-Letter（遇到无法通过重试解决的问题，如模型部署不存在等结构性错误，将消息移入死信队列等待人工介入）、Defer（消费者当前无法处理但计划稍后处理，消息保留在主队列但脱离常规投递流程，需用专门函数显式取回）。

## 中文长总结

### Complete（完成）

- 用于消费者成功执行业务逻辑后的正常路径
- 在处理器完成推理并将结果写入结果存储后调用，通知 Service Bus 该消息已成功处理，可从队列中移除

### Abandon（放弃）

- 用于消费者遇到**瞬时性**错误或故障（如模型服务超时、临时网络故障），这类问题重试后可能会成功
- 调用后会释放消息上的锁，使该消息可被投递给下一个（或同一个）消费者重新尝试

### Dead-Letter（死信）

- 用于遇到**非瞬时性、需人工介入**才能解决的问题，例如 JSON 载荷中指定的模型部署（如 GPT-5.2）在 Microsoft Foundry 资源中根本不存在
- 即使反复放弃重试，这类错误也不会自行解决，因此应直接调用死信函数将消息从主队列移至死信队列，退出正常处理流程，保留原始消息供后续人工检查和修正（如将模型名称改回 GPT-4.1）
- 死信操作会立即将消息从常规处理循环中移除，不再消耗重试次数

### Defer（延迟）

- 适用于消费者当前无法处理但预计稍后能够处理的场景
- 消息被推回队列，脱离常规投递流程，但**不会**进入死信队列；仍留在主队列中
- 需要使用专门的"接收已延迟消息"函数（receive deferred messages）显式取回并处理这些消息

## English Short Summary

Under Peek-Lock mode, consumers settle messages in one of four ways: Complete (success — remove from queue), Abandon (transient error — release the lock for retry), Dead-Letter (non-retryable error, e.g. a nonexistent model deployment — move to the dead letter queue for manual fixes without consuming retries), and Defer (can't process now, will later — message stays in the main queue, retrieved via a dedicated receive-deferred call).
