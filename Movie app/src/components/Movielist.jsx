import React, { useEffect, useState, useRef } from "react";
import "./Movielist.css";
import Moviecard from "./Moviecard";
import Largeview from "./Largeview";

function Movielist({ watchList, setWatchList, movieMap }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API}`
        );
        const data = await res.json();
        setMovies(data.results);
        const map = {};
        data.results.forEach((m) => (map[m.id] = m));
        movieMap.current = map;
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    }
    fetchMovies();
  }, []);

  const toggleWatchList = (id) => {
    setWatchList((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
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
  );
}

export default Movielist;
