import React, { useState } from "react";
import "./StarRating.css";
function StarRating({ total = 5 }) {
  const [stars, setStars] = useState(-1);
  const [hoverStars, setHoverStars] = useState(-1);
  return (
    <div className="container">
      {[...Array(total)].map((_, idx) => {
        let isSet = hoverStars == -1 ? idx <= stars : idx <= hoverStars;

        return (
          <div
            key={idx}
            className={isSet ? "star yl" : "star"}
            onClick={() => setStars(idx)}
            onMouseEnter={() => setHoverStars(idx)}
            onMouseLeave={() => setHoverStars(-1)}
          >
            ★
          </div>
        );
      })}
    </div>
  );
}

export default StarRating;
