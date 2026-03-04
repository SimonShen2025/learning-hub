---
title: "Building a Reusable Context Menu"
lectureId: 373
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [compound-component, context-menu, dropdown, pattern]
---

## 中文短总结

用 Compound Component 模式构建可复用的 Context Menu（右键/点击菜单）。`Menus` 管理哪个菜单打开，`Menus.Toggle` 触发按钮，`Menus.List` 菜单列表，`Menus.Button` 每个菜单项。用绝对定位显示在按钮旁。

## 中文长总结

### Menus Compound Component
```jsx
const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider value={{ openId, close, open, position, setPosition }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    openId === "" || openId !== id ? open(id) : close();
  }

  return <StyledToggle onClick={handleClick}>⋮</StyledToggle>;
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon} <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
```

### 使用
```jsx
<Menus>
  <Table.Body data={cabins} render={(cabin) => (
    <Menus.Menu>
      <Menus.Toggle id={cabin.id} />
      <Menus.List id={cabin.id}>
        <Menus.Button icon={<HiSquare2Stack />} onClick={() => handleDuplicate()}>
          Duplicate
        </Menus.Button>
        <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
        <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
      </Menus.List>
    </Menus.Menu>
  )} />
</Menus>
```

### 技巧
- `getBoundingClientRect()` 计算菜单位置
- Portal 渲染到 body 避免 overflow 裁剪
- `useOutsideClick` 点击外部关闭
- 一次只能打开一个菜单（通过 `openId`）

## English Short Summary

Reusable Context Menu with Compound Component: `Menus` manages open state + position. `Toggle` computes position via `getBoundingClientRect`. `List` renders via Portal. `Button` for actions. Only one menu open at a time. `useOutsideClick` to close.
