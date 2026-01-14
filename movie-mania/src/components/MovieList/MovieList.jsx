import React, { useEffect, useState } from "react";
import _ from 'lodash'
import "./MovieList.css";
import MovieCard from "./MovieCard";

function MovieList({type, title}) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setfilteredMovies] = useState([]);
  const [minRating, setminRating] = useState(0);
  const [sort, setsort] = useState({
    by: "default",
    order: "asc",
  });
  useEffect(() => {
    fetchMovies();
  }, []);
  useEffect(() => {
    if(sort.by!=="default"){
      const sortedMovies = _.orderBy(filteredMovies,[sort.by],[sort.order]);
      setfilteredMovies(sortedMovies);
    }
  }, [sort])
  
  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=da6fb005aed00973b3a3baf9429dacc9`
    );
    const data = await res.json();
    setMovies(data.results);
    setfilteredMovies(data.results);
  };
  const filterMoviesfn = (rate) => {
    try {
      if (rate == minRating) {
        setminRating(0);
        setfilteredMovies(movies);
      } else {
        setminRating(rate);
        const filtered = movies.filter((movie) => {
          return movie.vote_average >= rate;
        });
        setfilteredMovies(filtered);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleSort = (e) => {
    const { name, value } = e.target;
    setsort((prev) => {
      return { ...prev, [name]: value };
    });
  }; 
  return (
    <div className="movieList" id={type}>
      <div className="movie_list_header">
        <h2 className="movie_list_heading">{title}</h2>
        <div className="movie_list_fs">
          <ul className="movie_filter">
            <li
              className={
                minRating === 8
                  ? "movie_filter_item active"
                  : "movie_filter_item"
              }
              onClick={() => filterMoviesfn(8)}
            >
              8+ star
            </li>
            <li
              className={
                minRating === 7
                  ? "movie_filter_item active"
                  : "movie_filter_item"
              }
              onClick={() => filterMoviesfn(7)}
            >
              7+ star
            </li>
            <li
              className={
                minRating === 6
                  ? "movie_filter_item active"
                  : "movie_filter_item"
              }
              onClick={() => filterMoviesfn(6)}
            >
              6+ star
            </li>
          </ul>
          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy(default)</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
