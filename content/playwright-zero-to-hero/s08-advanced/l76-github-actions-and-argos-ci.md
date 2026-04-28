---
title: "GitHub Actions and Argos CI"
lectureId: 76
section: 8
sectionTitle: "Advanced"
date: "2026-04-29"
tags: [playwright, github-actions, ci-cd, argos-ci, visual-testing, yaml, workflow]
---

## 中文短总结

将 Playwright 测试集成到 GitHub Actions CI/CD 流水线。创建 `.github/workflows/playwright.yaml`，配置 Node 安装、依赖安装、浏览器安装和测试执行步骤。报告自动作为 artifact 上传。进一步集成 Argos CI 做 CI 级别的视觉测试：注册并关联 GitHub 账号，安装 `@argos-ci/playwright`，在测试中用 `argosScreenshot()` 截图，PR 时 Argos 自动对比基线截图并在 PR 中显示变更检测结果，可 approve 或 reject 视觉变更。

## English Notes

### GitHub Actions Workflow

```yaml
# .github/workflows/playwright.yaml
name: Playwright Tests
on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci --force
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps --force
      - name: Run tests
        run: npm run pageObjects-chrome
      - uses: actions/upload-artifact@v4
        if: ${{ !cancelled() }}
        with:
          name: playwright-report
          path: playwright-report/
```

### Argos CI Integration

1. **Sign up** at argos-ci.com with GitHub account
2. **Install package**: `npm install @argos-ci/playwright --save-dev --force`
3. **Add reporter** to config:
   ```typescript
   reporter: [
     ['html'],
     [
       '@argos-ci/playwright/reporter',
       { uploadToArgos: !!process.env.CI },
     ],
   ]
   ```
4. **Add screenshots** in tests:
   ```typescript
   import { argosScreenshot } from '@argos-ci/playwright';
   await argosScreenshot(page, 'form-layouts-page');
   ```
5. **Add config settings**:
   ```typescript
   use: {
     screenshot: 'only-on-failure',
   }
   ```

### Argos CI Workflow

```
Push to main → Creates reference (baseline) screenshots
  ↓
PR created → New screenshots compared against baseline
  ↓
Changes detected → Argos bot comments on PR
  ↓
Review → Approve (new baseline) or Reject (fix code)
```

### Key Points

| Feature | Detail |
|---|---|
| Artifact upload | Reports auto-uploaded for download |
| Argos pricing | Free for personal (5000 screenshots/month) |
| Visual diff | Side-by-side comparison with slider |
| PR integration | Argos bot blocks merge if changes unreviewed |
| Reference build | First build on main/master becomes baseline |

## English Short Summary

Set up GitHub Actions for CI with a YAML workflow file. Integrate Argos CI for automated visual testing on PRs — it compares screenshots against baselines and reports changes directly in the PR with approve/reject controls.
