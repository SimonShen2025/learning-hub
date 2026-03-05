---
title: "Beanstalk Hands On"
lectureId: 127
section: 11
sectionTitle: "Classic Solutions Architecture Discussions"
date: "2026-03-05"
tags: ["Elastic Beanstalk", "Hands-On", "CloudFormation"]
---

## 中文短总结

本讲演示了创建 Elastic Beanstalk 环境的完整流程。选择 Web Server Environment，Node.js 平台，Sample Application 代码，Single Instance 模式。需创建两个 IAM Role：Beanstalk Service Role 和 EC2 Instance Profile。Beanstalk 通过 **CloudFormation** 在后台创建所有资源（ASG、EC2、Elastic IP、Security Group 等），可在 CloudFormation 控制台查看创建过程和 Application Composer 可视化资源关系。部署完成后通过域名访问应用，并展示了 Health、Logs、Monitoring 等管理功能。可创建多个环境（Dev、Prod）。使用完毕后通过 Delete Application 清理所有资源。

## English Short Summary

This hands-on demonstrates creating an Elastic Beanstalk environment: Web Server tier, Node.js platform, sample application, Single Instance mode. Two IAM roles needed: Beanstalk Service Role and EC2 Instance Profile. Beanstalk uses CloudFormation behind the scenes to create ASG, EC2, Elastic IP, Security Groups, etc. — viewable in CloudFormation console and Application Composer for visual resource mapping. After deployment, the app is accessible via domain name. Management features include Health, Logs, Monitoring, and Configuration. Multiple environments (Dev/Prod) can be created. Clean up by deleting the application.
