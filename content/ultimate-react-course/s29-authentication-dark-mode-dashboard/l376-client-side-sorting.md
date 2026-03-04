---
title: "Client-Side Sorting: Sorting Cabins"
lectureId: 376
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [sorting, client-side, select, url-state]
---

## 中文短总结

可复用 `SortBy` 下拉组件实现客户端排序。排序条件存入 URL searchParams。解析 value 得到 `field` 和 `direction`（asc/desc）。用 `Array.sort()` + `localeCompare` 排序。

## 中文长总结

### SortBy 组件
```jsx
function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <StyledSelect value={sortBy} onChange={handleChange}>
      {options.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
}
```

### 排序逻辑
```jsx
const sortBy = searchParams.get("sortBy") || "startDate-asc";
const [field, direction] = sortBy.split("-");
const modifier = direction === "asc" ? 1 : -1;

const sortedCabins = filteredCabins.sort(
  (a, b) => (a[field] - b[field]) * modifier
);
```

### 使用
```jsx
<SortBy
  options={[
    { value: "name-asc", label: "Sort by name (A-Z)" },
    { value: "name-desc", label: "Sort by name (Z-A)" },
    { value: "regularPrice-asc", label: "Sort by price (low first)" },
    { value: "regularPrice-desc", label: "Sort by price (high first)" },
    { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
    { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
  ]}
/>
```

## English Short Summary

Client-side sorting with reusable `SortBy` select component. Value format: `field-direction`. Parse and apply `Array.sort()` with direction modifier (+1/-1). State stored in URL searchParams.
