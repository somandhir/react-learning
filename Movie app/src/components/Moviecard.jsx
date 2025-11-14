import React from "react";
import "./Moviecard.css";

function Moviecard({ showBtn, movie, select, add, watchList }) {
  if (!movie) return <div>Loading...</div>;

  const isAdded = watchList.has(movie.id);

  return (
    <div className="full-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="title">{movie.title}</div>
      <div className="rating">{movie.vote_average.toFixed(1)} ⭐</div>
      <div className="release_date">{movie.release_date}</div>
      <p>
        { movie.overview.slice(0, 100)}
        <span>...</span>
      </p>
      <button onClick={select}>Show Details</button>
      {showBtn && (
        <button className={isAdded ? "added" : ""} onClick={add}>
          {isAdded ? "❤️" : "🤍"} Like
        </button>
      )}
    </div>
  );
}

export default Moviecard;
