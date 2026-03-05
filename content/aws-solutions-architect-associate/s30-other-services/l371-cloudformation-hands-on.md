---
title: "CloudFormation - Hands On"
lectureId: 371
section: "s30"
sectionTitle: "Other Services"
date: "2026-03-05"
tags: [cloudformation, hands-on, stack, application-composer]
---

## 中文短总结

CloudFormation 实操：①创建 Stack：上传 YAML 模板（定义 EC2 实例+AZ+AMI+实例类型）→ Application Composer 可视化②设置 Stack Name + Tags → 创建资源③自动标签应用到所有资源④**更新 Stack**：上传新模板（添加 SG + Elastic IP）→ Change Set 预览变更（哪些添加/修改/替换）→ 提交后 CloudFormation 自动按正确顺序执行⑤Replacement=true 表示 EC2 会被重建⑥**删除 Stack**：不要手动删除资源，直接删除 Stack → CloudFormation 按正确顺序清理所有资源。

## English Short Summary

CloudFormation hands-on: (1) Create Stack: upload YAML template (EC2 + AZ + AMI + instance type), view in Application Composer; (2) Set stack name + tags → resources created automatically; (3) Auto-tagging on all resources; (4) **Update Stack**: upload new template (add SG + EIP) → **Change Set** preview (add/modify/replace) → submit → CloudFormation handles order; (5) Replacement=true means EC2 is recreated; (6) **Delete Stack**: never delete resources manually — delete stack and CloudFormation cleans up in correct order.
