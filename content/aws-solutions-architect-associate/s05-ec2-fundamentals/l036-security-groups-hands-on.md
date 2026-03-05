---
title: "Security Groups Hands On"
lectureId: 36
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ec2", "security-group", "hands-on", "firewall"]
---

## 中文短总结

实操验证安全组行为：删除 HTTP(80) 入站规则后网页访问超时，重新添加后恢复。演示安全组在 EC2 控制台的查看和编辑方式（实例 Security 标签页和左侧 Security Groups 菜单）。可自定义端口范围和来源（CIDR、安全组引用、My IP）。一个安全组可附加到多个实例，实例也可绑定多个安全组。默认出站规则允许所有流量。

## English Short Summary

Hands-on validating security group behavior: removing the HTTP(80) inbound rule causes a timeout on web access; re-adding it restores access. Demonstrated viewing/editing security groups via the instance Security tab and left-side Security Groups menu. Custom port ranges and sources (CIDR, security group references, My IP) can be configured. Security groups can be shared across multiple instances and vice versa. Default outbound rule allows all traffic.
