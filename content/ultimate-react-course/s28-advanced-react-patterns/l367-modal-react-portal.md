---
title: "Building a Modal Window Using a React Portal"
lectureId: 367
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [modal, portal, createPortal, react]
---

## 中文短总结

用 React Portal (`createPortal`) 构建 Modal 窗口。Portal 在 DOM 层级中渲染到 `document.body`，但在 React 树中保持原位置（事件冒泡正常）。Overlay + 居中的窗口 + 关闭按钮。

## 中文长总结

### React Portal
```jsx
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay onClick={onClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <Button onClick={onClose}>&times;</Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body // 渲染目标
  );
}
```

### 为什么用 Portal
```
DOM 结构:                    React 组件树:
<body>                       App
  <div id="root">              └── CabinRow
    <table>                        └── Modal (逻辑上在这里)
      <tr>...</tr>
    </table>
  </div>
  <div class="overlay">     但 DOM 渲染到 body 下
    <div class="modal">      避免 overflow:hidden 裁剪
      ...
    </div>
  </div>
</body>
```

### 关键点
- 解决 `overflow: hidden` 导致 Modal 被裁剪
- 解决 `z-index` 冲突
- Portal 内事件冒泡仍沿 React 树传播
- `e.stopPropagation()` 防止点击 Modal 内容时触发 Overlay 的 onClick

### 简单版实现
```jsx
function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)}>Add new cabin</Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}
```

## English Short Summary

Modal with React Portal: `createPortal(jsx, document.body)` renders outside DOM hierarchy but stays in React tree. Solves overflow/z-index issues. Overlay + centered modal + close button. Event bubbling follows React tree.
