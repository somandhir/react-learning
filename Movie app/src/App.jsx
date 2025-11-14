import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Movielist from "./components/Movielist";
import WatchListComp from "./components/WatchListComp";

function App() {
  const movieMap = useRef({});
  const [watchList, setWatchList] = useState(new Set());
  const [showList, setShowList] = useState(false);
  
  return (
    <>
      <Navbar
     
        setShowList={setShowList}
        />
      <main>
        {showList ? (
          <WatchListComp watchList={watchList} movieMap={movieMap} />
        ) : (
          <Movielist
          watchList={watchList}
          setWatchList={setWatchList}
          movieMap={movieMap}
          />
        )}
      </main>
    </>
  );
}

export default App;
