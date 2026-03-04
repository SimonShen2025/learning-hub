---
title: "Confirming Cabin Deletions"
lectureId: 370
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [modal, confirmation, delete, compound-component]
---

## 中文短总结

用 Compound Component Modal 实现删除确认对话框。`ConfirmDelete` 组件显示确认信息和操作按钮。集成到 `CabinRow` 中，点击 Delete → 弹出确认 Modal → 确认后执行删除 mutation。

## 中文长总结

### ConfirmDelete 组件
```jsx
function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">
        Delete {resourceName}
      </Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently?
        This action cannot be undone.
      </p>
      <div>
        <Button variation="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}
```

### 在 CabinRow 中使用
```jsx
<Modal>
  <Modal.Open opens="edit">
    <button>Edit</button>
  </Modal.Open>
  <Modal.Window name="edit">
    <CreateCabinForm cabinToEdit={cabin} />
  </Modal.Window>

  <Modal.Open opens="delete">
    <button>Delete</button>
  </Modal.Open>
  <Modal.Window name="delete">
    <ConfirmDelete
      resourceName="cabin"
      disabled={isDeleting}
      onConfirm={() => deleteCabin(cabinId)}
    />
  </Modal.Window>
</Modal>
```

### 注意
- `onCloseModal` 由 `cloneElement` 自动注入
- 一个 `<Modal>` 可管理多个窗口（edit + delete）
- confirm 按钮执行 mutation → 关闭 modal

## English Short Summary

Confirmation dialog with Compound Component Modal. `ConfirmDelete` shows warning + Cancel/Delete buttons. Wire up in `CabinRow`: `Modal.Open` triggers, `Modal.Window` shows `ConfirmDelete`, `onConfirm` calls delete mutation. Multiple windows per Modal.
