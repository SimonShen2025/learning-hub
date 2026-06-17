---
title: "Build and run images by using Azure Container Registry Tasks"
lectureId: 3
section: 2
sectionTitle: "Implement container application hosting"
date: "2026-06-17"
tags: ["ACR-tasks", "cloud-build", "CI/CD", "GitHub-trigger", "Azure CLI"]
---

## 中文短总结

ACR Tasks 在云端构建镜像，无需本地 Docker。`az acr build` 一次性 cloud build；`az acr task create` 绑定 GitHub 仓库，commit 触发自动构建，标签用 `{{.Run.ID}}` 动态生成。`az acr task run` 手动触发。需 GitHub PAT 作为 `--git-access-token`。Dockerfile 路径若不在 repo 根目录必须在 task 中正确指定 context/file。

## 中文长总结

### 两种构建方式对比
| 方式 | 命令 | 场景 |
|------|------|------|
| 本地 Docker build | `docker build` + `docker push` | 开发机有 Docker |
| ACR 云端 build | `az acr build` | 无需本地 Docker |
| ACR Task（持续） | `az acr task create` | GitHub commit 触发 CI |

### 一次性 Cloud Build
```bash
az acr build -r mynewacr887 -t acr-demo-app:task-build-1.0 .
```
- 上传源码到 ACR，在云端执行 Dockerfile
- Portal → Repositories 可见新 tag

### ACR Task + GitHub 触发
```bash
az acr task create \
  -r mynewacr887 \
  -n AI200-buildtasknew \
  --image acr-demo-app:{{.Run.ID}} \
  --context https://github.com/<user>/<repo>#main \
  --file acr-demo/Dockerfile \
  --git-access-token $GIT_TOKEN
```
- **`{{.Run.ID}}`**：每次 run 自动生成唯一 tag（考试考点）
- **`--context`**：GitHub URL + branch
- **`--file`**：Dockerfile 相对路径（子目录 demo 必须写对）
- GitHub **PAT** 需 repo write 权限，设为环境变量

### 运行 Task
- 手动：`az acr task run -r mynewacr887 -n AI200-buildtasknew`
- 自动：`git push` → Portal → Tasks → Runs 可见 build 状态

### 常见坑
- Dockerfile 在子目录时 **context 和 --file 都要对齐**
- Task 状态 `enabled` 才监听 webhook
- 与 AWS CodeBuild + ECR push 类似，但全在 ACR 内完成

## 考试要点

- **`az acr build`**：云端构建，不需要本地 Docker
- **`az acr task create`**：参数 registry、task name、image（含 `{{.Run.ID}}`）、context（Git URL）、file（Dockerfile 路径）、git-access-token
- **`az acr task run`**：手动执行 task
- Git commit → 自动触发 build（webhook）
- 子目录 Dockerfile：**必须正确指定 `--file` 和 context**
- 动态 tag 避免覆盖：`{{.Run.ID}}` 或 build number

## English Short Summary

ACR Tasks build images in the cloud without local Docker. az acr build runs a one-off cloud build. az acr task create wires a GitHub repo so commits trigger builds; use {{.Run.ID}} for dynamic image tags. az acr task run triggers manually. Requires a GitHub PAT as --git-access-token. If the Dockerfile lives in a subdirectory, --file and context paths must match—common exam gotcha. Similar to AWS CodeBuild pushing to ECR but native to ACR.
