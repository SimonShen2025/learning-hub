---
title: "Playwright with Docker Container"
lectureId: 75
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, docker, container, dockerfile, docker-compose, ci, volumes]
---

## 中文短总结

使用 Docker 容器运行 Playwright 测试，实现环境隔离和跨机器可移植。创建 `Dockerfile`：基于 Playwright 官方镜像（版本需匹配 package.json），复制项目文件，运行 `npm install` 和 `npx playwright install`。用 `docker build` 构建镜像，`docker run` 执行测试。使用 `docker-compose.yaml` 编排：定义 service、build、command 和 volumes（将容器内的 report 复制到宿主机）。Config 中可用 `webServer` 自动启动测试应用。

## English Notes

### Dockerfile

```dockerfile
FROM mcr.microsoft.com/playwright:v1.37.1-jammy

RUN mkdir /app
WORKDIR /app

COPY . /app/

RUN npm install --force
RUN npx playwright install
```

### Build & Run

```bash
# Build image
docker build -t pw-page-object-test .

# Run interactively
docker run -it pw-page-object-test
npm run pageObjects-chrome
```

### Docker Compose

```yaml
# docker-compose.yaml
version: "3.8"
services:
  playwright-test:
    image: playwright-test
    build: .
    command: npm run pageObjects-chrome
    volumes:
      - ./playwright-report:/app/playwright-report
      - ./test-results:/app/test-results
```

```bash
docker compose up --build
```

### Auto-Start Test App

```typescript
// playwright.config.ts
webServer: {
  command: 'npm run start',
  url: 'http://localhost:4200',
}
```

### Key Concepts

| Concept | Detail |
|---|---|
| Base image | `mcr.microsoft.com/playwright:vX.XX.X-jammy` |
| Version match | Playwright image version must match package.json |
| `volumes` | Copy reports from container to host machine |
| `webServer` | Auto-start app when running tests |
| Image size | ~3.2GB (includes browsers + OS) |

### Docker vs VM

| | Docker | VM |
|---|---|---|
| Resources | On-demand | Pre-allocated |
| Startup | Fast | Slow |
| Portability | High | Medium |
| Isolation | Process-level | OS-level |

## English Short Summary

Create a Dockerfile based on Playwright's official image, copy project files, install deps. Use docker-compose with `volumes` to extract reports. Match Playwright image version with package.json.
