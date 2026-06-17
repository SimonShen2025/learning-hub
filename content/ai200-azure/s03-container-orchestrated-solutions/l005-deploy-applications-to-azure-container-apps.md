---
title: "Deploy applications to Azure Container Apps"
lectureId: 5
section: 3
sectionTitle: "Implement container-orchestrated solutions"
date: "2026-06-17"
tags: ["Container-Apps", "ACA", "ingress", "revisions", "managed-identity"]
---

## 中文短总结

Azure Container Apps (ACA) 结合 App Service 易用性与 K8s 部分能力。核心概念：**Environment**（类似 App Service Plan，多 app 共享边界）→ **Container App**。部署需配置 **Ingress**（target port 5000、外部流量）。每次配置/镜像变更产生新 **Revision**，可分流 traffic，非覆盖式更新。环境变量/Key Vault secret 也通过 revision 生效。CLI 扩展：`az extension add --name containerapp`。

## 中文长总结

### ACA vs App Service vs AKS
| | App Service | Container Apps | AKS |
|--|-------------|----------------|-----|
| 复杂度 | 低 | 中 | 高 |
| 缩放到零 | 否 | **是** | 可配置 |
| KEDA 事件缩放 | 否 | **内置** | 需配置 |
| YAML/manifest | 否 | 可选 | **必须** |

### Portal 部署流程
1. Create → **Container Apps**
2. 创建或选择 **Environment**（secure boundary，类似 plan）
3. 镜像来源：ACR，选 registry/repo/tag
4. **Managed Identity** 自动创建（可替代 admin creds）
5. **Ingress**：Enabled，Traffic: Accept from anywhere，**Target port 5000**
6. 可选 environment variables

### Revision 模型（考试重点）
- 任何变更（镜像、env、资源）→ **Save as New Revision**
- 多 revision 可并存，**traffic splitting**（100%/0% 等）
- 类似 K8s rollout + 蓝绿，但 Portal/CLI 原生支持
- Revisions 页查看 active revision 和流量分配

### 环境变量与 Secret
- Portal → Container → **Environment variables**
- 可从 **Azure Key Vault** 引用 secret
- 保存 = 新 revision

### CLI 前置
```bash
az extension add --name containerapp
az containerapp env create -g rg -n myenv -l eastus
az containerapp create ...  # 见 L006 完整示例
```

## 考试要点

- **Container Apps Environment** ≈ 托管边界，多个 app 共享
- App 名称 **不必全局唯一**（Azure 追加唯一后缀）
- **Ingress target port** 必须匹配容器监听端口
- **Revision**：配置变更不覆盖，创建新 revision + traffic 分配
- Managed Identity 拉 ACR 镜像（生产）；admin creds 仅 demo
- 与 App Service 区别：scale-to-zero、KEDA、revision traffic split

## English Short Summary

Azure Container Apps (ACA) blends App Service simplicity with Kubernetes-like features. Deploy into a Container Apps Environment (shared boundary). Configure Ingress with correct target port (e.g., 5000). Every config or image change creates a new Revision with traffic splitting—not an in-place overwrite. Env vars and Key Vault secrets apply via revisions. Requires az extension add --name containerapp. Key exam differentiators vs App Service: scale-to-zero, built-in KEDA, revision-based deployments.
