---
title: "Styling the Menu"
lectureId: 308
section: 23
sectionTitle: "[Optional] Tailwind CSS Crash Course: Styling the App"
date: "2026-03-04"
tags: [tailwind-css, styling, menu-page, practice]
---

## 中文短总结

为菜单页面写 Tailwind 样式。菜单列表用 Grid 网格。每个 MenuItem 卡片：图片 + 名称 + 配料 + 价格。已售完的用 `opacity-70 grayscale` 灰化。综合运用已学的颜色、间距、Flexbox、Grid 技巧。

## 中文长总结

### Menu 页面
```jsx
function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
```

### MenuItem
```jsx
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className={`flex gap-4 py-2 ${soldOut ? "opacity-70 grayscale" : ""}`}>
      <img src={imageUrl} alt={name} className="h-24 w-24" />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {soldOut ? (
            <p className="text-sm font-medium text-stone-500 uppercase">Sold out</p>
          ) : (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          )}
        </div>
      </div>
    </li>
  );
}
```

### 样式技巧
- `divide-y` 自动添加子项间的分割线
- `grayscale` CSS 滤镜
- `grow` 填充剩余空间
- `mt-auto` 推到底部

## English Short Summary

Style menu page with Tailwind. Grid/Flex layout. MenuItem card: image + name + ingredients + price. Sold-out items: `opacity-70 grayscale`. Use `divide-y` for separators, `grow/mt-auto` for flexible spacing.
