import React, { useState } from "react";
import "./Navbar.css";
import WatchListComp from "./WatchListComp";

function Navbar({
  setShowList,
  query,
  setQuery,
  setshowQueryResult,
  showList,
}) {
  let handleEnter = () => {
    if (!query) {
      setshowQueryResult(false);
    } else {
      setshowQueryResult(true);
    }
  };

  return (
    <div className="navbar">
      <div
        onClick={() => {
          setShowList(false);
          setshowQueryResult(false);
        }}
        className="title"
      >
        FilmFlare
      </div>
      <input
        type="text"
        value={query}
        placeholder="Search..."
        disabled={showList}
        onChange={(e) => {
          setQuery(e.target.value);
          setshowQueryResult(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleEnter();
          }
        }}
      />
      <div
        onClick={() => setShowList((prev) => !prev)}
        className="watchlist-btn"
      >
        Watchlist ❤️
      </div>
    </div>
  );
}

export default Navbar;
