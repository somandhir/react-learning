import React, { useEffect, useState } from "react";
import "./App.css";
let grid_size = 15;
let grid = new Array(grid_size);
for (let i = 0; i < grid.length; i++) {
  grid[i] = new Array(grid_size).fill("");
}
let inital_state = [
  [5, 4], // head
  [5, 3],
  [5, 2],
];

function App() {
  const [snakeBody, setsnakeBody] = useState(inital_state);
  const [direction, setdirection] = useState([0, 1]);
  const [food, setFood] = useState([10, 9]);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(200);
  const [maxScore, setMaxScore] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setsnakeBody((prev) => {
        let [current_head_i, current_head_j] = prev[0];

        let copy = prev.map((el) => [...el]);
        let new_head = [
          current_head_i + direction[0],
          current_head_j + direction[1],
        ];
        if (
          prev.some(([oi, oj]) => oi === new_head[0] && oj === new_head[1]) ||
          new_head[0] < 0 ||
          new_head[1] < 0 ||
          new_head[1] >= grid_size ||
          new_head[0] >= grid_size
        ) {
          setdirection([0, 1]);
          setSpeed(200);
          setScore(0);
          return inital_state;
        }
        if (new_head[0] === food[0] && new_head[1] === food[1]) {
          setScore((old) => {
            let newScore = old + 1;
            setMaxScore((prmx) => Math.max(prmx, newScore));
            console.log(old, newScore);

            if (newScore % 3 === 0) {
              setSpeed((s) => Math.max(10, s / 2));
            }

            return newScore;
          });

          let i = Math.floor(Math.random() * grid_size);
          let j = Math.floor(Math.random() * grid_size);
          while (snakeBody.some(([si, sj]) => si === i && sj === j)) {
            i = Math.floor(Math.random() * grid_size);
            j = Math.floor(Math.random() * grid_size);
          }
          setFood([i, j]);
        } else {
          copy.pop();
        }
        copy.unshift(new_head);
        return copy;
      });
    }, speed);
    let handleKeyDown = (key) => {   
      console.log(key.key);
      if (key.key === "ArrowDown" && direction[0] !== -1) {
        setdirection([1, 0]);
      } else if (key.key === "ArrowUp" && direction[0] !== 1) {
        setdirection([-1, 0]);
      } else if (key.key === "ArrowLeft" && direction[1] !== 1) {
        setdirection([0, -1]);
      } else if (key.key === "ArrowRight" && direction[1] !== -1) {
        setdirection([0, 1]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [direction, speed]);
  let isSnake = (i, j) => {
    return snakeBody.some(([si, sj]) => si === i && sj === j);
  };
  let isFood = (i, j) => {
    return food[0] == i && food[1] == j;
  };
  return (
    <>
      <div className="container">
        {grid.map((row, i) => {
          return row.map((col, j) => {
            return (
              <div
                key={`${i}-${j}`}
                className={`cell ${isSnake(i, j) ? "snake" : ""} ${
                  isFood(i, j) ? "food" : ""
                } `}
              ></div>
            );
          });
        })}
      </div>
      <div>Score : {score}</div>
      <div>Max Score : {maxScore}</div>
    </>
  );
}

export default App;
