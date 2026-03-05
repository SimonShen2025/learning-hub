---
title: "EC2 Instance Connect"
lectureId: 42
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ec2", "instance-connect", "ssh", "browser"]
---

## 中文短总结

EC2 Instance Connect 是基于浏览器的 SSH 替代方案：选中实例 → 点击 Connect → 选择 EC2 Instance Connect → 连接。使用 Amazon Linux 2 时默认用户名为 ec2-user，无需管理 SSH 密钥（系统自动上传临时密钥）。底层仍依赖 SSH，因此安全组必须开放端口 22（需同时允许 IPv4 和 IPv6 的 SSH 入站规则）。适用于所有操作系统，课程后续主要使用此方式。

## English Short Summary

EC2 Instance Connect provides browser-based SSH: select instance → Connect → EC2 Instance Connect tab → Connect. Default username ec2-user is auto-detected for Amazon Linux 2. No SSH key management needed—a temporary key is uploaded automatically. Requires port 22 open in the security group (both IPv4 and IPv6 rules may be needed). Works on all OS platforms and is the primary connection method used throughout the course.
