---
title: "S3 Requester Pays"
lectureId: 144
section: 13
sectionTitle: "Advanced Amazon S3"
date: "2026-03-05"
tags: ["S3", "Requester Pays", "Cost"]
---

## 中文短总结

本讲介绍 S3 Requester Pays 功能。默认情况下，Bucket 所有者同时承担存储费和数据传输费。启用 Requester Pays 后，**请求者支付下载的网络传输费**，所有者仍支付存储费。适用于与其他账号共享大型数据集的场景。**前提条件**：请求者必须是 **AWS 认证用户**（非匿名），AWS 才能向请求者计费。

## 中文长总结

### 默认计费模式
- Bucket 所有者支付：存储费 + 数据传输费

### Requester Pays 模式
- **所有者**：只支付存储费
- **请求者**：支付下载的网络传输费

### 前提条件
- 请求者必须是 **AWS 认证用户**（非匿名）
- AWS 通过认证信息识别并向请求者计费

### 适用场景
- 与其他 AWS 账号共享大型数据集

## 考试要点

- Requester Pays = 请求者支付**网络传输费**
- 请求者必须是 **AWS 认证用户**
- 所有者仍支付存储费

## English Short Summary

S3 Requester Pays shifts the network transfer costs for downloading objects from the bucket owner to the requester. The owner still pays for storage. The requester must be an authenticated AWS user (not anonymous) so AWS can bill them. Use case: sharing large datasets with other AWS accounts.
