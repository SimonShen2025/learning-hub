---
title: "Amazon Kinesis Data Streams - Hands On"
lectureId: 193
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [kinesis, data-streams, hands-on, cloudshell, cli, aws]
---

## 中文短总结

本实操通过 CloudShell/CLI 演示 Kinesis Data Streams 的使用：创建 1 个 Shard 的 Provisioned 模式数据流（DemoStream），使用 `put-record` API 发送消息（指定 partition key），通过 `describe-stream` 获取 Shard ID，使用 `get-shard-iterator`（TRIM_HORIZON 从头读取）和 `get-records` 消费数据（返回 base64 编码）。对比了 Provisioned 与 On-demand 模式的定价和容量，强调使用后要删除 Stream 避免持续计费。

## English Short Summary

This hands-on demonstrates Kinesis Data Streams via CloudShell/CLI: creating a Provisioned stream with 1 shard (DemoStream), sending records with `put-record` API (specifying partition key and `--cli-binary-format raw-in-base64-out`), consuming data by describing the stream to get the Shard ID, obtaining a shard iterator (TRIM_HORIZON to read from the beginning), and using `get-records` to retrieve base64-encoded data. Compares Provisioned vs On-demand pricing and capacity. Important: delete the stream after the demo to avoid ongoing charges ($0.05/shard/hour).
