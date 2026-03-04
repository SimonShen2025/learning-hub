---
title: "Displaying Toasts (Notifications)"
lectureId: 351
section: 27
sectionTitle: "React Query: Managing Remote State"
date: "2026-03-05"
tags: [react-hot-toast, notifications, toasts, ui]
---

## 中文短总结

用 `react-hot-toast` 显示通知。安装 → 在 App 中放置 `<Toaster />` → 用 `toast.success()` / `toast.error()` 触发。在 useMutation 的 onSuccess/onError 中调用。可自定义位置、样式、持续时间。

## 中文长总结

### 安装和配置
```bash
npm install react-hot-toast
```

```jsx
// App.jsx
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
      {/* ... */}
    </>
  );
}
```

### 使用
```jsx
import toast from "react-hot-toast";

// 成功
toast.success("Cabin successfully deleted");

// 错误
toast.error("Could not delete cabin");

// 在 useMutation 中
const { mutate } = useMutation({
  mutationFn: deleteCabin,
  onSuccess: () => toast.success("Deleted!"),
  onError: (err) => toast.error(err.message),
});
```

## English Short Summary

`react-hot-toast` for notifications: `<Toaster />` in App, `toast.success()`/`toast.error()` to trigger. Customize position, duration, styles. Integrate with useMutation callbacks for operation feedback.
