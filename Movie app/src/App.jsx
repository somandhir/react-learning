import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Movielist from "./components/Movielist";
import WatchListComp from "./components/WatchListComp";
import SearchList from "./components/SearchList";

function App() {
  const [watchList, setWatchList] = useState(new Set());
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState("");
  const [showQueryResult, setshowQueryResult] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [movieMap, setMovieMap] = useState({});
  const [lang, setLang] = useState("all");

  return (
    <>
      <Navbar
        setShowList={setShowList}
        query={query}
        setQuery={setQuery}
        setshowQueryResult={setshowQueryResult}
        showList={showList}
        lang={lang}
        setLang={setLang}
      />
      <main>
        {showList ? (
          <WatchListComp
            watchList={watchList}
            movieMap={movieMap}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        ) : showQueryResult ? (
          <SearchList
            query={query}
            watchList={watchList}
            setWatchList={setWatchList}
            setMovieMap={setMovieMap}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        ) : (
          <Movielist
            watchList={watchList}
            setWatchList={setWatchList}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            movies={movies}
            pageNo={pageNo}
            movieMap={movieMap}
            setMovies={setMovies}
            setPageNo={setPageNo}
            setMovieMap={setMovieMap}
            lang={lang}
          />
        )}
      </main>
    </>
  );
}

export default App;
