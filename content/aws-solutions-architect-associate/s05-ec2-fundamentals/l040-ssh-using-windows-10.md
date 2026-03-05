---
title: "How to SSH using Windows 10"
lectureId: 40
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ssh", "windows-10", "powershell", "ec2", "hands-on"]
---

## 中文短总结

Windows 10 可直接使用 SSH 命令（PowerShell 或 CMD）。进入 .pem 文件所在目录，运行 `ssh -i EC2Tutorial.pem ec2-user@<公网IP>`。如遇权限问题，需修改 .pem 文件的 Windows 权限：右键 Properties → Security → Advanced → 禁用继承 → 删除其他用户 → 仅保留自己拥有 Full Control。确认首次连接信任后即可进入实例。

## English Short Summary

Windows 10 supports SSH natively in PowerShell/CMD. Navigate to the .pem file directory and run `ssh -i EC2Tutorial.pem ec2-user@<public-IP>`. For permission issues: right-click the .pem file → Properties → Security → Advanced → disable inheritance → remove other users → keep only yourself with Full Control. Accept the host on first connection to access the instance.
