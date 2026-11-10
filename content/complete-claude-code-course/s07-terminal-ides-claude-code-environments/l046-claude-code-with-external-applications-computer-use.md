---
title: "Claude Code with External Applications & Computer Use"
lectureId: 46
section: 7
sectionTitle: "Terminal, IDEs & Claude Code Environments"
date: "2026-11-10"
tags: ["computer-use", "visual-validation", "permissions", "testing"]
---

## 中文短总结

当应用缺少合适的 API、CLI 或专用集成时，可用 computer use 观察并操作图形界面，将运行时视觉验证纳入代码修改与测试循环。

## 中文长总结

1. 优先使用结构化工具处理代码、命令和可通过专用接口完成的操作；图形操作适合模拟器或其他缺少更好接口的应用。
2. 先分析 diff 和待验证行为，再授权访问必要的应用，在实际界面复现流程并记录观察结果。
3. 发现问题后回到代码与 shell 工具定位、修复和运行测试；重新构建或启动后再复测同一界面流程。
4. 图形操作的权限范围较广，还可能遇到误点击、不可逆操作和屏幕内容中的恶意指令；应限制授权并避免暴露敏感账户或生产环境。
5. 报告执行的检查、实际观察及未覆盖部分；模拟器与自动化观察不能替代物理设备、体验质量等必要的人工验证。功能和权限细节因平台及版本而异。

## English Short Summary

Use computer use for visual applications when no more structured interface is suitable. Combine observed behavior with code changes and tests, limit application permissions, and report what still requires human or device-specific validation.
