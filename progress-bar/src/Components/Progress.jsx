import React, { useEffect, useState } from "react";
import "./Progress.css";
function Progress() {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval running");
      setBar((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 5;
      });
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="container">
        <div
          style={{ transform: `translateX(-${100 - bar}%)` }}
          className="progress"
        ></div>
      </div>
    </div>
  );
}

export default Progress;
