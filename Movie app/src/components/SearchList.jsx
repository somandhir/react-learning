import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import Largeview from "./Largeview";

function SearchList({
  query,
  watchList,
  setWatchList,
  setMovieMap,
  selectedMovie,
  setSelectedMovie,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${
        import.meta.env.VITE_TMDB_API
      }`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setMovieMap((prev) => {
          const nextMap = { ...prev };
          res.results.forEach((m) => (nextMap[m.id] = m));
          return nextMap;

        });
        
        
      });
  }, [query]);
  console.log(data);
  console.log(selectedMovie);

  const toggleWatchList = (id) => {
    setWatchList((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      console.log(newSet);

      return newSet;
    });
  };

  return (
    <div className="movie-list">
      {data.map((movie) => {
        return (
          <Moviecard
            showBtn={true}
            key={movie.id}
            movie={movie}
            select={() => setSelectedMovie(movie)}
            add={() => toggleWatchList(movie.id)}
            watchList={watchList}
          />
        );
      })}
      {selectedMovie && (
        <Largeview
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default SearchList;
