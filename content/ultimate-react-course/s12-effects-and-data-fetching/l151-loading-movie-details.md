---
title: "Loading Movie Details"
lectureId: 151
section: 12
sectionTitle: "Effects and Data Fetching"
date: "2026-03-04"
tags: [react, useEffect, api, data-fetching, usepopcorn]
---

## 中文短总结

MovieDetails 组件：用 `useEffect` 和 `selectedId` 依赖获取单部电影详情（OMDB API `?i=` 端点）。解构 API 返回的各字段（Title、Year、Poster、Runtime、imdbRating、Plot 等）。显示电影海报、信息、评分、剧情简介。

## 中文长总结

### 数据获取
```jsx
function MovieDetails({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { Title, Year, Poster, Runtime, imdbRating, Plot, Released,
          Actors, Director, Genre } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(`...?i=${selectedId}`);
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  return (
    <div className="details">
      <header>
        <button onClick={onCloseMovie}>&larr;</button>
        <img src={Poster} alt={Title} />
        <div>
          <h2>{Title}</h2>
          <p>{Released} &bull; {Runtime}</p>
          <p>{Genre}</p>
          <p>⭐ {imdbRating} IMDb rating</p>
        </div>
      </header>
      <section>
        <p><em>{Plot}</em></p>
        <p>Starring {Actors}</p>
        <p>Directed by {Director}</p>
      </section>
    </div>
  );
}
```

## English Short Summary

MovieDetails component: useEffect with `[selectedId]` fetches single movie details from OMDB API (`?i=` endpoint). Destructure API response fields (Title, Year, Poster, Runtime, imdbRating, Plot, etc.). Renders movie poster, info, rating, and plot summary with loading state.
