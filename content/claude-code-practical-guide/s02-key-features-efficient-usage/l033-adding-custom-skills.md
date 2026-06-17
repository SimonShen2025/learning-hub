---
title: "Adding Custom Skills"
lectureId: 33
section: 2
sectionTitle: "Key Features & Efficient Usage"
date: "2026-06-17"
tags: ["claude-code", "agent-skills", "react"]
---

## 中文短总结

项目级 skill 放在 `.claude/skills/{skill-name}/SKILL.md`，也支持全局 skills。SKILL.md 必须含 name 和 description（frontmatter），description 决定何时被 Claude 加载。示例：`modern-best-practice-react-components` skill。

## 中文长总结

### 目录结构

```
.claude/skills/
  modern-best-practice-react-components/
    SKILL.md
```

- 文件夹名 = skill 标识
- **SKILL.md 文件名固定**（大小写敏感）
- 也支持用户级 global skills（后续提及）

### SKILL.md Frontmatter

```yaml
---
name: modern-best-practice-react-components
description: Best practices for building React components in this project
---
```

- **name**：skill 名称
- **description**：Claude 用此判断相关性（关键）

### Body 内容

Markdown 正文写具体规则、模式、反模式示例。

### 与 Commands 的关系

Custom skills 会自动注册为 slash commands（下节详述）。

## English Short Summary

Project skills live in .claude/skills/{name}/SKILL.md with required name+description frontmatter. Description drives when Claude loads the skill. Example: modern-best-practice-react-components. Global skills also supported. Skills auto-register as slash commands.
