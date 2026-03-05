---
title: "NAT Instances Hands On"
lectureId: 328
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [nat-instance, hands-on, route-table]
---

## 中文短总结

实操演示 NAT Instance：①使用社区 AMI（搜索 NAT）启动 EC2②配置安全组允许私有子网的 HTTP/HTTPS/ICMP③禁用 Source/Destination Check（Actions → Networking → Change source/dest check → Stop）④编辑私有路由表：0.0.0.0/0 → NAT Instance⑤验证：通过 Bastion Host SSH 到私有实例，curl google.com 和 ping 成功⑥注意需添加 ICMP 规则才能 ping。NAT Instance 停止后路由变成 blackhole（黑洞）。

## English Short Summary

Hands-on NAT Instance: (1) Launch EC2 from community AMI (search "NAT"); (2) SG allows HTTP/HTTPS/ICMP from VPC CIDR; (3) Disable Source/Destination Check; (4) Private route table: 0.0.0.0/0 → NAT instance; (5) Verify via Bastion Host: curl/ping google.com works from private instance; (6) Need ICMP rule for ping. When NAT instance stops, route becomes "blackhole" — showing why managed NAT Gateway is better.
