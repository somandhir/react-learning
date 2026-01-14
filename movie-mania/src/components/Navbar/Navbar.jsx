import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <h1>MovieMania</h1>
      <div className="navLinks">
        <a href="#popular">Popular</a>
        <a href="#top_rated">Top-rated</a>
        <a href="#upcoming">Upcoming</a>
      </div>
    </div>
  );
}

export default Navbar;

