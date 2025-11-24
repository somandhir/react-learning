import React, { useEffect, useState, useRef } from "react";
import "./Movielist.css";
import Moviecard from "./Moviecard";
import Largeview from "./Largeview";

function Movielist({
  watchList,
  setWatchList,
  selectedMovie,
  setSelectedMovie,
  movies,
  pageNo,
  movieMap,
  setMovies,
  setPageNo,
  setMovieMap,
  lang,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const sentinalRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    async function fetchMovies() {
      if (isLoading) return;
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_TMDB_API
          }&page=${pageNo}`
        );
        const data = await res.json();
        setMovies((prev) => {
          const combined = [...prev, ...data.results];

          const unique = combined.filter(
            (m, index, arr) => arr.findIndex((x) => x.id === m.id) === index
          );

          return unique;
        });
        setMovieMap((prev) => {
          const nextMap = { ...prev };
          data.results.forEach((m) => (nextMap[m.id] = m));
          return nextMap;
        });

        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    }
    fetchMovies();
  }, [pageNo]);
  useEffect(() => {
    if (lang === "all") {
      setFiltered(movies);
      return;
    }

    const filteredList = movies.filter(
      (movie) => movie.original_language === lang
    );

    setFiltered(filteredList);

    if (filteredList.length === 0) {
      setPageNo((prev) => prev + 1);
    }
  }, [lang, movies]);

  const toggleWatchList = (id) => {
    setWatchList((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };
  useEffect(() => {
    if (!sentinalRef.current) return;

    observerRef.current = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !isLoading) {
        setPageNo((prev) => prev + 1);
      }
    });
    observerRef.current.observe(sentinalRef.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [isLoading]);

  return (
    <>
      <div className="movie-list">
        {lang === "all"
          ? movies.map((movie) => (
              <Moviecard
                showBtn={true}
                key={movie.id}
                movie={movie}
                select={() => setSelectedMovie(movie)}
                add={() => toggleWatchList(movie.id)}
                watchList={watchList}
              />
            ))
          : filtered.map((movie) => (
              <Moviecard
                showBtn={true}
                key={movie.id}
                movie={movie}
                select={() => setSelectedMovie(movie)}
                add={() => toggleWatchList(movie.id)}
                watchList={watchList}
              />
            ))}

        {selectedMovie && (
          <Largeview
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
      {filtered.length < 5 && pageNo < 500 && lang !== "all" && (
        <div className="hint">Scroll to load more movies…</div>
      )}

      <div ref={sentinalRef} style={{ height: "20px" }}></div>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            padding: "15px",
            fontSize: "18px",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              border: "3px solid #ccc",
              borderTopColor: "#333",
              borderRadius: "50%",
              animation: "spin 0.7s linear infinite",
            }}
          ></div>
          Loading...
        </div>
      )}
    </>
  );
}

export default Movielist;
