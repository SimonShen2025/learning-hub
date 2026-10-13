---
title: "The Editing Suite: Targeted Edits with the Markup Tool and External Annotations"
lectureId: 36
section: 4
sectionTitle: "Gemini for Visual Creation"
date: "2026-10-14"
tags: [image-editing, spatial-prompting, annotations]
---

## 中文短总结

Markup 工具通过圈选位置并配上动作指令实现 spatial prompting；标注颜色可与文字对应以便整理。复杂外部标注也可随图片上传，但模型可能把注释本身保留在结果里，因此应明确要求清除标记，并在生成后检查，必要时再次修复。

## 中文长总结

- 点击初始上传图像可打开 Markup 编辑区，通过圈选或标出位置，再用文字说明要增加、替换或删除的对象。
- 使用明确动词描述动作和范围；圈选与文字采用相同颜色，有助于人类整理标注和指令对应关系。
- 标注可提供空间定位，但不一定对后续生成图像重复开放；可继续通过对话请求后续修改。
- 外部工具制作的注释图也能作为参考上传。对于复杂编辑，可选择更适合推理的模式，并明确每个标记对应的变更。
- 模型有时会把标注文字或圈线带入新图。即使主体修改正确，也需检查是否残留注释；若仍存在，可单独提示移除。
- 也可要求模型识别照片中的地标并加标签，但这类生成的信息图仍需核对地点、标签和位置准确性。

## English Short Summary

Use spatial prompting to mark an image region and state the desired action. External annotations can guide complex edits, but the generated image may retain the marks; inspect the result and explicitly request their removal when needed.