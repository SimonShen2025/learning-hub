---
title: "Amazon Data Firehose - Hands On"
lectureId: 195
section: "s17"
sectionTitle: "Decoupling applications: SQS, SNS, Kinesis, Active MQ"
date: "2026-03-05"
tags: [data-firehose, hands-on, s3, buffer, delivery-stream, aws]
---

## 中文短总结

本实操演示了以 Kinesis Data Streams 为数据源、S3 为目标的 Data Firehose 配置流程：选择源（Data Stream / Direct PUT）、可选 Lambda 转换、配置目标（S3/OpenSearch/Redshift/HTTP 端点/第三方）、设置 Buffer（大小和时间间隔，最小 60 秒）、压缩和加密选项。通过 CloudShell 向 Data Stream 发送记录，验证数据在 60 秒缓冲后写入 S3。强调使用后必须先删除 Delivery Stream 再删除 Data Stream 以避免费用。

## English Short Summary

This hands-on configures a Data Firehose delivery stream with Kinesis Data Streams as source and S3 as destination. Key steps: selecting source (Data Stream ARN), optional Lambda transformation, configuring format conversion (Parquet/ORC), setting the destination S3 bucket, and configuring buffer hints (size: 1 MB, interval: 60 seconds minimum). After sending records to the Data Stream via CloudShell `put-record`, data appears in S3 after the 60-second buffer flush interval, partitioned by date. The demo shows IAM role auto-creation for Firehose permissions. Cleanup: delete the delivery stream first, then the Kinesis Data Stream to avoid ongoing charges.
