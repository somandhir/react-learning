import React, { useEffect, useRef, useState } from "react";

function Grid() {
  const [grid, setGrid] = useState(new Array(3).fill(new Array(3).fill(false)));
  const queue = useRef([]);
  const timeoutRef = useRef([]);
  let handleClick = (rowIdx, colIdx) => {
    console.log("clicked : ", rowIdx, ",", colIdx);
    console.log(queue);
    
    if (grid[rowIdx][colIdx] || timeoutRef.current.length>0) return;
    queue.current.push({ rowIdx, colIdx });
    try {
      setGrid((prev) => {
        const ng = prev.map((row) => [...row]);
        ng[rowIdx][colIdx] = true;
        return ng;
      });
    } catch (e) {
      console.log("Error in click function : ", e);
    }
  };
  useEffect(() => {
    // console.log("useEffect fired", {
    //   gridSnapshot: JSON.stringify(grid),
    //   queueLength: queue.current.length,
    //   time: Date.now(),
    // });
    if (queue.current.length === 9) {
      for (let i = 0; i < 9; i++) {
        const tr = setTimeout(() => {
          setGrid((prev) => {
            let ng = prev.map((row) => [...row]);
            let r = queue.current.at(-1).rowIdx;
            let c = queue.current.at(-1).colIdx;
            queue.current.pop();
            ng[r][c] = false;
            return ng;
          });
          if(i===8){
            timeoutRef.current=[];
          }
        }, 1000 * (i + 1));
        timeoutRef.current.push(tr);
      }
    }
 
  }, [grid]);

  useEffect(() => {
  return () => {
    timeoutRef.current.forEach((t) => clearTimeout(t));
    timeoutRef.current = [];
  };
}, []);

  return (
    <>
      <div className="container">
        {grid.map((item, rowIdx) =>
          item.map((flag, colIdx) => (
            <div
              className={`box ${flag ? "active" : ""}`}
              key={`${rowIdx}-${colIdx}`}
              onClick={() => handleClick(rowIdx, colIdx)}
            ></div>
          ))
        )}
      </div>
    </>
  );
}

export default Grid;
