---
title: "Bastion Hosts Hands On"
lectureId: 326
section: "s27"
sectionTitle: "Networking - VPC"
date: "2026-03-05"
tags: [bastion-host, ssh, hands-on, private-subnet]
---

## 中文短总结

实操演示 Bastion Host：①创建密钥对（demo key pair）②在私有子网启动 EC2，安全组允许来自 Bastion Host SG 的 SSH③通过 EC2 Instance Connect 连接 Bastion Host④在 Bastion Host 上创建密钥文件（vi/nano），设置权限（chmod 400）⑤从 Bastion Host SSH 到私有实例：`ssh ec2-user@<私有IP> -i demo-key-pair.pem`⑥验证成功连接私有实例⑦ping google.com 失败 — 私有实例无出站互联网访问，后续通过 NAT 解决。

## English Short Summary

Hands-on Bastion Host: (1) Create key pair; (2) Launch EC2 in private subnet, SG allows SSH from Bastion Host SG; (3) Connect to Bastion Host via EC2 Instance Connect; (4) Create key file on Bastion Host, set permissions (chmod 400); (5) SSH from Bastion Host to private instance: `ssh ec2-user@<privateIP> -i key.pem`; (6) Successfully connected; (7) ping google.com fails — private instance has no outbound internet, solved by NAT in later lectures.
