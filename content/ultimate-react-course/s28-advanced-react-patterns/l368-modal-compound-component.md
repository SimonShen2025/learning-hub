---
title: "Converting the Modal to a Compound Component"
lectureId: 368
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [compound-component, modal, context, pattern]
---

## 中文短总结

将 Modal 重构为 Compound Component 模式。`Modal` 管理 open/close 状态，`Modal.Open` 是触发按钮，`Modal.Window` 是窗口内容。状态通过 Context 隐式共享。使用者无需管理 `isOpen` 状态。

## 中文长总结

### Compound Component Modal
```jsx
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={close}>&times;</Button>
        {cloneElement(children, { onCloseModal: close })}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
```

### 使用
```jsx
<Modal>
  <Modal.Open opens="cabin-form">
    <Button>Add new cabin</Button>
  </Modal.Open>

  <Modal.Window name="cabin-form">
    <CreateCabinForm />
  </Modal.Window>

  <Modal.Open opens="table">
    <Button>Show table</Button>
  </Modal.Open>

  <Modal.Window name="table">
    <CabinTable />
  </Modal.Window>
</Modal>
```

### 优势对比
| 简单版 | Compound Component 版 |
|--------|----------------------|
| 每个 Modal 需要 useState | 无需手动管理状态 |
| 状态在使用者组件中 | 状态在 Modal 内部 |
| 紧耦合 | 灵活组合 |
| 单个打开/关闭 | 多个窗口用 name 区分 |

## English Short Summary

Modal as Compound Component: `Modal` manages open/close state internally. `Modal.Open` triggers, `Modal.Window` renders content. Multiple windows via `name` prop. `cloneElement` injects onClick/onCloseModal. No manual state management needed.
