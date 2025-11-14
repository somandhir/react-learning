import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./Largeview.css";

function Largeview({ movie, onClose }) {
  const [trailerKey, setTrailerKey] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch trailer
        const videoRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${import.meta.env.VITE_TMDB_API}`
        );
        const videoData = await videoRes.json();
        const trailer = videoData.results?.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        if (trailer) setTrailerKey(trailer.key);

        const detailRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${import.meta.env.VITE_TMDB_API}`
        );
        const detailData = await detailRes.json();
        setMovieDetails(detailData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, [movie?.id]);

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const onPlayerReady = (event) => {
    setPlayer(event.target);
  };

  const formatRuntime = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="fullPreview" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <div className="videoContainer">
          {trailerKey ? (
            <>
              <Youtube
                videoId={trailerKey}
                opts={{
                  playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    loop: 1,
                    playlist: trailerKey
                  }
                }}
                className="vidTrailer"
                onReady={onPlayerReady}
              />
              <div className="controls">
                <button className="muteBtn" onClick={toggleMute}>
                  {isMuted ? "🔇" : "🔊"}
                </button>
              </div>
            </>
          ) : (
            <img
              className="imagePoster"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </div>

        <div className="content">
          <h2>{movie.title}</h2>

          <div className="metaInfo">
            {movieDetails?.vote_average && (
              <div className="rating">
                <span className="star">★</span>
                <span>{movieDetails.vote_average.toFixed(1)}</span>
              </div>
            )}
            {movieDetails?.release_date && (
              <div className="year">
                {new Date(movieDetails.release_date).getFullYear()}
              </div>
            )}
            {movieDetails?.runtime && (
              <div className="runtime">
                {formatRuntime(movieDetails.runtime)}
              </div>
            )}
            {movieDetails?.original_language && (
              <div className="language">
                {movieDetails.original_language.toUpperCase()}
              </div>
            )}
          </div>

          {/* {movieDetails?.genres && movieDetails.genres.length > 0 && (
            <div className="genres">
              {movieDetails.genres.map((genre) => (
                <span key={genre.id} className="genre">
                  {genre.name}
                </span>
              ))}
            </div>
          )} */}

          <p className="overview">{movie.overview}</p>
{/* 
          {movieDetails && (
            <div className="additionalInfo">
              {movieDetails.budget > 0 && (
                <div className="infoItem">
                  <span className="infoLabel">Budget</span>
                  <span className="infoValue">{formatCurrency(movieDetails.budget)}</span>
                </div>
              )}
              {movieDetails.revenue > 0 && (
                <div className="infoItem">
                  <span className="infoLabel">Revenue</span>
                  <span className="infoValue">{formatCurrency(movieDetails.revenue)}</span>
                </div>
              )}
              {movieDetails.status && (
                <div className="infoItem">
                  <span className="infoLabel">Status</span>
                  <span className="infoValue">{movieDetails.status}</span>
                </div>
              )}
            </div>
          )} */}
        </div>

        <button className="closeBtn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}

export default Largeview;