---
title: "How to SSH using Windows"
lectureId: 39
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ssh", "windows", "putty", "ec2", "hands-on"]
---

## 中文短总结

使用 PuTTY 在 Windows（7/8 或更高版本）上 SSH 连接 EC2：先安装 PuTTY，用 PuTTYgen 将 .pem 文件转换为 .ppk 格式（Load → Save private key）。在 PuTTY 中配置：Host Name 输入 `ec2-user@<公网IP>`；在 SSH → Auth 中指定 .ppk 文件路径。保存 Session 配置后点击 Open 连接。首次连接确认信任主机。PuTTY 功能等同 SSH，课程中提到 SSH 时 Windows 用户可用 PuTTY 替代。

## English Short Summary

SSH into EC2 from Windows using PuTTY: install PuTTY, convert .pem to .ppk using PuTTYgen (Load → Save private key). Configure PuTTY with `ec2-user@<public-IP>` as hostname and specify the .ppk file in SSH → Auth. Save the session profile and click Open. Accept the host on first connection. PuTTY is equivalent to SSH—use it whenever the course mentions SSH.
