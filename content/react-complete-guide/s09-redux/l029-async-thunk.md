---
title: "Redux Async with createAsyncThunk"
lectureId: 29
section: 9
sectionTitle: "Redux & Global State Management"
date: "2026-03-03"
tags: ["redux", "redux-toolkit", "createAsyncThunk", "async"]
---

## Summary

`createAsyncThunk` handles async operations (API calls) in Redux. It automatically dispatches `pending`, `fulfilled`, and `rejected` actions.

## Key Concepts

- Define async logic outside the slice with `createAsyncThunk`
- Handle lifecycle in `extraReducers` using `builder.addCase`
- Track `status: 'idle' | 'loading' | 'succeeded' | 'failed'` in state
- RTK Query is an even more powerful alternative for data fetching

## Detailed Notes

```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 1. Define the thunk
export const fetchPosts = createAsyncThunk('posts/fetchAll', async () => {
  const res = await fetch('/api/posts');
  if (!res.ok) throw new Error('Fetch failed');
  return res.json();
});

// 2. Handle in slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
```

## Code Examples

```jsx
// Dispatch on mount
function PostList() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.posts);

  useEffect(() => { dispatch(fetchPosts()); }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  return <ul>{items.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```
