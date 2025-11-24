import React, { useState } from "react";
import "./Navbar.css";
import WatchListComp from "./WatchListComp";

function Navbar({
  setShowList,
  query,
  setQuery,
  setshowQueryResult,
  showList,
  lang,
  setLang,
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
      <div>
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
        <select
          className="lang-select"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="all">All Languages</option>

          <option value="hi">Hindi</option>
          <option value="en">English</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="ml">Malayalam</option>
          <option value="kn">Kannada</option>
          {/* <option value="mr">Marathi</option> */}
          <option value="bn">Bengali</option>
          <option value="pa">Punjabi</option>
          {/* <option value="gu">Gujarati</option> */}

          <option value="ko">Korean</option>
          <option value="ja">Japanese</option>
          <option value="zh">Chinese</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
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
