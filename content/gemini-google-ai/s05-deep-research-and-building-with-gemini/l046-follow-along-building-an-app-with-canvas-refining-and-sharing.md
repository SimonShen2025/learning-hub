---
title: "Follow-Along: Building an App with Canvas - Refining and Sharing"
lectureId: 46
section: 5
sectionTitle: "Beyond Chatting: Deep Research and Building with Gemini"
date: "2026-10-14"
tags: [gemini-canvas, ai-app-building, ui-refinement, sharing]
---

## 中文短总结

Canvas 工具栏可注入 AI 功能、移动工具栏或对选中组件提出局部修改。精修时要明确变更范围，避免像“调整调色板”这类宽泛词触发整站重设计；对于缺少精修控件的复杂应用，可改用聊天逐步调整。完成后生成分享链接，并留意接收者可能复制或 remix 项目。

## 中文长总结

- **AI 功能注入**会分析当前应用并建议搜索、文本或图像生成等能力；注入后仍要实际测试功能并检查它是否符合需求。
- 工具栏可拖动，避免挡住应用操作；选择并询问（select and ask）可针对某个 UI 元素提出修改。
- 局部工具并非总会显示。应用迭代较多、局部修改可能影响依赖关系时，系统可能隐藏精修入口；可改为在对话中分步调整。
- 指令范围必须清楚。“换一个调色板”可能被理解为重做整个应用的颜色系统；若只改一个按钮，应明确指定控件和不应受影响的其他部分。
- 分享前测试应用并检查内容。生成链接后，接收者可在浏览器打开；课程还介绍了 remix 能力，意味着他人可能基于共享版本创建自己的副本。

## English Short Summary

Canvas offers AI feature injection and selection-based UI refinement, but precise scope matters: broad requests can redesign the whole app. Test changes, share the resulting link when ready, and account for recipients being able to remix the project.