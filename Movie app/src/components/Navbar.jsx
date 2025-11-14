import React, { useState } from "react";
import "./Navbar.css";
import WatchListComp from "./WatchListComp"; 

function Navbar({  setShowList }) {

  return (
    <div className="navbar">
      <div className="title">FilmFlare</div>
      <input type="text" placeholder="Search..." />
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
