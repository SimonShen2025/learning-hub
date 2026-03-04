---
title: "Client-Side Filtering: Filtering Cabins"
lectureId: 375
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [filtering, client-side, url-state, searchParams]
---

## 中文短总结

实现客户端过滤。可复用 `Filter` 组件通过 URL searchParams 存储筛选状态。`useSearchParams` 读写 URL，组件根据 URL 参数过滤数据。状态在 URL 中 → 可分享、可刷新保持。

## 中文长总结

### Filter 组件
```jsx
function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((opt) => (
        <FilterButton
          key={opt.value}
          onClick={() => handleClick(opt.value)}
          active={opt.value === currentFilter}
          disabled={opt.value === currentFilter}
        >
          {opt.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}
```

### 使用
```jsx
<Filter
  filterField="discount"
  options={[
    { value: "all", label: "All" },
    { value: "no-discount", label: "No discount" },
    { value: "with-discount", label: "With discount" },
  ]}
/>
```

### 在 Table 中过滤
```jsx
const filterValue = searchParams.get("discount") || "all";
let filteredCabins;
if (filterValue === "all") filteredCabins = cabins;
if (filterValue === "no-discount") filteredCabins = cabins.filter(c => c.discount === 0);
if (filterValue === "with-discount") filteredCabins = cabins.filter(c => c.discount > 0);
```

## English Short Summary

Client-side filtering with URL state. Reusable `Filter` component uses `useSearchParams` to store/read filter value. Data filtered in component based on URL param. Shareable, refresh-safe state management.
