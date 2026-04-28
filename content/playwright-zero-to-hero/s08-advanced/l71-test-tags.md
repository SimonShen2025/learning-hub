---
title: "Test Tags"
lectureId: 71
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, tags, grep, organize, cli, smoke, regression]
---

## 中文短总结

使用 tag 标记测试，通过 `--grep` 按标签筛选运行。在测试标题中添加标签（如 `@smoke`），CLI 用 `--grep @smoke` 运行匹配的测试。可在 `test.describe` 标题中加标签影响整个 describe 块。多标签筛选用管道符 `|` 分隔（Mac），Windows 的 PowerShell 需用 `--% |` 语法。同一测试可有多个标签。

## English Notes

### Adding Tags

```typescript
// Tag on individual test
test('navigate to form page @smoke', async ({ page }) => { ... });

// Tag on describe block — applies to all tests inside
test.describe('Forms @block', () => {
  test('input fields', ...);
  test('radio buttons', ...);
});

// Multiple tags on one test
test('navigate @smoke @regression', async ({ page }) => { ... });
```

### Running Tagged Tests

```bash
# Single tag
npx playwright test --project=chromium --grep @smoke

# Multiple tags (Mac/Linux)
npx playwright test --grep "@smoke|@block"

# Multiple tags (Windows CMD)
npx playwright test --grep "@smoke^|@block"

# Multiple tags (PowerShell)
npx playwright test --grep --% "@smoke|@block"
```

### Key Points

| Concept | Detail |
|---|---|
| Tag format | `@tagName` in test/describe title string |
| `--grep` | CLI flag to filter by tag |
| Multiple tags | Pipe `|` separator in grep pattern |
| Scope | Tags in describe apply to all tests in block |
| Cross-file | Tags work across different spec files |

## English Short Summary

Add `@tag` labels to test or describe titles. Use `--grep @tag` to run matching tests. Combine tags with pipe `|` for multiple tag filtering.
