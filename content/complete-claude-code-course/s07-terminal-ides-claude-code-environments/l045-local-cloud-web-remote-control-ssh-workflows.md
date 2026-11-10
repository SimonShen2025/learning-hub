---
title: "Local, Cloud, Web, Remote Control & SSH Workflows"
lectureId: 45
section: 7
sectionTitle: "Terminal, IDEs & Claude Code Environments"
date: "2026-11-10"
tags: ["execution-environments", "remote-control", "ssh", "cloud"]
---

## 中文短总结

先区分控制界面与执行位置：浏览器不一定代表云端运行，remote control 也可能只是远程操控仍在本机执行的会话。

## 中文长总结

- Local：代码和工具在本机运行，适合依赖本地 SDK、服务或未推送文件的任务。
- Cloud：任务在远端环境执行，本机关闭后仍可继续；先确认仓库、网络、凭据和数据是否允许进入该环境。
- Remote control：从另一设备控制本机已有会话，执行仍在本机，因此本机和会话必须保持可用。
- SSH：在指定的远程机器上运行 Claude Code；权限边界取决于该机器可访问的文件、网络和凭据。
- 在环境间交接或继续会话时，核对分支、工作区状态和实际转移的上下文；不同环境的后续修改不会自动保持同步。具体功能以版本和账户权限为准。

## English Short Summary

Separate the control surface from the execution environment. Local and remote-controlled sessions run on the local host, cloud sessions run remotely, and SSH uses a specific remote machine. Check access, data, and session state when handing work between environments.
