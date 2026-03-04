---
title: "Detecting a Click Outside the Modal"
lectureId: 369
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [click-outside, useRef, useEffect, modal, custom-hook]
---

## 中文短总结

自定义 `useOutsideClick` hook 检测 Modal 外部点击。用 `useRef` 获取 Modal DOM 引用，`useEffect` 中添加 `document.addEventListener("click")`。点击不在 ref 内 → 调用 close。注意第三个参数 `true`（捕获阶段）。

## 中文长总结

### useOutsideClick Hook
```jsx
import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    // 第三个参数 true = 捕获阶段
    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}
```

### 在 Modal 中使用
```jsx
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>&times;</Button>
        {cloneElement(children, { onCloseModal: close })}
      </StyledModal>
    </Overlay>,
    document.body
  );
}
```

### 为什么用捕获阶段
- 如果用冒泡阶段（默认），点击 "Open" 按钮时：
  1. 按钮 click → 打开 Modal
  2. 事件冒泡到 document → 检测到 Modal 外 → 立即关闭
- 捕获阶段先执行 → 先处理外部点击检测 → 再处理按钮冒泡

## English Short Summary

`useOutsideClick` hook: `useRef` + `document.addEventListener("click", handler, true)`. Capture phase (3rd param `true`) prevents conflict with button clicks. Returns ref to attach to modal element.
