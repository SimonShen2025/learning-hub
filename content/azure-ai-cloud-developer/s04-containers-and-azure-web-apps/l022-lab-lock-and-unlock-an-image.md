---
title: "Lab: Lock and Unlock an Image (Hands-On Lab)"
lectureId: 22
section: 4
sectionTitle: "Containers and Azure Web Apps"
date: "2026-09-22"
tags: ["azure-container-registry", "azure-cli", "hands-on-lab"]
---

## 中文短总结

本实验演示如何通过 Azure CLI 锁定/解锁 ACR 中的镜像，防止生产环境镜像被误删或误改：`az acr repository update --name $ACR_NAME --image <repo:tag> --write-enabled false` 锁定，设为 `true` 解锁。

## 中文长总结

### 问题背景

- ACR 中的镜像默认处于"解锁"（unlocked）状态，若该镜像正在支撑生产应用，可能被误删导致应用重启时镜像缺失

### 锁定镜像

- 命令：`az acr repository update --name $ACR_NAME --image aoai-python-app:v1 --write-enabled false`
- 锁定后尝试在门户中删除该镜像版本会报错："could not delete the manifest ... registry disallowed operation"，因为镜像处于锁定状态

### 解锁镜像

- 命令：将 `--write-enabled` 参数改为 `true`，即可解锁镜像，允许后续编辑、更新推送或删除

## 考试要点

- ACR 镜像可通过 `write-enabled` 属性锁定/解锁，防止生产镜像被误删或篡改
- 锁定状态下尝试删除会返回 "registry disallowed operation" 错误

## English Short Summary

Hands-on lab demonstrating how to lock and unlock a container image in ACR via the Azure CLI to protect production images from accidental deletion or edits: `az acr repository update --name $ACR_NAME --image <repo:tag> --write-enabled false` locks the image (deletion then fails with a "registry disallowed operation" error), and setting `--write-enabled true` unlocks it again.
