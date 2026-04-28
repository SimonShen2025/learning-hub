---
title: "Hooks and Flow Control"
lectureId: 22
section: 3
sectionTitle: "Playwright Hands-On Overview"
date: "2026-04-29"
tags: [playwright, hooks, test-lifecycle]
---

## 中文短总结

四种 hooks：`beforeEach`（每个测试前）、`beforeAll`（所有测试前执行一次）、`afterEach`（每个测试后）、`afterAll`（所有测试后）。用 `test.describe` 分组时每个 describe 可有独立的 `beforeEach`。建议避免使用 after hooks，将清理逻辑放入 `beforeEach` 以提高稳定性。

## 中文长总结

### 四种 Hooks

| Hook | 执行时机 | 典型用途 |
|------|----------|----------|
| `test.beforeEach` | 每个测试前 | 导航到页面、设置前置状态 |
| `test.beforeAll` | 整个文件/describe 前执行一次 | 数据库初始化等一次性操作 |
| `test.afterEach` | 每个测试后 | 不推荐使用 |
| `test.afterAll` | 整个文件/describe 后执行一次 | 不推荐使用 |

### 消除代码重复

将多个测试共享的导航步骤提取到 `beforeEach` 中，避免每个测试重复编写。

### test.describe 与 hooks 的层级关系

```typescript
test.beforeEach(/* 对文件中所有测试生效 */);

test.describe('Suite 1', () => {
  test.beforeEach(/* 仅对 Suite 1 中的测试生效 */);
  test('test A', ...);
  test('test B', ...);
});

test.describe('Suite 2', () => {
  test.beforeEach(/* 仅对 Suite 2 中的测试生效 */);
  test('test C', ...);
});
```

- 外层 `beforeEach` 对所有测试生效
- 每个 `describe` 内的 `beforeEach` 仅对该组测试生效
- 各 `describe` 之间上下文隔离

### 流程控制

- `test.describe.skip` — 跳过整个测试组
- `test.describe.only` — 仅运行该测试组

### 最佳实践

避免使用 `afterEach`/`afterAll`，将清理/重置逻辑放到 `beforeEach` 中，可提高测试稳定性和性能。

## English Short Summary

Four hooks: `beforeEach` (before every test), `beforeAll` (once before all), `afterEach`/`afterAll` (avoid these — move cleanup to `beforeEach` for stability). Each `test.describe` block can have its own `beforeEach` with isolated context. Use `describe.skip`/`describe.only` for flow control.
