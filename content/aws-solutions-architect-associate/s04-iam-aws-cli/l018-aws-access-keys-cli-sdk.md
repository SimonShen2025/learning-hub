---
title: "AWS Access Keys, CLI and SDK"
lectureId: 18
section: 4
sectionTitle: "IAM & AWS CLI"
date: "2026-03-05"
tags: ["iam", "access-keys", "cli", "sdk", "security"]
---

## 中文短总结

介绍访问 AWS 的三种方式：管理控制台（用户名/密码+MFA）、CLI 命令行界面、SDK 软件开发工具包。CLI 和 SDK 通过 Access Key 认证（Access Key ID 类似用户名，Secret Access Key 类似密码）。Access Key 通过管理控制台生成，严禁共享。AWS CLI 基于 Python SDK（Boto）构建，可通过命令行管理 AWS 资源并自动化任务。

## 中文长总结

**三种 AWS 访问方式：**
1. **管理控制台（Management Console）**：Web 界面，通过用户名+密码+MFA 保护
2. **CLI（Command Line Interface）**：命令行工具，通过 Access Key 保护，直接访问 AWS 公共 API
3. **SDK（Software Development Kit）**：编程语言库，嵌入应用代码中调用 AWS API，同样使用 Access Key

**Access Key（访问密钥）：**
- 通过管理控制台生成
- 由两部分组成：Access Key ID（类似用户名）和 Secret Access Key（类似密码）
- 每个用户负责自己的 Access Key
- **绝对不能共享**——同事可以生成自己的 Access Key

**AWS CLI：**
- 命令行工具，所有命令以 `aws` 开头（如 `aws s3 cp`）
- 直接访问 AWS 服务的公共 API
- 可编写脚本管理资源、自动化任务
- 开源项目，代码在 GitHub 上
- CLI 本身基于 AWS SDK for Python（Boto）构建

**AWS SDK：**
- 特定编程语言的库集合
- 支持多种语言：JavaScript、Python、PHP、.NET、Ruby、Java、Go、Node.js、C++ 等
- 还有 Mobile SDK（Android/iOS）和 IoT Device SDK
- 将 AWS API 调用嵌入应用程序代码中

## 考试要点

- 三种 AWS 访问方式：控制台、CLI、SDK
- CLI 和 SDK 都使用 Access Key 认证
- Access Key = Access Key ID + Secret Access Key
- 绝不共享 Access Key
- AWS CLI 构建于 AWS SDK for Python（Boto）之上

## English Short Summary

Three ways to access AWS: Management Console (username/password + MFA), CLI (command-line, protected by access keys), and SDK (language-specific libraries embedded in application code). Access keys consist of an Access Key ID and Secret Access Key generated via the console—never share them. The AWS CLI is built on the Python SDK (Boto) and provides direct access to AWS public APIs for resource management and automation.
