---
title: "Private vs Public vs Elastic IP Hands On"
lectureId: 48
section: 6
sectionTitle: "EC2 - Solutions Architect Associate Level"
date: "2026-03-05"
tags: ["ec2", "networking", "elastic-ip", "hands-on"]
---

## 中文短总结

本实操演示了 IP 地址在 EC2 中的行为：Private IP 无法从外部 SSH 连接（因为不在同一私有网络），停止再启动实例会更换 Public IP。通过分配 Elastic IP 并关联到实例，Public IP 保持不变，即使停止/启动也不改变。演示了 Elastic IP 的分配、关联、解除关联和释放流程。注意 AWS 对 Public IPv4 收费约 $0.005/小时（约 $3.50/月），免费套餐提供 750 小时/月。

## English Short Summary

Hands-on demonstrating EC2 IP behaviors: Private IPs cannot be used for SSH from outside the private network. Stopping/starting an instance changes its Public IP. Allocating and associating an Elastic IP keeps the Public IP fixed across stop/start cycles. Demo covers allocating, associating, disassociating, and releasing Elastic IPs. AWS charges ~$0.005/hr for public IPv4 addresses (~$3.50/month); free tier includes 750 hrs/month.
