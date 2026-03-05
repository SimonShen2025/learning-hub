---
title: "Elastic Network Interfaces (ENI) - Hands On"
lectureId: 52
section: 6
sectionTitle: "EC2 - Solutions Architect Associate Level"
date: "2026-03-05"
tags: ["ec2", "eni", "networking", "hands-on"]
---

## 中文短总结

本实操演示了 ENI 的使用：查看 EC2 实例的默认网络接口，手动创建新 ENI（需选择同一 AZ 的子网和安全组），将其附加到实例获得第二个 Private IPv4，然后在两个实例间移动 ENI 实现故障转移。关键发现：手动创建的 ENI 在实例终止后仍然保留，而随实例自动创建的 ENI 会被自动删除。

## English Short Summary

Hands-on demo of ENI operations: viewing default network interfaces on EC2, creating a custom ENI (must be in same AZ subnet), attaching it to gain a secondary Private IPv4, and moving it between instances for failover. Key finding: manually created ENIs persist after instance termination, while auto-created ENIs are automatically deleted with the instance.
