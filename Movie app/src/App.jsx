import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Movielist from "./components/Movielist";
import WatchListComp from "./components/WatchListComp";
import SearchList from "./components/SearchList";

function App() {
  const movieMap = useRef({});
  const [watchList, setWatchList] = useState(new Set());
  const [showList, setShowList] = useState(false);
  const [query, setQuery] = useState("");
  const [showQueryResult, setshowQueryResult] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  console.log(watchList);

  return (
    <>
      <Navbar
        setShowList={setShowList}
        query={query}
        setQuery={setQuery}
        setshowQueryResult={setshowQueryResult}
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
            movieMap={movieMap}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        ) : (
          <Movielist
            watchList={watchList}
            setWatchList={setWatchList}
            movieMap={movieMap}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        )}
      </main>
    </>
  );
}

export default App;
