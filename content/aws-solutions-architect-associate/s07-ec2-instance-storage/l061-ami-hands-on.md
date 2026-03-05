---
title: "AMI Hands On"
lectureId: 61
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["ami", "ec2", "hands-on"]
---

## 中文短总结

本实操演示了 AMI 创建和使用：启动实例并通过 User Data 安装 Apache（不含 index 文件），等待 Apache 测试页出现后创建 AMI（demo image）。然后从该 AMI 启动新实例，User Data 仅写入 index.html（无需重装 Apache），启动明显更快。这展示了 AMI 的核心价值——预装软件加速实例启动。

## English Short Summary

Hands-on AMI creation: launched an instance with User Data installing Apache (without index), created AMI after Apache test page appeared. Launched a new instance from the AMI with User Data only writing index.html (no Apache reinstall needed) — significantly faster boot. This demonstrates AMI's core value: pre-packaged software for accelerated instance startup.
