import React from "react";
import Moviecard from "./Moviecard";
import "./WatchListComp.css";
import Largeview from "./Largeview";

function WatchListComp({
  watchList,
  movieMap,
  selectedMovie,
  setSelectedMovie,
}) {
  const likedMovies = [];
  watchList.forEach((item) => {
    if (movieMap.current[item]) likedMovies.push(movieMap.current[item]);
  });

  return (
    <div className="watchlist-container">
      <h2>Liked Movies</h2>
      {likedMovies.length > 0 ? (
        <div className="watchlist-grid">
          {likedMovies.map((movie) => (
            <Moviecard
              showBtn={false}
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
      ) : (
        <p className="empty-text">No liked movies yet ❤️</p>
      )}
    </div>
  );
}

export default WatchListComp;
