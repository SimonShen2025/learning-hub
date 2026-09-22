---
title: "Lab: Create an Azure Function App Resource (Hands-On Lab)"
lectureId: 114
section: 12
sectionTitle: "Build Event Driven Backends with Function Apps"
date: "2026-09-22"
tags: ["azure-functions", "flex-consumption-plan", "azure-portal", "python"]
---

## 中文短总结

在 Azure 门户创建 Function App 资源：托管计划选择 **Flex Consumption**（纯无服务器，可扩展至最多 1000 实例，另有 Functions Premium、App Service 计划、Container Apps 环境等托管方式可选）；运行时栈选择 Python 3.14；实例内存默认 2048 MB（可调整为 512～4096 MB）；操作系统固定为 Linux。部署完成后可在资源的 Functions 标签页查看已定义的函数（初始为空）。

## 中文长总结

### 创建 Function App 资源

- 门户搜索 "Function App" 并点击 Create
- **托管计划**对比：
  - **Flex Consumption Plan**：纯无服务器方案，仅按使用量计费，可扩展至最多 1000 个实例——本课程采用此方案
  - **Functions Premium**：面向更高性能/网络隔离需求场景
  - 也可复用现有 **App Service 计划**或 **Container Apps 环境**来托管 Function App

### 关键配置项

- 资源组：与其他资源保持一致
- Function App 名称（如 AI200FunctionApp），需全局唯一，生成默认域名 `<name>.azurewebsites.net`
- 区域：如 Sweden Central
- 运行时栈：**Python**（其余可选 .NET、Node.js、Go、Java、PowerShell），版本选择 **3.14**
- 实例大小（每实例内存）：默认 2048 MB，可下调至 512 MB 或上调至 4096 MB
- 其余标签页保持默认配置即可

### 部署后确认

- 部署完成的 Function App 资源默认域名即为函数执行入口
- 操作系统为 Linux，托管计划为 Flex Consumption，可查看已分配的实例内存
- 资源的 **Functions** 标签页会列出当前定义的所有函数；初始阶段该列表为空，需要在后续实验中逐一创建具体函数

## English Short Summary

Created an Azure Function App resource via the portal on the **Flex Consumption plan** (fully serverless, scales up to 1000 instances), compared against Functions Premium, dedicated App Service plans, and Container Apps hosting. Configured the Python 3.14 runtime, default 2048 MB instance memory (adjustable 512–4096 MB), and Linux OS. After deployment, the resource exposes a default domain and a Functions blade (initially empty) where individual functions will be created in later labs.
