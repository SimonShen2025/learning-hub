---
title: "SSM Session Manager"
lectureId: 375
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [ssm, session-manager, secure-shell, no-ssh, systems-manager]
---

## 中文短总结

SSM Session Manager：无需 SSH/端口 22/Bastion Host/SSH Key 即可安全 Shell 访问 EC2 和 on-premises 服务器。EC2 通过 **SSM Agent** 连接 Session Manager 服务。需要：①EC2 附加 IAM 角色（AmazonSSMManagedInstanceCore 策略）②**安全组无需开放任何端口**（port 22 关闭）。支持 Linux/macOS/Windows。日志发送到 S3/CloudWatch Logs。三种 EC2 访问方式对比：SSH（需 key + port 22）→ EC2 Instance Connect（临时上传 key + port 22）→ **Session Manager（无 key + 无 port 22 = 最安全）**。

## 中文长总结

SSM Session Manager 是最安全的 EC2 Shell 访问方式。

**三种 EC2 访问方式对比：**

| 方式 | SSH Key | Port 22 | 安全性 |
|------|---------|---------|--------|
| SSH | ✅ 需要 | ✅ 开放 | 低 |
| EC2 Instance Connect | ❌ 临时上传 | ✅ 开放 | 中 |
| **SSM Session Manager** | ❌ 不需要 | ❌ 关闭 | **最高** |

**前提条件：**
1. EC2 运行 SSM Agent（Amazon Linux 2 默认已安装）
2. IAM 角色附加 `AmazonSSMManagedInstanceCore` 策略
3. 安全组可以**完全无入站规则**

**功能：**
- Fleet Manager 查看所有受管节点
- Session 历史记录保存
- 日志 → S3 / CloudWatch Logs

## 考试要点

- Session Manager = 无 SSH、无 port 22、无 Bastion Host
- 需要 IAM 角色而不是 SSH Key
- SG 无需开放任何端口
- 最安全的 EC2 访问方式

## English Short Summary

SSM Session Manager: secure shell access to EC2/on-premises **without SSH, port 22, bastion hosts, or SSH keys**. EC2 connects via **SSM Agent** to Session Manager. Requires: IAM role with `AmazonSSMManagedInstanceCore` policy — **SG needs no inbound rules at all**. Supports Linux/macOS/Windows. Logs → S3/CloudWatch. **Most secure EC2 access method** compared to SSH (needs key + port 22) and EC2 Instance Connect (needs port 22).
