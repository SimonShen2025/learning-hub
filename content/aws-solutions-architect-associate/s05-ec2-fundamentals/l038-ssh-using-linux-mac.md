---
title: "How to SSH using Linux or Mac"
lectureId: 38
section: 5
sectionTitle: "EC2 Fundamentals"
date: "2026-03-05"
tags: ["ssh", "linux", "mac", "ec2", "hands-on"]
---

## 中文短总结

在 Linux/Mac 上 SSH 连接 EC2 实例的步骤：确保 .pem 文件名无空格；在终端进入 .pem 文件所在目录；首次需运行 `chmod 0400 EC2Tutorial.pem` 修改文件权限；然后执行 `ssh -i EC2Tutorial.pem ec2-user@<公网IP>`。ec2-user 是 Amazon Linux 2 的默认用户名。首次连接会提示信任主机，输入 yes。退出使用 `exit` 或 Ctrl+D。注意：停止/启动实例后公网 IP 会变。

## English Short Summary

SSH into EC2 from Linux/Mac: ensure the .pem file has no spaces in the name, navigate to its directory, run `chmod 0400 EC2Tutorial.pem` to set permissions, then `ssh -i EC2Tutorial.pem ec2-user@<public-IP>`. Accept the host fingerprint on first connection. The ec2-user is the default Amazon Linux 2 username. Exit with `exit` or Ctrl+D. Remember: public IP changes after stop/start.
