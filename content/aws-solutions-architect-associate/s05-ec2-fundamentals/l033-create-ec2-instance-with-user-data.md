---
title: "Create an EC2 Instance with EC2 User Data to have a Website Hands On"
lectureId: 33
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ec2", "hands-on", "user-data", "ami", "security-group", "key-pair"]
---

## 中文短总结

首次启动 EC2 实例的完整实操：选择 Amazon Linux 2 AMI（Free Tier）、t2.micro 实例类型；创建 EC2 Tutorial 密钥对（.pem/.ppk）；配置安全组允许 SSH(22) 和 HTTP(80)；设置 8GB gp2 存储（Delete on Termination 默认开启）；粘贴 User Data 脚本安装 HTTPD Web 服务器。通过 http://公网IP 访问网页。演示实例启动/停止/终止操作，以及停止后重启公网 IP 会变化、私网 IP 不变的行为。

## 中文长总结

**启动配置步骤：**
1. **名称**：My First Instance
2. **AMI**：Amazon Linux 2（Free Tier eligible，64-bit x86）
3. **实例类型**：t2.micro（Free Tier，1 vCPU，1 GB RAM）
4. **密钥对**：创建 EC2 Tutorial（RSA 加密；Mac/Linux/Win10 用 .pem，Win7/8 用 .ppk）
5. **安全组**：launch-wizard-1，允许 SSH(22) 和 HTTP(80) 从 anywhere
6. **存储**：8 GB gp2 root volume，Delete on Termination = Yes
7. **User Data**：粘贴脚本安装 HTTPD 并创建 HTML 文件

**访问 Web 服务器：**
- 使用 `http://` + 公网 IPv4 地址（不是 https://）
- 页面显示 "Hello World from [私网IP]"
- 如果页面无内容，等待 5 分钟让 User Data 脚本执行完成

**实例生命周期操作：**
- **Stop**：停止计费，实例状态保留在 EBS 卷上
- **Start**：重新启动，公网 IP 可能会变化
- **Terminate**：彻底删除实例和 EBS 卷
- **重要**：停止后重启，公网 IPv4 会改变，私网 IPv4 不变

## English Short Summary

Complete hands-on launching an EC2 instance: select Amazon Linux 2 AMI (Free Tier), t2.micro type, create a key pair, configure security group for SSH(22) and HTTP(80), set 8GB gp2 storage with delete-on-termination. Paste User Data script to install HTTPD web server. Access via http://public-IP. Demonstrated start/stop/terminate operations—public IP changes after stop/start, private IP remains constant.
