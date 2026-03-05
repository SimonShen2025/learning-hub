---
title: "IAM Roles Hands On"
lectureId: 26
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "roles", "ec2", "hands-on"]
---

## 中文短总结

实操创建 IAM Role：在 IAM 控制台选择 Roles → Create role，选择 AWS service 类型，指定用于 EC2 服务，附加 IAMReadOnlyAccess 策略，命名为 DemoRoleForEC2。Role 创建后可在详情页验证权限配置。该 Role 将在 EC2 章节中实际使用。

## English Short Summary

Hands-on creating an IAM Role: navigate to IAM Roles → Create role, select AWS service type for EC2, attach IAMReadOnlyAccess policy, name it DemoRoleForEC2. The role's trusted entity is the EC2 service. Verify permissions in the role details page. This role will be used in the EC2 section.
