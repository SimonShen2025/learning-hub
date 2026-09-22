---
title: "Understanding PVs (Persistent Volumes) and PVCs (Persistent Volume Claims)"
lectureId: 46
section: 5
sectionTitle: "Deploy and Manage AI Apps on Azure Kubernetes Service (AKS)"
date: "2026-09-22"
tags: ["kubernetes", "persistent-volume", "persistent-volume-claim", "aks"]
---

## 中文短总结

容器和 Pod 是无状态、短暂的，重启会丢失数据。持久卷（Persistent Volume, PV，如 Azure 文件共享）提供外部存储解决方案，供容器化数据库等应用挂载以保留数据；持久卷声明（Persistent Volume Claim, PVC）是应用对存储的请求。供给方式分为静态供给（管理员预先注册 PV）与动态供给（按需自动创建 PV，需管理员启用）。

## 中文长总结

### 问题背景

- 假设 Kubernetes 集群中运行容器化数据库（而非云托管数据库服务），容器/Pod 具有无状态、短暂（ephemeral）特性
- 若数据库容器故障重启，数据默认不会保留，除非挂载到外部持久化存储

### 持久卷（Persistent Volume, PV）

- 集群中的一块存储资源，可由管理员预先手动供给，或通过存储类（Storage Class）动态供给
- 典型示例：Azure 文件共享（Azure File Share）、Azure 存储账户等
- 容器/Pod 重启后可重新挂载到该 PV，恢复此前的数据

### 持久卷声明（Persistent Volume Claim, PVC）

- 用户（容器化应用）对存储资源发出的请求，即"声明"需要使用某个 PV

### 供给方式

- **静态供给（Static Provisioning）**：管理员预先注册一批 PV，开发者可即时对其发起 PVC
- **动态供给（Dynamic Provisioning）**：当没有匹配的静态 PV 可满足 PVC 时，集群按需自动创建卷；该功能需管理员显式启用，非默认开启

### YAML 清单示例要点

- `kind: PersistentVolumeClaim`
- `accessMode: ReadWriteMany`：适用于多个 Pod 同时对同一 PV 进行读写的场景
- `resources.requests.storage`：申请的存储容量（如 1Gi）
- `storageClassName`：指定对应的存储类（如 Azure File Share）

## English Short Summary

Containers and pods are stateless and ephemeral, so data is lost on restart unless mounted to external storage. A Persistent Volume (PV) — such as an Azure File Share — provides that external storage, while a Persistent Volume Claim (PVC) is an application's request to use one. PVs can be statically provisioned (pre-registered by an administrator) or dynamically provisioned (auto-created on demand when no static PV matches a claim, a feature that must be explicitly enabled). A PVC manifest defines fields like access mode (e.g., ReadWriteMany for multi-pod access), requested storage size, and storage class name.
