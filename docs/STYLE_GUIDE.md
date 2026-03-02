# Prompt Studio Design System & Style Guide

A portable design system for consistent styling across all projects.
Copy the relevant sections into any new project using Tailwind CSS.

---

## Colour Palette

### Primary: Violet + Indigo

The core brand colours. Used for CTAs, active states, and emphasis.

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Violet 600 | `#7c3aed` | Same | Primary brand, icons, links |
| Violet 700 | `#6d28d9` | Same | Hover states |
| Indigo 600 | `#4f46e5` | Same | Gradient end, secondary brand |
| Indigo 700 | `#4338ca` | Same | Hover states |

### Secondary: Amber

Used for admin features, warnings, and attention states.

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| Amber 600 | `#d97706` | Same | Admin labels, warning text |
| Amber 100 | `#fef3c7` | `amber-900/30` | Admin active bg, warning bg |

### Neutral: Slate

Used for backgrounds, borders, and muted text.

| Token | Usage |
|-------|-------|
| `slate-50/50` | Sidebar background |
| `slate-100` | Chat bubble (AI), input backgrounds |
| `slate-800` | Dark mode chat bubble |
| `muted-foreground` | Secondary text, descriptions |

---

## Gradients

### Primary CTA Gradient

```
bg-gradient-to-r from-violet-600 to-indigo-600
hover:from-violet-700 hover:to-indigo-700
```

Used on: Primary buttons, floating chat bubble, send button, save buttons.

### Icon/Avatar Gradient

```
bg-gradient-to-br from-violet-600 to-indigo-600
```

Used on: App logo background, user avatars.

### Light Card Gradient

```
bg-gradient-to-br from-violet-100 to-indigo-100
dark:from-violet-900/30 dark:to-indigo-900/30
```

Used on: Empty state icons, feature card icons.

### Subtle Background Gradient

```
bg-gradient-to-br from-violet-50 to-indigo-50
dark:from-violet-950/50 dark:to-indigo-950/50
```

Used on: Sidebar cards (AI usage, quick tips), info panels.

### Progress Bar Gradient

```
bg-gradient-to-r from-violet-500 to-indigo-500
```

### Text Gradient (Hero)

```
bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent
```

### Page Background Gradient (Landing)

```
bg-gradient-to-b from-violet-50 via-white to-white
dark:from-violet-950/20 dark:via-slate-950 dark:to-slate-950
```

---

## Buttons

### Primary (CTA)

```html
<button class="bg-gradient-to-r from-violet-600 to-indigo-600
  hover:from-violet-700 hover:to-indigo-700
  text-white rounded-md px-4 py-2 text-sm font-medium transition-all">
  Save
</button>
```

### Outline

```html
<button class="border bg-background shadow-xs rounded-md px-4 py-2
  text-sm font-medium hover:bg-accent transition-all">
  Cancel
</button>
```

### Destructive

```html
<button class="bg-destructive text-white rounded-md px-4 py-2
  text-sm font-medium hover:bg-destructive/90 transition-all">
  Delete
</button>
```

### Ghost

```html
<button class="hover:bg-accent hover:text-accent-foreground
  rounded-md px-4 py-2 text-sm font-medium transition-all">
  Option
</button>
```

### Destructive Outline

```html
<button class="border bg-background rounded-md px-3 py-2 text-sm
  text-red-600 hover:text-red-700 hover:bg-red-50">
  Delete
</button>
```

### Button Sizes

| Size | Classes |
|------|---------|
| xs | `h-6 gap-1 rounded-md px-2 text-xs` |
| sm | `h-8 rounded-md gap-1.5 px-3` |
| default | `h-9 px-4 py-2` |
| lg | `h-10 rounded-md px-6` |
| icon | `size-9` |
| icon-sm | `size-8` |

---

## Cards

### Standard Card

```html
<div class="rounded-xl border py-6 shadow-sm
  border-violet-100 dark:border-violet-900/50">
  <!-- content -->
</div>
```

### Interactive Card (hover)

```html
<div class="rounded-xl border shadow-sm transition-all
  hover:shadow-lg hover:border-violet-200 dark:hover:border-violet-800">
  <!-- content -->
</div>
```

### Dashed Empty State Card

```html
<div class="rounded-xl border-dashed border-2 p-8 text-center">
  <!-- empty state content -->
</div>
```

---

## Badges

### Standard (Violet)

```html
<span class="rounded-full px-2 py-0.5 text-xs font-medium
  bg-violet-100 text-violet-700
  dark:bg-violet-900/30 dark:text-violet-300 border-0">
  v1
</span>
```

### Outline Badge

```html
<span class="rounded-full px-2 py-0.5 text-xs font-medium
  border bg-background">
  Label
</span>
```

### Role Badges

| Role | Classes |
|------|---------|
| Free | `bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300` |
| Pro | `bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300` |
| Superadmin | `bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300` |

### Permission Badges

| Role | Classes |
|------|---------|
| Owner | `bg-violet-100 text-violet-700 border-violet-200 dark:border-violet-800` |
| Editor | `bg-blue-100 text-blue-700 border-blue-200 dark:border-blue-800` |
| Viewer | `bg-slate-100 text-slate-700 border-slate-200 dark:border-slate-700` |

---

## Typography

### Headings

| Level | Classes | Usage |
|-------|---------|-------|
| Hero | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight` | Landing page |
| Page Title | `text-3xl font-bold tracking-tight` | Top of pages |
| Section Title | `text-2xl font-bold tracking-tight` | Within pages |
| Card Title | `text-xl font-bold` | Card headings |
| Subtitle | `text-lg font-medium` | Sub-sections |

### Body Text

| Type | Classes |
|------|---------|
| Default | `text-sm` |
| Large | `text-base` |
| Small | `text-xs` |
| Tiny | `text-[10px]` |

### Text Colours

| Type | Classes |
|------|---------|
| Default | `text-foreground` (auto dark mode) |
| Muted | `text-muted-foreground` |
| Brand | `text-violet-600 dark:text-violet-400` |
| On dark bg | `text-white`, `text-white/70` |
| Link hover | `hover:text-violet-600 transition-colors` |
| Destructive | `text-red-600 hover:text-red-700` |

### Section Labels (Sidebar)

```html
<h2 class="text-xs font-semibold tracking-tight text-violet-600 uppercase">
  Section Name
</h2>
```

Colour variants: `text-violet-600` (workspace), `text-indigo-600` (AI), `text-amber-600` (admin).

---

## Shadows

| Level | Class | Usage |
|-------|-------|-------|
| Minimal | `shadow-xs` | Inputs, textareas |
| Small | `shadow-sm` | Cards, default |
| Medium | `shadow-md` | Dropdowns |
| Large | `shadow-lg` | Dialogs, floating elements |
| Extra large | `shadow-xl` | Login card |
| Heavy | `shadow-2xl` | Chat widget |
| Hover | `hover:shadow-lg` | Interactive cards |

---

## Border Radius

| Size | Class | Usage |
|------|-------|-------|
| Full | `rounded-full` | Avatars, pills, badges, FAB |
| 2xl | `rounded-2xl` | Chat bubbles, large icons |
| xl | `rounded-xl` | Cards |
| lg | `rounded-lg` | Containers, inputs |
| md | `rounded-md` | Buttons, small inputs |

---

## Sidebar Navigation

### Active State (Violet - default)

```html
<button class="w-full justify-start transition-colors
  bg-violet-100 dark:bg-violet-900/30
  text-violet-700 dark:text-violet-300 font-medium">
  <span class="text-violet-600 dark:text-violet-400"><!-- icon --></span>
  <span class="ml-3">Label</span>
</button>
```

### Active State (Indigo - AI section)

```html
<button class="bg-indigo-100 dark:bg-indigo-900/30
  text-indigo-700 dark:text-indigo-300 font-medium">
```

### Active State (Amber - admin section)

```html
<button class="bg-amber-100 dark:bg-amber-900/30
  text-amber-700 dark:text-amber-300 font-medium">
```

### Inactive State

```html
<button class="w-full justify-start transition-colors hover:bg-accent">
  <span class="text-muted-foreground"><!-- icon --></span>
  <span class="ml-3">Label</span>
</button>
```

---

## Chat Bubbles

### User Message

```html
<div class="max-w-[80%] rounded-2xl px-4 py-3 text-sm
  bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
  Message content
</div>
```

### AI Message

```html
<div class="max-w-[80%] rounded-2xl px-4 py-3 text-sm
  bg-slate-100 dark:bg-slate-800 text-foreground">
  Message content
</div>
```

### Loading Indicator

```html
<div class="flex items-center gap-1.5">
  <div class="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style="animation-delay: 0ms" />
  <div class="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style="animation-delay: 150ms" />
  <div class="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style="animation-delay: 300ms" />
</div>
```

---

## Form Inputs

### Text Input

```html
<input class="rounded-md border bg-background px-3 py-2 text-sm
  shadow-xs focus-visible:ring-violet-500
  focus-visible:ring-2 focus-visible:ring-offset-2" />
```

### Input with Error

```html
<input class="rounded-md border border-red-400
  focus-visible:ring-red-500" />
```

---

## Floating Action Button (Chat)

```html
<button class="fixed bottom-6 right-6 h-14 w-14
  rounded-full bg-gradient-to-r from-violet-600 to-indigo-600
  text-white shadow-lg hover:shadow-xl
  transition-all hover:scale-105
  flex items-center justify-center z-50">
  <!-- icon -->
</button>
```

---

## Info / Warning Banners

### Info (Indigo)

```html
<div class="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20
  text-xs text-indigo-800 dark:text-indigo-200">
  Info message
</div>
```

### Warning (Amber)

```html
<div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20
  text-xs text-amber-800 dark:text-amber-200
  border-t border-amber-200 dark:border-amber-800">
  Warning message
</div>
```

---

## Spacing Conventions

| Context | Value |
|---------|-------|
| Page padding | `p-6 lg:p-8` |
| Card padding | `p-4` to `p-6` |
| Section gap | `space-y-6` |
| Element gap | `gap-2` to `gap-4` |
| Sidebar width | `w-64` |
| Icon size (nav) | `h-5 w-5` |
| Icon size (small) | `h-4 w-4` |
| Icon size (tiny) | `h-3 w-3` |

---

## Dark Mode Pattern

All colours follow a consistent light/dark pattern:

```
bg-violet-100        dark:bg-violet-900/30
text-violet-700      dark:text-violet-300
border-violet-200    dark:border-violet-800
```

For opacity-based dark variants, use `/30` or `/50` suffixes.
For backgrounds, prefer `/30` (lighter) over `/50` (darker).

---

## Quick Reference: Copy-Paste Snippets

### Primary CTA Button

```
bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-md px-4 py-2 text-sm font-medium
```

### Card with Violet Border

```
rounded-xl border border-violet-100 dark:border-violet-900/50 shadow-sm
```

### Section Label

```
text-xs font-semibold tracking-tight text-violet-600 uppercase
```

### Muted Description

```
text-sm text-muted-foreground
```

### Active Nav Item

```
bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 font-medium
```

### Info Card Background

```
bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/50 dark:to-indigo-950/50
```
