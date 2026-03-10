---
title: Elastic Network Interfaces (ENI) - Overview
lectureId: 51
section: 6
sectionTitle: EC2 - Solutions Architect Associate Level
date: '2026-03-05'
tags:
  - ec2
  - eni
  - networking
  - vpc
  - failover
important: true
---

## 中文短总结

本讲介绍 Elastic Network Interface（ENI，弹性网络接口）。ENI 是 VPC 中的逻辑组件，代表虚拟网卡，为 EC2 提供网络连接。每个 ENI 可拥有：一个主 Private IPv4 和多个次级 IPv4、每个 Private IP 可关联一个 Elastic IP、一个或多个 Public IPv4、一个或多个安全组、MAC 地址。ENI 可独立创建并动态附加/移动到不同 EC2 实例以实现故障转移，但绑定到特定 AZ。

## 中文长总结

### ENI 基本概念
- ENI = Elastic Network Interface（弹性网络接口）
- VPC 中的逻辑组件，代表虚拟网卡
- 为 EC2 实例提供网络连接，也用于 EC2 之外的其他服务

### ENI 属性
- 一个**主 Private IPv4**，可以有多个次级 Private IPv4
- 每个 Private IPv4 可关联**一个 Elastic IPv4**
- 一个或多个 **Public IPv4**
- 一个或多个**安全组（Security Group）**
- **MAC 地址**

### ENI 的灵活性
- 可**独立于 EC2 实例创建**
- 可**动态附加（on the fly）**到 EC2 实例
- 可在 EC2 实例之间**移动**实现故障转移（failover）
- **绑定到特定 AZ**，不可跨 AZ 使用

### 故障转移场景
- 两个 EC2 实例运行同一应用
- 通过移动 ENI（及其 Private IP）从一个实例到另一个实例
- 实现基于静态 Private IP 的快速网络故障转移

## 考试要点

- ENI 绑定到**特定 AZ**，不可跨 AZ
- ENI 可**独立创建**并在实例间移动 → 用于 failover
- 一个 ENI 可有多个 Private IPv4 和安全组
- EC2 实例可附加**多个 ENI**（主 eth0 + 次级 eth1）
- 移动 ENI = 移动 Private IP → 实现网络层面的故障转移

## English Short Summary

Elastic Network Interfaces (ENI) are logical VPC components representing virtual network cards for EC2 instances. Each ENI can have a primary Private IPv4, secondary IPv4s, Elastic IPs, Public IPs, security groups, and a MAC address. ENIs can be created independently and moved between EC2 instances for failover purposes, but are bound to a specific AZ.
