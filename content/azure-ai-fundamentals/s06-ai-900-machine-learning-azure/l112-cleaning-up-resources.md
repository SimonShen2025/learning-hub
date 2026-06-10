---
title: "Cleaning Up Azure Resources"
lectureId: 112
section: 6
sectionTitle: "AI-900 - Describe fundamental principles of machine learning on Azure"
date: "2026-06-10"
tags: [azure, cleanup, resource-management, cost]
---

## 中文短总结

资源清理：1) Compute → 删除 Compute Instance；2) 删除 Kubernetes Cluster（耗时几分钟）；3) 最简方法：Resource Groups → 选择 ML 资源组 → Delete Resource Group（删除组内所有资源）。重要：确保删除所有计算资源避免持续计费。删除资源组 = 删除所有包含的资源。

## English Short Summary

Resource cleanup: 1) Delete Compute Instance; 2) Delete Kubernetes Cluster; 3) Simplest: Resource Groups → select ML resource group → Delete Resource Group (deletes all contained resources). Important: ensure all compute resources deleted to avoid ongoing charges. Deleting resource group = deleting all resources within it.
