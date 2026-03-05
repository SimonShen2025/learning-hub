---
title: "EBS Hands On"
lectureId: 57
section: 7
sectionTitle: "EC2 Instance Storage"
date: "2026-03-05"
tags: ["ebs", "storage", "hands-on"]
---

## 中文短总结

本实操演示了 EBS 卷的使用：查看实例的 Root EBS 卷（8GB），创建新 2GB GP2 卷（必须与 EC2 同一 AZ），将其挂载到实例。验证了跨 AZ 限制——在不同 AZ 创建的卷无法挂载到实例。终止实例后，Root 卷（Delete on Termination=Yes）自动删除，额外挂载的卷（Delete on Termination=No）保留。

## English Short Summary

Hands-on EBS demo: viewing root volume (8GB), creating a new 2GB GP2 volume (must be same AZ as EC2), attaching it. Cross-AZ limitation verified — volumes in different AZ cannot attach to the instance. After termination, root volume (Delete on Termination=Yes) is deleted automatically while additional volumes (Delete on Termination=No) are preserved.
