---
title: "Building a Reusable Pagination Component"
lectureId: 381
section: 29
sectionTitle: "Authentication, Authorization, Dark Mode, and Dashboard"
date: "2026-03-05"
tags: [pagination, component, reusable, url-state]
---

## 中文短总结

可复用分页组件。显示当前范围（如 "1–10 of 27 results"）和上一页/下一页按钮。页码存在 URL searchParams 中。每页显示固定数量（如 10 条）。

## 中文长总结

### Pagination 组件
```jsx
const PAGE_SIZE = 10;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>{currentPage === pageCount ? count : currentPage * PAGE_SIZE}</span>{" "}
        of <span>{count}</span> results
      </P>
      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> Previous
        </PaginationButton>
        <PaginationButton onClick={nextPage} disabled={currentPage === pageCount}>
          Next <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}
```

### 使用
```jsx
<Table.Footer>
  <Pagination count={count} />
</Table.Footer>
```

## English Short Summary

Reusable Pagination: prev/next buttons, showing range text. Page stored in URL `searchParams`. `PAGE_SIZE` constant. Disable buttons at boundaries. Returns null if only one page. Works with any data count.
