---
title: "Amazon ECS - Clean Up - Hands On"
lectureId: 204
section: "s18"
sectionTitle: "Containers on AWS: ECS, Fargate, ECR & EKS"
date: "2026-03-05"
tags: [ecs, cleanup, hands-on, cloudformation, aws]
---

## 中文短总结

ECS 清理流程：（1）停止 Service — 先将 desired tasks 设为 0，再删除 Service（触发 CloudFormation 删除 ECS Service、ALB、Listener、安全组和 Target Group）；（2）等待 Service 完全删除后，删除 Cluster（CloudFormation 删除 Capacity Provider、ASG、Launch Template）；（3）Task Definition 无费用，可选择保留或注销（Deregister）。

## English Short Summary

ECS cleanup steps: (1) **Delete Service** — set desired tasks to 0, then delete (triggers CloudFormation to remove ECS service, ALB, listener, security group, target groups); (2) Wait for service deletion to complete, then **Delete Cluster** (CloudFormation removes capacity provider, ASG, launch templates); (3) **Task Definitions** cost nothing and can be left as-is or deregistered via Actions → Deregister. All deletions are orchestrated through CloudFormation stacks.
