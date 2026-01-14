import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <MovieList type="popular" title="Popular" />
        <MovieList type="top_rated" title="Top Rated" />
        <MovieList type="upcoming" title="Upcoming" />
      </main>
    </div>
  );
}

export default App;
