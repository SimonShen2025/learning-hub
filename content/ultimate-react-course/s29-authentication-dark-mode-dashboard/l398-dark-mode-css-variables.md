---
title: "Implementing Dark Mode With CSS Variables"
lectureId: 398
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [dark-mode, css-variables, context, theme]
---

## 中文短总结

用 CSS 变量实现暗色模式。`DarkModeContext` 管理 light/dark 状态。切换时给 `<html>` 添加 `class="dark-mode"` 或 `class="light-mode"`。CSS 中定义两套变量，根据 class 切换。

## 中文长总结

### CSS 变量
```css
:root,
:root.light-mode {
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  /* ... */
  --color-brand-500: #4f46e5;
  --color-brand-600: #4338ca;
  --backdrop-color: rgba(255, 255, 255, 0.1);
}

:root.dark-mode {
  --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  /* ... */
  --color-brand-500: #4f46e5;
  --color-brand-600: #4338ca;
  --backdrop-color: rgba(0, 0, 0, 0.3);
}
```

### DarkModeContext
```jsx
const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((dark) => !dark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) throw new Error("DarkModeContext used outside provider");
  return context;
}
```

### 要点
- CSS 变量方案 — 不需要 styled-components 的 ThemeProvider
- `useLocalStorageState` 持久化用户偏好
- 初始值读取系统偏好 `prefers-color-scheme`
- 直接操作 `document.documentElement.classList`

## English Short Summary

Dark mode with CSS variables: two sets of variables under `.light-mode`/`.dark-mode` classes on `<html>`. `DarkModeContext` toggles class. `useLocalStorageState` persists preference. Respects system `prefers-color-scheme`.
