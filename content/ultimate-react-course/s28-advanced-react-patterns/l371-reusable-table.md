---
title: "Building a Reusable Table"
lectureId: 371
section: 28
sectionTitle: "Advanced React Patterns"
date: "2026-03-05"
tags: [compound-component, table, reusable, pattern]
---

## 中文短总结

用 Compound Component 模式构建可复用表格。`Table` 提供布局框架（列宽），`Table.Header` 渲染表头，`Table.Body` 渲染数据行，`Table.Row` 渲染单行。Context 共享 `columns` 配置。

## 中文长总结

### Table Compound Component
```jsx
const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
```

### 使用
```jsx
<Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
  <Table.Header>
    <div></div>
    <div>Cabin</div>
    <div>Capacity</div>
    <div>Price</div>
    <div>Discount</div>
    <div></div>
  </Table.Header>

  <Table.Body data={cabins} render={(cabin) => (
    <CabinRow cabin={cabin} key={cabin.id} />
  )} />
</Table>
```

### 特点
- `columns` 通过 Context 共享 → 所有行用相同列宽
- 用 CSS Grid，`columns` 作为 `grid-template-columns`
- `Body` 用 Render Props 模式渲染每一行
- 空数据显示友好提示

## English Short Summary

Reusable Table with Compound Component: `Table` shares `columns` via Context. `Header`/`Row` use same grid template. `Body` accepts `render` prop for each item. CSS Grid layout with configurable column widths.
